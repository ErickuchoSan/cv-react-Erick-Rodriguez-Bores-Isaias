# Skills del Proyecto CV - Erick Rodriguez Bores Isaias

## Skills Específicas del CV (6 Total)

### /cv-update
**Propósito:** Actualizar experiencia, habilidades o proyectos del CV
**Usa cuando:** Añadir trabajo nuevo, actualizar años de experiencia, modificar proyectos
**Archivos:** `translations.ts`, `skills.ts`, `experience.ts`, `projects.ts`
**Referencia:** `.claude/skills/cv-update/references/best-practices.md`

### /cv-pdf
**Propósito:** Modificar diseño de los PDFs (visual y ATS)
**Usa cuando:** Cambiar estilos, ajustar estructura, corregir problemas de renderizado
**Archivos:** `CVDocument*.tsx` en `src/components/PDF/`

### /cv-ats
**Propósito:** Optimizar CV para sistemas ATS (Applicant Tracking Systems)
**Usa cuando:** Aplicar a empresas grandes, verificar formato parseable, añadir keywords
**Reglas:** Sin columnas, fuentes estándar (Helvetica), keywords del job description

### /cv-web
**Propósito:** Modificar la versión web del CV
**Usa cuando:** Cambiar diseño React, mejorar responsive, añadir animaciones
**Stack:** React + Vite + Tailwind + Framer Motion

### /cv-translate
**Propósito:** Sincronizar versiones español e inglés
**Usa cuando:** Añadir contenido nuevo, verificar consistencia entre idiomas
**Archivo:** `src/i18n/translations.ts`

### /cv-review
**Propósito:** Revisar calidad y consistencia del CV
**Usa cuando:** Antes de aplicar a trabajo, después de cambios grandes
**Checklist:** Información personal, experiencia, habilidades, formato, técnico

---

## Skills de Desarrollo Heredadas (Útiles para el proyecto)

### /frontend-review
**Propósito:** Revisar componentes React contra principios de diseño
**Evalúa:** DRY, KISS, SoC, Accessibility

### /performance-analyzer
**Propósito:** Optimizar performance de la web
**Detecta:** Bundle size, Core Web Vitals, lazy loading

### /dependency-health
**Propósito:** Auditar dependencias del proyecto
**Detecta:** CVEs, versiones desactualizadas, licencias

---

## Flujo de Trabajo CV

### Actualizar Contenido
```
1. /cv-update      → Modificar contenido
2. /cv-translate   → Sincronizar ES/EN
3. /cv-review      → Verificar consistencia
4. npm run build   → Verificar build
5. git commit/push → Guardar cambios
```

### Aplicar a Trabajo Específico
```
1. /cv-review      → Revisar contra job description
2. /cv-ats         → Verificar keywords y formato ATS
3. /cv-update      → Ajustar si necesario
4. Descargar PDF   → Usar versión ATS
```

### Modificar Diseño
```
1. /cv-web         → Cambios versión web
2. /cv-pdf         → Cambios versión PDF
3. npm run build   → Verificar build
```

---

## Archivos Principales

| Archivo | Contenido |
|---------|-----------|
| `src/i18n/translations.ts` | Todo el contenido ES/EN |
| `src/data/skills.ts` | Habilidades técnicas |
| `src/data/experience.ts` | Tecnologías por trabajo |
| `src/data/projects.ts` | Proyectos destacados |
| `src/data/contact.ts` | Información de contacto |
| `src/components/PDF/*.tsx` | Generadores de PDF |

---

## Versiones del CV

| Tipo | Español | Inglés |
|------|---------|--------|
| **Web** | ✅ | ✅ (toggle idioma) |
| **PDF Visual** | `CVDocument.tsx` | `CVDocumentEN.tsx` |
| **PDF ATS** | `CVDocumentATS_ES.tsx` | `CVDocumentATS_EN.tsx` |

---

## Comandos

```bash
npm run dev      # Desarrollo local
npm run build    # Build producción (verificar errores)
npm run preview  # Preview del build
npm run lint     # Linting
```

---

## Datos del Candidato (Fuente de Verdad)

- **Nombre:** Erick Rodriguez Bores Isaias
- **Rol:** Desarrollador Full Stack .NET & React
- **Experiencia:** 3 años
- **Stack Principal:** C#/.NET Core, React 19, SQL Server, Azure
- **Disponibilidad:** Inmediata (1 semana o 3 días)
- **Modalidad:** Remoto / Híbrido
