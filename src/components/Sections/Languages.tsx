import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaLanguage } from 'react-icons/fa';

export const Languages: React.FC = () => {
    const languages = [
        {
            name: 'Español',
            level: 'Nativo',
            percentage: 100,
            details: ['Lengua materna', 'Comunicación profesional']
        },
        {
            name: 'Inglés',
            level: 'A2-B1 Intermedio',
            percentage: 55,
            details: ['Lectura técnica avanzada', 'Comprensión técnica avanzada', 'Escritura intermedia', 'Conversación en desarrollo']
        }
    ];

    return (
        <section id="idiomas" className="enhanced-section section-tech-bg py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Idiomas"
                    subtitle="Competencias Lingüísticas"
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {languages.map((lang, index) => (
                        <div key={index} className="glass-card tech-hover-effect p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <FaLanguage className="text-blue-600 text-2xl mr-3" />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{lang.name}</h3>
                                        <span className={`text-sm font-semibold ${lang.percentage === 100 ? 'text-green-600' : 'text-blue-600'}`}>
                                            {lang.level}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-blue-600">
                                    {lang.percentage}%
                                </div>
                            </div>

                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
                                <div
                                    className={`h-3 rounded-full transition-all duration-500 ${lang.percentage === 100
                                            ? 'bg-gradient-to-r from-green-500 to-green-600'
                                            : 'bg-gradient-to-r from-blue-500 to-purple-600'
                                        }`}
                                    style={{ width: `${lang.percentage}%` }}
                                />
                            </div>

                            <ul className="space-y-1">
                                {lang.details.map((detail, i) => (
                                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
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
