# Skill: /cv-pdf

## Propósito
Modificar y optimizar los diseños de los CV en formato PDF (visual y ATS).

## Cuándo Usar
- Cambiar diseño del PDF visual
- Ajustar estilos (colores, fuentes, espaciado)
- Modificar estructura de secciones
- Corregir problemas de renderizado
- Añadir nuevas secciones al PDF

## Archivos PDF

| Archivo | Tipo | Idioma |
|---------|------|--------|
| `CVDocument.tsx` | Visual | ES |
| `CVDocumentEN.tsx` | Visual | EN |
| `CVDocumentATS_ES.tsx` | ATS | ES |
| `CVDocumentATS_EN.tsx` | ATS | EN |
| `CVDocumentATSBase.tsx` | Base compartida | - |

## Ubicación
`src/components/PDF/`

## Tecnología
- **@react-pdf/renderer**: Generación de PDF
- **Fuentes**: Helvetica (ATS), Custom (Visual)

## Estructura del PDF Visual

```
┌─────────────────────────────────────┐
│ HEADER (Nombre, Rol, Contacto)      │
├─────────────────────────────────────┤
│ PERFIL PROFESIONAL                  │
├─────────────────────────────────────┤
│ HABILIDADES TÉCNICAS                │
├─────────────────────────────────────┤
│ COMPETENCIAS CLAVE                  │
├─────────────────────────────────────┤
│ EXPERIENCIA PROFESIONAL             │
│  └── Job 1                          │
│  └── Job 2                          │
│  └── Job 3                          │
├─────────────────────────────────────┤
│ EDUCACIÓN                           │
├─────────────────────────────────────┤
│ IDIOMAS                             │
├─────────────────────────────────────┤
│ PROYECTOS DESTACADOS                │
├─────────────────────────────────────┤
│ FOOTER                              │
└─────────────────────────────────────┘
```

## Estilos PDF (StyleSheet)

```typescript
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
        paddingTop: 36,
        paddingBottom: 50,
        paddingHorizontal: 48,
    },
    name: {
        fontSize: 18,
        fontFamily: 'Helvetica-Bold',
    },
    // ... más estilos
});
```

## Checklist PDF

```markdown
- [ ] Verificar que cabe en 2 páginas máximo
- [ ] Revisar saltos de página (wrap={false} para items)
- [ ] Verificar footer con paginación
- [ ] Probar generación: descargar y abrir
- [ ] Comparar ES y EN tienen misma estructura
```

## Problemas Comunes

### Texto cortado
```typescript
// Añadir minPresenceAhead para evitar cortes
sectionTitle: {
    minPresenceAhead: 80,
}
```

### Salto de página en medio de item
```typescript
// Usar wrap={false} en el View del item
<View style={styles.experienceItem} wrap={false}>
```

### Fuentes no renderizando
```typescript
// Usar fuentes built-in para ATS
fontFamily: 'Helvetica', // o 'Helvetica-Bold'
```
