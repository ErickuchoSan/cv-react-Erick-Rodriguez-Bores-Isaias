import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import { SectionParticles } from '../UI/SectionParticles';
import { GlassCard } from '../UI/GlassCard';
import { SKILLS_DATA_MAIN, SKILLS_DATA_CATEGORIES, SOFT_SKILLS_ICONS } from '../../data/skills';

export const Skills: React.FC = () => {
    const { t } = useLanguage();

    const SKILLS_DATA = {
        main: SKILLS_DATA_MAIN,
        categories: SKILLS_DATA_CATEGORIES.map(cat => ({
            ...cat,
            title: t.skills.categories[cat.id as keyof typeof t.skills.categories]
        })),
        softSkills: t.skills.competencies.items.map((item, index) => ({
            ...item,
            icon: SOFT_SKILLS_ICONS[index] || SOFT_SKILLS_ICONS[0]
        }))
    };

    return (
        <section id="habilidades" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
            <SectionParticles />

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.skills.title}
                    subtitle={t.skills.subtitle}
                />

                {/* Main Skills Progress */}
                <div className="mb-12 sm:mb-16">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-800 dark:text-gray-200 animate-fade-in-up opacity-0">{t.skills.mainTech}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
                        {SKILLS_DATA.main.map((skill, index) => (
                            <GlassCard
                                key={index}
                                className={`group p-6 rounded-2xl flex flex-col items-center justify-center text-center border border-transparent transition-all duration-500 relative overflow-hidden ${skill.border} hover:shadow-xl ${skill.shadow} hover:-translate-y-2 animate-scale-in opacity-0`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000"></div>
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.bg}`}></div>
                                <skill.icon aria-hidden="true" className={`text-4xl sm:text-5xl mb-4 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2 drop-shadow-lg relative z-10 ${skill.color}`} />
                                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm sm:text-base relative z-10 transition-colors duration-300">{skill.name}</h4>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Tech Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {SKILLS_DATA.categories.map((cat, index) => (
                        <GlassCard
                            key={index}
                            className="tech-category-card p-4 sm:p-5 rounded-xl group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white dark:group-hover:bg-blue-500 transition-all duration-300 shadow-sm">
                                    <cat.icon aria-hidden="true" className="text-xl" />
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{cat.title}</h4>
                            </div>
                            <div className="space-y-3">
                                {cat.skills.map((skill, sIndex) => (
                                    <div
                                        key={sIndex}
                                        className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-default"
                                    >
                                        <skill.icon aria-hidden="true" className={`${skill.color} mr-2 transition-transform duration-300 group-hover:scale-110`} />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-800 dark:text-gray-200 animate-fade-in-up opacity-0">{t.skills.competencies.title}</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {SKILLS_DATA.softSkills.map((skill, index) => (
                            <GlassCard
                                key={index}
                                className="p-4 sm:p-5 group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up opacity-0"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start mb-3">
                                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                        <skill.icon aria-hidden="true" className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{skill.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {skill.desc}
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
