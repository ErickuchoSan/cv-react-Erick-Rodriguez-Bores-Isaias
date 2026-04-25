import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Lazy-load the heavy PDF runtime + documents — only when dropdown opens.
const PdfMenu = lazy(() => import('./PdfMenu'));

interface Props { lang: 'es' | 'en' }

export function DownloadV3({ lang }: Props) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; width: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!open || !btnRef.current) return;
    const measure = () => {
      const r = btnRef.current!.getBoundingClientRect();
      setPos({ left: r.left, top: r.bottom + 8, width: Math.max(r.width, 260) });
    };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, true);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure, true);
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

  const t = lang === 'es'
    ? { cta: 'Descargar CV' }
    : { cta: 'Download CV' };

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        ref={btnRef}
        data-cursor={t.cta}
        aria-expanded={open}
        aria-haspopup="menu"
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
            <PdfMenu lang={lang} onClose={() => setOpen(false)} />
          </Suspense>
        </div>,
        document.body,
      )}
    </div>
  );
}
