interface Props { name: string; size?: number }

export function TechIcon({ name, size = 20 }: Props) {
  const key = (name || '').toLowerCase();
  const common = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor',
    strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
  };

  if (key.includes('.net') || key.includes('dotnet') || key === 'c#' || key.startsWith('c# ')) {
    return (
      <svg {...common}>
        <path d="M5 7v10M5 7l6 10M11 7v10" />
        <path d="M14 7v10M14 12h5M17 7h2M17 17h2" />
      </svg>
    );
  }
  if (key.includes('react') || key.includes('next')) {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    );
  }
  if (key.includes('postgres')) {
    return (
      <svg {...common}>
        <path d="M16 3c2 0 3.5 1.5 3.5 3.5 0 1.5-0.5 4-0.5 6.5s1 4 1 5.5-1.5 2.5-4 2.5-5-1-5-1" />
        <path d="M8 3C5.5 3 4 4.5 4 7c0 2 1 5 1 7s-.5 4 .5 5.5" />
        <path d="M9 8c.5 2 1.5 5 1 8" />
      </svg>
    );
  }
  if (key.includes('docker')) {
    return (
      <svg {...common}>
        <rect x="3" y="10" width="3" height="3" />
        <rect x="7" y="10" width="3" height="3" />
        <rect x="11" y="10" width="3" height="3" />
        <rect x="7" y="6" width="3" height="3" />
        <rect x="11" y="6" width="3" height="3" />
        <path d="M2 13h16c0 3-2 5-5 5H7c-3 0-5-2-5-5Z" />
        <path d="M17 8c1-1 2-1 3 0" />
      </svg>
    );
  }
  if (key.includes('nest')) {
    return (
      <svg {...common}>
        <path d="M12 2 3 7v10l9 5 9-5V7z" />
        <path d="M8 9c1.5-2 4-2 5.5 0s1.5 5 0 7" />
        <circle cx="8" cy="9" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (key.includes('node')) {
    return (
      <svg {...common}>
        <path d="M12 2 3 7v10l9 5 9-5V7z" />
        <path d="M9 10v5c0 1 1 2 2 2M13 9h2c1 0 2 1 2 2s-1 2-2 2h-1" />
      </svg>
    );
  }
  if (key.includes('typescript') || key === 'ts') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M8 12h6M11 12v6" />
      </svg>
    );
  }
  if (key.includes('javascript') || key === 'js') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M10 10v5c0 1-.5 2-2 2" />
      </svg>
    );
  }
  if (key.includes('sql server') || key.includes('t-sql') || key === 'sql') {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="2.5" />
        <path d="M4 5v14c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
        <path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
      </svg>
    );
  }
  if (key.includes('redis')) {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="6" rx="9" ry="2.5" />
        <path d="M3 6v12c0 1.4 4 2.5 9 2.5s9-1.1 9-2.5V6" />
      </svg>
    );
  }
  if (key.includes('python')) {
    return (
      <svg {...common}>
        <path d="M12 3c-3 0-5 1-5 3v3h5" />
        <path d="M12 3c3 0 5 1 5 3v6c0 2-2 3-5 3H9c-2 0-4 1-4 3v3" />
        <path d="M12 21c3 0 5-1 5-3v-3h-5" />
      </svg>
    );
  }
  if (key.includes('prisma')) {
    return (
      <svg {...common}>
        <path d="M11 2 4 18c-.4 1 .2 2 1.2 2l11 1c1 0 1.6-1 1.2-2L12 2c-.3-.6-.7-.6-1 0Z" />
      </svg>
    );
  }
  if (key.includes('vue')) {
    return (
      <svg {...common}>
        <path d="M2 4h4l6 10 6-10h4L12 22z" />
      </svg>
    );
  }
  if (key.includes('angular')) {
    return (
      <svg {...common}>
        <path d="M12 2 3 5l2 14 7 3 7-3 2-14z" />
        <path d="M12 5 6 19M12 5l6 14" />
      </svg>
    );
  }
  if (key.includes('tailwind')) {
    return (
      <svg {...common}>
        <path d="M6 10c2-3 4.5-4 7-3 1.5.6 2 2 3.5 2.5S19 9 20 8c-1 4-3 5.5-5.5 4.5-1.5-.6-2-2-3.5-2.5S7.5 10.5 6 12" />
      </svg>
    );
  }
  if (key.includes('bootstrap')) {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M9 7v10h4c2 0 3-1 3-2.5s-1-2.5-2.5-2.5H9" />
      </svg>
    );
  }
  if (key.includes('git')) {
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="12" r="2" />
        <path d="M6 8v8M8 6c4 0 8 2 8 6" />
      </svg>
    );
  }
  if (key.includes('actions') || key.includes('ci/cd') || key.includes('cicd')) {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8v8l6-4z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (key.includes('playwright') || key.includes('jest') || key.includes('vitest')) {
    return (
      <svg {...common}>
        <path d="M9 3h6l-1 6h-4z" />
        <path d="M10 9v5c0 2-2 2-2 4v3h8v-3c0-2-2-2-2-4V9" />
      </svg>
    );
  }
  if (key.includes('digitalocean') || key.includes('cloud')) {
    return (
      <svg {...common}>
        <path d="M7 19c-3 0-5-2-5-5s2-5 5-5c.5-3 3-5 6-5s6 2 6 5c3 0 5 2 5 5s-2 5-5 5" />
      </svg>
    );
  }
  if (key.includes('owasp') || key.includes('security') || key.includes('jwt') || key.includes('oauth')) {
    return (
      <svg {...common}>
        <path d="M12 2 4 5v7c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  if (key.includes('claude') || key.includes('gemini') || key.includes('ai') || key.includes('mcp')) {
    return (
      <svg {...common}>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (key.includes('entity') || key.includes('orm') || key.includes('framework')) {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="8" height="6" rx="1" />
        <rect x="13" y="4" width="8" height="6" rx="1" />
        <rect x="8" y="14" width="8" height="6" rx="1" />
        <path d="M7 10v2M17 10v2M12 12v2" />
      </svg>
    );
  }
  if (key.includes('html')) {
    return (
      <svg {...common}>
        <path d="M4 3h16l-1.5 17L12 22l-6.5-2z" />
        <path d="M8 8h8l-.5 3H9l.3 3h6l-.5 4-3 1-3-1-.2-2" />
      </svg>
    );
  }
  if (key.includes('rest') || key.includes('api') || key.includes('swagger')) {
    return (
      <svg {...common}>
        <rect x="3" y="6" width="18" height="4" rx="1" />
        <rect x="3" y="14" width="18" height="4" rx="1" />
        <circle cx="6" cy="8" r=".8" fill="currentColor" stroke="none" />
        <circle cx="6" cy="16" r=".8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (key.includes('microservice') || key.includes('event') || key.includes('rbac')) {
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M8 7l2 3M16 7l-2 3M8 17l2-3M16 17l-2-3" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="8" opacity="0.4" />
    </svg>
  );
}
