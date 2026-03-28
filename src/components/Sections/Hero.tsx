import React, { useState, useEffect } from 'react';
// import { SectionTitle } from '../UI/SectionTitle'; // Removed unused import
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaSpinner, FaReact, FaDatabase, FaCloud, FaServer, FaNodeJs, FaTimes } from 'react-icons/fa';
import { SiDotnet, SiTypescript } from 'react-icons/si';
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
    const [showPhotoModal, setShowPhotoModal] = useState(false);

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setShowPhotoModal(false);
        };
        if (showPhotoModal) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [showPhotoModal]);

    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center relative bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-16">
            {/* Enhanced Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/30 dark:bg-blue-500/20 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/30 dark:bg-purple-500/20 rounded-full blur-[100px] animate-float delay-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Mobile Photo - Shown only on mobile, above text */}
                <div className="md:hidden flex justify-center mb-6 animate-scale-in opacity-0">
                    <div className="relative py-8 px-12">
                        {/* Animated glow background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>

                        {/* Profile image container - Clickable */}
                        <button
                            onClick={() => setShowPhotoModal(true)}
                            className="relative w-48 h-48 sm:w-56 sm:h-56 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-full"
                            aria-label="Ver foto en grande"
                        >
                            <div className="w-full h-full bg-white dark:bg-gray-800 p-1.5 rounded-full border-4 border-white/50 dark:border-gray-700/50 shadow-2xl shadow-blue-500/30 dark:shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
                                <img
                                    src="/assets/images/profile.jpg"
                                    alt="Erick Rodríguez"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            {/* Hover indicator */}
                            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1 rounded-full">
                                    Click para ampliar
                                </span>
                            </div>
                        </button>

                        {/* Floating Tech Icons - Positioned around the photo with z-20 */}
                        {/* Top Right - .NET */}
                        <div className="absolute top-0 right-0 z-20 bg-white dark:bg-gray-800 p-2.5 rounded-xl shadow-lg animate-float border border-gray-200 dark:border-gray-700">
                            <SiDotnet aria-hidden="true" className="text-xl text-purple-600" />
                        </div>

                        {/* Top Left - React */}
                        <div className="absolute top-0 left-0 z-20 bg-white dark:bg-gray-800 p-2.5 rounded-xl shadow-lg animate-float delay-200 border border-gray-200 dark:border-gray-700">
                            <FaReact aria-hidden="true" className="text-xl text-cyan-500" />
                        </div>

                        {/* Right Middle - Azure */}
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 bg-white dark:bg-gray-800 p-2.5 rounded-xl shadow-lg animate-float delay-400 border border-gray-200 dark:border-gray-700">
                            <FaCloud aria-hidden="true" className="text-xl text-blue-500" />
                        </div>

                        {/* Left Middle - TypeScript */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 bg-white dark:bg-gray-800 p-2.5 rounded-xl shadow-lg animate-float delay-300 border border-gray-200 dark:border-gray-700">
                            <SiTypescript aria-hidden="true" className="text-xl text-blue-600" />
                        </div>

                        {/* Bottom Right - Server/Backend */}
                        <div className="absolute bottom-0 right-2 z-20 bg-white dark:bg-gray-800 p-2.5 rounded-xl shadow-lg animate-float delay-500 border border-gray-200 dark:border-gray-700">
                            <FaServer aria-hidden="true" className="text-xl text-purple-600" />
                        </div>

                        {/* Bottom Left - Database */}
                        <div className="absolute bottom-0 left-2 z-20 bg-white dark:bg-gray-800 p-2.5 rounded-xl shadow-lg animate-float delay-600 border border-gray-200 dark:border-gray-700">
                            <FaDatabase aria-hidden="true" className="text-xl text-emerald-500" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
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
                                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50" style={{ minWidth: '220px' }}>
                                    {/* Diseño Visual */}
                                    <div className="px-3 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
                                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Diseño Visual</span>
                                    </div>
                                    <PDFDownloadLink
                                        document={<CVDocument />}
                                        fileName="CV_Erick_Rodriguez_ES.pdf"
                                        style={{ display: 'block', width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: '14px', color: 'inherit', textDecoration: 'none', boxSizing: 'border-box' }}
                                        className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        {({ loading, error }) => (
                                            <span style={{ display: 'flex', alignItems: 'center', width: '100%', pointerEvents: 'none' }}>
                                                {loading && <FaSpinner aria-hidden="true" className="animate-spin mr-2 text-blue-500" />}
                                                {error ? '⚠️ Error — Reintenta' : loading ? 'Español (Generando...)' : '🇲🇽 Español'}
                                            </span>
                                        )}
                                    </PDFDownloadLink>
                                    <PDFDownloadLink
                                        document={<CVDocumentEN />}
                                        fileName="CV_Erick_Rodriguez_EN.pdf"
                                        style={{ display: 'block', width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: '14px', color: 'inherit', textDecoration: 'none', borderTop: '1px solid #f3f4f6', boxSizing: 'border-box' }}
                                        className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        {({ loading }) => (
                                            <span style={{ display: 'flex', alignItems: 'center', width: '100%', pointerEvents: 'none' }}>
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
                                        style={{ display: 'block', width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: '14px', color: 'inherit', textDecoration: 'none', boxSizing: 'border-box' }}
                                        className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        {({ loading }) => (
                                            <span style={{ display: 'flex', alignItems: 'center', width: '100%', pointerEvents: 'none' }}>
                                                {loading && <FaSpinner aria-hidden="true" className="animate-spin mr-2 text-green-500" />}
                                                {loading ? 'ATS Español (Generando...)' : '🇲🇽 ATS Español'}
                                            </span>
                                        )}
                                    </PDFDownloadLink>
                                    <PDFDownloadLink
                                        document={<CVDocumentATS_EN />}
                                        fileName="CV_Erick_Rodriguez_ATS_EN.pdf"
                                        style={{ display: 'block', width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: '14px', color: 'inherit', textDecoration: 'none', borderTop: '1px solid #f3f4f6', boxSizing: 'border-box' }}
                                        className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-b-lg"
                                    >
                                        {({ loading }) => (
                                            <span style={{ display: 'flex', alignItems: 'center', width: '100%', pointerEvents: 'none' }}>
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

                {/* Hero Image/Visual - Desktop Only */}
                <div className="relative hidden md:block animate-scale-in opacity-0 delay-300">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Animated glow background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-30 blur-3xl animate-pulse scale-110"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full opacity-20 blur-3xl animate-float delay-500 scale-105"></div>

                        {/* Profile image container - Clickable */}
                        <button
                            onClick={() => setShowPhotoModal(true)}
                            className="relative z-10 w-full h-full bg-white dark:bg-gray-800 p-2 rounded-full border-4 border-white/30 dark:border-gray-700/50 shadow-2xl shadow-blue-500/30 dark:shadow-purple-500/20 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                            aria-label="Ver foto en grande"
                        >
                            <img
                                src="/assets/images/profile.jpg"
                                alt="Erick Rodríguez"
                                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
                                    Click para ampliar
                                </span>
                            </div>
                        </button>

                        {/* Floating Tech Icons with z-20 to appear in front */}
                        {/* Top Right - .NET */}
                        <div className="absolute -top-2 -right-2 z-20 bg-white dark:bg-gray-800 p-3.5 rounded-2xl shadow-xl animate-float border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform cursor-default group/icon">
                            <SiDotnet aria-hidden="true" className="text-3xl text-purple-600 group-hover/icon:rotate-12 transition-transform" />
                        </div>

                        {/* Right Middle - React */}
                        <div className="absolute top-1/3 -right-14 z-20 bg-white dark:bg-gray-800 p-3.5 rounded-2xl shadow-xl animate-float delay-200 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform cursor-default group/icon">
                            <FaReact aria-hidden="true" className="text-3xl text-cyan-500 group-hover/icon:animate-spin" />
                        </div>

                        {/* Bottom Right - Azure/Cloud */}
                        <div className="absolute bottom-1/4 -right-10 z-20 bg-white dark:bg-gray-800 p-3.5 rounded-2xl shadow-xl animate-float delay-400 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform cursor-default group/icon">
                            <FaCloud aria-hidden="true" className="text-3xl text-blue-500 group-hover/icon:rotate-12 transition-transform" />
                        </div>

                        {/* Bottom - Server/Backend */}
                        <div className="absolute -bottom-4 right-1/3 z-20 bg-white dark:bg-gray-800 p-3.5 rounded-2xl shadow-xl animate-float delay-500 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform cursor-default group/icon">
                            <FaServer aria-hidden="true" className="text-3xl text-purple-600 group-hover/icon:rotate-12 transition-transform" />
                        </div>

                        {/* Left Bottom - TypeScript */}
                        <div className="absolute bottom-1/4 -left-10 z-20 bg-white dark:bg-gray-800 p-3.5 rounded-2xl shadow-xl animate-float delay-600 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform cursor-default group/icon">
                            <SiTypescript aria-hidden="true" className="text-3xl text-blue-600 group-hover/icon:rotate-12 transition-transform" />
                        </div>

                        {/* Left Middle - Database */}
                        <div className="absolute top-1/3 -left-12 z-20 bg-white dark:bg-gray-800 p-3.5 rounded-2xl shadow-xl animate-float delay-300 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform cursor-default group/icon">
                            <FaDatabase aria-hidden="true" className="text-3xl text-emerald-500 group-hover/icon:rotate-12 transition-transform" />
                        </div>

                        {/* Top Left - Node.js */}
                        <div className="absolute -top-4 left-1/4 z-20 bg-white dark:bg-gray-800 p-3.5 rounded-2xl shadow-xl animate-float delay-700 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform cursor-default group/icon">
                            <FaNodeJs aria-hidden="true" className="text-3xl text-green-600 group-hover/icon:rotate-12 transition-transform" />
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Photo Modal */}
            {showPhotoModal && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
                    onClick={() => setShowPhotoModal(false)}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setShowPhotoModal(false)}
                        className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        aria-label="Cerrar"
                    >
                        <FaTimes className="text-2xl" />
                    </button>

                    {/* Large image */}
                    <div
                        className="relative max-w-[90vw] max-h-[90vh] animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl opacity-30 blur-2xl scale-105"></div>

                            {/* Image container */}
                            <div className="relative bg-white dark:bg-gray-800 p-3 rounded-3xl shadow-2xl">
                                <img
                                    src="/assets/images/profile.jpg"
                                    alt="Erick Rodríguez"
                                    className="w-auto h-auto max-w-[85vw] max-h-[80vh] object-contain rounded-2xl"
                                />
                            </div>
                        </div>

                        {/* Name caption */}
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
                            <h3 className="text-white text-2xl font-bold">Erick Rodríguez</h3>
                            <p className="text-gray-300 text-sm">Full Stack Developer</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
