# Instrucciones para Claude - CV Profesional Erick Rodriguez

## REGLA PRINCIPAL: Este es un CV profesional para desarrollo de software

**IMPORTANTE**: Este proyecto contiene el CV web y PDF de Erick Rodriguez Bores Isaias, un Desarrollador Full Stack especializado en .NET/C# y React.

### Salidas del CV

Las tres salidas se generan desde **el mismo modelo** (`buildCV(lang)` en `src/data/model.ts`), así que no pueden contradecirse.

Publicado en **<https://eboresi.com>** (dominio en Vercel; cada push a `master` despliega). `CONTACT.website` en `cv.ts` y el `og:url`/`canonical` de `index.html` deben coincidir.

| Salida | Idiomas | Componente |
| --- | --- | --- |
| **Web** | ES/EN (`?lang=en`) | `src/v3/` (React 19 + Vite) |
| **PDF visual (1 página)** | ES/EN | `src/components/PDF/CVDocumentLeaf.tsx` (`lang`) + `leafStyles.ts` |
| **PDF ATS** | ES/EN | `src/components/PDF/CVDocumentATS.tsx` (`lang`) |

## Skills del Proyecto CV

| Skill | Cuándo Usar |
| --- | --- |
| `/cv-update` | Actualizar experiencia, habilidades o proyectos |
| `/cv-pdf` | Modificar diseño de PDFs (visual o ATS) |
| `/cv-ats` | Optimizar para sistemas ATS |
| `/cv-web` | Cambios en la versión web |
| `/cv-translate` | Sincronizar ES/EN |
| `/cv-review` | Revisar consistencia y calidad |

## Dónde vive cada cosa (fuente de verdad)

| Qué | Archivo |
| --- | --- |
| Nombre, rol, taglines, contacto, LinkedIn/GitHub | `src/data/cv.ts` → `PERSON`, `CONTACT` |
| Resumen del perfil (PDFs) y disponibilidad | `src/data/cv.ts` → `PROFILE` |
| Trabajos: fechas, stack, rol, bullets, logros | `src/data/cv.ts` → `JOBS` |
| Educación, idiomas, competencias | `src/data/cv.ts` → `EDUCATION`, `LANGUAGES`, `COMPETENCIES` |
| Números destacados (40%, 66, 8h, endpoints) | `src/data/cv.ts` → `METRICS`, `STATS` |
| Stack del hero y de la terminal | `src/data/cv.ts` → `HERO_STACK`, `TERMINAL_STACK` |
| Proyectos del showcase + case studies | `src/data/projects.ts` → `PROJECTS` |
| Skills (web, ATS con años, 12 del PDF visual) | `src/data/skills.ts` → `WEB_SKILLS`, `ATS_SKILLS`, `CORE_SKILLS` |
| Textos de interfaz (títulos, botones, etiquetas de PDF) | `src/i18n/translations.ts` |

Reglas del modelo:

- **Cada texto lleva `es` y `en` juntos** (`{ es, en }`): si falta una traducción, el build falla.
- **Nunca escribas duraciones ni años**: `period`, `duration` y los años totales se calculan de `start`/`end` (`'YYYY-MM'`, `end: null` = actual). Los años totales cuentan desde `CAREER_START` (mayo 2023), así que quitar un empleo no los baja. En textos, usa `{years}`.
- **PDF de 1 página**: muestra las funciones y los logros marcados con `highlight: true` (3 funciones + 2 logros por trabajo, pensado para 2 trabajos) y todos los proyectos. El orden de los bullets ya no importa.
- **Texto que llega a los PDFs**: solo caracteres de cp1252 (Helvetica en el ATS; la Roboto local tampoco trae flechas). Usa `›` en vez de `→`.
- **Años por skill**: viven solo en `ATS_SKILLS` (`months`). No se calculan: actualízalos a mano.
- **`CORE_SKILLS` debe quedar en 12** o el PDF visual se pasa a 2 páginas.
- **Demo de un proyecto**: `demo: { status: 'live', url }` actualiza todos los badges y links; `{ status: 'private' }` es para lo que nunca se publica (infraestructura), sin promesa de demo.
- **Stack del case study**: cada proyecto lista solo los grupos que usa (`backend`, `frontend`, `infra`, `cicd`, `security`, `observability`, `testing`).

## Estructura del Proyecto

```
src/
├── App.tsx / main.tsx              # Monta AppV3 dentro de LanguageProvider
├── context/LanguageContext.tsx     # Idioma: ?lang=en en la URL, <html lang> y <title>
├── data/
│   ├── cv.ts                       # Hechos + textos es/en del CV (fuente de verdad)
│   ├── projects.ts                 # Showcase y case studies
│   ├── skills.ts                   # Skills por salida
│   └── model.ts                    # buildCV(lang): modelo resuelto para web y PDFs
├── i18n/
│   ├── lang.ts                     # Lang, Localized, pick()
│   └── translations.ts             # Textos de interfaz (en tipado contra es)
├── lib/
│   ├── format.ts                   # Períodos, duraciones, plurales, {placeholders}
│   ├── color.ts                    # Contraste WCAG: readableOn(), textOn()
│   └── richText.tsx                # Frases traducidas con partes resaltadas
├── components/PDF/
│   ├── CVDocumentLeaf.tsx          # PDF visual (hereda tema y acento de la web)
│   ├── CVDocumentATS.tsx           # PDF ATS (Helvetica, sin colores)
│   └── leafStyles.ts               # Estilos del PDF visual por tema
├── index.css                       # Tokens base, foco visible, cursor, reduced motion
└── v3/
    ├── AppV3.tsx                   # SECTION_ORDER, temas, scroll-spy
    ├── Hero.tsx                    # Shader WebGL + terminal
    ├── sections.tsx                # About, Experience, Skills, Projects, Contact
    ├── sections/ClaudeEngineering.tsx
    ├── chrome.tsx                  # Cursor, Nav, CornerTools, BottomHUD, Marquee
    ├── primitives.tsx              # Reveal, MaskReveal, TitleWords, Counter, Magnetic, Parallax, Tilt
    ├── hooks.ts                    # useInView, useMediaQuery, useReducedMotion, useScrollProgress
    ├── theme.ts                    # 7 temas + 6 acentos
    ├── Download.tsx + PdfMenu.tsx  # Menú de descarga (chunk lazy de ~1.6 MB)
    └── projects/                   # Modal del case study
```

`public/fonts/roboto/` tiene las fuentes del PDF visual (servidas localmente, Apache 2.0).

### Orden y numeración de secciones

`SECTION_ORDER` en `src/v3/AppV3.tsx` es la única fuente: de ahí salen el orden del DOM, el menú, el scroll-spy y los números `02 / …`. Para agregar una sección: sumarla a `SECTION_ORDER`, `NAV_KEY` y al mapa `sections`, y agregar su etiqueta en `translations.nav.sections`.

## Design System (v3 — editorial multi-tema)

- **Temas**: 7 paletas en `src/v3/theme.ts` (noir por defecto), cada una con su tipografía (display/sans/mono). **Acentos**: 6 opciones; sus nombres se traducen en `translations.accents`.
- **Tokens de color** (los calcula `AppV3` al cambiar tema o acento):
  - `--accent`: solo para bordes, puntos, barras y brillos (decoración).
  - `--accent-ink`: **para cualquier texto** en color de acento; garantiza 4.5:1 en `bg`, `bg-2` y `bg-3`.
  - `--on-accent`: texto sobre un fondo de acento.
  - `--ink-<project-id>` / `--on-<project-id>`: lo mismo para el color de cada proyecto.
  - Nunca uses `color: 'var(--accent)'`, ni hex o rgba del acento en los componentes; para tintes usa `color-mix(in oklab, var(--accent) N%, transparent)`.
- **Movimiento**: los efectos JS (parallax, tilt, magnetic, cursor, shader) leen `useMediaQuery` / `useReducedMotion`; respetan `prefers-reduced-motion` y solo corren con puntero fino. Los bucles de animación se detienen en reposo.
- **Orden de aparición**: `Reveal` sin `delay` entra en la cola de su sección (`useReveal` en `hooks.ts`): lo que aparece junto sale en orden de documento y lo que aparece solo sale ya. `delay` fijo solo para secuencias a mano (el hero). Los títulos van con `<TitleWords parts={…}>`: una sola animación por título, con la puntuación dentro del texto.
- **Sin `content-visibility` en las secciones**: con alturas estimadas, el menú aterrizaba cientos de px antes de la sección.
- **Accesibilidad**: controles con `<button>`, `aria-expanded`/`aria-pressed`, paneles ocultos con `inert`, nombres accesibles que contienen el texto visible (WCAG 2.5.3), foco visible global.

## Reglas de contenido

- **Experiencia**: Grupo Salinas (Mayo 2024 – actual) y Freelance Align Designs (Oct 2025 – actual). Digital Solutions (May 2023 – May 2024) ya no se lista, pero cuenta para los 3 años (`CAREER_START`). Las duraciones se calculan.
- ⚠️ **Grupo Salinas: NO incluir Azure Functions, Azure Service Bus ni CI/CD** (apenas usados). Sí: .NET Core 6, C#, HTML/Bootstrap, SQL Server, OAuth2/JWT, Entity Framework.
- **Taglines del hero**: `Full Stack Developer · .NET & React` / `Claude Code Power User` son marca: idénticas en ES y EN, no se traducen.
- **Showcase**: `align-designs` y `homelab-devsecops` (Comal POS y MDG se quitaron el 2026-09-23); cada card abre un modal con el case study completo. `align-designs` va primero: la terminal del hero usa `PROJECTS[0]`.
- **Homelab DevSecOps**: las cifras (16 contenedores, 166 ejecuciones de CI) se midieron en el servidor el 2026-09-22; se actualizan a mano. La propuesta DevSecOps es para un empleador: publicar solo el diseño genérico (herramientas y flujo), **nunca** nombres de empresa o personas, costos, topología interna ni nada de la carpeta "NO compartir". No presentarla como implementada.
- **Marco de buenas prácticas** (sección Claude): se menciona el marco (133 principios de diseño + 40 de proceso) sin atribuir autoría.

## Flujo de Trabajo

### Actualizar contenido
```
1. Editar el dato en src/data/ (cv.ts, projects.ts o skills.ts), con es y en juntos
2. Si es texto de interfaz, src/i18n/translations.ts
3. pnpm run build && pnpm run lint
4. Revisar los 4 PDFs desde el menú "Descargar CV" (el visual debe quedar en 1 página)
5. Commit con archivos explícitos (NO git add .)
```

### Cambiar diseño web
```
1. Colores: tokens de theme.ts / index.css; texto de acento siempre con --accent-ink
2. Movimiento nuevo: usar los hooks de v3/hooks.ts (reduced motion + puntero fino)
3. pnpm run build && pnpm run lint
```

## Buenas Prácticas para CV de Programador

### Contenido

- Usar verbos de acción: "Desarrollé", "Implementé", "Optimicé"
- Cuantificar logros: "40% reducción", "6 endpoints", "miles de registros"
- Mencionar tecnologías específicas con versiones
- Destacar arquitecturas y patrones (SOLID, DDD, Clean Architecture)

### Formato ATS

- Sin columnas, tablas complejas ni gráficos
- Fuentes estándar (Helvetica, Arial)
- Keywords del job description
- Secciones claramente etiquetadas y con acentos correctos ("HABILIDADES TÉCNICAS", "EDUCACIÓN")
- Fechas como `Mayo 2024 - Actual` / `May 2024 - Present` (las genera `formatPeriod`)
- Ocupa 2 páginas (lo que pide `/cv-ats`), justas: si agregas contenido, revisa que no pase a 3. Un empleo puede seguir en la página siguiente, pero su encabezado y la etiqueta de logros van pegados a su primera viñeta, y ninguna viñeta se parte. En react-pdf, `minPresenceAhead` es prop (en un `StyleSheet` se ignora) y solo funciona en hijos directos de `Page`

## Comandos Útiles

```bash
pnpm install      # dependencias (npm está bloqueado en esta máquina)
pnpm run dev      # desarrollo
pnpm run build    # tsc + vite build (obligatorio antes de commit)
pnpm run lint     # debe quedar en 0 problemas
pnpm run preview  # servir el build
```

## Git

```bash
git add src/data/cv.ts src/i18n/translations.ts   # especificar archivos
git commit -m "feat(cv): [descripción del cambio]"
```

## Notas Importantes

1. **Una sola fuente**: si un dato aparece en la web y en un PDF, se edita en un solo lugar (`src/data/`).
2. **Build y lint obligatorios** antes de commit: `pnpm run build && pnpm run lint`.
3. **NO usar `git add .`**: especificar archivos para no incluir archivos sensibles.
4. **Grupo Salinas**: no incluir Azure Functions/Service Bus/CI/CD en los bullets.
