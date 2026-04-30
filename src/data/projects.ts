import { FaCloud, FaStore, FaCube } from 'react-icons/fa';

export const PROJECTS_DATA = [
    {
        title: "Plataforma B2B/B2C de Gestión de Proyectos",
        description: "",
        tech: ["NestJS 11", "Next.js 16", "PostgreSQL 15", "Prisma", "Redis", "Docker", "DigitalOcean", "JWT/OTP"],
        icon: FaCloud
    },
    {
        title: "Sistema POS Multi-Sucursal Cloud",
        description: "",
        tech: ["Node.js", "Supabase", "PostgreSQL", "React", "TypeScript", "Vite", "Docker", "Playwright"],
        icon: FaStore
    },
    {
        title: "Sitio Corporativo con CMS Headless + 3D Interactivo",
        description: "",
        tech: ["Next.js 15", "Sanity CMS", "GSAP", "Spline 3D", "Supabase", "Resend", "React Query", "Tailwind"],
        icon: FaCube
    }
];
