import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_DATA } from '../../data/projects';
import { SectionParticles } from '../UI/SectionParticles';
import { GlassCard } from '../UI/GlassCard';

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

    // Editorial accent colors for project headers
    const headerColors = [
        { bg: 'bg-zinc-950', accent: '#b61722' },
        { bg: 'bg-[#b61722]', accent: '#f97316' },
        { bg: 'bg-zinc-800', accent: '#f97316' },
        { bg: 'bg-orange-600', accent: '#09090b' },
        { bg: 'bg-zinc-900', accent: '#b61722' },
        { bg: 'bg-[#930013]', accent: '#f97316' },
    ];

    return (
        <section id="proyectos" className="section-tech-bg py-16 sm:py-20 md:py-24 bg-white dark:bg-zinc-900 transition-colors duration-300 relative">
            <SectionParticles />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.projects.title}
                    subtitle={t.projects.subtitle}
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {projectItems.map((project, index) => {
                        const colors = headerColors[index % headerColors.length];
                        return (
                            <GlassCard
                                key={index}
                                className="project-card group flex flex-col h-full overflow-hidden animate-fade-in-up opacity-0"
                                style={{ animationDelay: `${index * 120}ms` }}
                            >
                                {/* Project Header */}
                                <div className={`${colors.bg} p-8 flex items-center justify-center min-h-[150px] relative overflow-hidden`}>
                                    {/* Subtle grid */}
                                    <div className="absolute inset-0 opacity-10"
                                        style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                                    ></div>
                                    <project.icon
                                        aria-hidden="true"
                                        className="text-5xl sm:text-6xl text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
                                    />
                                    {/* Accent dot */}
                                    <div
                                        className="absolute top-3 right-3 w-2 h-2 rounded-full"
                                        style={{ background: colors.accent }}
                                    ></div>
                                </div>

                                {/* Project Content */}
                                <div className="p-5 flex-grow flex flex-col bg-white dark:bg-zinc-900">
                                    <h3 className="text-base sm:text-lg font-black text-zinc-900 dark:text-zinc-100 mb-2 font-['Manrope'] uppercase tracking-tight group-hover:text-[#b61722] transition-colors duration-200">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed flex-grow font-['Inter']">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tech.map((tag, tIndex) => (
                                            <span
                                                key={tIndex}
                                                className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-medium font-['Inter'] hover:border-[#b61722]/50 hover:text-[#b61722] transition-colors duration-200 cursor-default"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
