import React from 'react';
import { FaEnvelope, FaCode, FaDownload, FaChevronDown } from 'react-icons/fa';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../PDF/CVDocument';

export const Hero: React.FC = () => {
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center hero-tech-bg text-white relative overflow-hidden">
            {/* ... existing background effects ... */}
            <div className="circuit-nodes opacity-30">
                {[...Array(8)].map((_, i) => (
                    <div key={`node-${i}`} className="circuit-node" />
                ))}
            </div>

            <div className="tech-particles opacity-30">
                {[...Array(8)].map((_, i) => (
                    <div key={`particle-${i}`} className="tech-particle" />
                ))}
            </div>

            <div className="tech-waves opacity-20">
                {[...Array(3)].map((_, i) => (
                    <div key={`wave-${i}`} className="tech-wave" />
                ))}
            </div>

            <div className="scan-line opacity-10"></div>

            <div className="hero-overlay absolute inset-0 bg-black/20 z-0"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <div className="mb-8 relative inline-block">
                    <div className="profile-glow"></div>
                    <img
                        src="/assets/images/profile.jpg"
                        alt="Erick Rodríguez Bores Isaías"
                        className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/30 shadow-2xl relative z-10 hover:scale-110 transition-all duration-500 hover:border-white/60 object-cover"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                    Erick Rodríguez Bores Isaías
                </h1>

                <h2 className="text-2xl md:text-3xl font-light mb-8 opacity-90 animate-fade-in-delay">
                    Desarrollador Full Stack Senior | +5 años de experiencia
                </h2>

                <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
                    Especializado en arquitecturas empresariales escalables, optimización de sistemas legacy
                    y migración de tecnologías. Experto en .NET/C#, React y SQL Server.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
                    <a href="#contacto" className="btn-tech-primary">
                        <FaEnvelope className="mr-2" />
                        Contáctame
                    </a>
                    <a href="#proyectos" className="btn-tech-secondary">
                        <FaCode className="mr-2" />
                        Ver Proyectos
                    </a>

                    <PDFDownloadLink
                        document={<CVDocument />}
                        fileName="CV_Erick_Rodriguez_Bores_Isaias.pdf"
                        className="btn-tech-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
                    >
                        {({ loading }) => (
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <FaDownload style={{ marginRight: '0.5rem' }} />
                                {loading ? 'Generando...' : 'Descargar CV'}
                            </span>
                        )}
                    </PDFDownloadLink>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <FaChevronDown className="text-2xl" />
            </div>
        </section>
    );
};
