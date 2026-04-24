import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
    options: UseRevealOptions = {}
): { ref: React.RefObject<T | null>; inView: boolean } {
    const { threshold = 0.2, rootMargin = '-10% 0px', once = true } = options;
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, inView };
}
