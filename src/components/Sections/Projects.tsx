import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaShieldAlt, FaUsers, FaLock } from 'react-icons/fa';

export const PROJECTS = [
    {
        title: "Sistema de Auditoría Interna",
        description: "Sistema para manejo de denuncias internas de las empresas del grupo Ricardo Salinas. Migración completa de .NET Framework a .NET Core con microfrontends.",
        tech: [".NET Core", "Next.js", "React", "TypeScript", "Turbo Repo", "AWS"],
        icon: FaShieldAlt
    },
    {
        title: "Sistema de Reclutamiento",
        description: "Plataforma completa para administración de candidatos con carga masiva de datos. Integración de servicios y gestión completa del proceso de reclutamiento.",
        tech: [".NET Framework", "JavaScript", "Bootstrap", "SQL Server"],
        icon: FaUsers
    },
    {
        title: "Sistema de Encriptación",
        description: "Implementación de algoritmos de encriptación avanzada (AES, RSA, SHA-256). Sistema completo para protección de datos sensibles y seguridad informática.",
        tech: ["C#", ".NET Core", "Criptografía", "Seguridad"],
        icon: FaLock
    }
];

export const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Proyectos Destacados"
                    subtitle="Soluciones Innovadoras y Aplicaciones Modernas"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="project-card glass-card tech-hover-effect flex flex-col h-full">
                            <div className="project-image bg-gradient-to-br from-blue-500 to-purple-600 text-center p-6 flex justify-center items-center h-48">
                                <project.icon className="text-6xl text-white" />
                            </div>

                            <div className="project-content p-6 flex-grow flex flex-col">
                                <h3 className="project-title text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                                    {project.title}
                                </h3>
                                <p className="project-description text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="project-tech flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tag, tIndex) => (
                                        <span key={tIndex} className="tech-tag px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-110">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
