/**
 * Showcase projects — everything about a project lives in its entry, in display order.
 * `tech` is the headline list (web preview chips + both PDFs); `stack` is the full
 * breakdown shown in the case study. To publish a demo, set `demo` to
 * `{ status: 'live', url }` and every badge updates; `private` is for work that is
 * never exposed publicly (infrastructure), so it gets no "coming soon" promise.
 */
import type { Localizable, Localized } from '../i18n/lang';
import { METRICS } from './cv';

export type DemoState =
  | { status: 'live'; url: string }
  | { status: 'in-construction' }
  | { status: 'private' };

/** Case-study stack columns, in display order. A project lists only the ones it uses. */
export type StackGroup = 'backend' | 'frontend' | 'infra' | 'cicd' | 'security' | 'observability' | 'testing';
export const STACK_GROUPS: readonly StackGroup[] = [
  'backend', 'frontend', 'infra', 'cicd', 'security', 'observability', 'testing',
];

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
  stack: Partial<Record<StackGroup, readonly Localizable[]>>;
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
    id: 'homelab-devsecops',
    name: 'Homelab DevSecOps',
    color: '#34d399',
    icon: '▣',
    year: '2026—',
    kind: { es: 'Infraestructura · DevSecOps', en: 'Infrastructure · DevSecOps' },
    tagline: 'Self-hosted · CI/CD · DevSecOps',
    description: {
      es: 'Servidor self-hosted que diseñé y opero — Git y CI/CD propios, escaneo de CVEs, alertas y respaldos off-site — y base de una propuesta de pipeline DevSecOps corporativo.',
      en: 'Self-hosted server I designed and run — own Git and CI/CD, CVE scanning, alerting and off-site backups — and the groundwork for a corporate DevSecOps pipeline proposal.',
    },
    problem: {
      es: 'Quería dominar el ciclo completo de entrega —del git push a producción— sin servicios gestionados que lo resolvieran por mí: CI/CD, análisis de calidad, seguridad de red, monitoreo y recuperación ante fallos, sobre hardware propio.',
      en: 'I wanted to master the full delivery cycle —from git push to production— without managed services doing it for me: CI/CD, quality analysis, network security, monitoring and failure recovery, on my own hardware.',
    },
    solution: [
      {
        es: 'Monté un servidor Ubuntu Server 24.04 LTS sobre una laptop reutilizada: 16 contenedores con Docker Compose, en producción desde junio de 2026, con la configuración versionada en Git.',
        en: 'Set up an Ubuntu Server 24.04 LTS host on a repurposed laptop: 16 containers on Docker Compose, in production since June 2026, with its configuration versioned in Git.',
      },
      {
        es: 'Git self-hosted con Forgejo y runner propio de Forgejo Actions: 166 ejecuciones de pipeline con análisis en SonarQube, despliegue por SSH, health check y rollback automático con git revert.',
        en: 'Self-hosted Git with Forgejo and my own Forgejo Actions runner: 166 pipeline runs with SonarQube analysis, SSH deploys, health checks and automatic rollback via git revert.',
      },
      {
        es: 'Seguridad por capas: Cloudflare como proxy y DNS, Nginx Proxy Manager con TLS, Tailscale para administración y UFW. Como Docker publica puertos por encima de UFW, los servicios internos escuchan solo en loopback.',
        en: 'Defense in depth: Cloudflare as proxy and DNS, Nginx Proxy Manager with TLS, Tailscale for administration and UFW. Since Docker publishes ports ahead of UFW, internal services listen on loopback only.',
      },
      {
        es: 'Operación automatizada con alertas a Telegram: health checks cada 5 min, disco, temperatura, SMART y escaneo diario de CVEs con Trivy; respaldos diarios, semanales y off-site.',
        en: 'Automated operations with Telegram alerts: health checks every 5 min, disk, temperature, SMART and daily Trivy CVE scans; daily, weekly and off-site backups.',
      },
      {
        es: 'Reglas de cadena de suministro: imágenes con versión fijada (sin :latest), secretos fuera del YAML y tres vigilantes complementarios — Watchtower (digest), Diun (versiones mayores) y Trivy (CVEs).',
        en: 'Supply-chain rules: pinned image versions (no :latest), secrets kept out of YAML and three complementary watchers — Watchtower (digests), Diun (new majors) and Trivy (CVEs).',
      },
      {
        es: 'Llevé esos patrones a una propuesta de pipeline DevSecOps corporativo 100% open source: GitLab CE, 11 pasos con 4 capas de escaneo (SonarQube, GitLeaks, SCA, Trivy), imágenes inmutables en Harbor, migraciones con DbUp/Flyway tras un respaldo y approval gate a producción.',
        en: 'Scaled those patterns into a 100% open-source corporate DevSecOps pipeline proposal: GitLab CE, 11 steps with 4 scanning layers (SonarQube, GitLeaks, SCA, Trivy), immutable images in Harbor, DbUp/Flyway migrations after a snapshot and a production approval gate.',
      },
    ],
    architecturePatterns: ['DevSecOps', 'Shift-left Security', 'Defense in Depth', 'Configuration as Code', 'Least Privilege', 'Immutable Artifacts'],
    highlights: [
      {
        title: 'CI/CD self-hosted',
        summary: {
          es: 'Forgejo + runner propio: análisis en SonarQube, despliegue por SSH, health check y rollback automático. 166 ejecuciones de pipeline.',
          en: 'Forgejo + own runner: SonarQube analysis, SSH deploys, health checks and automatic rollback. 166 pipeline runs.',
        },
      },
      {
        title: { es: 'Seguridad y operación', en: 'Security & operations' },
        summary: {
          es: 'Cloudflare, TLS, Tailscale, UFW y servicios internos en loopback. Alertas a Telegram, escaneo diario de CVEs y respaldos off-site.',
          en: 'Cloudflare, TLS, Tailscale, UFW and internal services on loopback. Telegram alerts, daily CVE scans and off-site backups.',
        },
      },
      {
        title: { es: 'Propuesta DevSecOps', en: 'DevSecOps proposal' },
        summary: {
          es: 'Approval gate con evidencia, matriz de accesos por perfil federada por LDAP/OIDC y 12 pruebas de control destructivas. Implementación por fases, sin costo de licencias.',
          en: 'Evidence-based approval gate, per-profile access matrix federated via LDAP/OIDC and 12 destructive control tests. Phased rollout, zero license cost.',
        },
      },
    ],
    stack: {
      infra: ['Ubuntu Server 24.04 LTS', 'Docker Compose', 'Nginx Proxy Manager', 'Cloudflare'],
      cicd: ['Forgejo', 'Forgejo Actions', 'SonarQube'],
      security: ['Tailscale', 'UFW', 'Trivy'],
      observability: ['Uptime Kuma', 'Dozzle', 'Diun', 'Watchtower', 'Bash + cron → Telegram'],
    },
    metrics: [
      { value: '16', label: { es: 'Contenedores en producción', en: 'Containers in production' } },
      { value: '166', label: { es: 'Ejecuciones de CI/CD', en: 'CI/CD runs' } },
      { value: '12', label: { es: 'Pruebas de control (propuesta)', en: 'Control tests (proposal)' } },
    ],
    role: {
      es: 'Solo · End-to-end · Arquitectura, instalación, hardening y operación del servidor; autor de la propuesta DevSecOps.',
      en: 'Solo · End-to-end · Server architecture, setup, hardening and operations; author of the DevSecOps proposal.',
    },
    demo: { status: 'private' },
    tech: ['Docker Compose', 'Forgejo Actions', 'SonarQube', 'Trivy', 'Nginx', 'Cloudflare', 'Tailscale', 'Ubuntu Server'],
  },
] as const satisfies readonly ProjectFacts[];

export type ProjectId = (typeof PROJECTS)[number]['id'];
