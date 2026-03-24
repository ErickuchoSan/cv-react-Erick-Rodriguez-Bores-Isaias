import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
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
            gradient: 'from-blue-500 to-cyan-500',
            bgLight: 'bg-blue-50',
            bgDark: 'dark:bg-blue-900/30',
        },
        {
            icon: FaPhone,
            label: 'Teléfono',
            value: CONTACT_INFO.phone,
            href: `tel:${CONTACT_INFO.phone}`,
            gradient: 'from-emerald-500 to-teal-500',
            bgLight: 'bg-emerald-50',
            bgDark: 'dark:bg-emerald-900/30',
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Ubicación',
            value: CONTACT_INFO.location,
            href: null,
            gradient: 'from-rose-500 to-pink-500',
            bgLight: 'bg-rose-50',
            bgDark: 'dark:bg-rose-900/30',
        },
    ];

    const socialLinks = [
        {
            icon: FaLinkedin,
            href: CONTACT_INFO.social.linkedin,
            label: 'LinkedIn',
            gradient: 'from-[#0077b5] to-[#00a0dc]',
            hoverShadow: 'hover:shadow-[#0077b5]/30',
        },
        {
            icon: FaGithub,
            href: CONTACT_INFO.social.github,
            label: 'GitHub',
            gradient: 'from-gray-700 to-gray-900',
            hoverShadow: 'hover:shadow-gray-500/30',
        },
        {
            icon: FaWhatsapp,
            href: `${CONTACT_INFO.social.whatsapp}?text=Hola%20Erick%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte...`,
            label: 'WhatsApp',
            gradient: 'from-[#25D366] to-[#128C7E]',
            hoverShadow: 'hover:shadow-[#25D366]/30',
        },
    ];

    return (
        <section id="contacto" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
            <SectionParticles />

            {/* Decorative gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.contact.title}
                    subtitle={t.contact.subtitle}
                />

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                                <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></span>
                                {t.contact.infoTitle}
                            </h3>
                            <div className="space-y-4">
                                {contactItems.map((item, index) => (
                                    <GlassCard
                                        key={index}
                                        className="group p-4 flex items-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up opacity-0"
                                        style={{ animationDelay: `${(index + 2) * 100}ms` }}
                                    >
                                        <div className={`p-3.5 rounded-xl bg-gradient-to-br ${item.gradient} text-white mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                            <item.icon aria-hidden="true" className="text-xl" />
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-0.5">{item.label}</p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base truncate block"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '500ms' }}>
                            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                                <span className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></span>
                                {t.contact.followMe}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative p-4 rounded-2xl bg-gradient-to-br ${social.gradient} text-white shadow-lg hover:shadow-2xl ${social.hoverShadow} hover:scale-110 hover:-translate-y-1 transition-all duration-300`}
                                    >
                                        <social.icon aria-hidden="true" className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
                                        {/* Tooltip */}
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                            {social.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className="relative animate-fade-in-up opacity-0"
                        style={{ animationDelay: '300ms' }}
                    >
                        {/* Decorative gradient border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>

                        <div className="relative bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white mr-3 shadow-lg">
                                    <FaPaperPlane aria-hidden="true" className="text-lg" />
                                </div>
                                {t.contact.messageTitle}
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="form-group">
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        {t.contact.form.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 ${
                                            errors.name
                                                ? 'border-red-500 focus:border-red-500'
                                                : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400'
                                        } focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 dark:text-white placeholder-gray-400`}
                                        placeholder="Tu nombre"
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? 'name-error' : undefined}
                                    />
                                    {errors.name && (
                                        <p id="name-error" className="text-red-500 text-xs mt-1.5 flex items-center">
                                            <span className="w-1 h-1 bg-red-500 rounded-full mr-1.5"></span>
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        {t.contact.form.subject}
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 ${
                                            errors.subject
                                                ? 'border-red-500 focus:border-red-500'
                                                : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400'
                                        } focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 dark:text-white placeholder-gray-400`}
                                        placeholder="Asunto del mensaje"
                                        aria-invalid={!!errors.subject}
                                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                                    />
                                    {errors.subject && (
                                        <p id="subject-error" className="text-red-500 text-xs mt-1.5 flex items-center">
                                            <span className="w-1 h-1 bg-red-500 rounded-full mr-1.5"></span>
                                            {errors.subject}
                                        </p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        {t.contact.form.message}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 ${
                                            errors.message
                                                ? 'border-red-500 focus:border-red-500'
                                                : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400'
                                        } focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 dark:text-white resize-none placeholder-gray-400`}
                                        placeholder="Escribe tu mensaje aquí..."
                                        aria-invalid={!!errors.message}
                                        aria-describedby={errors.message ? 'message-error' : undefined}
                                    ></textarea>
                                    {errors.message && (
                                        <p id="message-error" className="text-red-500 text-xs mt-1.5 flex items-center">
                                            <span className="w-1 h-1 bg-red-500 rounded-full mr-1.5"></span>
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:bg-right transition-all duration-500 flex items-center justify-center group"
                                >
                                    <span>{t.contact.form.send}</span>
                                    <FaPaperPlane aria-hidden="true" className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
