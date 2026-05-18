import { FaCloud, FaStore, FaCube } from 'react-icons/fa';

export const PROJECTS_DATA = [
    {
        title: "Align Designs Platform",
        description: "",
        tech: ["NestJS 11", "Next.js 16", "PostgreSQL 15", "Prisma", "Redis", "Docker", "DigitalOcean", "JWT/OTP"],
        icon: FaCloud
    },
    {
        title: "Comal POS",
        description: "",
        tech: ["Hono.js", "Supabase", "PostgreSQL", "Next.js 16", "Dexie.js", "TypeScript", "Docker Compose", "ESC/POS"],
        icon: FaStore
    },
    {
        title: "MDG Investment Group",
        description: "",
        tech: ["Next.js 15", "Sanity CMS", "GSAP", "Spline 3D", "Supabase", "Resend", "Tailwind v4", "Docker"],
        icon: FaCube
    }
];
