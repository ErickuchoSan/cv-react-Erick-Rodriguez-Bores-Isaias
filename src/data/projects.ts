/**
 * Showcase projects — everything about a project lives in its entry, in display order.
 * `tech` is the headline list (web preview chips + both PDFs); `stack` is the full
 * breakdown shown in the case study. To publish a demo, set `demo` to
 * `{ status: 'live', url }` and every badge updates.
 */
import type { Localizable, Localized } from '../i18n/lang';
import { METRICS } from './cv';

export type DemoState = { status: 'live'; url: string } | { status: 'in-construction' };

export interface ProjectFacts {
  id: string;
  name: string;
  color: string;
  icon: string;
  year: string;
  kind: Localizable;
  tagline: string;
  description: Localized;
  problem: Localized;
  solution: readonly Localized[];
  architecturePatterns: readonly string[];
  highlights: readonly { title: Localizable; summary: Localized }[];
  stack: {
    backend: readonly Localizable[];
    frontend: readonly Localizable[];
    infra: readonly Localizable[];
    testing: readonly Localizable[];
  };
  metrics: readonly { value: string; label: Localized }[];
  role: Localized;
  demo: DemoState;
  tech: readonly string[];
}

export const PROJECTS = [
  {
    id: 'align-designs',
    name: 'Align Designs Platform',
    color: '#ff5b2e',
    icon: '◐',
    year: '2025—',
    kind: { es: 'SaaS · Diseño de Interiores', en: 'SaaS · Interior Design' },
    tagline: 'SaaS · Interior Design · Multi-role',
    description: {
      es: 'SaaS full-stack para gestión de proyectos de diseño de interiores — pipeline multi-fase, facturación, RBAC 3 roles y CI/CD automatizado.',
      en: 'Full-stack SaaS for interior design project management — multi-phase pipeline, billing, 3-role RBAC and automated CI/CD.',
    },
    problem: {
      es: 'Estudio de diseño de interiores operaba con procesos fragmentados: seguimiento de proyectos por correo, facturación manual, archivos sin versionar y sin separación de acceso entre staff interno y clientes externos.',
      en: 'An interior design studio operated with fragmented processes: project tracking via email, manual billing, unversioned files and no access separation between internal staff and external clients.',
    },
    solution: [
      {
        es: 'Construí SaaS multi-tenant para gestión del ciclo completo del cliente: brief → entregables → facturación → cierre.',
        en: 'Built multi-tenant SaaS managing the full client lifecycle: brief → deliverables → billing → close.',
      },
      {
        es: 'Implementé RBAC con 3 roles (Admin / Cliente / Empleado) + sub-cliente invitado con acceso por proyecto, OTP email auth, JWT + Redis blacklist.',
        en: 'Implemented RBAC with 3 roles (Admin / Client / Employee) + guest sub-client access scoped per project, OTP email auth, JWT + Redis blacklist.',
      },
      {
        es: 'Diseñé pipeline de proyecto de 5 fases con stage-gating, ciclos de aprobación de archivos en 2 niveles (admin → cliente) y versionado de entregables.',
        en: 'Designed 5-phase project pipeline with stage-gating, 2-level file approval cycles (admin → client) and deliverable versioning.',
      },
      {
        es: 'Construí sistema de facturación con ítems dinámicos, flujo de aprobación de pagos, entrega automática por email y sync de estado en tiempo real.',
        en: 'Built invoice system with dynamic line items, payment approval flow, automated email delivery and real-time status sync.',
      },
      {
        es: 'CI/CD completo: GitHub Actions → auto-deploy a dev, deploys a producción con rollback automático por health check fallido.',
        en: 'Full CI/CD: GitHub Actions → auto-deploy to dev, gated production deploys with automatic rollback on health check failure.',
      },
    ],
    architecturePatterns: ['Clean Architecture', 'DDD', 'SOLID', 'Modular Monorepo', 'Repository Pattern', 'Domain Events'],
    highlights: [
      {
        title: 'Auth & RBAC',
        summary: {
          es: 'JWT + refresh rotation (admins) y OTP bcrypt (clientes). CSRF HMAC-SHA256, Helmet (CSP/HSTS), rate limiting y account lockout tras 5 intentos.',
          en: 'JWT + refresh rotation (admins) and OTP bcrypt (clients). CSRF HMAC-SHA256, Helmet (CSP/HSTS), rate limiting and account lockout after 5 attempts.',
        },
      },
      {
        title: { es: 'Facturación', en: 'Billing' },
        summary: {
          es: 'Ítems dinámicos, flujo de aprobación de pagos, entrega automatizada por email y sincronización de estado en tiempo real.',
          en: 'Dynamic line items, payment approval flow, automated email delivery and real-time status sync.',
        },
      },
      {
        title: 'CI/CD',
        summary: {
          es: 'GitHub Actions multi-stage con SonarCloud, Codecov, Lighthouse y Playwright E2E, rollback automático.',
          en: 'Multi-stage GitHub Actions with SonarCloud, Codecov, Lighthouse and Playwright E2E, automatic rollback.',
        },
      },
    ],
    stack: {
      backend: ['NestJS 11', 'Prisma', 'PostgreSQL 15', 'Redis', 'TypeScript 5'],
      frontend: ['Next.js 16', 'React 19', 'TanStack Query', 'Tailwind v4', 'Zod'],
      infra: ['Docker', 'DigitalOcean', 'GitHub Actions', 'Nginx'],
      testing: ['Jest', 'Vitest', 'Playwright'],
    },
    metrics: [
      { value: METRICS.testSuites, label: { es: 'Suites de tests', en: 'Test suites' } },
      { value: '3', label: { es: 'Roles + RBAC', en: 'Roles + RBAC' } },
      { value: '5', label: { es: 'Fases de pipeline', en: 'Pipeline phases' } },
    ],
    role: {
      es: 'Solo developer · End-to-end · Diseño, arquitectura, implementación, deployment y mantenimiento.',
      en: 'Solo developer · End-to-end · Design, architecture, implementation, deployment and maintenance.',
    },
    demo: { status: 'live', url: 'https://aligndesignsllc-dev.org/' },
    tech: ['NestJS 11', 'Next.js 16', 'PostgreSQL 15', 'Prisma', 'Redis', 'Docker', 'DigitalOcean', 'JWT/OTP'],
  },
  {
    id: 'comal-pos',
    name: 'Comal POS',
    color: '#22d3ee',
    icon: '◇',
    year: '2025—',
    kind: { es: 'POS · Restaurantes', en: 'POS · Restaurants' },
    tagline: 'POS · Offline-first · Restaurant',
    description: {
      es: 'SaaS POS full-stack para restaurantes — offline-first, multi-tenant con RLS, integración ESC/POS, Kitchen Display System y 237 tests.',
      en: 'Full-stack POS SaaS for restaurants — offline-first, multi-tenant with RLS, ESC/POS hardware integration, Kitchen Display System and 237 tests.',
    },
    problem: {
      es: 'Restaurantes en México dependían de sistemas POS costosos, sin capacidad offline, sin impresión ESC/POS directa ni pantalla de cocina (KDS) dedicada.',
      en: 'Restaurants in Mexico relied on expensive POS systems unable to operate offline, lacking direct ESC/POS hardware integration or a dedicated Kitchen Display System.',
    },
    solution: [
      {
        es: 'Diseñé arquitectura offline-first: Dexie.js (IndexedDB) como fuente local, motor sync push/pull con Supabase Realtime + polling 30s, resolución de conflictos LWW y patrón outbox.',
        en: 'Designed offline-first architecture: Dexie.js (IndexedDB) as local source of truth, custom push/pull sync engine with Supabase Realtime + 30s polling fallback, LWW conflict resolution and outbox idempotency.',
      },
      {
        es: 'Implementé aislamiento de tenant con RLS de Postgres + JWT claims personalizados (empresa_id + rol) — sin filtros a nivel de aplicación.',
        en: 'Implemented tenant isolation via Postgres RLS policies with custom JWT claims (empresa_id + rol) — zero cross-tenant leakage enforced at DB level.',
      },
      {
        es: 'Integré impresión ESC/POS: paquete @comal/printer (0 deps), agente Hono local (puerto 7788) con auth X-Comal-Secret + fallback WebUSB; cajón abre automáticamente en pago en efectivo.',
        en: 'Integrated ESC/POS printing: @comal/printer package (0 deps), local Hono agent (port 7788) with X-Comal-Secret auth + WebUSB fallback; cash drawer auto-opens on cash payment.',
      },
      {
        es: 'Construí Kitchen Display System (KDS): cola de pedidos en tiempo real por estatus, alertas de tiempo >10 min, sync de badge por mesa y tipos de pedido (local / para llevar / domicilio).',
        en: 'Built Kitchen Display System (KDS): real-time order queue by status, >10 min elapsed-time alerts, mesa badge sync and takeout/delivery order types.',
      },
      {
        es: 'Hardening OWASP: 9 vulnerabilidades críticas/altas corregidas; Sentry; benchmarks P95; estrategia de backups GFS con pg_dump.',
        en: 'Hardened to OWASP: 9 critical/high vulnerabilities fixed; Sentry error tracking; P95 benchmark scripts; GFS backup strategy with pg_dump.',
      },
    ],
    architecturePatterns: ['Offline-first', 'Multi-tenant RLS', 'Event-driven sync', 'CQRS-light', 'Outbox Pattern'],
    highlights: [
      {
        title: 'Offline-first',
        summary: {
          es: 'Dexie.js (IndexedDB) como fuente de verdad local, sync con Supabase Realtime + fallback 30s, resolución LWW e idempotencia con outbox.',
          en: 'Dexie.js (IndexedDB) as local source of truth, sync with Supabase Realtime + 30s fallback, LWW resolution and outbox idempotency.',
        },
      },
      {
        title: 'ESC/POS + KDS',
        summary: {
          es: 'Impresión directa en cocina y cajón automático. KDS en tiempo real con alertas >10 min.',
          en: 'Direct kitchen printing and automatic cash drawer. Real-time KDS with elapsed-time alerts.',
        },
      },
      {
        title: { es: 'Seguridad', en: 'Security' },
        summary: {
          es: '9 vulnerabilidades OWASP corregidas, RLS multi-tenant, Sentry, benchmarks P95, backups GFS.',
          en: '9 OWASP vulnerabilities fixed, multi-tenant RLS, Sentry, P95 benchmarks, GFS backups.',
        },
      },
    ],
    stack: {
      backend: ['Hono.js', 'Supabase', 'PostgreSQL', 'TypeScript'],
      frontend: ['Next.js 16', 'React 19', 'Dexie.js', 'Tailwind'],
      infra: [{ es: 'Docker Compose (12 contenedores)', en: 'Docker Compose (12 containers)' }, 'Nginx', 'Supabase self-hosted'],
      testing: ['Jest', 'Vitest', '237 tests'],
    },
    metrics: [
      { value: '237', label: { es: 'Tests unitarios + integración', en: 'Unit + integration tests' } },
      { value: '9', label: { es: 'Vulns OWASP corregidas', en: 'OWASP vulns fixed' } },
      { value: '12', label: { es: 'Contenedores Docker', en: 'Docker containers' } },
    ],
    role: {
      es: 'Solo developer · End-to-end · Arquitectura, implementación, testing y deployment.',
      en: 'Solo developer · End-to-end · Architecture, implementation, testing and deployment.',
    },
    demo: { status: 'in-construction' },
    tech: ['Hono.js', 'Supabase', 'PostgreSQL', 'Next.js 16', 'Dexie.js', 'TypeScript', 'Docker Compose', 'ESC/POS'],
  },
  {
    id: 'mdg-investment',
    name: 'MDG Investment Group',
    color: '#a78bfa',
    icon: '◈',
    year: '2025—',
    kind: 'Real Estate · 3D',
    tagline: 'Real Estate · 3D · Quiet Luxury',
    description: {
      es: 'Sitio premium de bienes raíces para desarrollador en Texas — mapa de lotes 3D interactivo con disponibilidad en tiempo real, CMS headless y panel admin sin código.',
      en: 'Premium real-estate website for a Texas land developer — interactive 3D lot map with real-time availability, headless CMS and no-code admin panel.',
    },
    problem: {
      es: 'Desarrollador inmobiliario de Texas operaba con un sitio Wix lento, sin mapa de disponibilidad de lotes en tiempo real y sin que el cliente pudiera actualizar precios/estatus sin recurrir al desarrollador.',
      en: 'A Texas residential subdivision developer operated with a slow Wix site, no real-time lot availability map and no way to update prices or status without developer involvement.',
    },
    solution: [
      {
        es: 'Diseñé mapa de lotes 3D (Spline embed) con estatus en tiempo real desde Supabase (disponible / pendiente / vendido / reservado) para 6 desarrollos activos y 11 constructores.',
        en: 'Built interactive 3D lot map (Spline embed) with real-time lot status (available / pending / sold / reserved) synced from Supabase, supporting 6 active developments and 11 builder partners.',
      },
      {
        es: 'Autoré sistema de diseño "Quiet Luxury": tokens obsidian + champagne gold en Tailwind v4, tipografía Cormorant Garamond + DM Sans.',
        en: 'Authored bespoke "Quiet Luxury" design system — obsidian + champagne gold tokens in Tailwind v4, Cormorant Garamond display + DM Sans functional type pairing.',
      },
      {
        es: 'Construí panel admin sin código: el cliente actualiza precios, estatus, mappings 3D y renders vía Server Actions + service-role writes + revalidación ISR automática.',
        en: 'Built no-code admin panel: client updates lot prices, status, 3D model mappings and renders via Server Actions + service-role writes + ISR cache revalidation.',
      },
      {
        es: 'Integré Sanity.io CMS para gestión de copias y fotos, Resend para formularios de captación de leads y tabla de seguimiento (nuevo / contactado / calificado).',
        en: 'Integrated Sanity.io headless CMS for copy and photo management, Resend for lead capture forms and a lead tracking table (new / contacted / qualified).',
      },
      {
        es: 'Entorno local dockerizado: Docker Compose + Supabase self-hosted + Nginx en mdginvestmentgroup.local, espejando la topología de producción.',
        en: 'Full local dev environment: Docker Compose + Supabase self-hosted + Nginx at mdginvestmentgroup.local, mirroring production topology.',
      },
    ],
    architecturePatterns: ['JAMstack', 'Headless CMS', 'Server Components', 'ISR', 'Progressive Enhancement'],
    highlights: [
      {
        title: { es: 'Mapa 3D', en: '3D Map' },
        summary: {
          es: 'Spline embed con estatus de lotes en tiempo real vía Supabase para 6 desarrollos activos y 11 constructores.',
          en: 'Spline embed with real-time lot status via Supabase for 6 active developments and 11 builder partners.',
        },
      },
      {
        title: { es: 'Admin sin código', en: 'No-code Admin' },
        summary: {
          es: 'Panel para actualizar precios, estatus y renders sin intervención del desarrollador, con revalidación ISR automática.',
          en: 'Client updates prices, status and renders without developer involvement, with automatic ISR revalidation.',
        },
      },
      {
        title: 'Design System',
        summary: {
          es: '"Quiet Luxury" con tokens obsidian + champagne gold, Cormorant Garamond + DM Sans.',
          en: '"Quiet Luxury" with obsidian + champagne gold tokens, Cormorant Garamond + DM Sans.',
        },
      },
    ],
    stack: {
      backend: ['Sanity CMS', 'Supabase', 'Resend'],
      frontend: ['Next.js 15', 'React 19', 'GSAP', 'Spline 3D', 'Tailwind v4', 'TanStack Query'],
      infra: ['Docker Compose', 'Supabase self-hosted', 'Nginx', 'Vercel'],
      testing: ['Manual QA'],
    },
    metrics: [
      { value: '6', label: { es: 'Desarrollos activos', en: 'Active developments' } },
      { value: '11', label: { es: 'Constructores partners', en: 'Builder partners' } },
      { value: '3D', label: { es: 'Mapa interactivo', en: 'Interactive map' } },
    ],
    role: {
      es: 'Solo developer · End-to-end · Diseño técnico, integración 3D, CMS y deployment.',
      en: 'Solo developer · End-to-end · Technical design, 3D integration, CMS and deployment.',
    },
    demo: { status: 'in-construction' },
    tech: ['Next.js 15', 'Sanity CMS', 'GSAP', 'Spline 3D', 'Supabase', 'Resend', 'Tailwind v4', 'Docker'],
  },
] as const satisfies readonly ProjectFacts[];

export type ProjectId = (typeof PROJECTS)[number]['id'];
