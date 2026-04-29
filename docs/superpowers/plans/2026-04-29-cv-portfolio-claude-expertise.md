# CV v3 Portfolio Showcase + Claude Code Expertise — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert v3 site into a company-attracting portfolio with 3 generic project case studies (modal-based) + a "Claude Code Engineering" specialty section + dual-line Hero tagline, without breaking the editorial style.

**Architecture:** Extend existing v3 module (`src/v3/`). Reuse `translations.ts` for ES/EN. Preserve current split-pane Projects layout, add lazy-loaded portal modal for deep case study. New `ClaudeEngineering` section between Skills and Projects. All theme-aware via existing CSS variables (`var(--accent)`, `var(--fg)`, etc.).

**Tech Stack:** React 19 + Vite 7 + TypeScript 5.9, inline styles + CSS variables (no Tailwind utilities), `react-icons`, `createPortal` for modal. No test framework (verification via `npm run build` + `npm run lint` + manual UI check).

**Verification doctrine:** No test framework exists. Each task verifies via:
- `npm run lint` passes (no errors)
- `npm run build` passes (TS + Vite build clean)
- Manual smoke test in `npm run dev` (browser visual check)

**Spec:** `docs/superpowers/specs/2026-04-29-cv-portfolio-claude-expertise-design.md`

**Related conventions:**
- Existing color tokens: `#b61722` (editorial red), `#f97316` (orange), `#ff5b2e`, `#22d3ee`, `#a78bfa` (project accent colors)
- Generic project mapping: `platform-b2b` (Align), `pos-cloud` (Punto Venta), `cms-3d` (mdg-web). SiD excluded.

---

## File Map

**Create:**
- `src/v3/projects/CaseStudyData.ts` — typed case study data + accessor (no JSX)
- `src/v3/projects/ProjectModal.tsx` — portal + backdrop + ESC + scroll lock
- `src/v3/projects/CaseStudyContent.tsx` — modal content (8 sections)
- `src/v3/projects/CaseStudySection.tsx` — primitive `// title` + slot
- `src/v3/sections/ClaudeEngineering.tsx` — new section component

**Modify:**
- `src/i18n/translations.ts` — new keys for hero subtitles, claudeEngineering, projects case studies (ES+EN)
- `src/v3/data.ts` — extend `ProjectV3` interface; rename `name`→generic; expose case study lookup
- `src/v3/Hero.tsx` — add dual-line subtitle below role
- `src/v3/sections.tsx` — augment `ProjectsV3`: badge + CTA → modal trigger
- `src/v3/AppV3.tsx` — import + render `ClaudeEngineeringV3` between `SkillsV3` and `ProjectsV3`
- `CLAUDE.md` — note new sections + components in project structure
- `memory/decisions.md` (or create) — ADR for case study modal approach

---

## Task 1: Add i18n keys for Hero subtitles

**Files:**
- Modify: `src/i18n/translations.ts`

- [ ] **Step 1: Locate the `hero` block in `translations.ts`**

Search for `hero:` and identify the existing structure under both `es` and `en` roots.

- [ ] **Step 2: Add `subtitle1` and `subtitle2` keys under `hero` in both languages**

In ES `hero` object, add:
```ts
subtitle1: 'Full Stack Developer · .NET & React',
subtitle2: 'Claude Code Power User',
```

In EN `hero` object, add:
```ts
subtitle1: 'Full Stack Developer · .NET & React',
subtitle2: 'Claude Code Power User',
```

(Both languages use the same string — they're tech labels, not prose.)

- [ ] **Step 3: Verify lint + build**

Run: `npm run lint && npm run build`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/i18n/translations.ts
git commit -m "feat(i18n): add hero subtitle1 + subtitle2 keys"
```

---

## Task 2: Render dual-line subtitle in Hero

**Files:**
- Modify: `src/v3/Hero.tsx`

- [ ] **Step 1: Read current Hero.tsx structure around the role rendering**

Open `src/v3/Hero.tsx` and locate the section near line 250-260 (`<span>{D.role} · México</span>`) and the name block near line 261 (`<MaskReveal delay={200}>Erick</MaskReveal>`).

- [ ] **Step 2: Pull subtitles from translations**

Inside the Hero component (where `lang` is available), add:
```ts
import { translations } from '../i18n/translations';
// inside component:
const t = translations[lang].hero;
```
Use `t.subtitle1` and `t.subtitle2`.

- [ ] **Step 3: Insert dual-line subtitle below the name block**

Find the JSX area where the name renders (around line 261-280) and the role/text paragraph follows. Insert immediately after the name:

```tsx
<div style={{
  display: 'flex', flexDirection: 'column', gap: 4,
  marginTop: 18, marginBottom: 24,
}}>
  <div style={{
    fontFamily: 'var(--font-mono)',
    fontSize: 'clamp(13px, 1.1vw, 15px)',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: 'var(--accent)',
    fontWeight: 500,
  }}>
    {t.subtitle1}
  </div>
  <div style={{
    fontFamily: 'var(--font-mono)',
    fontSize: 'clamp(11px, 0.95vw, 13px)',
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: 'var(--fg-muted)',
    fontWeight: 400,
  }}>
    {t.subtitle2}
  </div>
</div>
```

Place this AFTER the `<MaskReveal delay={200}>Erick</MaskReveal>` block (and the second name part if any) and BEFORE the role paragraph that starts with "Desarrollador Full Stack con...".

- [ ] **Step 4: Manual smoke test**

Run: `npm run dev`
Expected: Hero shows name → red mono "FULL STACK DEVELOPER · .NET & REACT" → muted mono "CLAUDE CODE POWER USER" → role paragraph. Switch language ES↔EN, both render same strings (tech labels).

- [ ] **Step 5: Build + lint**

Run: `npm run lint && npm run build`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/v3/Hero.tsx
git commit -m "feat(hero): dual-line subtitle (Full Stack + Claude Code Power User)"
```

---

## Task 3: Extend translations with project case study data + Claude Engineering section

**Files:**
- Modify: `src/i18n/translations.ts`

- [ ] **Step 1: Locate `projects.items` block in `translations.ts` (both ES and EN)**

Find the existing 3 items. They currently have `title` and `description`. We expand each to include case study fields.

- [ ] **Step 2: Replace existing 3 project items with generic-named, full case study data (ES)**

Under `es.projects.items`, replace the 3 items with:

```ts
items: [
  // 0: platform-b2b (was Align)
  {
    title: 'Plataforma B2B/B2C de Gestión de Proyectos',
    description: 'Plataforma cloud monorepo con autenticación diferenciada admins/clientes, almacenamiento S3, billing y observabilidad.',
    tagline: 'Cloud · Monorepo · Auth Dual',
    problem: 'Empresas de diseño y consultoría necesitaban un único punto de control para entregables, archivos por cliente, facturación y comunicación, sin sacrificar seguridad ni separar permisos entre staff interno y clientes externos.',
    solution: [
      'Diseñé arquitectura monorepo con NestJS 11 (API) + Next.js 16 (Web) y pnpm workspaces.',
      'Implementé sistema de autenticación dual: JWT + refresh rotation para administradores, OTP bcrypt para clientes.',
      'Construí pipeline CI/CD con GitHub Actions + SonarCloud + Codecov + Lighthouse.',
      'Integré DigitalOcean Spaces (S3) con presigned URLs y validación por magic numbers.',
      'Levanté observabilidad con Prometheus + Pino y backups automáticos en Docker.',
    ],
    architecturePatterns: ['Clean Architecture', 'DDD', 'SOLID', 'Modular Monorepo', 'Repository Pattern', 'Domain Events'],
    highlights: [
      { title: 'Autenticación', summary: 'JWT + refresh rotation (admins) y OTP bcrypt (clientes). CSRF HMAC-SHA256, Helmet (CSP/HSTS), rate limiting y account lockout.' },
      { title: 'Storage', summary: 'DigitalOcean Spaces con presigned URLs, validación por magic numbers y versionado de archivos.' },
      { title: 'CI/CD', summary: 'GitHub Actions multi-stage con SonarCloud, Codecov, Lighthouse y Playwright E2E.' },
    ],
    stack: {
      backend: ['NestJS 11', 'Prisma', 'PostgreSQL 15', 'Redis', 'TypeScript 5'],
      frontend: ['Next.js 16', 'React 19', 'TanStack Query', 'Tailwind v4', 'Zod'],
      infra: ['Docker', 'DigitalOcean', 'GitHub Actions', 'Nginx'],
      testing: ['Jest', 'Vitest', 'Playwright'],
    },
    metrics: [
      { value: '57', label: 'Suites de tests' },
      { value: '2', label: 'Flujos de auth' },
      { value: '1', label: 'Monorepo con 2 apps' },
    ],
    role: 'Solo developer · End-to-end · Diseño, arquitectura, implementación, deployment y mantenimiento.',
    demoStatus: 'in-construction',
  },
  // 1: pos-cloud (was Punto Venta)
  {
    title: 'Sistema POS Multi-Sucursal Cloud',
    description: 'Plataforma POS multi-tenant con gestión de inventarios, ventas y reportes en tiempo real para múltiples sucursales.',
    tagline: 'POS · Multi-tenant · Realtime',
    problem: 'Negocios con varias sucursales operaban con sistemas POS desconectados — inventarios desincronizados, reportes manuales y sin visibilidad consolidada de ventas en tiempo real.',
    solution: [
      'Diseñé arquitectura monorepo con apps separadas para terminal de venta, panel admin y reportería.',
      'Implementé sincronización de inventarios entre sucursales vía Supabase realtime.',
      'Construí flujos de venta offline-first con reconciliación al reconectar.',
      'Levanté pipeline E2E con Playwright para flujos críticos (cobro, devolución, corte de caja).',
      'Containericé todo el stack con Docker + Nginx + healthchecks.',
    ],
    architecturePatterns: ['Modular Monorepo', 'Multi-tenant', 'Offline-first', 'Event-driven sync', 'CQRS-light'],
    highlights: [
      { title: 'Multi-sucursal', summary: 'Aislamiento por tenant + sincronización en tiempo real de inventarios y ventas vía Supabase.' },
      { title: 'Offline-first', summary: 'Terminal opera sin conexión y reconcilia transacciones al recuperar red.' },
      { title: 'E2E Testing', summary: 'Playwright cubriendo cobros, devoluciones y cortes de caja con fixtures por tenant.' },
    ],
    stack: {
      backend: ['Node.js', 'Supabase', 'PostgreSQL', 'TypeScript'],
      frontend: ['React', 'Tailwind', 'Vite'],
      infra: ['Docker', 'Nginx', 'Husky', 'pnpm workspaces'],
      testing: ['Playwright', 'Vitest'],
    },
    metrics: [
      { value: '∞', label: 'Sucursales soportadas' },
      { value: 'RT', label: 'Sync en tiempo real' },
      { value: 'E2E', label: 'Cobertura crítica' },
    ],
    role: 'Solo developer · End-to-end · Arquitectura, implementación, testing y deployment.',
    demoStatus: 'in-construction',
  },
  // 2: cms-3d (was mdg-web)
  {
    title: 'Sitio Corporativo con CMS Headless + 3D Interactivo',
    description: 'Sitio corporativo de alto impacto visual con escena 3D interactiva, CMS headless y formularios validados.',
    tagline: 'Headless CMS · 3D · GSAP',
    problem: 'Marca buscaba un sitio que comunicara innovación con experiencia visual fuera del molde, pero manteniendo capacidad de edición de contenido por equipo no técnico y carga rápida en mobile.',
    solution: [
      'Diseñé arquitectura Next.js 15 con CMS headless Sanity para edición visual del contenido.',
      'Integré escena 3D interactiva con Spline + animaciones de scroll con GSAP.',
      'Construí formularios validados con React Hook Form + Zod, envío vía Resend.',
      'Optimicé bundle con dynamic imports para 3D y carga progresiva de assets.',
      'Levanté autenticación admin con Supabase para áreas privadas.',
    ],
    architecturePatterns: ['JAMstack', 'Headless CMS', 'Server Components', 'Progressive Enhancement'],
    highlights: [
      { title: '3D + Scroll', summary: 'Spline embebido con GSAP ScrollTrigger para storytelling visual sin sacrificar performance.' },
      { title: 'CMS Headless', summary: 'Sanity con Portable Text para que equipo no técnico edite secciones, autores y posts.' },
      { title: 'Forms + Email', summary: 'React Hook Form + Zod validation + Resend para entrega transaccional.' },
    ],
    stack: {
      backend: ['Sanity CMS', 'Supabase', 'Resend'],
      frontend: ['Next.js 15', 'React 19', 'GSAP', 'Spline 3D', 'TanStack Query', 'Tailwind'],
      infra: ['Vercel', 'Docker (dev)'],
      testing: ['Manual QA'],
    },
    metrics: [
      { value: '3D', label: 'Escena interactiva' },
      { value: 'CMS', label: 'Edición visual' },
      { value: 'A+', label: 'Lighthouse target' },
    ],
    role: 'Solo developer · End-to-end · Diseño técnico, integración 3D, CMS y deployment.',
    demoStatus: 'in-construction',
  },
],
```

- [ ] **Step 3: Translate the same 3 items to EN under `en.projects.items`**

Mirror the structure with English strings. Use the same shape and key names. Tech names stay identical.

```ts
items: [
  {
    title: 'B2B/B2C Project & Asset Management Platform',
    description: 'Cloud monorepo platform with differentiated admin/client auth, S3 storage, billing and observability.',
    tagline: 'Cloud · Monorepo · Dual Auth',
    problem: 'Design and consulting firms needed a single control point for deliverables, per-client files, billing and communication — without sacrificing security or blending staff and client permissions.',
    solution: [
      'Designed monorepo architecture with NestJS 11 (API) + Next.js 16 (Web) and pnpm workspaces.',
      'Implemented dual auth: JWT + refresh rotation for admins, OTP bcrypt for clients.',
      'Built CI/CD pipeline with GitHub Actions + SonarCloud + Codecov + Lighthouse.',
      'Integrated DigitalOcean Spaces (S3) with presigned URLs and magic-number validation.',
      'Set up observability with Prometheus + Pino and automated Docker backups.',
    ],
    architecturePatterns: ['Clean Architecture', 'DDD', 'SOLID', 'Modular Monorepo', 'Repository Pattern', 'Domain Events'],
    highlights: [
      { title: 'Authentication', summary: 'JWT + refresh rotation (admins) and OTP bcrypt (clients). CSRF HMAC-SHA256, Helmet (CSP/HSTS), rate limiting and account lockout.' },
      { title: 'Storage', summary: 'DigitalOcean Spaces with presigned URLs, magic-number validation and file versioning.' },
      { title: 'CI/CD', summary: 'Multi-stage GitHub Actions with SonarCloud, Codecov, Lighthouse and Playwright E2E.' },
    ],
    stack: { /* same as ES */ },
    metrics: [
      { value: '57', label: 'Test suites' },
      { value: '2', label: 'Auth flows' },
      { value: '1', label: 'Monorepo with 2 apps' },
    ],
    role: 'Solo developer · End-to-end · Design, architecture, implementation, deployment and maintenance.',
    demoStatus: 'in-construction',
  },
  // 2 more items mirroring ES with EN strings — same shape
],
```

(Mirror the other 2 items the same way: `pos-cloud` and `cms-3d` with English copy.)

- [ ] **Step 4: Add `claudeEngineering` namespace under both `es` and `en`**

Add as a sibling of `projects` (or wherever sections live in `translations.ts`):

ES:
```ts
claudeEngineering: {
  hint: 'Especialización · AI-assisted engineering',
  num: '06',
  label: 'Claude Code Engineering',
  title1: 'Dominio del ecosistema',
  title2: 'de ingeniería AI-assisted.',
  paragraph: 'Diseño y operación de pipelines de desarrollo asistido por Claude Code: skills custom, agents especializados, integración MCP, automatización por hooks, sistemas de memoria persistente y orquestación multi-agente para acelerar entrega sin perder calidad ni control.',
  capabilities: [
    { title: 'Skill Engineering', desc: 'Skills reutilizables con eval loops y métricas.' },
    { title: 'Custom Agents', desc: 'Agents especializados para review, archivo y research.' },
    { title: 'MCP Integration', desc: 'Conexión con servidores MCP externos y propios.' },
    { title: 'Hook Automation', desc: 'Hooks PreTool/PostTool para validación y compresión.' },
    { title: 'Memory Systems', desc: 'Memoria persistente cross-session multi-capa.' },
    { title: 'Plugin Ecosystem', desc: 'Plugins integrados con flujos productivos completos.' },
    { title: 'Multi-LLM Orchestration', desc: 'Orquestación de Claude, Codex y Gemini en paralelo.' },
    { title: 'Eval-driven Optimization', desc: 'Optimización basada en métricas de rendimiento.' },
  ],
  stat: '6 SKILLS · 3 AGENTS · 4 PLUGINS · MULTI-LLM',
},
```

EN: mirror with English copy.

- [ ] **Step 5: Lint + build**

Run: `npm run lint && npm run build`
Expected: PASS (TS may flag missing fields in `data.ts` consumer — fix in Task 4).

- [ ] **Step 6: Commit**

```bash
git add src/i18n/translations.ts
git commit -m "feat(i18n): add case-study fields per project + claudeEngineering section (ES/EN)"
```

---

## Task 4: Extend `ProjectV3` interface + map new fields in `data.ts`

**Files:**
- Modify: `src/v3/data.ts`

- [ ] **Step 1: Extend the `ProjectV3` interface**

Replace the current interface (lines 17-25) with:

```ts
export type DemoStatus = 'in-construction' | 'live' | 'private';

export interface CaseStudyHighlight {
  title: string;
  summary: string;
}

export interface CaseStudyStack {
  backend?: string[];
  frontend?: string[];
  infra?: string[];
  testing?: string[];
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface ProjectV3 {
  id: 'platform-b2b' | 'pos-cloud' | 'cms-3d';
  name: string;
  kind: string;
  year: string;
  icon: string;
  color: string;
  desc: string;
  tags: string[];
  // case study extension
  tagline: string;
  problem: string;
  solution: string[];
  architecturePatterns: string[];
  highlights: CaseStudyHighlight[];
  stack: CaseStudyStack;
  metrics: CaseStudyMetric[];
  role: string;
  demoStatus: DemoStatus;
  demoUrl?: string;
}
```

- [ ] **Step 2: Update generic name arrays**

Replace `PROJECT_KINDS` and `PROJECT_KINDS_EN` (lines 63-64) with values that align with new generic names:

```ts
const PROJECT_KINDS = ['Plataforma B2B/B2C', 'POS Multi-Sucursal', 'CMS + 3D Interactivo'];
const PROJECT_KINDS_EN = ['B2B/B2C Platform', 'Multi-Branch POS', 'Headless CMS + 3D'];
```

Replace `PROJECT_YEARS`, `PROJECT_TAGS`:

```ts
const PROJECT_YEARS = ['2025—', '2024—', '2024'];
const PROJECT_IDS = ['platform-b2b', 'pos-cloud', 'cms-3d'] as const;
```

(Keep `PROJECT_COLORS` and `PROJECT_ICONS` as-is.)

Remove `PROJECT_TAGS` constant — tags now derive from `stack` (see Step 3).

- [ ] **Step 3: Map new translation fields into `projects` array**

Replace the `projects: ProjectV3[] = ...` block (around line 145) with:

```ts
const projects: ProjectV3[] = t.projects.items.map((p, i) => {
  const stackFlat = [
    ...(p.stack?.backend ?? []),
    ...(p.stack?.frontend ?? []),
    ...(p.stack?.infra ?? []),
    ...(p.stack?.testing ?? []),
  ].slice(0, 8); // up to 8 pills for the side card
  return {
    id: PROJECT_IDS[i],
    name: p.title,
    kind: (lang === 'es' ? PROJECT_KINDS : PROJECT_KINDS_EN)[i] ?? '',
    year: PROJECT_YEARS[i] ?? '',
    icon: PROJECT_ICONS[i] ?? '◆',
    color: PROJECT_COLORS[i] ?? 'var(--accent)',
    desc: p.description,
    tags: stackFlat,
    tagline: p.tagline ?? '',
    problem: p.problem ?? '',
    solution: p.solution ?? [],
    architecturePatterns: p.architecturePatterns ?? [],
    highlights: p.highlights ?? [],
    stack: p.stack ?? {},
    metrics: p.metrics ?? [],
    role: p.role ?? '',
    demoStatus: (p.demoStatus as DemoStatus) ?? 'in-construction',
  };
});
```

- [ ] **Step 4: If TS complains about missing fields on `t.projects.items`, add the type extension to translations**

If `translations.ts` is strictly typed, ensure the `projects.items` type allows the new fields (or use `as any` cast as last resort — preferred fix is to widen the type union).

- [ ] **Step 5: Lint + build**

Run: `npm run lint && npm run build`
Expected: PASS. If existing consumers of `tags` rely on hardcoded arrays, verify the derived `stackFlat` produces non-empty arrays (3 projects × ≥3 stack items).

- [ ] **Step 6: Commit**

```bash
git add src/v3/data.ts
git commit -m "feat(data): extend ProjectV3 with case study fields + generic kinds"
```

---

## Task 5: Build `CaseStudySection` primitive

**Files:**
- Create: `src/v3/projects/CaseStudySection.tsx`

- [ ] **Step 1: Create folder + component**

Create `src/v3/projects/CaseStudySection.tsx`:

```tsx
import { ReactNode } from 'react';

interface Props {
  prefix: string;        // e.g. "problema"
  children: ReactNode;
  accent?: string;       // override accent color (defaults to var(--accent))
}

export function CaseStudySection({ prefix, children, accent }: Props) {
  return (
    <section style={{
      padding: '32px 0',
      borderTop: '1px solid var(--line)',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: 1.6,
        textTransform: 'uppercase',
        color: accent ?? 'var(--accent)',
        marginBottom: 16,
      }}>
        // {prefix}
      </div>
      <div>{children}</div>
    </section>
  );
}
```

- [ ] **Step 2: Lint + build**

Run: `npm run lint && npm run build`
Expected: PASS (component is unused so no impact yet).

- [ ] **Step 3: Commit**

```bash
git add src/v3/projects/CaseStudySection.tsx
git commit -m "feat(projects): add CaseStudySection primitive"
```

---

## Task 6: Build `CaseStudyContent` (the 8 sections of the modal)

**Files:**
- Create: `src/v3/projects/CaseStudyContent.tsx`

- [ ] **Step 1: Create the content component**

```tsx
import type { ProjectV3 } from '../data';
import { CaseStudySection } from './CaseStudySection';

interface Props {
  project: ProjectV3;
  lang: 'es' | 'en';
}

const COPY = {
  es: {
    problem: 'problema', solution: 'solución', architecture: 'arquitectura',
    stack: 'stack', metrics: 'métricas', role: 'mi rol', demo: 'demo',
    demoMsg: 'Demo interactiva próximamente. Estoy preparando una versión genérica navegable para mostrar el flujo completo.',
    badge: 'Demo en construcción',
    backend: 'Backend', frontend: 'Frontend', infra: 'Infra', testing: 'Testing',
  },
  en: {
    problem: 'problem', solution: 'solution', architecture: 'architecture',
    stack: 'stack', metrics: 'metrics', role: 'my role', demo: 'demo',
    demoMsg: 'Interactive demo coming soon. Preparing a generic navigable version to showcase the full flow.',
    badge: 'Demo in construction',
    backend: 'Backend', frontend: 'Frontend', infra: 'Infra', testing: 'Testing',
  },
} as const;

export function CaseStudyContent({ project: p, lang }: Props) {
  const c = COPY[lang];
  return (
    <div style={{ color: 'var(--fg)', maxWidth: 880, margin: '0 auto' }}>
      {/* Header */}
      <header style={{ paddingBottom: 24 }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.6,
          textTransform: 'uppercase', color: p.color, marginBottom: 14,
        }}>// case-study</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4.5vw, 56px)',
          lineHeight: 1.0, fontWeight: 300, fontStyle: 'italic',
          letterSpacing: '-0.03em', color: p.color, marginBottom: 14,
        }}>{p.name}</h2>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 12,
          letterSpacing: 1.4, color: 'var(--fg-muted)',
          textTransform: 'uppercase', marginBottom: 18,
        }}>{p.tagline}</div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 12px',
          background: 'var(--bg-2)',
          border: `1px dashed ${p.color}`,
          color: p.color,
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: 1.2, textTransform: 'uppercase',
        }}>
          🚧 {c.badge}
        </div>
      </header>

      {/* Problem */}
      <CaseStudySection prefix={c.problem} accent={p.color}>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg)' }}>{p.problem}</p>
      </CaseStudySection>

      {/* Solution */}
      <CaseStudySection prefix={c.solution} accent={p.color}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {p.solution.map((s, i) => (
            <li key={i} style={{
              display: 'flex', gap: 14, fontSize: 15.5, lineHeight: 1.6,
              paddingLeft: 8, borderLeft: `2px solid ${p.color}`,
            }}>
              <span style={{ color: p.color, fontFamily: 'var(--font-mono)', fontSize: 12 }}>→</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      {/* Architecture */}
      <CaseStudySection prefix={c.architecture} accent={p.color}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {p.architecturePatterns.map((pat, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              padding: '6px 12px', border: `1px solid ${p.color}`,
              color: p.color, letterSpacing: 0.6,
            }}>{pat}</span>
          ))}
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14,
        }}>
          {p.highlights.map((h, i) => (
            <div key={i} style={{
              padding: 18, background: 'var(--bg-2)',
              border: '1px solid var(--line)', borderTop: `2px solid ${p.color}`,
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.4,
                textTransform: 'uppercase', color: p.color, marginBottom: 8,
              }}>{h.title}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg)' }}>{h.summary}</div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Stack */}
      <CaseStudySection prefix={c.stack} accent={p.color}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
          {(['backend', 'frontend', 'infra', 'testing'] as const).map((cat) => {
            const items = p.stack[cat];
            if (!items || items.length === 0) return null;
            return (
              <div key={cat}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.4,
                  textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 10,
                }}>{c[cat]}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {items.map((it, i) => (
                    <span key={i} style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      padding: '4px 10px', background: 'var(--bg-2)',
                      border: '1px solid var(--line)', color: 'var(--fg)',
                    }}>{it}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CaseStudySection>

      {/* Metrics */}
      {p.metrics.length > 0 && (
        <CaseStudySection prefix={c.metrics} accent={p.color}>
          <div style={{
            display: 'grid', gridTemplateColumns: `repeat(${p.metrics.length}, 1fr)`,
            gap: 14, paddingTop: 8,
          }}>
            {p.metrics.map((m, i) => (
              <div key={i} style={{ textAlign: 'left' }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)',
                  fontWeight: 300, fontStyle: 'italic', color: p.color,
                  letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 6,
                }}>{m.value}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  letterSpacing: 1.4, textTransform: 'uppercase', color: 'var(--fg-muted)',
                }}>{m.label}</div>
              </div>
            ))}
          </div>
        </CaseStudySection>
      )}

      {/* Role */}
      <CaseStudySection prefix={c.role} accent={p.color}>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2vw, 22px)',
          fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5, color: 'var(--fg)',
        }}>{p.role}</p>
      </CaseStudySection>

      {/* Demo */}
      <CaseStudySection prefix={c.demo} accent={p.color}>
        {p.demoStatus === 'live' && p.demoUrl ? (
          <a href={p.demoUrl} target="_blank" rel="noreferrer" style={{
            display: 'inline-block', padding: '14px 28px',
            background: p.color, color: '#000',
            fontFamily: 'var(--font-mono)', fontSize: 12,
            letterSpacing: 1.4, textTransform: 'uppercase',
            textDecoration: 'none',
          }}>{lang === 'es' ? 'Abrir demo →' : 'Open demo →'}</a>
        ) : (
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--fg-muted)' }}>
            🚧 {c.demoMsg}
          </p>
        )}
      </CaseStudySection>
    </div>
  );
}
```

- [ ] **Step 2: Lint + build**

Run: `npm run lint && npm run build`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/v3/projects/CaseStudyContent.tsx
git commit -m "feat(projects): add CaseStudyContent with 8 sections"
```

---

## Task 7: Build `ProjectModal` (portal + a11y + lazy)

**Files:**
- Create: `src/v3/projects/ProjectModal.tsx`

- [ ] **Step 1: Create the modal wrapper**

```tsx
import { useEffect, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import type { ProjectV3 } from '../data';

const CaseStudyContent = lazy(() =>
  import('./CaseStudyContent').then(m => ({ default: m.CaseStudyContent }))
);

interface Props {
  project: ProjectV3 | null;
  lang: 'es' | 'en';
  onClose: () => void;
}

export function ProjectModal({ project, lang, onClose }: Props) {
  // ESC + scroll lock
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: 'clamp(20px, 5vw, 60px)',
        overflowY: 'auto',
        animation: 'cs-fade-in 200ms ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 980,
          background: 'var(--bg)', border: '1px solid var(--line-strong)',
          padding: 'clamp(24px, 4vw, 56px)',
          position: 'relative',
          animation: 'cs-scale-in 200ms cubic-bezier(.2,.8,.2,1)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 18, right: 18,
            width: 36, height: 36,
            background: 'transparent', border: '1px solid var(--line)',
            color: 'var(--fg)', cursor: 'pointer',
            fontSize: 18, lineHeight: 1,
          }}
        >×</button>
        <Suspense fallback={
          <div style={{
            padding: 80, textAlign: 'center',
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'var(--fg-muted)', letterSpacing: 1.4,
          }}>// loading case study…</div>
        }>
          <CaseStudyContent project={project} lang={lang} />
        </Suspense>
      </div>
      <style>{`
        @keyframes cs-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes cs-scale-in {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>,
    document.body
  );
}
```

- [ ] **Step 2: Lint + build**

Run: `npm run lint && npm run build`
Expected: PASS. Verify a separate chunk is created for `CaseStudyContent` (Vite output should list it).

- [ ] **Step 3: Commit**

```bash
git add src/v3/projects/ProjectModal.tsx
git commit -m "feat(projects): add ProjectModal portal with ESC + scroll lock + lazy content"
```

---

## Task 8: Wire modal into `ProjectsV3` with badge + CTA

**Files:**
- Modify: `src/v3/sections.tsx`

- [ ] **Step 1: Import the modal at top of `sections.tsx`**

Add near other imports:
```ts
import { ProjectModal } from './projects/ProjectModal';
```

- [ ] **Step 2: Add `openId` state in `ProjectsV3`**

Inside `ProjectsV3` (around line 514-520), after `const [active, setActive] = useState(0);` add:
```ts
const [openId, setOpenId] = useState<string | null>(null);
const openProject = openId ? D.projects.find(p => p.id === openId) ?? null : null;
```

- [ ] **Step 3: Update preview pane to add badge + CTA**

In the preview pane block (currently around line 595-614, where `p.tags.map` renders pills), AFTER the tags row add:

```tsx
<div style={{
  marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center',
}}>
  <button
    onClick={() => setOpenId(p.id)}
    style={{
      padding: '12px 24px', cursor: 'pointer',
      background: p.color, color: '#000',
      fontFamily: 'var(--font-mono)', fontSize: 11,
      letterSpacing: 1.4, textTransform: 'uppercase',
      border: 'none',
    }}
  >
    {lang === 'es' ? 'Ver case study →' : 'View case study →'}
  </button>
  <span style={{
    padding: '8px 14px',
    fontFamily: 'var(--font-mono)', fontSize: 10,
    letterSpacing: 1.4, textTransform: 'uppercase',
    color: 'var(--fg-muted)',
    border: '1px dashed var(--line-strong)',
  }}>
    🚧 {lang === 'es' ? 'Demo en construcción' : 'Demo in construction'}
  </span>
</div>
```

- [ ] **Step 4: Render the modal at the bottom of the section JSX**

Just before the closing `</section>` of `ProjectsV3`, add:
```tsx
<ProjectModal project={openProject} lang={lang} onClose={() => setOpenId(null)} />
```

- [ ] **Step 5: Manual smoke test**

Run: `npm run dev`
Expected:
- Each project preview shows CTA "Ver case study →" + badge "Demo en construcción"
- Click CTA → modal opens with full case study
- ESC closes modal
- Click backdrop closes modal
- Click inside modal does NOT close
- Theme switch updates colors live (modal stays open)
- Body cannot scroll while modal open
- Mobile: modal occupies full viewport

- [ ] **Step 6: Lint + build**

Run: `npm run lint && npm run build`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/v3/sections.tsx
git commit -m "feat(projects): wire case study modal with CTA + demo badge"
```

---

## Task 9: Build `ClaudeEngineering` section component

**Files:**
- Create: `src/v3/sections/ClaudeEngineering.tsx`

- [ ] **Step 1: Create the section**

```tsx
import { Reveal, WordsMask } from '../primitives';
import { SectionHead, SectionTitle } from '../chrome';
import { translations } from '../../i18n/translations';

interface Props {
  lang: 'es' | 'en';
}

export function ClaudeEngineeringV3({ lang }: Props) {
  const t = translations[lang].claudeEngineering;

  return (
    <section id="claude-engineering" style={{
      padding: '180px 5vw', position: 'relative',
      background: 'var(--bg)',
    }}>
      <SectionHead num={t.num} label={t.label} hint={t.hint} />
      <SectionTitle>
        <WordsMask text={t.title1} step={60} />{' '}
        <em style={{ color: 'var(--accent)' }}>
          <WordsMask text={t.title2} italic step={60} delay={400} />
        </em>
      </SectionTitle>

      <Reveal delay={200}>
        <p style={{
          fontSize: 17, lineHeight: 1.7, color: 'var(--fg-muted)',
          maxWidth: 760, marginBottom: 60, marginTop: 24,
        }}>
          {t.paragraph}
        </p>
      </Reveal>

      <div className="cce-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16, marginBottom: 60,
      }}>
        {t.capabilities.map((c, i) => (
          <Reveal key={i} delay={i * 60}>
            <div style={{
              padding: 24, background: 'var(--bg-2)',
              border: '1px solid var(--line)',
              borderTop: '2px solid var(--accent)',
              minHeight: 140,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 18,
                fontWeight: 400, lineHeight: 1.2, marginBottom: 10,
                color: 'var(--fg)',
              }}>{c.title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--fg-muted)' }}>
                {c.desc}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300}>
        <div style={{
          textAlign: 'center', padding: '24px 0',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(12px, 1.2vw, 16px)',
          letterSpacing: 1.6, textTransform: 'uppercase',
          color: 'var(--accent)', fontWeight: 500,
        }}>
          {t.stat}
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 900px) {
          .cce-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .cce-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
```

- [ ] **Step 2: Lint + build**

Run: `npm run lint && npm run build`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/v3/sections/ClaudeEngineering.tsx
git commit -m "feat(sections): add ClaudeEngineering section component"
```

---

## Task 10: Wire `ClaudeEngineering` into `AppV3`

**Files:**
- Modify: `src/v3/AppV3.tsx`

- [ ] **Step 1: Import and render between Skills and Projects**

In `src/v3/AppV3.tsx` line 7, update import:
```ts
import { AboutV3, ExperienceV3, SkillsV3, ProjectsV3, ContactV3 } from './sections';
import { ClaudeEngineeringV3 } from './sections/ClaudeEngineering';
```

In the `<main>` block (around line 126-134), insert `<ClaudeEngineeringV3>` between `<SkillsV3>` and `<ProjectsV3>`:

```tsx
<SkillsV3 data={data} lang={language} />
<ClaudeEngineeringV3 lang={language} />
<ProjectsV3 data={data} lang={language} />
```

- [ ] **Step 2: Update bottom HUD `sections` array (if it lists sections by id)**

Search `AppV3.tsx` for the `sections` array (around line 100-120). If it contains section ids/labels, add an entry for `claude-engineering` between Skills and Projects with appropriate label.

If no such array exists in `AppV3.tsx`, search `chrome.tsx` for `BottomHUD` props or `sections` definitions and update there.

- [ ] **Step 3: Manual smoke test**

Run: `npm run dev`
Expected:
- Order: Hero → About → Experience → Skills → **Claude Code Engineering (new)** → Projects → Contact
- Section displays: prefix `// claude-engineering` (or label), title with italic accent on second line, paragraph, 4×2 capability grid (collapses to 2 cols on tablet, 1 col on mobile), stat strip at bottom
- Theme switch updates colors live
- Bottom HUD includes the new section dot/label

- [ ] **Step 4: Lint + build**

Run: `npm run lint && npm run build`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/v3/AppV3.tsx
git commit -m "feat(app): wire ClaudeEngineering between Skills and Projects"
```

---

## Task 11: Final verification + push

- [ ] **Step 1: Full manual checklist (browser)**

In `npm run dev`, verify ALL of:
- [ ] Hero shows dual subtitle, both languages
- [ ] All sections render in order including new Claude section
- [ ] Each project preview has badge + CTA
- [ ] Modal opens, closes via ESC, backdrop click, ✕ button
- [ ] Modal does NOT close on inside click
- [ ] Body scroll locks when modal open
- [ ] Theme switch updates colors live (also with modal open)
- [ ] Language switch updates ALL new content (subtitles, projects copy, claude section, modal)
- [ ] Mobile (DevTools 375px width): all new sections + modal usable
- [ ] PDF download still works (Visual ES, Visual EN, ATS ES, ATS EN)
- [ ] No console errors

- [ ] **Step 2: Full build + lint**

```bash
npm run lint
npm run build
```

Both pass. Note Vite output: confirm `CaseStudyContent` is in its own chunk.

- [ ] **Step 3: Push**

```bash
git push origin master
```

---

## Task 12: Update local `.claude/` and project memory

**Files:**
- Modify: `CLAUDE.md` (project root)
- Create or modify: `.claude/memory/decisions.md` (or wherever ADRs live in this project)

- [ ] **Step 1: Update `CLAUDE.md` "Estructura del Proyecto" section**

Add the new files:
```
src/v3/projects/
├── ProjectModal.tsx          # Portal + a11y + lazy modal wrapper
├── CaseStudyContent.tsx      # 8-section case study (lazy chunk)
└── CaseStudySection.tsx      # // titulo + slot primitive

src/v3/sections/
└── ClaudeEngineering.tsx     # Claude Code expertise section
```

And under skills/data add a note:
> v3 case study data lives in `src/i18n/translations.ts` under `projects.items[i]` (extended fields: tagline, problem, solution, architecturePatterns, highlights, stack, metrics, role, demoStatus). Mapped to typed `ProjectV3` in `src/v3/data.ts`.

- [ ] **Step 2: Add ADR for case study modal pattern**

Append to `.claude/memory/decisions.md` (create if missing):

```markdown
## ADR — 2026-04-29 — Case Study Modal Pattern

**Decision:** Project deep-dives use a portal-rendered, lazy-loaded modal triggered from the existing split-pane Projects layout, not a separate route.

**Why:**
- Preserves the editorial split-pane visual identity already shipped in v3.
- Portal avoids overflow:hidden clipping (same pattern as PdfMenu fix in commit ce4c967).
- Lazy load keeps the home initial bundle clean — modal content only loads on first click.
- Single-page architecture stays intact, no router needed.

**Consequences:**
- All case study copy lives in `translations.ts` under `projects.items[i]`.
- New fields are TS-typed on `ProjectV3`. Adding a 4th project = add to translations + bump `PROJECT_IDS`/`PROJECT_COLORS`/`PROJECT_ICONS`/`PROJECT_KINDS` arrays in `data.ts`.
- Modal is theme-aware (uses CSS variables). Colors propagate automatically when theme switches.
- ATS PDF stays unaffected — case study fields are web-only.

**Reemplazada por:** —
```

- [ ] **Step 3: Update memory MEMORY.md index if exists**

Check `~/.claude/projects/d--ErickuchoSan-Desktop-Desarrollo-CV-Erick-Rodriguez-Bores-Isaias-CV-WEB-cv-react-Erick-Rodriguez--Bores-Isaias/memory/MEMORY.md`. If it exists, add an entry pointing to this work.

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md .claude/memory/decisions.md
git commit -m "docs(claude): document case study modal pattern + new files"
```

- [ ] **Step 5: Push**

```bash
git push origin master
```

---

## Roadmap (out of scope, do NOT implement now)

- Demo URLs activation per project (flip `demoStatus` to `'live'` and add `demoUrl`).
- Screenshots in modal `// demo` section.
- Add SiD as 4th project.
- Convert Align Designs in Experience section to generic name (currently still labeled by name).
- OG images, schema.org Person/JobPosting, sitemap.
- Reduce PdfMenu chunk (1.6MB).
- Trust signals (testimonials, GitHub stats, badges).
