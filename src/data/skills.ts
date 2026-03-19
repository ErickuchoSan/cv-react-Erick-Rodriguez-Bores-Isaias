import { FaCode, FaServer, FaTools, FaBrain, FaLightbulb, FaRocket, FaUsers, FaCogs, FaChartLine, FaDatabase, FaGitAlt, FaWindows, FaReact } from 'react-icons/fa';

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
            { name: "C# / .NET Core", icon: FaWindows, color: "text-purple-600" },
            { name: "SQL Server / T-SQL", icon: FaDatabase, color: "text-red-600" },
            { name: "Entity Framework", icon: FaDatabase, color: "text-indigo-600" },
            { name: "REST API", icon: FaServer, color: "text-blue-500" },
            { name: "Microservices", icon: FaServer, color: "text-green-500" },
        ]
    },
    {
        id: 'frontend',
        icon: FaCode,
        skills: [
            { name: "React 19", icon: FaReact, color: "text-cyan-500" },
            { name: "JavaScript", icon: FaCode, color: "text-yellow-500" },
            { name: "TypeScript", icon: FaCode, color: "text-blue-600" },
            { name: "Node.js", icon: FaCode, color: "text-green-600" },
            { name: "Bootstrap / CSS", icon: FaCode, color: "text-purple-500" }
        ]
    },
    {
        id: 'devops',
        icon: FaTools,
        skills: [
            { name: "Azure / Azure Functions", icon: FaServer, color: "text-blue-500" },
            { name: "Azure Service Bus", icon: FaServer, color: "text-cyan-600" },
            { name: "Git / GitHub", icon: FaGitAlt, color: "text-orange-600" },
            { name: "CI/CD Azure DevOps", icon: FaTools, color: "text-blue-400" }
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
        "C# / .NET Core (3 años)",
        "SQL Server / T-SQL (3 años)",
        "React 19 (2 años)",
        "TypeScript (1 año)",
        "JavaScript (3 años)",
        "Node.js (3 años)",
        "REST API (3 años)",
        "Entity Framework (3 años)",
        "Azure / Azure Functions (1 año)",
        "Azure Service Bus (2 años)",
        "OAuth2 / JWT (2 años)",
        "Cifrado AES/RSA (3.5 años)",
        "Git / GitHub (2 años)",
        "CI/CD Azure DevOps",
        "Arquitectura Limpia / DDD (2 años)",
        "Microservicios (1 año)",
        "Bootstrap / CSS (2 años)",
        "jQuery (2 años)",
        "Postman / Insomnia"
    ],
    en: [
        "C# / .NET Core (3 years)",
        "SQL Server / T-SQL (3 years)",
        "React 19 (2 years)",
        "TypeScript (1 year)",
        "JavaScript (3 years)",
        "Node.js (3 years)",
        "REST API (3 years)",
        "Entity Framework (3 years)",
        "Azure / Azure Functions (1 year)",
        "Azure Service Bus (2 years)",
        "OAuth2 / JWT (2 years)",
        "AES/RSA Encryption (3.5 years)",
        "Git / GitHub (2 years)",
        "CI/CD Azure DevOps",
        "Clean Architecture / DDD (2 years)",
        "Microservices (1 year)",
        "Bootstrap / CSS (2 years)",
        "jQuery (2 years)",
        "Postman / Insomnia"
    ]
};
