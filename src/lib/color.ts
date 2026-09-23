/** WCAG AA for normal-size text. */
export const MIN_TEXT_CONTRAST = 4.5;

const MIX_STEP = 0.02;

type Rgb = [number, number, number];

function parseHex(hex: string): Rgb {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m?.[1]) throw new RangeError(`Expected a #rrggbb color, got "${hex}"`);
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function toHex([r, g, b]: Rgb): string {
  return `#${[r, g, b].map((c) => Math.round(c).toString(16).padStart(2, '0')).join('')}`;
}

function luminance(rgb: Rgb): number {
  const [r, g, b] = rgb.map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  }) as Rgb;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(parseHex(a)), luminance(parseHex(b))].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}

/** Linear mix in sRGB: `amount` 0 → `from`, 1 → `to`. */
export function mix(from: string, to: string, amount: number): string {
  const a = parseHex(from);
  const b = parseHex(to);
  return toHex([0, 1, 2].map((i) => a[i]! + (b[i]! - a[i]!) * amount) as Rgb);
}

/**
 * The closest variant of `color` that stays readable as text on every background:
 * darkened on light themes, lightened on dark ones, only as much as needed.
 */
export function readableOn(color: string, backgrounds: readonly string[], min = MIN_TEXT_CONTRAST): string {
  const avgLum = backgrounds.reduce((sum, bg) => sum + luminance(parseHex(bg)), 0) / backgrounds.length;
  const target = avgLum > 0.4 ? '#000000' : '#ffffff';
  for (let t = 0; t <= 1; t += MIX_STEP) {
    const candidate = mix(color, target, t);
    if (backgrounds.every((bg) => contrast(candidate, bg) >= min)) return candidate;
  }
  return target;
}

/** Black or white, whichever reads better on top of `background`. */
export function textOn(background: string): string {
  return contrast('#000000', background) >= contrast('#ffffff', background) ? '#000000' : '#ffffff';
}
