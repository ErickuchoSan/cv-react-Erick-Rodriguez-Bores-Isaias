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
| .NET Core | 3 | Avanzado | v3 a v8, APIs REST, microservicios |
| Entity Framework | 3 | Avanzado | Code First, migrations, LINQ |
| SQL Server / T-SQL | 3 | Avanzado | Procedimientos almacenados, funciones, optimizacion |
| REST API | 3 | Avanzado | 6+ endpoints, documentacion Swagger |

### Frontend

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| React 19 | 2 | Intermedio-Avanzado | Grupo Salinas, proyectos personales |
| JavaScript | 3 | Avanzado | Todos los proyectos |
| TypeScript | 1 | Intermedio | 1 aplicacion completa |
| Node.js | 3 | Intermedio | APIs, scripts, proyectos |
| CSS / Bootstrap | 2 | Avanzado | Diseno responsivo |
| jQuery | 2 | Intermedio | Digital Solutions |

### Cloud / Azure

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| Azure Functions | 1 | Intermedio | Grupo Salinas - procesos serverless |
| Azure Service Bus | 2 | Intermedio | Colas, topics, subscriptions |
| Serverless | 1 | Intermedio | Azure Functions = serverless |
| Event-Driven Architecture | 1 | Intermedio | Service Bus triggers y mensajeria |

### Seguridad

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| OAuth2 | 2 | Intermedio | Autenticacion en APIs |
| JWT | 1 | Intermedio | Tokenizacion, refresh tokens |
| Cifrado AES/RSA | 3.5 | Avanzado | Cifrado de texto, datos sensibles |

### Arquitectura

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| SOLID | 2 | Avanzado | Todos los proyectos |
| Clean Architecture | 2 | Intermedio-Avanzado | Grupo Salinas, Align Designs |
| DDD | 1 | Intermedio | Grupo Salinas |
| Microservicios | 1 | Intermedio | Proyectos personales |

### DevOps

| Tecnologia | Anios | Nivel | Donde lo use |
|------------|-------|-------|--------------|
| Git / GitHub | 2 | Avanzado | Control de versiones, ramas, PRs |
| CI/CD Azure DevOps | - | Basico | Integracion de manera independiente |
| Postman / Insomnia | 1 | Intermedio | Pruebas de API |

---

## Preguntas Frecuentes y Respuestas

### C# / .NET Core

**P: Que version de .NET Core has usado?**
> He trabajado desde .NET Core 3 (2019) hasta .NET 8 (actual). Mi experiencia mas reciente es con .NET Core 8 en Grupo Salinas donde desarrollo APIs REST para sistemas de auditoria.

**P: Como implementas Entity Framework?**
> Uso Code First con migrations. Defino mis entidades, configuro relaciones con Fluent API, y uso LINQ para consultas. En Grupo Salinas refactorize arquitectura legacy hacia EF con principios limpios.

**P: Que son las expresiones Lambda?**
> Son funciones anonimas que uso constantemente con LINQ. Por ejemplo: `list.Where(x => x.Active).Select(x => x.Name)`. Las uso para filtrar, mapear y transformar colecciones.

**P: Como manejas autenticacion en tus APIs?**
> Implemento OAuth2 con JWT tokens. El flujo es: login -> validar credenciales -> generar access token + refresh token -> cliente usa token en headers -> middleware valida en cada request.

### Azure

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
> Es ejecutar codigo sin administrar infraestructura. Azure Functions ES serverless. Yo tengo 1 anio de experiencia con esto porque uso Azure Functions para procesar mensajes y triggers.

**P: Que es Event-Driven Architecture?**
> Es una arquitectura basada en eventos/mensajes. Azure Service Bus con topics, subscriptions y triggers ES event-driven. Yo tengo 1 anio de experiencia porque uso Service Bus con triggers para reaccionar a eventos.

### Seguridad

**P: Como implementas cifrado?**
> Uso:
> - **AES** (simetrico): Para cifrar datos en reposo, uso una clave secreta
> - **RSA** (asimetrico): Para intercambio seguro de claves, firma digital
> - **SHA-256**: Para hashing de contrasenas (junto con salt)
>
> Tengo 3.5 anios cifrando texto y datos sensibles en todos mis proyectos.

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

### SQL Server

**P: Como optimizas consultas?**
> - Analizo planes de ejecucion
> - Creo indices apropiados
> - Uso procedimientos almacenados
> - Evito SELECT *
> - Optimizo JOINs
>
> **Logro**: Reduci 40% el tiempo de consultas criticas en Grupo Salinas.

**P: Diferencia entre procedimiento almacenado y funcion?**
> - **Procedimiento**: Puede modificar datos (INSERT/UPDATE/DELETE), no retorna valor directamente
> - **Funcion**: Solo lectura, retorna valor, se usa en SELECT

### React

**P: Que version de React usas?**
> React 19. Uso hooks (useState, useEffect, useContext), componentes funcionales, y manejo de estado con Context API.

**P: Como manejas estado en React?**
> - **Local**: useState para estado de componente
> - **Global**: Context API para estado compartido (como idioma, tema)
> - Para apps complejas consideraria Redux o Zustand

---

## Mis Logros Cuantificados

### Grupo Salinas (2024 - Actual)
- Creacion de API v2 de Honestel desde cero (6 endpoints) con CI/CD
- **40% reduccion** en tiempo de consultas SQL
- Automatizacion de **5 procesos** eliminando **~8 hrs/semana** de trabajo manual

### Digital Solutions (2023 - 2024)
- Sistema de reclutamiento completo (**12 modulos**) en 8 meses
- Modulo de carga masiva: **+5,000 registros en <10 segundos**
- **50% reduccion** en tiempo de onboarding

### Freelance (2022 - 2023)
- Dominio autodidacta de **10+ tecnologias** en 12 meses
- **3 aplicaciones completas** con codigo limpio y SOLID

---

## Habilidades que NO Tengo (Ser Honesto)

| Habilidad | Estado |
|-----------|--------|
| SSO | No he implementado |
| App Logic (Azure) | No conozco |
| Entra ID | No conozco |
| Cascada | No he usado |
| Kanban | No he usado formalmente |
| OWASP Top 10 | No lo conozco por nombre (pero aplico seguridad) |
| SonarQube | No he usado |
| Pruebas integrales | 0 anios formales |

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

5. **Serverless y Event-Driven**: Ahora sabes que YA LOS USAS con Azure Functions y Service Bus.

---

## Contacto

- **Email**: erickrodriguezboresis@gmail.com
- **Telefono**: +52 55 4754 9858
- **LinkedIn**: linkedin.com/in/erick-rodriguez-bores-isaias
- **GitHub**: github.com/ErickuchoSan

---

*Ultima actualizacion: Marzo 2026*
