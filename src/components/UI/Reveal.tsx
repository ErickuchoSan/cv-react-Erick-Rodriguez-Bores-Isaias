import React, { useEffect, useState } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
    as?: keyof React.JSX.IntrinsicElements;
    delay?: number;
    y?: number;
    duration?: number;
    className?: string;
    children: React.ReactNode;
}

function usePrefersReducedMotion(): boolean {
    const [prefers, setPrefers] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefers(mq.matches);
        const handler = (e: MediaQueryListEvent) => setPrefers(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);
    return prefers;
}

function useIsMobile(): boolean {
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        setMobile(mq.matches);
        const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);
    return mobile;
}

export const Reveal: React.FC<RevealProps> = ({
    as = 'div',
    delay = 0,
    y = 40,
    duration = 700,
    className = '',
    children,
}) => {
    const { ref, inView } = useReveal<HTMLElement>();
    const reduced = usePrefersReducedMotion();
    const mobile = useIsMobile();

    const effectiveY = mobile ? Math.min(y, 20) : y;

    const style: React.CSSProperties = reduced
        ? { opacity: 1 }
        : {
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0,0,0)' : `translate3d(0, ${effectiveY}px, 0)`,
              transition: `opacity ${duration}ms cubic-bezier(.2,.8,.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(.2,.8,.2,1) ${delay}ms`,
              willChange: inView ? 'auto' : 'opacity, transform',
          };

    const Tag = as as React.ElementType;

    return (
        <Tag ref={ref} className={className} style={style}>
            {children}
        </Tag>
    );
};

interface RevealGroupProps {
    stagger?: number;
    baseDelay?: number;
    children: React.ReactNode;
}

export const RevealGroup: React.FC<RevealGroupProps> = ({
    stagger = 80,
    baseDelay = 0,
    children,
}) => {
    const items = React.Children.toArray(children).flat();

    return (
        <>
            {items.map((child, index) => {
                if (!React.isValidElement(child)) return child;
                const typedChild = child as React.ReactElement<{ delay?: number }>;
                const computedDelay = baseDelay + index * stagger;
                return React.cloneElement(typedChild, {
                    delay: typedChild.props.delay ?? computedDelay,
                });
            })}
        </>
    );
};
