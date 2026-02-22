export type NavKey = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'contact';

export interface NavLink {
    href: string;
    key: NavKey;
}

export const NAV_LINKS_KEYS: NavLink[] = [
    { href: '#inicio', key: 'home' },
    { href: '#sobre-mi', key: 'about' },
    { href: '#experiencia', key: 'experience' },
    { href: '#habilidades', key: 'skills' },
    { href: '#proyectos', key: 'projects' },
    { href: '#contacto', key: 'contact' },
];
