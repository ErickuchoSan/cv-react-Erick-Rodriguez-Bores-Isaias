import { FaCode, FaServer, FaTools, FaBrain, FaLightbulb, FaRocket, FaUsers, FaCogs, FaChartLine, FaDatabase, FaDocker, FaGitAlt, FaWindows, FaReact, FaCloud } from 'react-icons/fa';

export const SKILLS_DATA_MAIN = [
    { name: ".NET Core / C#", icon: FaWindows, color: "text-blue-600 dark:text-blue-500", bg: "bg-blue-500/5 dark:bg-blue-500/10", border: "hover:border-blue-500/30", shadow: "hover:shadow-blue-500/20" },
    { name: "React / Next.js", icon: FaReact, color: "text-cyan-500 dark:text-cyan-400", bg: "bg-cyan-500/5 dark:bg-cyan-500/10", border: "hover:border-cyan-500/30", shadow: "hover:shadow-cyan-400/20" },
    { name: "SQL Server", icon: FaDatabase, color: "text-red-500 dark:text-red-400", bg: "bg-red-500/5 dark:bg-red-500/10", border: "hover:border-red-500/30", shadow: "hover:shadow-red-500/20" },
    { name: "Microservices", icon: FaServer, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/5 dark:bg-purple-500/10", border: "hover:border-purple-500/30", shadow: "hover:shadow-purple-500/20" },
    { name: "Cloud Architecture", icon: FaCloud, color: "text-orange-500 dark:text-orange-400", bg: "bg-orange-500/5 dark:bg-orange-500/10", border: "hover:border-orange-500/30", shadow: "hover:shadow-orange-500/20" }
];

export const SKILLS_DATA_CATEGORIES = [
    {
        id: 'backend',
        icon: FaServer,
        skills: [
            { name: "C# / .NET 8", icon: FaWindows, color: "text-purple-600" },
            { name: "SQL Server", icon: FaDatabase, color: "text-red-600" },
            { name: "Microservices", icon: FaServer, color: "text-blue-500" },
            { name: "Entity Framework", icon: FaDatabase, color: "text-indigo-600" },
        ]
    },
    {
        id: 'frontend',
        icon: FaCode,
        skills: [
            { name: "React", icon: FaCode, color: "text-cyan-500" },
            { name: "Next.js", icon: FaCode, color: "text-black dark:text-white" },
            { name: "TypeScript", icon: FaCode, color: "text-blue-600" },
            { name: "Tailwind", icon: FaCode, color: "text-cyan-400" }
        ]
    },
    {
        id: 'devops',
        icon: FaTools,
        skills: [
            { name: "Contenedores", icon: FaDocker, color: "text-blue-500" },
            { name: "Git", icon: FaGitAlt, color: "text-orange-600" }
        ]
    },
    {
        id: 'ai',
        icon: FaBrain,
        skills: [
            { name: "OpenAI API", icon: FaBrain, color: "text-green-600" },
            { name: "Claude (Anthropic)", icon: FaBrain, color: "text-purple-500" },
            { name: "Gemini", icon: FaBrain, color: "text-blue-500" },
            { name: "AI Integration", icon: FaBrain, color: "text-yellow-500" }
        ]
    }
];

export const SOFT_SKILLS_ICONS = [FaBrain, FaLightbulb, FaCogs, FaRocket, FaCode, FaUsers, FaChartLine, FaTools, FaRocket];
