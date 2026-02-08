import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaCode } from 'react-icons/fa';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Brand */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                            Erick Rodríguez
                        </h3>
                        <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                            Desarrollador Full Stack Senior especializado en arquitecturas empresariales escalables con .NET/C# y React. +5 años de experiencia.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://linkedin.com/in/erickrodriguezbores"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-xl"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/erickrodriguez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="mailto:erickisaiasbores@gmail.com"
                                className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-xl"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Inicio', href: '#inicio' },
                                { name: 'Sobre Mí', href: '#sobre-mi' },
                                { name: 'Experiencia', href: '#experiencia' },
                                { name: 'Habilidades', href: '#habilidades' },
                                { name: 'Proyectos', href: '#proyectos' },
                                { name: 'Contacto', href: '#contacto' },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contacto</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-center text-gray-400 text-sm sm:text-base">
                                <FaEnvelope className="mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                                <a href="mailto:erickisaiasbores@gmail.com" className="hover:text-white transition-colors break-all">
                                    erickisaiasbores@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center text-gray-400 text-sm sm:text-base">
                                <FaPhone className="mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                                <span>55 7110 4581</span>
                            </li>
                            <li className="flex items-center text-gray-400 text-sm sm:text-base">
                                <FaMapMarkerAlt className="mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                                <span>Cuajimalpa de Morelos, CDMX, México</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-6 sm:pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                        <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
                            © {currentYear} Erick Rodríguez Bores Isaías. Todos los derechos reservados.
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm flex items-center">
                            Hecho con <FaHeart className="text-red-500 mx-1" /> y <FaCode className="text-blue-500 mx-1" /> usando React + TypeScript
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
