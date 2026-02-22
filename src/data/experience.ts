import { FaMicrosoft, FaJs, FaReact, FaCode, FaDatabase, FaLayerGroup, FaPython, FaDocker, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiNestjs, SiVuedotjs } from 'react-icons/si';

export const EXPERIENCE_DATA = [
    {
        badgeType: 'primary',
        technologies: [
            { name: ".NET Core", icon: FaMicrosoft, color: "text-blue-600 dark:text-blue-400" },
            { name: "C#", icon: FaCode, color: "text-purple-600 dark:text-purple-400" },
            { name: "SQL Server", icon: FaDatabase, color: "text-orange-500 dark:text-orange-400" },
            { name: "React", icon: FaReact, color: "text-cyan-500 dark:text-cyan-400" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-500 dark:text-blue-400" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
            { name: "Python", icon: FaPython, color: "text-yellow-500 dark:text-yellow-400" },
            { name: "Docker", icon: FaDocker, color: "text-blue-400" },
            { name: "Git", icon: FaGitAlt, color: "text-orange-600" }
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
            { name: "jQuery", icon: FaCode, color: "text-blue-500 dark:text-blue-400" }
        ]
    },
    {
        badgeType: 'tertiary',
        technologies: [
            { name: ".NET", icon: FaMicrosoft, color: "text-blue-600 dark:text-blue-400" },
            { name: "Python", icon: FaPython, color: "text-yellow-500 dark:text-yellow-400" },
            { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
            { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
            { name: "SQL Server", icon: FaDatabase, color: "text-orange-500 dark:text-orange-400" }
        ]
    }
];
