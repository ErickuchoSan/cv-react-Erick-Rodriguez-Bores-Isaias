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
}

export const THEMES: Record<ThemeName, Theme> = {
  noir: {
    label: 'Noir', hint: 'Oscuro carbón',
    bg: '#0a0a0a', bg2: '#121212', bg3: '#1a1a1a',
    fg: '#fafaf7', fgMuted: '#a8a49e', fgDim: '#6a6762',
    line: 'rgba(250,250,247,0.08)', lineStrong: 'rgba(250,250,247,0.18)',
    mode: 'dark', swatch: ['#0a0a0a', '#fafaf7'],
  },
  paper: {
    label: 'Paper', hint: 'Claro papel',
    bg: '#f6f3ec', bg2: '#eeeae0', bg3: '#e4dfd1',
    fg: '#1a1613', fgMuted: '#5a4f44', fgDim: '#8a7f73',
    line: 'rgba(26,22,19,0.12)', lineStrong: 'rgba(26,22,19,0.28)',
    mode: 'light', swatch: ['#f6f3ec', '#1a1613'],
  },
  ivory: {
    label: 'Ivory', hint: 'Crema cálido',
    bg: '#eee6d4', bg2: '#e4dcc6', bg3: '#d9cfb5',
    fg: '#1f1a13', fgMuted: '#6b5d4a', fgDim: '#9a8a72',
    line: 'rgba(31,26,19,0.12)', lineStrong: 'rgba(31,26,19,0.28)',
    mode: 'light', swatch: ['#eee6d4', '#1f1a13'],
  },
  slate: {
    label: 'Slate', hint: 'Azul pizarra',
    bg: '#0d1520', bg2: '#14202f', bg3: '#1c2a3d',
    fg: '#e8eef5', fgMuted: '#8fa1b8', fgDim: '#5a6a80',
    line: 'rgba(232,238,245,0.08)', lineStrong: 'rgba(232,238,245,0.18)',
    mode: 'dark', swatch: ['#0d1520', '#e8eef5'],
  },
  forest: {
    label: 'Forest', hint: 'Verde bosque',
    bg: '#0c140f', bg2: '#14201a', bg3: '#1e2e25',
    fg: '#ecf2ec', fgMuted: '#8ea598', fgDim: '#5a6e62',
    line: 'rgba(236,242,236,0.08)', lineStrong: 'rgba(236,242,236,0.18)',
    mode: 'dark', swatch: ['#0c140f', '#ecf2ec'],
  },
  linen: {
    label: 'Linen', hint: 'Blanco lino',
    bg: '#ece7de', bg2: '#e0dace', bg3: '#d3ccbc',
    fg: '#141210', fgMuted: '#58504a', fgDim: '#857e76',
    line: 'rgba(20,18,16,0.12)', lineStrong: 'rgba(20,18,16,0.28)',
    mode: 'light', swatch: ['#ece7de', '#141210'],
  },
  midnight: {
    label: 'Midnight', hint: 'Violeta noche',
    bg: '#0e0b1a', bg2: '#17132a', bg3: '#221c3d',
    fg: '#ecebf5', fgMuted: '#9b95b8', fgDim: '#625c80',
    line: 'rgba(236,235,245,0.08)', lineStrong: 'rgba(236,235,245,0.2)',
    mode: 'dark', swatch: ['#0e0b1a', '#ecebf5'],
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
  display_font: 'Fraunces',
  sans_font: 'Inter',
  mono_font: 'JetBrains Mono',
};
