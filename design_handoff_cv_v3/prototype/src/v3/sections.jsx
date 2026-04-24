// ═══ v3 SECTIONS: About + Experience + Skills + Projects + Contact ═══════
const { useEffect, useRef, useState } = React;

// ═══ ABOUT V3 ════════════════════════════════════════════════════════════
function AboutV3() {
  const D = window.DATA;
  return (
    <section id="about" data-screen-label="02 About" style={{ padding: '180px 5vw', position: 'relative' }}>
      <SectionHead num="02" label="Sobre mí" hint="Background · filosofía · enfoque" />

      <div style={{
        display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 100, alignItems: 'start'
      }} className="about-v3-grid">
        <div>
          <SectionTitle>
            <WordsMask text="Transformando ideas en" step={60} />{' '}
            <em style={{ color: 'var(--accent)' }}>
              <WordsMask text="soluciones empresariales" step={60} delay={400} italic />
            </em>{' '}
            <WordsMask text="de alto impacto." step={60} delay={800} />
          </SectionTitle>

          <Reveal delay={200}>
            <p style={{
              fontSize: 19, lineHeight: 1.6, marginBottom: 24,
              color: 'var(--fg)', textWrap: 'pretty', maxWidth: 640
            }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: 72,
                fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)',
                float: 'left', lineHeight: 0.85, marginRight: 14, marginTop: 6
              }}>C</span>
              on {D.years} años construyendo arquitecturas con C#/.NET Core 6/8/10, React 19/Next.js 15, SQL Server/PostgreSQL y NestJS 11. Actualmente lidero el desarrollo de sistemas críticos de auditoría interna en <strong style={{ color: 'var(--accent)' }}>Grupo Salinas</strong> y paralelo desarrollo la plataforma <strong style={{ color: 'var(--accent)' }}>Align Designs</strong> con arquitectura monorepo profesional.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-muted)', maxWidth: 640, textWrap: 'pretty' }}>
              Me distingo por aplicar Clean Architecture, DDD, principios SOLID y desarrollo asistido por IA — optimizando cada línea con buenas prácticas de seguridad y performance.
            </p>
          </Reveal>
        </div>

        {/* Availability card */}
        <Reveal delay={400} y={60}>
          <Tilt max={6}>
            <div style={{
              padding: 32, background: 'var(--bg-2)',
              border: '1px solid var(--accent)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.35)'
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: 1.6, textTransform: 'uppercase',
                color: 'var(--accent)', marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 10
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--success)',
                  boxShadow: '0 0 10px var(--success)',
                  animation: 'ping 2s infinite'
                }} />
                Estado actual
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 32, fontStyle: 'italic',
                fontWeight: 300, lineHeight: 1.1, marginBottom: 20
              }}>Disponible</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6, marginBottom: 24 }}>
                {D.availability}
              </div>
              <div style={{
                paddingTop: 20, borderTop: '1px solid var(--line)',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-muted)', letterSpacing: 1.2, marginBottom: 4 }}>UBICACIÓN</div>
                  <div style={{ fontSize: 13 }}>CDMX</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-muted)', letterSpacing: 1.2, marginBottom: 4 }}>INCORPORACIÓN</div>
                  <div style={{ fontSize: 13 }}>3-7 días</div>
                </div>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>

      {/* Stats band */}
      <div style={{
        marginTop: 140, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        borderTop: '1px solid var(--line-strong)', borderBottom: '1px solid var(--line-strong)'
      }} className="stats-v3">
        {D.stats.map((s, i) => {
          const num = parseFloat(s.k);
          const suffix = s.k.replace(/[0-9.]/g, '');
          return (
            <Reveal key={i} delay={i * 80}>
              <div style={{
                padding: '48px 28px',
                borderRight: i < D.stats.length - 1 ? '1px solid var(--line-strong)' : 'none',
                transition: 'background 0.4s', cursor: 'none'
              }}
              data-cursor=""
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,91,46,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(56px, 7vw, 120px)',
                  lineHeight: 1, fontWeight: 300, letterSpacing: '-0.04em',
                  color: 'var(--accent)', marginBottom: 12
                }}>
                  <Counter value={num} suffix={suffix} duration={2200} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: 1.4, textTransform: 'uppercase',
                  color: 'var(--fg-muted)'
                }}>{s.v}</div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-v3-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-v3 { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-v3 > * > div { border-right: none !important; border-bottom: 1px solid var(--line-strong); }
        }
      `}</style>
    </section>
  );
}

// ═══ EXPERIENCE V3 ═══════════════════════════════════════════════════════
function ExperienceV3() {
  const D = window.DATA;
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" data-screen-label="03 Experience" style={{
      padding: '180px 5vw', background: 'var(--bg-2)', position: 'relative'
    }}>
      <SectionHead num="03" label="Experiencia" hint={`${D.years} años · 3 empresas`} />

      <SectionTitle>
        <WordsMask text="Trayectoria construyendo" step={60} />{' '}
        <em style={{ color: 'var(--accent)' }}>
          <WordsMask text="sistemas críticos" italic step={60} delay={400} />
        </em>.
      </SectionTitle>

      <div style={{ position: 'relative' }}>
        {/* Timeline vertical line */}
        <div style={{
          position: 'absolute', left: 40, top: 30, bottom: 30,
          width: 1, background: 'linear-gradient(180deg, transparent, var(--accent) 20%, var(--accent) 80%, transparent)'
        }} className="timeline-line-v3" />

        {D.experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 120}>
              <div style={{
                display: 'grid', gridTemplateColumns: '80px 1fr',
                gap: 24, marginBottom: 24, position: 'relative'
              }} className="timeline-row-v3">
                {/* Dot */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'var(--bg-2)',
                    border: `2px solid ${isOpen ? 'var(--accent)' : 'var(--line-strong)'}`,
                    marginLeft: 27, marginTop: 26,
                    transition: 'all 0.3s',
                    boxShadow: isOpen ? '0 0 0 6px rgba(255,91,46,0.2)' : 'none',
                    position: 'relative'
                  }}>
                    {isOpen && <div style={{
                      width: '40%', height: '40%', borderRadius: '50%',
                      background: 'var(--accent)', margin: '28% auto',
                      boxShadow: '0 0 10px var(--accent)'
                    }} />}
                  </div>
                </div>

                <div
                  data-cursor={isOpen ? "cerrar" : "abrir"}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    background: isOpen ? 'var(--bg-3)' : 'var(--bg)',
                    border: `1px solid ${isOpen ? 'var(--accent)' : 'var(--line)'}`,
                    padding: 36,
                    transition: 'all 0.5s cubic-bezier(.2,.8,.2,1)',
                    cursor: 'none',
                    boxShadow: isOpen ? '0 30px 80px rgba(0,0,0,0.35)' : 'none'
                  }}
                >
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.4fr) 1fr 180px 40px',
                    gap: 24, alignItems: 'baseline'
                  }} className="job-head-v3">
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(26px, 2.8vw, 42px)',
                        lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.025em',
                        fontStyle: isOpen ? 'italic' : 'normal',
                        color: isOpen ? 'var(--accent)' : 'var(--fg)',
                        transition: 'color 0.3s, font-style 0.3s'
                      }}>{job.role}</div>
                    </div>
                    <div style={{ fontSize: 15, color: 'var(--fg-muted)' }}>
                      {job.company}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10,
                      letterSpacing: 1.4, color: 'var(--fg-muted)', textAlign: 'right'
                    }}>
                      {job.period}<br/>
                      <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{job.duration}</span>
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 26,
                      textAlign: 'right', color: 'var(--accent)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.5s cubic-bezier(.2,.8,.2,1)',
                      lineHeight: 1
                    }}>+</div>
                  </div>

                  <div style={{
                    maxHeight: isOpen ? 1800 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.9s cubic-bezier(.2,.8,.2,1), margin-top 0.4s',
                    marginTop: isOpen ? 32 : 0
                  }}>
                    <div style={{ maxWidth: 900 }}>
                      <p style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 22, lineHeight: 1.4, marginBottom: 28,
                        color: 'var(--fg)', textWrap: 'pretty', fontWeight: 300
                      }}>{job.summary}</p>

                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        letterSpacing: 1.6, textTransform: 'uppercase',
                        color: 'var(--fg-muted)', marginBottom: 12
                      }}>— Responsabilidades</div>
                      <ul style={{ listStyle: 'none', marginBottom: 28 }}>
                        {job.bullets.map((b, j) => (
                          <li key={j} style={{
                            display: 'flex', gap: 14, fontSize: 14.5,
                            lineHeight: 1.6, marginBottom: 10
                          }}>
                            <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 3 }}>→</span>
                            <span style={{ textWrap: 'pretty' }}>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {job.achievements && (
                        <>
                          <div style={{
                            fontFamily: 'var(--font-mono)', fontSize: 10,
                            letterSpacing: 1.6, textTransform: 'uppercase',
                            color: 'var(--accent)', marginBottom: 12
                          }}>★ Logros destacados</div>
                          <ul style={{ listStyle: 'none', marginBottom: 28 }}>
                            {job.achievements.map((a, j) => (
                              <li key={j} style={{
                                display: 'flex', gap: 14, fontSize: 14.5,
                                lineHeight: 1.55, marginBottom: 10,
                                padding: '12px 16px',
                                background: 'rgba(255,91,46,0.08)',
                                border: '1px solid rgba(255,91,46,0.25)'
                              }}>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 2, color: 'var(--accent)' }}>★</span>
                                <span style={{ textWrap: 'pretty' }}>{a}</span>
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
                            background: 'var(--bg)'
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
          .timeline-line-v3 { display: none; }
          .timeline-row-v3 { grid-template-columns: 1fr !important; }
          .timeline-row-v3 > :first-child { display: none; }
          .job-head-v3 { grid-template-columns: 1fr 40px !important; gap: 14px !important; }
          .job-head-v3 > :nth-child(2), .job-head-v3 > :nth-child(3) { display: none; }
        }
      `}</style>
    </section>
  );
}

// ═══ SKILLS V3 ═══════════════════════════════════════════════════════════
function SkillsV3() {
  const D = window.DATA;
  const [active, setActive] = useState(0);
  const cats = Object.keys(D.skills);

  return (
    <section id="skills" data-screen-label="04 Skills" style={{
      padding: '180px 5vw', position: 'relative'
    }}>
      <SectionHead num="04" label="Stack técnico" hint="Tecnologías · Competencias · Idiomas" />

      <SectionTitle>
        <WordsMask text="Arsenal" step={60} />{' '}
        <em style={{ color: 'var(--accent)' }}>
          <WordsMask text="full stack" italic step={60} delay={250} />
        </em>{' '}
        <WordsMask text="completo." step={60} delay={500} />
      </SectionTitle>

      {/* Tabs */}
      <div style={{
        display: 'flex', gap: 0, borderBottom: '1px solid var(--line-strong)',
        marginBottom: 40, flexWrap: 'wrap'
      }}>
        {cats.map((cat, i) => (
          <button key={cat} data-cursor="ver"
            onClick={() => setActive(i)}
            style={{
              padding: '18px 26px', background: 'transparent', border: 'none',
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
              textTransform: 'uppercase', cursor: 'none',
              color: active === i ? 'var(--accent)' : 'var(--fg-muted)',
              borderBottom: active === i ? '2px solid var(--accent)' : '2px solid transparent',
              marginBottom: -1, transition: 'all 0.3s',
              display: 'flex', alignItems: 'center', gap: 10
            }}>
            <span style={{ color: 'var(--fg-muted)' }}>0{i+1}</span>
            {cat}
            <span style={{
              fontSize: 10, padding: '2px 8px',
              background: active === i ? 'var(--accent)' : 'var(--line)',
              color: active === i ? 'var(--bg)' : 'var(--fg-muted)'
            }}>{D.skills[cat].length}</span>
          </button>
        ))}
      </div>

      {/* Active category as big skill grid */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 100
      }}>
        {D.skills[cats[active]].map((s, i) => (
          <Reveal key={`${active}-${i}`} delay={i * 30} duration={700}>
            <Magnetic strength={0.15}>
              <div data-cursor="" style={{
                fontFamily: 'var(--font-mono)', fontSize: 13,
                padding: '12px 18px',
                border: '1px solid var(--line-strong)',
                background: 'var(--bg-2)', cursor: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 10,
                color: 'var(--fg)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-2)'; e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.borderColor = 'var(--line-strong)'; }}>
                <span style={{ display: 'inline-flex', color: 'var(--accent)' }}>
                  <TechIcon name={s} size={16} />
                </span>
                {s}
              </div>
            </Magnetic>
          </Reveal>
        ))}
      </div>

      {/* Competencies grid */}
      <Reveal>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
          textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 28
        }}>— Competencias clave</div>
      </Reveal>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        border: '1px solid var(--line-strong)', marginBottom: 100
      }} className="comp-grid-v3">
        {D.competencies.map((c, i) => (
          <Reveal key={i} delay={i * 50}>
            <div style={{
              padding: '36px 28px',
              borderRight: (i % 3 !== 2) ? '1px solid var(--line-strong)' : 'none',
              borderBottom: i < D.competencies.length - 3 ? '1px solid var(--line-strong)' : 'none',
              transition: 'background 0.3s', cursor: 'none', height: '100%',
              position: 'relative', overflow: 'hidden'
            }}
            data-cursor=""
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.color = 'var(--bg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'inherit';
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.4, marginBottom: 14, opacity: 0.6 }}>0{i+1}</div>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: 26,
                fontWeight: 300, marginBottom: 12, letterSpacing: '-0.01em',
                fontStyle: 'italic', lineHeight: 1.15
              }}>{c.title}</h4>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, opacity: 0.8, textWrap: 'pretty' }}>{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Languages */}
      <Reveal>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
          textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 28
        }}>— Idiomas</div>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="lang-grid-v3">
        {D.languages.map((l, i) => (
          <Reveal key={i} delay={i * 100}>
            <Tilt max={5}>
              <div style={{
                padding: 36, border: '1px solid var(--line-strong)',
                background: 'var(--bg-2)', cursor: 'none'
              }} data-cursor="">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                  <h4 style={{
                    fontFamily: 'var(--font-display)', fontSize: 44,
                    fontWeight: 300, fontStyle: 'italic'
                  }}>{l.lang}</h4>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 12,
                    color: 'var(--accent)', letterSpacing: 1.4
                  }}>{l.pct}%</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--fg-muted)', letterSpacing: 1.4,
                  textTransform: 'uppercase', marginBottom: 20
                }}>{l.level}</div>
                <LangBar pct={l.pct} />
                <ul style={{ listStyle: 'none', marginTop: 20 }}>
                  {l.details.map((d, j) => (
                    <li key={j} style={{
                      display: 'flex', gap: 10, fontSize: 13,
                      color: 'var(--fg-muted)', marginBottom: 6
                    }}>
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
          .comp-grid-v3 { grid-template-columns: 1fr !important; }
          .comp-grid-v3 > * > div { border-right: none !important; border-bottom: 1px solid var(--line-strong) !important; }
          .lang-grid-v3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
function LangBar({ pct }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <div ref={ref} style={{ height: 4, background: 'var(--line)', position: 'relative' }}>
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: inView ? `${pct}%` : '0%',
        background: 'var(--accent)',
        transition: 'width 1.8s cubic-bezier(.2,.8,.2,1)'
      }} />
    </div>
  );
}

// ═══ PROJECTS V3 ═════════════════════════════════════════════════════════
function ProjectsV3() {
  const D = window.DATA;
  const [active, setActive] = useState(0);

  return (
    <section id="projects" data-screen-label="05 Projects" style={{
      padding: '180px 5vw', background: 'var(--bg-2)', position: 'relative'
    }}>
      <SectionHead num="05" label="Obra seleccionada" hint={`${D.projects.length} case studies`} />

      <SectionTitle>
        <WordsMask text="Proyectos que" step={60} />{' '}
        <em style={{ color: 'var(--accent)' }}>
          <WordsMask text="mueven números" italic step={60} delay={400} />
        </em>.
      </SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48 }} className="proj-grid-v3">
        {/* List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {D.projects.map((p, i) => {
            const isActive = active === i;
            return (
              <Reveal key={i} delay={i * 80}>
                <div
                  data-cursor="ver"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  style={{
                    padding: 28,
                    background: isActive ? 'var(--bg-3)' : 'var(--bg)',
                    border: `1px solid ${isActive ? p.color : 'var(--line)'}`,
                    transition: 'all 0.5s cubic-bezier(.2,.8,.2,1)',
                    cursor: 'none',
                    transform: isActive ? 'translateX(16px)' : 'translateX(0)',
                    boxShadow: isActive ? `0 20px 60px ${p.color}40` : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 12 }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      color: p.color, letterSpacing: 1.4
                    }}>◆ 0{i+1}</span>
                    <span style={{ fontSize: 28, lineHeight: 1 }}>{p.icon}</span>
                    <span style={{
                      marginLeft: 'auto', fontFamily: 'var(--font-mono)',
                      fontSize: 10, color: 'var(--fg-muted)', letterSpacing: 1.4
                    }}>{p.year}</span>
                  </div>
                  <h4 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(22px, 2.2vw, 30px)',
                    lineHeight: 1.12, fontWeight: 300, letterSpacing: '-0.02em',
                    fontStyle: isActive ? 'italic' : 'normal',
                    color: isActive ? p.color : 'var(--fg)',
                    transition: 'all 0.4s', marginBottom: 6
                  }}>{p.name}</h4>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: 'var(--fg-muted)', letterSpacing: 1.4, textTransform: 'uppercase'
                  }}>{p.kind}</div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Preview */}
        <div style={{
          position: 'sticky', top: 40, alignSelf: 'start',
          border: '1px solid var(--line-strong)', background: 'var(--bg)',
          padding: 48, minHeight: 520, overflow: 'hidden'
        }} className="proj-preview-v3">
          {D.projects.map((p, i) => (
            <div key={i} style={{
              position: active === i ? 'relative' : 'absolute',
              inset: active === i ? 'auto' : 48,
              opacity: active === i ? 1 : 0,
              transform: active === i ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s, transform 0.6s',
              pointerEvents: active === i ? 'auto' : 'none'
            }}>
              <div style={{
                fontSize: 88, marginBottom: 24,
                filter: `drop-shadow(0 10px 30px ${p.color}60)`
              }}>{p.icon}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: p.color, letterSpacing: 1.6,
                textTransform: 'uppercase', marginBottom: 14
              }}>{p.kind} · {p.year}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 4.5vw, 64px)',
                lineHeight: 0.95, fontWeight: 300, letterSpacing: '-0.03em',
                marginBottom: 24, color: p.color, fontStyle: 'italic'
              }}>{p.name}</h3>
              <p style={{
                fontSize: 16.5, lineHeight: 1.65, color: 'var(--fg)',
                marginBottom: 32, textWrap: 'pretty'
              }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.tags.map((t, j) => (
                  <span key={j} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    padding: '7px 14px', border: `1px solid ${p.color}`,
                    color: p.color, letterSpacing: 0.6
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
          {/* Colorful backlight */}
          <div style={{
            position: 'absolute', right: -100, bottom: -100,
            width: 400, height: 400, borderRadius: '50%',
            background: `radial-gradient(circle, ${D.projects[active].color}35 0%, transparent 70%)`,
            transition: 'background 0.7s', pointerEvents: 'none', filter: 'blur(10px)'
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-grid-v3 { grid-template-columns: 1fr !important; }
          .proj-preview-v3 { position: relative !important; top: auto !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}

// ═══ CONTACT V3 ══════════════════════════════════════════════════════════
function ContactV3() {
  const D = window.DATA;
  return (
    <section id="contact" data-screen-label="06 Contact" style={{
      padding: '180px 5vw 80px', position: 'relative'
    }}>
      <SectionHead num="06" label="Contacto" hint="Construyamos algo juntos" />

      <Reveal>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(60px, 12vw, 200px)',
          lineHeight: 0.85, letterSpacing: '-0.05em',
          fontWeight: 300, marginBottom: 50, textWrap: 'balance'
        }}>
          <WordsMask text="¿Tienes un" step={60} />{' '}
          <em style={{ color: 'var(--accent)' }}><WordsMask text="proyecto" italic step={60} delay={300} /></em><br/>
          <WordsMask text="en mente?" step={60} delay={600} />
        </h2>
      </Reveal>

      <Reveal delay={500}>
        <Magnetic strength={0.2}>
          <a href={`mailto:${D.email}`} data-cursor="enviar" style={{
            display: 'inline-block', fontFamily: 'var(--font-display)',
            fontSize: 'clamp(30px, 5vw, 70px)', fontWeight: 300, fontStyle: 'italic',
            letterSpacing: '-0.025em',
            borderBottom: '1px solid var(--fg)', paddingBottom: 10, marginBottom: 100,
            transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--fg)'}>
            {D.email} <span style={{ display: 'inline-block', marginLeft: 10 }}>↗</span>
          </a>
        </Magnetic>
      </Reveal>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 60,
        paddingTop: 60, borderTop: '1px solid var(--line-strong)'
      }} className="contact-grid-v3">
        <Reveal>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 20 }}>— Directo</div>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', marginBottom: 4, letterSpacing: 1.4 }}>TELÉFONO</div>
              <a href={`tel:${D.phone}`} data-cursor="llamar" style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic' }}>{D.phone}</a>
            </div>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', marginBottom: 4, letterSpacing: 1.4 }}>UBICACIÓN</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic' }}>{D.location}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 20 }}>— Educación</div>
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
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 20 }}>— En la red</div>
            {[
              { label: 'GitHub', url: `https://${D.github}`, hint: '@eboresi' },
              { label: 'LinkedIn', url: `https://${D.linkedin}`, hint: 'in/eboresi' },
              { label: 'Sitio', url: `https://${D.site}`, hint: D.site }
            ].map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener" data-cursor="abrir" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                padding: '14px 0', borderBottom: '1px dashed var(--line)',
                transition: 'color 0.3s, padding 0.3s'
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.paddingLeft = '8px'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.paddingLeft = '0'; }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic' }}>{l.label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)' }}>{l.hint} ↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div style={{
        marginTop: 140, paddingTop: 28, borderTop: '1px solid var(--line)',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.6,
        textTransform: 'uppercase', color: 'var(--fg-muted)', flexWrap: 'wrap', gap: 16
      }} className="footer-row-v3">
        <span>© MMXXVI — Erick Rodríguez Bores</span>
        <span>Full Stack Senior · CDMX</span>
        <span>v3.0 · eboresi.dev</span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid-v3 { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-row-v3 { flex-direction: column; text-align: center; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { AboutV3, ExperienceV3, SkillsV3, ProjectsV3, ContactV3 });
