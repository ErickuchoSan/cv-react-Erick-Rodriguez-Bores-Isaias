// ═══ v3 APP: root orchestration ═══════════════════════════════════════════
const { useEffect, useRef, useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "noir",
  "accent": "#ff5b2e",
  "display_font": "Fraunces",
  "sans_font": "Inter",
  "mono_font": "JetBrains Mono"
}/*EDITMODE-END*/;

// ─── THEME PALETTES ─────────────────────────────────────────────────────
// Each theme is a complete palette. Accent is separate so you can mix/match.
const THEMES = {
  noir: {
    label: "Noir", hint: "Oscuro carbón",
    bg: "#0a0a0a", bg2: "#121212", bg3: "#1a1a1a",
    fg: "#fafaf7", fgMuted: "#a8a49e", fgDim: "#6a6762",
    line: "rgba(250,250,247,0.08)", lineStrong: "rgba(250,250,247,0.18)",
    mode: "dark", swatch: ["#0a0a0a", "#fafaf7"]
  },
  paper: {
    label: "Paper", hint: "Claro papel",
    bg: "#f6f3ec", bg2: "#eeeae0", bg3: "#e4dfd1",
    fg: "#1a1613", fgMuted: "#5a4f44", fgDim: "#8a7f73",
    line: "rgba(26,22,19,0.12)", lineStrong: "rgba(26,22,19,0.28)",
    mode: "light", swatch: ["#f6f3ec", "#1a1613"]
  },
  ivory: {
    label: "Ivory", hint: "Crema cálido",
    bg: "#eee6d4", bg2: "#e4dcc6", bg3: "#d9cfb5",
    fg: "#1f1a13", fgMuted: "#6b5d4a", fgDim: "#9a8a72",
    line: "rgba(31,26,19,0.12)", lineStrong: "rgba(31,26,19,0.28)",
    mode: "light", swatch: ["#eee6d4", "#1f1a13"]
  },
  slate: {
    label: "Slate", hint: "Azul pizarra",
    bg: "#0d1520", bg2: "#14202f", bg3: "#1c2a3d",
    fg: "#e8eef5", fgMuted: "#8fa1b8", fgDim: "#5a6a80",
    line: "rgba(232,238,245,0.08)", lineStrong: "rgba(232,238,245,0.18)",
    mode: "dark", swatch: ["#0d1520", "#e8eef5"]
  },
  forest: {
    label: "Forest", hint: "Verde bosque",
    bg: "#0c140f", bg2: "#14201a", bg3: "#1e2e25",
    fg: "#ecf2ec", fgMuted: "#8ea598", fgDim: "#5a6e62",
    line: "rgba(236,242,236,0.08)", lineStrong: "rgba(236,242,236,0.18)",
    mode: "dark", swatch: ["#0c140f", "#ecf2ec"]
  },
  linen: {
    label: "Linen", hint: "Blanco lino",
    bg: "#ece7de", bg2: "#e0dace", bg3: "#d3ccbc",
    fg: "#141210", fgMuted: "#58504a", fgDim: "#857e76",
    line: "rgba(20,18,16,0.12)", lineStrong: "rgba(20,18,16,0.28)",
    mode: "light", swatch: ["#ece7de", "#141210"]
  },
  midnight: {
    label: "Midnight", hint: "Violeta noche",
    bg: "#0e0b1a", bg2: "#17132a", bg3: "#221c3d",
    fg: "#ecebf5", fgMuted: "#9b95b8", fgDim: "#625c80",
    line: "rgba(236,235,245,0.08)", lineStrong: "rgba(236,235,245,0.2)",
    mode: "dark", swatch: ["#0e0b1a", "#ecebf5"]
  }
};

const ACCENT_OPTIONS = [
  { label: "Terracota", value: "#ff5b2e" },
  { label: "Óxido",     value: "#d14a24" },
  { label: "Mostaza",   value: "#eab308" },
  { label: "Lima",      value: "#84cc16" },
  { label: "Cian",      value: "#22d3ee" },
  { label: "Violeta",   value: "#a78bfa" }
];
const DISPLAY_FONTS = ["Fraunces", "Instrument Serif", "Space Grotesk"];
const SANS_FONTS    = ["Inter", "Space Grotesk"];

function AppV3() {
  const [state, setState] = useState(TWEAK_DEFAULTS);
  const [active, setActive] = useState('hero');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const r = document.documentElement;
    const t = THEMES[state.theme] || THEMES.noir;
    r.setAttribute('data-theme', t.mode);
    r.setAttribute('data-theme-name', state.theme);
    r.style.setProperty('--bg', t.bg);
    r.style.setProperty('--bg-2', t.bg2);
    r.style.setProperty('--bg-3', t.bg3);
    r.style.setProperty('--fg', t.fg);
    r.style.setProperty('--fg-muted', t.fgMuted);
    r.style.setProperty('--fg-dim', t.fgDim);
    r.style.setProperty('--line', t.line);
    r.style.setProperty('--line-strong', t.lineStrong);
    r.style.setProperty('--accent', state.accent);
    r.style.setProperty('--font-display', `'${state.display_font}', serif`);
    r.style.setProperty('--font-sans', `'${state.sans_font}', sans-serif`);
    r.style.setProperty('--font-mono', `'${state.mono_font}', monospace`);
  }, [state]);

  const setKey = (k, v) => {
    setState(prev => {
      const next = { ...prev, [k]: v };
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
      return next;
    });
  };

  useEffect(() => {
    const ids = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
    const on = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, p)));
      let cur = 'hero';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.35) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', on, { passive: true });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);

  const sections = [
    { id: 'hero', label: '00' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Exp' },
    { id: 'skills', label: 'Stack' },
    { id: 'projects', label: 'Obra' },
    { id: 'contact', label: 'Contacto' }
  ];

  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  const theme = THEMES[state.theme] || THEMES.noir;

  return (
    <>
      <CursorV3 />
      <NavV3 active={active} sections={sections} onNav={onNav} />
      <CornerTools
        theme={state.theme}
        themeMode={theme.mode}
        onCycleTheme={() => {
          const keys = Object.keys(THEMES);
          const i = keys.indexOf(state.theme);
          setKey('theme', keys[(i + 1) % keys.length]);
        }}
      />
      <BottomHUD progress={progress} active={active} sections={sections} />

      <main>
        <HeroV3 />
        <MarqueeV3 items={["Full Stack Senior", ".NET · React", "CDMX · 2026", "Clean Architecture", "AI-Assisted Dev", "Cloud Native"]} />
        <AboutV3 />
        <ExperienceV3 />
        <SkillsV3 />
        <ProjectsV3 />
        <MarqueeV3 items={["Disponible", "Remoto / Híbrido", "Internacional", "Full-time"]} reverse speed={40} />
        <ContactV3 />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AppV3 />);
