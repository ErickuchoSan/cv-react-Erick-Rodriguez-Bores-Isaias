import { useEffect, useMemo, useRef, useState } from 'react';
import { Reveal, MaskReveal, Magnetic, Parallax, Tilt } from './primitives';
import { TechIcon } from './TechIcon';
import { DownloadV3 } from './Download';
import { THEMES, type ThemeName } from './theme';
import { useMediaQuery, useReducedMotion } from './hooks';
import type { CV } from '../data/model';
import type { Lang } from '../i18n/lang';
import { translations } from '../i18n/translations';
import { fill } from '../lib/format';
import { richText } from '../lib/richText';

const FRAGMENT_SHADER = `
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

const VERTEX_SHADER = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;

function hexToVec3(hex: string): [number, number, number] {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
}

/** Animated WebGL background. Static gradient on touch, small screens and reduced motion. */
function ShaderBG({ accent, base }: { accent: string; base: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const coarse = useMediaQuery('(pointer: coarse)');
  const wide = useMediaQuery('(min-width: 768px)');
  const reduce = useReducedMotion();
  const animated = !coarse && wide && !reduce;
  const colors = useRef({ accent: hexToVec3(accent), base: hexToVec3(base) });

  useEffect(() => {
    colors.current = { accent: hexToVec3(accent), base: hexToVec3(base) };
  }, [accent, base]);

  useEffect(() => {
    if (!animated) return;
    const canvas = ref.current;
    if (!canvas) return;
    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const mkShader = (type: number, src: string) => {
      const sh = gl.createShader(type);
      if (!sh) throw new Error('WebGL: createShader failed');
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(`WebGL shader: ${gl.getShaderInfoLog(sh)}`);
      return sh;
    };
    const prog = gl.createProgram();
    if (!prog) return;
    try {
      gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, VERTEX_SHADER));
      gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
    } catch (err) {
      // Decorative only: without the shader the hero keeps its plain background.
      console.warn(err);
      return;
    }
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

    let raf = 0;
    let visible = true;
    const t0 = performance.now();
    const tick = () => {
      const { accent: a, base: b } = colors.current;
      gl.uniform2f(u_res, canvas.width, canvas.height);
      gl.uniform1f(u_t, (performance.now() - t0) / 1000);
      gl.uniform2f(u_m, mx, my);
      gl.uniform3f(u_accent, a[0], a[1], a[2]);
      gl.uniform3f(u_base, b[0], b[1], b[2]);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(tick);
    };
    // The loop runs only while the hero is on screen and the tab is visible.
    const sync = () => {
      const run = visible && document.visibilityState !== 'hidden';
      if (run && !raf) raf = requestAnimationFrame(tick);
      if (!run && raf) { cancelAnimationFrame(raf); raf = 0; }
    };
    const io = new IntersectionObserver(([entry]) => { visible = Boolean(entry?.isIntersecting); sync(); }, { threshold: 0 });
    io.observe(canvas);
    document.addEventListener('visibilitychange', sync);
    sync();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener('visibilitychange', sync);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, [animated]);

  if (!animated) {
    return (
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 30% 20%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 55%), radial-gradient(ellipse at 80% 90%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%), var(--bg)',
        opacity: 0.85,
      }} />
    );
  }

  return <canvas ref={ref} aria-hidden="true" style={{
    position: 'absolute', inset: 0, width: '100%', height: '100%',
    opacity: 0.55, pointerEvents: 'none', zIndex: 0,
  }} />;
}

interface TerminalProps {
  name: string;
  role: string;
  stack: readonly string[];
  log: readonly string[];
  status: string;
}

type TerminalLine = { t: 'cmd' | 'out'; x: string };

/** Types a short shell session. With reduced motion it shows the finished session at once. */
function Terminal({ name, role, stack, log, status }: TerminalProps) {
  const reduce = useReducedMotion();
  const script = useMemo(() => [
    { cmd: 'whoami', out: [name, role] },
    { cmd: 'stack --json', out: ['[', ...stack.map((s, i) => `  "${s}"${i < stack.length - 1 ? ',' : ''}`), ']'] },
    { cmd: `git log --oneline -${log.length}`, out: [...log] },
    { cmd: 'echo $STATUS', out: [status] },
  ], [name, role, stack, log, status]);
  const finished = useMemo(
    () => script.flatMap((step): TerminalLine[] => [{ t: 'cmd', x: step.cmd }, ...step.out.map((x): TerminalLine => ({ t: 'out', x }))]),
    [script],
  );
  const [typed, setTyped] = useState<TerminalLine[]>([]);
  const [typing, setTyping] = useState('');
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (reduce || window.innerWidth < 768) return;
    let mounted = true, idx = 0;
    const history: TerminalLine[] = [];
    const run = async () => {
      while (mounted && idx < script.length) {
        const step = script[idx];
        if (!step) break;
        for (let i = 0; i <= step.cmd.length; i++) {
          if (!mounted) return;
          setTyping(step.cmd.slice(0, i));
          await new Promise((r) => setTimeout(r, 38 + Math.random() * 40));
        }
        await new Promise((r) => setTimeout(r, 280));
        history.push({ t: 'cmd', x: step.cmd });
        step.out.forEach((o) => history.push({ t: 'out', x: o }));
        if (!mounted) return;
        setTyped([...history]);
        setTyping('');
        await new Promise((r) => setTimeout(r, 700));
        idx++;
      }
    };
    run();
    const b = setInterval(() => setBlink((v) => !v), 530);
    return () => { mounted = false; clearInterval(b); };
  }, [script, reduce]);

  const lines = reduce ? finished : typed;

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
            <span style={{ color: 'var(--accent-ink)' }}>❯ </span>{l.x}
          </div>
        ) : (
          <div key={i} style={{ color: 'var(--fg-muted)', paddingLeft: 14, marginBottom: 2 }}>{l.x}</div>
        ))}
        <div>
          <span style={{ color: 'var(--accent-ink)' }}>❯ </span>{typing}
          <span style={{
            display: 'inline-block', width: 8, height: 14,
            background: blink && !reduce ? 'var(--accent)' : 'transparent',
            marginLeft: 2, verticalAlign: 'text-top',
          }} />
        </div>
      </div>
    </div>
  );
}

interface HeroProps {
  data: CV;
  lang: Lang;
  themeName: ThemeName;
  accent: string;
  onNav: (id: string) => void;
}

export function HeroV3({ data: D, lang, themeName, accent, onNav }: HeroProps) {
  const t = translations[lang].hero;
  const cursor = translations[lang].cursor;
  const [firstName, ...lastNames] = D.name.display.split(' ');
  const highlight = { color: 'var(--accent-ink)', fontWeight: 500 };

  return (
    <section id="hero" style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      padding: '120px 5vw 40px',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <ShaderBG accent={accent} base={THEMES[themeName].bg} />

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
            textTransform: 'uppercase', color: 'var(--accent-ink)', flexWrap: 'wrap',
          }}>
            <span style={{ width: 50, height: 1, background: 'var(--accent)' }} />
            <span>{D.role} · {D.contact.country}</span>
            <span style={{ color: 'var(--fg)', opacity: 0.75, marginLeft: 6 }}>— {fill(t.portfolio, { year: new Date().getFullYear() })}</span>
          </div>
        </Reveal>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(68px, 14vw, 240px)',
          lineHeight: 0.82, letterSpacing: '-0.055em', fontWeight: 300,
          marginBottom: 20,
        }}>
          <div><MaskReveal delay={200}>{firstName}</MaskReveal></div>
          <div style={{ color: 'var(--accent-ink)', fontStyle: 'italic' }}>
            <MaskReveal delay={420}>{lastNames.join(' ')}.</MaskReveal>
          </div>
        </h1>

        <Reveal delay={600} duration={900}>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 4,
            marginTop: 18, marginBottom: 24,
          }}>
            <p style={{
              margin: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(13px, 1.1vw, 15px)',
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              color: 'var(--accent-ink)',
              fontWeight: 500,
            }}>
              {D.taglines[0]}
            </p>
            <p style={{
              margin: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(11px, 0.95vw, 13px)',
              letterSpacing: 1.6,
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
              fontWeight: 400,
            }}>
              {D.taglines[1]}
            </p>
          </div>
        </Reveal>

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
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--on-accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--fg)'; }}>
                <span style={{ opacity: 0.55, fontSize: 10 }}>0{i + 1}</span>
                <span style={{ display: 'inline-flex', color: 'var(--accent-ink)' }}>
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
                  <img src={D.photo} alt={D.name.display} style={{
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
                    <span>{D.contact.city}</span>
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
                color: 'var(--accent-ink)', marginBottom: 16,
              }}>{t.bio}</div>
              <p style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(20px, 2vw, 26px)',
                lineHeight: 1.35, fontWeight: 400, color: 'var(--fg)',
              }}>
                {richText(t.bioText, {
                  years: <em style={highlight}>{D.yearsText}</em>,
                  company: <em style={highlight}>{D.employer}</em>,
                })}
              </p>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
                <Magnetic strength={0.25}>
                  <button onClick={() => onNav('contact')} data-cursor={cursor.write} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '14px 24px', background: 'var(--accent)', color: 'var(--on-accent)',
                    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
                    textTransform: 'uppercase', fontWeight: 700, border: '1px solid var(--accent)',
                    cursor: 'pointer',
                  }}>{t.cta1}</button>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <button onClick={() => onNav('projects')} data-cursor={cursor.view} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '14px 24px',
                    background: 'var(--bg)', color: 'var(--fg)',
                    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
                    textTransform: 'uppercase', fontWeight: 700,
                    border: '1px solid var(--fg)',
                    cursor: 'pointer',
                  }}>{t.cta2}</button>
                </Magnetic>
                <DownloadV3 lang={lang} themeName={themeName} accent={accent} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={1100} y={60}>
            <div className="hero-terminal-wrap" aria-hidden="true">
              <Terminal name={D.name.display} role={D.role} stack={D.terminal.stack} log={D.terminal.log} status={t.terminalStatus} />
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
