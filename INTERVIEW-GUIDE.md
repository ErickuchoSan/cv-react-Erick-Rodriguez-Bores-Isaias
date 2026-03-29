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
| C# | 3 | Avanzado | Grupo Salinas, Digital Solutions, Align Designs |
| .NET Core 6/8/10 | 3 | Avanzado | v3 a v10 — APIs REST, microservicios |
| Entity Framework | 3 | Avanzado | Code First, migrations, LINQ, Fluent API |
| SQL Server / T-SQL | 3 | Avanzado | SPs, funciones, CTEs, indices, optimizacion |
| Procedimientos Almacenados | 3 | Avanzado | Grupo Salinas, Digital Solutions |
| REST API | 3 | Avanzado | 6+ endpoints documentados con Swagger |
| Expresiones Lambda / LINQ | 3 | Avanzado | Dia a dia en C# con colecciones |
| Swagger / OpenAPI | 2 | Intermedio | API v2 Honestel en Grupo Salinas |
| NestJS 11 | 1 | Intermedio | Align Designs — arquitectura modular |
| Prisma ORM | 6 meses | Intermedio | Align Designs — 16 modelos, migraciones |
| PostgreSQL 15 | 1 | Intermedio | Align Designs — DB principal |
| Redis | 6 meses | Basico-Intermedio | Align Designs — cache en produccion |
| Node.js 18/20 | 3 | Intermedio | APIs, scripts, proyectos |

### Frontend

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| React 19 | 2 | Intermedio-Avanzado | Proyectos personales, Align Designs |
| Next.js 16 | 1 | Intermedio | Align Designs — App Router, SSR |
| Tailwind CSS v4 | 3 | Avanzado | Align Designs, este CV, proyectos propios |
| TypeScript 5 | 1 | Intermedio | Align Designs — tipado completo |
| TanStack Query | 6 meses | Intermedio | Align Designs — server state management |
| React Hook Form + Zod | 6 meses | Intermedio | Align Designs — formularios type-safe |
| Framer Motion | 6 meses | Intermedio | Align Designs + este CV |
| JavaScript ES2024 | 3 | Avanzado | Todos los proyectos |
| Bootstrap 5 | 2 | Avanzado | Grupo Salinas — HTML vanilla + Bootstrap |
| jQuery | 2 | Intermedio | Digital Solutions |
| CSS / Diseno responsivo | 3 | Avanzado | Todos los proyectos |

### DevOps / Infraestructura

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| GitHub Actions / CI/CD | 1 | Intermedio | Align Designs — pipeline completo |
| Docker | 1 | Intermedio | Align Designs — contenedores + health checks |
| DigitalOcean VPS + Spaces | 6 meses | Intermedio | Servidor propio + almacenamiento S3 |
| CRON / Scheduled Jobs | 6 meses | Basico-Intermedio | Jobs en GitHub Actions |
| Git / GitHub | 3 | Avanzado | Control de versiones, ramas, PRs |
| ApiDog | 1 | Intermedio | Pruebas de API (principal) |
| Postman / Insomnia | 1 | Intermedio | Pruebas de API |
| SonarCloud | 6 meses | Basico | Calidad de codigo en CI/CD |
| Prometheus + Pino | 6 meses | Basico | Metricas y logs estructurados |

### Seguridad

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| OAuth2 | 2 | Intermedio | Autenticacion en APIs |
| JWT + Refresh Token Rotation | 2 | Intermedio | Tokens seguros con rotacion |
| OTP (bcrypt + SHA-256) | 6 meses | Intermedio | Login de clientes en Align Designs |
| Cifrado AES/RSA | 3.5 | Avanzado | Cifrado de texto y datos sensibles |
| CSRF (HMAC-SHA256) | 6 meses | Intermedio | Align Designs — double-submit pattern |
| Helmet / Security Headers | 6 meses | Intermedio | CSP, HSTS, X-Frame-Options |
| Account Lockout | 6 meses | Intermedio | 5 intentos fallidos → bloqueo |
| OWASP Top 10 | - | Aplicado | Lo practico sin saberlo por nombre |

### Arquitectura

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| SOLID | 2 | Avanzado | Todos los proyectos |
| Clean Architecture | 2 | Intermedio-Avanzado | Grupo Salinas, Align Designs |
| DDD | 1 | Intermedio | Grupo Salinas, Align Designs |
| Event-Driven Architecture | 6 meses | Intermedio | Align Designs — eventos entre modulos |
| Microservicios | 1 | Intermedio | Proyectos personales |
| Monorepo (pnpm workspaces) | 6 meses | Intermedio | Align Designs |

### Testing / Metodologias

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| Jest + Vitest | 6 meses | Basico-Intermedio | Align Designs — 57 archivos de tests |
| Playwright (E2E) | 6 meses | Basico | Align Designs — suite E2E |
| SCRUM | 10 meses | Basico-Intermedio | Trabajo en equipo |

### IA & Productividad

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| Claude Code | 6 meses | Avanzado | Desarrollo asistido por IA en todos los proyectos |
| MCP (Model Context Protocol) | 6 meses | Intermedio | Integracion de herramientas con Claude |
| Claude / Gemini | 1 | Avanzado | Pair programming, arquitectura, debugging |

---

## Preguntas y Respuestas por Tecnologia

### C# / .NET Core

**P: Que version de .NET Core has usado?**
> Desde .NET Core 3 en 2019 hasta .NET 10. En Grupo Salinas trabajo con .NET Core 6 en sistemas criticos de auditoria. Conozco las nuevas caracteristicas hasta .NET 10 como Minimal APIs, mejoras en performance y nuevos patrones.

**P: Como implementas Entity Framework?**
> Uso Code First con migrations. Defino mis entidades con data annotations o Fluent API, configuro relaciones (1:1, 1:N, N:M) y uso LINQ para consultas. En Grupo Salinas refactorice arquitectura legacy hacia EF con principios limpios.

**P: Que son las expresiones Lambda en C#?**
> Funciones anonimas que uso constantemente con LINQ:
> ```csharp
> var activos = lista.Where(x => x.Activo)
>                    .OrderBy(x => x.Nombre)
>                    .Select(x => new { x.Id, x.Email });
> ```
> Las uso para filtrar, ordenar, agrupar y transformar colecciones. 3 anios de uso diario.

**P: Como manejas autenticacion en tus APIs?**
> OAuth2 con JWT. El flujo: login → validar credenciales → generar access token (24h) + refresh token → cliente lo envia en Authorization: Bearer → middleware valida en cada request. En Align Designs ademas implemento rotacion de refresh tokens para seguridad adicional.

**P: Como documentas tus APIs?**
> Swagger/OpenAPI. Configuro atributos en los controllers, defino schemas de request/response y ejemplos. En Grupo Salinas cree la documentacion completa de la API v2 de Honestel con 6 endpoints, esquemas y ejemplos.

**P: Cuanto llevas con procedimientos almacenados?**
> 3 anios. Los uso para logica compleja multioperation, optimizacion (plan de ejecucion cacheado) y seguridad. En Grupo Salinas optimice SPs criticos logrando 40% de reduccion en tiempo de ejecucion.

**P: Diferencia entre SP y funcion SQL?**
> - **SP**: Puede hacer INSERT/UPDATE/DELETE, no retorna valor directamente, se llama con EXEC
> - **Funcion**: Solo lectura, retorna un valor escalar o tabla, se usa dentro de SELECT

---

### SQL Server / T-SQL

**P: Como optimizas consultas SQL?**
> - Analizo el plan de ejecucion (EXPLAIN / Query Plan)
> - Creo indices compuestos para las columnas mas consultadas
> - Uso SPs para cachear el plan de ejecucion
> - Evito SELECT *, uso columnas especificas
> - Optimizo JOINs y evito N+1 queries
> - Uso CTEs para queries complejas legibles
>
> Logro real: 40% reduccion en Grupo Salinas.

**P: Que son los CTEs?**
> Common Table Expressions — consultas temporales con nombre que mejoran legibilidad:
> ```sql
> WITH UsuariosActivos AS (
>     SELECT Id, Nombre FROM Usuarios WHERE Activo = 1
> )
> SELECT * FROM UsuariosActivos WHERE Nombre LIKE 'E%'
> ```

**P: Que son las funciones de ventana?**
> Funciones que operan sobre un conjunto de filas relacionadas sin colapsarlas:
> ```sql
> ROW_NUMBER() OVER (PARTITION BY DeptId ORDER BY Salario DESC)
> ```
> Las uso para ranking, paginacion y calculos acumulativos.

---

### NestJS / Node.js

**P: Que es NestJS y por que lo usas?**
> Framework de Node.js con arquitectura modular inspirada en Angular. Usa decoradores de TypeScript, inyeccion de dependencias, y tiene modulos para JWT, Prisma, Redis, etc. Lo uso en Align Designs porque permite estructurar el backend de forma escalable con separacion clara de responsabilidades.

**P: Como estructuras un modulo en NestJS?**
> Cada feature tiene: Controller (HTTP), Service (logica), Repository (DB), DTOs (validacion con Zod). El modulo registra todo y define que exporta. Ejemplo: AuthModule tiene TokenService, PasswordService, OtpService, cada uno con una sola responsabilidad (SOLID).

**P: Como funciona la inyeccion de dependencias en NestJS?**
> NestJS tiene un contenedor IoC. Decoro las clases con @Injectable() y las declaro en providers del modulo. Al solicitar una instancia, el contenedor la crea y resuelve sus dependencias automaticamente. Permite testear facilmente con mocks.

---

### Prisma ORM

**P: Por que Prisma sobre Entity Framework para Node?**
> Prisma tiene schema como fuente de verdad (schema.prisma), genera tipos TypeScript automaticamente, tiene migraciones declarativas y un cliente 100% type-safe. En Align Designs tengo 16 modelos con relaciones complejas y las consultas siempre estan tipadas.

**P: Como manejas migraciones en Prisma?**
> `prisma migrate dev` genera el SQL de migracion automaticamente comparando el schema actual vs la BD. En produccion uso `prisma migrate deploy` sin interactividad. Cada migracion queda versionada en `/prisma/migrations/`.

**P: Que son los soft deletes y como los implementas?**
> En lugar de eliminar fisicamente, agrego `deletedAt DateTime?` y `deletedBy String?`. Las queries filtran `WHERE deletedAt IS NULL` por defecto. Sirve para auditoria, recuperacion de datos y cumplimiento legal. Todas las entidades de Align Designs los tienen.

---

### PostgreSQL / Redis

**P: Diferencia entre SQL Server y PostgreSQL?**
> Ambos son RDBMS potentes. PostgreSQL es open source, tiene mejor soporte para JSON/JSONB, tipos de datos avanzados y extensiones. SQL Server tiene mejor integracion con el ecosistema Microsoft. En Grupo Salinas uso SQL Server, en Align Designs use PostgreSQL 15.

**P: Para que usas Redis?**
> Cache en produccion. En Align Designs almaceno resultados de queries frecuentes para no golpear la BD en cada request. Tambien se puede usar para sesiones, rate limiting distribuido y colas. En dev uso cache en memoria (keyv), en prod Redis.

---

### React / Next.js / Frontend

**P: Que version de React usas y que hooks manejas?**
> React 19. Los hooks que mas uso:
> - `useState` — estado local del componente
> - `useEffect` — efectos secundarios (fetch, suscripciones)
> - `useContext` — consumir context global (auth, tema, idioma)
> - `useCallback` / `useMemo` — memoizacion para performance
> - Hooks propios — extraigo logica compleja a custom hooks

**P: Que es Next.js y cuando lo usas sobre React puro?**
> Framework sobre React que agrega SSR (Server Side Rendering), SSG (Static Generation), App Router, y optimizaciones automaticas. Lo uso cuando necesito SEO, rutas protegidas con middleware, o performance critica. En Align Designs uso App Router con layouts compartidos por dashboard/admin/cliente.

**P: Como manejas estado global en React?**
> - **Local**: useState para estado del componente
> - **Server state**: TanStack Query — fetch, cache, sincronizacion con el servidor
> - **Global UI**: Context API — auth, tema, idioma
> - Para apps grandes consideraria Zustand (mas simple que Redux)

**P: Que es TanStack Query?**
> Libreria de server state management. Maneja fetching, caching, revalidacion, estados de loading/error/success y paginacion de forma declarativa. En Align Designs reemplaza el useState + useEffect manual para llamadas a la API:
> ```ts
> const { data, isLoading } = useQuery({ queryKey: ['projects'], queryFn: fetchProjects })
> ```

**P: Por que Tailwind CSS?**
> Utility-first — escribo estilos directamente en el HTML sin saltar a archivos CSS. Purga automaticamente clases no usadas (bundle minimo). Consistencia en el design system. Lo uso desde la version 3, actualmente con v4. Lo prefiero sobre Bootstrap para proyectos nuevos.

**P: TypeScript vs JavaScript — cuando usas cada uno?**
> TypeScript siempre que puedo. Da tipado estatico, autocompletado, detecta errores en compilacion antes de runtime. En Align Designs todo es TypeScript (backend + frontend). En proyectos legacy o rapidos uso JS. La curva de aprendizaje vale la pena.

---

### Docker / CI/CD / DevOps

**P: Como usas Docker?**
> Contenedores para empaquetar la app con sus dependencias. En Align Designs tengo:
> - `docker-compose.dev.yml` — entorno local (PostgreSQL + backend + frontend)
> - `docker-compose.prod.yml` — produccion con `restart: always`
> - Multi-stage build en el frontend (builder + runner Alpine ligero)
> - Health checks para verificar que los servicios esten listos

**P: Explica tu pipeline de CI/CD?**
> GitHub Actions con estos pasos en cada push:
> 1. **Lint** — ESLint en backend y frontend
> 2. **Tests** — Jest (backend) + Vitest (frontend) con coverage
> 3. **SonarCloud** — analisis de calidad y seguridad
> 4. **Build** — compilar ambas apps
> 5. **Deploy** — SSH al servidor, pull codigo, migraciones Prisma, rebuild Docker, restart
> 6. **Health checks** — curl para verificar que los endpoints responden
> 7. **Backup** — pg_dump → DigitalOcean Spaces automaticamente

**P: Que es un monorepo y como lo manejas?**
> Un repositorio con multiples aplicaciones. En Align Designs tengo backend (NestJS) y frontend (Next.js) en el mismo repo usando pnpm workspaces. Ventajas: dependencias compartidas, un solo CI/CD, cambios atomicos entre apps. pnpm es 3x mas rapido que npm y usa menos disco.

**P: Como usas Git en tu dia a dia?**
> - Feature branches: `feat/nombre`, `fix/nombre`, `chore/nombre`
> - PRs con descripcion de cambios
> - Commits atomicos con mensajes descriptivos (conventional commits)
> - Nunca pusheo directo a main/master
> - En Align Designs tengo ramas `dev` y `main` con pipelines diferentes

---

### Seguridad

**P: Explica OAuth2 y JWT?**
> - **OAuth2**: Protocolo/framework de autorizacion que define flujos (authorization code, client credentials, etc.)
> - **JWT**: Formato del token resultante — contiene claims (quien eres, que puedes hacer) firmados con HMAC o RSA
> Son complementarios: OAuth2 define el flujo, JWT es como se estructura el token.

**P: Como funciona tu sistema de autenticacion dual?**
> En Align Designs tengo dos flujos:
> - **Admins**: Email + password → JWT (24h) + refresh token con rotacion
> - **Clientes**: Email → OTP de 8 digitos por email (hash SHA-256 en BD) → primer login establece password
>
> El OTP expira, es de un solo uso y tiene account lockout tras 5 intentos fallidos.

**P: Que es Refresh Token Rotation?**
> Mecanismo de seguridad:
> 1. Refresh token se guarda como hash SHA-256, nunca en texto plano
> 2. Cada uso genera uno nuevo y revoca el anterior
> 3. Si alguien intenta usar un token ya rotado = posible robo → se revoca toda la cadena
> 4. JWT blacklist para logout inmediato sin esperar expiracion

**P: Como implementas CSRF?**
> Double-submit pattern con HMAC-SHA256:
> 1. Servidor genera token firmado con HMAC-SHA256 usando clave secreta
> 2. Token va en cookie httpOnly
> 3. Cliente debe enviarlo en header X-CSRF-Token
> 4. Servidor compara con `crypto.timingSafeEqual` (previene timing attacks)
> Endpoints publicos (login, OTP) estan excluidos.

**P: Que hace Helmet?**
> Middleware que configura headers HTTP de seguridad:
> - **CSP**: Controla de donde carga recursos la pagina (previene XSS)
> - **HSTS**: Fuerza HTTPS por 1 ano con preload
> - **X-Frame-Options: DENY**: Previene clickjacking
> - **nosniff**: Previene MIME type sniffing
> - **Referrer-Policy**: Controla informacion enviada en Referer

**P: Como cifras datos sensibles?**
> - **AES** (simetrico): Datos en reposo con clave secreta — rapido para grandes volumenes
> - **RSA** (asimetrico): Intercambio de claves, firma digital — mas lento pero mas seguro
> - **SHA-256**: Hashing de passwords (con bcrypt que agrega salt automaticamente), OTP tokens
> 3.5 anios cifrando en proyectos empresariales.

**P: Conoces OWASP Top 10?**
> No lo conozco de memoria por numero, pero aplico sus principios:
> - **A01 Broken Access Control** → RBAC con 3 roles, verificacion de ownership en cada endpoint
> - **A02 Cryptographic Failures** → AES/RSA para datos sensibles, HTTPS forzado
> - **A03 Injection** → Prisma/EF con queries parametrizadas, nunca SQL concatenado
> - **A07 Auth Failures** → JWT rotation, account lockout, bcrypt
> - **A09 Logging** → Pino con request ID, redaccion de headers sensibles

**P: Que es CORS y como lo configuras?**
> Cross-Origin Resource Sharing — el navegador bloquea requests entre dominios diferentes por seguridad. En NestJS configuro CORS con lista blanca de origenes permitidos (no uso `*`), metodos y headers permitidos, y credentials habilitado para cookies.

---

### Arquitectura

**P: Explica SOLID con ejemplos**
> - **S** Single Responsibility: `TokenService` solo maneja tokens, no passwords ni OTP
> - **O** Open/Closed: Agrego nuevos tipos de storage implementando una interfaz, sin tocar el codigo existente
> - **L** Liskov Substitution: `MinioStorage` y `S3Storage` son intercambiables si implementan la misma interfaz
> - **I** Interface Segregation: No obligo a implementar metodos que no se usan
> - **D** Dependency Inversion: Los servicios dependen de interfaces/abstracciones, no de implementaciones concretas

**P: Que es Clean Architecture?**
> Separacion en capas con dependencias apuntando hacia adentro:
> - **Domain**: Entidades, logica de negocio pura — no depende de nada
> - **Application**: Casos de uso, interfaces de repositorios
> - **Infrastructure**: Implementaciones (Prisma, S3, Redis, Email)
> - **Presentation**: Controllers, DTOs, HTTP
>
> Lo aplico en Grupo Salinas y Align Designs.

**P: Que es DDD?**
> Domain-Driven Design — modelar el software segun el dominio del negocio:
> - **Entities**: Objetos con identidad unica (User, Project)
> - **Value Objects**: Sin identidad, inmutables (Email, Money)
> - **Aggregates**: Grupos de entidades con una raiz (ProjectAggregate)
> - **Repositories**: Abstraccion de persistencia
> - **Domain Services**: Logica que no pertenece a una entidad sola

**P: Que es Event-Driven Architecture?**
> Los componentes se comunican emitiendo eventos en lugar de llamarse directamente. Ventajas: desacoplamiento, escalabilidad, resiliencia. En Align Designs cuando un proyecto cambia de estado, se emite un evento que dispara notificaciones, logs de auditoria y actualizaciones de dashboard — cada modulo reacciona independientemente.

**P: Diferencia entre monolito y microservicios?**
> - **Monolito**: Una sola aplicacion deployable, mas simple pero escala como unidad
> - **Microservicios**: Servicios independientes por dominio, escalan individualmente pero mas complejidad operacional
> Align Designs es un monolito modular — la arquitectura esta lista para extraer servicios si escala.

---

### Testing

**P: Que tipos de tests haces?**
> - **Unitarios (Jest/Vitest)**: Pruebo funciones/servicios aislados con mocks. 57 archivos en Align Designs
> - **E2E (Playwright)**: Simulo flujos reales del usuario en el navegador — login, crear proyecto, subir archivo
> - **API testing**: ApiDog para probar endpoints manualmente durante desarrollo

**P: Que es SonarCloud?**
> Plataforma de analisis estatico de codigo (mismo motor que SonarQube, diferente hosting). Detecta: code smells, deuda tecnica, bugs potenciales, vulnerabilidades de seguridad y cobertura de tests. En Align Designs esta integrado en el pipeline — cada push lo ejecuta y si hay issues criticos bloquea el deploy.

---

### IA & Desarrollo Asistido

**P: Como usas IA en tu desarrollo?**
> Claude Code como pair programmer principal. Lo uso para: arquitectura de nuevas features, debugging complejo, code review, generacion de tests y documentacion. Con MCP (Model Context Protocol) integro herramientas externas directamente en el contexto del AI — por ejemplo, que lea directamente el codigo del proyecto, la documentacion o los logs. Esto me da un multiplicador de productividad real, no solo "copiar codigo de ChatGPT".

**P: Que es MCP?**
> Model Context Protocol — protocolo abierto de Anthropic que permite a los modelos de IA conectarse a herramientas externas de forma estandarizada (bases de datos, APIs, sistemas de archivos, etc.). En vez de copiar/pegar contexto manualmente, el AI puede leer directamente el estado actual del proyecto.

---

### Proyectos Clave

**P: Cuentame de tu proyecto mas importante**
> Align Designs Platform — plataforma B2B/B2C que desarrollo como freelance desde octubre 2025:
> - Monorepo con NestJS 11 + Next.js 16 + PostgreSQL 15 + Redis + Docker
> - 16+ modulos: auth, proyectos, archivos, pagos, facturacion, notificaciones, empleados
> - 8 etapas de workflow con estados validados
> - Seguridad en capas: CSRF + Helmet + JWT rotation + OTP + AES/RSA
> - CI/CD completo con GitHub Actions → SonarCloud → deploy → backup automatico
> - Almacenamiento en DigitalOcean Spaces con presigned URLs
> - 57 archivos de tests unitarios + E2E con Playwright

**P: Que hiciste en Grupo Salinas?**
> Programador de Auditoria Senior desde mayo 2024. Trabajo con .NET Core 6 + C# + SQL Server + HTML/Bootstrap. Logros principales:
> - API v2 de Honestel desde cero (6 endpoints con Swagger)
> - 40% reduccion en tiempo de consultas SQL con optimizacion de SPs
> - Automatizacion de 5 procesos que eliminan ~8 hrs/semana de trabajo manual

**P: Que hiciste en Digital Solutions?**
> Desarrollador Full Stack mayo 2023 - mayo 2024. Sistema de reclutamiento con .NET Framework + Entity Framework + SQL Server + JavaScript/jQuery/Bootstrap:
> - Sistema completo con 12 modulos en 8 meses
> - Modulo de carga masiva: +5,000 registros en menos de 10 segundos
> - 50% reduccion en tiempo de onboarding de candidatos

---

## Logros Cuantificados

### Grupo Salinas (Mayo 2024 - Actual)
- API v2 de Honestel desde cero — **6 endpoints** documentados con Swagger
- **40% reduccion** en tiempo de consultas SQL criticas
- Automatizacion de **5 procesos** → elimina **~8 hrs/semana** de trabajo manual

### Digital Solutions (Mayo 2023 - Mayo 2024)
- Sistema completo de reclutamiento — **12 modulos** en 8 meses
- Carga masiva: **+5,000 registros en <10 segundos**
- **50% reduccion** en tiempo de onboarding

### Align Designs (Oct. 2025 - Actual)
- Plataforma productiva con **16+ modulos** y 8 etapas de workflow
- **57 archivos de tests** unitarios + suite E2E con Playwright
- Pipeline CI/CD: lint → tests → SonarCloud → build → deploy → **backup automatico**
- Seguridad en capas: CSRF + Helmet + JWT rotation + OTP + AES/RSA + SSH hardening

---

## Habilidades que NO Tengo (Ser Honesto)

| Habilidad | Estado |
|-----------|--------|
| SSO | No he implementado |
| App Logic (Azure) | No conozco |
| Entra ID | No conozco |
| Azure Functions | Muy basico — lo conozco en teoria |
| Azure Service Bus | Muy basico — lo conozco en teoria |
| Kanban | No he usado formalmente |
| SonarQube | No (pero SI SonarCloud — mismo motor, diferente hosting) |
| Pruebas integrales | 0 anios formales |
| SAML 2.0 | 2 meses, muy basico |
| Redux | Conozco el concepto, no lo he usado en produccion |
| GraphQL | Conozco el concepto, trabajo con REST |

---

## Soft Skills

| Habilidad | Evidencia |
|-----------|-----------|
| Autodidacta | Aprendi 10+ tecnologias en 12 meses de forma independiente |
| SCRUM | 10 meses de experiencia en equipos |
| Trabajo en equipo | Colaboracion activa en todos los proyectos |
| Comunicacion asertiva | Reportes de estatus, documentacion tecnica |
| Adaptabilidad | Cambios de requerimientos constantes sin perder calidad |
| Proactividad | Propongo soluciones antes de que se conviertan en problemas |
| Desarrollo asistido por IA | Uso Claude Code + MCP para multiplicar productividad |

---

## Preguntas para Hacer al Entrevistador

1. Cual es el stack tecnologico actual del equipo y hacia donde van?
2. Como es el proceso de code review — PR reviews, pair programming?
3. Que metodologia agil usan — SCRUM, Kanban, algo propio?
4. Como es el onboarding — hay documentacion del proyecto?
5. Hay oportunidades de crecimiento tecnico o certificaciones?
6. Como es la dinamica del equipo remoto — reuniones, comunicacion?
7. Cuales son los principales retos tecnicos del proyecto actualmente?

---

## Tips para la Entrevista

1. **Se honesto**: Si no sabes algo, "no lo conozco todavia pero aprendo rapido — por ejemplo aprendi [tech] en X tiempo".

2. **Da ejemplos concretos siempre**: No "se SQL", sino "optimice consultas reduciendo 40% el tiempo en Grupo Salinas".

3. **Menciona Align Designs**: Es tu proyecto estrella — arquitectura real, seguridad real, CI/CD real, tests reales.

4. **Lambda = LINQ en C#**: `x => x.Algo` — las usas todos los dias, no es nada nuevo.

5. **OWASP Top 10**: No lo sabes de memoria pero LO APLICAS — CSRF, rate limiting, cifrado, injection prevention.

6. **SonarCloud**: Lo tienes en produccion. Si dicen SonarQube, diles que es el mismo motor.

7. **Event-Driven**: En Align Designs los modulos reaccionan a eventos — ESO es event-driven.

8. **CRON/Jobs**: Tus pipelines de GitHub Actions con scheduled jobs = CRON services.

9. **Tailwind vs Bootstrap**: Tailwind para proyectos nuevos (utility-first, mas control), Bootstrap cuando el proyecto ya lo usa (Grupo Salinas).

10. **IA no es trampa**: Usar Claude Code + MCP es una habilidad real de productividad. Mencionalo con orgullo si preguntan.

---

## Contacto

- **Email**: erickrodriguezboresis@gmail.com
- **Telefono**: +52 55 4754 9858
- **LinkedIn**: linkedin.com/in/erick-rodriguez-bores-isaias
- **GitHub**: github.com/ErickuchoSan

---

*Ultima actualizacion: Marzo 2026*
