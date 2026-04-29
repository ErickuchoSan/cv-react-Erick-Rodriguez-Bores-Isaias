import { useState } from 'react';
import { Reveal, MaskReveal, WordsMask, Counter, Magnetic, Tilt, useInView } from './primitives';
import { SectionHead, SectionTitle } from './chrome';
import { TechIcon } from './TechIcon';
import type { CVData } from './data';

// ═══ ABOUT ════════════════════════════════════════════════════════════════
export function AboutV3({ data, lang }: { data: CVData; lang: 'es' | 'en' }) {
  const D = data;
  const t = lang === 'es'
    ? {
        hint: 'Background · filosofía · enfoque',
        title1: 'Transformando ideas en', title2: 'soluciones empresariales', title3: 'de alto impacto.',
        para1Lead: 'C', para1Tail: 'on ',
        para1Body: 'años construyendo arquitecturas con C#/.NET Core 6/8/10, React 19/Next.js 16, SQL Server/PostgreSQL y NestJS 11. Actualmente lidero el desarrollo de sistemas críticos en',
        para1End: 'y paralelo desarrollo la plataforma',
        align: 'Align Designs',
        para2: 'Me distingo por aplicar Clean Architecture, DDD, principios SOLID y desarrollo asistido por IA — optimizando cada línea con buenas prácticas de seguridad y performance.',
        statusLabel: 'Estado actual', available: 'Disponible',
        loc: 'UBICACIÓN', joinLabel: 'INCORPORACIÓN', joinValue: '3 – 7 días',
      }
    : {
        hint: 'Background · philosophy · approach',
        title1: 'Turning ideas into', title2: 'high-impact enterprise', title3: 'solutions.',
        para1Lead: 'W', para1Tail: 'ith ',
        para1Body: 'years building architectures with C#/.NET Core 6/8/10, React 19/Next.js 16, SQL Server/PostgreSQL and NestJS 11. Currently leading critical system development at',
        para1End: 'while building the',
        align: 'Align Designs',
        para2: 'I stand out for applying Clean Architecture, DDD, SOLID principles and AI-assisted development — optimizing every line with security and performance best practices.',
        statusLabel: 'Current status', available: 'Available',
        loc: 'LOCATION', joinLabel: 'JOIN-IN', joinValue: '3 – 7 days',
      };

  return (
    <section id="about" style={{ padding: '180px 5vw', position: 'relative' }}>
      <SectionHead num="02" label={lang === 'es' ? 'Sobre mí' : 'About'} hint={t.hint} />

      <div className="about-grid" style={{
        display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 100, alignItems: 'start',
      }}>
        <div>
          <SectionTitle>
            <WordsMask text={t.title1} step={60} />{' '}
            <em style={{ color: 'var(--accent)' }}>
              <WordsMask text={t.title2} step={60} delay={400} italic />
            </em>{' '}
            <WordsMask text={t.title3} step={60} delay={800} />
          </SectionTitle>

          <Reveal delay={200}>
            <p style={{
              fontSize: 19, lineHeight: 1.6, marginBottom: 24,
              color: 'var(--fg)', maxWidth: 640,
            }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: 72,
                fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)',
                float: 'left', lineHeight: 0.85, marginRight: 14, marginTop: 6,
              }}>{t.para1Lead}</span>
              {t.para1Tail}{D.years} {t.para1Body}{' '}
              <strong style={{ color: 'var(--accent)' }}>Grupo Salinas</strong>{' '}
              {t.para1End}{' '}
              <strong style={{ color: 'var(--accent)' }}>{t.align}</strong>.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-muted)', maxWidth: 640 }}>
              {t.para2}
            </p>
          </Reveal>
        </div>

        <Reveal delay={400} y={60}>
          <Tilt max={6}>
            <div style={{
              padding: 32, background: 'var(--bg-2)',
              border: '1px solid var(--accent)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: 1.6, textTransform: 'uppercase',
                color: 'var(--accent)', marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--success)',
                  boxShadow: '0 0 10px var(--success)',
                  animation: 'ping 2s infinite',
                }} />
                {t.statusLabel}
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 32, fontStyle: 'italic',
                fontWeight: 300, lineHeight: 1.1, marginBottom: 20,
              }}>{t.available}</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6, marginBottom: 24 }}>
                {D.availability}
              </div>
              <div style={{
                paddingTop: 20, borderTop: '1px solid var(--line)',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-muted)', letterSpacing: 1.2, marginBottom: 4 }}>{t.loc}</div>
                  <div style={{ fontSize: 13 }}>CDMX</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-muted)', letterSpacing: 1.2, marginBottom: 4 }}>{t.joinLabel}</div>
                  <div style={{ fontSize: 13 }}>{t.joinValue}</div>
                </div>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>

      <div className="stats-grid" style={{
        marginTop: 140, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        borderTop: '1px solid var(--line-strong)',
        borderBottom: '1px solid var(--line-strong)',
      }}>
        {D.stats.map((s, i) => {
          const num = parseFloat(s.k);
          const suffix = s.k.replace(/[0-9.]/g, '');
          return (
            <Reveal key={i} delay={i * 80}>
              <div data-cursor="" style={{
                padding: '48px 28px',
                borderRight: i < D.stats.length - 1 ? '1px solid var(--line-strong)' : 'none',
                transition: 'background 0.4s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,91,46,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(56px, 7vw, 120px)',
                  lineHeight: 1, fontWeight: 300, letterSpacing: '-0.04em',
                  color: 'var(--accent)', marginBottom: 12,
                }}>
                  <Counter value={num} suffix={suffix} duration={2200} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: 1.4, textTransform: 'uppercase',
                  color: 'var(--fg-muted)',
                }}>{s.v}</div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

// ═══ EXPERIENCE ═══════════════════════════════════════════════════════════
export function ExperienceV3({ data, lang }: { data: CVData; lang: 'es' | 'en' }) {
  const D = data;
  const [open, setOpen] = useState(0);
  const t = lang === 'es'
    ? { hint: `${D.years} años · 3 empresas`, t1: 'Trayectoria construyendo', t2: 'sistemas críticos', resp: '— Responsabilidades', ach: '★ Logros destacados' }
    : { hint: `${D.years} years · 3 companies`, t1: 'Career building', t2: 'critical systems', resp: '— Responsibilities', ach: '★ Key achievements' };

  return (
    <section id="experience" style={{
      padding: '180px 5vw', background: 'var(--bg-2)', position: 'relative',
    }}>
      <SectionHead num="03" label={lang === 'es' ? 'Experiencia' : 'Experience'} hint={t.hint} />
      <SectionTitle>
        <WordsMask text={t.t1} step={60} />{' '}
        <em style={{ color: 'var(--accent)' }}>
          <WordsMask text={t.t2} italic step={60} delay={400} />
        </em>.
      </SectionTitle>

      <div style={{ position: 'relative' }}>
        <div className="timeline-line" style={{
          position: 'absolute', left: 40, top: 30, bottom: 30, width: 1,
          background: 'linear-gradient(180deg, transparent, var(--accent) 20%, var(--accent) 80%, transparent)',
        }} />

        {D.experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 120}>
              <div className="timeline-row" style={{
                display: 'grid', gridTemplateColumns: '80px 1fr',
                gap: 24, marginBottom: 24, position: 'relative',
              }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'var(--bg-2)',
                    border: `2px solid ${isOpen ? 'var(--accent)' : 'var(--line-strong)'}`,
                    marginLeft: 27, marginTop: 26,
                    transition: 'all 0.3s',
                    boxShadow: isOpen ? '0 0 0 6px rgba(255,91,46,0.2)' : 'none',
                    position: 'relative',
                  }}>
                    {isOpen && (
                      <div style={{
                        width: '40%', height: '40%', borderRadius: '50%',
                        background: 'var(--accent)', margin: '28% auto',
                        boxShadow: '0 0 10px var(--accent)',
                      }} />
                    )}
                  </div>
                </div>

                <div
                  data-cursor={isOpen ? (lang === 'es' ? 'cerrar' : 'close') : (lang === 'es' ? 'abrir' : 'open')}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    background: isOpen ? 'var(--bg-3)' : 'var(--bg)',
                    border: `1px solid ${isOpen ? 'var(--accent)' : 'var(--line)'}`,
                    padding: 36,
                    transition: 'all 0.5s cubic-bezier(.2,.8,.2,1)',
                    boxShadow: isOpen ? '0 30px 80px rgba(0,0,0,0.35)' : 'none',
                  }}
                >
                  <div className="job-head" style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.4fr) 1fr 180px 40px',
                    gap: 24, alignItems: 'baseline',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(26px, 2.8vw, 42px)',
                      lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.025em',
                      fontStyle: isOpen ? 'italic' : 'normal',
                      color: isOpen ? 'var(--accent)' : 'var(--fg)',
                      transition: 'color 0.3s, font-style 0.3s',
                    }}>{job.role}</div>
                    <div style={{ fontSize: 15, color: 'var(--fg-muted)' }}>
                      {job.company}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10,
                      letterSpacing: 1.4, color: 'var(--fg-muted)', textAlign: 'right',
                    }}>
                      {job.period}<br />
                      <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{job.duration}</span>
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 26,
                      textAlign: 'right', color: 'var(--accent)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.5s cubic-bezier(.2,.8,.2,1)',
                      lineHeight: 1,
                    }}>+</div>
                  </div>

                  <div style={{
                    maxHeight: isOpen ? 1800 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.9s cubic-bezier(.2,.8,.2,1), margin-top 0.4s',
                    marginTop: isOpen ? 32 : 0,
                  }}>
                    <div style={{ maxWidth: 900 }}>
                      <p style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 22, lineHeight: 1.4, marginBottom: 28,
                        color: 'var(--fg)', fontWeight: 300,
                      }}>{job.summary}</p>

                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        letterSpacing: 1.6, textTransform: 'uppercase',
                        color: 'var(--fg-muted)', marginBottom: 12,
                      }}>{t.resp}</div>
                      <ul style={{ listStyle: 'none', marginBottom: 28, paddingLeft: 0 }}>
                        {job.bullets.map((b, j) => (
                          <li key={j} style={{ display: 'flex', gap: 14, fontSize: 14.5, lineHeight: 1.6, marginBottom: 10 }}>
                            <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 3 }}>→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {job.achievements.length > 0 && (
                        <>
                          <div style={{
                            fontFamily: 'var(--font-mono)', fontSize: 10,
                            letterSpacing: 1.6, textTransform: 'uppercase',
                            color: 'var(--accent)', marginBottom: 12,
                          }}>{t.ach}</div>
                          <ul style={{ listStyle: 'none', marginBottom: 28, paddingLeft: 0 }}>
                            {job.achievements.map((a, j) => (
                              <li key={j} style={{
                                display: 'flex', gap: 14, fontSize: 14.5, lineHeight: 1.55,
                                marginBottom: 10, padding: '12px 16px',
                                background: 'rgba(255,91,46,0.08)',
                                border: '1px solid rgba(255,91,46,0.25)',
                              }}>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 2, color: 'var(--accent)' }}>★</span>
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {job.stack.map((s, j) => (
                          <span key={j} style={{
                            fontFamily: 'var(--font-mono)', fontSize: 11,
                            padding: '7px 14px', border: '1px solid var(--line-strong)',
                            color: 'var(--fg)', letterSpacing: 0.6,
                            background: 'var(--bg)',
                          }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 760px) {
          .timeline-line { display: none; }
          .timeline-row { grid-template-columns: 1fr !important; }
          .timeline-row > :first-child { display: none; }
          .job-head { grid-template-columns: 1fr 40px !important; gap: 14px !important; }
          .job-head > :nth-child(2), .job-head > :nth-child(3) { display: none; }
        }
      `}</style>
    </section>
  );
}

// ═══ SKILLS ═══════════════════════════════════════════════════════════════
function LangBar({ pct }: { pct: number }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <div ref={ref as never} style={{ height: 4, background: 'var(--line)', position: 'relative' }}>
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: inView ? `${pct}%` : '0%',
        background: 'var(--accent)',
        transition: 'width 1.8s cubic-bezier(.2,.8,.2,1)',
      }} />
    </div>
  );
}

export function SkillsV3({ data, lang }: { data: CVData; lang: 'es' | 'en' }) {
  const D = data;
  const [active, setActive] = useState(0);
  const cats = Object.keys(D.skills);
  const t = lang === 'es'
    ? { hint: 'Tecnologías · Competencias · Idiomas', t1: 'Arsenal', t2: 'full stack', t3: 'completo.',
        compTitle: '— Competencias clave', langsTitle: '— Idiomas' }
    : { hint: 'Tech · Competencies · Languages', t1: 'Full', t2: 'stack', t3: 'arsenal.',
        compTitle: '— Key competencies', langsTitle: '— Languages' };

  return (
    <section id="skills" style={{ padding: '180px 5vw', position: 'relative' }}>
      <SectionHead num="04" label={lang === 'es' ? 'Stack técnico' : 'Tech stack'} hint={t.hint} />
      <SectionTitle>
        <WordsMask text={t.t1} step={60} />{' '}
        <em style={{ color: 'var(--accent)' }}>
          <WordsMask text={t.t2} italic step={60} delay={250} />
        </em>{' '}
        <WordsMask text={t.t3} step={60} delay={500} />
      </SectionTitle>

      <div style={{
        display: 'flex', borderBottom: '1px solid var(--line-strong)',
        marginBottom: 40, flexWrap: 'wrap',
      }}>
        {cats.map((cat, i) => (
          <button key={cat} data-cursor="ver"
            onClick={() => setActive(i)}
            style={{
              padding: '18px 26px', background: 'transparent', border: 'none',
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
              textTransform: 'uppercase',
              color: active === i ? 'var(--accent)' : 'var(--fg-muted)',
              borderBottom: active === i ? '2px solid var(--accent)' : '2px solid transparent',
              marginBottom: -1, transition: 'all 0.3s',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
            <span style={{ color: 'var(--fg-muted)' }}>0{i + 1}</span>
            {cat}
            <span style={{
              fontSize: 10, padding: '2px 8px',
              background: active === i ? 'var(--accent)' : 'var(--line)',
              color: active === i ? 'var(--bg)' : 'var(--fg-muted)',
            }}>{D.skills[cat].length}</span>
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 100 }}>
        {D.skills[cats[active]].map((s, i) => (
          <Reveal key={`${active}-${i}`} delay={i * 30} duration={700}>
            <Magnetic strength={0.15}>
              <div data-cursor="" style={{
                fontFamily: 'var(--font-mono)', fontSize: 13,
                padding: '12px 18px',
                border: '1px solid var(--line-strong)',
                background: 'var(--bg-2)',
                display: 'inline-flex', alignItems: 'center', gap: 10,
                color: 'var(--fg)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-2)'; e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.borderColor = 'var(--line-strong)'; }}>
                <span style={{ display: 'inline-flex', color: 'var(--accent)' }}>
                  <TechIcon name={s} size={16} />
                </span>
                {s}
              </div>
            </Magnetic>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
          textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 28,
        }}>{t.compTitle}</div>
      </Reveal>
      <div className="comp-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        border: '1px solid var(--line-strong)', marginBottom: 100,
      }}>
        {D.competencies.map((c, i) => (
          <Reveal key={i} delay={i * 50}>
            <div data-cursor="" style={{
              padding: '36px 28px',
              borderRight: (i % 3 !== 2) ? '1px solid var(--line-strong)' : 'none',
              borderBottom: i < D.competencies.length - 3 ? '1px solid var(--line-strong)' : 'none',
              transition: 'background 0.3s', height: '100%',
              position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'inherit'; }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.4, marginBottom: 14, opacity: 0.6 }}>0{i + 1}</div>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: 26,
                fontWeight: 300, marginBottom: 12, letterSpacing: '-0.01em',
                fontStyle: 'italic', lineHeight: 1.15,
              }}>{c.title}</h4>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, opacity: 0.8 }}>{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
          textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 28,
        }}>{t.langsTitle}</div>
      </Reveal>
      <div className="lang-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {D.languages.map((l, i) => (
          <Reveal key={i} delay={i * 100}>
            <Tilt max={5}>
              <div data-cursor="" style={{
                padding: 36, border: '1px solid var(--line-strong)',
                background: 'var(--bg-2)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 300, fontStyle: 'italic' }}>{l.lang}</h4>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: 1.4 }}>{l.pct}%</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--fg-muted)', letterSpacing: 1.4,
                  textTransform: 'uppercase', marginBottom: 20,
                }}>{l.level}</div>
                <LangBar pct={l.pct} />
                <ul style={{ listStyle: 'none', marginTop: 20, paddingLeft: 0 }}>
                  {l.details.map((d, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--fg-muted)', marginBottom: 6 }}>
                      <span style={{ color: 'var(--accent)' }}>·</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .comp-grid { grid-template-columns: 1fr !important; }
          .lang-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ═══ PROJECTS ═════════════════════════════════════════════════════════════
export function ProjectsV3({ data, lang }: { data: CVData; lang: 'es' | 'en' }) {
  const D = data;
  const [active, setActive] = useState(0);
  const t = lang === 'es'
    ? { label: 'Obra seleccionada', hint: `${D.projects.length} case studies`, t1: 'Proyectos que', t2: 'mueven números' }
    : { label: 'Selected work', hint: `${D.projects.length} case studies`, t1: 'Projects that', t2: 'move numbers' };

  return (
    <section id="projects" style={{
      padding: '180px 5vw', background: 'var(--bg-2)', position: 'relative',
    }}>
      <SectionHead num="05" label={t.label} hint={t.hint} />
      <SectionTitle>
        <WordsMask text={t.t1} step={60} />{' '}
        <em style={{ color: 'var(--accent)' }}>
          <WordsMask text={t.t2} italic step={60} delay={400} />
        </em>.
      </SectionTitle>

      <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {D.projects.map((p, i) => {
            const isActive = active === i;
            return (
              <Reveal key={i} delay={i * 80}>
                <div data-cursor="ver"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  style={{
                    padding: 28,
                    background: isActive ? 'var(--bg-3)' : 'var(--bg)',
                    border: `1px solid ${isActive ? p.color : 'var(--line)'}`,
                    transition: 'all 0.5s cubic-bezier(.2,.8,.2,1)',
                    transform: isActive ? 'translateX(16px)' : 'translateX(0)',
                    boxShadow: isActive ? `0 20px 60px ${p.color}40` : 'none',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 12 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: p.color, letterSpacing: 1.4 }}>◆ 0{i + 1}</span>
                    <span style={{ fontSize: 28, lineHeight: 1 }}>{p.icon}</span>
                    <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', letterSpacing: 1.4 }}>{p.year}</span>
                  </div>
                  <h4 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(22px, 2.2vw, 30px)',
                    lineHeight: 1.12, fontWeight: 300, letterSpacing: '-0.02em',
                    fontStyle: isActive ? 'italic' : 'normal',
                    color: isActive ? p.color : 'var(--fg)',
                    transition: 'all 0.4s', marginBottom: 6,
                  }}>{p.name}</h4>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: 'var(--fg-muted)', letterSpacing: 1.4, textTransform: 'uppercase',
                  }}>{p.kind}</div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="proj-preview" style={{
          position: 'sticky', top: 40, alignSelf: 'start',
          border: '1px solid var(--line-strong)', background: 'var(--bg)',
          padding: 48, minHeight: 520, overflow: 'hidden',
        }}>
          {D.projects.map((p, i) => (
            <div key={i} style={{
              position: active === i ? 'relative' : 'absolute',
              inset: active === i ? 'auto' : 48 as never,
              opacity: active === i ? 1 : 0,
              transform: active === i ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s, transform 0.6s',
              pointerEvents: active === i ? 'auto' : 'none',
            }}>
              <div style={{
                fontSize: 88, marginBottom: 24,
                filter: `drop-shadow(0 10px 30px ${p.color}60)`,
              }}>{p.icon}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: p.color, letterSpacing: 1.6,
                textTransform: 'uppercase', marginBottom: 14,
              }}>{p.kind} · {p.year}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 4.5vw, 64px)',
                lineHeight: 0.95, fontWeight: 300, letterSpacing: '-0.03em',
                marginBottom: 24, color: p.color, fontStyle: 'italic',
              }}>{p.name}</h3>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'var(--fg)', marginBottom: 32 }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.tags.map((tg, j) => (
                  <span key={j} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    padding: '7px 14px', border: `1px solid ${p.color}`,
                    color: p.color, letterSpacing: 0.6,
                  }}>{tg}</span>
                ))}
              </div>
            </div>
          ))}
          <div style={{
            position: 'absolute', right: -100, bottom: -100,
            width: 400, height: 400, borderRadius: '50%',
            background: `radial-gradient(circle, ${D.projects[active].color}35 0%, transparent 70%)`,
            transition: 'background 0.7s', pointerEvents: 'none', filter: 'blur(10px)',
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: 1fr !important; }
          .proj-preview { position: relative !important; top: auto !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}

// ═══ CONTACT ══════════════════════════════════════════════════════════════
export function ContactV3({ data, lang }: { data: CVData; lang: 'es' | 'en' }) {
  const D = data;
  const t = lang === 'es'
    ? { label: 'Contacto', hint: 'Construyamos algo juntos', t1: '¿Tienes un', t2: 'proyecto', t3: 'en mente?',
        directo: '— Directo', edu: '— Educación', red: '— En la red', phone: 'TELÉFONO', loc: 'UBICACIÓN',
        site: 'Sitio' }
    : { label: 'Contact', hint: 'Let’s build something', t1: 'Got a', t2: 'project', t3: 'in mind?',
        directo: '— Direct', edu: '— Education', red: '— Online', phone: 'PHONE', loc: 'LOCATION',
        site: 'Site' };

  return (
    <section id="contact" style={{ padding: '180px 5vw 80px', position: 'relative' }}>
      <SectionHead num="06" label={t.label} hint={t.hint} />

      <Reveal>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(60px, 12vw, 200px)',
          lineHeight: 0.85, letterSpacing: '-0.05em',
          fontWeight: 300, marginBottom: 50,
        }}>
          <WordsMask text={t.t1} step={60} />{' '}
          <em style={{ color: 'var(--accent)' }}><WordsMask text={t.t2} italic step={60} delay={300} /></em><br />
          <WordsMask text={t.t3} step={60} delay={600} />
        </h2>
      </Reveal>

      <Reveal delay={500}>
        <Magnetic strength={0.2}>
          <a href={`mailto:${D.email}`} data-cursor={lang === 'es' ? 'enviar' : 'send'} style={{
            display: 'inline-block', fontFamily: 'var(--font-display)',
            fontSize: 'clamp(30px, 5vw, 70px)', fontWeight: 300, fontStyle: 'italic',
            letterSpacing: '-0.025em',
            borderBottom: '1px solid var(--fg)', paddingBottom: 10, marginBottom: 100,
            transition: 'color 0.3s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg)'; }}>
            {D.email} <span style={{ display: 'inline-block', marginLeft: 10 }}>↗</span>
          </a>
        </Magnetic>
      </Reveal>

      <div className="contact-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 60,
        paddingTop: 60, borderTop: '1px solid var(--line-strong)',
      }}>
        <Reveal>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 20 }}>{t.directo}</div>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', marginBottom: 4, letterSpacing: 1.4 }}>{t.phone}</div>
              <a href={`tel:${D.phone}`} data-cursor={lang === 'es' ? 'llamar' : 'call'} style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic' }}>{D.phone}</a>
            </div>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', marginBottom: 4, letterSpacing: 1.4 }}>{t.loc}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic' }}>{D.location}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 20 }}>{t.edu}</div>
            {D.education.map((e, i) => (
              <div key={i} style={{ marginBottom: 22 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontStyle: 'italic', lineHeight: 1.2 }}>{e.title}</div>
                {e.place && <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>{e.place}</div>}
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)', marginTop: 4, letterSpacing: 1.2 }}>{e.period}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 20 }}>{t.red}</div>
            {[
              { label: 'GitHub', url: `https://${D.github}`, hint: '@ErickuchoSan' },
              { label: 'LinkedIn', url: `https://${D.linkedin}`, hint: 'in/erick-rodriguez-bores-isaias' },
            ].map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener" data-cursor={lang === 'es' ? 'abrir' : 'open'} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                padding: '14px 0', borderBottom: '1px dashed var(--line)',
                transition: 'color 0.3s, padding 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.paddingLeft = '8px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.paddingLeft = '0'; }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic' }}>{l.label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)' }}>{l.hint} ↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="footer-row" style={{
        marginTop: 140, paddingTop: 28, borderTop: '1px solid var(--line)',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.6,
        textTransform: 'uppercase', color: 'var(--fg-muted)', flexWrap: 'wrap', gap: 16,
      }}>
        <span>© MMXXVI — Erick Rodríguez Bores</span>
        <span>Full Stack Senior · CDMX</span>
        <span>v3.0 · eboresi.dev</span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-row { flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* Anchor for hidden MaskReveal */}
      <span style={{ display: 'none' }}><MaskReveal>x</MaskReveal></span>
    </section>
  );
}
