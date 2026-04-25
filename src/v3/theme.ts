export type ThemeName = 'noir' | 'paper' | 'ivory' | 'slate' | 'forest' | 'linen' | 'midnight';

export interface Theme {
  label: string;
  hint: string;
  bg: string;
  bg2: string;
  bg3: string;
  fg: string;
  fgMuted: string;
  fgDim: string;
  line: string;
  lineStrong: string;
  mode: 'dark' | 'light';
  swatch: [string, string];
  // Per-theme typography — gives each palette its own essence
  display: string;
  sans: string;
  mono: string;
}

export const THEMES: Record<ThemeName, Theme> = {
  // Editorial dark — high-contrast magazine, serif italic + clean sans
  noir: {
    label: 'Noir', hint: 'Editorial carbón',
    bg: '#0a0a0a', bg2: '#161616', bg3: '#202020',
    fg: '#fafaf7', fgMuted: '#a8a49e', fgDim: '#6a6762',
    line: 'rgba(250,250,247,0.08)', lineStrong: 'rgba(250,250,247,0.18)',
    mode: 'dark', swatch: ['#0a0a0a', '#fafaf7'],
    display: 'Fraunces', sans: 'Inter', mono: 'JetBrains Mono',
  },
  // Magazine print — clean white paper, classic serif
  paper: {
    label: 'Paper', hint: 'Print clásico',
    bg: '#fafaf5', bg2: '#f0ede4', bg3: '#e6e1d3',
    fg: '#16140f', fgMuted: '#5a4f3f', fgDim: '#8a7e6a',
    line: 'rgba(22,20,15,0.10)', lineStrong: 'rgba(22,20,15,0.26)',
    mode: 'light', swatch: ['#fafaf5', '#16140f'],
    display: 'Fraunces', sans: 'Inter', mono: 'JetBrains Mono',
  },
  // Vintage warm — antique book, Instrument Serif elegance
  ivory: {
    label: 'Ivory', hint: 'Vintage cálido',
    bg: '#efe1bf', bg2: '#e3d4a8', bg3: '#d6c590',
    fg: '#2a1d09', fgMuted: '#6e5a37', fgDim: '#9a865d',
    line: 'rgba(42,29,9,0.13)', lineStrong: 'rgba(42,29,9,0.30)',
    mode: 'light', swatch: ['#efe1bf', '#2a1d09'],
    display: 'Instrument Serif', sans: 'Inter', mono: 'IBM Plex Mono',
  },
  // Tech corporate — sharp blue steel, geometric sans throughout
  slate: {
    label: 'Slate', hint: 'Tech corporativo',
    bg: '#0a1424', bg2: '#0f1d33', bg3: '#172843',
    fg: '#dce9ff', fgMuted: '#7e9bcd', fgDim: '#4a6694',
    line: 'rgba(220,233,255,0.09)', lineStrong: 'rgba(220,233,255,0.20)',
    mode: 'dark', swatch: ['#0a1424', '#dce9ff'],
    display: 'Space Grotesk', sans: 'Space Grotesk', mono: 'JetBrains Mono',
  },
  // Organic — deep forest, warm serif
  forest: {
    label: 'Forest', hint: 'Bosque orgánico',
    bg: '#081a10', bg2: '#102a1c', bg3: '#1a3d2a',
    fg: '#dcefdc', fgMuted: '#7da890', fgDim: '#4a6e57',
    line: 'rgba(220,239,220,0.09)', lineStrong: 'rgba(220,239,220,0.20)',
    mode: 'dark', swatch: ['#081a10', '#dcefdc'],
    display: 'Fraunces', sans: 'Inter', mono: 'JetBrains Mono',
  },
  // Swiss minimal — flat off-white, all-sans rigor (NO serif anywhere)
  linen: {
    label: 'Linen', hint: 'Suizo minimal',
    bg: '#e8e6dd', bg2: '#dcd9cd', bg3: '#cec9b9',
    fg: '#0c0c0a', fgMuted: '#4a4742', fgDim: '#7a766f',
    line: 'rgba(12,12,10,0.12)', lineStrong: 'rgba(12,12,10,0.30)',
    mode: 'light', swatch: ['#e8e6dd', '#0c0c0a'],
    display: 'Inter', sans: 'Inter', mono: 'JetBrains Mono',
  },
  // Synthwave — cyber violet night, futurist geometric
  midnight: {
    label: 'Midnight', hint: 'Cyber violeta',
    bg: '#0d061f', bg2: '#1a0f38', bg3: '#291c52',
    fg: '#ece4ff', fgMuted: '#a193d4', fgDim: '#665593',
    line: 'rgba(236,228,255,0.08)', lineStrong: 'rgba(236,228,255,0.22)',
    mode: 'dark', swatch: ['#0d061f', '#ece4ff'],
    display: 'Space Grotesk', sans: 'Space Grotesk', mono: 'JetBrains Mono',
  },
};

export const ACCENT_OPTIONS = [
  { label: 'Terracota', value: '#ff5b2e' },
  { label: 'Óxido', value: '#d14a24' },
  { label: 'Mostaza', value: '#eab308' },
  { label: 'Lima', value: '#84cc16' },
  { label: 'Cian', value: '#22d3ee' },
  { label: 'Violeta', value: '#a78bfa' },
];

export const DEFAULTS = {
  theme: 'noir' as ThemeName,
  accent: '#ff5b2e',
};
