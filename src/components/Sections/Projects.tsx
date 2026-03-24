import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_DATA } from '../../data/projects';
import { SectionParticles } from '../UI/SectionParticles';
import { GlassCard } from '../UI/GlassCard';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export const Projects: React.FC = () => {
    const { t } = useLanguage();

    const projectItems = PROJECTS_DATA.map((item, index) => {
        const trans = t.projects.items[index];
        return {
            ...item,
            title: trans.title,
            description: trans.description
        };
    });

    // Different gradient colors for variety
    const gradients = [
        'from-blue-600 via-blue-500 to-cyan-500',
        'from-purple-600 via-purple-500 to-pink-500',
        'from-emerald-600 via-emerald-500 to-teal-500',
        'from-orange-600 via-orange-500 to-amber-500',
        'from-rose-600 via-rose-500 to-pink-500',
        'from-indigo-600 via-indigo-500 to-blue-500',
    ];

    return (
        <section id="proyectos" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
            <SectionParticles />

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.projects.title}
                    subtitle={t.projects.subtitle}
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projectItems.map((project, index) => (
                        <GlassCard
                            key={index}
                            className="group flex flex-col h-full rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up opacity-0 border-0"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Project Header with Icon */}
                            <div className={`relative bg-gradient-to-br ${gradients[index % gradients.length]} p-6 sm:p-8 flex flex-col items-center justify-center min-h-[180px] overflow-hidden`}>
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                                </div>

                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Icon */}
                                <div className="relative z-10 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                                    <project.icon aria-hidden="true" className="text-5xl sm:text-6xl text-white drop-shadow-lg" />
                                </div>

                                {/* Floating particles effect */}
                                <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
                                <div className="absolute bottom-6 right-6 w-3 h-3 bg-white/20 rounded-full animate-float delay-300"></div>
                                <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-white/40 rounded-full animate-float delay-700"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-5 sm:p-6 flex-grow flex flex-col bg-white dark:bg-gray-900">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white cursor-default border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 group/btn">
                                        <FaGithub aria-hidden="true" className="text-base group-hover/btn:rotate-12 transition-transform" />
                                        <span>Code</span>
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group/btn">
                                        <FaExternalLinkAlt aria-hidden="true" className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        <span>Demo</span>
                                    </button>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
