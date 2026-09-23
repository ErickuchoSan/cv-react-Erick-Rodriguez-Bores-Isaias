# CV — Erick Rodríguez Bores Isaías

Portfolio y CV de un desarrollador Full Stack .NET & React: una web bilingüe (ES/EN) y dos PDFs
generados en el navegador (visual de 1 página y formato ATS), todos a partir de los mismos datos.

## Requisitos

- Node.js 20+
- pnpm 10 (`packageManager` en `package.json`)

## Levantar el proyecto

```bash
pnpm install
pnpm run dev        # http://localhost:5173  ·  ?lang=en abre la versión en inglés
```

## Scripts

| Script | Qué hace |
| --- | --- |
| `pnpm run dev` | Servidor de desarrollo |
| `pnpm run build` | Type-check (`tsc -b`) + build de producción en `dist/` |
| `pnpm run lint` | ESLint (debe quedar en 0 problemas) |
| `pnpm run preview` | Sirve el build de `dist/` |

## Editar el contenido

Todo el contenido vive en `src/data/`, con cada texto en español e inglés lado a lado:

| Archivo | Contenido |
| --- | --- |
| `src/data/cv.ts` | Perfil, contacto, trabajos, educación, idiomas, competencias, métricas |
| `src/data/projects.ts` | Proyectos del showcase y sus case studies |
| `src/data/skills.ts` | Skills de la web, del PDF ATS (con años) y del PDF visual |
| `src/i18n/translations.ts` | Textos de interfaz (títulos, botones, etiquetas de los PDFs) |

La web (`src/v3/`) y los PDFs (`src/components/PDF/`) leen del mismo modelo (`src/data/model.ts`).
Las duraciones de cada trabajo y los años de experiencia se calculan a partir de las fechas.

## Stack

React 19 · TypeScript 5.9 (strict) · Vite 7 · @react-pdf/renderer 4 · Vercel Analytics.
Publicado en <https://eboresi.com> (Vercel): cada push a `master` despliega.
