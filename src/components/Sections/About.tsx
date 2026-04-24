import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaRobot } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { SectionParticles } from '../UI/SectionParticles';
import { GlassCard } from '../UI/GlassCard';
import { Reveal, RevealGroup } from '../UI/Reveal';

export const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="sobre-mi" className="section-tech-bg py-16 sm:py-20 md:py-24 bg-[#f9f9f9] dark:bg-zinc-950 transition-colors duration-300 relative">
            <SectionParticles />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <Reveal y={40}>
                    <SectionTitle
                        title={t.about.title}
                        subtitle={t.about.subtitle}
                    />
                </Reveal>

                <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
                    <div>
                        <Reveal y={40} delay={80}>
                            <h3 className="text-xl sm:text-2xl font-black mb-5 text-zinc-900 dark:text-zinc-100 font-['Manrope'] uppercase tracking-tight">
                                {t.about.roleTitle}
                            </h3>
                            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed font-['Inter']" dangerouslySetInnerHTML={{ __html: t.about.description1 }}></p>
                            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-['Inter']" dangerouslySetInnerHTML={{ __html: t.about.description2 }}></p>
                        </Reveal>

                        <div className="grid grid-cols-2 gap-3">
                            <RevealGroup stagger={80} baseDelay={160}>
                                {[
                                    { value: '3+', label: t.about.stats.experience },
                                    { value: '20+', label: t.about.stats.technologies },
                                    { value: '15+', label: t.about.stats.projects },
                                    { value: '40%', label: t.about.stats.optimization }
                                ].map((stat, index) => (
                                    <Reveal key={index} y={20}>
                                        <GlassCard className="p-4 border-l-2 border-[#b61722]">
                                            <div className="text-2xl sm:text-3xl font-black text-[#b61722] font-['Manrope']">{stat.value}</div>
                                            <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-['Inter']">{stat.label}</div>
                                        </GlassCard>
                                    </Reveal>
                                ))}
                            </RevealGroup>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <GlassCard className="p-5 sm:p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-[#b61722] flex items-center justify-center mr-3 flex-shrink-0">
                                    <FaGraduationCap aria-hidden="true" className="text-white text-sm" />
                                </div>
                                <h4 className="text-base font-black text-zinc-900 dark:text-zinc-100 font-['Manrope'] uppercase tracking-tight">{t.about.education.title}</h4>
                            </div>
                            <div className="space-y-3 pl-11">
                                <div>
                                    <p className="font-bold text-zinc-800 dark:text-zinc-200 text-sm font-['Inter']">{t.about.education.degree1}</p>
                                    <p className="text-zinc-500 dark:text-zinc-500 text-xs mt-0.5 font-['Inter']">{t.about.education.school1}</p>
                                </div>
                                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                                    <p className="font-bold text-zinc-800 dark:text-zinc-200 text-sm font-['Inter']">{t.about.education.degree2}</p>
                                    <p className="text-zinc-500 dark:text-zinc-500 text-xs mt-0.5 font-['Inter']">{t.about.education.school2}</p>
                                    <p className="text-[#b61722] text-xs font-bold mt-1 font-['Inter']">{t.about.education.status2}</p>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-5 sm:p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-orange-500 flex items-center justify-center mr-3 flex-shrink-0">
                                    <FaBriefcase aria-hidden="true" className="text-white text-sm" />
                                </div>
                                <h4 className="text-base font-black text-zinc-900 dark:text-zinc-100 font-['Manrope'] uppercase tracking-tight">{t.about.availability.title}</h4>
                            </div>
                            <div className="pl-11">
                                <p className="text-zinc-700 dark:text-zinc-300 text-sm font-['Inter']">
                                    <strong>{t.about.availability.status.split(' • ')[0]}</strong>
                                    {' • '}
                                    {t.about.availability.status.split(' • ')[1]}
                                </p>
                                <p className="text-xs text-[#b61722] font-semibold mt-1 font-['Inter']">{t.about.availability.note}</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-5 sm:p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-zinc-800 dark:bg-zinc-700 flex items-center justify-center mr-3 flex-shrink-0">
                                    <FaMapMarkerAlt aria-hidden="true" className="text-white text-sm" />
                                </div>
                                <h4 className="text-base font-black text-zinc-900 dark:text-zinc-100 font-['Manrope'] uppercase tracking-tight">{t.about.location.title}</h4>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm pl-11 font-['Inter']">{t.about.location.city}</p>
                        </GlassCard>

                        <GlassCard className="p-5 sm:p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-[#b61722] flex items-center justify-center mr-3 flex-shrink-0">
                                    <FaRobot aria-hidden="true" className="text-white text-sm" />
                                </div>
                                <h4 className="text-base font-black text-zinc-900 dark:text-zinc-100 font-['Manrope'] uppercase tracking-tight">{t.about.interests.title}</h4>
                            </div>
                            <ul className="text-zinc-600 dark:text-zinc-400 space-y-1.5 text-sm pl-11 font-['Inter']">
                                {t.about.interests.list.map((interest, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="w-1 h-1 bg-[#b61722] rounded-full mt-2 flex-shrink-0"></span>
                                        {interest}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
};
