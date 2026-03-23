# Skill: /cv-ats

## Propósito
Optimizar el CV para sistemas ATS (Applicant Tracking Systems) que filtran candidatos automáticamente.

## Cuándo Usar
- Aplicar a empresas grandes con sistemas automatizados
- Crear versión compatible con parsers de CV
- Asegurar que keywords sean detectados
- Verificar formato ATS-friendly

## Qué es ATS
Los ATS (Applicant Tracking Systems) son software que:
- Escanean CVs automáticamente
- Extraen información estructurada
- Buscan keywords del job description
- Filtran candidatos antes del humano

## Reglas ATS Críticas

### HACER
- Usar fuentes estándar (Helvetica, Arial, Times)
- Formato de una sola columna
- Secciones con headers claros
- Fechas en formato consistente (Mes Año - Mes Año)
- Keywords exactos del job description
- Bullet points simples (-, *)
- Texto plano, sin tablas complejas

### NO HACER
- Columnas múltiples
- Tablas complejas
- Gráficos o imágenes
- Headers/footers elaborados
- Fuentes decorativas
- Colores (excepto negro)
- Iconos o emojis

## Archivos ATS
- `CVDocumentATS_ES.tsx` - Versión española
- `CVDocumentATS_EN.tsx` - Versión inglesa
- `CVDocumentATSBase.tsx` - Base compartida

## Estructura ATS Óptima

```
NOMBRE COMPLETO
Rol | Ubicación | Teléfono | Email | LinkedIn | GitHub

────────────────────────────────────────

PERFIL PROFESIONAL
[Párrafo con keywords principales]

────────────────────────────────────────

HABILIDADES TÉCNICAS
Skill 1 | Skill 2 | Skill 3 | Skill 4 | ...

────────────────────────────────────────

EXPERIENCIA PROFESIONAL

Título del Puesto                    Mes Año - Mes Año
Nombre de la Empresa
[Descripción breve]
- Responsabilidad/Logro 1
- Responsabilidad/Logro 2
- Responsabilidad/Logro 3

────────────────────────────────────────

EDUCACIÓN
Grado - Institución - Año

────────────────────────────────────────

IDIOMAS
Idioma: Nivel

────────────────────────────────────────

PROYECTOS
Nombre - Descripción - Tecnologías
```

## Keywords para Desarrollador .NET/React

### Backend
- C#, .NET Core, .NET Framework, ASP.NET
- Entity Framework, LINQ, SQL Server, T-SQL
- REST API, Web API, Microservices
- Azure, Azure Functions, Azure Service Bus
- OAuth2, JWT, Authentication, Authorization
- SOLID, Clean Architecture, DDD, Design Patterns

### Frontend
- React, JavaScript, TypeScript, Node.js
- HTML5, CSS3, Tailwind CSS, Bootstrap
- Responsive Design, SPA, PWA

### DevOps
- Git, GitHub, Azure DevOps, CI/CD
- Docker, Containers, Kubernetes

### Soft Skills
- Agile, Scrum, Team Collaboration
- Problem Solving, Self-taught, Adaptability

## Checklist ATS

```markdown
- [ ] Solo fuentes estándar (Helvetica)
- [ ] Una sola columna
- [ ] Sin gráficos ni iconos
- [ ] Headers de sección en MAYÚSCULAS
- [ ] Fechas formato "Mes Año - Mes Año"
- [ ] Keywords del job description incluidos
- [ ] Bullet points con guiones simples (-)
- [ ] Máximo 2 páginas
- [ ] Footer simple con paginación
```

## Validar Formato ATS

1. Copiar texto del PDF
2. Pegar en editor de texto plano
3. Verificar que se lee correctamente
4. Verificar que secciones están claras
5. Verificar que keywords son visibles
