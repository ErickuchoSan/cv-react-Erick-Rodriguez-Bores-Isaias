import React, { type ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
    return (
        <div className={`glass-card tech-hover-effect ${className}`.trim()}>
            {children}
        </div>
    );
};
