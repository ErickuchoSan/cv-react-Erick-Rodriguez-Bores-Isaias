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
        <section id="habilidades" className="section-tech-bg py-16 sm:py-20 md:py-24 bg-[#f9f9f9] dark:bg-zinc-950 transition-colors duration-300 relative">
            <SectionParticles />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.skills.title}
                    subtitle={t.skills.subtitle}
                />

                {/* Main Skills */}
                <div className="mb-14 sm:mb-16">
                    <h3 className="text-base font-black mb-8 text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.15em] font-['Manrope'] flex items-center gap-3 animate-fade-in-up opacity-0">
                        <span className="w-5 h-0.5 bg-[#b61722]"></span>
                        {t.skills.mainTech}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                        {SKILLS_DATA.main.map((skill, index) => (
                            <GlassCard
                                key={index}
                                className="group p-6 flex flex-col items-center justify-center text-center hover:border-[#b61722]/50 transition-all duration-300 animate-scale-in opacity-0"
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <skill.icon
                                    aria-hidden="true"
                                    className={`text-4xl sm:text-5xl mb-3 group-hover:scale-125 transition-transform duration-300 ${skill.color}`}
                                />
                                <h4 className="font-bold text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-['Inter']">{skill.name}</h4>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Tech Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-16">
                    {SKILLS_DATA.categories.map((cat, index) => (
                        <GlassCard
                            key={index}
                            className="p-5 group hover:border-[#b61722]/50 transition-all duration-300 animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-7 h-7 bg-[#b61722] flex items-center justify-center mr-3 group-hover:bg-orange-500 transition-colors duration-300">
                                    <cat.icon aria-hidden="true" className="text-white text-sm" />
                                </div>
                                <h4 className="font-black text-zinc-900 dark:text-zinc-100 text-sm uppercase tracking-tight font-['Manrope']">{cat.title}</h4>
                            </div>
                            <div className="space-y-2">
                                {cat.skills.map((skill, sIndex) => (
                                    <div
                                        key={sIndex}
                                        className="flex items-center py-1 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
                                    >
                                        <skill.icon aria-hidden="true" className={`${skill.color} mr-2 text-sm flex-shrink-0`} />
                                        <span className="text-xs text-zinc-600 dark:text-zinc-400 font-['Inter']">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Soft Skills / Competencies */}
                <div>
                    <h3 className="text-base font-black mb-8 text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.15em] font-['Manrope'] flex items-center gap-3 animate-fade-in-up opacity-0">
                        <span className="w-5 h-0.5 bg-orange-500"></span>
                        {t.skills.competencies.title}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {SKILLS_DATA.softSkills.map((skill, index) => (
                            <GlassCard
                                key={index}
                                className="p-5 group hover:border-[#b61722]/50 transition-all duration-300 animate-fade-in-up opacity-0"
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-7 h-7 bg-zinc-900 dark:bg-zinc-700 group-hover:bg-[#b61722] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                        <skill.icon aria-hidden="true" className="text-white text-xs" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-zinc-900 dark:text-zinc-100 text-sm mb-1 font-['Manrope'] uppercase tracking-tight group-hover:text-[#b61722] transition-colors duration-300">{skill.title}</h4>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-['Inter']">
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
