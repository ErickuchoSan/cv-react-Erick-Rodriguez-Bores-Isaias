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
        <section id="habilidades" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <SectionParticles />

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
                            <GlassCard key={index} className={`group p-6 rounded-2xl flex flex-col items-center justify-center text-center border border-transparent transition-all duration-300 relative overflow-hidden ${skill.border} hover:shadow-lg ${skill.shadow}`}>
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.bg}`}></div>
                                <skill.icon aria-hidden="true" className={`text-4xl sm:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-md relative z-10 ${skill.color}`} />
                                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm sm:text-base relative z-10">{skill.name}</h4>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Tech Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {SKILLS_DATA.categories.map((cat, index) => (
                        <GlassCard key={index} className="tech-category-card p-4 sm:p-5 rounded-xl">
                            <div className="flex items-center mb-4">
                                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3 text-blue-600 dark:text-blue-400">
                                    <cat.icon aria-hidden="true" className="text-xl" />
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-200">{cat.title}</h4>
                            </div>
                            <div className="space-y-3">
                                {cat.skills.map((skill, sIndex) => (
                                    <div key={sIndex} className="flex items-center">
                                        <skill.icon aria-hidden="true" className={`${skill.color} mr-2`} />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-800 dark:text-gray-200">{t.skills.competencies.title}</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {SKILLS_DATA.softSkills.map((skill, index) => (
                            <GlassCard key={index} className="p-4 sm:p-5">
                                <div className="flex items-start mb-3">
                                    <skill.icon aria-hidden="true" className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">{skill.title}</h4>
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
