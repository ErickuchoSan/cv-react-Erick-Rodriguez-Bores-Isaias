import { useEffect, useRef, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocumentLeaf_ES } from '../components/PDF/CVDocumentLeaf_ES';
import { CVDocumentLeaf_EN } from '../components/PDF/CVDocumentLeaf_EN';
import { CVDocumentATS_ES } from '../components/PDF/CVDocumentATS_ES';
import { CVDocumentATS_EN } from '../components/PDF/CVDocumentATS_EN';

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
    ? { cta: 'Descargar CV', visual: 'Diseño visual', ats: 'Formato ATS',
        es: 'Español', en: 'Inglés', atsEs: 'ATS Español', atsEn: 'ATS Inglés', gen: 'Generando…' }
    : { cta: 'Download CV', visual: 'Visual design', ats: 'ATS format',
        es: 'Spanish', en: 'English', atsEs: 'ATS Spanish', atsEn: 'ATS English', gen: 'Generating…' };

  const itemStyle = {
    display: 'block', padding: '12px 18px', textDecoration: 'none',
    fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 0.6,
    color: 'var(--fg)',
    borderTop: '1px solid var(--line)',
    transition: 'background 0.2s, color 0.2s',
  } as const;

  const headerStyle = {
    padding: '10px 18px',
    fontFamily: 'var(--font-mono)', fontSize: 9,
    letterSpacing: 2, textTransform: 'uppercase' as const,
    color: 'var(--accent)',
    borderTop: '1px solid var(--line-strong)',
    background: 'color-mix(in oklab, var(--accent) 8%, transparent)',
  };

  const renderItem = (label: string, loading: boolean, error: Error | null | undefined, flag: string) => (
    <span
      style={{ display: 'flex', alignItems: 'center', gap: 10, pointerEvents: 'none' }}
      onMouseEnter={undefined}
    >
      <span style={{ color: 'var(--accent)', minWidth: 18 }}>{loading ? '◐' : error ? '⚠' : flag}</span>
      <span>{loading ? `${label} · ${t.gen}` : label}</span>
    </span>
  );

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

      <div
        role="menu"
        aria-hidden={!open}
        style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0,
          minWidth: 260, zIndex: 60,
          background: 'color-mix(in oklab, var(--bg) 92%, transparent)',
          backdropFilter: 'blur(24px) saturate(140%)',
          border: '1px solid var(--line-strong)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px color-mix(in oklab, var(--accent) 12%, transparent)',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s, transform 0.25s',
        }}
      >
        <div style={headerStyle}>{t.visual}</div>

        <PDFDownloadLink
          document={<CVDocumentLeaf_ES />}
          fileName="CV_Erick_Rodriguez_ES.pdf"
          onClick={() => setOpen(false)}
          style={itemStyle}
          data-cursor="ES"
        >
          {({ loading, error }) => renderItem(t.es, loading, error, '🇲🇽')}
        </PDFDownloadLink>

        <PDFDownloadLink
          document={<CVDocumentLeaf_EN />}
          fileName="CV_Erick_Rodriguez_EN.pdf"
          onClick={() => setOpen(false)}
          style={itemStyle}
          data-cursor="EN"
        >
          {({ loading, error }) => renderItem(t.en, loading, error, '🇺🇸')}
        </PDFDownloadLink>

        <div style={headerStyle}>{t.ats}</div>

        <PDFDownloadLink
          document={<CVDocumentATS_ES />}
          fileName="CV_Erick_Rodriguez_ATS_ES.pdf"
          onClick={() => setOpen(false)}
          style={itemStyle}
          data-cursor="ATS"
        >
          {({ loading, error }) => renderItem(t.atsEs, loading, error, '🇲🇽')}
        </PDFDownloadLink>

        <PDFDownloadLink
          document={<CVDocumentATS_EN />}
          fileName="CV_Erick_Rodriguez_ATS_EN.pdf"
          onClick={() => setOpen(false)}
          style={itemStyle}
          data-cursor="ATS"
        >
          {({ loading, error }) => renderItem(t.atsEn, loading, error, '🇺🇸')}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
