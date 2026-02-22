import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaCheck } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { SectionParticles } from '../UI/SectionParticles';
import { GlassCard } from '../UI/GlassCard';
import { EXPERIENCE_DATA } from '../../data/experience';



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

    return (
        <section id="experiencia" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <SectionParticles />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.experience.title}
                    subtitle={t.experience.subtitle}
                />

                <div className="space-y-8 sm:space-y-12">
                    {experiencePoints.map((exp, index) => (
                        <GlassCard key={index} className="experience-card p-4 sm:p-6 md:p-8">
                            <div className="experience-header flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
                                <div className="experience-company mb-3 md:mb-0">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">{exp.role}</h3>
                                    <p className="text-blue-600 font-semibold text-base sm:text-lg">{exp.company}</p>
                                </div>
                                <div className="experience-period flex flex-col items-start md:items-end">
                                    <span className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg ${exp.badgeType === 'primary'
                                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700'
                                        : exp.badgeType === 'secondary'
                                            ? 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300'
                                            : 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
                                        }`}>
                                        {exp.period}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-500 mt-1">{exp.duration}</span>
                                </div>
                            </div>

                            <div className="experience-content">
                                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 font-medium text-base sm:text-lg leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                    <div>
                                        <h4 className="font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200 text-base sm:text-lg">{t.experience.responsibilities}</h4>
                                        <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                            {exp.functions.map((func, i) => (
                                                <li key={i} className="flex items-start">
                                                    <FaCheck aria-hidden="true" className="text-green-500 mr-2 mt-1 min-w-[12px] flex-shrink-0" />
                                                    <span>{func}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {exp.achievements && exp.achievements.length > 0 && (
                                            <div className="mt-4 sm:mt-6">
                                                <h4 className="font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200 text-base sm:text-lg">{t.experience.achievements}</h4>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start text-sm sm:text-base text-green-600 dark:text-green-400">
                                                            <span aria-hidden="true" className="text-yellow-500 mr-2 flex-shrink-0">★</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200 text-base sm:text-lg mt-4 md:mt-0">{t.experience.stack}</h4>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {exp.technologies.map((tech, i) => (
                                                <div key={i} className="flex items-center bg-gray-100 dark:bg-gray-700 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                                                    <tech.icon aria-hidden="true" className={`${tech.color} mr-1.5 sm:mr-2 text-base sm:text-lg`} />
                                                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
