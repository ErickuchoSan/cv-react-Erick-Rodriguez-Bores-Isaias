import { LOCALES, type Lang } from '../i18n/lang';
import { translations } from '../i18n/translations';

/** 'YYYY-MM' — month precision is all a CV needs, and it avoids timezone drift. */
export type YearMonth = `${number}-${number}`;

interface PluralForms { one: string; other: string }

export function plural(lang: Lang, count: number, forms: PluralForms): string {
  return new Intl.PluralRules(LOCALES[lang]).select(count) === 'one' ? forms.one : forms.other;
}

function formatNumber(lang: Lang, value: number): string {
  return new Intl.NumberFormat(LOCALES[lang], { maximumFractionDigits: 1 }).format(value);
}

function parseYearMonth(value: YearMonth): { year: number; month: number } {
  const [year, month] = value.split('-').map(Number);
  if (!year || !month || month < 1 || month > 12) throw new RangeError(`Invalid YearMonth: ${value}`);
  return { year, month };
}

function toYearMonth(date: Date): YearMonth {
  return `${date.getFullYear()}-${date.getMonth() + 1}`;
}

export function monthsBetween(start: YearMonth, end: YearMonth | null, now = new Date()): number {
  const a = parseYearMonth(start);
  const b = parseYearMonth(end ?? toYearMonth(now));
  return (b.year - a.year) * 12 + (b.month - a.month);
}

function monthName(lang: Lang, value: YearMonth): string {
  const { year, month } = parseYearMonth(value);
  const name = new Intl.DateTimeFormat(LOCALES[lang], { month: 'long' }).format(new Date(year, month - 1, 1));
  return `${name.charAt(0).toUpperCase()}${name.slice(1)} ${year}`;
}

/** "Mayo 2024 - Actual" / "May 2024 - Present" — the format the ATS guide asks for. */
export function formatPeriod(lang: Lang, start: YearMonth, end: YearMonth | null): string {
  const t = translations[lang].time;
  return `${monthName(lang, start)} - ${end ? monthName(lang, end) : t.present}`;
}

/** "2019 - 2023" or "En curso • 2025 - Actual". */
export function formatYearRange(lang: Lang, start: number, end: number | null): string {
  const t = translations[lang].time;
  return end ? `${start} - ${end}` : `${t.inProgress} • ${start} - ${t.present}`;
}

function formatYearsOrMonths(lang: Lang, months: number): string {
  const t = translations[lang].time;
  if (months < 12) return `${months} ${plural(lang, months, t.months)}`;
  const years = months / 12;
  return `${formatNumber(lang, years)} ${plural(lang, years, t.years)}`;
}

/** Job length: exact when the job ended on a whole year, approximate ("~") otherwise. */
export function formatJobDuration(lang: Lang, start: YearMonth, end: YearMonth | null, now = new Date()): string {
  const months = monthsBetween(start, end, now);
  if (months < 12) return `~${formatYearsOrMonths(lang, months)}`;
  const halfYears = Math.floor(months / 6) / 2;
  const exact = end !== null && months % 12 === 0;
  return `${exact ? '' : '~'}${formatYearsOrMonths(lang, halfYears * 12)}`;
}

/** Skill experience as stated on the ATS PDF: "3 años", "3.5 years", "6 meses". */
export function formatExperience(lang: Lang, months: number): string {
  return formatYearsOrMonths(lang, months);
}

export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

const ROMAN: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
  [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];

export function toRoman(value: number): string {
  let rest = value;
  return ROMAN.reduce((out, [n, glyph]) => {
    const times = Math.floor(rest / n);
    rest -= times * n;
    return out + glyph.repeat(times);
  }, '');
}
