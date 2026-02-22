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

    return (
        <section id="proyectos" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <SectionParticles />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.projects.title}
                    subtitle={t.projects.subtitle}
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {projectItems.map((project, index) => (
                        <GlassCard key={index} className="project-card flex flex-col h-full">
                            <div className="project-image bg-gradient-to-br from-blue-500 to-purple-600 text-center p-4 sm:p-6 flex justify-center items-center h-36 sm:h-48">
                                <project.icon aria-hidden="true" className="text-5xl sm:text-6xl text-white" />
                            </div>

                            <div className="project-content p-4 sm:p-6 flex-grow flex flex-col">
                                <h3 className="project-title text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                                    {project.title}
                                </h3>
                                <p className="project-description text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="project-tech flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                                    {project.tech.map((tag, tIndex) => (
                                        <span key={tIndex} className="tech-tag px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
