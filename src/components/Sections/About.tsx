import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaRobot } from 'react-icons/fa';

export const About: React.FC = () => {
    return (
        <section id="sobre-mi" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title="Sobre Mí"
                    subtitle="Transformando ideas en soluciones empresariales de alto impacto"
                />

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
                            Especialista en Arquitecturas Empresariales
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                            Con <strong className="text-blue-600">+5 años de experiencia</strong> en desarrollo de software empresarial, diseño e implemento
                            arquitecturas escalables que resuelven problemas reales de negocio. He logrado <strong>reducir tiempos de consulta en un 40%</strong>,
                            automatizar procesos críticos y migrar sistemas legacy a tecnologías modernas con <strong>.NET/C#</strong>, <strong>React</strong> y <strong>SQL Server</strong>.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                            Actualmente como <strong className="text-blue-600">Programador de Auditoría Senior</strong> en Grupo Salinas,
                            lidero el desarrollo de sistemas críticos de auditoría interna que dan servicio a todas las empresas del grupo,
                            utilizando .NET Core, React, Next.js y arquitecturas de microservicios. Me distingo por mi capacidad autodidacta,
                            pensamiento orientado a resultados y uso estratégico de herramientas de IA para maximizar productividad.
                        </p>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {[
                                { value: '5+', label: 'Años de Experiencia' },
                                { value: '20+', label: 'Tecnologías Dominadas' },
                                { value: '15+', label: 'Proyectos Completados' },
                                { value: '40%', label: 'Optimización SQL' }
                            ].map((stat, index) => (
                                <div key={index} className="stat-item glass-card tech-hover-effect p-3 sm:p-4">
                                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.value}</div>
                                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-5">
                        <div className="info-card glass-card tech-hover-effect p-4 sm:p-6">
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

                        <div className="info-card glass-card tech-hover-effect p-4 sm:p-6">
                            <div className="flex items-center mb-4">
                                <FaBriefcase className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Disponibilidad</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <strong>Tiempo completo</strong> • Híbrido/Remoto<br />
                                <span className="text-sm text-blue-600">Abierto a oportunidades internacionales</span>
                            </p>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-4 sm:p-6">
                            <div className="flex items-center mb-4">
                                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Ubicación</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Cuajimalpa de Morelos, CDMX, México
                            </p>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-4 sm:p-6">
                            <div className="flex items-center mb-4">
                                <FaRobot className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Intereses Profesionales</h4>
                            </div>
                            <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                                <li>• Inteligencia Artificial aplicada al desarrollo</li>
                                <li>• Arquitecturas cloud-native y microservicios</li>
                                <li>• Productos SaaS escalables de alto rendimiento</li>
                                <li>• Oportunidades remotas e internacionales</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
