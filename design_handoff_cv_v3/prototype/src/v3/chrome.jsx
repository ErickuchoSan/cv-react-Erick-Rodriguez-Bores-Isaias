// ═══ v3 Chrome: cursor, nav, progress bar, fixed UI ══════════════════════
const { useEffect, useRef, useState } = React;

// ─── Theme glyph: a per-theme SVG icon ───────────────────────────────────
function ThemeGlyph({ theme }) {
  const base = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (theme) {
    case 'noir':
      // crescent moon
      return (<svg {...base}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>);
    case 'paper':
      // full sun
      return (<svg {...base}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" /></svg>);
    case 'ivory':
      // coffee cup (warm cream)
      return (<svg {...base}><path d="M4 8h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z" /><path d="M17 10h2a2.5 2.5 0 0 1 0 5h-2" /><path d="M8 3c0 1 1 1.5 1 2.5S8 7 8 7M12 3c0 1 1 1.5 1 2.5S12 7 12 7" /></svg>);
    case 'slate':
      // water droplet
      return (<svg {...base}><path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" /><path d="M9 14a3 3 0 0 0 3 3" /></svg>);
    case 'forest':
      // pine tree
      return (<svg {...base}><path d="M12 3 6 11h3l-4 6h6v4h2v-4h6l-4-6h3Z" /></svg>);
    case 'linen':
      // woven linen weave
      return (<svg {...base}><path d="M3 7h18M3 12h18M3 17h18" /><path d="M7 3v18M12 3v18M17 3v18" opacity="0.5" /></svg>);
    case 'midnight':
      // stars cluster
      return (<svg {...base}><path d="M12 3v4M10 5h4M17 9v3M15.5 10.5h3M7 14v3M5.5 15.5h3" /><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" /><circle cx="18" cy="5" r=".8" fill="currentColor" stroke="none" /></svg>);
    default:
      return (<svg {...base}><circle cx="12" cy="12" r="4" /></svg>);
  }
}

// ─── Elegant cursor with contextual state ────────────────────────────────
function CursorV3() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [state, setState] = useState({ hover: false, label: '', mode: 'default' });

  useEffect(() => {
    const dot = dotRef.current, ring = ringRef.current;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my, dx = mx, dy = my;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove);
    let raf;
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
    const onOver = (e) => {
      const t = e.target.closest('[data-cursor]');
      if (t) {
        const mode = t.getAttribute('data-cursor-mode') || 'default';
        setState({ hover: true, label: t.getAttribute('data-cursor') || '', mode });
      } else {
        setState({ hover: false, label: '', mode: 'default' });
      }
    };
    document.addEventListener('mouseover', onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  const big = state.hover && state.label && state.label.length > 0;
  return (
    <>
      <div ref={dotRef} className="cursor" style={{
        position: 'fixed', top: 0, left: 0, zIndex: 10000, pointerEvents: 'none',
        width: big ? 0 : 6, height: big ? 0 : 6, borderRadius: '50%',
        background: 'var(--accent)', transition: 'width 0.2s, height 0.2s'
      }} />
      <div ref={ringRef} className="cursor" style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9998, pointerEvents: 'none',
        width: big ? 42 : (state.hover ? 30 : 24),
        height: big ? 42 : (state.hover ? 30 : 24),
        borderRadius: '50%',
        border: '1px solid var(--fg)',
        background: big ? 'var(--accent)' : 'transparent',
        color: big ? 'var(--bg)' : 'var(--fg)',
        opacity: state.hover ? 1 : 0.35,
        mixBlendMode: big ? 'normal' : 'difference',
        transition: 'width 0.3s cubic-bezier(.2,.8,.2,1), height 0.3s cubic-bezier(.2,.8,.2,1), background 0.25s, opacity 0.25s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontSize: 8, fontWeight: 600,
        letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap',
        padding: big ? '0 8px' : 0, boxSizing: 'border-box',
        borderColor: big ? 'var(--accent)' : 'var(--fg)'
      }}>
        {big ? state.label : ''}
      </div>
    </>
  );
}

// ─── Floating nav with liquid indicator ──────────────────────────────────
function NavV3({ active, sections, onNav }) {
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!navRef.current) return;
    const btn = navRef.current.querySelector(`[data-sid="${active}"]`);
    if (btn) {
      const r = btn.getBoundingClientRect();
      const nr = navRef.current.getBoundingClientRect();
      setIndicator({ left: r.left - nr.left, width: r.width });
    }
  }, [active]);

  return (
    <div style={{
      position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
      zIndex: 80, padding: '6px',
      background: 'color-mix(in oklab, var(--bg) 70%, transparent)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      border: '1px solid var(--line-strong)',
      borderRadius: 100,
      fontFamily: 'var(--font-mono)', fontSize: 11
    }} className="nav-v3">
      <div ref={navRef} style={{ display: 'flex', gap: 0, position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, bottom: 0,
          left: indicator.left, width: indicator.width,
          background: 'var(--accent)', borderRadius: 100,
          transition: 'left 0.45s cubic-bezier(.2,.8,.2,1), width 0.45s cubic-bezier(.2,.8,.2,1)',
          zIndex: 0
        }} />
        {sections.map(s => (
          <button key={s.id} data-sid={s.id} data-cursor="ir"
            onClick={() => onNav(s.id)}
            style={{
              position: 'relative', zIndex: 1, padding: '9px 18px',
              background: 'transparent', border: 'none',
              color: active === s.id ? 'var(--bg)' : 'var(--fg)',
              fontFamily: 'inherit', fontSize: 11, letterSpacing: 1.4,
              textTransform: 'uppercase', fontWeight: 600, cursor: 'none',
              transition: 'color 0.3s'
            }}>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Top-right corner tools: theme + clock ───────────────────────────────
function CornerTools({ theme, themeMode, onCycleTheme }) {
  const [clock, setClock] = useState('');
  useEffect(() => {
    const t = () => {
      const d = new Date();
      setClock(`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`);
    };
    t(); const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 28, right: 28, zIndex: 80,
      display: 'flex', gap: 10, alignItems: 'center',
      fontFamily: 'var(--font-mono)', fontSize: 11
    }} className="corner-tools">
      <div style={{
        padding: '9px 14px', letterSpacing: 1.4, textTransform: 'uppercase',
        color: 'var(--fg)',
        background: 'color-mix(in oklab, var(--bg) 70%, transparent)',
        backdropFilter: 'blur(24px)',
        border: '1px solid var(--line-strong)', borderRadius: 100,
        display: 'flex', alignItems: 'center', gap: 10
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: 'var(--success)', boxShadow: '0 0 8px var(--success)',
          animation: 'ping 2s infinite'
        }} />
        CDMX · {clock}
      </div>
      <button
        onClick={onCycleTheme}
        data-cursor="tema"
        style={{
          padding: 0, width: 38, height: 38,
          background: 'color-mix(in oklab, var(--bg) 70%, transparent)',
          backdropFilter: 'blur(24px)',
          border: '1px solid var(--line-strong)', borderRadius: '50%',
          color: 'var(--fg)', cursor: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
        <ThemeGlyph theme={theme} />
      </button>
    </div>
  );
}

// ─── Bottom HUD: scroll progress + section indicator ─────────────────────
function BottomHUD({ progress, active, sections }) {
  const currentIdx = sections.findIndex(s => s.id === active);
  return (
    <div style={{
      position: 'fixed', bottom: 24, left: 28, right: 28, zIndex: 70,
      display: 'flex', alignItems: 'center', gap: 24,
      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.4,
      textTransform: 'uppercase', color: 'var(--fg-muted)',
      pointerEvents: 'none'
    }} className="bottom-hud">
      <span style={{ color: 'var(--accent)' }}>● eboresi</span>
      <span style={{ color: 'var(--fg)' }}>
        {String(currentIdx + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
        <span style={{ color: 'var(--fg-muted)', marginLeft: 8 }}>
          {sections[currentIdx]?.label}
        </span>
      </span>
      <div style={{ flex: 1, height: 1, background: 'var(--line)', position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 0, top: -1, bottom: -1,
          width: `${progress * 100}%`,
          background: 'var(--accent)',
          transition: 'width 0.1s'
        }} />
      </div>
      <span>{Math.round(progress * 100)}%</span>
      <span>© MMXXVI</span>
    </div>
  );
}

// ─── Animated marquee band (larger, multi-layer) ─────────────────────────
function MarqueeV3({ items, reverse = false, speed = 50 }) {
  const full = [...items, ...items, ...items, ...items];
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      padding: '28px 0',
      background: 'var(--bg)',
      whiteSpace: 'nowrap',
      position: 'relative'
    }}>
      <div style={{
        display: 'inline-flex',
        animation: `marquee-${reverse ? 'r' : 'f'} ${speed}s linear infinite`,
        gap: 60,
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(44px, 7vw, 96px)',
        fontWeight: 300, letterSpacing: '-0.025em'
      }}>
        {full.map((it, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 60 }}>
            <span style={{ fontStyle: i % 2 === 0 ? 'italic' : 'normal', color: i % 3 === 0 ? 'var(--accent)' : 'var(--fg)' }}>{it}</span>
            <span style={{ width: 14, height: 14, background: 'var(--accent)', borderRadius: '50%', display: 'inline-block' }} />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-f { from { transform: translateX(0) } to { transform: translateX(-25%) } }
        @keyframes marquee-r { from { transform: translateX(-25%) } to { transform: translateX(0) } }
      `}</style>
    </div>
  );
}

// ─── Section header ──────────────────────────────────────────────────────
function SectionHead({ num, label, hint }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 72,
      flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 11,
      letterSpacing: 1.6, textTransform: 'uppercase'
    }}>
      <span style={{ color: 'var(--accent)' }}>
        <span style={{ display: 'inline-block', width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', marginRight: 10, transform: 'translateY(-2px)' }} />
        {num} / {label}
      </span>
      <div style={{ flex: 1, height: 1, background: 'var(--line-strong)', minWidth: 40 }} />
      {hint && <span style={{ color: 'var(--fg-muted)' }}>{hint}</span>}
    </div>
  );
}

// ─── Section title block (the big H2) ───────────────────────────────────
function SectionTitle({ children, style = {}, maxWidth = 1100 }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(40px, 6.5vw, 96px)',
      lineHeight: 0.98, letterSpacing: '-0.035em', fontWeight: 300,
      marginBottom: 64, maxWidth, textWrap: 'balance',
      ...style
    }}>{children}</h2>
  );
}

Object.assign(window, { CursorV3, NavV3, CornerTools, BottomHUD, MarqueeV3, SectionHead, SectionTitle });
