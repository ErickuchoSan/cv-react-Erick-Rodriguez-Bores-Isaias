import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaCheck } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { SectionParticles } from '../UI/SectionParticles';
import { GlassCard } from '../UI/GlassCard';
import { EXPERIENCE_DATA } from '../../data/experience';
import { Reveal, RevealGroup } from '../UI/Reveal';

export const Experience: React.FC = () => {
    const { t } = useLanguage();

    const experiencePoints = EXPERIENCE_DATA.map((item, index) => {
        const trans = t.experience.jobs[index];
        return {
            ...item,
            role: trans.role,
            company: trans.company,
            period: trans.period,
            duration: trans.duration,
            description: trans.description,
            functions: trans.functions,
            achievements: trans.achievements
        };
    });

    const badgeStyles = {
        primary: 'bg-[#b61722] text-white',
        secondary: 'bg-orange-500 text-white',
        tertiary: 'border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400',
    };

    return (
        <section id="experiencia" className="section-tech-bg py-16 sm:py-20 md:py-24 bg-white dark:bg-zinc-900 transition-colors duration-300 relative">
            <SectionParticles />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <Reveal y={40}>
                    <SectionTitle
                        title={t.experience.title}
                        subtitle={t.experience.subtitle}
                    />
                </Reveal>

                <div className="space-y-8 sm:space-y-10">
                    <RevealGroup stagger={100} baseDelay={80}>
                        {experiencePoints.map((exp, index) => (
                            <Reveal key={index} y={40}>
                                <GlassCard
                                    className="experience-card p-6 sm:p-8 group relative overflow-hidden"
                                >
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#b61722] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-3">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-100 font-['Manrope'] uppercase tracking-tight group-hover:text-[#b61722] transition-colors duration-300">
                                        {exp.role}
                                    </h3>
                                    <p className="text-[#b61722] font-bold text-base mt-0.5 font-['Inter']">{exp.company}</p>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
                                    <span className={`inline-block px-3 py-1 text-xs font-black tracking-wider uppercase font-['Manrope'] ${badgeStyles[exp.badgeType as keyof typeof badgeStyles] || badgeStyles.tertiary}`}>
                                        {exp.period}
                                    </span>
                                    <span className="text-xs text-zinc-400 dark:text-zinc-500 font-['Inter']">{exp.duration}</span>
                                </div>
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm sm:text-base leading-relaxed font-['Inter']">
                                {exp.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                <div>
                                    <h4 className="font-black mb-3 text-zinc-800 dark:text-zinc-200 text-sm uppercase tracking-wider font-['Manrope'] flex items-center gap-2">
                                        <span className="w-3 h-0.5 bg-[#b61722]"></span>
                                        {t.experience.responsibilities}
                                    </h4>
                                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 font-['Inter']">
                                        {exp.functions.map((func, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <FaCheck aria-hidden="true" className="text-[#b61722] mt-1 flex-shrink-0 text-xs" />
                                                <span>{func}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.achievements && exp.achievements.length > 0 && (
                                        <div className="mt-5">
                                            <h4 className="font-black mb-3 text-zinc-800 dark:text-zinc-200 text-sm uppercase tracking-wider font-['Manrope'] flex items-center gap-2">
                                                <span className="w-3 h-0.5 bg-orange-500"></span>
                                                {t.experience.achievements}
                                            </h4>
                                            <ul className="space-y-2">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-orange-600 dark:text-orange-400 font-['Inter']">
                                                        <span aria-hidden="true" className="text-orange-500 flex-shrink-0">★</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h4 className="font-black mb-3 text-zinc-800 dark:text-zinc-200 text-sm uppercase tracking-wider font-['Manrope'] mt-4 md:mt-0 flex items-center gap-2">
                                        <span className="w-3 h-0.5 bg-zinc-400"></span>
                                        {t.experience.stack}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1.5 hover:border-[#b61722]/50 hover:bg-white dark:hover:bg-zinc-700 transition-all duration-200 cursor-default"
                                            >
                                                <tech.icon aria-hidden="true" className={`${tech.color} mr-1.5 text-base`} />
                                                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 font-['Inter']">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                                </GlassCard>
                            </Reveal>
                        ))}
                    </RevealGroup>
                </div>
            </div>
        </section>
    );
};
