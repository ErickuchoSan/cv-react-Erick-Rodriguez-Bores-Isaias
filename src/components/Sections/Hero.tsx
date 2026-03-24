import React, { useState } from 'react';
// import { SectionTitle } from '../UI/SectionTitle'; // Removed unused import
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaSpinner } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../PDF/CVDocument';
import { CVDocumentEN } from '../PDF/CVDocumentEN';
import { CVDocumentATS_ES } from '../PDF/CVDocumentATS_ES';
import { CVDocumentATS_EN } from '../PDF/CVDocumentATS_EN';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO } from '../../data/contact';

export const Hero: React.FC = () => {
    const { t } = useLanguage(); // Removed language from destructuring as it is no longer used for download logic
    const [showDownloadOptions, setShowDownloadOptions] = useState(false);

    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center relative bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-16 overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/30 dark:bg-blue-500/20 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/30 dark:bg-purple-500/20 rounded-full blur-[100px] animate-float delay-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-6 animate-bounce-in opacity-0 border border-blue-200 dark:border-blue-800 shadow-sm">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            {t.hero.role}
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up opacity-0 delay-100">
                        {t.hero.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-[length:200%_auto] animate-gradient-x">
                            {t.hero.subtitle}
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up opacity-0 delay-200">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up opacity-0 delay-300">
                        <a href="#contacto" className="btn-glow relative px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center justify-center group overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5" aria-label={t.hero.contactBtn}>
                            <span className="relative z-10">{t.hero.contactBtn}</span>
                            <FaArrowRight aria-hidden="true" className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a href="#proyectos" aria-label={t.hero.projectsBtn} className="px-8 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-lg">
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
                                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-20 animate-fade-in-up" style={{ minWidth: '220px' }}>
                                    {/* Diseño Visual */}
                                    <div className="px-3 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Diseño Visual</span>
                                    </div>
                                    <PDFDownloadLink
                                        document={<CVDocument />}
                                        fileName="CV_Erick_Rodriguez_ES.pdf"
                                        className="block w-full px-4 py-3 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        {({ loading }) => (
                                            <span className="flex items-center">
                                                {loading && <FaSpinner aria-hidden="true" className="animate-spin mr-2 text-blue-500" />}
                                                {loading ? 'Español (Generando...)' : '🇲🇽 Español'}
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
                                                {loading ? 'English (Generating...)' : '🇺🇸 English'}
                                            </span>
                                        )}
                                    </PDFDownloadLink>

                                    {/* Formato ATS */}
                                    <div className="px-3 py-2 bg-gray-50 dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-700">
                                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Formato ATS</span>
                                    </div>
                                    <PDFDownloadLink
                                        document={<CVDocumentATS_ES />}
                                        fileName="CV_Erick_Rodriguez_ATS_ES.pdf"
                                        className="block w-full px-4 py-3 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        {({ loading }) => (
                                            <span className="flex items-center">
                                                {loading && <FaSpinner aria-hidden="true" className="animate-spin mr-2 text-green-500" />}
                                                {loading ? 'ATS Español (Generando...)' : '🇲🇽 ATS Español'}
                                            </span>
                                        )}
                                    </PDFDownloadLink>
                                    <PDFDownloadLink
                                        document={<CVDocumentATS_EN />}
                                        fileName="CV_Erick_Rodriguez_ATS_EN.pdf"
                                        className="block w-full px-4 py-3 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t border-gray-100 dark:border-gray-700"
                                    >
                                        {({ loading }) => (
                                            <span className="flex items-center">
                                                {loading && <FaSpinner aria-hidden="true" className="animate-spin mr-2 text-green-500" />}
                                                {loading ? 'ATS English (Generating...)' : '🇺🇸 ATS English'}
                                            </span>
                                        )}
                                    </PDFDownloadLink>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-12 flex items-center justify-center md:justify-start space-x-4 animate-fade-in-up opacity-0 delay-400">
                        <a href={CONTACT_INFO.social.github} aria-label="Perfil de GitHub" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                            <FaGithub aria-hidden="true" className="text-xl" />
                        </a>
                        <a href={CONTACT_INFO.social.linkedin} aria-label="Perfil de LinkedIn" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-blue-500/25">
                            <FaLinkedin aria-hidden="true" className="text-xl" />
                        </a>
                        <a href={`mailto:${CONTACT_INFO.email}`} aria-label="Enviar correo electrónico" className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-red-500/25">
                            <FaEnvelope aria-hidden="true" className="text-xl" />
                        </a>
                    </div>
                </div>

                {/* Hero Image/Visual */}
                <div className="relative hidden md:block animate-scale-in opacity-0 delay-300">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Animated glow background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-30 blur-3xl animate-pulse scale-110"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full opacity-20 blur-3xl animate-float delay-500 scale-105"></div>

                        {/* Profile image container */}
                        <div className="relative z-10 glass-card p-2 rounded-full border-4 border-white/20 dark:border-gray-700/30 overflow-hidden shadow-2xl shadow-blue-500/20 dark:shadow-purple-500/10 group">
                            <img
                                src="/assets/images/profile.jpg"
                                alt="Erick Rodríguez"
                                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>

                        {/* Floating Tech Badges with enhanced animations */}
                        <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl animate-float border border-gray-100 dark:border-gray-700 hover:scale-110 transition-transform cursor-default">
                            <span aria-hidden="true" className="text-2xl">🚀</span>
                        </div>
                        <div className="absolute top-1/2 -right-12 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl animate-float delay-300 border border-gray-100 dark:border-gray-700 hover:scale-110 transition-transform cursor-default">
                            <span aria-hidden="true" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">.NET</span>
                        </div>
                        <div className="absolute bottom-10 -left-8 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl animate-float delay-700 border border-gray-100 dark:border-gray-700 hover:scale-110 transition-transform cursor-default">
                            <span aria-hidden="true" className="text-xl font-bold text-cyan-500">React</span>
                        </div>
                        <div className="absolute -bottom-2 right-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl animate-float delay-500 border border-gray-100 dark:border-gray-700 hover:scale-110 transition-transform cursor-default">
                            <span aria-hidden="true" className="text-xl font-bold text-orange-500">Azure</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
