// Data layer — info real de Erick Rodríguez Bores.
const DATA = {
  name: "Erick Rodríguez Bores",
  shortName: "Erick Bores",
  role: "Full Stack .NET & React Developer",
  location: "Cuajimalpa de Morelos, CDMX, México",
  email: "e.bores.i@outlook.com",
  phone: "+52 55 7110 4581",
  site: "eboresi.com",
  github: "github.com/eboresi",
  linkedin: "linkedin.com/in/eboresi",
  photo: "assets/erick.jpg",
  years: "3",
  tagline: "Especialista en C#/.NET Core 10, React 19, SQL Server y Azure. Transformando ideas en soluciones empresariales de alto impacto.",
  intro: "Desarrollador Full Stack con 3 años de experiencia en desarrollo de software empresarial, diseñando arquitecturas escalables con .NET Core, React, Next.js, Node.js y NestJS. Experiencia sólida en REST APIs, Entity Framework, OAuth2/JWT, cifrado AES/RSA, Docker y Python.",
  about: [
    "Con 3 años de experiencia en desarrollo de software empresarial, diseño e implemento arquitecturas escalables con C#/.NET Core 6/8/10 (3 años), React 19 / Next.js 15 (2 años), SQL Server / PostgreSQL (3 años), y Node.js / NestJS 11 (3 años).",
    "Actualmente como Programador de Auditoría Senior en Grupo Salinas, lidero el desarrollo de sistemas críticos de auditoría interna (ADA/HONESTEL) con .NET Core 6, C#, SQL Server y OAuth2/JWT.",
    "Paralelamente desarrollo la plataforma Align Designs (freelance) con NestJS 11, Next.js 16, PostgreSQL y Docker. Me distingo por Clean Architecture, DDD y desarrollo asistido por IA."
  ],

  heroStack: [".NET CORE 10", "REACT 19", "POSTGRESQL", "DOCKER", "NESTJS 11"],

  stats: [
    { k: "3+",   v: "Años de experiencia" },
    { k: "20+",  v: "Tecnologías dominadas" },
    { k: "15+",  v: "Proyectos completados" },
    { k: "40%",  v: "Optimización SQL" }
  ],

  experience: [
    {
      role: "Programador de Auditoría Senior",
      company: "Grupo Salinas",
      period: "MAY 2024 — ACTUAL",
      duration: "~2 años",
      location: "CDMX",
      summary: "Líder técnico responsable de la arquitectura, desarrollo y evolución de sistemas críticos de auditoría interna (ADA/HONESTEL).",
      bullets: [
        "Desarrollo de API REST con .NET Core 6 integrando OAuth2 y tokenización JWT para autenticación segura.",
        "Desarrollo Frontend con HTML, JavaScript y Bootstrap aplicando diseño responsivo.",
        "Optimización de consultas SQL Server con T-SQL, procedimientos almacenados y funciones.",
        "Implementación de algoritmos de cifrado (AES, RSA, SHA-256) para protección de datos sensibles.",
        "Arquitectura Backend basada en SOLID, Clean Architecture y principios DDD.",
        "Refactorización de arquitectura legacy hacia proyecto con Entity Framework y principios limpios.",
        "Documentación técnica con Swagger y pruebas de API con Postman/Insomnia."
      ],
      achievements: [
        "Creación de API v2 de Honestel desde cero (8 endpoints principales) con documentación Swagger.",
        "Reducción del 40% en tiempo de ejecución de consultas críticas mediante optimización de procedimientos almacenados.",
        "Automatización de 5 procesos operativos mediante scripts, eliminando ~8 hrs/semana de trabajo manual."
      ],
      stack: [".NET Core 6", "C#", "SQL Server", "HTML / Bootstrap", "OAuth2 / JWT", "Entity Framework", "Git / GitHub"]
    },
    {
      role: "Desarrollador Full Stack",
      company: "Freelance · Align Designs Platform",
      period: "OCT 2025 — ACTUAL",
      duration: "~6 meses",
      location: "Remoto",
      summary: "Plataforma B2B/B2C cloud con arquitectura monorepo profesional. Stack: NestJS 11 + Next.js 16 + PostgreSQL 15, Prisma ORM, Docker, GitHub Actions, Redis, DigitalOcean Spaces, Prometheus.",
      bullets: [
        "Arquitectura modular monorepo (pnpm workspaces) con NestJS 11 + Next.js 16 + PostgreSQL/Prisma aplicando SOLID y Clean Architecture.",
        "Sistema de autenticación dual: JWT con refresh token rotation para admins y OTP con bcrypt para clientes. RBAC con 3 roles (Admin, Client, Employee).",
        "Seguridad HTTP completa: CSRF (HMAC-SHA256), Helmet (CSP, HSTS), rate limiting por IP, account lockout tras 5 intentos, validación con Zod.",
        "Almacenamiento de archivos en DigitalOcean Spaces (S3-compatible) con presigned URLs de 15 min y validación por magic numbers.",
        "CI/CD con GitHub Actions + SonarCloud + Codecov + Lighthouse. Deploy automatizado con Docker en servidor DigitalOcean con backups automáticos a Spaces.",
        "Sistema de facturación con auto-numeración, versionado de archivos, notificaciones in-app, métricas Prometheus y logging estructurado con Pino.",
        "57 archivos de pruebas unitarias (Jest + Vitest) y suite E2E con Playwright."
      ],
      achievements: [
        "Plataforma productiva con +10 módulos y 9 etapas de workflow: autenticación, facturación, pagos a empleados, almacenamiento y notificaciones.",
        "Pipeline CI/CD completo: lint → tests → SonarCloud → build → deploy → health checks → backup automático en cada push."
      ],
      stack: ["NestJS 11", "Next.js 16", "PostgreSQL", "Prisma ORM", "TypeScript", "Docker", "Node.js"]
    },
    {
      role: "Desarrollador Full Stack",
      company: "Digital Solutions",
      period: "MAY 2023 — MAY 2024",
      duration: "1 año",
      location: "CDMX",
      summary: "Desarrollo integral de sistemas empresariales para gestión de RH y reclutamiento. Stack: .NET Framework, C#, Entity Framework, SQL Server, JavaScript, jQuery, Bootstrap.",
      bullets: [
        "Desarrollo de APIs REST con .NET Framework y Entity Framework para gestión de candidatos.",
        "Implementación de módulo de carga masiva desde Excel y TXT procesando miles de registros.",
        "Diseño de interfaces responsivas con JavaScript, jQuery y Bootstrap.",
        "Optimización de consultas SQL Server con procedimientos almacenados y funciones.",
        "Control de versiones con GitHub y gestión de ramas para trabajo colaborativo."
      ],
      achievements: [
        "Entrega de sistema de gestión de reclutamiento completo (12 módulos) en 8 meses.",
        "Módulo de carga masiva procesando +5,000 registros en <10 segundos desde Excel/TXT.",
        "Reducción del 50% en tiempo de onboarding mediante automatización de procesos de alta."
      ],
      stack: [".NET Framework", "Entity Framework", "C#", "JavaScript", "Bootstrap", "SQL Server", "GitHub"]
    }
  ],

  skills: {
    "Backend": ["C# / .NET 6/8/10", "SQL Server / T-SQL", "PostgreSQL 15/16", "Python 3.x", "Entity Framework", "Stored Procedures", "REST APIs", "Swagger / OpenAPI", "Expresiones Lambda / LINQ", "Redis (Cache)", "Microservices", "Event-Driven"],
    "Frontend": ["React 19 / Next.js 16", "TanStack Query", "React Hook Form + Zod", "Framer Motion", "Vue.js 3", "Angular 17+", "JavaScript (ES2024)", "TypeScript 5", "Node.js / NestJS 11", "Tailwind CSS v4", "Bootstrap 5 / CSS"],
    "DevOps & Herramientas": ["GitHub Actions / CI/CD", "SonarCloud", "Docker", "DigitalOcean (VPS + Spaces)", "Prometheus + Pino", "Playwright (E2E)", "Git / GitHub", "CRON / Scheduled Jobs", "OWASP / Secure Coding", "SCRUM"],
    "IA & Productividad": ["Claude (Anthropic)", "MCP (Model Context Protocol)", "Claude Code / AI Agents", "Gemini", "AI Integration"]
  },

  competencies: [
    { title: "Arquitectura Limpia / DDD", desc: "Diseño de soluciones con Clean Architecture y Domain-Driven Design (2 años)." },
    { title: "Codificación Segura", desc: "Implementación de cifrado AES/RSA, OAuth2, JWT y prácticas de seguridad." },
    { title: "Optimización SQL", desc: "Mejora de tiempos de consulta hasta 40% con procedimientos y funciones." },
    { title: "Metodología SCRUM", desc: "Experiencia trabajando con metodologías ágiles (10 meses)." },
    { title: "Pruebas y QA", desc: "Pruebas unitarias, pruebas de usuario y documentación técnica (Swagger)." },
    { title: "Aprendizaje Autodidacta", desc: "Capacidad demostrada para dominar nuevas tecnologías de forma independiente." },
    { title: "Trabajo en Equipo", desc: "Comunicación asertiva, adaptabilidad y colaboración efectiva." },
    { title: "Desarrollo Asistido por IA", desc: "Programo con Claude y Gemini optimizando cada línea con buenas prácticas." },
    { title: "Disponibilidad Inmediata", desc: "Disponible para incorporación en 1 semana o 3 días." }
  ],

  projects: [
    {
      name: "Align Designs Platform",
      kind: "Freelance · Plataforma B2B/B2C",
      year: "2025",
      desc: "Plataforma B2B/B2C cloud con arquitectura monorepo (NestJS 11 + Next.js 15 + PostgreSQL/Prisma). Autenticación dual JWT/OTP, mensajería asíncrona, cifrado AES/RSA, CI/CD con GitHub Actions, Docker y arquitectura Clean/SOLID con RBAC.",
      tags: ["NestJS", "Next.js 15", "PostgreSQL", "Prisma", "Docker", "GitHub Actions", "JWT/OTP", "RBAC"],
      color: "#d14a24",
      icon: "☁"
    },
    {
      name: "Sistema de Auditoría Interna (ADA/HONESTEL)",
      kind: "Grupo Salinas · Sistema crítico",
      year: "2024",
      desc: "Plataforma crítica para gestión de denuncias internas de todas las empresas del Grupo Salinas. Lideré la migración de .NET Framework a .NET Core 6, mejorando el rendimiento un 40% y reduciendo tiempos de consulta SQL Server.",
      tags: [".NET Core 6", "C#", "SQL Server", "OAuth2/JWT", "Entity Framework", "HTML/Bootstrap"],
      color: "#b8472b",
      icon: "🛡"
    },
    {
      name: "Sistema de Reclutamiento Empresarial",
      kind: "Digital Solutions · Gestión RH",
      year: "2023",
      desc: "Plataforma end-to-end para gestión completa del ciclo de reclutamiento con carga masiva de candidatos desde Excel/TXT, procesando +5,000 registros en menos de 10 segundos.",
      tags: [".NET Framework", "JavaScript", "Bootstrap", "SQL"],
      color: "#6e5aa6",
      icon: "👥"
    }
  ],

  education: [
    {
      title: "Ing. Sistemas Computacionales",
      place: "UTTL Universidad",
      period: "2019 — 2023"
    },
    {
      title: "Maestría en Inteligencia Artificial",
      place: "UNIR (Universidad Internacional de La Rioja)",
      period: "En curso · 2025 — Actual"
    }
  ],

  languages: [
    { lang: "Español", level: "Nativo", pct: 100, details: ["Lengua materna", "Comunicación profesional", "Redacción técnica avanzada"] },
    { lang: "Inglés",  level: "A2-B1 Intermedio", pct: 55, details: ["Lectura y comprensión de documentación técnica", "Escritura técnica intermedia", "Conversación básica-intermedia", "En constante mejora"] }
  ],

  availability: "Tiempo completo · Híbrido/Remoto · Abierto a oportunidades internacionales",

  interests: [
    "Inteligencia Artificial aplicada al desarrollo",
    "Arquitecturas cloud-native y microservicios",
    "Productos SaaS escalables de alto rendimiento",
    "Oportunidades remotas e internacionales"
  ]
};

window.DATA = DATA;
