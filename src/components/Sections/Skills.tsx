import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaCode, FaServer, FaTools, FaBrain, FaLightbulb, FaRocket, FaUsers, FaCogs, FaChartLine, FaDatabase, FaDocker, FaAws, FaWindows, FaReact, FaCloud } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const Skills: React.FC = () => {
    const { t } = useLanguage();

    const SKILLS_DATA = {
        main: [
            { name: ".NET Core / C#", icon: FaWindows, color: "text-blue-600 dark:text-blue-500", bg: "bg-blue-500/5 dark:bg-blue-500/10", border: "hover:border-blue-500/30", shadow: "hover:shadow-blue-500/20" },
            { name: "React / Next.js", icon: FaReact, color: "text-cyan-500 dark:text-cyan-400", bg: "bg-cyan-500/5 dark:bg-cyan-500/10", border: "hover:border-cyan-500/30", shadow: "hover:shadow-cyan-400/20" },
            { name: "SQL Server", icon: FaDatabase, color: "text-red-500 dark:text-red-400", bg: "bg-red-500/5 dark:bg-red-500/10", border: "hover:border-red-500/30", shadow: "hover:shadow-red-500/20" },
            { name: "Microservices", icon: FaServer, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/5 dark:bg-purple-500/10", border: "hover:border-purple-500/30", shadow: "hover:shadow-purple-500/20" },
            { name: "Cloud Architecture", icon: FaCloud, color: "text-orange-500 dark:text-orange-400", bg: "bg-orange-500/5 dark:bg-orange-500/10", border: "hover:border-orange-500/30", shadow: "hover:shadow-orange-500/20" }
        ],
        categories: [
            {
                id: 'backend',
                title: t.skills.categories.backend,
                icon: FaServer,
                skills: [
                    { name: "C# / .NET 8", icon: FaWindows, color: "text-purple-600" },
                    { name: "SQL Server", icon: FaDatabase, color: "text-red-600" },
                    { name: "Microservices", icon: FaServer, color: "text-blue-500" },
                    { name: "Entity Framework", icon: FaDatabase, color: "text-indigo-600" },
                ]
            },
            {
                id: 'frontend',
                title: t.skills.categories.frontend,
                icon: FaCode,
                skills: [
                    { name: "React", icon: FaCode, color: "text-cyan-500" },
                    { name: "Next.js", icon: FaCode, color: "text-black dark:text-white" },
                    { name: "TypeScript", icon: FaCode, color: "text-blue-600" },
                    { name: "Tailwind", icon: FaCode, color: "text-cyan-400" }
                ]
            },
            {
                id: 'devops',
                title: t.skills.categories.devops,
                icon: FaTools,
                skills: [
                    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
                    { name: "Azure DevOps", icon: FaTools, color: "text-blue-700" },
                    { name: "AWS", icon: FaAws, color: "text-orange-500" },
                    { name: "CI/CD", icon: FaRocket, color: "text-green-600" }
                ]
            },
            {
                id: 'ai',
                title: t.skills.categories.ai,
                icon: FaBrain,
                skills: [
                    { name: "OpenAI API", icon: FaBrain, color: "text-green-600" },
                    { name: "Claude (Anthropic)", icon: FaBrain, color: "text-purple-500" },
                    { name: "Gemini", icon: FaBrain, color: "text-blue-500" },
                    { name: "AI Integration", icon: FaBrain, color: "text-yellow-500" }
                ]
            }
        ],
        softSkills: t.skills.competencies.items.map((item, index) => {
            const icons = [FaBrain, FaLightbulb, FaCogs, FaRocket, FaCode, FaUsers, FaChartLine, FaTools, FaRocket];
            return {
                ...item,
                icon: icons[index] || FaBrain
            };
        })
    };

    return (
        <section id="habilidades" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.skills.title}
                    subtitle={t.skills.subtitle}
                />

                {/* Main Skills Progress */}
                <div className="mb-12 sm:mb-16">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-800 dark:text-gray-200">{t.skills.mainTech}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
                        {SKILLS_DATA.main.map((skill, index) => (
                            <div key={index} className={`group glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center border border-transparent transition-all duration-300 relative overflow-hidden ${skill.border} hover:shadow-lg ${skill.shadow}`}>
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.bg}`}></div>
                                <skill.icon className={`text-4xl sm:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-md relative z-10 ${skill.color}`} />
                                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm sm:text-base relative z-10">{skill.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {SKILLS_DATA.categories.map((cat, index) => (
                        <div key={index} className="tech-category-card glass-card tech-hover-effect p-4 sm:p-5 rounded-xl">
                            <div className="flex items-center mb-4">
                                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3 text-blue-600 dark:text-blue-400">
                                    <cat.icon className="text-xl" />
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-200">{cat.title}</h4>
                            </div>
                            <div className="space-y-3">
                                {cat.skills.map((skill, sIndex) => (
                                    <div key={sIndex} className="flex items-center">
                                        <skill.icon className={`${skill.color} mr-2`} />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-800 dark:text-gray-200">{t.skills.competencies.title}</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {SKILLS_DATA.softSkills.map((skill, index) => (
                            <div key={index} className="glass-card tech-hover-effect p-4 sm:p-5">
                                <div className="flex items-start mb-3">
                                    <skill.icon className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">{skill.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {skill.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
