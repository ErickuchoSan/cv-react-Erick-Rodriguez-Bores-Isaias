# Correcciones Pendientes - Code Review

> **Instrucciones para el desarrollador:** Revisar cada sección y corregir los issues listados. Marcar como completado con `[x]` cuando se resuelva.

---

## 1. KISS — No sobrediseñar componentes

### Issues detectados:

- [x] **`src/components/Sections/Skills.tsx:9-68`** — `SKILLS_DATA` está definido dentro del componente. Mover a un archivo de datos separado (`src/data/skills.ts`).
- [x] **`src/components/Sections/Experience.tsx:7-70`** — `EXPERIENCE_DATA` hardcodeado en el componente. Extraer a `src/data/experience.ts`.
- [x] **`src/components/Sections/Projects.tsx:6-25`** — `PROJECTS` hardcodeado. Mover a `src/data/projects.ts`.
- [x] **`src/components/Sections/Languages.tsx:9-15`** — `LANGUAGES_DATA` podría combinarse con las traducciones en lugar de mapear índices.
- [x] **`src/components/Layout/Navbar.tsx:16-23`** — `NAV_LINKS` definido dentro del componente. Extraer a archivo de configuración o usar traducciones.

---

## 2. SoC — Separación de lógica, UI y estado

### Issues detectados:

- [x] **`src/components/Sections/Contact.tsx:8-29`** — Lógica de formulario (estado + handlers + submit) está mezclada con UI. Extraer a un custom hook `useContactForm()`.
- [x] **`src/components/Sections/Skills.tsx`** — Mezcla datos estáticos (iconos, colores de tecnologías) con datos de traducción. Separar:
  - `src/data/skills.ts` → datos estáticos (iconos, colores)
  - `src/i18n/translations.ts` → textos traducibles
- [x] **`src/components/Sections/Experience.tsx:75-87`** — Lógica de mapeo de traducciones dentro del componente. Mover a una utilidad o hacer en el archivo de datos.
- [x] **Crear** `src/hooks/useContactForm.ts` para encapsular la lógica del formulario de contacto.
- [x] **Crear** `src/utils/mergeWithTranslations.ts` para la lógica repetida de merge de datos + traducciones.

---

## 3. DRY — No repetir código

### Issues CRÍTICOS:

- [x] **`src/components/PDF/CVDocument.tsx` vs `CVDocumentEN.tsx`** — Ambos archivos son ~95% idénticos (~470 líneas cada uno). 
  - **Solución:** Crear un componente base `CVDocumentBase.tsx` que reciba el idioma como prop y use las traducciones existentes. Eliminar duplicación.
  
- [x] **Patrón de partículas repetido** en 6 archivos:
  - `Languages.tsx:29-33`
  - `Projects.tsx:41-45`
  - `Skills.tsx:72-76`
  - `Contact.tsx:33-37`
  - `Experience.tsx:91-95`
  - `About.tsx:11-15`
  - **Solución:** Crear componente `src/components/UI/SectionParticles.tsx`

- [x] **Clases CSS repetidas** — `glass-card tech-hover-effect` se repiten en 15+ lugares.
  - **Solución:** Crear componente wrapper `src/components/UI/GlassCard.tsx`

- [x] **Patrón de mapeo datos+traducciones** repetido:
  ```tsx
  // Se repite en: Languages, Projects, Experience
  items.map((item, index) => {
    const trans = t.section.items[index];
    return { ...item, ...trans };
  })
  ```
  - **Solución:** Crear utilidad `mergeDataWithTranslations(data, translations)`

- [x] **Datos de contacto hardcodeados** en múltiples archivos. Ver sección Single Source of Truth.

---

## 4. Single Source of Truth — Estado en un solo lugar

### Issues CRÍTICOS:

- [x] **Datos de contacto duplicados/inconsistentes:**
  | Archivo | Email usado | Ubicación |
  |---------|-------------|-----------|
  | `Contact.tsx:58` | e.bores.i@outlook.com | Correcto |
  | `CVDocument.tsx:262` | e.bores.i@outlook.com | Correcto |
  | `Hero.tsx:89` | erick.rodriguez.bores@gmail.com | INCONSISTENTE |
  | `Footer.tsx:48` | erick.rodriguez.bores@gmail.com | INCONSISTENTE |
  
  - **Solución:** Crear `src/data/contact.ts` con todos los datos de contacto y usarlos en todos los componentes.

- [x] **URLs de redes sociales duplicadas:**
  - LinkedIn: `Contact.tsx:92`, `CVDocument.tsx:267`, `Hero.tsx:86`
  - GitHub: `Contact.tsx:95`, `CVDocument.tsx:273`, `Hero.tsx:83`, `Footer.tsx:45`
  - WhatsApp: `Contact.tsx:98`, `Contact.tsx:26`, `CVDocument.tsx:255`
  
  - **Solución:** Agregar a `src/data/contact.ts`:
    ```typescript
    export const SOCIAL_LINKS = {
      linkedin: 'https://www.linkedin.com/in/...',
      github: 'https://github.com/ErickuchoSan',
      whatsapp: 'https://wa.me/525571104581'
    };
    ```

- [x] **Teléfono hardcodeado** en 3 lugares:
  - `Contact.tsx:26,70`
  - `CVDocument.tsx:256`
  - `CVDocumentEN.tsx:256`
  
- [x] **Datos de experiencia duplicados** entre `Experience.tsx` y `CVDocument.tsx/EN.tsx`. Usar la misma fuente de datos.

- [x] **Datos de proyectos duplicados** entre `Projects.tsx` y `CVDocument.tsx/EN.tsx`.

### Archivo a crear: `src/data/contact.ts`
```typescript
export const CONTACT_INFO = {
  email: 'e.bores.i@outlook.com',
  phone: '+52 55 7110 4581',
  whatsappNumber: '525571104581',
  location: 'Cuajimalpa de Morelos, CDMX',
  social: {
    linkedin: 'https://www.linkedin.com/in/erick-rodr%C3%ADguez-bores-isa%C3%ADas-0a0117149/',
    github: 'https://github.com/ErickuchoSan',
    whatsapp: 'https://wa.me/525571104581'
  }
};
```

---

## 5. Progressive Enhancement — Funcionalidad básica primero

### Issues detectados:

- [x] **`src/components/Sections/Contact.tsx`** — Formulario sin validación:
  - Agregar validación de email (formato)
  - Agregar validación de longitud mínima en mensaje
  - Agregar feedback visual de errores
  
- [x] **`src/components/Sections/Hero.tsx:62-76`** — PDFDownloadLink sin manejo de errores:
  - Agregar estado de error si la generación falla
  - Mostrar mensaje si el navegador no soporta descarga

- [x] **`src/components/Sections/Contact.tsx:22-29`** — `handleSubmit` solo abre WhatsApp:
  - Agregar feedback visual de éxito/error
  - Considerar alternativa si el usuario no tiene WhatsApp (mailto fallback)
  
- [x] **Estados de loading** — Agregar estados de carga donde aplique:
  - Carga de imágenes de perfil
  - Generación de PDF

---

## 6. Accessibility First — Diseño inclusivo

### Issues detectados:

- [x] **`src/components/Layout/Navbar.tsx`** — Accesibilidad del menú:
  - Agregar `role="navigation"` y `aria-label="Main navigation"`
  - Agregar `aria-expanded={isMenuOpen}` al botón del menú móvil
  - Agregar `aria-controls` apuntando al menú móvil

- [x] **`src/components/Layout/Navbar.tsx:56-72`** — Botones de idioma:
  - Agregar `aria-pressed={language === 'es'}` y `aria-pressed={language === 'en'}`
  - Agregar `aria-label="Cambiar idioma a español"` y `aria-label="Change language to English"`

- [x] **`src/components/Layout/Navbar.tsx:75-81`** — Botón de tema:
  - El `aria-label` existe pero debería ser dinámico según el idioma actual

- [x] **`src/components/Sections/Hero.tsx:82-92`** — Links de redes sociales:
  - Agregar `aria-label` descriptivos:
    ```tsx
    aria-label="Visitar perfil de GitHub"
    aria-label="Visitar perfil de LinkedIn"
    aria-label="Enviar correo electrónico"
    ```

- [x] **`src/components/Sections/Footer.tsx:41-51`** — Mismo issue que Hero para links sociales.

- [x] **`src/components/Sections/Contact.tsx:111-147`** — Formulario:
  - Agregar `aria-describedby` en inputs apuntando a mensajes de error
  - Agregar `aria-invalid` cuando hay errores de validación
  - Asociar labels correctamente con inputs (ya están con `htmlFor`)

- [x] **`src/components/Sections/Hero.tsx:108-116`** — Badges flotantes con emojis:
  - Los emojis no son accesibles para lectores de pantalla
  - Agregar `aria-hidden="true"` o reemplazar con texto/iconos accesibles

- [x] **`src/components/Sections/About.tsx:28-29`** — `dangerouslySetInnerHTML`:
  - Asegurar que el HTML sea seguro y accesible
  - Considerar alternativas más seguras

- [x] **`src/components/PDF/CVDocument.tsx:241` y `CVDocumentEN.tsx:241`** — Imagen sin alt:
  - El comentario `eslint-disable jsx-a11y/alt-text` desactiva el warning, pero debería agregarse `alt` real

---

## Resumen de Archivos a Crear

| Archivo | Propósito |
|---------|-----------|
| `src/data/contact.ts` | Datos de contacto centralizados |
| `src/data/skills.ts` | Datos estáticos de skills |
| `src/data/experience.ts` | Datos de experiencia laboral |
| `src/data/projects.ts` | Datos de proyectos |
| `src/hooks/useContactForm.ts` | Lógica del formulario de contacto |
| `src/utils/mergeWithTranslations.ts` | Utilidad para merge datos + traducciones |
| `src/components/UI/SectionParticles.tsx` | Componente de partículas reutilizable |
| `src/components/UI/GlassCard.tsx` | Wrapper con estilos glass-card |
| `src/components/PDF/CVDocumentBase.tsx` | Componente base para PDFs (elimina duplicación) |

---

## Prioridad de Corrección

| Prioridad | Issues | Principio |
|-----------|--------|-----------|
| **ALTA** | Datos de contacto inconsistentes, CVDocument duplicado | Single Source of Truth, DRY |
| **MEDIA** | Extraer datos a archivos separados, crear componentes reutilizables | KISS, SoC, DRY |
| **BAJA** | Accesibilidad, validación de formularios | Accessibility, Progressive Enhancement |

---

## Checklist Final

- [x] Todos los emails son consistentes (elegir uno)
- [x] CVDocument y CVDocumentEN unificados en un componente
- [x] Datos de contacto centralizados
- [x] Componentes UI reutilizables creados
- [x] Accesibilidad implementada (aria-labels, roles)
- [x] Validación de formularios agregada
- [x] Código pasa `npm run lint` sin errores
