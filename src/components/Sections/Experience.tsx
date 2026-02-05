import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaCheck, FaMicrosoft, FaJs, FaReact, FaCode, FaDatabase, FaLayerGroup, FaPython, FaDocker, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiNestjs, SiVuedotjs } from 'react-icons/si';

export const EXPERIENCE_DATA = [
    {
        role: "Programador de Auditoría Senior",
        company: "Grupo Salinas",
        period: "Mayo 2024 - Actual",
        duration: "2 años",
        description: "Desarrollador principal responsable del mantenimiento, evolución y arquitectura de sistemas críticos de auditoría interna (ADA/HONESTEL) que manejan denuncias de todas las empresas del grupo.",
        functions: [
            "Desarrollo y mantenimiento de la API v2 del sistema de auditoría interna",
            "Optimización de stored procedures SQL Server, mejorando rendimiento hasta 40%",
            "Implementación de encriptación end-to-end con AES-256, RSA y SHA-256",
            "Migración progresiva de .NET Framework a .NET Core con microservicios",
            "Refactorización de frontend vanilla a React + Next.js + TypeScript + Tailwind",
            "Liderazgo técnico en juntas interdepartamentales",
            "Automatización de procesos con scripts Python"
        ],
        achievements: [
            "Reducción de 40% en tiempo de consultas críticas",
            "Automatización de tareas de 30 min a segundos con Python",
            "Documentación técnica de sistemas indocumentados"
        ],
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
        ],
        badgeType: 'primary'
    },
    {
        role: "Desarrollador Full Stack",
        company: "Digital (Empresa de Tecnología)",
        period: "Mayo 2023 - Mayo 2024",
        duration: "1 año",
        description: "Desarrollo de sistemas empresariales completos, enfocado en aplicaciones de reclutamiento y gestión de recursos humanos con énfasis en procesamiento masivo de datos.",
        functions: [
            "Diseño e implementación de sistema completo de reclutamiento",
            "Desarrollo de funcionalidad de carga masiva desde Excel y TXT",
            "Integración de servicios backend con .NET Framework y Entity Framework",
            "Diseño de interfaces responsivas con JavaScript y Bootstrap",
            "Optimización de consultas SQL Server para grandes volúmenes"
        ],
        achievements: [
            "Sistema end-to-end de gestión de reclutamiento",
            "Módulo de carga masiva procesando miles de registros",
            "Reducción de tiempo de onboarding mediante automatización"
        ],
        technologies: [
            { name: ".NET Framework", icon: FaMicrosoft, color: "text-blue-600 dark:text-blue-400" },
            { name: "Entity Framework", icon: FaLayerGroup, color: "text-indigo-600 dark:text-indigo-400" },
            { name: "C#", icon: FaCode, color: "text-purple-600 dark:text-purple-400" },
            { name: "JavaScript", icon: FaJs, color: "text-yellow-500 dark:text-yellow-400" },
            { name: "Bootstrap", icon: FaCode, color: "text-purple-500 dark:text-purple-400" },
            { name: "SQL Server", icon: FaDatabase, color: "text-orange-500 dark:text-orange-400" },
            { name: "jQuery", icon: FaCode, color: "text-blue-500 dark:text-blue-400" }
        ],
        badgeType: 'secondary'
    },
    {
        role: "Desarrollador Independiente",
        company: "Proyectos Personales",
        period: "2020 - 2023",
        duration: "3 años",
        description: "Desarrollo autodidacta de aplicaciones web completas, sistemas de gestión y herramientas de automatización. Experimentación con múltiples stacks tecnológicos.",
        functions: [
            "Aplicaciones CRUD completas con .NET y bases de datos relacionales",
            "Sistemas de administración con Entity Framework y SQL Server",
            "Experimentación con NestJS, PostgreSQL y Vue.js",
            "Implementación de algoritmos de seguridad y criptografía",
            "Desarrollo de APIs RESTful y microservicios"
        ],
        achievements: [
            "Dominio autodidacta de múltiples tecnologías",
            "Portfolio de proyectos funcionales",
            "Base sólida en arquitecturas escalables"
        ],
        technologies: [
            { name: ".NET", icon: FaMicrosoft, color: "text-blue-600 dark:text-blue-400" },
            { name: "Python", icon: FaPython, color: "text-yellow-500 dark:text-yellow-400" },
            { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
            { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
            { name: "SQL Server", icon: FaDatabase, color: "text-orange-500 dark:text-orange-400" }
        ],
        badgeType: 'tertiary'
    }
];

export const Experience: React.FC = () => {
    return (
        <section id="experiencia" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Experiencia Profesional"
                    subtitle="+5 años de trayectoria en desarrollo de software"
                />

                <div className="space-y-12">
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div key={index} className="experience-card glass-card tech-hover-effect p-8">
                            <div className="experience-header flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                <div className="experience-company mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{exp.role}</h3>
                                    <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                                </div>
                                <div className="experience-period flex flex-col items-start md:items-end">
                                    <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg ${exp.badgeType === 'primary'
                                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700'
                                        : exp.badgeType === 'secondary'
                                            ? 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300'
                                            : 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
                                        }`}>
                                        {exp.period}
                                    </span>
                                    <span className="text-sm text-gray-500 mt-1">{exp.duration}</span>
                                </div>
                            </div>

                            <div className="experience-content">
                                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium text-lg leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200 text-lg">Responsabilidades:</h4>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                            {exp.functions.map((func, i) => (
                                                <li key={i} className="flex items-start">
                                                    <FaCheck className="text-green-500 mr-2 mt-1 min-w-[12px]" />
                                                    <span>{func}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {exp.achievements && (
                                            <div className="mt-6">
                                                <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Logros Destacados:</h4>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start text-green-600 dark:text-green-400">
                                                            <span className="text-yellow-500 mr-2">★</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200 text-lg">Stack Tecnológico:</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {exp.technologies.map((tech, i) => (
                                                <div key={i} className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                                                    <tech.icon className={`${tech.color} mr-2 text-lg`} />
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
