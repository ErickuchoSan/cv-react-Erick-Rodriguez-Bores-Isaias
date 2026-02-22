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

    return (
        <section id="contacto" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <SectionParticles />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.contact.title}
                    subtitle={t.contact.subtitle}
                />

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">{t.contact.infoTitle}</h3>
                            <div className="space-y-4 sm:space-y-6">
                                <GlassCard className="contact-item p-3 sm:p-4 flex items-center">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                                        <FaEnvelope aria-hidden="true" className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 transition-colors text-sm sm:text-base break-all">
                                            {CONTACT_INFO.email}
                                        </a>
                                    </div>
                                </GlassCard>

                                <GlassCard className="contact-item p-3 sm:p-4 flex items-center">
                                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-400 mr-4">
                                        <FaPhone aria-hidden="true" className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono</p>
                                        <p className="text-gray-800 dark:text-gray-200 font-medium text-sm sm:text-base">
                                            {CONTACT_INFO.phone}
                                        </p>
                                    </div>
                                </GlassCard>

                                <GlassCard className="contact-item p-3 sm:p-4 flex items-center">
                                    <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full text-red-600 dark:text-red-400 mr-4">
                                        <FaMapMarkerAlt aria-hidden="true" className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Ubicación</p>
                                        <p className="text-gray-800 dark:text-gray-200 font-medium text-sm sm:text-base">
                                            {CONTACT_INFO.location}
                                        </p>
                                    </div>
                                </GlassCard>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">{t.contact.followMe}</h3>
                            <div className="flex space-x-4">
                                <a href={CONTACT_INFO.social.linkedin} aria-label="Perfil de LinkedIn" target="_blank" rel="noopener noreferrer" className="social-btn bg-[#0077b5] text-white p-3 sm:p-4 rounded-full hover:scale-110 transition-transform shadow-lg">
                                    <FaLinkedin aria-hidden="true" className="text-xl sm:text-2xl" />
                                </a>
                                <a href={CONTACT_INFO.social.github} aria-label="Perfil de GitHub" target="_blank" rel="noopener noreferrer" className="social-btn bg-[#333] text-white p-3 sm:p-4 rounded-full hover:scale-110 transition-transform shadow-lg">
                                    <FaGithub aria-hidden="true" className="text-xl sm:text-2xl" />
                                </a>
                                <a href={`${CONTACT_INFO.social.whatsapp}?text=Hola%20${encodeURIComponent('Regina')}%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte...`} aria-label="Enviar mensaje de WhatsApp" target="_blank" rel="noopener noreferrer" className="social-btn bg-[#25D366] text-white p-3 sm:p-4 rounded-full hover:scale-110 transition-transform shadow-lg">
                                    <FaWhatsapp aria-hidden="true" className="text-xl sm:text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20">
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
                            <FaPaperPlane aria-hidden="true" className="mr-3 text-blue-600" />
                            {t.contact.messageTitle}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div className="form-group">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.form.name}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 sm:py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white`}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />
                                {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.form.subject}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 sm:py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white`}
                                    aria-invalid={!!errors.subject}
                                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                                />
                                {errors.subject && <p id="subject-error" className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.form.message}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 sm:py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none`}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                ></textarea>
                                {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="w-full btn-modern-primary py-3 flex justify-center items-center group"
                            >
                                <span>{t.contact.form.send}</span>
                                <FaPaperPlane aria-hidden="true" className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
