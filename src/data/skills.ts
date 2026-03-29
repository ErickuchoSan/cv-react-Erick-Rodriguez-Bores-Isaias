import { FaCode, FaServer, FaTools, FaBrain, FaLightbulb, FaRocket, FaUsers, FaCogs, FaChartLine, FaDatabase, FaGitAlt, FaWindows, FaReact, FaDocker, FaPython } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export const SKILLS_DATA_MAIN = [
    { name: ".NET Core / C#", icon: FaWindows, color: "text-blue-600 dark:text-blue-500", bg: "bg-blue-500/5 dark:bg-blue-500/10", border: "hover:border-blue-500/30", shadow: "hover:shadow-blue-500/20" },
    { name: "React 19", icon: FaReact, color: "text-cyan-500 dark:text-cyan-400", bg: "bg-cyan-500/5 dark:bg-cyan-500/10", border: "hover:border-cyan-500/30", shadow: "hover:shadow-cyan-400/20" },
    { name: "SQL Server", icon: FaDatabase, color: "text-red-500 dark:text-red-400", bg: "bg-red-500/5 dark:bg-red-500/10", border: "hover:border-red-500/30", shadow: "hover:shadow-red-500/20" },
    { name: "Azure / Cloud", icon: FaServer, color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-500/5 dark:bg-blue-500/10", border: "hover:border-blue-500/30", shadow: "hover:shadow-blue-500/20" },
    { name: "Node.js", icon: FaServer, color: "text-green-600 dark:text-green-500", bg: "bg-green-500/5 dark:bg-green-500/10", border: "hover:border-green-500/30", shadow: "hover:shadow-green-500/20" }
];

export const SKILLS_DATA_CATEGORIES = [
    {
        id: 'backend',
        icon: FaServer,
        skills: [
            { name: "C# / .NET 6/8/10", icon: FaWindows, color: "text-purple-600" },
            { name: "SQL Server / T-SQL", icon: FaDatabase, color: "text-red-600" },
            { name: "PostgreSQL 15/16", icon: FaDatabase, color: "text-blue-700" },
            { name: "Python 3.x", icon: FaPython, color: "text-yellow-500" },
            { name: "Entity Framework", icon: FaDatabase, color: "text-indigo-600" },
            { name: "Stored Procedures", icon: FaDatabase, color: "text-orange-600" },
            { name: "REST API", icon: FaServer, color: "text-blue-500" },
            { name: "Swagger / OpenAPI", icon: FaCode, color: "text-green-500" },
            { name: "Expresiones Lambda / LINQ", icon: FaCode, color: "text-indigo-500" },
            { name: "Redis (Cache)", icon: FaDatabase, color: "text-red-500" },
            { name: "Microservices", icon: FaServer, color: "text-green-500" },
            { name: "Event-Driven", icon: FaServer, color: "text-orange-500" },
        ]
    },
    {
        id: 'frontend',
        icon: FaCode,
        skills: [
            { name: "React 19 / Next.js 16", icon: FaReact, color: "text-cyan-500" },
            { name: "TanStack Query", icon: FaReact, color: "text-red-500" },
            { name: "React Hook Form + Zod", icon: FaCode, color: "text-blue-500" },
            { name: "Framer Motion", icon: FaCode, color: "text-purple-500" },
            { name: "Vue.js 3", icon: FaCode, color: "text-emerald-600" },
            { name: "Angular 17+", icon: FaCode, color: "text-red-600" },
            { name: "JavaScript (ES2024)", icon: FaCode, color: "text-yellow-500" },
            { name: "TypeScript 5", icon: SiTypescript, color: "text-blue-600" },
            { name: "Node.js / NestJS 11", icon: FaCode, color: "text-green-600" },
            { name: "Tailwind CSS v4", icon: FaCode, color: "text-cyan-400" },
            { name: "Bootstrap 5 / CSS", icon: FaCode, color: "text-purple-500" }
        ]
    },
    {
        id: 'devops',
        icon: FaTools,
        skills: [
            { name: "GitHub Actions / CI/CD", icon: FaGitAlt, color: "text-gray-700" },
            { name: "SonarCloud", icon: FaTools, color: "text-orange-500" },
            { name: "Docker", icon: FaDocker, color: "text-blue-400" },
            { name: "DigitalOcean (VPS + Spaces)", icon: FaServer, color: "text-blue-500" },
            { name: "Prometheus + Pino", icon: FaTools, color: "text-red-500" },
            { name: "Playwright (E2E)", icon: FaTools, color: "text-green-600" },
            { name: "Git / GitHub", icon: FaGitAlt, color: "text-orange-600" },
            { name: "CRON / Scheduled Jobs", icon: FaTools, color: "text-purple-500" },
            { name: "OWASP / Secure Coding", icon: FaTools, color: "text-red-600" },
            { name: "SCRUM", icon: FaTools, color: "text-green-600" }
        ]
    },
    {
        id: 'ai',
        icon: FaBrain,
        skills: [
            { name: "Claude (Anthropic)", icon: FaBrain, color: "text-purple-500" },
            { name: "MCP (Model Context Protocol)", icon: FaBrain, color: "text-orange-500" },
            { name: "Claude Code / AI Agents", icon: FaBrain, color: "text-pink-500" },
            { name: "Gemini", icon: FaBrain, color: "text-blue-500" },
            { name: "AI Integration", icon: FaBrain, color: "text-yellow-500" }
        ]
    }
];

export const SOFT_SKILLS_ICONS = [FaBrain, FaLightbulb, FaCogs, FaRocket, FaCode, FaUsers, FaChartLine, FaTools, FaRocket];

// Skills for PDF - centralized list with translations (based on recruitment interview)
export const PDF_SKILLS = {
    es: [
        "C# / .NET Core 6/8/10 (3 años)",
        "SQL Server / T-SQL (3 años)",
        "Procedimientos Almacenados (3 años)",
        "PostgreSQL 15/16 (1 año)",
        "Redis — Cache (6 meses)",
        "Python 3.x (1 año)",
        "Expresiones Lambda / LINQ (3 años)",
        "React 19 / Next.js 16 (2 años)",
        "TanStack Query (6 meses)",
        "React Hook Form + Zod (6 meses)",
        "Tailwind CSS v4 (2-3 años)",
        "Framer Motion (6 meses)",
        "jQuery (2 años)",
        "Vue.js 3 (1 año)",
        "Angular 17+ (1 año)",
        "TypeScript 5 (1 año)",
        "JavaScript ES2024 (3 años)",
        "Node.js 18/20 (3 años)",
        "NestJS 11 (1 año)",
        "REST API (3 años)",
        "Swagger / OpenAPI (2 años)",
        "Entity Framework (3 años)",
        "Prisma ORM (6 meses)",
        "OAuth2 / JWT + Refresh Token Rotation (2 años)",
        "OTP (bcrypt + SHA-256) (6 meses)",
        "Cifrado AES/RSA (3.5 años)",
        "CSRF (HMAC-SHA256) (6 meses)",
        "Helmet / Security Headers (6 meses)",
        "OWASP Top 10 (aplicado en proyectos)",
        "Pruebas Unitarias — Jest + Vitest (6 meses)",
        "Playwright — E2E (6 meses)",
        "SonarCloud (6 meses)",
        "Prometheus + Pino — Métricas y Logs (6 meses)",
        "SCRUM (10 meses)",
        "CRON / Scheduled Jobs (GitHub Actions)",
        "Docker (1 año)",
        "GitHub Actions / CI/CD (1 año)",
        "DigitalOcean — VPS + Spaces (S3) (6 meses)",
        "Git / GitHub (3 años)",
        "SOLID (2 años)",
        "Arquitectura Limpia / DDD (2 años)",
        "Event-Driven Architecture (6 meses)",
        "Microservicios (1 año)",
        "pnpm Workspaces — Monorepo (6 meses)",
        "ApiDog / Postman / Insomnia",
        "Claude Code + MCP (Model Context Protocol)",
        "Desarrollo asistido por IA (Claude, Gemini)"
    ],
    en: [
        "C# / .NET Core 6/8/10 (3 years)",
        "SQL Server / T-SQL (3 years)",
        "Stored Procedures (3 years)",
        "PostgreSQL 15/16 (1 year)",
        "Redis — Cache (6 months)",
        "Python 3.x (1 year)",
        "Lambda Expressions / LINQ (3 years)",
        "React 19 / Next.js 16 (2 years)",
        "TanStack Query (6 months)",
        "React Hook Form + Zod (6 months)",
        "Tailwind CSS (1 year)",
        "Framer Motion (6 months)",
        "jQuery (2 years)",
        "Vue.js 3 (1 year)",
        "Angular 17+ (1 year)",
        "TypeScript 5 (1 year)",
        "JavaScript ES2024 (3 years)",
        "Node.js 18/20 (3 years)",
        "NestJS 11 (1 year)",
        "REST API (3 years)",
        "Swagger / OpenAPI (2 years)",
        "Entity Framework (3 years)",
        "Prisma ORM (6 months)",
        "OAuth2 / JWT + Refresh Token Rotation (2 years)",
        "OTP (bcrypt + SHA-256) (6 months)",
        "AES/RSA Encryption (3.5 years)",
        "CSRF (HMAC-SHA256) (6 months)",
        "Helmet / Security Headers (6 months)",
        "OWASP Top 10 (applied in projects)",
        "Unit Testing — Jest + Vitest (6 months)",
        "Playwright — E2E (6 months)",
        "SonarCloud (6 months)",
        "Prometheus + Pino — Metrics & Logs (6 months)",
        "SCRUM (10 months)",
        "CRON / Scheduled Jobs (GitHub Actions)",
        "Docker (1 year)",
        "GitHub Actions / CI/CD (1 year)",
        "DigitalOcean — VPS + Spaces (S3) (6 months)",
        "Git / GitHub (3 years)",
        "SOLID (2 years)",
        "Clean Architecture / DDD (2 years)",
        "Event-Driven Architecture (6 months)",
        "Microservices (1 year)",
        "pnpm Workspaces — Monorepo (6 months)",
        "ApiDog / Postman / Insomnia",
        "Claude Code + MCP (Model Context Protocol)",
        "AI-assisted development (Claude, Gemini)"
    ]
};
