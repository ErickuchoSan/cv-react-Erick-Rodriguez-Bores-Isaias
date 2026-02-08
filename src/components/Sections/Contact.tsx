import React, { useState } from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Mensaje enviado (simulación)');
    };

    return (
        <section id="contacto" className="enhanced-section section-tech-bg py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title="Contáctame"
                    subtitle="¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él!"
                />

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">Información de Contacto</h3>
                        <div className="space-y-4 sm:space-y-6">
                            <div className="contact-item glass-card tech-hover-effect p-3 sm:p-4 flex items-start space-x-3 sm:space-x-4">
                                <div className="contact-icon w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 flex-shrink-0">
                                    <FaEnvelope className="text-lg sm:text-xl" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Email</h4>
                                    <a href="mailto:erickisaiasbores@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base break-all">
                                        erickisaiasbores@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item glass-card tech-hover-effect p-3 sm:p-4 flex items-start space-x-3 sm:space-x-4">
                                <div className="contact-icon w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 flex-shrink-0">
                                    <FaPhone className="text-lg sm:text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Teléfono</h4>
                                    <a href="tel:+525571104581" className="text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base">
                                        55 7110 4581
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item glass-card tech-hover-effect p-3 sm:p-4 flex items-start space-x-3 sm:space-x-4">
                                <div className="contact-icon w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 flex-shrink-0">
                                    <FaMapMarkerAlt className="text-lg sm:text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Ubicación</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                                        Cuajimalpa de Morelos, CDMX
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8">
                            <h4 className="font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">Sígueme</h4>
                            <div className="flex space-x-3 sm:space-x-4">
                                {[
                                    { icon: FaLinkedin, href: "#" },
                                    { icon: FaGithub, href: "#" },
                                    { icon: FaTwitter, href: "#" }
                                ].map((social, i) => (
                                    <a key={i} href={social.href} className="social-link w-11 h-11 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
                                        <social.icon className="text-lg sm:text-xl" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">Envíame un Mensaje</h3>
                        <form className="form-container" onSubmit={handleSubmit} noValidate>
                            <div className="form-grid grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                <div className="form-field">
                                    <label htmlFor="name" className="form-label mb-1.5 sm:mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                                        required
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email" className="form-label mb-1.5 sm:mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                                        required
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="form-field mb-4 sm:mb-6">
                                <label htmlFor="subject" className="form-label mb-1.5 sm:mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Asunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="form-input w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                                    placeholder="Asunto del mensaje"
                                />
                            </div>

                            <div className="form-field mb-4 sm:mb-6">
                                <label htmlFor="message" className="form-label mb-1.5 sm:mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input form-textarea w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-28 sm:h-32 resize-none text-base"
                                    required
                                    placeholder="Tu mensaje..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-tech-primary w-full justify-center">
                                Enviar Mensaje
                                <FaEnvelope className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
