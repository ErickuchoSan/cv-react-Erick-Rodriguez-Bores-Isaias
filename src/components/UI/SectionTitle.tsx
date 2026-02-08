import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
            <h2 className="enhanced-section-title">{title}</h2>
            {subtitle && <p className="tech-subtitle">{subtitle}</p>}
        </div>
    );
};
