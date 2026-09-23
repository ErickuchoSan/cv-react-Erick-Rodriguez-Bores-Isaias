import { CaseStudySection } from './CaseStudySection';
import { STACK_GROUPS, type Project } from '../../data/model';
import type { Lang } from '../../i18n/lang';
import { translations } from '../../i18n/translations';

interface Props {
  project: Project;
  lang: Lang;
}

export function CaseStudyContent({ project: p, lang }: Props) {
  const c = translations[lang].caseStudy;
  const isLive = p.demo.status === 'live';

  return (
    <div style={{ color: 'var(--fg)', maxWidth: 880, margin: '0 auto' }}>
      <header style={{ paddingBottom: 24 }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
          textTransform: 'uppercase', color: p.color, marginBottom: 14,
        }}>// case-study</div>
        <h2 id={`cs-title-${p.id}`} style={{
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
          border: `1px ${isLive ? 'solid' : 'dashed'} ${p.color}`,
          color: p.color,
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: 1.2, textTransform: 'uppercase',
        }}>
          <span aria-hidden="true">{isLive ? '●' : '🚧'}</span>
          {isLive ? c.live : translations[lang].projects.demoInConstruction}
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
          {STACK_GROUPS.map((cat) => {
            const items = p.stack[cat];
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.4,
                  textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 10,
                }}>{c.stackGroups[cat]}</div>
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
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
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
        {p.demo.status === 'live' ? (
          <a href={p.demo.url} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', padding: '14px 28px',
            background: p.color, color: 'var(--bg)',
            fontFamily: 'var(--font-mono)', fontSize: 12,
            letterSpacing: 1.4, textTransform: 'uppercase',
            textDecoration: 'none',
          }}>{c.openDemo}</a>
        ) : (
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--fg-muted)', margin: 0 }}>
            <span aria-hidden="true">🚧 </span>{c.demoMsg}
          </p>
        )}
      </CaseStudySection>
    </div>
  );
}
