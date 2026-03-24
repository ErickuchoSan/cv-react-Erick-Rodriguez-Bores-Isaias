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
    const [activeSection, setActiveSection] = useState('inicio');

    // Handle scroll effect and active section detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Detect active section
            const sections = NAV_LINKS_KEYS.map(link => link.href.replace('#', ''));
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
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

    const isLinkActive = (href: string) => {
        return activeSection === href.replace('#', '');
    };

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
                                {NAV_LINKS_KEYS.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className={`nav-link relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                                            isLinkActive(link.href)
                                                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                                                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                                        }`}
                                    >
                                        {t.nav[link.key]}
                                        <span className={`absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 transform -translate-x-1/2 ${
                                            isLinkActive(link.href) ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                                        }`}></span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Desktop Right Controls */}
                        <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
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
                        </div>

                        {/* Mobile Menu Button Only */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="p-2.5 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105"
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
                className={`fixed top-0 right-0 h-full w-[300px] bg-white dark:bg-gray-900 z-50 md:hidden transform transition-all duration-500 ease-out shadow-2xl ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
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
                <div className="p-4 space-y-1">
                    {NAV_LINKS_KEYS.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 transform ${
                                isLinkActive(link.href)
                                    ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                            } ${
                                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isMenuOpen ? `${index * 75 + 100}ms` : '0ms'
                            }}
                        >
                            <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                                isLinkActive(link.href)
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                                    : 'bg-gray-300 dark:bg-gray-600'
                            }`}></span>
                            {t.nav[link.key]}
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="mx-4 my-2 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

                {/* Language & Theme Controls in Mobile Menu */}
                <div
                    className={`p-4 space-y-4 transition-all duration-300 ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
                >
                    {/* Language Toggle */}
                    <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-1">
                            {language === 'es' ? 'Idioma' : 'Language'}
                        </p>
                        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                            <button
                                onClick={() => setLanguage('es')}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                                    language === 'es'
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                            >
                                <span className="text-base">🇲🇽</span>
                                <span>Español</span>
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                                    language === 'en'
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                            >
                                <span className="text-base">🇺🇸</span>
                                <span>English</span>
                            </button>
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-1">
                            {language === 'es' ? 'Tema' : 'Theme'}
                        </p>
                        <button
                            onClick={toggleTheme}
                            className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 group"
                        >
                            <div className="flex items-center gap-3">
                                {theme === 'light' ? (
                                    <>
                                        <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                                            <FaMoon aria-hidden="true" className="text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {language === 'es' ? 'Modo Oscuro' : 'Dark Mode'}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
                                            <FaSun aria-hidden="true" className="text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {language === 'es' ? 'Modo Claro' : 'Light Mode'}
                                        </span>
                                    </>
                                )}
                            </div>
                            <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                                theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'
                            }`}>
                                <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                                    theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                                }`}></div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                        © 2024 Erick Rodríguez
                    </p>
                </div>
            </div>
        </>
    );
};
