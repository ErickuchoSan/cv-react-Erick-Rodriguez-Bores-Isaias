import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaCode } from 'react-icons/fa';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Erick Rodríguez
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Desarrollador Full Stack Senior especializado en arquitecturas empresariales escalables con .NET y React.
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
                        <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-400">
                                <FaEnvelope className="mr-3 text-blue-500" />
                                <a href="mailto:erickisaiasbores@gmail.com" className="hover:text-white transition-colors">
                                    erickisaiasbores@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaPhone className="mr-3 text-blue-500" />
                                <span>55 7110 4581</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaMapMarkerAlt className="mr-3 text-blue-500" />
                                <span>Cuajimalpa, CDMX, México</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {currentYear} Erick Rodríguez Bores Isaías. Todos los derechos reservados.
                        </p>
                        <p className="text-gray-500 text-sm flex items-center">
                            Hecho con <FaHeart className="text-red-500 mx-1" /> y <FaCode className="text-blue-500 mx-1" /> usando React + TypeScript
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
