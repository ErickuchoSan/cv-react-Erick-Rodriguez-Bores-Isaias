import { useEffect, useRef, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../../data/model';
import type { Lang } from '../../i18n/lang';
import { translations } from '../../i18n/translations';

const CaseStudyContent = lazy(() =>
  import('./CaseStudyContent').then(m => ({ default: m.CaseStudyContent }))
);

interface Props {
  project: Project | null;
  lang: Lang;
  onClose: () => void;
}

export function ProjectModal({ project, lang, onClose }: Props) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const downOnBackdropRef = useRef(false);

  useEffect(() => {
    if (!project) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const raf = requestAnimationFrame(() => {
      closeBtnRef.current?.focus();
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'Tab' && sheetRef.current) {
        const focusables = sheetRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"]), input, select, textarea'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        const active = document.activeElement;
        if (e.shiftKey && active === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
      if (previouslyFocused && document.body.contains(previouslyFocused)) {
        previouslyFocused.focus?.();
      }
    };
  }, [project, onClose]);

  if (!project) return null;
  const t = translations[lang].caseStudy;

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    downOnBackdropRef.current = e.target === e.currentTarget;
  };
  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (downOnBackdropRef.current && e.target === e.currentTarget) {
      onClose();
    }
    downOnBackdropRef.current = false;
  };

  return createPortal(
    <div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`cs-title-${project.id}`}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: 'clamp(20px, 5vw, 60px)',
        overflowY: 'auto',
        animation: 'cs-fade-in 200ms ease',
      }}
    >
      <div
        ref={sheetRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 980,
          background: 'var(--bg)', border: '1px solid var(--line-strong)',
          padding: 'clamp(24px, 4vw, 56px)',
          position: 'relative',
          animation: 'cs-scale-in 200ms cubic-bezier(.2,.8,.2,1)',
        }}
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label={t.close}
          style={{
            position: 'absolute', top: 18, right: 18,
            width: 36, height: 36,
            background: 'transparent', border: '1px solid var(--line)',
            color: 'var(--fg)', cursor: 'pointer',
            fontSize: 18, lineHeight: 1,
          }}
        >×</button>
        <Suspense fallback={
          <div style={{
            padding: 80, textAlign: 'center',
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'var(--fg-muted)', letterSpacing: 1.4,
          }}>{t.loading}</div>
        }>
          <CaseStudyContent project={project} lang={lang} />
        </Suspense>
      </div>
    </div>,
    document.body
  );
}
