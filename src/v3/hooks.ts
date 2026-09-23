import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

// ─── Shared scroll frame ─────────────────────────────────────────────────
// One passive listener, throttled to animation frames, fans out to every subscriber.
const scrollListeners = new Set<() => void>();
let scrollTicking = false;
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      scrollTicking = false;
      scrollListeners.forEach((fn) => fn());
    });
  }, { passive: true });
}

export function onScrollFrame(fn: () => void): () => void {
  scrollListeners.add(fn);
  return () => { scrollListeners.delete(fn); };
}

// ─── Media queries ───────────────────────────────────────────────────────
/** Live media query: re-renders when it flips (resize, OS setting, input device). */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

/** Mouse-like pointer and no reduced-motion preference: pointer effects are welcome. */
export function usePointerEffects(): boolean {
  const fine = useMediaQuery('(pointer: fine)');
  const reduce = useReducedMotion();
  return fine && !reduce;
}

// ─── In-view ─────────────────────────────────────────────────────────────
interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
}

/** Reveal default: fire a bit before the element scrolls in. */
const REVEAL = { threshold: 0.01, rootMargin: '0px 0px 20% 0px' };

// One observer per option set, shared by every element that uses it.
const observers = new Map<string, IntersectionObserver>();
const callbacks = new WeakMap<Element, () => void>();

function observerFor(threshold: number, rootMargin: string): IntersectionObserver {
  const key = `${threshold}|${rootMargin}`;
  let io = observers.get(key);
  if (!io) {
    io = new IntersectionObserver((entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        obs.unobserve(entry.target);
      }
    }, { threshold, rootMargin });
    observers.set(key, io);
  }
  return io;
}

/** Becomes true the first time the element enters the viewport. */
export function useInView<T extends Element = HTMLElement>(options: InViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');
  const custom = options.threshold !== undefined || options.rootMargin !== undefined;
  const threshold = custom ? options.threshold ?? 0 : REVEAL.threshold;
  const rootMargin = custom ? options.rootMargin ?? '0px' : REVEAL.rootMargin;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = observerFor(threshold, rootMargin);
    callbacks.set(el, () => setInView(true));
    io.observe(el);
    return () => {
      io.unobserve(el);
      callbacks.delete(el);
    };
  }, [threshold, rootMargin]);

  return [ref, inView] as const;
}

// ─── Scroll progress ─────────────────────────────────────────────────────
function readScrollProgress(): number {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  return max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0;
}

function subscribeScrollProgress(onChange: () => void): () => void {
  const off = onScrollFrame(onChange);
  window.addEventListener('resize', onChange);
  return () => {
    off();
    window.removeEventListener('resize', onChange);
  };
}

/** 0 → 1 as the page scrolls. Only the component that reads it re-renders. */
export function useScrollProgress(): number {
  return useSyncExternalStore(subscribeScrollProgress, readScrollProgress, () => 0);
}
