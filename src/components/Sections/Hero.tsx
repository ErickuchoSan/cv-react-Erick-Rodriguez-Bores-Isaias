import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaSpinner, FaTimes } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { FaReact, FaDatabase, FaDocker } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocumentLeaf_ES } from '../PDF/CVDocumentLeaf_ES';
import { CVDocumentLeaf_EN } from '../PDF/CVDocumentLeaf_EN';
import { CVDocumentATS_ES } from '../PDF/CVDocumentATS_ES';
import { CVDocumentATS_EN } from '../PDF/CVDocumentATS_EN';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO } from '../../data/contact';

const TECH_STACK = [
    { name: '.NET Core 10', color: '#7c3aed' },
    { name: 'React 19', color: '#06b6d4' },
    { name: 'PostgreSQL', color: '#3b82f6' },
    { name: 'Docker', color: '#60a5fa' },
    { name: 'NestJS 11', color: '#ef4444' },
];

export const Hero: React.FC = () => {
    const { t } = useLanguage();
    const [showDownloadOptions, setShowDownloadOptions] = useState(false);
    const [showPhotoModal, setShowPhotoModal] = useState(false);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setShowPhotoModal(false);
                setShowDownloadOptions(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    useEffect(() => {
        if (showPhotoModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [showPhotoModal]);

    // Split name for visual display: "Erick" solid / "Rodríguez" outline
    const nameParts = t.hero.title.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    return (
        <>
            <section id="inicio" className="flex flex-col md:flex-row min-h-screen pt-16 md:pt-0">

                {/* ===== LEFT PANEL — White ===== */}
                <div className="w-full md:w-[60%] bg-white dark:bg-zinc-950 flex flex-col justify-center px-8 sm:px-14 md:px-16 lg:px-20 xl:px-28 py-12 md:py-0 md:pt-24 relative">

                    {/* Available badge */}
                    <div className="flex items-center gap-2 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '50ms' }}>
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 font-['Inter']">
                            {t.hero.role}
                        </span>
                    </div>

                    {/* Giant Name */}
                    <h1
                        className="font-['Manrope'] font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-[0.88] mb-6 animate-fade-in-up opacity-0"
                        style={{ fontSize: 'clamp(3.2rem, 7.5vw, 6rem)', animationDelay: '100ms' }}
                    >
                        {firstName}
                        <br />
                        <span
                            className="dark:text-transparent"
                            style={{
                                WebkitTextStroke: '0px',
                            }}
                        >
                            {lastName}
                        </span>
                    </h1>

                    {/* Role gradient */}
                    <h2
                        className="text-lg md:text-xl xl:text-2xl font-black font-['Manrope'] uppercase tracking-tight mb-8 animate-fade-in-up opacity-0"
                        style={{
                            background: 'linear-gradient(45deg, #b61722, #f97316)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animationDelay: '150ms',
                        }}
                    >
                        Full Stack .NET &amp; React
                    </h2>

                    {/* Description */}
                    <p
                        className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg font-['Inter'] animate-fade-in-up opacity-0"
                        style={{ animationDelay: '200ms' }}
                    >
                        {t.hero.description}
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-wrap gap-4 mb-10 animate-fade-in-up opacity-0 relative z-[2]"
                        style={{ animationDelay: '250ms' }}
                    >
                        <a
                            href="#contacto"
                            className="btn-editorial-primary flex items-center gap-2"
                            aria-label={t.hero.contactBtn}
                        >
                            {t.hero.contactBtn}
                            <FaArrowRight aria-hidden="true" className="text-xs" />
                        </a>

                        <a
                            href="#proyectos"
                            className="btn-editorial-outline"
                            aria-label={t.hero.projectsBtn}
                        >
                            {t.hero.projectsBtn}
                        </a>

                        {/* Download CV Dropdown */}
                        <div className="relative inline-flex">
                            <button
                                onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                                aria-label="Opciones para descargar CV"
                                aria-expanded={showDownloadOptions}
                                className="flex items-center gap-2 px-6 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold uppercase tracking-widest text-sm font-['Manrope'] hover:bg-zinc-700 dark:hover:bg-white transition-colors duration-200"
                            >
                                <FaFileDownload aria-hidden="true" />
                                <span>{t.hero.downloadBtn}</span>
                            </button>

                            {showDownloadOptions && (
                                <div
                                    className="absolute top-full left-0 mt-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl z-50"
                                    style={{ minWidth: '230px' }}
                                >
                                    <div className="px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
                                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-['Manrope']">Diseño Visual</span>
                                    </div>
                                    <PDFDownloadLink
                                        document={<CVDocumentLeaf_ES />}
                                        fileName="CV_Erick_Rodriguez_ES.pdf"
                                        style={{ display: 'block', width: '100%', padding: '12px 16px', textDecoration: 'none', boxSizing: 'border-box' }}
                                        className="text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                    >
                                        {({ loading, error }) => (
                                            <span style={{ display: 'flex', alignItems: 'center', pointerEvents: 'none', fontSize: '14px' }}>
                                                {loading && <FaSpinner aria-hidden="true" className="animate-spin mr-2 text-[#b61722]" />}
                                                {error ? '⚠️ Error — Reintenta' : loading ? 'Español (Generando...)' : '🇲🇽 Español'}
                                            </span>
                                        )}
                                    </PDFDownloadLink>
                                    <PDFDownloadLink
                                        document={<CVDocumentLeaf_EN />}
                                        fileName="CV_Erick_Rodriguez_EN.pdf"
                                        style={{ display: 'block', width: '100%', padding: '12px 16px', textDecoration: 'none', borderTop: '1px solid #f4f4f5', boxSizing: 'border-box' }}
                                        className="text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                    >
                                        {({ loading }) => (
                                            <span style={{ display: 'flex', alignItems: 'center', pointerEvents: 'none', fontSize: '14px' }}>
                                                {loading && <FaSpinner aria-hidden="true" className="animate-spin mr-2 text-[#b61722]" />}
                                                {loading ? 'English (Generating...)' : '🇺🇸 English'}
                                            </span>
                                        )}
                                    </PDFDownloadLink>

                                    <div className="px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border-t border-b border-zinc-200 dark:border-zinc-700">
                                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-['Manrope']">Formato ATS</span>
                                    </div>
                                    <PDFDownloadLink
                                        document={<CVDocumentATS_ES />}
                                        fileName="CV_Erick_Rodriguez_ATS_ES.pdf"
                                        style={{ display: 'block', width: '100%', padding: '12px 16px', textDecoration: 'none', boxSizing: 'border-box' }}
                                        className="text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                    >
                                        {({ loading }) => (
                                            <span style={{ display: 'flex', alignItems: 'center', pointerEvents: 'none', fontSize: '14px' }}>
                                                {loading && <FaSpinner aria-hidden="true" className="animate-spin mr-2 text-green-500" />}
                                                {loading ? 'ATS Español (Generando...)' : '🇲🇽 ATS Español'}
                                            </span>
                                        )}
                                    </PDFDownloadLink>
                                    <PDFDownloadLink
                                        document={<CVDocumentATS_EN />}
                                        fileName="CV_Erick_Rodriguez_ATS_EN.pdf"
                                        style={{ display: 'block', width: '100%', padding: '12px 16px', textDecoration: 'none', borderTop: '1px solid #f4f4f5', boxSizing: 'border-box' }}
                                        className="text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                    >
                                        {({ loading }) => (
                                            <span style={{ display: 'flex', alignItems: 'center', pointerEvents: 'none', fontSize: '14px' }}>
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
                    <div
                        className="flex items-center gap-3 animate-fade-in-up opacity-0"
                        style={{ animationDelay: '300ms' }}
                    >
                        <a
                            href={CONTACT_INFO.social.github}
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200"
                        >
                            <FaGithub aria-hidden="true" className="text-lg" />
                        </a>
                        <a
                            href={CONTACT_INFO.social.linkedin}
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-[#0077b5] hover:text-[#0077b5] transition-all duration-200"
                        >
                            <FaLinkedin aria-hidden="true" className="text-lg" />
                        </a>
                        <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            aria-label="Email"
                            className="p-2.5 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-[#b61722] hover:text-[#b61722] transition-all duration-200"
                        >
                            <FaEnvelope aria-hidden="true" className="text-lg" />
                        </a>

                        <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-700 mx-1"></div>
                        <span className="text-xs text-zinc-400 font-['Inter'] tracking-wider">
                            CDMX, México
                        </span>
                    </div>
                </div>

                {/* ===== RIGHT PANEL — Dark ===== */}
                <div className="w-full md:w-[40%] bg-zinc-950 flex flex-col justify-between px-8 md:px-10 lg:px-14 py-8 md:py-0 md:pt-28 md:pb-10 relative overflow-hidden">

                    {/* Subtle grid decoration */}
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    ></div>

                    {/* Profile Photo */}
                    <button
                        onClick={() => setShowPhotoModal(true)}
                        className="relative w-full mb-8 cursor-pointer group focus:outline-none overflow-hidden animate-fade-in opacity-0"
                        style={{ aspectRatio: '4/5', animationDelay: '200ms' }}
                        aria-label="Ver foto en grande"
                    >
                        <img
                            src="/assets/images/profile.jpg"
                            alt="Erick Rodríguez"
                            className="w-full h-full object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                        />
                        {/* Red overlay on hover */}
                        <div className="absolute inset-0 bg-[#b61722]/0 group-hover:bg-[#b61722]/10 transition-colors duration-500"></div>
                        {/* Expand hint */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-[#b61722] text-white text-xs font-bold px-2 py-1 font-['Manrope'] uppercase tracking-wider">
                                Ver ↗
                            </div>
                        </div>
                    </button>

                    {/* Tech Stack */}
                    <div className="flex flex-col gap-2 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>
                        {TECH_STACK.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-3 bg-zinc-900/60 px-4 py-2.5 border border-zinc-800 hover:border-zinc-600 transition-colors duration-200"
                            >
                                <span
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                    style={{ background: tech.color }}
                                ></span>
                                <span className="text-zinc-300 font-bold text-xs tracking-[0.15em] uppercase font-['Manrope']">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div
                        className="grid grid-cols-3 border-t border-zinc-800 pt-6 animate-fade-in-up opacity-0"
                        style={{ animationDelay: '400ms' }}
                    >
                        <div className="text-center">
                            <div className="text-orange-500 font-black text-2xl font-['Manrope']">3 YRS</div>
                            <div className="text-zinc-500 text-[9px] uppercase tracking-[0.15em] font-bold mt-1 font-['Manrope']">
                                {t.about?.stats?.experience ?? 'Experience'}
                            </div>
                        </div>
                        <div className="text-center border-x border-zinc-800">
                            <div className="text-orange-500 font-black text-2xl font-['Manrope']">15+</div>
                            <div className="text-zinc-500 text-[9px] uppercase tracking-[0.15em] font-bold mt-1 font-['Manrope']">
                                Proyectos
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-orange-500 font-black text-2xl font-['Manrope']">40%</div>
                            <div className="text-zinc-500 text-[9px] uppercase tracking-[0.15em] font-bold mt-1 font-['Manrope']">
                                SQL Perf
                            </div>
                        </div>
                    </div>

                    {/* Tech icons decorative — mobile visible too */}
                    <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-20">
                        <SiDotnet className="text-white text-xl" />
                        <FaReact className="text-white text-xl" />
                        <FaDatabase className="text-white text-xl" />
                        <FaDocker className="text-white text-xl" />
                    </div>
                </div>
            </section>

            {/* ===== Photo Modal ===== */}
            {showPhotoModal && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 animate-fade-in"
                    onClick={() => setShowPhotoModal(false)}
                >
                    <button
                        onClick={() => setShowPhotoModal(false)}
                        className="absolute top-6 right-6 z-10 p-3 border border-white/20 text-white hover:bg-white/10 transition-colors"
                        aria-label="Cerrar"
                    >
                        <FaTimes className="text-xl" />
                    </button>

                    <div
                        className="relative max-w-[90vw] max-h-[90vh] animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src="/assets/images/profile.jpg"
                            alt="Erick Rodríguez"
                            className="w-auto h-auto max-w-[85vw] max-h-[85vh] object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                            <h3 className="text-white text-xl font-black font-['Manrope'] uppercase tracking-tighter">
                                Erick Rodríguez
                            </h3>
                            <p className="text-zinc-400 text-sm font-['Inter']">Full Stack Developer</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
