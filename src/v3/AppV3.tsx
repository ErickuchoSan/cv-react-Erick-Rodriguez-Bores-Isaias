import { Fragment, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { THEMES, ACCENT_OPTIONS, DEFAULTS, type ThemeName } from './theme';
import { CursorV3, NavV3, CornerTools, BottomHUD, MarqueeV3 } from './chrome';
import { HeroV3 } from './Hero';
import { AboutV3, ExperienceV3, SkillsV3, ProjectsV3, ContactV3 } from './sections';
import { ClaudeEngineeringV3 } from './sections/ClaudeEngineering';
import { useScrollProgress } from './primitives';
import { useLanguage } from '../context/LanguageContext';
import { buildCV } from '../data/model';
import { translations, type Translations } from '../i18n/translations';
import { fill } from '../lib/format';

const STORAGE_KEY = 'cv-v3-tweaks';

/** Page order. The DOM, the nav, the scroll-spy and the "02 / …" numbers all derive from it. */
const SECTION_ORDER = ['hero', 'about', 'experience', 'skills', 'claude-engineering', 'projects', 'contact'] as const;
type SectionId = (typeof SECTION_ORDER)[number];

const NAV_KEY: Record<SectionId, keyof Translations['nav']['sections']> = {
  hero: 'hero',
  about: 'about',
  experience: 'experience',
  skills: 'skills',
  'claude-engineering': 'claudeEngineering',
  projects: 'projects',
  contact: 'contact',
};

const sectionNumber = (id: SectionId) => String(SECTION_ORDER.indexOf(id) + 1).padStart(2, '0');

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
  } catch { /* storage unavailable or corrupt: fall back to defaults */ }
  return { theme: DEFAULTS.theme, accent: DEFAULTS.accent };
}

export function AppV3() {
  const { language, setLanguage } = useLanguage();
  const [tweaks, setTweaks] = useState<Tweaks>(loadTweaks);
  const [active, setActive] = useState<SectionId>('hero');
  const progress = useScrollProgress();
  const t = translations[language];

  const data = useMemo(() => buildCV(language), [language]);

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
    r.style.setProperty('--font-display', `'${th.display}', serif`);
    r.style.setProperty('--font-sans', `'${th.sans}', sans-serif`);
    r.style.setProperty('--font-mono', `'${th.mono}', monospace`);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tweaks)); } catch { /* storage unavailable: keep the in-memory choice */ }
  }, [tweaks]);

  useEffect(() => {
    const on = () => {
      let cur: SectionId = 'hero';
      for (const id of SECTION_ORDER) {
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

  const sectionTitles: Record<SectionId, string> = {
    hero: t.nav.home,
    about: t.about.label,
    experience: t.experience.label,
    skills: t.skills.label,
    'claude-engineering': t.claudeEngineering.label,
    projects: t.projects.label,
    contact: t.contact.label,
  };
  const navSections = SECTION_ORDER.map((id) => {
    const label = t.nav.sections[NAV_KEY[id]];
    const title = sectionTitles[id];
    // WCAG 2.5.3: the accessible name must contain the visible label.
    return { id, label, title: title.toLowerCase().includes(label.toLowerCase()) ? title : `${label} · ${title}` };
  });
  const year = new Date().getFullYear();

  const onNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  const cycleTheme = () => {
    const keys = Object.keys(THEMES) as ThemeName[];
    const i = keys.indexOf(tweaks.theme);
    setTweaks((p) => ({ ...p, theme: keys[(i + 1) % keys.length] ?? DEFAULTS.theme }));
  };

  const cycleAccent = () => {
    const i = ACCENT_OPTIONS.findIndex((a) => a.value === tweaks.accent);
    const next = ACCENT_OPTIONS[(i + 1) % ACCENT_OPTIONS.length];
    setTweaks((p) => ({ ...p, accent: next?.value ?? DEFAULTS.accent }));
  };

  const toggleLang = () => setLanguage(language === 'es' ? 'en' : 'es');

  const accentKey = ACCENT_OPTIONS.find((a) => a.value === tweaks.accent)?.key;
  const accentLabel = accentKey ? t.accents[accentKey] : tweaks.accent;

  const sections: Record<SectionId, ReactNode> = {
    hero: (
      <>
        <HeroV3 data={data} lang={language} themeName={tweaks.theme} accent={tweaks.accent} onNav={onNav} />
        <MarqueeV3 items={t.marquee.primary.map((item) => fill(item, { year }))} />
      </>
    ),
    about: <AboutV3 data={data} lang={language} num={sectionNumber('about')} />,
    experience: <ExperienceV3 data={data} lang={language} num={sectionNumber('experience')} />,
    skills: <SkillsV3 data={data} lang={language} num={sectionNumber('skills')} />,
    'claude-engineering': <ClaudeEngineeringV3 data={data} lang={language} num={sectionNumber('claude-engineering')} />,
    projects: (
      <>
        <ProjectsV3 data={data} lang={language} num={sectionNumber('projects')} />
        <MarqueeV3 items={t.marquee.secondary} reverse speed={40} />
      </>
    ),
    contact: <ContactV3 data={data} lang={language} num={sectionNumber('contact')} />,
  };

  return (
    <>
      <CursorV3 />
      <NavV3 active={active} sections={navSections} onNav={onNav} lang={language} />
      <CornerTools
        theme={tweaks.theme}
        themeLabel={THEMES[tweaks.theme].label}
        accentLabel={accentLabel}
        city={data.contact.city}
        onCycleTheme={cycleTheme}
        onCycleAccent={cycleAccent}
        onToggleLang={toggleLang}
        lang={language}
      />
      <BottomHUD progress={progress} active={active} sections={navSections} />

      <main>
        {SECTION_ORDER.map((id) => <Fragment key={id}>{sections[id]}</Fragment>)}
      </main>

      <Analytics />
    </>
  );
}
