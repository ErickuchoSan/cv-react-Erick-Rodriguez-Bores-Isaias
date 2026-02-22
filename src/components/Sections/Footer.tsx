import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
    const { t } = useLanguage();

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-12 pb-8 transition-colors duration-300 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-30">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-4 gap-8 mb-8 sm:mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            {t.footer.brand}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-sm text-sm sm:text-base leading-relaxed">
                            {t.footer.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-base sm:text-lg">{t.footer.navigation}</h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li><a href="#inicio" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.home}</a></li>
                            <li><a href="#sobre-mi" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.about}</a></li>
                            <li><a href="#experiencia" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.experience}</a></li>
                            <li><a href="#proyectos" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.projects}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-base sm:text-lg">{t.footer.contact}</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/erick-rodr%C3%ADguez-bores-isa%C3%ADas-0a0117149/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 text-blue-600">
                                <FaLinkedin className="text-lg sm:text-xl" />
                            </a>
                            <a href="https://github.com/ErickuchoSan" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 text-gray-800 dark:text-gray-200">
                                <FaGithub className="text-lg sm:text-xl" />
                            </a>
                            <a href="mailto:e.bores.i@outlook.com" className="bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 text-red-500">
                                <FaEnvelope className="text-lg sm:text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center bg-transparent">
                    <p className="text-center md:text-left text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {currentYear} {t.footer.brand}. {t.footer.rights}
                    </p>
                    <p className="flex items-center text-sm text-gray-500">
                        {t.footer.madeWith} <FaHeart className="text-red-500 mx-1 animate-pulse" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};
