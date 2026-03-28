# Instrucciones para Claude - CV Profesional Erick Rodriguez

## REGLA PRINCIPAL: Este es un CV profesional para desarrollo de software

**IMPORTANTE**: Este proyecto contiene el CV web y PDF de Erick Rodriguez Bores Isaias, un Desarrollador Full Stack especializado en .NET/C# y React.

### Versiones del CV

| Tipo | Idioma | Archivo/Componente |
|------|--------|-------------------|
| **Web** | ES/EN | `src/` (React + Vite + Tailwind) |
| **PDF Visual** | ES | `CVDocument.tsx` |
| **PDF Visual** | EN | `CVDocumentEN.tsx` |
| **PDF ATS** | ES | `CVDocumentATS_ES.tsx` |
| **PDF ATS** | EN | `CVDocumentATS_EN.tsx` |

## Skills del Proyecto CV

| Skill | Cuándo Usar |
|-------|-------------|
| `/cv-update` | Actualizar experiencia, habilidades o proyectos |
| `/cv-pdf` | Modificar diseño de PDFs (visual o ATS) |
| `/cv-ats` | Optimizar para sistemas ATS |
| `/cv-web` | Cambios en la versión web |
| `/cv-translate` | Sincronizar ES/EN |
| `/cv-review` | Revisar consistencia y calidad |

## Estructura del Proyecto

```
src/
├── components/
│   ├── Layout/
│   │   └── Navbar.tsx              # Navbar fija con ES/EN, tema, contacto
│   ├── PDF/                        # Componentes de generación PDF
│   │   ├── CVDocument.tsx          # PDF Visual ES
│   │   ├── CVDocumentEN.tsx        # PDF Visual EN
│   │   ├── CVDocumentATS_ES.tsx    # PDF ATS ES
│   │   ├── CVDocumentATS_EN.tsx    # PDF ATS EN
│   │   └── CVDocumentATSBase.tsx   # Base compartida ATS
│   ├── Sections/                   # Secciones de la web (mayúscula)
│   │   ├── Hero.tsx                # Banner split: 60% white / 40% dark
│   │   ├── About.tsx               # Sobre mí
│   │   ├── Experience.tsx          # Experiencia laboral
│   │   ├── Skills.tsx              # Habilidades técnicas
│   │   ├── Languages.tsx           # Idiomas (Español nativo, Inglés A2-B1)
│   │   ├── Projects.tsx            # Proyectos destacados
│   │   ├── Contact.tsx             # Contacto + formulario WhatsApp
│   │   └── Footer.tsx              # Pie de página dark
│   └── UI/                         # Componentes reutilizables
│       ├── SectionTitle.tsx        # Título editorial con prefijo //
│       ├── GlassCard.tsx           # Card editorial con borde rojo en hover
│       └── SectionParticles.tsx    # Partículas decorativas
├── context/
│   └── LanguageContext.tsx         # Proveedor de idioma ES/EN
├── data/
│   ├── skills.ts                   # Habilidades técnicas + PDF_SKILLS
│   ├── experience.ts               # Tecnologías por trabajo (iconos + colores)
│   ├── projects.ts                 # Proyectos con icon, tech[]
│   ├── contact.ts                  # Email, teléfono, redes sociales
│   └── navigation.ts               # Links del navbar
├── hooks/
│   ├── useTheme.ts                 # Toggle dark/light
│   └── useContactForm.ts           # Formulario de contacto con validación
├── i18n/
│   └── translations.ts             # Traducciones ES/EN (fuente de verdad de texto)
└── index.css                       # Design system editorial (Manrope + Inter)
```

## Design System — Editorial Bold (Architect.DEV)

El diseño actual usa un sistema editorial profesional implementado en **2025-Q1**:

### Tipografía
- **Headlines**: `font-['Manrope']` — `font-black tracking-tighter uppercase`
- **Body**: `font-['Inter']` — texto regular/medium

### Colores
| Token | Valor | Uso |
|-------|-------|-----|
| Editorial Red | `#b61722` | Primario, botones, acentos, hover |
| Orange Accent | `#f97316` | Estadísticas, logros, acentos secundarios |
| Editorial Dark | `#09090b` (zinc-950) | Panel hero derecho, footer |
| Surface | `#f9f9f9` | Fondo de secciones claras |

### Componentes Clave
- **Hero**: Split layout — left 60% `bg-white` (nombre gigante + CTA) / right 40% `bg-zinc-950` (foto grayscale + tech pills + stats)
- **Cards** (`glass-card`): Borde `border-zinc-200` con hover `border-[#b61722]/30` + sombra editorial
- **SectionTitle**: Prefijo `// sección` en rojo + línea de acento
- **Botones**: Sharp (sin border-radius), clases `.btn-editorial-primary` y `.btn-editorial-outline`
- **Footer**: Siempre dark (`bg-zinc-950`) independiente del tema

### ¿Quieres cambiar el diseño?
Al modificar estilos usa las clases editoriales en `index.css` antes de agregar clases Tailwind inline.

## Datos del Candidato (Fuente de Verdad)

### Información Personal
- **Nombre**: Erick Rodriguez Bores Isaias
- **Rol**: Desarrollador Full Stack .NET & React
- **Experiencia**: 3 años en desarrollo empresarial
- **Ubicación**: Cuajimalpa de Morelos, CDMX, México
- **Disponibilidad**: Inmediata (1 semana o 3 días)
- **Modalidad**: Remoto / Híbrido

### Educación
- **Grado**: Ing. Sistemas Computacionales - UTEL (2019-2023)
- **Posgrado**: Maestría en IA - UNIR (En curso, 2025)

### Idiomas
- **Español**: Nativo (100%)
- **Inglés**: A2-B1 (60% — lectura técnica fluida)

### Experiencia Laboral
1. **Grupo Salinas** (Mayo 2024 - Actual) - Programador de Auditoría Senior (~1 año)
2. **Digital Solutions** (Mayo 2023 - Mayo 2024) - Desarrollador Full Stack (~1 año)
3. **Freelance · Align Designs Platform** (2023 - Actual) - Desarrollador Full Stack

> ⚠️ Grupo Salinas: **NO** incluir Azure Functions, Azure Service Bus ni CI/CD en el CV (apenas usados). Sí incluir: .NET Core 8, C#, React 19, SQL Server, OAuth2/JWT, Entity Framework.

### Stack Tecnológico Principal (con años)

| Tecnología | Años | Nivel |
|------------|------|-------|
| C# / .NET Core 6/8/10 | 3 | Avanzado |
| SQL Server / T-SQL | 3 | Avanzado |
| React 19 | 2 | Avanzado |
| Entity Framework | 3 | Avanzado |
| JavaScript ES2024 | 3 | Avanzado |
| Node.js 18/20 | 3 | Intermedio-Avanzado |
| OAuth2 / JWT | 2 | Intermedio |
| Cifrado AES/RSA | 3.5 | Intermedio |
| TypeScript 5 | 1 | Intermedio |
| Clean Architecture/DDD | 2 | Intermedio |
| PostgreSQL 15/16 | 1 | Intermedio |
| Python 3.x | 1 | Intermedio |
| Vue.js 3 | 1 | Intermedio |
| Angular 17+ | 1 | Intermedio |
| NestJS 11 | 1 | Intermedio |
| Next.js 15 | 1 | Intermedio |
| Docker | 1 | Intermedio |
| GitHub Actions | 1 | Intermedio |
| Azure Service Bus | 2 | Intermedio |
| Prisma ORM | 1 | Intermedio |

### Proyecto Destacado: Align Designs Platform

Plataforma B2B/B2C cloud con arquitectura monorepo profesional:

**Stack**: NestJS 11 + Next.js 15 + PostgreSQL + Prisma + MinIO + Docker

**Características implementadas**:
- Arquitectura modular con SOLID y Clean Architecture
- Sistema de autenticación dual (JWT para admins, OTP para clientes)
- Azure Service Bus para mensajería (colas, topics, suscripciones)
- Cifrado AES/RSA para datos sensibles
- CI/CD con GitHub Actions + SonarCloud
- Docker containerización con health checks
- Sistema de facturación con auto-numeración
- Versionado de archivos automático
- Rate limiting y seguridad (fail2ban, UFW, SSH hardening)

## Flujo de Trabajo

### Actualizar CV
```
1. Identificar qué cambiar (experiencia, skills, proyecto)
2. Usar skill apropiada (/cv-update, /cv-pdf, etc.)
3. Actualizar translations.ts para ambos idiomas (ES + EN)
4. Actualizar data/*.ts si aplica (skills.ts, experience.ts, projects.ts)
5. Verificar que build pase: npm run build
6. Commit y push (especificar archivos, NO usar git add .)
```

### Añadir Nueva Experiencia
```
1. Editar translations.ts → experience.jobs (ES + EN)
2. Editar data/experience.ts → tecnologías del badge (iconos + colores)
3. Verificar PDF ATS y Visual
4. npm run build
```

### Añadir Nueva Habilidad
```
1. Editar data/skills.ts → PDF_SKILLS, SKILLS_DATA_CATEGORIES, SKILLS_DATA_MAIN
2. Verificar que los iconos existan (react-icons/fa o react-icons/si)
3. npm run build
```

### Cambiar Diseño Web
```
1. Revisar design system en src/index.css (clases editoriales)
2. Usar colores del sistema: #b61722 (rojo), #f97316 (naranja)
3. Usar font-['Manrope'] para headers, font-['Inter'] para body
4. npm run build para verificar
```

## Buenas Prácticas para CV de Programador

### Contenido
- Usar verbos de acción: "Desarrollé", "Implementé", "Optimicé"
- Cuantificar logros: "40% reducción", "6 endpoints", "miles de registros"
- Mencionar tecnologías específicas con versiones
- Incluir años de experiencia por tecnología
- Destacar arquitecturas y patrones (SOLID, DDD, Clean Architecture)

### Formato ATS
- Sin columnas, tablas complejas o gráficos
- Fuentes estándar (Helvetica, Arial)
- Keywords del job description
- Secciones claramente etiquetadas
- Formato de fechas consistente

### Diseño Web Editorial
- Manrope Black uppercase para headings
- Cards con hover en rojo `#b61722`
- Hero siempre split layout (no centrado)
- Footer siempre oscuro (zinc-950)

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build (verificar errores — obligatorio antes de commit)
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

## Git

```bash
# Commit de actualización CV
git add src/i18n/translations.ts src/data/skills.ts  # especificar archivos
git commit -m "feat(cv): [descripción del cambio]"
git push
```

## Notas Importantes

1. **Sincronización ES/EN**: Siempre actualizar ambos idiomas en `translations.ts`
2. **Build obligatorio**: Antes de commit, verificar que `npm run build` pase sin errores
3. **Consistencia**: Los datos en `skills.ts`, `experience.ts` y `translations.ts` deben coincidir
4. **ATS vs Visual**: El PDF ATS debe tener el mismo contenido pero sin formato complejo
5. **NO usar `git add .`**: Siempre especificar archivos para evitar incluir archivos sensibles
6. **Grupo Salinas**: No incluir Azure Functions/Service Bus/CI/CD en las bullets (barely used)
7. **Secciones**: El directorio es `Sections/` con S mayúscula (no `sections/`)
