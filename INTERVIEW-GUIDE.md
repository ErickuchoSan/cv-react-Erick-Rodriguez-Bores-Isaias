# Guia de Entrevista Tecnica - Erick Rodriguez Bores Isaias

## Resumen Profesional

**Rol:** Desarrollador Full Stack .NET & React
**Experiencia:** 3 anios
**Disponibilidad:** Inmediata (1 semana o 3 dias)
**Modalidad:** Remoto / Hibrido

---

## Stack Tecnico con Anios de Experiencia

### Backend (Principal)

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| C# | 3 | Avanzado | Grupo Salinas, Digital Solutions, Freelance |
| .NET Core | 3 | Avanzado | v3 a v10, APIs REST, microservicios |
| Entity Framework | 3 | Avanzado | Code First, migrations, LINQ |
| SQL Server / T-SQL | 3 | Avanzado | Procedimientos almacenados, funciones, optimizacion |
| Procedimientos Almacenados | 3 | Avanzado | Grupo Salinas, Digital Solutions |
| REST API | 3 | Avanzado | 6+ endpoints, documentacion Swagger |
| Expresiones Lambda / LINQ | 3 | Avanzado | Parte del dia a dia en C# |
| Swagger / OpenAPI | 2 | Intermedio | Documentacion de APIs en Grupo Salinas |

### Frontend

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| React 19 | 2 | Intermedio-Avanzado | Proyectos personales, Align Designs |
| JavaScript | 3 | Avanzado | Todos los proyectos |
| TypeScript | 1 | Intermedio | 1 aplicacion completa |
| Node.js | 3 | Intermedio | APIs, scripts, proyectos |
| CSS / Bootstrap | 2 | Avanzado | Diseno responsivo, Grupo Salinas |
| jQuery | 2 | Intermedio | Digital Solutions |

### DevOps / Infraestructura

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| GitHub Actions / CI/CD | 1 | Intermedio | Align Designs — pipeline automatizado |
| Docker | 1 | Intermedio | Align Designs — contenedores + health checks |
| Digital Ocean | 1 | Intermedio | Servidor VPS propio con deploy automatizado |
| CRON / Scheduled Jobs | 6 meses | Basico-Intermedio | Jobs en pipelines de GitHub Actions |
| Git / GitHub | 2 | Avanzado | Control de versiones, ramas, PRs |
| Postman / Insomnia | 1 | Intermedio | Pruebas de API |

### Seguridad

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| OAuth2 | 2 | Intermedio | Autenticacion en APIs |
| JWT | 1 | Intermedio | Tokenizacion, refresh tokens |
| Cifrado AES/RSA | 3.5 | Avanzado | Cifrado de texto, datos sensibles |
| OWASP Top 10 | - | Aplicado | No por nombre, pero: rate limiting, input validation, AES/RSA, SSH hardening, fail2ban |

### Arquitectura

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| SOLID | 2 | Avanzado | Todos los proyectos |
| Clean Architecture | 2 | Intermedio-Avanzado | Grupo Salinas, Align Designs |
| DDD | 1 | Intermedio | Grupo Salinas |
| Event-Driven Architecture | 1 | Intermedio | Align Designs — arquitectura basada en eventos/mensajes |
| Microservicios | 1 | Intermedio | Proyectos personales |

### Testing / Metodologias

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| Pruebas Unitarias | 6 meses | Basico | Proyectos propios |
| SCRUM | 10 meses | Basico-Intermedio | Trabajo en equipo |

---

## Preguntas Frecuentes y Respuestas

### C# / .NET Core

**P: Que version de .NET Core has usado?**
> He trabajado desde .NET Core 3 (2019) hasta la version 10. Mi experiencia mas reciente es con .NET Core 6 en Grupo Salinas donde desarrollo APIs REST para sistemas de auditoria, y conozco las nuevas caracteristicas hasta .NET 10.

**P: Como implementas Entity Framework?**
> Uso Code First con migrations. Defino mis entidades, configuro relaciones con Fluent API, y uso LINQ para consultas. En Grupo Salinas refactorize arquitectura legacy hacia EF con principios limpios.

**P: Que son las expresiones Lambda?**
> Son funciones anonimas que uso constantemente con LINQ en C#. Por ejemplo:
> ```csharp
> var activos = lista.Where(x => x.Activo).OrderBy(x => x.Nombre).Select(x => x.Id);
> ```
> Las uso para filtrar, ordenar y transformar colecciones. Llevan 3 anios siendo parte de mi trabajo diario.

**P: Como manejas autenticacion en tus APIs?**
> Implemento OAuth2 con JWT tokens. El flujo es: login -> validar credenciales -> generar access token + refresh token -> cliente usa token en headers -> middleware valida en cada request.

**P: Como documentas tus APIs?**
> Con Swagger/OpenAPI. En Grupo Salinas cree la documentacion de la API v2 de Honestel con todos sus endpoints, schemas y ejemplos de request/response.

**P: Que son los procedimientos almacenados y cuanto llevas usandolos?**
> 3 anios. Son bloques de SQL precompilados en el servidor. Los uso para:
> - Logica de negocio compleja que requiere multiples operaciones
> - Optimizacion de consultas (el plan de ejecucion se cachea)
> - Seguridad (el usuario solo ejecuta el SP, no accede a las tablas directamente)
> En Grupo Salinas optimice SPs criticos reduciendo un 40% el tiempo de ejecucion.

### Azure / Cloud (Lockton lo requiere)

**P: Que son Azure Functions y cuando las usas?**
> Son funciones serverless que se ejecutan bajo demanda sin administrar servidores. Las uso para:
> - Triggers de Service Bus (procesar mensajes de colas)
> - Timers (tareas programadas tipo CRON)
> - HTTP triggers (endpoints ligeros)

**P: Explica Azure Service Bus**
> Es un servicio de mensajeria empresarial. Lo uso para:
> - **Colas**: Mensajes punto a punto (1 productor -> 1 consumidor)
> - **Topics/Subscriptions**: Publicar/suscribir (1 mensaje -> multiples suscriptores)
> - **Dead Letter Queue (DLQ)**: Mensajes que fallaron
> - **Retry con backoff**: Reintentos con espera exponencial

**P: Que es arquitectura Serverless?**
> Es ejecutar codigo sin administrar infraestructura. Azure Functions ES serverless. Se ejecutan en respuesta a triggers (HTTP, Service Bus, Timer) sin que yo administre servidores.

**P: Que es Event-Driven Architecture?**
> Es una arquitectura donde los componentes se comunican a traves de eventos en lugar de llamadas directas. Un productor emite un evento, los consumidores reaccionan independientemente. En Align Designs use este patron — cuando ocurre una accion, se dispara un evento que otros modulos procesan de forma asincrona. Esto desacopla los servicios y mejora la escalabilidad.

**P: Que son los CRON/Scheduled Jobs?**
> Son tareas programadas que se ejecutan automaticamente en intervalos definidos. En mis pipelines de GitHub Actions tengo jobs programados con sintaxis cron. Ejemplo: `0 2 * * *` ejecuta algo todos los dias a las 2am. Los uso para deploys automatizados, limpieza de logs, reportes periodicos.

### Seguridad

**P: Como implementas cifrado?**
> Uso:
> - **AES** (simetrico): Para cifrar datos en reposo, uso una clave secreta
> - **RSA** (asimetrico): Para intercambio seguro de claves, firma digital
> - **SHA-256**: Para hashing de contrasenas (junto con salt)
>
> Tengo 3.5 anios cifrando texto y datos sensibles en todos mis proyectos.

**P: Conoces OWASP Top 10?**
> No lo conozco por nombre especifico, pero aplico sus principios en mis proyectos:
> - Rate limiting para prevenir fuerza bruta
> - Validacion y sanitizacion de inputs
> - Cifrado AES/RSA para datos sensibles
> - SSH hardening y fail2ban en mi servidor
> - Autenticacion con OAuth2/JWT
> - Principio de minimo privilegio en BD

**P: Diferencia entre OAuth2 y JWT?**
> - **OAuth2**: Es el PROTOCOLO/FRAMEWORK de autorizacion
> - **JWT**: Es el FORMATO del token que contiene claims
>
> OAuth2 define el flujo (authorization code, client credentials, etc.) y JWT es como se estructura el token resultante.

### Arquitectura

**P: Explica SOLID**
> - **S**ingle Responsibility: Una clase, una responsabilidad
> - **O**pen/Closed: Abierto a extension, cerrado a modificacion
> - **L**iskov Substitution: Subclases sustituibles por clase base
> - **I**nterface Segregation: Interfaces especificas, no genericas
> - **D**ependency Inversion: Depender de abstracciones, no implementaciones

**P: Que es Clean Architecture?**
> Separacion en capas:
> - **Domain**: Entidades, logica de negocio pura
> - **Application**: Casos de uso, interfaces
> - **Infrastructure**: Implementaciones (DB, APIs externas)
> - **Presentation**: Controllers, UI
>
> Las dependencias van hacia adentro (UI -> Application -> Domain).

**P: Que es DDD?**
> Domain-Driven Design. Enfocarse en el dominio del negocio:
> - **Entities**: Objetos con identidad unica
> - **Value Objects**: Objetos sin identidad, inmutables
> - **Aggregates**: Grupos de entidades con raiz
> - **Repositories**: Abstraccion de persistencia
> - **Domain Services**: Logica que no pertenece a una entidad

**P: Que es Event-Driven Architecture?**
> Arquitectura donde los componentes reaccionan a eventos en lugar de llamarse directamente. Beneficios: desacoplamiento, escalabilidad, resiliencia. En Align Designs los modulos publican eventos cuando cambia el estado, y otros modulos suscritos reaccionan de forma independiente y asincrona.

### SQL Server

**P: Como optimizas consultas?**
> - Analizo planes de ejecucion
> - Creo indices apropiados
> - Uso procedimientos almacenados (plan cacheado)
> - Evito SELECT *
> - Optimizo JOINs
>
> **Logro**: Reduci 40% el tiempo de consultas criticas en Grupo Salinas.

**P: Diferencia entre procedimiento almacenado y funcion?**
> - **Procedimiento**: Puede modificar datos (INSERT/UPDATE/DELETE), no retorna valor directamente
> - **Funcion**: Solo lectura, retorna valor, se usa en SELECT

**P: Cuanto llevas con T-SQL?**
> 3 anios. Escribo consultas complejas, JOINs multitabla, CTEs (Common Table Expressions), funciones de ventana (ROW_NUMBER, PARTITION BY) y procedimientos almacenados optimizados.

### React

**P: Que version de React usas?**
> React 19. Uso hooks (useState, useEffect, useContext), componentes funcionales, y manejo de estado con Context API.

**P: Como manejas estado en React?**
> - **Local**: useState para estado de componente
> - **Global**: Context API para estado compartido (como idioma, tema)
> - Para apps complejas consideraria Redux o Zustand

---

## Mis Logros Cuantificados

### Grupo Salinas (Mayo 2024 - Actual)
- Creacion de API v2 de Honestel desde cero (6 endpoints) con documentacion Swagger
- **40% reduccion** en tiempo de consultas SQL mediante optimizacion de SPs
- Automatizacion de **5 procesos** eliminando **~8 hrs/semana** de trabajo manual

### Digital Solutions (Mayo 2023 - Mayo 2024)
- Sistema de reclutamiento completo (**12 modulos**) en 8 meses
- Modulo de carga masiva: **+5,000 registros en <10 segundos**
- **50% reduccion** en tiempo de onboarding

### Align Designs (Oct. 2025 - Actual)
- Arquitectura monorepo NestJS 11 + Next.js 15 + PostgreSQL + Docker
- CI/CD automatizado con GitHub Actions en servidor Digital Ocean propio
- Autenticacion dual JWT (admins) / OTP (clientes) con RBAC

---

## Habilidades que NO Tengo (Ser Honesto)

| Habilidad | Estado |
|-----------|--------|
| SSO | No he implementado |
| App Logic (Azure) | No conozco |
| Entra ID | No conozco |
| Cascada | No he usado |
| Kanban | No he usado formalmente |
| SonarQube | No he usado |
| Pruebas integrales | 0 anios formales |
| Arquitectura Serverless | Basico — conozco el concepto via Azure Functions |
| SAML 2.0 | 2 meses, muy basico |

---

## Soft Skills

| Habilidad | Evidencia |
|-----------|-----------|
| Autodidacta | Aprendi 10+ tecnologias en 12 meses |
| SCRUM | 10 meses de experiencia |
| Trabajo en equipo | Colaboracion en todos los proyectos |
| Comunicacion asertiva | Reportes de estatus, documentacion |
| Adaptabilidad | Cambios constantes en requerimientos |
| Proactividad | Toma de decisiones autonomas |

---

## Preguntas para Hacer al Entrevistador

1. Cual es el stack tecnologico principal del equipo?
2. Como es el proceso de code review?
3. Que metodologia agil usan?
4. Hay oportunidades de crecimiento/capacitacion?
5. Como es la dinamica del equipo remoto?

---

## Tips para la Entrevista

1. **Se honesto**: Si no sabes algo, dilo. Mejor decir "no lo conozco pero puedo aprenderlo" que inventar.

2. **Da ejemplos concretos**: No digas "se usar SQL", di "optimice consultas reduciendo 40% el tiempo".

3. **Menciona proyectos reales**: Grupo Salinas, Digital Solutions, Align Designs.

4. **Muestra interes**: Pregunta sobre el proyecto, el equipo, las tecnologias.

5. **Lambda expressions**: Son `x => x.Algo` en C# — las usas con LINQ todos los dias. No es nada nuevo para ti.

6. **OWASP Top 10**: No lo conoces de nombre pero LO APLICAS. Rate limiting, input validation, cifrado, SSH hardening.

7. **Event-Driven**: En Align Designs tu arquitectura reacciona a eventos entre modulos. ESO es event-driven.

8. **CRON/Jobs**: Tus pipelines de GitHub Actions con jobs programados = CRON services.

---

## Contacto

- **Email**: erickrodriguezboresis@gmail.com
- **Telefono**: +52 55 4754 9858
- **LinkedIn**: linkedin.com/in/erick-rodriguez-bores-isaias
- **GitHub**: github.com/ErickuchoSan

---

*Ultima actualizacion: Marzo 2026*
