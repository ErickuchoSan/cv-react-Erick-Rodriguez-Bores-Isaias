import { useEffect, useMemo, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { THEMES, ACCENT_OPTIONS, DEFAULTS, type ThemeName } from './theme';
import { buildData } from './data';
import { CursorV3, NavV3, CornerTools, BottomHUD, MarqueeV3 } from './chrome';
import { HeroV3 } from './Hero';
import { AboutV3, ExperienceV3, SkillsV3, ProjectsV3, ContactV3 } from './sections';
import { useScrollProgress } from './primitives';
import { useLanguage } from '../context/LanguageContext';

const STORAGE_KEY = 'cv-v3-tweaks';

interface Tweaks {
  theme: ThemeName;
  accent: string;
}

function loadTweaks(): Tweaks {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.theme && THEMES[parsed.theme as ThemeName]) {
        return { theme: parsed.theme, accent: parsed.accent || DEFAULTS.accent };
      }
    }
  } catch { /* noop */ }
  return { theme: DEFAULTS.theme, accent: DEFAULTS.accent };
}

export function AppV3() {
  const { language, setLanguage } = useLanguage();
  const [tweaks, setTweaks] = useState<Tweaks>(loadTweaks);
  const [active, setActive] = useState('hero');
  const progress = useScrollProgress();

  const data = useMemo(() => buildData(language), [language]);

  useEffect(() => {
    const r = document.documentElement;
    const th = THEMES[tweaks.theme];
    r.setAttribute('data-theme', th.mode);
    r.setAttribute('data-theme-name', tweaks.theme);
    r.style.setProperty('--bg', th.bg);
    r.style.setProperty('--bg-2', th.bg2);
    r.style.setProperty('--bg-3', th.bg3);
    r.style.setProperty('--fg', th.fg);
    r.style.setProperty('--fg-muted', th.fgMuted);
    r.style.setProperty('--fg-dim', th.fgDim);
    r.style.setProperty('--line', th.line);
    r.style.setProperty('--line-strong', th.lineStrong);
    r.style.setProperty('--accent', tweaks.accent);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tweaks)); } catch { /* noop */ }
  }, [tweaks]);

  useEffect(() => {
    const ids = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
    const on = () => {
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

  const sections = language === 'es'
    ? [
        { id: 'hero', label: '00' },
        { id: 'about', label: 'Sobre' },
        { id: 'experience', label: 'Exp' },
        { id: 'skills', label: 'Stack' },
        { id: 'projects', label: 'Obra' },
        { id: 'contact', label: 'Contacto' },
      ]
    : [
        { id: 'hero', label: '00' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Exp' },
        { id: 'skills', label: 'Stack' },
        { id: 'projects', label: 'Work' },
        { id: 'contact', label: 'Contact' },
      ];

  const onNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  const cycleTheme = () => {
    const keys = Object.keys(THEMES) as ThemeName[];
    const i = keys.indexOf(tweaks.theme);
    setTweaks((p) => ({ ...p, theme: keys[(i + 1) % keys.length] }));
  };

  const cycleAccent = () => {
    const i = ACCENT_OPTIONS.findIndex((a) => a.value === tweaks.accent);
    const next = ACCENT_OPTIONS[(i + 1) % ACCENT_OPTIONS.length];
    setTweaks((p) => ({ ...p, accent: next.value }));
  };

  const toggleLang = () => setLanguage(language === 'es' ? 'en' : 'es');

  return (
    <>
      <CursorV3 />
      <NavV3 active={active} sections={sections} onNav={onNav} />
      <CornerTools
        theme={tweaks.theme}
        onCycleTheme={cycleTheme}
        onCycleAccent={cycleAccent}
        onToggleLang={toggleLang}
        lang={language}
      />
      <BottomHUD progress={progress} active={active} sections={sections} />

      <main>
        <HeroV3 data={data} lang={language} />
        <MarqueeV3 items={data.marquee1} />
        <AboutV3 data={data} lang={language} />
        <ExperienceV3 data={data} lang={language} />
        <SkillsV3 data={data} lang={language} />
        <ProjectsV3 data={data} lang={language} />
        <MarqueeV3 items={data.marquee2} reverse speed={40} />
        <ContactV3 data={data} lang={language} />
      </main>

      <Analytics />
    </>
  );
}
