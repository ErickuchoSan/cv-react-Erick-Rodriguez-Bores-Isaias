import { Reveal, WordsMask } from '../primitives';
import { SectionHead, SectionTitle } from '../chrome';
import type { CV } from '../../data/model';
import type { Lang } from '../../i18n/lang';
import { translations } from '../../i18n/translations';

interface Props {
  data: CV;
  lang: Lang;
  num: string;
}

export function ClaudeEngineeringV3({ data, lang, num }: Props) {
  const t = translations[lang].claudeEngineering;

  return (
    <section id="claude-engineering" style={{
      padding: '180px 5vw', position: 'relative',
      background: 'var(--bg)',
    }}>
      <SectionHead num={num} label={t.label} hint={t.hint} />
      <SectionTitle>
        <WordsMask text={t.title1} step={60} />{' '}
        <em style={{ color: 'var(--accent-ink)' }}>
          <WordsMask text={t.title2} italic step={60} delay={400} />
        </em>
      </SectionTitle>

      <Reveal delay={200}>
        <p style={{
          fontSize: 17, lineHeight: 1.7, color: 'var(--fg-muted)',
          maxWidth: 760, marginBottom: 60, marginTop: 24,
        }}>
          {t.paragraph}
        </p>
      </Reveal>

      <div className="cce-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16, marginBottom: 60,
      }}>
        {data.claude.capabilities.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <div style={{
              padding: 24, background: 'var(--bg-2)',
              border: '1px solid var(--line)',
              borderTop: '2px solid var(--accent)',
              minHeight: 140,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 18,
                fontWeight: 400, lineHeight: 1.2, marginBottom: 10,
                color: 'var(--fg)',
              }}>{c.title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--fg-muted)' }}>
                {c.desc}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="cce-framework" style={{
          display: 'grid', gridTemplateColumns: 'minmax(220px, 1fr) 2fr', gap: 48,
          padding: 'clamp(24px, 3vw, 40px)', marginBottom: 60,
          background: 'var(--bg-2)', border: '1px solid var(--line)',
          borderTop: '2px solid var(--accent)',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
              textTransform: 'uppercase', color: 'var(--accent-ink)', marginBottom: 18,
            }}>{t.frameworkLabel}</div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 7vw, 96px)',
              fontWeight: 300, fontStyle: 'italic', lineHeight: 0.9,
              letterSpacing: '-0.03em', color: 'var(--fg)',
            }}>{data.claude.framework.principles}</div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.4,
              textTransform: 'uppercase', color: 'var(--fg-muted)', marginTop: 12,
            }}>{t.frameworkUnit}</div>
          </div>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--fg)', margin: '0 0 22px' }}>
              {data.claude.framework.summary}
            </p>
            <ul aria-label={t.frameworkDomains} style={{
              listStyle: 'none', padding: 0, margin: 0,
              display: 'flex', flexWrap: 'wrap', gap: 8,
            }}>
              {data.claude.framework.domains.map((d) => (
                <li key={d} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.4,
                  padding: '6px 12px', border: '1px solid var(--line-strong)', color: 'var(--fg)',
                }}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div style={{
          textAlign: 'center', padding: '24px 0',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(12px, 1.2vw, 16px)',
          letterSpacing: 1.6, textTransform: 'uppercase',
          color: 'var(--accent-ink)', fontWeight: 500,
        }}>
          {data.claude.stat}
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 900px) {
          .cce-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cce-framework { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 520px) {
          .cce-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
