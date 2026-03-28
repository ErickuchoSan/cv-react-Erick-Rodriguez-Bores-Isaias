import { FaShieldAlt, FaUsers, FaCloud } from 'react-icons/fa';

export const PROJECTS_DATA = [
    {
        title: "Align Designs Platform",
        description: "",
        tech: ["NestJS", "Next.js 15", "PostgreSQL", "Prisma", "Docker", "GitHub Actions", "JWT/OTP", "RBAC"],
        icon: FaCloud
    },
    {
        title: "Sistema de Auditoría Interna (ADA/HONESTEL)",
        description: "",
        tech: [".NET Core 6", "C#", "SQL Server", "OAuth2/JWT", "Entity Framework", "HTML/Bootstrap"],
        icon: FaShieldAlt
    },
    {
        title: "Sistema de Reclutamiento Empresarial",
        description: "",
        tech: [".NET Framework", "JavaScript", "Bootstrap", "SQL"],
        icon: FaUsers
    }
];
