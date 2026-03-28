import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="mb-10 sm:mb-14 md:mb-16 px-2">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-[#b61722]"></div>
                <span className="text-[#b61722] text-xs font-bold tracking-[0.2em] uppercase font-['Inter']">
                    // {title.toLowerCase()}
                </span>
            </div>
            <h2 className="enhanced-section-title">{title}</h2>
            {subtitle && (
                <p className="tech-subtitle mt-3">{subtitle}</p>
            )}
        </div>
    );
};
