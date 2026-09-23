/**
 * Single source of truth for the CV content shown on the web and in both PDFs.
 *
 * - Facts that don't depend on the language (names, URLs, dates, tech) are plain values.
 * - Text is `Localized`: every entry carries its `es` and `en` side by side, so a
 *   missing translation fails the build and both languages can't drift apart.
 * - Durations, periods and total years are computed from the dates — never type them.
 *
 * Projects live in `projects.ts`, skills in `skills.ts`. UI labels live in
 * `src/i18n/translations.ts`.
 */
import type { Localizable, Localized } from '../i18n/lang';
import type { YearMonth } from '../lib/format';

export const PERSON = {
  firstName: 'Erick',
  displayName: 'Erick Bores',
  fullName: 'Erick Rodríguez Bores Isaías',
  /** How the name breaks across two lines in the visual PDF. */
  nameLines: ['Erick Rodríguez', 'Bores Isaías'],
  photo: '/assets/images/profile.jpg',
  role: {
    es: 'Desarrollador Full Stack .NET & React',
    en: 'Full Stack Developer .NET & React',
  } satisfies Localized,
  // Brand strings: identical in ES and EN on purpose — do not translate.
  taglines: ['Full Stack Developer · .NET & React', 'Claude Code Power User'],
} as const;

export const CONTACT = {
  email: 'e.bores.i@outlook.com',
  phone: '+52 55 7110 4581',
  location: 'Cuajimalpa de Morelos, CDMX',
  city: 'CDMX',
  country: { es: 'México', en: 'Mexico' } satisfies Localized,
  linkedin: 'https://www.linkedin.com/in/erick-rodriguez-bores-isaias',
  github: 'https://github.com/ErickuchoSan',
  /** Where this CV is published (index.html's og:url repeats it: keep both in sync). */
  website: 'https://eboresi.com',
} as const;

/** `{years}` is replaced with the computed experience, unit included ("3 años" / "3 years"). */
export const PROFILE = {
  summary: {
    es: 'Con {years} de experiencia en desarrollo de software empresarial, diseño e implemento arquitecturas escalables con C#/.NET Core 6/8/10, SQL Server y Node.js (3 años), React 19 (2 años), y Next.js 16, PostgreSQL y NestJS 11 (1 año). Experiencia sólida en REST APIs, Entity Framework, OAuth2/JWT, cifrado AES/RSA, Docker y Python. Trabajo con Claude Code y reviso el código contra un marco de 133 principios de diseño (OWASP Top 10, WCAG 2.2, Core Web Vitals).',
    en: 'With {years} of experience in enterprise software development, I design and implement scalable architectures with C#/.NET Core 6/8/10, SQL Server and Node.js (3 years), React 19 (2 years), and Next.js 16, PostgreSQL and NestJS 11 (1 year). Solid experience in REST APIs, Entity Framework, OAuth2/JWT, AES/RSA encryption, Docker and Python. I work with Claude Code and review code against a 133-principle design framework (OWASP Top 10, WCAG 2.2, Core Web Vitals).',
  },
  current: {
    es: 'Actualmente como Programador de Auditoría Senior en Grupo Salinas, lidero el desarrollo de sistemas críticos de auditoría interna (ADA/HONESTEL) con .NET Core 6, C#, SQL Server y OAuth2/JWT. Paralelamente desarrollo la plataforma Align Designs (freelance) con NestJS 11, Next.js 16, PostgreSQL y Docker. Trabajo por fases con skills por tecnología, seguimiento en ClickUp, pruebas por fase y CI/CD con SonarCloud, health checks y backups automáticos. Además opero un homelab self-hosted (Docker, Forgejo Actions, SonarQube, Trivy, Cloudflare).',
    en: 'Currently as a Senior Audit Programmer at Grupo Salinas, I lead the development of critical internal audit systems (ADA/HONESTEL) with .NET Core 6, C#, SQL Server and OAuth2/JWT. In parallel, I develop the Align Designs platform (freelance) with NestJS 11, Next.js 16, PostgreSQL and Docker. I work in phases with tech-specific skills, ClickUp tracking, per-phase testing and CI/CD with SonarCloud, health checks and automated backups. I also run a self-hosted homelab (Docker, Forgejo Actions, SonarQube, Trivy, Cloudflare).',
  },
  availability: {
    es: 'Tiempo completo · Híbrido / Remoto · Abierto a oportunidades internacionales',
    en: 'Full-time · Hybrid / Remote · Open to international opportunities',
  },
} satisfies Record<string, Localized>;

/** Headline numbers reused by the stats strip, the hero terminal and the Align Designs case study. */
export const METRICS = {
  sqlOptimization: '40%',
  testSuites: '66',
  weeklyHoursSaved: '8h',
  honestelEndpoints: 6,
} as const;

export interface Bullet extends Localized {
  /** Shown on the one-page visual PDF (3 functions + 2 achievements per job). */
  highlight?: true;
}

export interface JobFacts {
  id: string;
  company: string;
  start: YearMonth;
  /** `null` while the job is current. */
  end: YearMonth | null;
  role: Localized;
  summary: Localized;
  /** Rendered as chips on the web and as "Stack: …" on the ATS PDF. */
  stack: readonly string[];
  functions: readonly Bullet[];
  achievements: readonly Bullet[];
}

/**
 * Start of professional experience: total years count from here, so a job can leave the
 * CV without lowering them. The model uses the earliest of this and every listed job.
 */
export const CAREER_START: YearMonth = '2023-05';

/** Display order on the web and in both PDFs. */
export const JOBS = [
  {
    id: 'grupo-salinas',
    company: 'Grupo Salinas',
    start: '2024-05',
    end: null,
    role: { es: 'Programador de Auditoría Senior', en: 'Senior Audit Programmer' },
    summary: {
      es: 'Líder técnico responsable de la arquitectura, desarrollo y evolución de sistemas críticos de auditoría interna (ADA/HONESTEL) y aplicaciones de atención a fraudes.',
      en: 'Technical lead responsible for architecture, development and evolution of critical internal audit systems (ADA/HONESTEL) and fraud-response applications.',
    },
    stack: ['.NET Core 6', 'C#', 'Tauri 2.x', 'Rust', 'React 19', 'SQL Server', 'OAuth2/JWT', 'Entity Framework', 'Python 3.10+', 'HTML/Bootstrap', 'Git'],
    functions: [
      {
        highlight: true,
        es: 'Desarrollo de pipelines de automatización con Python 3.10+ (pandas, pywin32/COM, pyodbc, Selenium): ingesta desde Outlook, extracción Excel, generación SQL transaccional y automatización de portales web internos.',
        en: 'Built automation pipelines with Python 3.10+ (pandas, pywin32/COM, pyodbc, Selenium): Outlook ingestion, Excel extraction, transactional SQL generation and internal web portal automation.',
      },
      {
        highlight: true,
        es: 'Desarrollo de API REST con .NET Core 6 integrando OAuth2 y tokenización JWT para autenticación segura.',
        en: 'REST API development with .NET Core 6 integrating OAuth2 and JWT tokenization for secure authentication.',
      },
      {
        highlight: true,
        es: 'Diseñé y desarrollé aplicación de escritorio Windows (Tauri 2.x + React 19 + TypeScript) para el área de fraudes: reconocimiento facial contra tres bases internas (general, listas rojas, empleados) vía API BAZ de Identidad Digital.',
        en: 'Designed and developed a Windows desktop application (Tauri 2.x + React 19 + TypeScript) for the fraud team: facial recognition against three internal databases (general, blacklists, employees) via the BAZ Digital Identity API.',
      },
      {
        es: 'Implementé cifrado AES-256-GCM en Rust para protección de imágenes biométricas en tránsito y descifrado RSA-OAEP SHA-256 de IDs retornados, cumpliendo estándares de seguridad corporativos.',
        en: 'Implemented AES-256-GCM encryption in Rust to protect biometric images in transit and RSA-OAEP SHA-256 decryption of returned IDs, meeting corporate security standards.',
      },
      {
        es: 'Arquitectura Backend basada en SOLID, Clean Architecture y principios DDD.',
        en: 'Backend architecture based on SOLID, Clean Architecture and DDD principles.',
      },
      {
        es: 'Refactorización de arquitectura legacy hacia proyecto con Entity Framework y principios limpios.',
        en: 'Legacy architecture refactoring towards project with Entity Framework and clean principles.',
      },
      {
        es: 'Documentación técnica con Swagger y pruebas de API con Postman/Insomnia.',
        en: 'Technical documentation with Swagger and API testing with Postman/Insomnia.',
      },
      {
        es: 'Desarrollo Frontend con HTML, JavaScript y Bootstrap aplicando diseño responsivo.',
        en: 'Frontend development with HTML, JavaScript and Bootstrap applying responsive design.',
      },
    ],
    achievements: [
      {
        highlight: true,
        es: 'Creación de API v2 de Honestel desde cero (6 endpoints principales) con documentación Swagger.',
        en: 'Creation of Honestel v2 API from scratch (6 core endpoints) with Swagger documentation.',
      },
      {
        highlight: true,
        es: 'Reducción del 40% en tiempo de ejecución de consultas críticas mediante optimización de procedimientos almacenados.',
        en: '40% reduction in critical query execution time through stored procedure optimization.',
      },
      {
        es: 'Automatización de 5+ procesos críticos con Python (alta SAP, reportes, extracción de datos) — pipelines modulares con pywin32, pandas, pyodbc y Selenium, eliminando ~8 hrs/semana de trabajo manual.',
        en: 'Automated 5+ critical processes with Python (SAP onboarding, reports, data extraction) — modular pipelines with pywin32, pandas, pyodbc and Selenium, eliminating ~8 hrs/week of manual work.',
      },
      {
        es: 'Desarrollo de aplicación de escritorio con Tauri 2.x + Rust para reconocimiento facial biométrico — único proyecto con Rust en el área, cubriendo cifrado end-to-end de datos biométricos.',
        en: 'Built desktop app with Tauri 2.x + Rust for biometric facial recognition — only Rust project in the department, covering end-to-end encryption of biometric data.',
      },
    ],
  },
  {
    id: 'align-designs',
    company: 'Freelance · Align Designs Platform',
    start: '2025-10',
    end: null,
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    summary: {
      es: 'Plataforma B2B/B2C cloud con arquitectura monorepo profesional.',
      en: 'Cloud B2B/B2C platform with professional monorepo architecture.',
    },
    stack: ['NestJS 11', 'Next.js 16', 'PostgreSQL 15', 'Prisma ORM', 'Docker', 'GitHub Actions', 'Redis', 'DigitalOcean Spaces', 'Prometheus', 'TypeScript'],
    functions: [
      {
        highlight: true,
        es: 'Arquitectura modular monorepo (pnpm workspaces) con NestJS 11 + Next.js 16 + PostgreSQL/Prisma aplicando SOLID y Clean Architecture.',
        en: 'Modular monorepo architecture (pnpm workspaces) with NestJS 11 + Next.js 16 + PostgreSQL/Prisma applying SOLID and Clean Architecture.',
      },
      {
        highlight: true,
        es: 'Sistema de autenticación dual: JWT con refresh token rotation para admins y OTP con bcrypt para clientes. RBAC con 3 roles (Admin, Client, Employee).',
        en: 'Dual auth system: JWT with refresh token rotation for admins and OTP with bcrypt for clients. RBAC with 3 roles (Admin, Client, Employee).',
      },
      {
        highlight: true,
        es: 'Seguridad HTTP completa: CSRF (HMAC-SHA256), Helmet (CSP, HSTS), rate limiting por IP, account lockout tras 5 intentos, validación con Zod.',
        en: 'Full HTTP security: CSRF (HMAC-SHA256), Helmet (CSP, HSTS), IP rate limiting, account lockout after 5 attempts, Zod schema validation.',
      },
      {
        es: 'Almacenamiento de archivos en DigitalOcean Spaces (S3-compatible) con presigned URLs de 15 min y validación por magic numbers.',
        en: 'File storage on DigitalOcean Spaces (S3-compatible) with 15-min presigned URLs and magic number validation to prevent MIME spoofing.',
      },
      {
        es: 'CI/CD con GitHub Actions + SonarCloud + Codecov + Lighthouse. Deploy automatizado con Docker en servidor DigitalOcean con backups automáticos a Spaces.',
        en: 'CI/CD with GitHub Actions + SonarCloud + Codecov + Lighthouse. Automated deploy with Docker on DigitalOcean with automatic backups to Spaces.',
      },
      {
        es: 'Sistema de facturación con auto-numeración, versionado de archivos, notificaciones in-app, métricas Prometheus y logging estructurado con Pino.',
        en: 'Billing with auto-numbering, file versioning, in-app notifications, Prometheus metrics and structured logging with Pino.',
      },
      {
        es: '47 archivos de pruebas unitarias (Jest + Vitest) y 19 specs E2E con Playwright.',
        en: '47 unit test files (Jest + Vitest) and 19 Playwright E2E specs.',
      },
    ],
    achievements: [
      {
        highlight: true,
        es: 'Plataforma productiva con +16 módulos y 8 etapas de workflow: autenticación, facturación, pagos a empleados, almacenamiento y notificaciones.',
        en: 'Production platform with 16+ modules and 8 workflow stages: auth, billing, employee payments, file storage and notifications.',
      },
      {
        highlight: true,
        es: 'Pipeline CI/CD completo: lint › tests › SonarCloud › build › deploy › health checks › backup automático en cada push.',
        en: 'Complete CI/CD pipeline: lint › tests › SonarCloud › build › deploy › health checks › automatic backup on every push.',
      },
      {
        es: 'Arquitectura de seguridad en capas: CSRF + Helmet + rate limiting + JWT rotation + OTP + AES/RSA + SSH hardening + fail2ban.',
        en: 'Layered security architecture: CSRF + Helmet + rate limiting + JWT rotation + OTP + AES/RSA + SSH hardening + fail2ban.',
      },
    ],
  },
] as const satisfies readonly JobFacts[];

export type JobId = (typeof JOBS)[number]['id'];

export const EDUCATION = [
  {
    degree: { es: 'Ing. Sistemas Computacionales', en: 'B.S. Computer Systems Engineering' },
    school: { es: 'UTEL Universidad', en: 'UTEL University' },
    start: 2019,
    end: 2023,
  },
  {
    degree: { es: 'Maestría en Inteligencia Artificial', en: 'Master in Artificial Intelligence' },
    school: { es: 'UNIR (Universidad Internacional de La Rioja)', en: 'UNIR (International University of La Rioja)' },
    start: 2025,
    end: null,
  },
] as const satisfies readonly { degree: Localized; school: Localized; start: number; end: number | null }[];

export const LANGUAGES = [
  {
    name: { es: 'Español', en: 'Spanish' },
    level: { es: 'Nativo', en: 'Native' },
    pct: 100,
    details: [
      { es: 'Lengua materna', en: 'Mother tongue' },
      { es: 'Comunicación profesional', en: 'Professional communication' },
      { es: 'Redacción técnica avanzada', en: 'Advanced technical writing' },
    ],
  },
  {
    name: { es: 'Inglés', en: 'English' },
    level: { es: 'A2-B1 Intermedio', en: 'A2-B1 Intermediate' },
    pct: 60,
    details: [
      { es: 'Lectura y comprensión de documentación técnica', en: 'Reading and understanding technical documentation' },
      { es: 'Escritura técnica intermedia', en: 'Intermediate technical writing' },
      { es: 'Conversación básica-intermedia', en: 'Basic-intermediate conversation' },
      { es: 'En constante mejora', en: 'Constantly improving' },
    ],
  },
] as const satisfies readonly { name: Localized; level: Localized; pct: number; details: readonly Localized[] }[];

export const COMPETENCIES = [
  {
    title: { es: 'Arquitectura Limpia / DDD', en: 'Clean Architecture / DDD' },
    desc: { es: 'Diseño de soluciones con Clean Architecture y Domain-Driven Design (2 años)', en: 'Solution design with Clean Architecture and Domain-Driven Design (2 years)' },
  },
  {
    title: { es: 'Codificación Segura', en: 'Secure Coding' },
    desc: { es: 'Implementación de cifrado AES/RSA, OAuth2, JWT y prácticas de seguridad', en: 'Implementation of AES/RSA encryption, OAuth2, JWT and security practices' },
  },
  {
    title: { es: 'Optimización SQL', en: 'SQL Optimization' },
    desc: { es: 'Mejora de tiempos de consulta hasta 40% con procedimientos y funciones', en: 'Query time improvement up to 40% with procedures and functions' },
  },
  {
    title: { es: 'Metodología SCRUM', en: 'SCRUM Methodology' },
    desc: { es: 'Experiencia trabajando con metodologías ágiles (10 meses)', en: 'Experience working with agile methodologies (10 months)' },
  },
  {
    title: { es: 'Pruebas y QA', en: 'Testing & QA' },
    desc: { es: 'Pruebas unitarias, pruebas de usuario y documentación técnica (Swagger)', en: 'Unit testing, user testing and technical documentation (Swagger)' },
  },
  {
    title: { es: 'Aprendizaje Autodidacta', en: 'Self-Taught Learning' },
    desc: { es: 'Capacidad demostrada para dominar nuevas tecnologías de forma independiente', en: 'Demonstrated ability to master new technologies independently' },
  },
  {
    title: { es: 'Trabajo en Equipo', en: 'Teamwork' },
    desc: { es: 'Comunicación asertiva, adaptabilidad y colaboración efectiva', en: 'Assertive communication, adaptability and effective collaboration' },
  },
  {
    title: { es: 'Flujo AI-Assisted', en: 'AI-Assisted Workflow' },
    desc: { es: 'Proyecto en fases con skills por stack, ClickUp para trazabilidad, pruebas por fase y CI/CD con SonarCloud automatizado', en: 'Project phases with tech-specific skills, ClickUp tracking, per-phase testing and automated CI/CD with SonarCloud' },
  },
  {
    title: { es: 'Disponibilidad Inmediata', en: 'Immediate Availability' },
    desc: { es: 'Disponible para incorporación en 1 semana o 3 días', en: 'Available for onboarding in 1 week or 3 days' },
  },
] as const satisfies readonly { title: Localized; desc: Localized }[];

/** Stats strip under "About" — the first stat (years) is computed and prepended by the model. */
export const STATS = [
  { value: METRICS.sqlOptimization, label: { es: 'Optimización SQL', en: 'SQL Optimization' } },
  { value: METRICS.testSuites, label: { es: 'Suites de tests', en: 'Test suites' } },
  { value: METRICS.weeklyHoursSaved, label: { es: 'Horas/semana ahorradas', en: 'Hours/week saved' } },
] as const satisfies readonly { value: string; label: Localized }[];

/** Tech strip in the hero. */
export const HERO_STACK = ['.NET', 'React', 'PostgreSQL', 'Docker', 'NestJS'] as const;

/** Output of `stack --json` in the hero terminal. */
export const TERMINAL_STACK = ['.NET Core 10', 'React 19 · Next.js 16', 'PostgreSQL · SQL Server', 'NestJS 11 · Docker'] as const;

export const CLAUDE_ENGINEERING = {
  capabilities: [
    { title: 'Skill Engineering', desc: { es: 'Skills reutilizables con eval loops y métricas.', en: 'Reusable skills with eval loops and metrics.' } },
    { title: 'Custom Agents', desc: { es: 'Agents para code review, seguridad, migraciones, research y ADRs.', en: 'Agents for code review, security, migrations, research and ADRs.' } },
    { title: 'MCP Integration', desc: { es: 'Conexión con servidores MCP externos y propios.', en: 'Connecting external and custom MCP servers.' } },
    { title: 'Hook Automation', desc: { es: 'Hooks PreToolUse y Stop: bloqueo de comandos, compresión y verificación obligatoria.', en: 'PreToolUse and Stop hooks: command blocking, compression and enforced verification.' } },
    { title: 'Memory Systems', desc: { es: 'Memoria persistente cross-session multi-capa.', en: 'Multi-layer cross-session persistent memory.' } },
    { title: 'Plugin Ecosystem', desc: { es: 'Plugins integrados con flujos productivos completos.', en: 'Plugins integrated with full productive flows.' } },
    { title: 'Multi-LLM Orchestration', desc: { es: 'Orquestación de Claude, Codex y Gemini en paralelo.', en: 'Orchestrating Claude, Codex and Gemini in parallel.' } },
    { title: 'Eval-driven Optimization', desc: { es: 'Optimización basada en métricas de rendimiento.', en: 'Optimization based on performance metrics.' } },
  ],
  /** Counted from ~/.claude on 2026-09-22: local skills, agents, distinct hooks, MCP servers. */
  stat: '10 SKILLS · 5 AGENTS · 6 HOOKS · 7 MCP · MULTI-LLM',
  framework: {
    principles: 133,
    summary: {
      es: 'Escribo y reviso código contra un marco de principios de diseño de software: cada uno tiene ID estable, severidad y excepciones válidas, así una revisión cita reglas concretas en vez de opiniones. Lo complementan 40 principios de proceso para requisitos, tickets y reportes de bugs.',
      en: 'I write and review code against a software design framework: every principle has a stable ID, a severity and its valid exceptions, so a review cites concrete rules instead of opinions. It is complemented by 40 process principles for requirements, tickets and bug reports.',
    },
    domains: [
      { es: 'Fundamentos y código limpio', en: 'Fundamentals & clean code' },
      { es: 'Arquitectura', en: 'Architecture' },
      { es: 'Backend y concurrencia', en: 'Backend & concurrency' },
      { es: 'Datos y transacciones', en: 'Data & transactions' },
      { es: 'APIs y eventos · RFC 9457', en: 'APIs & events · RFC 9457' },
      { es: 'Seguridad · OWASP Top 10 2025', en: 'Security · OWASP Top 10 2025' },
      { es: 'Frontend y UX · WCAG 2.2', en: 'Frontend & UX · WCAG 2.2' },
      'Performance · Core Web Vitals',
      'Testing',
      { es: 'Infraestructura y Git', en: 'Infrastructure & Git' },
    ],
  },
} as const satisfies {
  capabilities: readonly { title: string; desc: Localized }[];
  stat: string;
  framework: { principles: number; summary: Localized; domains: readonly Localizable[] };
};
