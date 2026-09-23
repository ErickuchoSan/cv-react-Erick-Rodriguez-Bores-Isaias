/**
 * Resolves the CV content for one language. The web and both PDFs render from this
 * model, so they can't disagree about a fact.
 */
import { pick, type Lang, type Localizable, type Localized } from '../i18n/lang';
import { translations } from '../i18n/translations';
import { fill, formatExperience, formatJobDuration, formatPeriod, formatYearRange, monthsBetween, plural } from '../lib/format';
import {
  CLAUDE_ENGINEERING, COMPETENCIES, CONTACT, EDUCATION, HERO_STACK, JOBS, LANGUAGES,
  METRICS, PERSON, PROFILE, STATS, TERMINAL_STACK, type Bullet, type JobId,
} from './cv';
import { PROJECTS, STACK_GROUPS, type DemoState, type ProjectId, type StackGroup } from './projects';
import { ATS_SKILLS, CORE_SKILLS, WEB_SKILLS, type SkillCategory } from './skills';

export { STACK_GROUPS, type StackGroup };

export interface Job {
  id: JobId;
  role: string;
  company: string;
  period: string;
  duration: string;
  summary: string;
  functions: string[];
  achievements: string[];
  /** What the one-page visual PDF shows for this job. */
  featured: { functions: string[]; achievement: string | undefined };
  stack: readonly string[];
}

export interface Project {
  id: ProjectId;
  name: string;
  kind: string;
  year: string;
  icon: string;
  color: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string[];
  architecturePatterns: readonly string[];
  highlights: { title: string; summary: string }[];
  /** Every group is present; the ones a project doesn't use are empty. */
  stack: Record<StackGroup, string[]>;
  metrics: { value: string; label: string }[];
  role: string;
  demo: DemoState;
  tech: readonly string[];
}

export interface ProfileLink {
  url: string;
  /** "in/erick-…" / "@ErickuchoSan" */
  handle: string;
  /** URL without the protocol, as printed on the ATS PDF. */
  display: string;
}

export interface CV {
  lang: Lang;
  name: { first: string; display: string; full: string; lines: readonly [string, string] };
  photo: string;
  role: string;
  taglines: readonly [string, string];
  /** Company of the first current job — "Actualmente en …". */
  employer: string;
  years: number;
  /** "3 años" / "3 years" */
  yearsText: string;
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    location: string;
    city: string;
    country: string;
    linkedin: ProfileLink;
    github: ProfileLink;
    website: { url: string; display: string };
  };
  availability: string;
  summary: string;
  current: string;
  heroStack: readonly string[];
  terminal: { stack: readonly string[]; log: string[] };
  stats: { value: string; label: string }[];
  experience: Job[];
  skills: {
    web: { id: SkillCategory; label: string; items: readonly string[] }[];
    ats: string[];
    core: string[];
  };
  competencies: { title: string; desc: string }[];
  languages: { name: string; level: string; pct: number; details: string[] }[];
  education: { degree: string; school: string; period: string }[];
  projects: Project[];
  claude: {
    capabilities: { title: string; desc: string }[];
    stat: string;
    /** The best-practices framework code is written and reviewed against. */
    framework: { principles: number; summary: string; domains: string[] };
  };
}

const FEATURED_FUNCTIONS = 2;

function featured(bullets: readonly Bullet[], count: number): readonly Bullet[] {
  const flagged = bullets.filter((b) => b.highlight);
  return (flagged.length > 0 ? flagged : bullets).slice(0, count);
}

function stackOf(
  stack: Partial<Record<StackGroup, readonly Localizable[]>>,
  lang: Lang,
): Record<StackGroup, string[]> {
  const list = (group: StackGroup) => (stack[group] ?? []).map((s) => pick(s, lang));
  return {
    backend: list('backend'),
    frontend: list('frontend'),
    infra: list('infra'),
    cicd: list('cicd'),
    security: list('security'),
    observability: list('observability'),
    testing: list('testing'),
  };
}

function profileLink(url: string, handle: (path: string) => string): ProfileLink {
  const path = new URL(url).pathname.replace(/^\/+|\/+$/g, '');
  return { url, handle: handle(path), display: url.replace(/^https?:\/\//, '') };
}

/** Whole years since the first job started. */
export function yearsOfExperience(now = new Date()): number {
  const months = Math.max(...JOBS.map((job) => monthsBetween(job.start, null, now)));
  return Math.floor(months / 12);
}

function currentEmployer(): string {
  const job = JOBS.find((j) => j.end === null);
  if (!job) throw new Error('JOBS needs at least one current job (end: null)');
  return job.company;
}

export function buildCV(lang: Lang, now = new Date()): CV {
  const t = translations[lang];
  const tr = (value: Localized) => value[lang];
  const years = yearsOfExperience(now);
  const yearsText = `${years} ${plural(lang, years, t.time.years)}`;
  const align = PROJECTS[0];

  return {
    lang,
    name: {
      first: PERSON.firstName,
      display: PERSON.displayName,
      full: PERSON.fullName,
      lines: PERSON.nameLines,
    },
    photo: PERSON.photo,
    role: tr(PERSON.role),
    taglines: PERSON.taglines,
    employer: currentEmployer(),
    years,
    yearsText,
    contact: {
      email: CONTACT.email,
      phone: CONTACT.phone,
      phoneHref: `tel:${CONTACT.phone.replace(/\s+/g, '')}`,
      location: CONTACT.location,
      city: CONTACT.city,
      country: tr(CONTACT.country),
      linkedin: profileLink(CONTACT.linkedin, (path) => path),
      github: profileLink(CONTACT.github, (path) => `@${path}`),
      website: { url: CONTACT.website, display: new URL(CONTACT.website).host },
    },
    availability: tr(PROFILE.availability),
    summary: fill(tr(PROFILE.summary), { years: yearsText }),
    current: tr(PROFILE.current),
    heroStack: HERO_STACK,
    terminal: {
      stack: TERMINAL_STACK,
      log: [
        `a8f2c10 feat: ${align.name} → prod`,
        `9d7e453 perf: -${METRICS.sqlOptimization} SQL query time`,
        `3b2a891 feat: API Honestel v2 (${METRICS.honestelEndpoints} endpoints)`,
        `7c4f912 chore: ${METRICS.testSuites} test suites · CI/CD`,
      ],
    },
    stats: [
      { value: String(years), label: t.about.yearsStat },
      ...STATS.map((s) => ({ value: s.value, label: tr(s.label) })),
    ],
    experience: JOBS.map((job) => ({
      id: job.id,
      role: tr(job.role),
      company: job.company,
      period: formatPeriod(lang, job.start, job.end),
      duration: formatJobDuration(lang, job.start, job.end, now),
      summary: tr(job.summary),
      functions: job.functions.map(tr),
      achievements: job.achievements.map(tr),
      featured: {
        functions: featured(job.functions, FEATURED_FUNCTIONS).map(tr),
        achievement: featured(job.achievements, 1).map(tr)[0],
      },
      stack: job.stack,
    })),
    skills: {
      web: (Object.keys(WEB_SKILLS) as SkillCategory[]).map((id) => ({
        id,
        label: t.skills.categories[id],
        items: WEB_SKILLS[id],
      })),
      ats: ATS_SKILLS.map((skill) => {
        const name = pick(skill.name, lang);
        if (skill.months !== undefined) return `${name} (${formatExperience(lang, skill.months)})`;
        if (skill.note) return `${name} (${tr(skill.note)})`;
        return name;
      }),
      core: CORE_SKILLS.map((skill) => pick(skill, lang)),
    },
    competencies: COMPETENCIES.map((c) => ({ title: tr(c.title), desc: tr(c.desc) })),
    languages: LANGUAGES.map((l) => ({
      name: tr(l.name),
      level: tr(l.level),
      pct: l.pct,
      details: l.details.map(tr),
    })),
    education: EDUCATION.map((e) => ({
      degree: tr(e.degree),
      school: tr(e.school),
      period: formatYearRange(lang, e.start, e.end),
    })),
    projects: PROJECTS.map((p) => ({
      id: p.id,
      name: p.name,
      kind: pick(p.kind, lang),
      year: p.year,
      icon: p.icon,
      color: p.color,
      tagline: p.tagline,
      description: tr(p.description),
      problem: tr(p.problem),
      solution: p.solution.map(tr),
      architecturePatterns: p.architecturePatterns,
      highlights: p.highlights.map((h) => ({ title: pick(h.title, lang), summary: tr(h.summary) })),
      stack: stackOf(p.stack, lang),
      metrics: p.metrics.map((m) => ({ value: m.value, label: tr(m.label) })),
      role: tr(p.role),
      demo: p.demo,
      tech: p.tech,
    })),
    claude: {
      capabilities: CLAUDE_ENGINEERING.capabilities.map((c) => ({ title: c.title, desc: tr(c.desc) })),
      stat: CLAUDE_ENGINEERING.stat,
      framework: {
        principles: CLAUDE_ENGINEERING.framework.principles,
        summary: tr(CLAUDE_ENGINEERING.framework.summary),
        domains: CLAUDE_ENGINEERING.framework.domains.map((d) => pick(d, lang)),
      },
    },
  };
}
