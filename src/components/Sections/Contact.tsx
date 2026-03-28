import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO } from '../../data/contact';
import { SectionParticles } from '../UI/SectionParticles';
import { GlassCard } from '../UI/GlassCard';
import { useContactForm } from '../../hooks/useContactForm';

export const Contact: React.FC = () => {
    const { t } = useLanguage();
    const { formData, errors, handleChange, handleSubmit } = useContactForm();

    const contactItems = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: CONTACT_INFO.email,
            href: `mailto:${CONTACT_INFO.email}`,
            color: 'bg-[#b61722]',
        },
        {
            icon: FaPhone,
            label: 'Teléfono',
            value: CONTACT_INFO.phone,
            href: `tel:${CONTACT_INFO.phone}`,
            color: 'bg-orange-500',
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Ubicación',
            value: CONTACT_INFO.location,
            href: null,
            color: 'bg-zinc-800',
        },
    ];

    const socialLinks = [
        { icon: FaLinkedin, href: CONTACT_INFO.social.linkedin, label: 'LinkedIn', color: 'bg-[#0077b5]' },
        { icon: FaGithub, href: CONTACT_INFO.social.github, label: 'GitHub', color: 'bg-zinc-900' },
        { icon: FaWhatsapp, href: `${CONTACT_INFO.social.whatsapp}?text=Hola%20Erick%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte...`, label: 'WhatsApp', color: 'bg-[#25D366]' },
    ];

    return (
        <section id="contacto" className="section-tech-bg py-16 sm:py-20 md:py-24 bg-[#f9f9f9] dark:bg-zinc-950 transition-colors duration-300 relative">
            <SectionParticles />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.contact.title}
                    subtitle={t.contact.subtitle}
                />

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
                        <div>
                            <h3 className="text-base font-black mb-5 text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.12em] font-['Manrope'] flex items-center gap-3">
                                <span className="w-4 h-0.5 bg-[#b61722]"></span>
                                {t.contact.infoTitle}
                            </h3>
                            <div className="space-y-3">
                                {contactItems.map((item, index) => (
                                    <GlassCard
                                        key={index}
                                        className="group p-4 flex items-center hover:border-[#b61722]/50 transition-all duration-300 animate-fade-in-up opacity-0"
                                        style={{ animationDelay: `${(index + 2) * 80}ms` }}
                                    >
                                        <div className={`w-8 h-8 ${item.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                                            <item.icon aria-hidden="true" className="text-white text-sm" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5 font-['Inter'] uppercase tracking-wider">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-zinc-900 dark:text-zinc-100 font-medium text-sm truncate block hover:text-[#b61722] transition-colors font-['Inter']">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-zinc-900 dark:text-zinc-100 font-medium text-sm font-['Inter']">{item.value}</p>
                                            )}
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
                            <h3 className="text-base font-black mb-5 text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.12em] font-['Manrope'] flex items-center gap-3">
                                <span className="w-4 h-0.5 bg-orange-500"></span>
                                {t.contact.followMe}
                            </h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative p-4 ${social.color} text-white hover:opacity-90 hover:-translate-y-1 transition-all duration-200`}
                                        title={social.label}
                                    >
                                        <social.icon aria-hidden="true" className="text-xl" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
                        <GlassCard className="p-6 sm:p-8 hover:border-[#b61722]/30">
                            <h3 className="text-base font-black mb-6 text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.12em] font-['Manrope'] flex items-center gap-3">
                                <div className="w-7 h-7 bg-[#b61722] flex items-center justify-center">
                                    <FaPaperPlane aria-hidden="true" className="text-white text-xs" />
                                </div>
                                {t.contact.messageTitle}
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider font-['Manrope']">
                                        {t.contact.form.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border-2 font-['Inter'] text-sm outline-none transition-colors duration-200 ${
                                            errors.name
                                                ? 'border-red-500'
                                                : 'border-zinc-200 dark:border-zinc-700 focus:border-[#b61722]'
                                        } dark:text-white`}
                                        placeholder="Tu nombre"
                                        aria-invalid={!!errors.name}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1 font-['Inter']">{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider font-['Manrope']">
                                        {t.contact.form.subject}
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border-2 font-['Inter'] text-sm outline-none transition-colors duration-200 ${
                                            errors.subject
                                                ? 'border-red-500'
                                                : 'border-zinc-200 dark:border-zinc-700 focus:border-[#b61722]'
                                        } dark:text-white`}
                                        placeholder="Asunto del mensaje"
                                        aria-invalid={!!errors.subject}
                                    />
                                    {errors.subject && <p className="text-red-500 text-xs mt-1 font-['Inter']">{errors.subject}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider font-['Manrope']">
                                        {t.contact.form.message}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border-2 font-['Inter'] text-sm outline-none transition-colors duration-200 resize-none ${
                                            errors.message
                                                ? 'border-red-500'
                                                : 'border-zinc-200 dark:border-zinc-700 focus:border-[#b61722]'
                                        } dark:text-white`}
                                        placeholder="Escribe tu mensaje aquí..."
                                        aria-invalid={!!errors.message}
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1 font-['Inter']">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#b61722] text-white font-black uppercase tracking-[0.15em] text-sm font-['Manrope'] hover:bg-[#930013] transition-colors duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
                                >
                                    <span>{t.contact.form.send}</span>
                                    <FaPaperPlane aria-hidden="true" className="text-xs" />
                                </button>
                            </form>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
};
