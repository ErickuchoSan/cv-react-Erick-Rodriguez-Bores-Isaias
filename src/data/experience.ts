import { FaMicrosoft, FaJs, FaReact, FaCode, FaDatabase, FaLayerGroup, FaGitAlt, FaNodeJs, FaDocker, FaLock } from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiNextdotjs, SiPostgresql, SiPrisma } from 'react-icons/si';

export const EXPERIENCE_DATA = [
    {
        badgeType: 'primary',
        technologies: [
            { name: ".NET Core 10", icon: FaMicrosoft, color: "text-blue-600 dark:text-blue-400" },
            { name: "C#", icon: FaCode, color: "text-purple-600 dark:text-purple-400" },
            { name: "SQL Server", icon: FaDatabase, color: "text-orange-500 dark:text-orange-400" },
            { name: "React 19", icon: FaReact, color: "text-cyan-500 dark:text-cyan-400" },
            { name: "OAuth2 / JWT", icon: FaLock, color: "text-green-500 dark:text-green-400" },
            { name: "Entity Framework", icon: FaLayerGroup, color: "text-indigo-600 dark:text-indigo-400" },
            { name: "Git / GitHub", icon: FaGitAlt, color: "text-orange-600" }
        ]
    },
    {
        badgeType: 'secondary',
        technologies: [
            { name: ".NET Framework", icon: FaMicrosoft, color: "text-blue-600 dark:text-blue-400" },
            { name: "Entity Framework", icon: FaLayerGroup, color: "text-indigo-600 dark:text-indigo-400" },
            { name: "C#", icon: FaCode, color: "text-purple-600 dark:text-purple-400" },
            { name: "JavaScript", icon: FaJs, color: "text-yellow-500 dark:text-yellow-400" },
            { name: "Bootstrap", icon: FaCode, color: "text-purple-500 dark:text-purple-400" },
            { name: "SQL Server", icon: FaDatabase, color: "text-orange-500 dark:text-orange-400" },
            { name: "GitHub", icon: FaGitAlt, color: "text-orange-600" }
        ]
    },
    {
        badgeType: 'tertiary',
        technologies: [
            { name: "NestJS 11", icon: SiNestjs, color: "text-red-600 dark:text-red-400" },
            { name: "Next.js 15", icon: SiNextdotjs, color: "text-gray-800 dark:text-gray-200" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700 dark:text-blue-400" },
            { name: "Prisma ORM", icon: SiPrisma, color: "text-teal-600 dark:text-teal-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-500 dark:text-blue-400" },
            { name: "Docker", icon: FaDocker, color: "text-blue-400 dark:text-blue-300" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-600" }
        ]
    }
];
