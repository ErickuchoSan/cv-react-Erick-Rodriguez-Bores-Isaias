# Handoff: CV v3 — Editorial + Multi-Tema

## Overview

Rediseño completo del CV personal de Erick Bores. La pieza es un **single-page portfolio** tipo editorial (inspiración: revista/brand book) con un **sistema de 7 temas** intercambiables en vivo, hero con shader WebGL + foto grayscale, animaciones de entrada tipo *split text*, cursor custom con estados, nav flotante con indicador líquido, y un panel de **Tweaks** para alternar tema/acento/tipografías.

Reemplaza la versión actual ("Editorial Bold" con split layout 60/40 en rojo #b61722).

---

## About the Design Files

Los archivos en `prototype/` son **referencias de diseño en HTML + JSX plano** (React cargado por CDN + Babel standalone, sin build). No son código de producción ni deben copiarse tal cual.

La tarea es **recrear estos diseños dentro del proyecto existente** (React 19 + Vite + Tailwind v4 + TypeScript), respetando:

- La estructura actual de carpetas: `Sections/` (mayúscula), `UI/`, `PDF/`, `data/`, `hooks/`.
- El sistema de traducciones `src/i18n/translations.ts` — toda copy nueva debe existir en **ES y EN sincronizado**.
- La compatibilidad con la capa PDF (`@react-pdf/renderer`, 4 variantes: visual ES/EN + ATS ES/EN). Ver sección **"Impacto en la capa PDF"** más abajo.

---

## Fidelity

**High-fidelity (hifi).** Todos los colores, tipografías, espaciados, animaciones y estados están definidos. El desarrollador debe recrear pixel-perfect usando Tailwind v4 + CSS variables.

Las interacciones animadas (shader WebGL del hero, cursor, indicador líquido del nav, split-text reveals) están implementadas en los JSX fuente y pueden portarse casi literalmente — solo cambia la forma de inyectar estilos (de `style={{}}` inline a clases Tailwind / tokens CSS).

---

## Stack objetivo

- **React 19** + **Vite** + **TypeScript**
- **Tailwind CSS v4** (usar `@theme` en `globals.css` para tokens)
- **i18n**: `src/i18n/translations.ts` (ES/EN obligatorio sincronizado)
- **PDF**: `@react-pdf/renderer` (mantener 4 variantes: `visual-es`, `visual-en`, `ats-es`, `ats-en`)
- **Fuentes**: Google Fonts (Fraunces, Inter, JetBrains Mono, Instrument Serif, Space Grotesk)

---

## Design Tokens

### Paletas (7 temas completos)

Cada tema tiene `bg`, `bg2`, `bg3`, `fg`, `fgMuted`, `fgDim`, `line`, `lineStrong`, `mode` (`dark` | `light`). El `accent` es independiente (compartido entre temas).

| Tema | Mode | bg | bg2 | bg3 | fg | fgMuted | fgDim | Hint |
|---|---|---|---|---|---|---|---|---|
| **noir** | dark | `#0a0a0a` | `#121212` | `#1a1a1a` | `#fafaf7` | `#a8a49e` | `#6a6762` | Oscuro carbón (default) |
| **paper** | light | `#f6f3ec` | `#eeeae0` | `#e4dfd1` | `#1a1613` | `#5a4f44` | `#8a7f73` | Claro papel |
| **ivory** | light | `#eee6d4` | `#e4dcc6` | `#d9cfb5` | `#1f1a13` | `#6b5d4a` | `#9a8a72` | Crema cálido |
| **slate** | dark | `#0d1520` | `#14202f` | `#1c2a3d` | `#e8eef5` | `#8fa1b8` | `#5a6a80` | Azul pizarra |
| **forest** | dark | `#0c140f` | `#14201a` | `#1e2e25` | `#ecf2ec` | `#8ea598` | `#5a6e62` | Verde bosque |
| **linen** | light | `#ece7de` | `#e0dace` | `#d3ccbc` | `#141210` | `#58504a` | `#857e76` | Blanco lino |
| **midnight** | dark | `#0e0b1a` | `#17132a` | `#221c3d` | `#ecebf5` | `#9b95b8` | `#625c80` | Violeta noche |

**Líneas** (`line`, `lineStrong`): se derivan del `fg` con alpha 0.08/0.18 en dark y 0.12/0.28 en light.

### Acentos (separados del tema)

| Nombre | Hex | Uso |
|---|---|---|
| **Terracota** | `#ff5b2e` | Default. CTA, links hover, highlights, subrayados |
| Óxido | `#d14a24` | Alternativo |
| Mostaza | `#eab308` | Alternativo |
| Lima | `#84cc16` | Alternativo |
| Cian | `#22d3ee` | Alternativo |
| Violeta | `#a78bfa` | Alternativo |

> **Nota migración**: el `#b61722` (editorial red) actual NO se usa en v3. Se reemplaza por el sistema de accent. Si quieres conservar el rojo, añádelo como opción: `{ label: "Rojo editorial", value: "#b61722" }`.

### Tipografías

| Rol | Familia default | Alternativas | Pesos |
|---|---|---|---|
| **Display** (titulares grandes, números, nombre) | `Fraunces` (serif variable) | `Instrument Serif`, `Space Grotesk` | 300–700, opsz 9..144, italic |
| **Sans** (body, nav, labels) | `Inter` | `Space Grotesk` | 300, 400, 500, 600, 700, 800, 900 |
| **Mono** (metadata, cursor label, timestamps) | `JetBrains Mono` | — | 300–700 |

Estilos editoriales clave:
- Display en **cursiva (italic)** para nombre/hero: transmite tono de revista.
- Mono en **uppercase + letter-spacing `0.14em`–`0.24em`** para labels tipo `[ 01 / SOBRE MÍ ]`.
- Sans en **weight 300 (light)** para párrafos largos — no weight 400.

### Escalas

**Type scale display** (desktop, vh-based en hero):
- Hero name: `clamp(120px, 20vw, 280px)` · line-height `0.82` · letter-spacing `-0.055em`
- Section titles: `clamp(72px, 11vw, 168px)` · line-height `0.88` · letter-spacing `-0.04em`
- Subtitles: `clamp(32px, 4vw, 56px)` · weight 300
- Body: `16–18px` · line-height `1.65` · weight 300
- Meta/labels: `10–11px` · weight 500/600 · letter-spacing `0.18em` · uppercase

**Spacing**: usar escala Tailwind estándar. Secciones con `padding-block: 120–200px`. Grid gap `32–48px`. Cards interior padding `32–48px`.

**Border radius**: casi cero. Tokens: `0` (default, para cards), `2px` (inputs), `9999` (cursor, badges circulares).

### Shadows

No se usan shadows clásicos. En su lugar:
- **Líneas** de 1px con `var(--line)` para separar.
- **Ring** sutil: `0 0 0 1px var(--line-strong)` en hover de cards.
- **Glow accent** en focus: `0 0 0 2px var(--accent)` (opcional).

---

## Screens / Views

El CV es **single-page con scroll-snap suave**. Secciones visibles:

### 1. Loader (2s al inicio)
- Fondo `#0a0a0a` full-bleed (no respeta tema — siempre dark).
- Logo `eb.` en Fraunces italic, color `#ff5b2e`, tamaño `clamp(80px, 14vw, 200px)`.
- Barra de progreso 320px × 1px, fill animado con `cubic-bezier(.2,.8,.2,1)` 1.8s.
- Metadata mono 11px: `v3.0 · LOADING X% · MMXXVI`.
- Fade out tras `window.load` + 2s.

### 2. Hero
- **Full viewport** (100vh).
- **Shader WebGL** de fondo (gradient noise animado) — puede reemplazarse por gradiente CSS estático si WebGL es fricción.
- **Split layout**:
  - Columna izq (65%): nombre gigante en display italic (`Erick Bores`), subtitle `Full Stack · Senior`, descripción corta en sans light.
  - Columna der (35%): foto grayscale con mask, flotando con parallax sutil.
- **Overlays**:
  - Esquina top-left: `[ EB.2026 ]` en mono.
  - Esquina top-right: año/lugar en mono.
  - Esquina bottom: CTAs (ver proyectos, contactar).
- **Scroll indicator** centrado abajo: línea vertical 1px animada + label `SCROLL`.

### 3. Sobre mí (About)
- Dos columnas asimétricas: 40% label/meta izq, 60% párrafo derecho.
- Label `[ 01 / SOBRE MÍ ]` mono uppercase.
- Párrafo 32–40px display weight 300, 2–3 oraciones.
- Debajo: grid de 4 métricas (años exp, proyectos, tecnologías, clientes) en display italic gigantes.

### 4. Stack (Tecnologías)
- Grid 4×N de logos SVG.
- Cada celda: logo centrado + label debajo.
- Categorías agrupadas con divider: **Frontend**, **Backend**, **Cloud/DevOps**, **Tools**.
- Hover: logo cambia a color accent + tooltip con nivel/años.
- Logos están en `prototype/src/v3/tech-icons.jsx` como componentes SVG inline.

### 5. Experiencia
- Timeline vertical. Línea 1px centrada.
- Cada item: título del puesto (display weight 500), empresa (sans weight 500), fechas (mono 11px uppercase), bullets (sans 300 con `•` como separator, no con bullets redondos).
- Left/right alternados en desktop, stack en mobile.

### 6. Proyectos
- Grid 2×N de cards.
- Card: imagen placeholder top, título display 32px, descripción sans 300, stack en mono 10px uppercase.
- Hover: escala 1.02, ring accent.

### 7. Contacto + Footer
- Call-to-action gigante: `Hablemos.` en display italic, clamp(96px, 14vw, 200px).
- Email + socials debajo en mono.
- Footer line: `© 2026 · Erick Bores · Hecho con cuidado`.

### 🟠 COMPONENTE CRÍTICO: Botón "Descargar CV" con dropdown de 4 variantes

**Este botón ya existe en el proyecto actual y DEBE preservarse**. Es el punto de acceso a los PDFs generados con `@react-pdf/renderer`.

**Ubicación sugerida en v3**: esquina superior derecha (junto al theme toggle y el switcher de idioma), o inline en el hero como CTA secundaria. Decidir con el usuario.

**Comportamiento actual** (del screenshot que compartió el usuario):
- Botón principal oscuro con ícono de descarga + label `DESCARGAR CV` en mono uppercase, letter-spacing `0.14em`.
- Al clic abre dropdown con dos grupos:
  - **DISEÑO VISUAL** (header en mono dim uppercase)
    - `mx` Español
    - `us` English
  - **FORMATO ATS** (header en mono dim uppercase)
    - `mx` ATS Español
    - `us` ATS English
- Cada item tiene prefijo de bandera/país (`mx`, `us`) en small-caps o mono.
- Al clic descarga el PDF correspondiente (las 4 variantes ya generadas por `@react-pdf/renderer`).

**Adaptación al v3 (editorial)**:
- Reemplazar el fondo blanco del botón por `var(--bg)` con borde `1px solid var(--line-strong)`.
- Hover: borde y texto en `var(--accent)`.
- Label en mono, uppercase, `letter-spacing: 0.18em`, tamaño 11px.
- Dropdown: fondo `var(--bg2)`, borde `var(--line)`, items con hover `var(--bg3)` y accent en hover de texto.
- Headers de grupo (`DISEÑO VISUAL`, `FORMATO ATS`): mono 9px, uppercase, color `var(--fg-dim)`, letter-spacing `0.24em`.
- Los prefijos `mx` / `us` pueden ser: emoji bandera 🇲🇽 🇺🇸, o mono small-caps (más editorial), o SVG flags inline. Recomiendo mono small-caps para mantener tono.
- Animación de apertura: `opacity 0→1` + `translateY(-8px) → 0`, 200ms ease-out.

**Copy i18n adicional** (agregar a `translations.ts`):

| Key | ES | EN |
|---|---|---|
| `download.cta` | Descargar CV | Download CV |
| `download.group.visual` | Diseño visual | Visual design |
| `download.group.ats` | Formato ATS | ATS format |
| `download.visual.es` | Español | Spanish |
| `download.visual.en` | Inglés | English |
| `download.ats.es` | ATS Español | ATS Spanish |
| `download.ats.en` | ATS Inglés | ATS English |

### 8. Chrome global (fixed)
- **Nav flotante** top-right: 5–6 pills con indicador líquido (morph shape que sigue la sección activa).
- **Theme toggle** top-right: botón circular con glyph del tema actual (luna/sol/café/gota/pino/trama/estrellas). Clic → cicla al siguiente.
- **Progress bar** top: 1px accent, fill horizontal según scroll.
- **Cursor custom**: dot 6px + ring 24px. En hover de `[data-cursor="Texto"]` muestra label (ej: "IR", "VER"). Tamaño máximo 42px con padding auto. **No debe taparse** con contenido — el ring usa `mix-blend-mode: difference` en idle.
- **Tweaks panel** bottom-right (se activa con toggle del toolbar): selector de tema con swatches, selector de accent, dropdowns de tipografías.

---

## Interactions & Behavior

### Animaciones de entrada (scroll-triggered)
- **Fade + translate**: `translate3d(0, 40px, 0) → (0,0,0)` + opacity 0→1. Duración 900ms, easing `cubic-bezier(.2,.8,.2,1)`, stagger 80–120ms.
- **Split text (word-by-word)**: cada palabra en `<span>` con `overflow: hidden`, el texto interno se mueve `translate3d(0, 110%, 0) → (0,0,0)`. Duración 1000ms, easing `cubic-bezier(.19,1,.22,1)`, stagger 60ms por palabra.
- **Rotate-in (titulares grandes)**: `rotateX(-80deg) scale(0.9) → rotateX(0) scale(1)` con origen `center bottom`. Duración 1400ms.
- Todos usan `IntersectionObserver` con threshold 0.2 y `rootMargin: '-10% 0px'`.

### Cursor
- Dot (6px) sigue el mouse con lerp 0.5 (rápido).
- Ring (24px idle, 30px hover, 42px label) sigue con lerp 0.12 (retrasado).
- En hover de `[data-cursor="X"]`: ring crece a 42px, se llena con accent, muestra label en mono 8px.
- `mix-blend-mode: difference` cuando está idle (se adapta a cualquier fondo).

### Nav liquid indicator
- Blob redondeado que se posiciona bajo el link activo.
- Transition `left 600ms cubic-bezier(.2,.8,.2,1), width 600ms`.
- Al cambiar sección (por scroll o clic), reposiciona.

### Theme cycling
- Clic en theme toggle cicla: `noir → paper → ivory → slate → forest → linen → midnight → noir`.
- Transición: `background 0.6s ease, color 0.6s ease` en `html, body`.
- El glyph del toggle cambia: luna (noir), sol (paper), café (ivory), gota (slate), pino (forest), trama (linen), estrellas (midnight).

### Tweaks panel protocol
Ver `prototype/src/v3/chrome.jsx` y `app.jsx` para implementación completa. En producción, adaptar a los hooks de Tailwind/theme de tu stack.

---

## State Management

Estado global mínimo (puede vivir en Context o Zustand):

```ts
interface AppState {
  theme: 'noir' | 'paper' | 'ivory' | 'slate' | 'forest' | 'linen' | 'midnight';
  accent: string; // hex
  displayFont: string;
  sansFont: string;
  monoFont: string;
  lang: 'es' | 'en';
  activeSection: string; // 'hero' | 'about' | 'stack' | ...
  scrollProgress: number; // 0..1
}
```

Persistencia: `localStorage` para `theme`, `accent`, `displayFont`, `sansFont`, `monoFont`, `lang`. Restaurar al mount.

Para el CV del usuario actual: el selector de idioma ya existe (ES/EN). El selector de tema es nuevo — agrégalo en el mismo panel/zona.

---

## Impacto en la capa PDF

**Crítico**: el proyecto genera 4 PDFs con `@react-pdf/renderer` (visual-ES, visual-EN, ats-ES, ats-EN).

- **Variante ATS (ambos idiomas)**: NO cambia. Mantener formato plano, una columna, sin color, fuente sistema. El rediseño web no debe afectarla.
- **Variante Visual (ambos idiomas)**:
  - Puede adoptar el **tema `paper`** como estética fija (light, editorial, imprimible).
  - Tipografías: usa `Fraunces` + `Inter` si `@react-pdf/renderer` puede cargarlas (normalmente sí con `Font.register`). Si no, fallback a Georgia + Helvetica.
  - Accent: usar `#ff5b2e` (terracota default) o el `#b61722` actual si se prefiere mantener continuidad de marca en PDF.
  - **No intentar portar**: shader WebGL, cursor custom, animaciones, split-text reveals, nav flotante. Son exclusivos del web.
  - **Sí portar**: paleta de colores, escala tipográfica, jerarquía (labels mono uppercase, display italic para nombre, etc.), estructura de secciones.
- Los datos vienen del mismo `data/` + `i18n/` — no duplicar copy.

Recomendación: decide con el usuario si la variante Visual PDF mantiene la estética actual (#b61722) o migra al tema paper con accent terracota. Ambas son válidas.

---

## i18n — Copy requerida (ES/EN)

Todo el texto debe existir en `src/i18n/translations.ts`. Ejemplos clave que añade este rediseño:

| Key | ES | EN |
|---|---|---|
| `nav.about` | Sobre mí | About |
| `nav.stack` | Stack | Stack |
| `nav.experience` | Experiencia | Experience |
| `nav.projects` | Proyectos | Projects |
| `nav.contact` | Contacto | Contact |
| `hero.role` | Full Stack · Senior | Full Stack · Senior |
| `hero.cta.projects` | Ver proyectos | View projects |
| `hero.cta.contact` | Contactar | Get in touch |
| `hero.scroll` | Desliza | Scroll |
| `about.label` | [ 01 / SOBRE MÍ ] | [ 01 / ABOUT ] |
| `stack.label` | [ 02 / STACK ] | [ 02 / STACK ] |
| `stack.categories.frontend` | Frontend | Frontend |
| `stack.categories.backend` | Backend | Backend |
| `stack.categories.cloud` | Cloud / DevOps | Cloud / DevOps |
| `stack.categories.tools` | Herramientas | Tools |
| `experience.label` | [ 03 / EXPERIENCIA ] | [ 03 / EXPERIENCE ] |
| `projects.label` | [ 04 / PROYECTOS ] | [ 04 / PROJECTS ] |
| `contact.label` | [ 05 / CONTACTO ] | [ 05 / CONTACT ] |
| `contact.cta` | Hablemos. | Let's talk. |
| `tweaks.theme` | Tema | Theme |
| `tweaks.accent` | Acento | Accent |
| `tweaks.font.display` | Titulares | Display |
| `tweaks.font.sans` | Texto | Body |
| `tweaks.font.mono` | Mono | Mono |
| `footer.madeWith` | Hecho con cuidado | Crafted with care |

Usa las keys reales del proyecto si difieren — esta tabla es guía.

---

## Assets

### Incluidos en este bundle
- `prototype/CV.html` — entry point. Ábrelo en un navegador local para ver el diseño en tamaño real (1440px+).
- `prototype/src/v3/*.jsx` — todos los componentes (primitives, chrome, hero, sections, tech-icons, app).
- `prototype/src/data.jsx` — datos del CV (experiencia, proyectos, etc.). **Probablemente ya tengas estos datos más completos en tu repo** — usa los tuyos y descarta este archivo.

> **Nota sobre screenshots**: no se incluyen porque el viewport de captura automática está limitado a ~924px, y este diseño es responsive a 1280px+. Abre `CV.html` localmente (o súbelo a Vercel) para referencias visuales reales de cada tema/sección.

### Fuentes
Google Fonts, import en `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

O con `@fontsource/*` si prefieres bundled.

### Logos de tecnologías
En `prototype/src/v3/tech-icons.jsx`. Son componentes SVG inline — sin deps externas. Cópialos a `src/components/icons/tech/`.

### Foto del hero
Placeholder grayscale. Usa tu foto actual (ya está en `public/` del proyecto objetivo probablemente).

---

## Files en este bundle

```
design_handoff_cv_v3/
├── README.md                    ← este archivo
└── prototype/
    ├── CV.html                  ← entry HTML (abrir local en navegador)
    └── src/
        ├── data.jsx             ← sample data (descartar, usar del repo)
        └── v3/
            ├── app.jsx          ← root component + THEMES + TWEAK_DEFAULTS
            ├── primitives.jsx   ← Reveal, SplitText, ParallaxY, MagneticBtn
            ├── chrome.jsx       ← CursorV3, NavV3, ThemeGlyph, TweaksPanel
            ├── hero.jsx         ← Hero con shader + foto
            ├── sections.jsx     ← About, Stack, Experience, Projects, Contact
            └── tech-icons.jsx   ← SVG icons de todas las tecnologías
```

---

## Orden sugerido de implementación

1. **Tokens primero**: añade las 7 paletas como CSS custom properties en `globals.css` dentro de `@theme` de Tailwind v4. Define `[data-theme-name="noir"]`, `[data-theme-name="paper"]`, etc., con los overrides.
2. **Fuentes**: importa las 5 familias, crea utilidades `font-display`, `font-sans`, `font-mono`.
3. **Chrome global**: cursor, nav flotante, progress bar, theme toggle, tweaks panel. Todos independientes del contenido.
4. **Primitives**: `Reveal`, `SplitText`, `ParallaxY`, `MagneticBtn` como componentes reutilizables en `UI/`.
5. **Hero**: shader (o fallback gradiente), foto, CTAs.
6. **Secciones**: About → Stack → Experience → Projects → Contact.
7. **i18n**: añade todas las keys nuevas a `translations.ts` en ES y EN.
8. **PDF**: decide la estrategia para la variante Visual (tema paper o mantener #b61722). ATS no cambia.
9. **Tests visuales**: verifica los 7 temas en cada sección. Los screenshots en `screenshots/` son referencia para `noir` y `paper` — los otros 5 temas son variaciones del mismo layout con la paleta cambiada.

---

## Prompts sugeridos para Claude Code

Al abrir tu proyecto en Claude Code:

> "Lee `design_handoff_cv_v3/README.md` completo. Vamos a reemplazar el CV actual con este rediseño. Empieza por los tokens de Tailwind v4 — añade las 7 paletas a `globals.css` como CSS variables. No toques la capa PDF todavía."

Después:

> "Ahora implementa el chrome global: cursor custom, nav flotante con indicador líquido, progress bar y theme toggle. Referencia: `design_handoff_cv_v3/prototype/src/v3/chrome.jsx`. Adapta a Tailwind v4 y tipa en TypeScript."

Y así sección por sección.

---

## Notas finales

- El prototipo **no tiene build step**. Todo es React vía CDN + Babel standalone. El código es ilustrativo; los patterns (hooks, estructura de componentes) son legítimos y portables a tu stack.
- Los estilos están como `style={{}}` inline en el JSX fuente — en producción conviértelos a clases Tailwind + CSS variables del tema.
- No hay tests. Añádelos según convención del repo.
- Si surge conflicto entre este diseño y una restricción real del stack, **prioriza el stack** y deja una nota en el código o PR.
