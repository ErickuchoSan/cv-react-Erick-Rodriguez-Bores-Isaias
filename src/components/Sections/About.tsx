import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaRobot } from 'react-icons/fa';

export const About: React.FC = () => {
    return (
        <section id="sobre-mi" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Sobre Mí"
                    subtitle="Desarrollador Full Stack Senior | +5 años de experiencia"
                />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                            Especialista en Arquitecturas Empresariales
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Con <strong className="text-blue-600">+5 años de experiencia</strong> en desarrollo de software, me especializo en
                            arquitecturas empresariales escalables, optimización de sistemas legacy y migración de tecnologías.
                            Experto en <strong>.NET/C#</strong> y <strong>React</strong>, con fuerte experiencia en SQL Server.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Actualmente trabajo como <strong className="text-blue-600">Programador de Auditoría Senior</strong> en Grupo Salinas,
                            donde desarrollo sistemas críticos de auditoría interna utilizando .NET Core, React, Next.js y arquitecturas
                            de microservicios. Destaco por mi capacidad autodidacta y uso estratégico de herramientas de IA.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '5+', label: 'Años de Experiencia' },
                                { value: '20+', label: 'Tecnologías Dominadas' },
                                { value: '15+', label: 'Proyectos Completados' },
                                { value: '100%', label: 'Compromiso' }
                            ].map((stat, index) => (
                                <div key={index} className="stat-item glass-card tech-hover-effect p-4">
                                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaGraduationCap className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Educación</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">Ing. Sistemas Computacionales</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">UTEL Universidad • 2019 - 2023</p>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">Maestría en Inteligencia Artificial</p>
                                    <p className="text-blue-600 text-sm font-medium">En curso • 2025 - Actual</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaBriefcase className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Disponibilidad</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <strong>Tiempo completo</strong> • Híbrido/Remoto<br />
                                <span className="text-sm text-blue-600">Abierto a oportunidades internacionales</span>
                            </p>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Ubicación</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Cuajimalpa, CDMX, México
                            </p>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaRobot className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Intereses Profesionales</h4>
                            </div>
                            <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                                <li>• Inteligencia Artificial aplicada</li>
                                <li>• Arquitecturas cloud-native</li>
                                <li>• Desarrollo de productos escalables</li>
                                <li>• Posiciones remotas internacionales</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
