# Skill: /cv-update

## Propósito
Actualizar el contenido del CV (experiencia, habilidades, proyectos) manteniendo consistencia entre todas las versiones.

## Cuándo Usar
- Añadir nueva experiencia laboral
- Actualizar habilidades técnicas con nuevos años
- Añadir o modificar proyectos
- Actualizar información de contacto
- Cambiar descripción del perfil

## Archivos a Modificar

### Para Experiencia Laboral
1. `src/i18n/translations.ts` → `experience.jobs` (ES y EN)
2. `src/data/experience.ts` → badges de tecnologías

### Para Habilidades
1. `src/data/skills.ts` → `PDF_SKILLS`, `SKILLS_DATA_CATEGORIES`, `SKILLS_DATA_MAIN`
2. `src/i18n/translations.ts` → `skills.competencies`

### Para Proyectos
1. `src/i18n/translations.ts` → `projects.items`
2. `src/data/projects.ts` → datos técnicos

### Para Información Personal
1. `src/data/contact.ts` → datos de contacto
2. `src/i18n/translations.ts` → `hero`, `about`, `footer`

## Checklist de Actualización

```markdown
- [ ] Actualizar versión ES en translations.ts
- [ ] Actualizar versión EN en translations.ts
- [ ] Actualizar data/*.ts si aplica
- [ ] Verificar iconos en experience.ts
- [ ] Ejecutar npm run build
- [ ] Verificar que no hay errores TypeScript
- [ ] Commit con mensaje descriptivo
```

## Formato de Experiencia

```typescript
{
    role: "Título del Puesto",
    company: "Nombre Empresa",
    period: "Mes Año - Mes Año / Actual",
    duration: "X años",
    description: "Descripción breve del rol. Stack: tecnologías.",
    functions: [
        "Función 1 con tecnología específica.",
        "Función 2 con resultado cuantificable."
    ],
    achievements: [
        "Logro cuantificable (40% mejora, X endpoints, etc.)."
    ]
}
```

## Formato de Habilidad

```typescript
// En PDF_SKILLS
"Nombre Tecnología (X años)"

// En SKILLS_DATA_CATEGORIES
{ name: "Tecnología", icon: FaIcono, color: "text-color-500" }
```

## Buenas Prácticas

1. **Verbos de acción**: Desarrollé, Implementé, Optimicé, Lideré
2. **Cuantificar**: 40% mejora, 6 endpoints, miles de registros
3. **Tecnologías específicas**: .NET Core 8, React 19, SQL Server 2022
4. **Años de experiencia**: Incluir años entre paréntesis
5. **Consistencia ES/EN**: Mismo contenido en ambos idiomas
