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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const sections = NAV_LINKS_KEYS.map(link => link.href.replace('#', ''));
            const scrollPosition = window.scrollY + 100;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const isLinkActive = (href: string) => activeSection === href.replace('#', '');

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl shadow-sm border-b border-zinc-200/50 dark:border-zinc-800/50'
                    : 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl'
            }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">

                        {/* Logo */}
                        <a href="#inicio" className="group flex items-center gap-2 shrink-0">
                            <div className="w-9 h-9 bg-[#b61722] flex items-center justify-center text-white font-black text-sm font-['Manrope']">
                                ER
                            </div>
                            <span className="font-black tracking-tighter text-zinc-900 dark:text-zinc-50 text-lg font-['Manrope'] uppercase hidden sm:block group-hover:text-[#b61722] transition-colors duration-200">
                                .DEV
                            </span>
                        </a>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-0">
                            {NAV_LINKS_KEYS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-3 lg:px-4 py-2 text-xs font-black tracking-[0.06em] lg:tracking-[0.12em] uppercase font-['Manrope'] transition-colors duration-200 ${
                                        isLinkActive(link.href)
                                            ? 'text-[#b61722]'
                                            : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                                    }`}
                                >
                                    {t.nav[link.key]}
                                    {isLinkActive(link.href) && (
                                        <span className="absolute bottom-0 left-3 lg:left-4 right-3 lg:right-4 h-0.5 bg-[#b61722]"></span>
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Desktop Right Controls */}
                        <div className="hidden md:flex items-center gap-2 shrink-0">
                            {/* Language Toggle */}
                            <div className="flex items-center border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                                <button
                                    onClick={() => setLanguage('es')}
                                    className={`px-3 py-1.5 text-xs font-black tracking-wider uppercase font-['Manrope'] transition-all duration-200 ${
                                        language === 'es'
                                            ? 'bg-[#b61722] text-white'
                                            : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                    }`}
                                >
                                    ES
                                </button>
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-3 py-1.5 text-xs font-black tracking-wider uppercase font-['Manrope'] transition-all duration-200 ${
                                        language === 'en'
                                            ? 'bg-[#b61722] text-white'
                                            : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                    }`}
                                >
                                    EN
                                </button>
                            </div>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-[#b61722] hover:text-[#b61722] transition-all duration-200"
                                aria-label="Toggle theme"
                                aria-pressed={theme === 'dark'}
                            >
                                {theme === 'light' ? (
                                    <FaMoon aria-hidden="true" className="text-base" />
                                ) : (
                                    <FaSun aria-hidden="true" className="text-base" />
                                )}
                            </button>

                            {/* Contact CTA */}
                            <a
                                href="#contacto"
                                className="px-5 py-2 bg-[#b61722] text-white text-xs font-black tracking-[0.12em] uppercase font-['Manrope'] hover:bg-[#930013] transition-colors duration-200"
                            >
                                {t.nav.contact}
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300"
                                aria-label="Toggle menu"
                                aria-expanded={isMenuOpen}
                            >
                                <div className="relative w-5 h-5 flex items-center justify-center">
                                    <FaBars className={`text-lg absolute transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`} />
                                    <FaTimes className={`text-lg absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Panel */}
            <div className={`fixed top-0 right-0 h-full w-[300px] bg-white dark:bg-zinc-950 z-50 md:hidden transform transition-all duration-400 ease-out shadow-2xl border-l border-zinc-200 dark:border-zinc-800 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#b61722] flex items-center justify-center text-white font-black text-xs font-['Manrope']">
                            ER
                        </div>
                        <span className="font-black tracking-tighter text-zinc-900 dark:text-zinc-50 font-['Manrope'] uppercase text-sm">.DEV</span>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Links */}
                <div className="p-4 space-y-1">
                    {NAV_LINKS_KEYS.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center px-4 py-3 text-sm font-black tracking-[0.1em] uppercase font-['Manrope'] transition-all duration-200 ${
                                isLinkActive(link.href)
                                    ? 'text-[#b61722] border-l-2 border-[#b61722] pl-3'
                                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border-l-2 border-transparent pl-3'
                            } ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                            style={{ transitionDelay: isMenuOpen ? `${index * 60 + 80}ms` : '0ms' }}
                        >
                            {t.nav[link.key]}
                        </a>
                    ))}
                </div>

                <div className="mx-4 my-2 h-px bg-zinc-200 dark:bg-zinc-800"></div>

                {/* Controls */}
                <div className={`p-4 space-y-4 transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                    style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}>
                    {/* Language */}
                    <div>
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 font-['Manrope']">
                            {language === 'es' ? 'Idioma' : 'Language'}
                        </p>
                        <div className="flex border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                            <button onClick={() => setLanguage('es')}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-black uppercase font-['Manrope'] transition-all duration-200 ${language === 'es' ? 'bg-[#b61722] text-white' : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}>
                                <span>🇲🇽</span><span>ES</span>
                            </button>
                            <button onClick={() => setLanguage('en')}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-black uppercase font-['Manrope'] transition-all duration-200 border-l border-zinc-200 dark:border-zinc-700 ${language === 'en' ? 'bg-[#b61722] text-white' : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}>
                                <span>🇺🇸</span><span>EN</span>
                            </button>
                        </div>
                    </div>

                    {/* Theme */}
                    <div>
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 font-['Manrope']">
                            {language === 'es' ? 'Tema' : 'Theme'}
                        </p>
                        <button onClick={toggleTheme}
                            className="w-full flex items-center justify-between px-4 py-3 border border-zinc-200 dark:border-zinc-700 hover:border-[#b61722] transition-colors duration-200">
                            <div className="flex items-center gap-3">
                                {theme === 'light' ? (
                                    <><FaMoon className="text-zinc-600" /><span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{language === 'es' ? 'Modo Oscuro' : 'Dark Mode'}</span></>
                                ) : (
                                    <><FaSun className="text-yellow-500" /><span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{language === 'es' ? 'Modo Claro' : 'Light Mode'}</span></>
                                )}
                            </div>
                            <div className={`w-10 h-5 p-0.5 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#b61722]' : 'bg-zinc-300'}`}>
                                <div className={`w-4 h-4 bg-white shadow transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`}></div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-200 dark:border-zinc-800">
                    <p className="text-xs text-center text-zinc-400 font-['Manrope'] uppercase tracking-widest">
                        © 2024 Erick Rodríguez
                    </p>
                </div>
            </div>
        </>
    );
};
