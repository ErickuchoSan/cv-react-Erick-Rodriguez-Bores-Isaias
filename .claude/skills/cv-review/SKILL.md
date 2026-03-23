# Skill: /cv-review

## Propósito
Revisar la calidad, consistencia y efectividad del CV para aplicaciones de trabajo.

## Cuándo Usar
- Antes de aplicar a un trabajo
- Después de hacer cambios grandes
- Verificar que todo está actualizado
- Revisar contra job description específico

## Checklist de Revisión Completa

### Información Personal
```markdown
- [ ] Nombre completo correcto
- [ ] Rol/título actualizado
- [ ] Ubicación correcta
- [ ] Email profesional
- [ ] Teléfono actualizado
- [ ] LinkedIn URL funcionando
- [ ] GitHub URL funcionando
```

### Experiencia Laboral
```markdown
- [ ] Fechas correctas y actuales
- [ ] Duración calculada correctamente
- [ ] Empresa más reciente primero
- [ ] Tecnologías mencionadas por trabajo
- [ ] Logros cuantificados (%, números)
- [ ] Verbos de acción usados
- [ ] Sin gaps inexplicados
```

### Habilidades
```markdown
- [ ] Años de experiencia correctos
- [ ] Tecnologías agrupadas lógicamente
- [ ] Iconos correctos para cada tecnología
- [ ] Sin duplicados
- [ ] Solo tecnologías que dominas
```

### Consistencia
```markdown
- [ ] ES y EN tienen mismo contenido
- [ ] skills.ts coincide con translations.ts
- [ ] experience.ts coincide con translations.ts
- [ ] PDF Visual y ATS tienen mismo contenido
```

### Formato
```markdown
- [ ] Sin errores de ortografía
- [ ] Puntuación consistente
- [ ] Capitalización correcta
- [ ] Formato de fechas uniforme
- [ ] Máximo 2 páginas en PDF
```

### Técnico
```markdown
- [ ] npm run build pasa sin errores
- [ ] No hay warnings de TypeScript
- [ ] Imports no usados eliminados
- [ ] PDF se genera correctamente
```

## Revisión contra Job Description

### Paso 1: Extraer Keywords
```
Del job description, extraer:
- Tecnologías requeridas
- Años de experiencia pedidos
- Soft skills mencionados
- Responsabilidades clave
```

### Paso 2: Verificar Match
```markdown
Para cada keyword del job:
- [ ] ¿Aparece en mi CV?
- [ ] ¿Está en la sección correcta?
- [ ] ¿Tiene contexto/ejemplo?
```

### Paso 3: Ajustar si Necesario
```
- Reordenar skills para que las pedidas estén primero
- Añadir keywords faltantes en experiencia
- Ajustar descripción del perfil
```

## Puntuación del CV

### Contenido (40 puntos)
- Experiencia relevante: 15 pts
- Habilidades técnicas: 15 pts
- Logros cuantificados: 10 pts

### Formato (30 puntos)
- Legibilidad: 10 pts
- Estructura clara: 10 pts
- Sin errores: 10 pts

### ATS-Friendly (30 puntos)
- Keywords presentes: 15 pts
- Formato parseable: 15 pts

**Objetivo: 80+ puntos**

## Errores Comunes a Evitar

1. **Fechas incorrectas**: Verificar que suman los años de experiencia
2. **Tecnologías desactualizadas**: No mencionar versiones viejas
3. **Logros vagos**: "Mejoré el sistema" → "Reduje tiempo de consulta 40%"
4. **Inconsistencias ES/EN**: Diferentes datos en cada idioma
5. **Imports no usados**: Causan errores de build
6. **Skills sin experiencia**: No mencionar tecnologías que no dominas
