import React, { type ReactNode, type CSSProperties } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', style }) => {
    return (
        <div className={`glass-card tech-hover-effect ${className}`.trim()} style={style}>
            {children}
        </div>
    );
};
