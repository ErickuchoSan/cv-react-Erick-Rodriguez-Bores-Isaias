import React, { useState } from 'react';
// import { SectionTitle } from '../UI/SectionTitle'; // Removed unused import
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaSpinner } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../PDF/CVDocument';
import { CVDocumentEN } from '../PDF/CVDocumentEN'; // Import English version
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO } from '../../data/contact';

export const Hero: React.FC = () => {
    const { t } = useLanguage(); // Removed language from destructuring as it is no longer used for download logic
    const [showDownloadOptions, setShowDownloadOptions] = useState(false);

    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-16">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
                        {t.hero.role}
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        {t.hero.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            {t.hero.subtitle}
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up delay-200">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
                        <a href="#contacto" className="btn-modern-primary flex items-center justify-center group" aria-label={t.hero.contactBtn}>
                            <span>{t.hero.contactBtn}</span>
                            <FaArrowRight aria-hidden="true" className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a href="#proyectos" aria-label={t.hero.projectsBtn} className="px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                            {t.hero.projectsBtn}
                        </a>

                        {/* PDF Download Dropdown */}
                        <div className="relative inline-flex">
                            <button
                                onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                                aria-label="Opciones para descargar Currículum"
                                aria-expanded={showDownloadOptions}
                                className="px-8 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center justify-center shadow-lg"
                            >
                                <span className="mr-2">{t.hero.downloadBtn}</span>
                                <FaFileDownload aria-hidden="true" />
                            </button>

                            {/* Dropdown Menu */}
                            {showDownloadOptions && (
                                <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-20 animate-fade-in-up">
                                    <PDFDownloadLink
                                        document={<CVDocument />}
                                        fileName="CV_Erick_Rodriguez_ES.pdf"
                                        className="block w-full px-4 py-3 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        {({ loading }) => (
                                            <span className="flex items-center">
                                                {loading && <FaSpinner aria-hidden="true" className="animate-spin mr-2 text-blue-500" />}
                                                {loading ? 'Español (Generando...)' : 'Español'}
                                            </span>
                                        )}
                                    </PDFDownloadLink>
                                    <PDFDownloadLink
                                        document={<CVDocumentEN />}
                                        fileName="CV_Erick_Rodriguez_EN.pdf"
                                        className="block w-full px-4 py-3 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t border-gray-100 dark:border-gray-700"
                                    >
                                        {({ loading }) => (
                                            <span className="flex items-center">
                                                {loading && <FaSpinner aria-hidden="true" className="animate-spin mr-2 text-blue-500" />}
                                                {loading ? 'English (Generating...)' : 'English'}
                                            </span>
                                        )}
                                    </PDFDownloadLink>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-12 flex items-center justify-center md:justify-start space-x-6 animate-fade-in-up delay-400">
                        <a href={CONTACT_INFO.social.github} aria-label="Perfil de GitHub" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110">
                            <FaGithub aria-hidden="true" className="text-2xl" />
                        </a>
                        <a href={CONTACT_INFO.social.linkedin} aria-label="Perfil de LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                            <FaLinkedin aria-hidden="true" className="text-2xl" />
                        </a>
                        <a href={`mailto:${CONTACT_INFO.email}`} aria-label="Enviar correo electrónico" className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors transform hover:scale-110">
                            <FaEnvelope aria-hidden="true" className="text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Hero Image/Visual */}
                <div className="relative hidden md:block animate-fade-in-left delay-500">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                        <div className="relative z-10 glass-card p-2 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
                            <img
                                src="/assets/images/profile.jpg"
                                alt="Erick Rodríguez"
                                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Tech Badges */}
                        <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl animate-float">
                            <span aria-hidden="true" className="text-2xl">🚀</span>
                        </div>
                        <div className="absolute top-1/2 -right-12 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl animate-float delay-700">
                            <span aria-hidden="true" className="text-2xl font-bold text-blue-600">.NET</span>
                        </div>
                        <div className="absolute bottom-10 -left-8 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl animate-float delay-1000">
                            <span aria-hidden="true" className="text-2xl font-bold text-cyan-500">React</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
