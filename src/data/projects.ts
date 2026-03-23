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
        tech: [".NET Core 8", "React 19", "SQL Server", "Azure Functions", "Azure Service Bus", "OAuth2/JWT"],
        icon: FaShieldAlt
    },
    {
        title: "Sistema de Reclutamiento Empresarial",
        description: "",
        tech: [".NET Framework", "JavaScript", "Bootstrap", "SQL"],
        icon: FaUsers
    }
];
