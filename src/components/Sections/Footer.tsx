import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO } from '../../data/contact';
import { NAV_LINKS_KEYS } from '../../data/navigation';

export const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 pt-12 pb-8 transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-[#b61722] flex items-center justify-center text-white font-black text-xs font-['Manrope']">
                                ER
                            </div>
                            <span className="font-black tracking-tighter text-zinc-50 font-['Manrope'] uppercase">.DEV</span>
                        </div>
                        <p className="text-zinc-500 max-w-sm text-sm leading-relaxed font-['Inter']">
                            {t.footer.description}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-black text-zinc-300 mb-4 text-xs uppercase tracking-[0.15em] font-['Manrope']">{t.footer.navigation}</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS_KEYS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-zinc-500 hover:text-[#b61722] transition-colors duration-200 text-sm font-['Inter']"
                                    >
                                        {t.nav[link.key]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-black text-zinc-300 mb-4 text-xs uppercase tracking-[0.15em] font-['Manrope']">{t.footer.contact}</h3>
                        <div className="flex gap-3">
                            <a
                                href={CONTACT_INFO.social.linkedin}
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 border border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-[#b61722] hover:text-[#b61722] transition-all duration-200"
                            >
                                <FaLinkedin aria-hidden="true" />
                            </a>
                            <a
                                href={CONTACT_INFO.social.github}
                                aria-label="GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 border border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-zinc-100 hover:text-zinc-100 transition-all duration-200"
                            >
                                <FaGithub aria-hidden="true" />
                            </a>
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                aria-label="Email"
                                className="w-9 h-9 border border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-[#b61722] hover:text-[#b61722] transition-all duration-200"
                            >
                                <FaEnvelope aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-zinc-600 text-xs font-['Inter'] uppercase tracking-wider">
                        &copy; {currentYear} {t.footer.brand}. {t.footer.rights}
                    </p>
                    <p className="text-zinc-600 text-xs font-['Manrope'] uppercase tracking-wider">
                        React &amp; Tailwind — CDMX, México
                    </p>
                </div>
            </div>
        </footer>
    );
};
