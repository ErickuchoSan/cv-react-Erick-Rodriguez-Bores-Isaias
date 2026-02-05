import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
];

export const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 z-50 border-b border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center min-w-0 mr-4">
                        <h1 className="text-base sm:text-xl font-bold text-blue-600 dark:text-blue-400 truncate">
                            Erick Rodríguez Bores Isaías
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 flex-shrink-0">
                        <button
                            onClick={toggleTheme}
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-gray-600 dark:text-gray-300"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
