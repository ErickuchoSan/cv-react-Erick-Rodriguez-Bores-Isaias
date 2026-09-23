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
    es: 'Con {years} de experiencia en desarrollo de software empresarial, diseño e implemento arquitecturas escalables con C#/.NET Core 6/8/10, SQL Server y Node.js (3 años), React 19 (2 años), y Next.js 16, Angular, PostgreSQL y NestJS 11 (1 año). Experiencia sólida en REST APIs, Entity Framework, OAuth2/JWT, cifrado AES/RSA, Docker y Python. Trabajo con Claude Code y reviso el código contra un marco de 133 principios de diseño (OWASP Top 10, WCAG 2.2, Core Web Vitals).',
    en: 'With {years} of experience in enterprise software development, I design and implement scalable architectures with C#/.NET Core 6/8/10, SQL Server and Node.js (3 years), React 19 (2 years), and Next.js 16, Angular, PostgreSQL and NestJS 11 (1 year). Solid experience in REST APIs, Entity Framework, OAuth2/JWT, AES/RSA encryption, Docker and Python. I work with Claude Code and review code against a 133-principle design framework (OWASP Top 10, WCAG 2.2, Core Web Vitals).',
  },
  current: {
    es: 'Actualmente como Programador de Auditoría Senior en Grupo Salinas, lidero el desarrollo de sistemas críticos de auditoría interna y gestión de denuncias; desde julio de 2026 reconstruyo, como único desarrollador, el portal del área con .NET 10, Angular 22 y SQL Server, y creé la extensión de Chrome con integración MCP para Claude Code que usa el equipo de TI para gestionar su trabajo en Jira. Paralelamente desarrollo la plataforma Align Designs (freelance) con NestJS 11, Next.js 16, PostgreSQL y Docker. Trabajo por fases con skills por tecnología, seguimiento en ClickUp, pruebas por fase y CI/CD con SonarCloud, health checks y backups automáticos. Además opero un homelab self-hosted (Docker, Forgejo Actions, SonarQube, Trivy, Cloudflare).',
    en: 'Currently as a Senior Audit Programmer at Grupo Salinas, I lead the development of critical internal audit and complaint-management systems; since July 2026 I have been rebuilding the department’s portal as its sole developer with .NET 10, Angular 22 and SQL Server, and I created the Chrome extension with Claude Code MCP integration that the IT team uses to manage its work in Jira. In parallel, I develop the Align Designs platform (freelance) with NestJS 11, Next.js 16, PostgreSQL and Docker. I work in phases with tech-specific skills, ClickUp tracking, per-phase testing and CI/CD with SonarCloud, health checks and automated backups. I also run a self-hosted homelab (Docker, Forgejo Actions, SonarQube, Trivy, Cloudflare).',
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
  complaintsApiEndpoints: 6,
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
      es: 'Líder técnico responsable de la arquitectura, desarrollo y evolución de sistemas críticos de auditoría interna y gestión de denuncias, y de aplicaciones de atención a fraudes.',
      en: 'Technical lead responsible for the architecture, development and evolution of critical internal audit and complaint-management systems and fraud-response applications.',
    },
    stack: ['.NET 10', 'ASP.NET Core', 'Angular 22', 'SQL Server', 'Dapper', 'C#', '.NET Core 6', 'Entity Framework', 'OAuth2/JWT', 'xUnit', 'Playwright', 'Python 3.10+', 'Tauri 2.x', 'Rust', 'React 19', 'HTML/Bootstrap'],
    functions: [
      {
        highlight: true,
        es: 'Reconstruyo de punta a punta, como único desarrollador, el portal de auditoría y gestión de denuncias del área (en desarrollo desde julio de 2026): de .NET Framework 4.8 + WCF + jQuery a .NET 10 + Angular 22 + SQL Server, con modelo de datos, API y frontend nuevos (Clean Architecture, CQRS, Dapper).',
        en: 'Rebuilding end to end, as the sole developer, the department’s audit and complaint-management portal (in development since July 2026): from .NET Framework 4.8 + WCF + jQuery to .NET 10 + Angular 22 + SQL Server, with a new data model, API and frontend (Clean Architecture, CQRS, Dapper).',
      },
      {
        highlight: true,
        es: 'Diseñé el nuevo esquema en SQL Server y la migración de ~4.8 millones de filas de 201 tablas con 108 procedimientos; el ensayo completo corre en ~7 minutos sin tocar el sistema actual.',
        en: 'Designed the new SQL Server schema and the migration of ~4.8 million rows from 201 tables with 108 procedures; the full rehearsal runs in ~7 minutes without touching the current system.',
      },
      {
        es: 'Desarrollé la API en .NET 10 que integra el portal con el sistema de denuncias del grupo financiero a través de su API gateway (JWT RS256, OAuth2), y reimplementé su cifrado híbrido RSA-OAEP + AES-256 + HMAC-SHA256, compatible byte a byte con el componente anterior.',
        en: 'Built the .NET 10 API that connects the portal to the financial group’s complaint system through its API gateway (JWT RS256, OAuth2), and reimplemented its hybrid RSA-OAEP + AES-256 + HMAC-SHA256 encryption, byte-for-byte compatible with the legacy component.',
      },
      {
        es: 'Implementé autorización por expediente validada en el servidor en cada petición: solo el equipo del caso accede, con 5 roles, JWT, límite de peticiones, HSTS/CSP y bitácora de cada escritura.',
        en: 'Implemented per-case authorization checked on the server on every request: only the case team gets access, with 5 roles, JWT, rate limiting, HSTS/CSP and an audit log of every write.',
      },
      {
        highlight: true,
        es: 'Creé una extensión de Chrome/Edge (JavaScript, Manifest V3) para el trabajo diario en Jira Server: empezó como herramienta personal y el equipo de TI la adoptó formalmente en julio de 2026 (en producción desde agosto). Reúne consulta, edición en línea, creación en tanda, paso al sprint y recordatorios de higiene del trabajo.',
        en: 'Created a Chrome/Edge extension (JavaScript, Manifest V3) for daily work in Jira Server: it started as a personal tool and the IT team formally adopted it in July 2026 (in production since August). It brings together search, inline editing, batch creation, sprint planning and work-hygiene reminders.',
      },
      {
        es: 'Construí un servidor MCP en Node.js con 20 herramientas para que Claude Code consulte y actualice Jira usando la sesión SSO (Okta) del navegador como proxy, sin credenciales adicionales, y otro en Python con 14 herramientas para Outlook.',
        en: 'Built a Node.js MCP server with 20 tools that lets Claude Code query and update Jira through the browser’s SSO (Okta) session as a proxy, with no extra credentials, plus a 14-tool Python MCP server for Outlook.',
      },
      {
        es: 'Desarrollo el portal y la extensión con Claude Code como asistente de IA, con skills, agentes y hooks propios y el MCP de Jira para llevar las historias de usuario; el flujo impide editar por accidente el sistema en operación y verifica cada cifra contra la base antes de darla por buena.',
        en: 'I build the portal and the extension with Claude Code as an AI assistant, with my own skills, agents and hooks plus the Jira MCP to track user stories; the workflow blocks accidental edits to the live system and checks every figure against the database before accepting it.',
      },
      {
        es: 'Desarrollo de pipelines de automatización con Python 3.10+ (pandas, pywin32/COM, pyodbc, Selenium): ingesta desde Outlook, extracción Excel, generación SQL transaccional y automatización de portales web internos.',
        en: 'Built automation pipelines with Python 3.10+ (pandas, pywin32/COM, pyodbc, Selenium): Outlook ingestion, Excel extraction, transactional SQL generation and internal web portal automation.',
      },
      {
        es: 'Desarrollo de API REST con .NET Core 6 integrando OAuth2 y tokenización JWT, documentadas con Swagger y probadas con Postman/Insomnia.',
        en: 'REST API development with .NET Core 6 integrating OAuth2 and JWT tokenization, documented with Swagger and tested with Postman/Insomnia.',
      },
      {
        es: 'Diseñé y desarrollé aplicación de escritorio Windows (Tauri 2.x + React 19 + TypeScript) para el área de fraudes: reconocimiento facial contra tres bases internas (general, listas rojas, empleados) vía la API de identidad digital del grupo.',
        en: 'Designed and developed a Windows desktop application (Tauri 2.x + React 19 + TypeScript) for the fraud team: facial recognition against three internal databases (general, blacklists, employees) via the group’s digital identity API.',
      },
      {
        es: 'Implementé cifrado AES-256-GCM en Rust para protección de imágenes biométricas en tránsito y descifrado RSA-OAEP SHA-256 de IDs retornados, cumpliendo estándares de seguridad corporativos.',
        en: 'Implemented AES-256-GCM encryption in Rust to protect biometric images in transit and RSA-OAEP SHA-256 decryption of returned IDs, meeting corporate security standards.',
      },
      {
        es: 'Desarrollo Frontend con HTML, JavaScript y Bootstrap aplicando diseño responsivo.',
        en: 'Frontend development with HTML, JavaScript and Bootstrap applying responsive design.',
      },
    ],
    achievements: [
      {
        highlight: true,
        es: 'Subí las pruebas automatizadas del portal de 34 a 1,068 (xUnit, Vitest, Playwright + axe), con pruebas de integración contra SQL Server real (Testcontainers).',
        en: 'Grew the portal’s automated tests from 34 to 1,068 (xUnit, Vitest, Playwright + axe), including integration tests against a real SQL Server (Testcontainers).',
      },
      {
        highlight: true,
        es: 'Bajé la consulta principal de la API de 9.9 s a 1.95 s (95% menos lecturas lógicas, salida idéntica) y eliminé un N+1 de ~110 viajes a la base dentro de una transacción.',
        en: 'Cut the API’s main query from 9.9 s to 1.95 s (95% fewer logical reads, identical output) and removed an N+1 of ~110 database round trips inside a transaction.',
      },
      {
        es: 'Publiqué 51 versiones de la extensión en unas cuatro semanas, con un actualizador de un doble clic y 614 pruebas automatizadas que frenan la compilación si fallan; el guardado en Jira bajó de 10–20 s a ~1–2 s.',
        en: 'Shipped 51 versions of the extension in about four weeks, with a one-double-click updater and 614 automated tests that stop the build when they fail; saving to Jira dropped from 10–20 s to ~1–2 s.',
      },
      {
        es: 'Creación desde cero de la API v2 del sistema de denuncias (6 endpoints principales) con documentación Swagger.',
        en: 'Built the complaint system’s v2 API from scratch (6 core endpoints) with Swagger documentation.',
      },
      {
        es: 'Reducción del 40% en tiempo de ejecución de consultas críticas mediante optimización de procedimientos almacenados.',
        en: '40% reduction in critical query execution time through stored procedure optimization.',
      },
      {
        es: 'Automatización de 5+ procesos críticos con Python (alta SAP, reportes, extracción de datos) — pipelines modulares con pywin32, pandas, pyodbc y Selenium, eliminando ~8 hrs/semana de trabajo manual.',
        en: 'Automated 5+ critical processes with Python (SAP onboarding, reports, data extraction) — modular pipelines with pywin32, pandas, pyodbc and Selenium, eliminating ~8 hrs/week of manual work.',
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
    { title: 'MCP Integration', desc: { es: 'Servidores MCP propios para Jira (20 herramientas) y Outlook (14), además de externos.', en: 'Own MCP servers for Jira (20 tools) and Outlook (14), plus external ones.' } },
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
