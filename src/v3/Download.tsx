import { lazy, Suspense, useEffect, useRef, useState } from 'react';

// Lazy-load the heavy PDF runtime + documents — only when dropdown opens.
const PdfMenu = lazy(() => import('./PdfMenu'));

interface Props { lang: 'es' | 'en' }

export function DownloadV3({ lang }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
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

      {open && (
        <Suspense fallback={null}>
          <PdfMenu lang={lang} onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
