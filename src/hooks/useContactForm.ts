import { useState } from 'react';
import { CONTACT_INFO } from '../data/contact';
import Swal from 'sweetalert2';
import { useLanguage } from '../context/LanguageContext';

export const useContactForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const validate = () => {
        let isValid = true;
        const newErrors = { name: '', subject: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = t.contact.errors?.name || 'Requerido';
            isValid = false;
        }
        if (!formData.subject.trim()) {
            newErrors.subject = t.contact.errors?.subject || 'Requerido';
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = t.contact.errors?.message || 'Requerido';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (errors[e.target.name as keyof typeof errors]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        const { name, subject, message } = formData;
        const textToSend = `Hola, mi nombre es ${name}.\nAsunto: ${subject}\n\nMensaje:\n${message}`;
        const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
        window.open(whatsappUrl, '_blank');

        setFormData({ name: '', subject: '', message: '' });

        Swal.fire({
            title: t.contact.success?.title || '¡Mensaje Enviado!',
            text: t.contact.success?.text || 'Se ha abierto WhatsApp de manera exitosa.',
            icon: 'success',
            confirmButtonColor: '#3b82f6',
        });
    };

    return { formData, errors, handleChange, handleSubmit };
};
