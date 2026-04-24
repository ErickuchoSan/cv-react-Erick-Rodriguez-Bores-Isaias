// ═══ v3 Primitives: advanced motion + interaction helpers ═══════════════
const { useEffect, useRef, useState, useMemo, useCallback } = React;

// ─── useScroll: global scroll Y + velocity ───────────────────────────────
const scrollListeners = new Set();
let _lastY = 0, _velocity = 0, _y = 0;
if (typeof window !== 'undefined') {
  let raf;
  const tick = () => {
    const y = window.scrollY;
    _velocity = y - _lastY;
    _lastY = y; _y = y;
    scrollListeners.forEach(fn => fn(y, _velocity));
    raf = requestAnimationFrame(tick);
  };
  tick();
}
function useScroll() {
  const [s, setS] = useState({ y: _y, v: 0 });
  useEffect(() => {
    const fn = (y, v) => setS({ y, v });
    scrollListeners.add(fn);
    return () => scrollListeners.delete(fn);
  }, []);
  return s;
}

// ─── useInView ───────────────────────────────────────────────────────────
function useInView(opts = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          if (opts.once !== false) io.unobserve(el);
        } else if (opts.once === false) {
          setInView(false);
        }
      });
    }, { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? '0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [opts.threshold, opts.rootMargin, opts.once]);
  return [ref, inView];
}

// ─── useMousePos: normalized -0.5..0.5 ────────────────────────────────────
function useMousePos() {
  const [p, setP] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const on = (e) => {
      setP({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    window.addEventListener('mousemove', on);
    return () => window.removeEventListener('mousemove', on);
  }, []);
  return p;
}

// ─── Reveal: soft slide-up with once-only ─────────────────────────────────
function Reveal({ children, delay = 0, y = 40, duration = 1200, as: Tag = 'div', style = {}, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.12 });
  return (
    <Tag ref={ref} style={{
      ...style,
      transform: inView ? 'translate3d(0,0,0)' : `translate3d(0,${y}px,0)`,
      opacity: inView ? 1 : 0,
      transition: `transform ${duration}ms cubic-bezier(.2,.8,.2,1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
      willChange: 'transform, opacity'
    }} {...rest}>{children}</Tag>
  );
}

// ─── Mask reveal: text rises from behind a mask ───────────────────────────
function MaskReveal({ children, delay = 0, duration = 1400, style = {} }) {
  const [ref, inView] = useInView({ threshold: 0.25 });
  return (
    <span ref={ref} style={{
      display: 'inline-block', overflow: 'hidden',
      verticalAlign: 'bottom', ...style
    }}>
      <span style={{
        display: 'inline-block',
        transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0,105%,0)',
        transition: `transform ${duration}ms cubic-bezier(.19,1,.22,1) ${delay}ms`,
        willChange: 'transform'
      }}>{children}</span>
    </span>
  );
}

// ─── Word-by-word mask reveal ─────────────────────────────────────────────
function WordsMask({ text, delay = 0, step = 80, duration = 1200, italic = false, className, style }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const words = text.split(' ');
  return (
    <span ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} style={{
          display: 'inline-block', overflow: 'hidden',
          verticalAlign: 'baseline', marginRight: '0.27em', lineHeight: 1
        }}>
          <span style={{
            display: 'inline-block',
            fontStyle: italic ? 'italic' : 'inherit',
            transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0,110%,0)',
            transition: `transform ${duration}ms cubic-bezier(.19,1,.22,1) ${delay + i * step}ms`,
            willChange: 'transform'
          }}>{w}</span>
        </span>
      ))}
    </span>
  );
}

// ─── Letter stagger with 3D rotation (for huge names) ─────────────────────
function Letters3D({ text, delay = 0, step = 40, style, className }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <span ref={ref} className={className} style={{ ...style, display: 'inline-block' }}>
      {text.split('').map((c, i) => (
        <span key={i} style={{
          display: 'inline-block',
          transformOrigin: 'center bottom',
          transform: inView
            ? 'translate3d(0,0,0) rotateX(0) scale(1)'
            : 'translate3d(0,50%,0) rotateX(-80deg) scale(0.9)',
          opacity: inView ? 1 : 0,
          transition: `transform 1400ms cubic-bezier(.19,1,.22,1) ${delay + i * step}ms, opacity 900ms ease ${delay + i * step}ms`,
          willChange: 'transform, opacity'
        }}>{c === ' ' ? '\u00A0' : c}</span>
      ))}
    </span>
  );
}

// ─── Counter with easing ──────────────────────────────────────────────────
function Counter({ value, suffix = '', prefix = '', duration = 2000, decimals = 0, style, className }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  const display = n.toFixed(decimals);
  return <span ref={ref} className={className} style={style}>{prefix}{display}{suffix}</span>;
}

// ─── Magnetic wrapper with rotation ───────────────────────────────────────
function Magnetic({ children, strength = 0.3, rotate = 0, style = {}, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rx = 0, ry = 0, tx = 0, ty = 0, raf;
    const tick = () => {
      rx += (tx - rx) * 0.15;
      ry += (ty - ry) * 0.15;
      el.style.transform = `translate3d(${rx}px,${ry}px,0) rotate(${rx * rotate}deg)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    const onMove = (e) => {
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
  }, [strength, rotate]);
  return (
    <div ref={ref} style={{ display: 'inline-block', willChange: 'transform', ...style }} {...rest}>
      {children}
    </div>
  );
}

// ─── Parallax ─────────────────────────────────────────────────────────────
function Parallax({ children, speed = 0.1, style = {}, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fn = () => {
      const r = el.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      const delta = (mid - window.innerHeight / 2) * -speed;
      el.style.transform = `translate3d(0, ${delta}px, 0)`;
    };
    scrollListeners.add(fn); fn();
    return () => scrollListeners.delete(fn);
  }, [speed]);
  return <div ref={ref} style={{ willChange: 'transform', ...style }} {...rest}>{children}</div>;
}

// ─── 3D Tilt ──────────────────────────────────────────────────────────────
function Tilt({ children, max = 8, glare = false, style = {}, ...rest }) {
  const ref = useRef(null);
  const glareRef = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
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
    <div ref={ref} style={{
      transition: 'transform 0.5s cubic-bezier(.2,.8,.2,1)',
      transformStyle: 'preserve-3d', position: 'relative', ...style
    }} {...rest}>
      {children}
      {glare && <div ref={glareRef} style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        transition: 'background 0.1s'
      }} />}
    </div>
  );
}

Object.assign(window, {
  useScroll, useInView, useMousePos,
  Reveal, MaskReveal, WordsMask, Letters3D, Counter,
  Magnetic, Parallax, Tilt
});
