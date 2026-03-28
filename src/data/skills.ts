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
            { name: "Expresiones Lambda", icon: FaCode, color: "text-indigo-500" },
            { name: "Microservices", icon: FaServer, color: "text-green-500" },
            { name: "Event-Driven", icon: FaServer, color: "text-orange-500" },
        ]
    },
    {
        id: 'frontend',
        icon: FaCode,
        skills: [
            { name: "React 19 / Next.js 15", icon: FaReact, color: "text-cyan-500" },
            { name: "Vue.js 3", icon: FaCode, color: "text-emerald-600" },
            { name: "Angular 17+", icon: FaCode, color: "text-red-600" },
            { name: "JavaScript (ES2024)", icon: FaCode, color: "text-yellow-500" },
            { name: "TypeScript 5", icon: SiTypescript, color: "text-blue-600" },
            { name: "Node.js / NestJS 11", icon: FaCode, color: "text-green-600" },
            { name: "Bootstrap / CSS", icon: FaCode, color: "text-purple-500" }
        ]
    },
    {
        id: 'devops',
        icon: FaTools,
        skills: [
            { name: "GitHub Actions", icon: FaGitAlt, color: "text-gray-700" },
            { name: "Docker", icon: FaDocker, color: "text-blue-400" },
            { name: "Git / GitHub", icon: FaGitAlt, color: "text-orange-600" },
            { name: "CI/CD (GitHub Actions)", icon: FaTools, color: "text-blue-400" },
            { name: "Digital Ocean", icon: FaServer, color: "text-blue-500" },
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
        "Python 3.x (1 año)",
        "Expresiones Lambda / LINQ (3 años)",
        "React 19 (2 años)",
        "jQuery (2 años)",
        "Next.js 15 (1 año)",
        "Vue.js 3 (1 año)",
        "Angular 17+ (1 año)",
        "TypeScript 5 (1 año)",
        "JavaScript ES2024 (3 años)",
        "Node.js 18/20 (3 años)",
        "NestJS 11 (1 año)",
        "REST API (3 años)",
        "Swagger / OpenAPI (2 años)",
        "Entity Framework (3 años)",
        "Prisma ORM (1 año)",
        "OAuth2 / JWT (2 años)",
        "Cifrado AES/RSA (3.5 años)",
        "OWASP Top 10 (aplicado en proyectos)",
        "Pruebas Unitarias (6 meses)",
        "SCRUM (10 meses)",
        "CRON / Scheduled Jobs (GitHub Actions)",
        "Docker (1 año)",
        "GitHub Actions / CI/CD (1 año)",
        "Digital Ocean (VPS, Deploy)",
        "Git / GitHub (3 años)",
        "SOLID (2 años)",
        "Arquitectura Limpia / DDD (2 años)",
        "Event-Driven Architecture (1 año)",
        "Microservicios (1 año)",
        "Postman / Insomnia"
    ],
    en: [
        "C# / .NET Core 6/8/10 (3 years)",
        "SQL Server / T-SQL (3 years)",
        "Stored Procedures (3 years)",
        "PostgreSQL 15/16 (1 year)",
        "Python 3.x (1 year)",
        "Lambda Expressions / LINQ (3 years)",
        "React 19 (2 years)",
        "jQuery (2 years)",
        "Next.js 15 (1 year)",
        "Vue.js 3 (1 year)",
        "Angular 17+ (1 year)",
        "TypeScript 5 (1 year)",
        "JavaScript ES2024 (3 years)",
        "Node.js 18/20 (3 years)",
        "NestJS 11 (1 year)",
        "REST API (3 years)",
        "Swagger / OpenAPI (2 years)",
        "Entity Framework (3 years)",
        "Prisma ORM (1 year)",
        "OAuth2 / JWT (2 years)",
        "AES/RSA Encryption (3.5 years)",
        "OWASP Top 10 (applied in projects)",
        "Unit Testing (6 months)",
        "SCRUM (10 months)",
        "CRON / Scheduled Jobs (GitHub Actions)",
        "Docker (1 year)",
        "GitHub Actions / CI/CD (1 year)",
        "Digital Ocean (VPS, Deploy)",
        "Git / GitHub (3 years)",
        "SOLID (2 years)",
        "Clean Architecture / DDD (2 years)",
        "Event-Driven Architecture (1 year)",
        "Microservices (1 year)",
        "Postman / Insomnia"
    ]
};
