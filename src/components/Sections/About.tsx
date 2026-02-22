import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaRobot } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { SectionParticles } from '../UI/SectionParticles';
import { GlassCard } from '../UI/GlassCard';

export const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="sobre-mi" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <SectionParticles />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.about.title}
                    subtitle={t.about.subtitle}
                />

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
                            {t.about.roleTitle}
                        </h3>
                        {/* Safe: content comes from local static translations without user input */}
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.description1 }}></p>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.description2 }}></p>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {[
                                { value: '5+', label: t.about.stats.experience },
                                { value: '20+', label: t.about.stats.technologies },
                                { value: '15+', label: t.about.stats.projects },
                                { value: '40%', label: t.about.stats.optimization }
                            ].map((stat, index) => (
                                <GlassCard key={index} className="stat-item p-3 sm:p-4">
                                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.value}</div>
                                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-5">
                        <GlassCard className="info-card p-4 sm:p-6">
                            <div className="flex items-center mb-4">
                                <FaGraduationCap aria-hidden="true" className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t.about.education.title}</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">{t.about.education.degree1}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t.about.education.school1}</p>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">{t.about.education.degree2}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t.about.education.school2}</p>
                                    <p className="text-blue-600 text-sm font-medium">{t.about.education.status2}</p>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard className="info-card p-4 sm:p-6">
                            <div className="flex items-center mb-4">
                                <FaBriefcase aria-hidden="true" className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t.about.availability.title}</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <strong>{t.about.availability.status.split(' • ')[0]}</strong> • {t.about.availability.status.split(' • ')[1]}<br />
                                <span className="text-sm text-blue-600">{t.about.availability.note}</span>
                            </p>
                        </GlassCard>

                        <GlassCard className="info-card p-4 sm:p-6">
                            <div className="flex items-center mb-4">
                                <FaMapMarkerAlt aria-hidden="true" className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t.about.location.title}</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t.about.location.city}
                            </p>
                        </GlassCard>

                        <GlassCard className="info-card p-4 sm:p-6">
                            <div className="flex items-center mb-4">
                                <FaRobot aria-hidden="true" className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t.about.interests.title}</h4>
                            </div>
                            <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                                {t.about.interests.list.map((interest, i) => (
                                    <li key={i}>• {interest}</li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
};
