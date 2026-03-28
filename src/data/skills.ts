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
            { name: "REST API", icon: FaServer, color: "text-blue-500" },
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
            { name: "Azure / Azure Functions", icon: FaServer, color: "text-blue-500" },
            { name: "Azure Service Bus", icon: FaServer, color: "text-cyan-600" },
            { name: "GitHub Actions", icon: FaGitAlt, color: "text-gray-700" },
            { name: "Docker", icon: FaDocker, color: "text-blue-400" },
            { name: "Git / GitHub", icon: FaGitAlt, color: "text-orange-600" },
            { name: "CI/CD (Azure DevOps / GitHub Actions)", icon: FaTools, color: "text-blue-400" }
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
        "PostgreSQL 15/16 (1 año)",
        "Python 3.x (1 año)",
        "React 19 (2 años)",
        "Next.js 15 (1 año)",
        "Vue.js 3 (1 año)",
        "Angular 17+ (1 año)",
        "TypeScript 5 (1 año)",
        "JavaScript ES2024 (3 años)",
        "Node.js 18/20 (3 años)",
        "NestJS 11 (1 año)",
        "REST API (3 años)",
        "Entity Framework (3 años)",
        "Prisma ORM (1 año)",
        "Azure / Azure Functions (1 año)",
        "Azure Service Bus (2 años)",
        "OAuth2 / JWT (2 años)",
        "Cifrado AES/RSA (3.5 años)",
        "Docker (1 año)",
        "GitHub Actions (1 año)",
        "CI/CD (Azure DevOps / GitHub Actions)",
        "Git / GitHub (3 años)",
        "SOLID (2 años)",
        "Arquitectura Limpia / DDD (2 años)",
        "Microservicios (1 año)",
        "Postman / Insomnia"
    ],
    en: [
        "C# / .NET Core 6/8/10 (3 years)",
        "SQL Server / T-SQL (3 years)",
        "PostgreSQL 15/16 (1 year)",
        "Python 3.x (1 year)",
        "React 19 (2 years)",
        "Next.js 15 (1 year)",
        "Vue.js 3 (1 year)",
        "Angular 17+ (1 year)",
        "TypeScript 5 (1 year)",
        "JavaScript ES2024 (3 years)",
        "Node.js 18/20 (3 years)",
        "NestJS 11 (1 year)",
        "REST API (3 years)",
        "Entity Framework (3 years)",
        "Prisma ORM (1 year)",
        "Azure / Azure Functions (1 year)",
        "Azure Service Bus (2 years)",
        "OAuth2 / JWT (2 years)",
        "AES/RSA Encryption (3.5 years)",
        "Docker (1 year)",
        "GitHub Actions (1 year)",
        "CI/CD (Azure DevOps / GitHub Actions)",
        "Git / GitHub (3 years)",
        "SOLID (2 years)",
        "Clean Architecture / DDD (2 years)",
        "Microservices (1 year)",
        "Postman / Insomnia"
    ]
};
