import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaCheck, FaMicrosoft, FaJs, FaReact, FaCode, FaDatabase, FaLayerGroup, FaPython, FaDocker, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiNestjs, SiVuedotjs } from 'react-icons/si';

export const EXPERIENCE_DATA = [
    {
        role: "Programador de Auditoría Senior",
        company: "Grupo Salinas",
        period: "Mayo 2024 - Actual",
        duration: "~2 años",
        description: "Líder técnico responsable de la arquitectura, desarrollo y evolución de los sistemas críticos de auditoría interna (ADA/HONESTEL) que procesan denuncias de todas las empresas del grupo corporativo.",
        functions: [
            "Diseño y desarrollo de la API v2 del sistema de auditoría con arquitectura de microservicios",
            "Optimización de stored procedures en SQL Server, logrando mejoras de rendimiento de hasta 40%",
            "Refactorización de código legacy: modularización de métodos extensos, eliminación de código redundante y mejora de mantenibilidad",
            "Actualización de librerías/packages y migración del código a nuevas versiones con buenas prácticas",
            "Implementación de encriptación end-to-end con AES-256, RSA y SHA-256 para protección de datos sensibles",
            "Liderazgo de la migración progresiva de .NET Framework a .NET Core",
            "Modernización del frontend: de vanilla JS a React + Next.js + TypeScript + Tailwind CSS",
            "Automatización de procesos operativos mediante scripts Python, eliminando tareas manuales repetitivas"
        ],
        achievements: [
            "Reducción de 40% en tiempo de ejecución de consultas críticas de base de datos",
            "Automatización de procesos que tomaban 30 minutos a solo segundos con Python",
            "Creación de documentación técnica completa para sistemas que carecían de ella"
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
        company: "Digital Solutions",
        period: "Mayo 2023 - Mayo 2024",
        duration: "1 año",
        description: "Desarrollo integral de sistemas empresariales para gestión de recursos humanos y reclutamiento, con enfoque en procesamiento masivo de datos y automatización de flujos operativos.",
        functions: [
            "Diseño e implementación end-to-end del sistema de reclutamiento y gestión de candidatos",
            "Desarrollo de módulo de carga masiva desde Excel y TXT, procesando miles de registros simultáneamente",
            "Arquitectura e integración de servicios backend con .NET Framework y Entity Framework",
            "Diseño de interfaces responsivas y accesibles con JavaScript y Bootstrap",
            "Optimización de consultas SQL Server para manejo eficiente de grandes volúmenes de datos"
        ],
        achievements: [
            "Entrega de sistema completo de gestión de reclutamiento desde cero",
            "Módulo de carga masiva capaz de procesar miles de registros en segundos",
            "Reducción significativa del tiempo de onboarding mediante automatización de procesos"
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
        role: "Desarrollador Full Stack",
        company: "Freelance / Proyectos Propios",
        period: "2020 - 2023",
        duration: "3 años",
        description: "Desarrollo profesional autodidacta construyendo aplicaciones web completas, sistemas de gestión empresarial y herramientas de automatización con múltiples stacks tecnológicos.",
        functions: [
            "Desarrollo de aplicaciones web completas con .NET, Entity Framework y bases de datos relacionales",
            "Diseño e implementación de sistemas de administración con SQL Server",
            "Construcción de APIs RESTful y exploración de arquitecturas de microservicios",
            "Implementación de algoritmos de seguridad y criptografía (AES, RSA, SHA-256)",
            "Desarrollo con stacks modernos: NestJS, PostgreSQL, Vue.js y Node.js"
        ],
        achievements: [
            "Dominio autodidacta de +20 tecnologías en backend, frontend y DevOps",
            "Portfolio de proyectos funcionales desplegados en producción",
            "Base sólida en patrones de diseño y arquitecturas escalables"
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
        <section id="experiencia" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title="Experiencia Profesional"
                    subtitle="+5 años de trayectoria en desarrollo de software"
                />

                <div className="space-y-8 sm:space-y-12">
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div key={index} className="experience-card glass-card tech-hover-effect p-4 sm:p-6 md:p-8">
                            <div className="experience-header flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
                                <div className="experience-company mb-3 md:mb-0">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">{exp.role}</h3>
                                    <p className="text-blue-600 font-semibold text-base sm:text-lg">{exp.company}</p>
                                </div>
                                <div className="experience-period flex flex-col items-start md:items-end">
                                    <span className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg ${exp.badgeType === 'primary'
                                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700'
                                        : exp.badgeType === 'secondary'
                                            ? 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300'
                                            : 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
                                        }`}>
                                        {exp.period}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-500 mt-1">{exp.duration}</span>
                                </div>
                            </div>

                            <div className="experience-content">
                                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 font-medium text-base sm:text-lg leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                    <div>
                                        <h4 className="font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200 text-base sm:text-lg">Responsabilidades:</h4>
                                        <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                            {exp.functions.map((func, i) => (
                                                <li key={i} className="flex items-start">
                                                    <FaCheck className="text-green-500 mr-2 mt-1 min-w-[12px] flex-shrink-0" />
                                                    <span>{func}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {exp.achievements && (
                                            <div className="mt-4 sm:mt-6">
                                                <h4 className="font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200 text-base sm:text-lg">Logros Destacados:</h4>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start text-sm sm:text-base text-green-600 dark:text-green-400">
                                                            <span className="text-yellow-500 mr-2 flex-shrink-0">★</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200 text-base sm:text-lg mt-4 md:mt-0">Stack Tecnológico:</h4>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {exp.technologies.map((tech, i) => (
                                                <div key={i} className="flex items-center bg-gray-100 dark:bg-gray-700 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                                                    <tech.icon className={`${tech.color} mr-1.5 sm:mr-2 text-base sm:text-lg`} />
                                                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
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
