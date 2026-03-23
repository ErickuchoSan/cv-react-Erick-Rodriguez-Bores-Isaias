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
│   ├── PDF/                    # Componentes de generación PDF
│   │   ├── CVDocument.tsx      # PDF Visual ES
│   │   ├── CVDocumentEN.tsx    # PDF Visual EN
│   │   ├── CVDocumentATS_ES.tsx # PDF ATS ES
│   │   ├── CVDocumentATS_EN.tsx # PDF ATS EN
│   │   └── CVDocumentATSBase.tsx # Base compartida ATS
│   └── sections/               # Secciones de la web
├── data/
│   ├── skills.ts              # Habilidades técnicas
│   ├── experience.ts          # Experiencia laboral
│   ├── projects.ts            # Proyectos destacados
│   └── contact.ts             # Información de contacto
├── i18n/
│   └── translations.ts        # Traducciones ES/EN
└── ...
```

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

### Experiencia Laboral
1. **Grupo Salinas** (Mayo 2024 - Actual) - Programador de Auditoría Senior
2. **Digital Solutions** (Mayo 2023 - Mayo 2024) - Desarrollador Full Stack
3. **Freelance** (2022 - 2023) - Desarrollador Full Stack

### Stack Tecnológico Principal (con años)

| Tecnología | Años | Nivel |
|------------|------|-------|
| C# / .NET Core | 3 | Avanzado |
| SQL Server / T-SQL | 3 | Avanzado |
| React 19 | 2 | Avanzado |
| Entity Framework | 3 | Avanzado |
| JavaScript | 3 | Avanzado |
| Node.js | 3 | Intermedio-Avanzado |
| Azure Service Bus | 2 | Intermedio |
| OAuth2 | 2 | Intermedio |
| Cifrado AES/RSA | 3.5 | Intermedio |
| Azure Functions | 1 | Intermedio |
| TypeScript | 1 | Intermedio |
| Clean Architecture/DDD | 2 | Intermedio |

### Proyecto Destacado: Align Designs Platform

Plataforma B2B/B2C cloud con arquitectura monorepo profesional:

**Stack**: NestJS 11 + Next.js 15 + PostgreSQL + Prisma + MinIO

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
3. Actualizar translations.ts para ambos idiomas
4. Actualizar data/*.ts si aplica
5. Verificar que build pase: npm run build
6. Commit y push
```

### Añadir Nueva Experiencia
```
1. Editar translations.ts → experience.jobs (ES + EN)
2. Editar data/experience.ts → tecnologías del badge
3. Verificar PDF ATS y Visual
4. npm run build
```

### Añadir Nueva Habilidad
```
1. Editar data/skills.ts → PDF_SKILLS, SKILLS_DATA_CATEGORIES
2. Verificar que los iconos existan
3. npm run build
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

### Formato Visual
- Diseño limpio y profesional
- Colores corporativos sutiles
- Iconos para tecnologías
- Jerarquía visual clara
- Máximo 2 páginas

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build (verificar errores)
npm run build

# Preview
npm run preview

# Lint
npm run lint
```

## Git

```bash
# Commit de actualización CV
git add .
git commit -m "feat(cv): [descripción del cambio]"
git push
```

## Notas Importantes

1. **Sincronización ES/EN**: Siempre actualizar ambos idiomas en translations.ts
2. **Build obligatorio**: Antes de commit, verificar que `npm run build` pase
3. **Consistencia**: Los datos en skills.ts, experience.ts y translations.ts deben coincidir
4. **ATS vs Visual**: El PDF ATS debe tener el mismo contenido pero sin formato complejo
