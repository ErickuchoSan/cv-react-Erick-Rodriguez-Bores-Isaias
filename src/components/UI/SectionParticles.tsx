import React from 'react';

export const SectionParticles: React.FC<{ count?: number }> = ({ count = 4 }) => {
    return (
        <div className="section-particles">
            {[...Array(count)].map((_, i) => (
                <div key={i} className="section-particle" />
            ))}
        </div>
    );
};
