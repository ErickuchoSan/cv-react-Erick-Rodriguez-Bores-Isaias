import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-16">
            <h2 className="enhanced-section-title">{title}</h2>
            {subtitle && <p className="tech-subtitle">{subtitle}</p>}
        </div>
    );
};
