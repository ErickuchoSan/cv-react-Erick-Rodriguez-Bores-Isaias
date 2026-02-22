import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaFlagUsa } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const Languages: React.FC = () => {
    const { t } = useLanguage();

    const LANGUAGES_DATA = [
        {
            percentage: 60,
            icon: FaFlagUsa,
            color: 'bg-blue-500'
        }
    ];

    const languages = LANGUAGES_DATA.map((item, index) => {
        const trans = t.languages.items[index];
        return {
            ...item,
            name: trans.name,
            level: trans.level,
            details: trans.details
        };
    });

    return (
        <section className="enhanced-section section-tech-bg py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.languages.title}
                    subtitle={t.languages.subtitle}
                />

                <div className="grid md:grid-cols-2 gap-8">
                    {languages.map((lang, index) => (
                        <div key={index} className="glass-card tech-hover-effect p-6 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full z-0"></div>

                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="flex items-center">
                                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg mr-4 text-blue-600">
                                        <lang.icon className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{lang.name}</h3>
                                        <p className="text-blue-600 font-medium">{lang.level}</p>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-gray-300 dark:text-gray-600">0{index + 1}</div>
                            </div>

                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-6 relative z-10">
                                <div
                                    className={`h-3 rounded-full ${lang.color} transition-all duration-1000 ease-out`}
                                    style={{ width: `${lang.percentage}%` }}
                                ></div>
                            </div>

                            <ul className="space-y-2 relative z-10">
                                {lang.details.map((detail, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                        <span className="text-blue-500 mr-2">•</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
