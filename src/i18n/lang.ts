export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];

/** Text that must exist in every language — the type makes a missing translation a build error. */
export type Localized<T = string> = Record<Lang, T>;

/** Brand names and tech terms stay identical across languages; everything else is Localized. */
export type Localizable = string | Localized;

export const LOCALES: Record<Lang, string> = { es: 'es-MX', en: 'en-US' };

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}

export function pick(value: Localizable, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}
