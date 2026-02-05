import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaMicrosoft, FaJs, FaReact, FaDatabase, FaServer, FaDesktop, FaCloud, FaRobot, FaLightbulb, FaHandshake, FaSyncAlt, FaChalkboardTeacher, FaComments, FaPython, FaNodeJs, FaDocker, FaGitAlt, FaAws, FaBrain, FaGraduationCap, FaRocket } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiNestjs, SiVuedotjs, SiExpress, SiNginx, SiDocker } from 'react-icons/si';

export const Skills: React.FC = () => {
    return (
        <section id="habilidades" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Habilidades Técnicas"
                    subtitle="Stack tecnológico y competencias profesionales"
                />

                {/* Main Skills with Progress Bars */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Tecnologías Principales</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: FaMicrosoft, color: 'text-blue-600', name: '.NET / C#', progress: 95 },
                            { icon: FaReact, color: 'text-cyan-400', name: 'React / Next.js', progress: 90 },
                            { icon: SiTypescript, color: 'text-blue-500', name: 'TypeScript', progress: 88 },
                            { icon: FaDatabase, color: 'text-orange-500', name: 'SQL Server', progress: 85 },
                        ].map((skill, index) => (
                            <div key={index} className="skill-card glass-card tech-hover-effect p-6 text-center">
                                <div className="skill-icon mb-4 inline-block">
                                    <skill.icon className={`text-4xl ${skill.color}`} />
                                </div>
                                <h4 className="skill-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{skill.name}</h4>
                                <div className="skill-bar w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                                    <div
                                        className="skill-progress bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full relative"
                                        style={{ width: `${skill.progress}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm text-blue-600 font-semibold">{skill.progress}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Categories */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <TechCategory
                        title="Backend"
                        icon={FaServer}
                        items={[
                            { name: '.NET Core / .NET Framework', icon: FaMicrosoft, color: 'text-blue-600' },
                            { name: 'C# / ASP.NET', icon: FaMicrosoft, color: 'text-purple-600' },
                            { name: 'Entity Framework', icon: FaDatabase, color: 'text-indigo-500' },
                            { name: 'NestJS / Express', icon: FaNodeJs, color: 'text-green-600' },
                            { name: 'Python (Automatización)', icon: FaPython, color: 'text-yellow-500' },
                            { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
                            { name: 'Microservicios / REST APIs', icon: FaServer, color: 'text-teal-600' }
                        ]}
                    />
                    <TechCategory
                        title="Frontend"
                        icon={FaDesktop}
                        items={[
                            { name: 'React', icon: FaReact, color: 'text-cyan-400' },
                            { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800 dark:text-white' },
                            { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
                            { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-500' },
                            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
                            { name: 'JavaScript ES6+', icon: FaJs, color: 'text-yellow-500' },
                            { name: 'Bootstrap / HTML / CSS', icon: FaDesktop, color: 'text-purple-500' }
                        ]}
                    />
                    <TechCategory
                        title="DevOps & Herramientas"
                        icon={FaCloud}
                        items={[
                            { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
                            { name: 'Git / GitHub / CI/CD', icon: FaGitAlt, color: 'text-orange-600' },
                            { name: 'AWS / Azure', icon: FaAws, color: 'text-orange-500' },
                            { name: 'nginx / ngrok', icon: SiNginx, color: 'text-green-500' },
                            { name: 'Scripting (Python/Bash)', icon: FaPython, color: 'text-yellow-500' },
                            { name: 'Máquinas Virtuales', icon: FaServer, color: 'text-gray-600' }
                        ]}
                    />
                    <TechCategory
                        title="IA & Productividad"
                        icon={FaRobot}
                        items={[
                            { name: 'Claude / ChatGPT', icon: FaBrain, color: 'text-purple-600' },
                            { name: 'Gemini CLI', icon: FaRobot, color: 'text-blue-500' },
                            { name: 'GitHub Copilot', icon: FaGitAlt, color: 'text-gray-700' },
                            { name: 'Pair Programming con IA', icon: FaRocket, color: 'text-orange-500' },
                            { name: 'Automatización de Flujos', icon: FaSyncAlt, color: 'text-green-600' }
                        ]}
                    />
                </div>

                {/* Soft Skills & Competencies */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Competencias Clave</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: FaGraduationCap, title: 'Aprendizaje Autodidacta', desc: 'Capacidad demostrada para dominar nuevas tecnologías de forma independiente' },
                            { icon: FaLightbulb, title: 'Resolución de Problemas', desc: 'Pensamiento analítico y sistemático para optimización de sistemas' },
                            { icon: FaSyncAlt, title: 'Adaptabilidad Tecnológica', desc: 'Rápida adopción de nuevas herramientas y frameworks' },
                            { icon: FaRocket, title: 'Ownership', desc: 'Proactividad en identificación y solución de problemas no asignados' },
                            { icon: FaChalkboardTeacher, title: 'Mentoría Técnica', desc: 'Guía y desarrollo de equipos junior' },
                            { icon: FaComments, title: 'Comunicación Técnica', desc: 'Explicar conceptos complejos a audiencias no técnicas' }
                        ].map((skill, index) => (
                            <div key={index} className="soft-skill-card glass-card tech-hover-effect p-6 text-center">
                                <skill.icon className="text-3xl text-blue-600 mb-4 mx-auto" />
                                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 text-lg">{skill.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface TechItem {
    name: string;
    icon: React.ElementType;
    color: string;
}

const TechCategory: React.FC<{ title: string; icon: React.ElementType; items: TechItem[] }> = ({ title, icon: Icon, items }) => (
    <div className="tech-category glass-card tech-hover-effect p-6">
        <h3 className="tech-category-title text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
            <Icon className="text-blue-600 mr-3 text-2xl" />
            {title}
        </h3>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-center bg-gray-50 dark:bg-gray-700/50 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                    <item.icon className={`${item.color} mr-3 text-lg`} />
                    <span className="font-medium">{item.name}</span>
                </li>
            ))}
        </ul>
    </div>
);
