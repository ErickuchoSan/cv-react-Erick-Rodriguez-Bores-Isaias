# Skill: /cv-web

## Propósito
Modificar y optimizar la versión web del CV (React + Vite + Tailwind).

## Cuándo Usar
- Cambiar diseño o layout de secciones
- Añadir nuevos componentes
- Modificar estilos Tailwind
- Mejorar animaciones
- Optimizar responsive design
- Añadir funcionalidades interactivas

## Stack Tecnológico
- **React 18+**: UI components
- **Vite**: Build tool
- **Tailwind CSS**: Estilos
- **Framer Motion**: Animaciones
- **React Icons**: Iconos
- **i18n**: Internacionalización (ES/EN)

## Estructura Web

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Banner principal
│   │   ├── About.tsx         # Sobre mí
│   │   ├── Experience.tsx    # Experiencia laboral
│   │   ├── Skills.tsx        # Habilidades
│   │   ├── Projects.tsx      # Proyectos
│   │   ├── Contact.tsx       # Contacto
│   │   └── Footer.tsx        # Pie de página
│   ├── PDF/                  # Generadores PDF
│   └── ui/                   # Componentes reutilizables
├── data/                     # Datos estructurados
├── i18n/                     # Traducciones
├── hooks/                    # Custom hooks
└── App.tsx                   # Componente principal
```

## Secciones del CV Web

### Hero
- Nombre y título
- Descripción breve
- Botones CTA (Contacto, Proyectos, Descargar CV)
- Animación de entrada

### About
- Descripción detallada
- Estadísticas (años exp, tecnologías, proyectos)
- Educación
- Disponibilidad
- Intereses profesionales

### Experience
- Timeline de trabajos
- Badges de tecnologías por trabajo
- Funciones y logros
- Animaciones al scroll

### Skills
- Tecnologías principales (iconos grandes)
- Categorías (Backend, Frontend, DevOps, IA)
- Competencias clave

### Projects
- Cards de proyectos
- Descripción
- Tecnologías usadas
- Links (GitHub, Demo)

### Contact
- Formulario de contacto (WhatsApp)
- Redes sociales
- Información de contacto

## Patrones de Diseño

### Responsive
```tsx
// Mobile first con Tailwind
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Dark Mode
```tsx
// Soporte dark mode
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

### Animaciones
```tsx
// Framer Motion
<motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
>
```

## Checklist Web

```markdown
- [ ] Responsive en mobile, tablet, desktop
- [ ] Dark mode funcionando
- [ ] Animaciones suaves (no jarring)
- [ ] Links externos con target="_blank"
- [ ] Botón de descarga CV funcionando
- [ ] Selector de idioma ES/EN
- [ ] Lighthouse score > 90
- [ ] Sin errores en consola
```

## Comandos

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

## Optimizaciones

### Performance
- Lazy loading de imágenes
- Code splitting
- Minificación CSS/JS

### SEO
- Meta tags apropiados
- Open Graph tags
- Sitemap

### Accesibilidad
- Alt text en imágenes
- Roles ARIA
- Navegación por teclado
- Contraste adecuado
