# Skill: /cv-translate

## Propósito
Mantener sincronizadas las versiones en español e inglés del CV.

## Cuándo Usar
- Añadir nuevo contenido en un idioma
- Verificar que ambas versiones tienen el mismo contenido
- Corregir traducciones
- Actualizar terminología técnica

## Archivo Principal
`src/i18n/translations.ts`

## Estructura

```typescript
export const translations = {
    es: {
        nav: { ... },
        hero: { ... },
        about: { ... },
        experience: { ... },
        skills: { ... },
        projects: { ... },
        languages: { ... },
        contact: { ... },
        footer: { ... }
    },
    en: {
        // Misma estructura que 'es'
    }
};
```

## Reglas de Traducción

### Terminología Técnica
| Español | Inglés |
|---------|--------|
| Desarrollador Full Stack | Full Stack Developer |
| Años de experiencia | Years of experience |
| Habilidades Técnicas | Technical Skills |
| Experiencia Profesional | Professional Experience |
| Competencias Clave | Key Competencies |
| Proyectos Destacados | Featured Projects |
| Logros Destacados | Key Achievements |
| Arquitectura Limpia | Clean Architecture |

### Verbos de Acción
| Español | Inglés |
|---------|--------|
| Desarrollé | Developed |
| Implementé | Implemented |
| Optimicé | Optimized |
| Lideré | Led |
| Diseñé | Designed |
| Integré | Integrated |
| Automaticé | Automated |
| Reduje | Reduced |
| Mejoré | Improved |

### Fechas
| Español | Inglés |
|---------|--------|
| Mayo 2024 - Actual | May 2024 - Present |
| ~2 años | ~2 years |
| 1 año | 1 year |
| 10 meses | 10 months |

## Checklist de Sincronización

```markdown
- [ ] Todas las secciones tienen contenido en ambos idiomas
- [ ] Números y fechas son iguales
- [ ] Nombres de tecnologías son iguales (no traducir)
- [ ] Links y URLs son iguales
- [ ] Estructura de arrays es igual (mismo número de items)
- [ ] Verificar gramática en ambos idiomas
```

## Ejemplo de Sincronización

```typescript
// ES
{
    role: "Programador de Auditoría Senior",
    company: "Grupo Salinas",
    period: "Mayo 2024 - Actual",
    duration: "~2 años",
}

// EN
{
    role: "Senior Audit Programmer",
    company: "Grupo Salinas", // No traducir nombre empresa
    period: "May 2024 - Present",
    duration: "~2 years",
}
```

## NO Traducir
- Nombres de empresas
- Nombres de tecnologías (React, .NET Core, SQL Server)
- Nombres propios
- URLs y links
- Nombres de certificaciones

## Herramientas
- Comparar secciones lado a lado
- Contar items en arrays para verificar paridad
- Buscar texto en ambos idiomas
