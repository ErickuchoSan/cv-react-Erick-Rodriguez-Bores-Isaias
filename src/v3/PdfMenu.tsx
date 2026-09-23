import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocumentLeaf } from '../components/PDF/CVDocumentLeaf';
import { CVDocumentATS } from '../components/PDF/CVDocumentATS';
import type { PdfTheme } from '../components/PDF/leafStyles';
import type { Lang } from '../i18n/lang';
import { translations } from '../i18n/translations';

interface Props {
  lang: Lang;
  onClose: () => void;
  themeName: string;
  theme: PdfTheme;
  accent: string;
  accentLabel: string;
  fontLabel: string;
}

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

const noteStyle = {
  padding: '10px 18px',
  fontFamily: 'var(--font-mono)', fontSize: 10, lineHeight: 1.45,
  color: 'var(--fg-muted)',
  borderTop: '1px solid var(--line)',
  background: 'color-mix(in oklab, var(--bg) 92%, transparent)',
};

const wrapStyle = {
  minWidth: 260,
  background: 'var(--bg)',
  border: '1px solid var(--line-strong)',
  boxShadow: '0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px color-mix(in oklab, var(--accent) 12%, transparent)',
} as const;

const item = (label: string, loading: boolean, error: Error | null | undefined, flag: string, gen: string) => (
  <span style={{ display: 'flex', alignItems: 'center', gap: 10, pointerEvents: 'none' }}>
    <span style={{ color: 'var(--accent)', minWidth: 18 }}>{loading ? '◐' : error ? '⚠' : flag}</span>
    <span>{loading ? `${label} · ${gen}` : label}</span>
  </span>
);

export default function PdfMenu({ lang, onClose, themeName, theme, accent, accentLabel, fontLabel }: Props) {
  const t = translations[lang].download;

  return (
    <div role="menu" style={wrapStyle}>
      <div style={headerStyle}>{t.visual}</div>
      <div style={noteStyle}>
        <div style={{ marginBottom: 4, opacity: 0.7 }}>{t.themeNote}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--fg)' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: accent, border: '1px solid var(--line-strong)', flexShrink: 0 }} />
          <span style={{ textTransform: 'capitalize', fontWeight: 600 }}>{themeName}</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>{accentLabel}</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span style={{ fontStyle: 'italic' }}>{fontLabel}</span>
        </div>
      </div>
      <PDFDownloadLink document={<CVDocumentLeaf lang="es" theme={theme} accent={accent} />} fileName="CV_Erick_Rodriguez_ES.pdf" onClick={() => setTimeout(onClose, 600)} style={itemStyle} data-cursor="ES">
        {({ loading, error }) => item(t.es, loading, error, '🇲🇽', t.generating)}
      </PDFDownloadLink>
      <PDFDownloadLink document={<CVDocumentLeaf lang="en" theme={theme} accent={accent} />} fileName="CV_Erick_Rodriguez_EN.pdf" onClick={() => setTimeout(onClose, 600)} style={itemStyle} data-cursor="EN">
        {({ loading, error }) => item(t.en, loading, error, '🇺🇸', t.generating)}
      </PDFDownloadLink>

      <div style={headerStyle}>{t.ats}</div>
      <div style={noteStyle}>{t.atsNote}</div>
      <PDFDownloadLink document={<CVDocumentATS lang="es" />} fileName="CV_Erick_Rodriguez_ATS_ES.pdf" onClick={() => setTimeout(onClose, 600)} style={itemStyle} data-cursor="ATS">
        {({ loading, error }) => item(t.atsEs, loading, error, '🇲🇽', t.generating)}
      </PDFDownloadLink>
      <PDFDownloadLink document={<CVDocumentATS lang="en" />} fileName="CV_Erick_Rodriguez_ATS_EN.pdf" onClick={() => setTimeout(onClose, 600)} style={itemStyle} data-cursor="ATS">
        {({ loading, error }) => item(t.atsEn, loading, error, '🇺🇸', t.generating)}
      </PDFDownloadLink>
    </div>
  );
}
