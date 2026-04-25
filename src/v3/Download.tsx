import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { THEMES, ACCENT_OPTIONS, type ThemeName } from './theme';
import type { PdfTheme } from '../components/PDF/leafStyles';

const PdfMenu = lazy(() => import('./PdfMenu'));

interface Props {
  lang: 'es' | 'en';
  themeName: ThemeName;
  accent: string;
}

function toPdfTheme(name: ThemeName): PdfTheme {
  const th = THEMES[name];
  return {
    bg: th.bg, bg2: th.bg2, bg3: th.bg3,
    fg: th.fg, fgMuted: th.fgMuted, fgDim: th.fgDim,
    line: th.line, lineStrong: th.lineStrong,
    mode: th.mode,
  };
}

export function DownloadV3({ lang, themeName, accent }: Props) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; width: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!open || !btnRef.current) return;
    let raf = 0;
    const measure = () => {
      const r = btnRef.current!.getBoundingClientRect();
      const width = Math.min(Math.max(r.width, 280), window.innerWidth - 24);
      const left = Math.max(12, Math.min(r.left, window.innerWidth - width - 12));
      setPos({ left, top: r.bottom + 8, width });
    };
    measure();
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; measure(); });
    };
    window.addEventListener('resize', onScroll);
    window.addEventListener('scroll', onScroll, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('scroll', onScroll, true);
    };
  }, [open]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (ref.current && !ref.current.contains(t) && !document.getElementById('pdf-menu-portal')?.contains(t)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const prewarm = () => { import('./PdfMenu'); };

  const t = lang === 'es' ? { cta: 'Descargar CV' } : { cta: 'Download CV' };
  const accentLabel = ACCENT_OPTIONS.find((a) => a.value === accent)?.label ?? accent;
  const theme = THEMES[themeName];
  const fontLabel = theme.display === theme.sans
    ? `${theme.display} (sans)`
    : `${theme.display} + ${theme.sans}`;

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        ref={btnRef}
        data-cursor={t.cta}
        aria-expanded={open}
        aria-haspopup="menu"
        onMouseEnter={prewarm}
        onFocus={prewarm}
        onTouchStart={prewarm}
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '14px 24px',
          background: 'var(--bg)', color: 'var(--fg)',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
          textTransform: 'uppercase', fontWeight: 700,
          border: '1px solid var(--fg)',
        }}
      >
        ↓ {t.cta}
      </button>

      {open && pos && createPortal(
        <div
          id="pdf-menu-portal"
          style={{
            position: 'fixed',
            left: pos.left, top: pos.top, minWidth: pos.width,
            zIndex: 9999,
          }}
        >
          <Suspense fallback={null}>
            <PdfMenu
              lang={lang}
              onClose={() => setOpen(false)}
              themeName={theme.label}
              theme={toPdfTheme(themeName)}
              accent={accent}
              accentLabel={accentLabel}
              fontLabel={fontLabel}
            />
          </Suspense>
        </div>,
        document.body,
      )}
    </div>
  );
}
