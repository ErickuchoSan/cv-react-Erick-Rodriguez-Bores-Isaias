import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { NAV_LINKS_KEYS } from '../../data/navigation';

export const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-gray-200/20 dark:shadow-gray-900/30 border-b border-gray-200/50 dark:border-gray-700/50'
                    : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <div className="flex items-center min-w-0 mr-2 sm:mr-4">
                            <a href="#inicio" className="group flex items-center">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
                                    ER
                                </div>
                                <div className="ml-3 hidden sm:block">
                                    <h1 className="text-sm md:text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        Erick Rodríguez
                                    </h1>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Full Stack Developer
                                    </p>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-1">
                                {NAV_LINKS_KEYS.map((link, index) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="nav-link relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {t.nav[link.key]}
                                        <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Controls */}
                        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                            {/* Language Toggle */}
                            <div className="flex items-center bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-1 border border-gray-200/50 dark:border-gray-700/50">
                                <button
                                    onClick={() => setLanguage('es')}
                                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${language === 'es'
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/25'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                                >
                                    ES
                                </button>
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${language === 'en'
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/25'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                                >
                                    EN
                                </button>
                            </div>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2.5 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:shadow-lg"
                                aria-label="Toggle theme"
                                aria-pressed={theme === 'dark'}
                            >
                                {theme === 'light' ? (
                                    <FaMoon aria-hidden="true" className="text-lg text-purple-600" />
                                ) : (
                                    <FaSun aria-hidden="true" className="text-lg text-yellow-400" />
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="md:hidden p-2.5 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105"
                                aria-label="Toggle menu"
                                aria-expanded={isMenuOpen}
                            >
                                <div className="relative w-5 h-5 flex items-center justify-center">
                                    <FaBars
                                        aria-hidden="true"
                                        className={`text-lg absolute transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}
                                    />
                                    <FaTimes
                                        aria-hidden="true"
                                        className={`text-lg absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-900 z-50 md:hidden transform transition-all duration-500 ease-out shadow-2xl ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
                            ER
                        </div>
                        <div className="ml-3">
                            <h2 className="text-sm font-bold text-gray-900 dark:text-white">Erick Rodríguez</h2>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Close menu"
                    >
                        <FaTimes aria-hidden="true" />
                    </button>
                </div>

                {/* Menu Links */}
                <div className="p-4 space-y-2">
                    {NAV_LINKS_KEYS.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 transform ${
                                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isMenuOpen ? `${index * 75 + 150}ms` : '0ms'
                            }}
                        >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            {t.nav[link.key]}
                        </a>
                    ))}
                </div>

                {/* Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                        © 2024 Erick Rodríguez
                    </p>
                </div>
            </div>
        </>
    );
};
