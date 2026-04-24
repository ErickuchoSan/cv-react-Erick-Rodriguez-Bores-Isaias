// ═══ Tech icons — monochrome SVGs using currentColor ═════════════════════
// Each icon is a simplified vector glyph of the tech logo. They inherit
// currentColor so they recolor with the theme automatically.

const TechIcon = ({ name, size = 20 }) => {
  const key = (name || '').toLowerCase();
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

  // .NET / .NET Core / C#
  if (key.includes('.net') || key.includes('dotnet') || key === 'c#' || key.startsWith('c# ')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M3 6h18M3 12h18M3 18h18" opacity="0" />
        <path d="M5 7v10M5 7l6 10M11 7v10" />
        <path d="M14 7v10M14 12h5M17 7h2M17 17h2" />
      </svg>
    );
  }
  // React / Next
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
  // PostgreSQL
  if (key.includes('postgres') || key.includes('postgresql')) {
    return (
      <svg {...common}>
        <path d="M16 3c2 0 3.5 1.5 3.5 3.5 0 1.5-0.5 4-0.5 6.5s1 4 1 5.5-1.5 2.5-4 2.5-5-1-5-1" />
        <path d="M8 3C5.5 3 4 4.5 4 7c0 2 1 5 1 7s-.5 4 .5 5.5" />
        <path d="M9 8c.5 2 1.5 5 1 8" />
        <path d="M12.5 8.5c.5 2 0 4 .5 6" />
      </svg>
    );
  }
  // Docker
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
  // NestJS
  if (key.includes('nest')) {
    return (
      <svg {...common}>
        <path d="M12 2 3 7v10l9 5 9-5V7z" />
        <path d="M8 9c1.5-2 4-2 5.5 0s1.5 5 0 7" />
        <circle cx="8" cy="9" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  // Node
  if (key.includes('node')) {
    return (
      <svg {...common}>
        <path d="M12 2 3 7v10l9 5 9-5V7z" />
        <path d="M9 10v5c0 1 1 2 2 2M13 9h2c1 0 2 1 2 2s-1 2-2 2h-1" />
      </svg>
    );
  }
  // TypeScript
  if (key.includes('typescript') || key === 'ts' || key.startsWith('typescript')) {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M8 12h6M11 12v6" />
        <path d="M17 13c0-1 1-1.5 2-1.5s2 .5 2 1.5-1 1.3-2 1.5-2 .5-2 1.5 1 1.5 2 1.5 2-.5 2-1.5" />
      </svg>
    );
  }
  // JavaScript
  if (key.includes('javascript') || key === 'js' || key.includes('es2024') || key.includes('es202')) {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M10 10v5c0 1-.5 2-2 2M14 15c0 1 1 2 2.5 2s2.5-.8 2.5-2c0-2-4-1.5-4-3.5 0-1 .8-1.5 2-1.5s2 .5 2 1.5" />
      </svg>
    );
  }
  // SQL Server / T-SQL / SQL
  if (key.includes('sql server') || key.includes('t-sql') || key === 'sql' || key.startsWith('sql ')) {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="2.5" />
        <path d="M4 5v14c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
        <path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
      </svg>
    );
  }
  // Redis
  if (key.includes('redis')) {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="6" rx="9" ry="2.5" />
        <path d="M3 6v4c0 1.4 4 2.5 9 2.5s9-1.1 9-2.5V6" />
        <path d="M3 12v4c0 1.4 4 2.5 9 2.5s9-1.1 9-2.5v-4" />
      </svg>
    );
  }
  // Python
  if (key.includes('python')) {
    return (
      <svg {...common}>
        <path d="M12 3c-3 0-5 1-5 3v3h5" />
        <path d="M12 3c3 0 5 1 5 3v6c0 2-2 3-5 3H9c-2 0-4 1-4 3v3" />
        <path d="M12 21c3 0 5-1 5-3v-3h-5" />
        <path d="M12 21c-3 0-5-1-5-3v-6c0-2 2-3 5-3h3c2 0 4-1 4-3V3" />
        <circle cx="9" cy="6" r=".5" fill="currentColor" stroke="none" />
        <circle cx="15" cy="18" r=".5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  // Prisma
  if (key.includes('prisma')) {
    return (
      <svg {...common}>
        <path d="M11 2 4 18c-.4 1 .2 2 1.2 2l11 1c1 0 1.6-1 1.2-2L12 2c-.3-.6-.7-.6-1 0Z" />
        <path d="M11 3 7 17l8 1" />
      </svg>
    );
  }
  // Vue
  if (key.includes('vue')) {
    return (
      <svg {...common}>
        <path d="M2 4h4l6 10 6-10h4L12 22z" />
        <path d="M7 4h3l2 3 2-3h3" />
      </svg>
    );
  }
  // Angular
  if (key.includes('angular')) {
    return (
      <svg {...common}>
        <path d="M12 2 3 5l2 14 7 3 7-3 2-14z" />
        <path d="M12 5 6 19M12 5l6 14M8 15h8" />
      </svg>
    );
  }
  // Tailwind
  if (key.includes('tailwind')) {
    return (
      <svg {...common}>
        <path d="M6 10c2-3 4.5-4 7-3 1.5.6 2 2 3.5 2.5S19 9 20 8c-1 4-3 5.5-5.5 4.5-1.5-.6-2-2-3.5-2.5S7.5 10.5 6 12" />
        <path d="M4 18c2-3 4.5-4 7-3 1.5.6 2 2 3.5 2.5S17.5 17 18.5 16" />
      </svg>
    );
  }
  // Bootstrap
  if (key.includes('bootstrap')) {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M9 7v10h4c2 0 3-1 3-2.5s-1-2.5-2.5-2.5H9M9 12h3.5c1.5 0 2.5-1 2.5-2.5S14 7 12.5 7" />
      </svg>
    );
  }
  // HTML
  if (key === 'html' || key.startsWith('html ') || key.includes('html /')) {
    return (
      <svg {...common}>
        <path d="M4 3h16l-1.5 17L12 22l-6.5-2z" />
        <path d="M8 8h8l-.5 3H9l.3 3h6l-.5 4-3 1-3-1-.2-2" />
      </svg>
    );
  }
  // CSS
  if (key === 'css' || key.startsWith('css ')) {
    return (
      <svg {...common}>
        <path d="M4 3h16l-1.5 17L12 22l-6.5-2z" />
        <path d="M8 8h8l-.5 3H9l.3 3h6l-.5 4-3 1-3-1-.2-2" />
      </svg>
    );
  }
  // LINQ / Lambda
  if (key.includes('lambda') || key.includes('linq')) {
    return (
      <svg {...common}>
        <path d="M6 4h3l6 16M18 4 8 20" />
      </svg>
    );
  }
  // Entity Framework / ORM
  if (key.includes('entity') || key.includes('orm')) {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="8" height="6" rx="1" />
        <rect x="13" y="4" width="8" height="6" rx="1" />
        <rect x="8" y="14" width="8" height="6" rx="1" />
        <path d="M7 10v2M17 10v2M12 12v2" />
      </svg>
    );
  }
  // REST / API / Swagger
  if (key.includes('rest') || key.includes('api') || key.includes('swagger') || key.includes('openapi')) {
    return (
      <svg {...common}>
        <rect x="3" y="6" width="18" height="4" rx="1" />
        <rect x="3" y="14" width="18" height="4" rx="1" />
        <circle cx="6" cy="8" r=".8" fill="currentColor" stroke="none" />
        <circle cx="6" cy="16" r=".8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  // Git / GitHub
  if (key.includes('git') || key.includes('github')) {
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="12" r="2" />
        <path d="M6 8v8M8 6c4 0 8 2 8 6" />
      </svg>
    );
  }
  // CI/CD / GitHub Actions
  if (key.includes('actions') || key.includes('ci/cd') || key.includes('ci ') || key.includes('cicd')) {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8v8l6-4z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  // Playwright / Testing / Jest / Vitest
  if (key.includes('playwright') || key.includes('jest') || key.includes('vitest') || key.includes('test')) {
    return (
      <svg {...common}>
        <path d="M9 3h6l-1 6h-4z" />
        <path d="M10 9v5c0 2-2 2-2 4v3h8v-3c0-2-2-2-2-4V9" />
        <path d="M11 14c.5-1 1.5-1 2 0" />
      </svg>
    );
  }
  // Prometheus / Monitoring / Pino / logs
  if (key.includes('prometheus') || key.includes('pino') || key.includes('log') || key.includes('metrics')) {
    return (
      <svg {...common}>
        <path d="M3 18h3l3-8 3 12 3-8 3 4h3" />
      </svg>
    );
  }
  // DigitalOcean / VPS / Cloud
  if (key.includes('digitalocean') || key.includes('vps') || key.includes('cloud')) {
    return (
      <svg {...common}>
        <path d="M7 19c-3 0-5-2-5-5s2-5 5-5c.5-3 3-5 6-5s6 2 6 5c3 0 5 2 5 5s-2 5-5 5" />
      </svg>
    );
  }
  // OWASP / Security
  if (key.includes('owasp') || key.includes('security') || key.includes('secure')) {
    return (
      <svg {...common}>
        <path d="M12 2 4 5v7c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  // SCRUM / Agile
  if (key.includes('scrum') || key.includes('agile')) {
    return (
      <svg {...common}>
        <path d="M12 3a9 9 0 1 1-9 9" />
        <path d="M12 3v3M12 3l3 3" />
      </svg>
    );
  }
  // Cron / Jobs / Scheduled
  if (key.includes('cron') || key.includes('scheduled') || key.includes('job')) {
    return (
      <svg {...common}>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2M9 3h6" />
      </svg>
    );
  }
  // AI / Claude / Gemini / MCP / Agents
  if (key.includes('claude') || key.includes('gemini') || key.includes('ai') || key.includes('mcp') || key.includes('anthropic') || key.includes('agent')) {
    return (
      <svg {...common}>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  // SonarCloud / Quality
  if (key.includes('sonar') || key.includes('codecov') || key.includes('lighthouse') || key.includes('quality')) {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 9 9M12 8a4 4 0 0 1 4 4" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  // Query / TanStack / Forms / Zod / Framer
  if (key.includes('tanstack') || key.includes('query') || key.includes('hook form') || key.includes('zod') || key.includes('framer')) {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h10M7 13h6M7 17h8" />
      </svg>
    );
  }
  // Microservices / Event-Driven
  if (key.includes('microservice') || key.includes('event')) {
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
  // Stored procedures / procedures
  if (key.includes('stored') || key.includes('procedure')) {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h4M7 13h8M7 17h6" />
        <path d="M15 8l2 2-2 2" />
      </svg>
    );
  }

  // Fallback: small dot
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="8" opacity="0.4" />
    </svg>
  );
};

window.TechIcon = TechIcon;
