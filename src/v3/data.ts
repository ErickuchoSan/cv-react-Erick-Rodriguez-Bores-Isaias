import { translations } from '../i18n/translations';
import { CONTACT_INFO } from '../data/contact';

type Lang = 'es' | 'en';

export interface Job {
  role: string;
  company: string;
  period: string;
  duration: string;
  summary: string;
  bullets: string[];
  achievements: string[];
  stack: string[];
}

export interface ProjectV3 {
  name: string;
  kind: string;
  year: string;
  icon: string;
  color: string;
  desc: string;
  tags: string[];
}

export interface SkillCategory {
  [k: string]: string[];
}

export interface CVData {
  name: string;
  role: string;
  years: number;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  site: string;
  photo: string;
  availability: string;
  heroStack: string[];
  stats: { k: string; v: string }[];
  experience: Job[];
  skills: SkillCategory;
  competencies: { title: string; desc: string }[];
  languages: { lang: string; pct: number; level: string; details: string[] }[];
  projects: ProjectV3[];
  education: { title: string; place?: string; period: string }[];
  marquee1: string[];
  marquee2: string[];
}

const STACK_BY_JOB_ES: string[][] = [
  ['.NET Core 6', 'C#', 'SQL Server', 'OAuth2/JWT', 'Entity Framework', 'HTML/Bootstrap', 'Git'],
  ['.NET Framework', 'C#', 'Entity Framework', 'SQL Server', 'JavaScript/jQuery', 'Bootstrap', 'GitHub'],
  ['NestJS 11', 'Next.js 16', 'PostgreSQL', 'Prisma', 'Docker', 'GitHub Actions', 'Redis', 'TypeScript'],
];

const PROJECT_COLORS = ['#ff5b2e', '#22d3ee', '#a78bfa'];
const PROJECT_ICONS = ['◐', '◇', '◈'];
const PROJECT_KINDS = ['Plataforma B2B/B2C', 'Sistema Crítico Empresarial', 'Sistema de Reclutamiento'];
const PROJECT_KINDS_EN = ['B2B/B2C Platform', 'Enterprise Critical System', 'Recruitment System'];
const PROJECT_YEARS = ['2025—', '2024—', '2023'];
const PROJECT_TAGS: string[][] = [
  ['NestJS', 'Next.js 16', 'PostgreSQL', 'Prisma', 'Docker', 'JWT/OTP', 'RBAC', 'CI/CD'],
  ['.NET Core 6', 'C#', 'SQL Server', 'OAuth2/JWT', 'EF Core'],
  ['.NET Framework', 'JavaScript', 'Bootstrap', 'SQL'],
];

export function buildData(lang: Lang): CVData {
  const t = translations[lang];

  const skills: SkillCategory = lang === 'es'
    ? {
        Backend: [
          '.NET Core 6/8/10', 'C#', 'SQL Server', 'PostgreSQL', 'Python',
          'Entity Framework', 'Stored Procedures', 'REST API', 'Swagger',
          'Lambda / LINQ', 'Redis', 'Microservices', 'Event-Driven',
        ],
        Frontend: [
          'React 19', 'Next.js 16', 'TanStack Query', 'React Hook Form', 'Zod',
          'Framer Motion', 'Vue.js 3', 'Angular 17+', 'JavaScript ES2024',
          'TypeScript 5', 'NestJS 11', 'Tailwind CSS v4', 'Bootstrap 5',
        ],
        DevOps: [
          'GitHub Actions', 'CI/CD', 'SonarCloud', 'Docker', 'DigitalOcean',
          'Prometheus', 'Pino', 'Playwright', 'Git / GitHub',
          'CRON', 'OWASP', 'SCRUM',
        ],
        IA: [
          'Claude (Anthropic)', 'MCP', 'Claude Code / AI Agents',
          'Gemini', 'AI Integration',
        ],
      }
    : {
        Backend: [
          '.NET Core 6/8/10', 'C#', 'SQL Server', 'PostgreSQL', 'Python',
          'Entity Framework', 'Stored Procedures', 'REST API', 'Swagger',
          'Lambda / LINQ', 'Redis', 'Microservices', 'Event-Driven',
        ],
        Frontend: [
          'React 19', 'Next.js 16', 'TanStack Query', 'React Hook Form', 'Zod',
          'Framer Motion', 'Vue.js 3', 'Angular 17+', 'JavaScript ES2024',
          'TypeScript 5', 'NestJS 11', 'Tailwind CSS v4', 'Bootstrap 5',
        ],
        DevOps: [
          'GitHub Actions', 'CI/CD', 'SonarCloud', 'Docker', 'DigitalOcean',
          'Prometheus', 'Pino', 'Playwright', 'Git / GitHub',
          'CRON', 'OWASP', 'SCRUM',
        ],
        AI: [
          'Claude (Anthropic)', 'MCP', 'Claude Code / AI Agents',
          'Gemini', 'AI Integration',
        ],
      };

  const competencies = t.skills.competencies.items.map((c) => ({
    title: c.title,
    desc: c.desc,
  }));

  const languages = lang === 'es'
    ? [
        { lang: 'Español', pct: 100, level: 'Nativo', details: t.languages.items[0].details },
        { lang: 'Inglés', pct: 60, level: 'A2-B1 Intermedio', details: t.languages.items[1].details },
      ]
    : [
        { lang: 'Spanish', pct: 100, level: 'Native', details: t.languages.items[0].details },
        { lang: 'English', pct: 60, level: 'A2-B1 Intermediate', details: t.languages.items[1].details },
      ];

  const experience: Job[] = t.experience.jobs.map((j, i) => ({
    role: j.role,
    company: j.company,
    period: j.period,
    duration: j.duration,
    summary: j.description,
    bullets: j.functions,
    achievements: j.achievements,
    stack: STACK_BY_JOB_ES[i] ?? [],
  }));

  const projects: ProjectV3[] = t.projects.items.map((p, i) => ({
    name: p.title,
    kind: (lang === 'es' ? PROJECT_KINDS : PROJECT_KINDS_EN)[i] ?? '',
    year: PROJECT_YEARS[i] ?? '',
    icon: PROJECT_ICONS[i] ?? '◆',
    color: PROJECT_COLORS[i] ?? 'var(--accent)',
    desc: p.description,
    tags: PROJECT_TAGS[i] ?? [],
  }));

  const stats = lang === 'es'
    ? [
        { k: '3', v: 'Años exp.' },
        { k: '40%', v: 'Optimización SQL' },
        { k: '57', v: 'Suites de tests' },
        { k: '5K+', v: 'Registros / 10s' },
      ]
    : [
        { k: '3', v: 'Years exp.' },
        { k: '40%', v: 'SQL Optimization' },
        { k: '57', v: 'Test suites' },
        { k: '5K+', v: 'Records / 10s' },
      ];

  const education = lang === 'es'
    ? [
        { title: t.about.education.degree1, place: 'UTEL Universidad', period: '2019 – 2023' },
        { title: t.about.education.degree2, place: 'UNIR · Internacional de La Rioja', period: 'En curso · 2025' },
      ]
    : [
        { title: t.about.education.degree1, place: 'UTEL University', period: '2019 – 2023' },
        { title: t.about.education.degree2, place: 'UNIR · International of La Rioja', period: 'In progress · 2025' },
      ];

  return {
    name: 'Erick Bores',
    role: t.hero.role,
    years: 3,
    email: CONTACT_INFO.email,
    phone: CONTACT_INFO.phone,
    location: CONTACT_INFO.location,
    github: 'github.com/ErickuchoSan',
    linkedin: 'www.linkedin.com/in/erick-rodriguez-bores-isaias',
    site: 'eboresi.dev',
    photo: '/assets/images/profile.jpg',
    availability: lang === 'es'
      ? 'Tiempo completo · Híbrido / Remoto · Abierto a oportunidades internacionales'
      : 'Full-time · Hybrid / Remote · Open to international opportunities',
    heroStack: ['.NET', 'React', 'PostgreSQL', 'Docker', 'NestJS'],
    stats,
    experience,
    skills,
    competencies,
    languages,
    projects,
    education,
    marquee1: lang === 'es'
      ? ['Full Stack Senior', '.NET · React', 'CDMX · 2026', 'Clean Architecture', 'AI-Assisted Dev', 'Cloud Native']
      : ['Senior Full Stack', '.NET · React', 'CDMX · 2026', 'Clean Architecture', 'AI-Assisted Dev', 'Cloud Native'],
    marquee2: lang === 'es'
      ? ['Disponible', 'Remoto / Híbrido', 'Internacional', 'Full-time']
      : ['Available', 'Remote / Hybrid', 'International', 'Full-time'],
  };
}
