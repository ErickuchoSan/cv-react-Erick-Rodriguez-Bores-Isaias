/**
 * Skills, one list per output. Each output needs a different granularity (web chips,
 * ATS keywords with years, 12 pills that must fit the one-page PDF), so the lists are
 * separate on purpose — but each is defined once for both languages, and years of
 * experience live only in ATS_SKILLS.
 *
 * Adding a skill: put it in ATS_SKILLS with its experience; add it to WEB_SKILLS if it
 * deserves a chip on the site, and to CORE_SKILLS only if it is top-12 material.
 */
import type { Localizable, Localized } from '../i18n/lang';

export type SkillCategory = 'backend' | 'frontend' | 'devops' | 'ai';

/** "Stack" section of the web, one tab per category (tab order = key order). */
export const WEB_SKILLS: Record<SkillCategory, readonly string[]> = {
  backend: [
    '.NET Core 6/8/10', 'C#', 'SQL Server', 'PostgreSQL', 'Python',
    'Entity Framework', 'Stored Procedures', 'REST API', 'Swagger',
    'Lambda / LINQ', 'Redis', 'Microservices', 'Event-Driven',
  ],
  frontend: [
    'React 19', 'Next.js 16', 'TanStack Query', 'React Hook Form', 'Zod',
    'Framer Motion', 'Vue.js 3', 'Angular 17+', 'JavaScript ES2024',
    'TypeScript 5', 'NestJS 11', 'Tailwind CSS v4', 'Bootstrap 5',
  ],
  devops: [
    'GitHub / Forgejo Actions', 'CI/CD', 'SonarQube / SonarCloud', 'Docker',
    'Linux / Ubuntu Server', 'Nginx', 'Cloudflare', 'Tailscale', 'Trivy',
    'DigitalOcean', 'Git / GitHub', 'OWASP', 'SCRUM',
  ],
  ai: [
    'Claude (Anthropic)', 'MCP', 'Claude Code / AI Agents',
    'Gemini', 'AI Integration',
  ],
};

export interface AtsSkill {
  name: Localizable;
  /** Experience in months; rendered as "3 años" / "6 months". */
  months?: number;
  /** Shown in place of a duration, e.g. "(applied in projects)". */
  note?: Localized;
}

/** Skills practiced on the self-hosted server (see the homelab case study) rather than at a job. */
const HOMELAB: Localized = { es: 'homelab propio', en: 'own homelab' };

/** "Technical skills" line of the ATS PDF — the only place that states years per skill. */
export const ATS_SKILLS: readonly AtsSkill[] = [
  { name: 'C# / .NET Core 6/8/10', months: 36 },
  { name: 'SQL Server / T-SQL', months: 36 },
  { name: { es: 'Procedimientos Almacenados', en: 'Stored Procedures' }, months: 36 },
  { name: 'PostgreSQL 15/16', months: 12 },
  { name: 'Redis — Cache', months: 6 },
  { name: 'Python 3.x', months: 12 },
  { name: { es: 'Expresiones Lambda / LINQ', en: 'Lambda Expressions / LINQ' }, months: 36 },
  { name: 'React 19 / Next.js 16', months: 24 },
  { name: 'TanStack Query', months: 6 },
  { name: 'React Hook Form + Zod', months: 6 },
  { name: 'Tailwind CSS v4', months: 36 },
  { name: 'Framer Motion', months: 6 },
  { name: 'jQuery', months: 24 },
  { name: 'Vue.js 3', months: 12 },
  { name: 'Angular 17+', months: 12 },
  { name: 'TypeScript 5', months: 12 },
  { name: 'JavaScript ES2024', months: 36 },
  { name: 'Node.js 18/20', months: 36 },
  { name: 'NestJS 11', months: 12 },
  { name: 'REST API', months: 36 },
  { name: 'Swagger / OpenAPI', months: 24 },
  { name: 'Entity Framework', months: 36 },
  { name: 'Prisma ORM', months: 6 },
  { name: 'OAuth2 / JWT + Refresh Token Rotation', months: 24 },
  { name: 'OTP (bcrypt + SHA-256)', months: 6 },
  { name: { es: 'Cifrado AES/RSA', en: 'AES/RSA Encryption' }, months: 42 },
  { name: 'CSRF (HMAC-SHA256)', months: 6 },
  { name: 'Helmet / Security Headers', months: 6 },
  { name: 'OWASP Top 10', note: { es: 'aplicado en proyectos', en: 'applied in projects' } },
  { name: { es: 'Pruebas Unitarias — Jest + Vitest', en: 'Unit Testing — Jest + Vitest' }, months: 6 },
  { name: 'SonarCloud', months: 6 },
  { name: 'SCRUM', months: 10 },
  { name: 'Docker', months: 12 },
  { name: 'GitHub Actions / CI/CD', months: 12 },
  { name: 'DigitalOcean — VPS + Spaces (S3)', months: 6 },
  { name: 'Linux — Ubuntu Server 24.04 LTS', note: HOMELAB },
  { name: 'SonarQube + Forgejo Actions (self-hosted)', note: HOMELAB },
  { name: 'Nginx Proxy Manager / Cloudflare / Tailscale', note: HOMELAB },
  { name: { es: 'Trivy — Escaneo de CVEs', en: 'Trivy — CVE Scanning' }, note: HOMELAB },
  { name: 'Git / GitHub', months: 36 },
  { name: 'SOLID', months: 24 },
  { name: { es: 'Arquitectura Limpia / DDD', en: 'Clean Architecture / DDD' }, months: 24 },
  { name: 'Event-Driven Architecture', months: 6 },
  { name: { es: 'Microservicios', en: 'Microservices' }, months: 12 },
  { name: 'pnpm Workspaces — Monorepo', months: 6 },
  { name: 'ApiDog / Postman / Insomnia' },
  { name: 'Claude Code + MCP (Model Context Protocol)' },
  { name: { es: 'Desarrollo asistido por IA (Claude, Gemini)', en: 'AI-assisted development (Claude, Gemini)' } },
];

/** Sidebar pills of the one-page visual PDF. Keep it at 12 so the page doesn't overflow. */
export const CORE_SKILLS: readonly Localizable[] = [
  'C# / .NET Core 6/8/10',
  'React 19 / Next.js 16',
  'SQL Server / T-SQL',
  'Node.js / NestJS 11',
  'TypeScript 5',
  'Entity Framework',
  'OAuth2 / JWT',
  { es: 'Cifrado AES / RSA', en: 'AES / RSA Encryption' },
  'Docker',
  'SOLID / Clean Arch',
  'Git / GitHub',
  'PostgreSQL 15/16',
];
