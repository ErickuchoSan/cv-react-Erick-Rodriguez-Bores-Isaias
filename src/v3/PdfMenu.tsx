import { useEffect, useMemo, useRef, type KeyboardEvent, type ReactElement } from 'react';
import { usePDF, type DocumentProps } from '@react-pdf/renderer';
import { CVDocumentLeaf } from '../components/PDF/CVDocumentLeaf';
import { CVDocumentATS } from '../components/PDF/CVDocumentATS';
import type { PdfTheme } from '../components/PDF/leafStyles';
import type { Lang } from '../i18n/lang';
import { translations, type Translations } from '../i18n/translations';

/** Keeps the menu open long enough for the browser to start the download. */
const CLOSE_AFTER_DOWNLOAD_MS = 600;

/** Hover state of the custom cursor without a label: a label circle would cover the option text. */
const HOVER = '';

interface Props {
  lang: Lang;
  /** `returnFocus`: move focus back to the trigger (keyboard close / after a download). */
  onClose: (returnFocus: boolean) => void;
  themeName: string;
  theme: PdfTheme;
  accent: string;
  accentLabel: string;
  fontLabel: string;
}

const itemStyle = {
  display: 'block', width: '100%', padding: '12px 18px', textDecoration: 'none', textAlign: 'left',
  fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 0.6,
  color: 'var(--fg)', background: 'transparent',
  border: 'none', borderTop: '1px solid var(--line)',
  transition: 'background 0.2s',
} as const;

const headerStyle = {
  padding: '10px 18px',
  fontFamily: 'var(--font-mono)', fontSize: 9,
  letterSpacing: 2, textTransform: 'uppercase' as const,
  color: 'var(--accent-ink)',
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

interface PdfLinkProps {
  doc: ReactElement<DocumentProps>;
  fileName: string;
  label: string;
  flag: string;
  t: Translations['download'];
  onDownloaded: () => void;
}

/** Generates one PDF on mount; a failed generation turns into a retry button. */
function PdfLink({ doc, fileName, label, flag, t, onDownloaded }: PdfLinkProps) {
  const [instance, update] = usePDF();
  useEffect(() => { update(doc); }, [doc, update]);

  const icon = instance.loading ? '◐' : instance.error ? '⚠' : flag;
  const content = (text: string) => (
    <span style={{ display: 'flex', alignItems: 'center', gap: 10, pointerEvents: 'none' }}>
      <span aria-hidden="true" style={{ color: 'var(--accent-ink)', minWidth: 18 }}>{icon}</span>
      <span>{text}</span>
    </span>
  );

  if (instance.error) {
    return (
      <button type="button" style={{ ...itemStyle, cursor: 'pointer' }} data-cursor={HOVER} onClick={() => update(doc)}>
        {content(`${label} · ${t.failed}`)}
      </button>
    );
  }
  if (instance.loading || !instance.url) {
    return <span style={{ ...itemStyle, opacity: 0.7 }}>{content(`${label} · ${t.generating}`)}</span>;
  }
  return (
    <a href={instance.url} download={fileName} style={itemStyle} data-cursor={HOVER} onClick={onDownloaded}>
      {content(label)}
    </a>
  );
}

export default function PdfMenu({ lang, onClose, themeName, theme, accent, accentLabel, fontLabel }: Props) {
  const t = translations[lang].download;
  const rootRef = useRef<HTMLDivElement>(null);

  // Keyboard users land inside the menu (it's portaled to the end of <body>).
  useEffect(() => { rootRef.current?.focus(); }, []);

  // Tabbing past either end closes the menu and returns to the trigger instead of
  // jumping to the bottom of the page.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !rootRef.current) return;
    const items = [...rootRef.current.querySelectorAll<HTMLElement>('a[href], button')];
    const active = document.activeElement;
    const leavingBackward = e.shiftKey && (active === rootRef.current || active === items[0]);
    const leavingForward = !e.shiftKey && (items.length === 0 || active === items[items.length - 1]);
    if (leavingBackward || leavingForward) {
      e.preventDefault();
      onClose(true);
    }
  };

  const onDownloaded = () => { setTimeout(() => onClose(true), CLOSE_AFTER_DOWNLOAD_MS); };

  // Each PDF re-renders whenever its document element changes identity, so the elements
  // are rebuilt only when the theme or the accent actually change.
  const docs = useMemo(() => ({
    leafEs: <CVDocumentLeaf lang="es" theme={theme} accent={accent} />,
    leafEn: <CVDocumentLeaf lang="en" theme={theme} accent={accent} />,
    atsEs: <CVDocumentATS lang="es" />,
    atsEn: <CVDocumentATS lang="en" />,
  }), [theme, accent]);

  return (
    <div ref={rootRef} role="group" aria-label={t.cta} tabIndex={-1} onKeyDown={onKeyDown} style={{ ...wrapStyle, outline: 'none' }}>
      <div style={headerStyle}>{t.visual}</div>
      <div style={noteStyle}>
        <div style={{ marginBottom: 4, opacity: 0.7 }}>{t.themeNote}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--fg)' }}>
          <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: '50%', background: accent, border: '1px solid var(--line-strong)', flexShrink: 0 }} />
          <span style={{ textTransform: 'capitalize', fontWeight: 600 }}>{themeName}</span>
          <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
          <span>{accentLabel}</span>
          <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
          <span style={{ fontStyle: 'italic' }}>{fontLabel}</span>
        </div>
      </div>
      <PdfLink doc={docs.leafEs} fileName="CV_Erick_Rodriguez_ES.pdf"
        label={t.es} flag="🇲🇽" t={t} onDownloaded={onDownloaded} />
      <PdfLink doc={docs.leafEn} fileName="CV_Erick_Rodriguez_EN.pdf"
        label={t.en} flag="🇺🇸" t={t} onDownloaded={onDownloaded} />

      <div style={headerStyle}>{t.ats}</div>
      <div style={noteStyle}>{t.atsNote}</div>
      <PdfLink doc={docs.atsEs} fileName="CV_Erick_Rodriguez_ATS_ES.pdf"
        label={t.atsEs} flag="🇲🇽" t={t} onDownloaded={onDownloaded} />
      <PdfLink doc={docs.atsEn} fileName="CV_Erick_Rodriguez_ATS_EN.pdf"
        label={t.atsEn} flag="🇺🇸" t={t} onDownloaded={onDownloaded} />
    </div>
  );
}
