import React from 'react';
import { FaEnvelope, FaCode, FaDownload, FaChevronDown } from 'react-icons/fa';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../PDF/CVDocument';

export const Hero: React.FC = () => {
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0 bg-transparent">
            {/* Soft Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-200/30 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-cyan-200/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-indigo-200/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
                <div className="mb-10 relative inline-block group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <img
                        src="/assets/images/profile.jpg"
                        alt="Erick Rodríguez Bores Isaías"
                        className="w-40 h-40 rounded-full mx-auto relative z-10 object-cover border-4 border-white shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white z-20" title="Available for work"></div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
                    Erick Rodríguez <br className="hidden md:block" />
                    <span className="text-gradient">Bores Isaías</span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-medium mb-8 text-slate-600 dark:text-slate-300">
                    Desarrollador Full Stack Senior
                </h2>

                <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-slate-500 dark:text-slate-400">
                    Impulsando la innovación con arquitecturas escalables y experiencias de usuario modernas.
                    Especialista en <span className="font-semibold text-blue-600 dark:text-blue-400">.NET/C#</span>, <span className="font-semibold text-cyan-600 dark:text-cyan-400">React</span> y Soluciones Cloud.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#contacto" className="btn-modern-primary">
                        <FaEnvelope className="mr-2" />
                        Contáctame
                    </a>
                    <a href="#proyectos" className="btn-modern-secondary">
                        <FaCode className="mr-2" />
                        Ver Proyectos
                    </a>

                    <PDFDownloadLink
                        document={<CVDocument />}
                        fileName="CV_Erick_Rodriguez_Bores_Isaias.pdf"
                        className="text-slate-500 hover:text-blue-600 font-medium transition-colors px-4 py-2 flex items-center gap-2"
                    >
                        {({ loading }) => (
                            <>
                                <FaDownload />
                                {loading ? 'Generando...' : 'Descargar CV'}
                            </>
                        )}
                    </PDFDownloadLink>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
                <FaChevronDown className="text-2xl" />
            </div>
        </section>
    );
};
