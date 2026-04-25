import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';
import type { ThemeName } from './theme';

// ─── Cursor ──────────────────────────────────────────────────────────────
export function CursorV3() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ hover: false, label: '' });

  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    const dot = dotRef.current, ring = ringRef.current;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my, dx = mx, dy = my;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove);
    let raf = 0;
    const tick = () => {
      dx += (mx - dx) * 0.5;
      dy += (my - dy) * 0.5;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (dot) dot.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`;
      if (ring) ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest?.('[data-cursor]');
      if (t) {
        setState({ hover: true, label: t.getAttribute('data-cursor') || '' });
      } else {
        setState({ hover: false, label: '' });
      }
    };
    document.addEventListener('mouseover', onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  const big = state.hover && state.label.length > 0;
  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 10000, pointerEvents: 'none',
        width: big ? 0 : 6, height: big ? 0 : 6, borderRadius: '50%',
        background: 'var(--accent)', transition: 'width 0.2s, height 0.2s',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9998, pointerEvents: 'none',
        width: big ? 56 : (state.hover ? 30 : 24),
        height: big ? 56 : (state.hover ? 30 : 24),
        borderRadius: '50%',
        border: `1px solid ${big ? 'var(--accent)' : 'var(--fg)'}`,
        background: big ? 'var(--accent)' : 'transparent',
        color: big ? 'var(--bg)' : 'var(--fg)',
        opacity: state.hover ? 1 : 0.35,
        mixBlendMode: big ? 'normal' : 'difference',
        transition: 'width 0.3s cubic-bezier(.2,.8,.2,1), height 0.3s cubic-bezier(.2,.8,.2,1), background 0.25s, opacity 0.25s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontSize: 8, fontWeight: 600,
        letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap',
        padding: big ? '0 8px' : 0, boxSizing: 'border-box',
      }}>
        {big ? state.label : ''}
      </div>
    </>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────
interface Section { id: string; label: string }
export function NavV3({ active, sections, onNav }: { active: string; sections: Section[]; onNav: (id: string) => void }) {
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!navRef.current) return;
    const btn = navRef.current.querySelector(`[data-sid="${active}"]`) as HTMLElement | null;
    if (btn) {
      const r = btn.getBoundingClientRect();
      const nr = navRef.current.getBoundingClientRect();
      setIndicator({ left: r.left - nr.left, width: r.width });
    }
  }, [active]);

  return (
    <div style={{
      position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
      zIndex: 80, padding: 6,
      background: 'color-mix(in oklab, var(--bg) 70%, transparent)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      border: '1px solid var(--line-strong)',
      borderRadius: 100, fontFamily: 'var(--font-mono)', fontSize: 11,
    }}>
      <div ref={navRef} style={{ display: 'flex', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, bottom: 0,
          left: indicator.left, width: indicator.width,
          background: 'var(--accent)', borderRadius: 100,
          transition: 'left 0.45s cubic-bezier(.2,.8,.2,1), width 0.45s cubic-bezier(.2,.8,.2,1)',
          zIndex: 0,
        }} />
        {sections.map((s) => (
          <button key={s.id} data-sid={s.id} data-cursor="ir"
            onClick={() => onNav(s.id)}
            style={{
              position: 'relative', zIndex: 1, padding: '9px 18px',
              background: 'transparent', border: 'none',
              color: active === s.id ? 'var(--bg)' : 'var(--fg)',
              fontFamily: 'inherit', fontSize: 11, letterSpacing: 1.4,
              textTransform: 'uppercase', fontWeight: 600,
              transition: 'color 0.3s',
            }}>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Theme glyph ─────────────────────────────────────────────────────────
function ThemeGlyph({ theme }: { theme: ThemeName }) {
  const base = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (theme) {
    case 'noir': return (<svg {...base}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>);
    case 'paper': return (<svg {...base}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" /></svg>);
    case 'ivory': return (<svg {...base}><path d="M4 8h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z" /><path d="M17 10h2a2.5 2.5 0 0 1 0 5h-2" /></svg>);
    case 'slate': return (<svg {...base}><path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" /></svg>);
    case 'forest': return (<svg {...base}><path d="M12 3 6 11h3l-4 6h6v4h2v-4h6l-4-6h3Z" /></svg>);
    case 'linen': return (<svg {...base}><path d="M3 7h18M3 12h18M3 17h18" /><path d="M7 3v18M12 3v18M17 3v18" opacity="0.5" /></svg>);
    case 'midnight': return (<svg {...base}><path d="M12 3v4M10 5h4M17 9v3M15.5 10.5h3M7 14v3M5.5 15.5h3" /><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" /></svg>);
  }
}

// ─── CornerTools ─────────────────────────────────────────────────────────
export function CornerTools({ theme, onCycleTheme, onCycleAccent, onToggleLang, lang }: {
  theme: ThemeName;
  onCycleTheme: () => void;
  onCycleAccent: () => void;
  onToggleLang: () => void;
  lang: 'es' | 'en';
}) {
  const [clock, setClock] = useState('');
  useEffect(() => {
    const t = () => {
      const d = new Date();
      setClock(`${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`);
    };
    t(); const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, []);

  const pillStyle: CSSProperties = {
    padding: '9px 14px', letterSpacing: 1.4, textTransform: 'uppercase',
    color: 'var(--fg)',
    background: 'color-mix(in oklab, var(--bg) 70%, transparent)',
    backdropFilter: 'blur(24px)',
    border: '1px solid var(--line-strong)', borderRadius: 100,
    display: 'flex', alignItems: 'center', gap: 10,
  };

  return (
    <div style={{
      position: 'fixed', top: 28, right: 28, zIndex: 80,
      display: 'flex', gap: 10, alignItems: 'center',
      fontFamily: 'var(--font-mono)', fontSize: 11, flexWrap: 'wrap',
    }}>
      <div style={pillStyle}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: 'var(--success)', boxShadow: '0 0 8px var(--success)',
          animation: 'ping 2s infinite',
        }} />
        CDMX · {clock}
      </div>
      <button onClick={onToggleLang} data-cursor={lang === 'es' ? 'EN' : 'ES'} style={{
        ...pillStyle, padding: 0, width: 38, height: 38, borderRadius: '50%',
        justifyContent: 'center', fontWeight: 700,
      }}>{lang.toUpperCase()}</button>
      <button onClick={onCycleAccent} data-cursor="acento" style={{
        ...pillStyle, padding: 0, width: 38, height: 38, borderRadius: '50%',
        justifyContent: 'center',
      }}>
        <span style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--accent)' }} />
      </button>
      <button onClick={onCycleTheme} data-cursor="tema" style={{
        ...pillStyle, padding: 0, width: 38, height: 38, borderRadius: '50%',
        justifyContent: 'center',
      }}>
        <ThemeGlyph theme={theme} />
      </button>
    </div>
  );
}

// ─── Bottom HUD ──────────────────────────────────────────────────────────
export function BottomHUD({ progress, active, sections }: { progress: number; active: string; sections: Section[] }) {
  const idx = sections.findIndex((s) => s.id === active);
  return (
    <div style={{
      position: 'fixed', bottom: 24, left: 28, right: 28, zIndex: 70,
      display: 'flex', alignItems: 'center', gap: 24,
      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.4,
      textTransform: 'uppercase', color: 'var(--fg-muted)',
      pointerEvents: 'none', flexWrap: 'wrap',
    }}>
      <span style={{ color: 'var(--accent)' }}>● eboresi</span>
      <span style={{ color: 'var(--fg)' }}>
        {String(idx + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
        <span style={{ color: 'var(--fg-muted)', marginLeft: 8 }}>
          {sections[idx]?.label}
        </span>
      </span>
      <div style={{ flex: 1, minWidth: 60, height: 1, background: 'var(--line)', position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 0, top: -1, bottom: -1,
          width: `${progress * 100}%`,
          background: 'var(--accent)', transition: 'width 0.1s',
        }} />
      </div>
      <span>{Math.round(progress * 100)}%</span>
    </div>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────────
export function MarqueeV3({ items, reverse = false, speed = 50 }: { items: string[]; reverse?: boolean; speed?: number }) {
  const full = [...items, ...items, ...items, ...items];
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      padding: '28px 0', background: 'var(--bg)',
      whiteSpace: 'nowrap', position: 'relative',
    }}>
      <div style={{
        display: 'inline-flex',
        animation: `marquee-${reverse ? 'r' : 'f'} ${speed}s linear infinite`,
        gap: 60, fontFamily: 'var(--font-display)',
        fontSize: 'clamp(44px, 7vw, 96px)',
        fontWeight: 300, letterSpacing: '-0.025em',
      }}>
        {full.map((it, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 60 }}>
            <span style={{
              fontStyle: i % 2 === 0 ? 'italic' : 'normal',
              color: i % 3 === 0 ? 'var(--accent)' : 'var(--fg)',
            }}>{it}</span>
            <span style={{ width: 14, height: 14, background: 'var(--accent)', borderRadius: '50%', display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── SectionHead ─────────────────────────────────────────────────────────
export function SectionHead({ num, label, hint }: { num: string; label: string; hint?: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 72,
      flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 11,
      letterSpacing: 1.6, textTransform: 'uppercase',
    }}>
      <span style={{ color: 'var(--accent)' }}>
        <span style={{
          display: 'inline-block', width: 6, height: 6,
          background: 'var(--accent)', borderRadius: '50%',
          marginRight: 10, transform: 'translateY(-2px)',
        }} />
        {num} / {label}
      </span>
      <div style={{ flex: 1, height: 1, background: 'var(--line-strong)', minWidth: 40 }} />
      {hint && <span style={{ color: 'var(--fg-muted)' }}>{hint}</span>}
    </div>
  );
}

// ─── SectionTitle ────────────────────────────────────────────────────────
export function SectionTitle({ children, style, maxWidth = 1100 }: { children: ReactNode; style?: CSSProperties; maxWidth?: number }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(40px, 6.5vw, 96px)',
      lineHeight: 0.98, letterSpacing: '-0.035em', fontWeight: 300,
      marginBottom: 64, maxWidth, textWrap: 'balance',
      ...style,
    }}>{children}</h2>
  );
}
