import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';


import { useLanguage } from '../../context/LanguageContext';
import { NAV_LINKS_KEYS } from '../../data/navigation';

export const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);



    return (
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 z-50 border-b border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center min-w-0 mr-2 sm:mr-4">
                        <h1 className="text-sm sm:text-base md:text-xl font-bold text-blue-600 dark:text-blue-400 truncate">
                            <span className="hidden sm:inline">Erick Rodríguez Bores Isaías</span>
                            <span className="sm:hidden">Erick Rodríguez B.</span>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {NAV_LINKS_KEYS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                                >
                                    {t.nav[link.key]}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 flex-shrink-0">
                        {/* Language Toggle */}
                        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                            <button
                                onClick={() => setLanguage('es')}
                                className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${language === 'es'
                                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                    }`}
                            >
                                ES
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${language === 'en'
                                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                    }`}
                            >
                                EN
                            </button>
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-gray-600 dark:text-gray-300"
                            aria-label="Toggle theme"
                            aria-pressed={theme === 'dark'}
                        >
                            {theme === 'light' ? <FaMoon aria-hidden="true" className="text-lg" /> : <FaSun aria-hidden="true" className="text-lg" />}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <FaTimes aria-hidden="true" className="text-lg" /> : <FaBars aria-hidden="true" className="text-lg" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-3 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                        {NAV_LINKS_KEYS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                            >
                                {t.nav[link.key]}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
