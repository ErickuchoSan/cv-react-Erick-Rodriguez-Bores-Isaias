# CV v3 — Portfolio Showcase + Claude Code Expertise Positioning

**Fecha:** 2026-04-29
**Autor:** Erick Bores (con Claude)
**Estado:** Aprobado para implementación
**Repo:** `cv-react-Erick-Rodriguez -Bores-Isaias` — branch `master` (v3 activa)

---

## 1. Contexto

El CV v3 ya tiene un sistema editorial sólido (Manrope/Inter, multi-theme con tipografía y paletas por tema, PDFs visual+ATS theme-aware, performance optimizada en mobile). Falta convertir el sitio en una herramienta de **captación de empresas** mostrando:

1. Tres proyectos full-stack reales con case study profundo (nombres genéricos, sin marcas).
2. Una **especialización visible en Claude Code / AI-assisted engineering** sin exponer configuración interna.
3. Un tagline en Hero que comunique ambas especialidades.

El estilo visual editorial actual se respeta y no se rediseña.

---

## 2. Objetivos

- **Atraer empresas** a través de un showcase con profundidad técnica suficiente para CTOs, leads y recruiters técnicos.
- **Posicionar Claude Code expertise** como diferenciador sin revelar internals (`.claude/` queda privado).
- **Permitir escalar** a demos interactivas en el futuro: cada proyecto tendrá un slot de demo activable cuando esté lista.
- **Sin romper** lo existente: PDFs, themes, mobile, i18n ES/EN siguen funcionando.

## No-objetivos

- No mostrar SiD (queda fuera del scope actual; podrá agregarse después).
- No agregar screenshots ahora — esa subsección se activa cuando existan demos.
- No documentar públicamente la configuración del `.claude/` global ni de los proyectos.
- No cambiar el sistema de themes, el design system editorial, ni los PDFs.
- No incluir nombres de empresas reales en el showcase (Grupo Salinas se mantiene en Experience como empleador actual; Align Designs sigue en Experience por ahora pero se reemplazará por genérico cuando el usuario indique).

---

## 3. Cambios funcionales

### 3.1 Hero — tagline doble

En `src/v3/Hero.tsx` (o el subtítulo equivalente), agregar dos líneas debajo del nombre:

- **Línea 1 (subtítulo principal):** `Full Stack Developer · .NET & React`
- **Línea 2 (subtítulo secundario, peso más ligero):** `Claude Code Power User`

Ambas líneas viven en `translations.ts` con clave `hero.subtitle1` y `hero.subtitle2` para soporte ES/EN.

### 3.2 Nueva sección "Claude Code Engineering"

Insertar entre **Skills** y **Projects** en `sections.tsx`. Estructura:

- Header editorial: prefijo `// claude-code-engineering` + título Manrope Black uppercase a dos líneas.
- 1 párrafo de posicionamiento (ES/EN en `translations.ts`).
- Grid de 8 capability cards (4 columnas × 2 filas en desktop, 2×4 en mobile):
  1. Skill Engineering
  2. Custom Agents
  3. MCP Integration
  4. Hook Automation
  5. Memory Systems
  6. Plugin Ecosystem
  7. Multi-LLM Orchestration
  8. Eval-driven Optimization
- Cada card: icono lucide-react + título + 1 línea descriptiva.
- Stat strip al pie: `6 SKILLS · 3 AGENTS · 4 PLUGINS · MULTI-LLM` en Manrope Black (números grandes en rojo `#b61722`).

**Sin mostrar internals**: nada de paths a `.claude/`, nombres de skills internas, ni configuración.

### 3.3 Sección Projects — rediseñada como Showcase

Reemplaza/refactoriza la sección actual de proyectos. Tres proyectos visibles:

| ID interno | Nombre genérico | Origen real (interno, no se expone) |
|---|---|---|
| `platform-b2b` | Plataforma B2B/B2C de Gestión de Proyectos y Archivos | Align Designs |
| `pos-cloud` | Sistema POS Multi-Sucursal Cloud | Punto Venta General |
| `cms-3d` | Sitio Corporativo con CMS Headless + 3D Interactivo | mdg-web |

Cada **card** muestra:
- Icono representativo (lucide o custom).
- Nombre genérico.
- 1 línea de pitch.
- Stack pills (máx. 5 tecnologías clave).
- Badge `Demo en construcción` (estilo editorial, fondo zinc-100, texto zinc-600, ícono 🚧).
- CTA `Ver case study →`.

Click en card → abre modal de case study (3.4).

### 3.4 Modal de Case Study

Nuevo componente `ProjectModal.tsx` portado a `document.body` (mismo patrón que el PdfMenu portal).

**Comportamiento:**
- Apertura: fade + scale 0.96→1, ~200ms.
- Cierre: ESC, click en backdrop, o botón ✕.
- Body scroll lock al abrir, restaurar al cerrar.
- Backdrop con `backdrop-blur-sm` y dim 60%.
- Sheet centrado, `max-w-4xl`, scroll vertical interno.
- Mobile: `100vh`, padding generoso, sheet ocupa todo el viewport.
- Lazy load: el componente y sus dependencias se cargan al primer click (`React.lazy` + `Suspense`).

**Contenido (top-down):**

1. **Header del modal**
   - Botón ✕ esquina superior derecha.
   - Prefijo `// case-study`.
   - Nombre genérico en Manrope Black uppercase a dos líneas.
   - Tagline (ej. "Cloud · Monorepo · Auth Dual").
   - CTA row: badge `Demo en construcción 🚧` + botón GitHub disabled (con tooltip "Repo privado por ahora" o similar).

2. **`// problema`** — 2 párrafos sobre contexto y fricciones que resuelve el sistema.

3. **`// solución`** — 5 bullets con verbo de acción + impacto.

4. **`// arquitectura`**
   - Pills de patrones aplicados (Clean Architecture, DDD, SOLID, Modular Monorepo, etc.).
   - 3-4 highlight cards horizontales: título + 2-3 líneas de detalle técnico.

5. **`// stack`** — Agrupado en 4 bloques con icon pills:
   - Backend
   - Frontend
   - Infra
   - Testing

6. **`// métricas`** — Stats grid con números grandes en rojo editorial. 3-4 datos por proyecto.

7. **`// mi rol`** — Texto fijo: *"Solo developer · End-to-end · Diseño, arquitectura, implementación, deployment y mantenimiento."* (ajustable por proyecto si conviene).

8. **`// demo`** — `🚧 Demo interactiva próximamente. Estoy preparando una versión genérica navegable para mostrar el flujo completo.`
   - Cuando `demo.status === 'live'`, esta sección muta a un botón CTA `Abrir demo →` apuntando a `demo.url`.

---

## 4. Arquitectura técnica

### 4.1 Modelo de datos

Archivo nuevo: `src/v3/projects-data.ts`

```ts
type DemoStatus = 'in-construction' | 'live' | 'private';

interface TechItem {
  name: string;
  icon?: string;     // key para TechIcon.tsx
  color?: string;    // override opcional
}

interface CaseStudyProject {
  id: 'platform-b2b' | 'pos-cloud' | 'cms-3d';
  // Texto va en translations.ts; aquí solo claves de i18n
  i18nKey: string;                // 'projects.platformB2B'
  iconName: string;               // lucide-react icon key
  shortPitchKey: string;          // 'projects.platformB2B.pitch'
  stackHighlightKeys: string[];   // pills visibles en card (máx 5)
  taglineKey: string;
  problemKey: string;
  solutionBulletsKey: string;     // array en translations
  architecturePatterns: string[]; // sin i18n, son nombres técnicos
  highlightsKey: string;          // array de {titleKey, summaryKey}
  stack: {
    backend?: TechItem[];
    frontend?: TechItem[];
    infra?: TechItem[];
    testing?: TechItem[];
  };
  metrics: Array<{
    value: string;       // "57"
    labelKey: string;    // 'projects.platformB2B.metrics.tests'
  }>;
  roleKey: string;       // default reusable
  demo: {
    status: DemoStatus;
    url?: string;
    eta?: string;        // "Q2 2026"
  };
}

export const PROJECTS: CaseStudyProject[] = [/* ... */];
```

**Por qué separar datos técnicos de strings i18n:**
- `projects-data.ts` = estructura técnica reutilizable (stack, métricas, status).
- `translations.ts` = todo lo que ve el usuario en ES y EN.
- Cambios de copy no requieren tocar lógica.

### 4.2 Componentes nuevos

| Componente | Responsabilidad | Ubicación |
|---|---|---|
| `ProjectCard.tsx` | Card en grid de Projects | `src/v3/projects/ProjectCard.tsx` |
| `ProjectModal.tsx` | Portal + backdrop + ESC + click-outside | `src/v3/projects/ProjectModal.tsx` |
| `CaseStudyContent.tsx` | Render de las 8 secciones del modal | `src/v3/projects/CaseStudyContent.tsx` |
| `CaseStudySection.tsx` | Primitive `// titulo` + slot de contenido | `src/v3/projects/CaseStudySection.tsx` |
| `ClaudeEngineeringSection.tsx` | Sección entera Claude Code | `src/v3/sections/ClaudeEngineering.tsx` |
| `CapabilityCard.tsx` | Card individual de capacidad | `src/v3/projects/CapabilityCard.tsx` |

Se respetan los primitives ya existentes en `src/v3/primitives.tsx` para botones, pills y secciones.

### 4.3 Lazy loading y bundle

- `ProjectModal` + `CaseStudyContent` → `React.lazy()` con `Suspense` fallback mínimo.
- El click en cualquier card pre-warm el chunk (mismo patrón que PdfMenu en commit `ce4c967`).
- Capability cards de la sección Claude no necesitan lazy (son ligeras).

### 4.4 i18n

Agregar a `src/i18n/translations.ts` los siguientes namespaces (ES y EN):

- `hero.subtitle1`, `hero.subtitle2`
- `claudeEngineering.*` (header, párrafo, capabilities array, stat strip)
- `projects.platformB2B.*`, `projects.posCloud.*`, `projects.cms3d.*`
- Keys repetibles: `projects.common.demoConstruction`, `projects.common.viewCaseStudy`, `projects.common.role`, `projects.common.demoPlaceholder`

### 4.5 Theme-awareness

Todo el contenido nuevo (sección Claude + modal) hereda los CSS variables de tema activo. Sin colores hardcoded fuera del rojo editorial `#b61722` y el naranja `#f97316` que ya están definidos como tokens.

---

## 5. Error handling y edge cases

- **Modal sin datos**: si `PROJECTS` está vacío o el id no existe, la card no se renderiza. No se cae el render.
- **Stack incompleto**: si una categoría (ej. `testing`) no tiene items, el bloque entero se omite del modal.
- **Métricas vacías**: la sección `// métricas` se omite si `metrics.length === 0`.
- **i18n missing key**: si una clave no existe, render del nombre de la clave (default React i18n behavior). Tests de smoke validan que las claves principales existan.
- **ESC mientras hay otro modal abierto**: no aplica — solo hay un modal posible a la vez.
- **Mobile rotation con modal abierto**: re-medir alturas, `100vh` sigue funcionando.
- **Body scroll lock**: usar técnica `overflow:hidden` + restaurar `scrollTop` para evitar jump.

---

## 6. Testing manual

Antes de merge, verificar:

- [ ] Hero muestra tagline doble en ES y EN.
- [ ] Sección Claude Engineering aparece entre Skills y Projects.
- [ ] 3 cards de proyecto con badge "Demo en construcción".
- [ ] Click abre modal con todas las secciones renderizadas.
- [ ] ESC cierra modal.
- [ ] Click en backdrop cierra modal.
- [ ] Click dentro del sheet NO cierra modal.
- [ ] Body scroll lock al abrir, restaurar al cerrar.
- [ ] Cambiar theme con modal abierto → colores se actualizan en vivo.
- [ ] Cambiar idioma ES/EN → todo el contenido nuevo cambia.
- [ ] Mobile (≤640px): card grid 1 columna, modal fullscreen.
- [ ] Lighthouse Performance ≥ 90 en home (sin abrir modal).
- [ ] `npm run build` pasa sin errores.

---

## 7. Roadmap futuro (fuera del scope actual)

Estos puntos se documentan para no perderlos pero **no se implementan ahora**:

- Demos navegables de cada proyecto (cuando el usuario las construya, se cambia `demo.status` y se agrega `demo.url`).
- Screenshots/mockups en la sección demo del modal.
- Cuarto proyecto: SiD (cuando el usuario decida exponerlo).
- Convertir Align Designs en Experience a nombre genérico (cuando el usuario indique).
- OG images dinámicas, schema.org, sitemap (spec aparte).
- Reducción del bundle de PdfMenu (1.6MB) — spec aparte.
- Trust signals (testimonios, GitHub stats, badges) — spec aparte.

---

## 8. Riesgos

| Riesgo | Mitigación |
|---|---|
| Sección Claude se siente vacía o "buzzword soup" | Wording cuidado en i18n; capability cards con descripción concreta, no jerga. |
| Modal en mobile rompe scroll | Probar en device real iOS/Android, usar `overscroll-behavior: contain`. |
| Theme-switching mientras modal abierto causa flash | CSS variables se aplican en root, propagación inmediata; verificar manualmente. |
| Bundle crece > 50KB por modal+iconos | `React.lazy` para modal, importar lucide icons individualmente. |
| Strings i18n se desfasan ES/EN | Misma sesión de PR actualiza ambas; review checklist exige ambos idiomas. |

---

## 9. Aprobación

- Diseño aprobado en sesión 2026-04-29.
- Próximo paso: invocar `superpowers:writing-plans` para generar plan de implementación detallado por fases.
