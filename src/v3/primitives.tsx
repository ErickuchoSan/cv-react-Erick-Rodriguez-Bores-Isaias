import {
  useEffect, useRef, useState,
  type CSSProperties, type ReactNode, type ElementType,
} from 'react';

const scrollListeners = new Set<(y: number, v: number) => void>();
let _lastY = 0;
let _ticking = false;
if (typeof window !== 'undefined') {
  const fire = () => {
    const y = window.scrollY;
    const v = y - _lastY;
    _lastY = y;
    scrollListeners.forEach((fn) => fn(y, v));
    _ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!_ticking) {
      _ticking = true;
      requestAnimationFrame(fire);
    }
  }, { passive: true });
}

export function useInView(opts: { threshold?: number; rootMargin?: string; once?: boolean } = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (opts.once !== false) io.unobserve(el);
          } else if (opts.once === false) {
            setInView(false);
          }
        });
      },
      { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? '0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [opts.threshold, opts.rootMargin, opts.once]);
  return [ref, inView] as const;
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
}

export function Reveal({
  children, delay = 0, y = 40, duration = 1200, as: Tag = 'div', style, className,
}: RevealProps) {
  const [ref, inView] = useInView({ threshold: 0.12 });
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        ...style,
        transform: inView ? 'translate3d(0,0,0)' : `translate3d(0,${y}px,0)`,
        opacity: inView ? 1 : 0,
        transition: `transform ${duration}ms cubic-bezier(.2,.8,.2,1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Tag>
  );
}

export function MaskReveal({
  children, delay = 0, duration = 1400, style,
}: { children: ReactNode; delay?: number; duration?: number; style?: CSSProperties }) {
  const [ref, inView] = useInView({ threshold: 0.25 });
  return (
    <span
      ref={ref as never}
      style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', ...style }}
    >
      <span
        style={{
          display: 'inline-block',
          transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0,105%,0)',
          transition: `transform ${duration}ms cubic-bezier(.19,1,.22,1) ${delay}ms`,
          willChange: 'transform',
        }}
      >
        {children}
      </span>
    </span>
  );
}

export function WordsMask({
  text, delay = 0, step = 80, duration = 1200, italic = false, style,
}: { text: string; delay?: number; step?: number; duration?: number; italic?: boolean; style?: CSSProperties }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const words = text.split(' ');
  return (
    <span ref={ref as never} style={style}>
      {words.map((w, i) => (
        <span key={i} style={{
          display: 'inline-block', overflow: 'hidden',
          verticalAlign: 'baseline', marginRight: '0.27em', lineHeight: 1,
        }}>
          <span style={{
            display: 'inline-block',
            fontStyle: italic ? 'italic' : 'inherit',
            transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0,110%,0)',
            transition: `transform ${duration}ms cubic-bezier(.19,1,.22,1) ${delay + i * step}ms`,
            willChange: 'transform',
          }}>{w}</span>
        </span>
      ))}
    </span>
  );
}

export function Counter({
  value, suffix = '', prefix = '', duration = 2000, decimals = 0, style,
}: { value: number; suffix?: string; prefix?: string; duration?: number; decimals?: number; style?: CSSProperties }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return <span ref={ref as never} style={style}>{prefix}{n.toFixed(decimals)}{suffix}</span>;
}

export function Magnetic({
  children, strength = 0.3, style,
}: { children: ReactNode; strength?: number; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;
    let rx = 0, ry = 0, tx = 0, ty = 0, raf = 0;
    const tick = () => {
      rx += (tx - rx) * 0.15;
      ry += (ty - ry) * 0.15;
      el.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) * strength;
      ty = (e.clientY - (r.top + r.height / 2)) * strength;
    };
    const onLeave = () => { tx = 0; ty = 0; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return <div ref={ref} style={{ display: 'inline-block', willChange: 'transform', ...style }}>{children}</div>;
}

export function Parallax({
  children, speed = 0.1, style,
}: { children: ReactNode; speed?: number; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;
    const fn = () => {
      const r = el.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      const delta = (mid - window.innerHeight / 2) * -speed;
      el.style.transform = `translate3d(0, ${delta}px, 0)`;
    };
    scrollListeners.add(fn); fn();
    return () => { scrollListeners.delete(fn); };
  }, [speed]);
  return <div ref={ref} style={{ willChange: 'transform', ...style }}>{children}</div>;
}

export function Tilt({
  children, max = 8, glare = false, style,
}: { children: ReactNode; max?: number; glare?: boolean; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1200px) rotateY(${px * max}deg) rotateX(${-py * max}deg)`;
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${(px + 0.5) * 100}% ${(py + 0.5) * 100}%, rgba(255,255,255,0.12), transparent 60%)`;
      }
    };
    const onLeave = () => {
      el.style.transform = 'perspective(1200px) rotateY(0) rotateX(0)';
      if (glareRef.current) glareRef.current.style.background = 'transparent';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [max]);
  return (
    <div
      ref={ref}
      style={{
        transition: 'transform 0.5s cubic-bezier(.2,.8,.2,1)',
        transformStyle: 'preserve-3d',
        position: 'relative',
        ...style,
      }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', transition: 'background 0.1s' }}
        />
      )}
    </div>
  );
}

export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setP(Math.min(1, Math.max(0, pct)));
    };
    scrollListeners.add(fn); fn();
    return () => { scrollListeners.delete(fn); };
  }, []);
  return p;
}
