import { Reveal, WordsMask } from '../primitives';
import { SectionHead, SectionTitle } from '../chrome';
import { translations } from '../../i18n/translations';

interface Props {
  lang: 'es' | 'en';
}

export function ClaudeEngineeringV3({ lang }: Props) {
  const t = translations[lang].claudeEngineering;

  return (
    <section id="claude-engineering" style={{
      padding: '180px 5vw', position: 'relative',
      background: 'var(--bg)',
    }}>
      <SectionHead num={t.num} label={t.label} hint={t.hint} />
      <SectionTitle>
        <WordsMask text={t.title1} step={60} />{' '}
        <em style={{ color: 'var(--accent)' }}>
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
        {t.capabilities.map((c, i) => (
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

      <Reveal delay={300}>
        <div style={{
          textAlign: 'center', padding: '24px 0',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(12px, 1.2vw, 16px)',
          letterSpacing: 1.6, textTransform: 'uppercase',
          color: 'var(--accent)', fontWeight: 500,
        }}>
          {t.stat}
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 900px) {
          .cce-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .cce-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
