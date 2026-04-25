import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocumentLeaf_ES } from '../components/PDF/CVDocumentLeaf_ES';
import { CVDocumentLeaf_EN } from '../components/PDF/CVDocumentLeaf_EN';
import { CVDocumentATS_ES } from '../components/PDF/CVDocumentATS_ES';
import { CVDocumentATS_EN } from '../components/PDF/CVDocumentATS_EN';

interface Props { lang: 'es' | 'en'; onClose: () => void }

const itemStyle = {
  display: 'block', padding: '12px 18px', textDecoration: 'none',
  fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 0.6,
  color: 'var(--fg)', borderTop: '1px solid var(--line)',
  transition: 'background 0.2s',
} as const;

const headerStyle = {
  padding: '10px 18px',
  fontFamily: 'var(--font-mono)', fontSize: 9,
  letterSpacing: 2, textTransform: 'uppercase' as const,
  color: 'var(--accent)',
  borderTop: '1px solid var(--line-strong)',
  background: 'color-mix(in oklab, var(--accent) 8%, transparent)',
};

const wrapStyle = {
  position: 'absolute', top: 'calc(100% + 8px)', left: 0,
  minWidth: 260, zIndex: 60,
  background: 'color-mix(in oklab, var(--bg) 92%, transparent)',
  backdropFilter: 'blur(24px) saturate(140%)',
  border: '1px solid var(--line-strong)',
  boxShadow: '0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px color-mix(in oklab, var(--accent) 12%, transparent)',
} as const;

const item = (label: string, loading: boolean, error: Error | null | undefined, flag: string, gen: string) => (
  <span style={{ display: 'flex', alignItems: 'center', gap: 10, pointerEvents: 'none' }}>
    <span style={{ color: 'var(--accent)', minWidth: 18 }}>{loading ? '◐' : error ? '⚠' : flag}</span>
    <span>{loading ? `${label} · ${gen}` : label}</span>
  </span>
);

export default function PdfMenu({ lang, onClose }: Props) {
  const t = lang === 'es'
    ? { visual: 'Diseño visual', ats: 'Formato ATS',
        es: 'Español', en: 'Inglés', atsEs: 'ATS Español', atsEn: 'ATS Inglés', gen: 'Generando…' }
    : { visual: 'Visual design', ats: 'ATS format',
        es: 'Spanish', en: 'English', atsEs: 'ATS Spanish', atsEn: 'ATS English', gen: 'Generating…' };

  return (
    <div role="menu" style={wrapStyle}>
      <div style={headerStyle}>{t.visual}</div>
      <PDFDownloadLink document={<CVDocumentLeaf_ES />} fileName="CV_Erick_Rodriguez_ES.pdf" onClick={onClose} style={itemStyle} data-cursor="ES">
        {({ loading, error }) => item(t.es, loading, error, '🇲🇽', t.gen)}
      </PDFDownloadLink>
      <PDFDownloadLink document={<CVDocumentLeaf_EN />} fileName="CV_Erick_Rodriguez_EN.pdf" onClick={onClose} style={itemStyle} data-cursor="EN">
        {({ loading, error }) => item(t.en, loading, error, '🇺🇸', t.gen)}
      </PDFDownloadLink>
      <div style={headerStyle}>{t.ats}</div>
      <PDFDownloadLink document={<CVDocumentATS_ES />} fileName="CV_Erick_Rodriguez_ATS_ES.pdf" onClick={onClose} style={itemStyle} data-cursor="ATS">
        {({ loading, error }) => item(t.atsEs, loading, error, '🇲🇽', t.gen)}
      </PDFDownloadLink>
      <PDFDownloadLink document={<CVDocumentATS_EN />} fileName="CV_Erick_Rodriguez_ATS_EN.pdf" onClick={onClose} style={itemStyle} data-cursor="ATS">
        {({ loading, error }) => item(t.atsEn, loading, error, '🇺🇸', t.gen)}
      </PDFDownloadLink>
    </div>
  );
}
