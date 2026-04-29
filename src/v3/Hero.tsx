import { useEffect, useRef, useState } from 'react';
import { Reveal, MaskReveal, Magnetic, Parallax, Tilt } from './primitives';
import { TechIcon } from './TechIcon';
import { DownloadV3 } from './Download';
import type { CVData } from './data';
import type { ThemeName } from './theme';
import { translations } from '../i18n/translations';

function ShaderBG() {
  const ref = useRef<HTMLCanvasElement>(null);
  const isMobile = typeof window !== 'undefined'
    && (matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
  useEffect(() => {
    if (isMobile) return;
    const canvas = ref.current;
    if (!canvas) return;
    // Pause shader when hero is offscreen — saves GPU + battery.
    let paused = false;
    const io = new IntersectionObserver(([e]) => { paused = !e.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);
    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;
    const fs = `
      precision highp float;
      uniform vec2 u_res; uniform float u_t; uniform vec2 u_m; uniform vec3 u_accent; uniform vec3 u_base;
      vec2 hash(vec2 p){ p=vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3))); return -1.+2.*fract(sin(p)*43758.5453123); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p);
        vec2 u=f*f*(3.-2.*f);
        return mix(mix(dot(hash(i),f),dot(hash(i+vec2(1,0)),f-vec2(1,0)),u.x),
                   mix(dot(hash(i+vec2(0,1)),f-vec2(0,1)),dot(hash(i+vec2(1,1)),f-vec2(1,1)),u.x),u.y);
      }
      float fbm(vec2 p){ float v=0., a=0.5; for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.; a*=0.5;} return v; }
      void main(){
        vec2 uv = (gl_FragCoord.xy - 0.5*u_res) / u_res.y;
        vec2 m = u_m * 0.5;
        float t = u_t * 0.08;
        vec2 q = vec2(fbm(uv + t + m), fbm(uv + vec2(1.) - t));
        vec2 r = vec2(fbm(uv + q + vec2(1.7,9.2) + t*1.5), fbm(uv + q + vec2(8.3,2.8) - t));
        float f = fbm(uv + r);
        vec3 col = mix(u_base, u_accent, smoothstep(0.2,0.9,f) * 0.35);
        float vig = smoothstep(1.3, 0.3, length(uv));
        col = mix(u_base, col, vig);
        gl_FragColor = vec4(col, 1.);
      }
    `;
    const mkShader = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src); gl.compileShader(s); return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog); gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u_res = gl.getUniformLocation(prog, 'u_res');
    const u_t = gl.getUniformLocation(prog, 'u_t');
    const u_m = gl.getUniformLocation(prog, 'u_m');
    const u_accent = gl.getUniformLocation(prog, 'u_accent');
    const u_base = gl.getUniformLocation(prog, 'u_base');

    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth) - 0.5;
      my = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', onMove);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resize); resize();

    const hex = (h: string): [number, number, number] => {
      const c = h.startsWith('#') ? h : '#0a0a0a';
      const n = parseInt(c.replace('#', ''), 16);
      return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
    };

    let raf = 0; const t0 = performance.now();
    const tick = () => {
      if (!paused && document.visibilityState !== 'hidden') {
        const cs = getComputedStyle(document.documentElement);
        const accent = cs.getPropertyValue('--accent').trim() || '#ff5b2e';
        const bg = cs.getPropertyValue('--bg').trim() || '#0a0a0a';
        const [r, g, b] = hex(accent);
        const [br, bg_, bb] = hex(bg);
        gl.uniform2f(u_res, canvas.width, canvas.height);
        gl.uniform1f(u_t, (performance.now() - t0) / 1000);
        gl.uniform2f(u_m, mx, my);
        gl.uniform3f(u_accent, r, g, b);
        gl.uniform3f(u_base, br, bg_, bb);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 30% 20%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 55%), radial-gradient(ellipse at 80% 90%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%), var(--bg)',
        opacity: 0.85,
      }} />
    );
  }

  return <canvas ref={ref} style={{
    position: 'absolute', inset: 0, width: '100%', height: '100%',
    opacity: 0.55, pointerEvents: 'none', zIndex: 0,
  }} />;
}

function Terminal({ name, role }: { name: string; role: string }) {
  const [lines, setLines] = useState<{ t: 'cmd' | 'out'; x: string }[]>([]);
  const [typing, setTyping] = useState('');
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const script: { cmd: string; out: string[] }[] = [
      { cmd: 'whoami', out: [name, role] },
      { cmd: 'stack --json', out: ['[', '  ".NET Core 10",', '  "React 19 · Next.js 16",', '  "PostgreSQL · SQL Server",', '  "NestJS 11 · Docker"', ']'] },
      { cmd: 'git log --oneline -4', out: [
        'a8f2c10 feat: Align Designs Platform → prod',
        '9d7e453 perf: -40% SQL query time',
        '3b2a891 feat: API Honestel v2 (8 endpoints)',
        '7c4f912 chore: 57 test suites · CI/CD',
      ] },
      { cmd: 'echo $STATUS', out: ['● disponible · full-time / remote / hybrid'] },
    ];
    let mounted = true, idx = 0;
    const history: { t: 'cmd' | 'out'; x: string }[] = [];
    const run = async () => {
      while (mounted && idx < script.length) {
        const step = script[idx];
        for (let i = 0; i <= step.cmd.length; i++) {
          if (!mounted) return;
          setTyping(step.cmd.slice(0, i));
          await new Promise((r) => setTimeout(r, 38 + Math.random() * 40));
        }
        await new Promise((r) => setTimeout(r, 280));
        history.push({ t: 'cmd', x: step.cmd });
        step.out.forEach((o) => history.push({ t: 'out', x: o }));
        if (!mounted) return;
        setLines([...history]);
        setTyping('');
        await new Promise((r) => setTimeout(r, 700));
        idx++;
      }
    };
    run();
    const b = setInterval(() => setBlink((v) => !v), 530);
    return () => { mounted = false; clearInterval(b); };
  }, [name, role]);

  return (
    <div style={{
      background: 'color-mix(in oklab, var(--bg-2) 92%, transparent)',
      backdropFilter: 'blur(24px) saturate(140%)',
      border: '1px solid var(--line-strong)',
      fontFamily: 'var(--font-mono)', fontSize: 12,
      boxShadow: '0 30px 80px rgba(0,0,0,0.35), 0 0 0 1px color-mix(in oklab, var(--accent) 15%, transparent)',
      color: 'var(--fg)',
    }}>
      <div style={{
        padding: '10px 14px', borderBottom: '1px solid var(--line)',
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'color-mix(in oklab, var(--fg) 4%, transparent)',
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ marginLeft: 14, color: 'var(--fg-muted)', fontSize: 10, letterSpacing: 1 }}>erick@eboresi — ~ — zsh</span>
      </div>
      <div style={{ padding: 20, minHeight: 340, maxHeight: 420, overflow: 'hidden', lineHeight: 1.55 }}>
        {lines.map((l, i) => l.t === 'cmd' ? (
          <div key={i} style={{ marginBottom: 2 }}>
            <span style={{ color: 'var(--accent)' }}>❯ </span>{l.x}
          </div>
        ) : (
          <div key={i} style={{ color: 'var(--fg-muted)', paddingLeft: 14, marginBottom: 2 }}>{l.x}</div>
        ))}
        <div>
          <span style={{ color: 'var(--accent)' }}>❯ </span>{typing}
          <span style={{
            display: 'inline-block', width: 8, height: 14,
            background: blink ? 'var(--accent)' : 'transparent',
            marginLeft: 2, verticalAlign: 'text-top',
          }} />
        </div>
      </div>
    </div>
  );
}

export function HeroV3({ data, lang, themeName, accent }: { data: CVData; lang: 'es' | 'en'; themeName: ThemeName; accent: string }) {
  const D = data;
  const heroT = translations[lang].hero;
  const labels = lang === 'es'
    ? { portfolio: 'portfolio / curriculum / 2026', bio: '— Bio',
        bioText: ['años', 'construyendo arquitecturas empresariales críticas. Actualmente en'],
        cta1: 'Trabajemos juntos →', cta2: 'Ver obra →' }
    : { portfolio: 'portfolio / résumé / 2026', bio: '— Bio',
        bioText: ['years', 'building critical enterprise architectures. Currently at'],
        cta1: 'Let’s work together →', cta2: 'See work →' };

  return (
    <section id="hero" style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      padding: '120px 5vw 40px',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <ShaderBG />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(180deg, color-mix(in oklab, var(--bg) 40%, transparent) 0%, transparent 30%, color-mix(in oklab, var(--bg) 85%, transparent) 100%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2, flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        paddingTop: 40,
      }}>
        <Reveal duration={900}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20,
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 2,
            textTransform: 'uppercase', color: 'var(--accent)', flexWrap: 'wrap',
          }}>
            <span style={{ width: 50, height: 1, background: 'var(--accent)' }} />
            <span>{D.role} · México</span>
            <span style={{ color: 'var(--fg)', opacity: 0.75, marginLeft: 6 }}>— {labels.portfolio}</span>
          </div>
        </Reveal>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(68px, 14vw, 240px)',
          lineHeight: 0.82, letterSpacing: '-0.055em', fontWeight: 300,
          marginBottom: 20,
        }}>
          <div><MaskReveal delay={200}>Erick</MaskReveal></div>
          <div style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
            <MaskReveal delay={420}>Bores.</MaskReveal>
          </div>
        </h1>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: 4,
          marginTop: 18, marginBottom: 24,
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(13px, 1.1vw, 15px)',
            letterSpacing: 1.2,
            textTransform: 'uppercase',
            color: 'var(--accent)',
            fontWeight: 500,
          }}>
            {heroT.subtitle1}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(11px, 0.95vw, 13px)',
            letterSpacing: 1.6,
            textTransform: 'uppercase',
            color: 'var(--fg-muted)',
            fontWeight: 400,
          }}>
            {heroT.subtitle2}
          </div>
        </div>

        <Reveal delay={800} duration={1100}>
          <div className="hero-stack-strip" style={{
            display: 'flex', flexWrap: 'wrap',
            borderTop: '1px solid var(--line-strong)',
            borderBottom: '1px solid var(--line-strong)',
            marginTop: 30, marginBottom: 40,
            background: 'color-mix(in oklab, var(--bg) 70%, transparent)',
            backdropFilter: 'blur(8px)',
          }}>
            {D.heroStack.map((s, i) => (
              <div key={i} data-cursor="" style={{
                padding: '18px 24px',
                borderRight: i < D.heroStack.length - 1 ? '1px solid var(--line-strong)' : 'none',
                fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 1.6,
                textTransform: 'uppercase', flex: 1, minWidth: 160,
                display: 'flex', alignItems: 'center', gap: 12,
                color: 'var(--fg)',
                transition: 'background 0.3s, color 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--fg)'; }}>
                <span style={{ opacity: 0.55, fontSize: 10 }}>0{i + 1}</span>
                <span style={{ display: 'inline-flex', color: 'var(--accent)' }}>
                  <TechIcon name={s} size={18} />
                </span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="hero-grid" style={{
          display: 'grid', gridTemplateColumns: '280px 1fr 1fr', gap: 32,
          alignItems: 'end',
        }}>
          <Reveal delay={900} y={60}>
            <Parallax speed={0.05}>
              <Tilt max={8} glare>
                <div style={{
                  position: 'relative', aspectRatio: '4/5',
                  overflow: 'hidden',
                  border: '1px solid var(--line-strong)',
                  boxShadow: '0 40px 90px rgba(0,0,0,0.65)',
                }}>
                  <img src={D.photo} alt={D.name} style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: 'grayscale(0.2) contrast(1.08)',
                  }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: 12, left: 12, right: 12,
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    letterSpacing: 1.4, textTransform: 'uppercase',
                    display: 'flex', justifyContent: 'space-between',
                    color: '#fff',
                  }}>
                    <span>#eb / 01</span>
                    <span>CDMX</span>
                  </div>
                </div>
              </Tilt>
            </Parallax>
          </Reveal>

          <Reveal delay={1000}>
            <div style={{
              background: 'color-mix(in oklab, var(--bg) 72%, transparent)',
              backdropFilter: 'blur(10px)',
              padding: '28px 28px 28px 24px',
              borderLeft: '2px solid var(--accent)',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: 1.6, textTransform: 'uppercase',
                color: 'var(--accent)', marginBottom: 16,
              }}>{labels.bio}</div>
              <p style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(20px, 2vw, 26px)',
                lineHeight: 1.35, fontWeight: 400, color: 'var(--fg)',
              }}>
                {lang === 'es' ? 'Desarrollador Full Stack con ' : 'Full Stack developer with '}
                <em style={{ color: 'var(--accent)', fontWeight: 500 }}>{D.years} {labels.bioText[0]}</em>
                {' '}{labels.bioText[1]}{' '}
                <em style={{ color: 'var(--accent)', fontWeight: 500 }}>Grupo Salinas</em>.
              </p>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
                <Magnetic strength={0.25}>
                  <a href="#contact" data-cursor={lang === 'es' ? 'escribir' : 'write'} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '14px 24px', background: 'var(--accent)', color: 'var(--bg)',
                    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
                    textTransform: 'uppercase', fontWeight: 700, border: '1px solid var(--accent)',
                  }}>{labels.cta1}</a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <a href="#projects" data-cursor={lang === 'es' ? 'ver' : 'view'} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '14px 24px',
                    background: 'var(--bg)', color: 'var(--fg)',
                    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
                    textTransform: 'uppercase', fontWeight: 700,
                    border: '1px solid var(--fg)',
                  }}>{labels.cta2}</a>
                </Magnetic>
                <DownloadV3 lang={lang} themeName={themeName} accent={accent} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={1100} y={60}>
            <div className="hero-terminal-wrap">
              <Terminal name={D.name} role={D.role} />
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
        }
        @media (max-width: 768px) {
          .hero-terminal-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}
