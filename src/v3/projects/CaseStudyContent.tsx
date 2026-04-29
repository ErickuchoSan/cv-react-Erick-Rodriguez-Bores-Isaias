import type { ProjectV3 } from '../data';
import { CaseStudySection } from './CaseStudySection';

interface Props {
  project: ProjectV3;
  lang: 'es' | 'en';
}

const COPY = {
  es: {
    problem: 'problema', solution: 'solución', architecture: 'arquitectura',
    stack: 'stack', metrics: 'métricas', role: 'mi rol', demo: 'demo',
    demoMsg: 'Demo interactiva próximamente. Estoy preparando una versión genérica navegable para mostrar el flujo completo.',
    badge: 'Demo en construcción',
    backend: 'Backend', frontend: 'Frontend', infra: 'Infra', testing: 'Testing',
    openDemo: 'Abrir demo →',
  },
  en: {
    problem: 'problem', solution: 'solution', architecture: 'architecture',
    stack: 'stack', metrics: 'metrics', role: 'my role', demo: 'demo',
    demoMsg: 'Interactive demo coming soon. Preparing a generic navigable version to showcase the full flow.',
    badge: 'Demo in construction',
    backend: 'Backend', frontend: 'Frontend', infra: 'Infra', testing: 'Testing',
    openDemo: 'Open demo →',
  },
} as const;

export function CaseStudyContent({ project: p, lang }: Props) {
  const c = COPY[lang];
  const stackCats = ['backend', 'frontend', 'infra', 'testing'] as const;

  return (
    <div style={{ color: 'var(--fg)', maxWidth: 880, margin: '0 auto' }}>
      <header style={{ paddingBottom: 24 }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
          textTransform: 'uppercase', color: p.color, marginBottom: 14,
        }}>// case-study</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4.5vw, 56px)',
          lineHeight: 1.0, fontWeight: 300, fontStyle: 'italic',
          letterSpacing: '-0.03em', color: p.color, marginBottom: 14, marginTop: 0,
        }}>{p.name}</h2>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 12,
          letterSpacing: 1.4, color: 'var(--fg-muted)',
          textTransform: 'uppercase', marginBottom: 18,
        }}>{p.tagline}</div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 12px',
          background: 'var(--bg-2)',
          border: `1px dashed ${p.color}`,
          color: p.color,
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: 1.2, textTransform: 'uppercase',
        }}>
          🚧 {c.badge}
        </div>
      </header>

      <CaseStudySection prefix={c.problem} accent={p.color}>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg)', margin: 0 }}>{p.problem}</p>
      </CaseStudySection>

      <CaseStudySection prefix={c.solution} accent={p.color}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {p.solution.map((s, i) => (
            <li key={i} style={{
              display: 'flex', gap: 14, fontSize: 15.5, lineHeight: 1.6,
              paddingLeft: 8, borderLeft: `2px solid ${p.color}`,
            }}>
              <span style={{ color: p.color, fontFamily: 'var(--font-mono)', fontSize: 12 }}>→</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection prefix={c.architecture} accent={p.color}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {p.architecturePatterns.map((pat, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              padding: '6px 12px', border: `1px solid ${p.color}`,
              color: p.color, letterSpacing: 0.6,
            }}>{pat}</span>
          ))}
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14,
        }}>
          {p.highlights.map((h, i) => (
            <div key={i} style={{
              padding: 18, background: 'var(--bg-2)',
              border: '1px solid var(--line)', borderTop: `2px solid ${p.color}`,
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.4,
                textTransform: 'uppercase', color: p.color, marginBottom: 8,
              }}>{h.title}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg)' }}>{h.summary}</div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection prefix={c.stack} accent={p.color}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
          {stackCats.map((cat) => {
            const items = p.stack[cat];
            if (!items || items.length === 0) return null;
            return (
              <div key={cat}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.4,
                  textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 10,
                }}>{c[cat]}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {items.map((it, i) => (
                    <span key={i} style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      padding: '4px 10px', background: 'var(--bg-2)',
                      border: '1px solid var(--line)', color: 'var(--fg)',
                    }}>{it}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CaseStudySection>

      {p.metrics.length > 0 && (
        <CaseStudySection prefix={c.metrics} accent={p.color}>
          <div style={{
            display: 'grid', gridTemplateColumns: `repeat(${p.metrics.length}, 1fr)`,
            gap: 14, paddingTop: 8,
          }}>
            {p.metrics.map((m, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)',
                  fontWeight: 300, fontStyle: 'italic', color: p.color,
                  letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 6,
                }}>{m.value}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  letterSpacing: 1.4, textTransform: 'uppercase', color: 'var(--fg-muted)',
                }}>{m.label}</div>
              </div>
            ))}
          </div>
        </CaseStudySection>
      )}

      <CaseStudySection prefix={c.role} accent={p.color}>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2vw, 22px)',
          fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5, color: 'var(--fg)', margin: 0,
        }}>{p.role}</p>
      </CaseStudySection>

      <CaseStudySection prefix={c.demo} accent={p.color}>
        {p.demoStatus === 'live' && p.demoUrl ? (
          <a href={p.demoUrl} target="_blank" rel="noreferrer" style={{
            display: 'inline-block', padding: '14px 28px',
            background: p.color, color: '#000',
            fontFamily: 'var(--font-mono)', fontSize: 12,
            letterSpacing: 1.4, textTransform: 'uppercase',
            textDecoration: 'none',
          }}>{c.openDemo}</a>
        ) : (
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--fg-muted)', margin: 0 }}>
            🚧 {c.demoMsg}
          </p>
        )}
      </CaseStudySection>
    </div>
  );
}
