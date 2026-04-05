export const translations = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre Mí',
            experience: 'Experiencia',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        hero: {
            title: 'Erick Rodríguez',
            subtitle: 'Bores Isaías',
            role: 'Desarrollador Full Stack .NET & React',
            description: 'Especialista en C#/.NET Core 10, React 19, SQL Server y Azure. 3 años desarrollando arquitecturas escalables y soluciones empresariales.',
            contactBtn: 'Contáctame',
            projectsBtn: 'Ver Proyectos',
            downloadBtn: 'Descargar CV',
            generating: 'Generando...'
        },
        about: {
            title: 'Sobre Mí',
            subtitle: 'Transformando ideas en soluciones empresariales de alto impacto',
            roleTitle: 'Desarrollador Full Stack .NET & React',
            description1: 'Con 3 años de experiencia en desarrollo de software empresarial, diseño e implemento arquitecturas escalables con C#/.NET Core 6/8/10 (3 años), React 19 / Next.js 15 (2 años), SQL Server / PostgreSQL (3 años), y Node.js / NestJS 11 (3 años). Experiencia sólida en REST APIs, Entity Framework, OAuth2/JWT, cifrado AES/RSA, Docker y Python.',
            description2: 'Actualmente como Programador de Auditoría Senior en Grupo Salinas, lidero el desarrollo de sistemas críticos de auditoría interna (ADA/HONESTEL) con .NET Core 6, C#, SQL Server y OAuth2/JWT. Paralelamente desarrollo la plataforma Align Designs (freelance) con NestJS 11, Next.js 16, PostgreSQL y Docker. Me distingo por Clean Architecture, DDD y desarrollo asistido por IA.',
            stats: {
                experience: 'Años de Experiencia',
                technologies: 'Tecnologías Dominadas',
                projects: 'Proyectos Completados',
                optimization: 'Optimización SQL'
            },
            education: {
                title: 'Educación',
                degree1: 'Ing. Sistemas Computacionales',
                school1: 'UTEL Universidad • 2019 - 2023',
                degree2: 'Maestría en Inteligencia Artificial',
                school2: 'UNIR (Universidad Internacional de La Rioja)',
                status2: 'En curso • 2025 - Actual'
            },
            availability: {
                title: 'Disponibilidad',
                status: 'Tiempo completo • Híbrido/Remoto',
                note: 'Abierto a oportunidades internacionales'
            },
            location: {
                title: 'Ubicación',
                city: 'Cuajimalpa de Morelos, CDMX, México'
            },
            interests: {
                title: 'Intereses Profesionales',
                list: [
                    'Inteligencia Artificial aplicada al desarrollo',
                    'Arquitecturas cloud-native y microservicios',
                    'Productos SaaS escalables de alto rendimiento',
                    'Oportunidades remotas e internacionales'
                ]
            }
        },
        experience: {
            title: 'Experiencia Profesional',
            subtitle: '3 años de trayectoria en desarrollo de software empresarial',
            responsibilities: 'Responsabilidades:',
            achievements: 'Logros Destacados:',
            stack: 'Stack Tecnológico:',
            jobs: [
                {
                    role: "Programador de Auditoría Senior",
                    company: "Grupo Salinas",
                    period: "Mayo 2024 - Actual",
                    duration: "~2 años",
                    description: "Líder técnico responsable de la arquitectura, desarrollo y evolución de sistemas críticos de auditoría interna (ADA/HONESTEL). Stack: .NET Core 6, C#, HTML, Bootstrap, SQL Server, OAuth2/JWT, Entity Framework.",
                    functions: [
                        "Desarrollo de API REST con .NET Core 6 integrando OAuth2 y tokenización JWT para autenticación segura.",
                        "Desarrollo Frontend con HTML, JavaScript y Bootstrap aplicando diseño responsivo.",
                        "Optimización de consultas SQL Server con T-SQL, procedimientos almacenados y funciones.",
                        "Implementación de algoritmos de cifrado (AES, RSA, SHA-256) para protección de datos sensibles.",
                        "Arquitectura Backend basada en SOLID, Clean Architecture y principios DDD.",
                        "Refactorización de arquitectura legacy hacia proyecto con Entity Framework y principios limpios.",
                        "Documentación técnica con Swagger y pruebas de API con Postman/Insomnia."
                    ],
                    achievements: [
                        "Creación de API v2 de Honestel desde cero (6 endpoints principales) con documentación Swagger.",
                        "Reducción del 40% en tiempo de ejecución de consultas críticas mediante optimización de procedimientos almacenados.",
                        "Automatización de 5 procesos operativos mediante scripts, eliminando ~8 hrs/semana de trabajo manual."
                    ]
                },
                {
                    role: "Desarrollador Full Stack",
                    company: "Digital Solutions",
                    period: "Mayo 2023 - Mayo 2024",
                    duration: "1 año",
                    description: "Desarrollo integral de sistemas empresariales para gestión de RH y reclutamiento. Stack: .NET Framework, C#, Entity Framework, SQL Server, JavaScript, jQuery, Bootstrap.",
                    functions: [
                        "Desarrollo de APIs REST con .NET Framework y Entity Framework para gestión de candidatos.",
                        "Implementación de módulo de carga masiva desde Excel y TXT procesando miles de registros.",
                        "Diseño de interfaces responsivas con JavaScript, jQuery y Bootstrap.",
                        "Optimización de consultas SQL Server con procedimientos almacenados y funciones.",
                        "Control de versiones con GitHub y gestión de ramas para trabajo colaborativo."
                    ],
                    achievements: [
                        "Entrega de sistema de gestión de reclutamiento completo (12 módulos) en 8 meses.",
                        "Módulo de carga masiva procesando +5,000 registros en <10 segundos desde Excel/TXT.",
                        "Reducción del 50% en tiempo de onboarding mediante automatización de procesos de alta."
                    ]
                },
                {
                    role: "Desarrollador Full Stack",
                    company: "Freelance · Align Designs Platform",
                    period: "Oct. 2025 - Actual",
                    duration: "~6 meses",
                    description: "Plataforma B2B/B2C cloud con arquitectura monorepo profesional. Stack: NestJS 11, Next.js 16, PostgreSQL 15, Prisma ORM, Docker, GitHub Actions, Redis, DigitalOcean Spaces, Prometheus.",
                    functions: [
                        "Arquitectura modular monorepo (pnpm workspaces) con NestJS 11 + Next.js 16 + PostgreSQL/Prisma aplicando SOLID y Clean Architecture.",
                        "Sistema de autenticación dual: JWT con refresh token rotation para admins y OTP con bcrypt para clientes. RBAC con 3 roles (Admin, Client, Employee).",
                        "Seguridad HTTP completa: CSRF (HMAC-SHA256), Helmet (CSP, HSTS), rate limiting por IP, account lockout tras 5 intentos, validación con Zod.",
                        "Almacenamiento de archivos en DigitalOcean Spaces (S3-compatible) con presigned URLs de 15 min y validación por magic numbers.",
                        "CI/CD con GitHub Actions + SonarCloud + Codecov + Lighthouse. Deploy automatizado con Docker en servidor DigitalOcean con backups automáticos a Spaces.",
                        "Sistema de facturación con auto-numeración, versionado de archivos, notificaciones in-app, métricas Prometheus y logging estructurado con Pino.",
                        "57 archivos de pruebas unitarias (Jest + Vitest) y suite E2E con Playwright."
                    ],
                    achievements: [
                        "Plataforma productiva con +16 módulos y 8 etapas de workflow: autenticación, facturación, pagos a empleados, almacenamiento y notificaciones.",
                        "Pipeline CI/CD completo: lint → tests → SonarCloud → build → deploy → health checks → backup automático en cada push.",
                        "Arquitectura de seguridad en capas: CSRF + Helmet + rate limiting + JWT rotation + OTP + AES/RSA + SSH hardening + fail2ban."
                    ]
                }
            ]
        },
        skills: {
            title: 'Habilidades Técnicas',
            subtitle: 'Stack tecnológico y competencias profesionales',
            mainTech: 'Tecnologías Principales',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                devops: 'DevOps & Herramientas',
                ai: 'IA & Productividad'
            },
            competencies: {
                title: 'Competencias Clave',
                items: [
                    { title: 'Arquitectura Limpia / DDD', desc: 'Diseño de soluciones con Clean Architecture y Domain-Driven Design (2 años)' },
                    { title: 'Codificación Segura', desc: 'Implementación de cifrado AES/RSA, OAuth2, JWT y prácticas de seguridad' },
                    { title: 'Optimización SQL', desc: 'Mejora de tiempos de consulta hasta 40% con procedimientos y funciones' },
                    { title: 'Metodología SCRUM', desc: 'Experiencia trabajando con metodologías ágiles (10 meses)' },
                    { title: 'Pruebas y QA', desc: 'Pruebas unitarias, pruebas de usuario y documentación técnica (Swagger)' },
                    { title: 'Aprendizaje Autodidacta', desc: 'Capacidad demostrada para dominar nuevas tecnologías de forma independiente' },
                    { title: 'Trabajo en Equipo', desc: 'Comunicación asertiva, adaptabilidad y colaboración efectiva' },
                    { title: 'Desarrollo Asistido por IA', desc: 'Programo con Claude y Gemini optimizando cada línea con buenas prácticas' },
                    { title: 'Disponibilidad Inmediata', desc: 'Disponible para incorporación en 1 semana o 3 días' }
                ]
            }
        },
        projects: {
            title: 'Proyectos Destacados',
            subtitle: 'Soluciones Innovadoras y Aplicaciones Modernas',
            items: [
                {
                    title: "Align Designs Platform",
                    description: "Plataforma B2B/B2C cloud con arquitectura monorepo (NestJS 11 + Next.js 15 + PostgreSQL/Prisma). Autenticación dual JWT/OTP, mensajería asincrónica, cifrado AES/RSA, CI/CD con GitHub Actions, Docker y arquitectura Clean/SOLID con RBAC."
                },
                {
                    title: "Sistema de Auditoría Interna (ADA/HONESTEL)",
                    description: "Plataforma crítica para gestión de denuncias internas de todas las empresas del Grupo Salinas. Lideré la migración de .NET Framework a .NET Core 6, mejorando el rendimiento un 40% y reduciendo tiempos de consulta SQL Server."
                },
                {
                    title: "Sistema de Reclutamiento Empresarial",
                    description: "Plataforma end-to-end para gestión del ciclo completo de reclutamiento con carga masiva de candidatos desde Excel/TXT, procesando +5,000 registros en menos de 10 segundos."
                }
            ]
        },
        languages: {
            title: 'Idiomas',
            subtitle: 'Competencias Lingüísticas',
            items: [
                {
                    name: 'Español',
                    level: 'Nativo',
                    details: ['Lengua materna', 'Comunicación profesional', 'Redacción técnica avanzada']
                },
                {
                    name: 'Inglés',
                    level: 'A2-B1 Intermedio',
                    details: ['Lectura y comprensión de documentación técnica', 'Escritura técnica intermedia', 'Conversación básica-intermedia', 'En constante mejora']
                }
            ]
        },
        contact: {
            title: 'Contáctame',
            subtitle: '¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él!',
            infoTitle: 'Información de Contacto',
            followMe: 'Sígueme',
            messageTitle: 'Envíame un Mensaje',
            form: {
                name: 'Nombre completo',
                email: 'Email',
                subject: 'Asunto',
                message: 'Mensaje',
                send: 'Enviar Mensaje',
                sent: 'Mensaje enviado (simulación)'
            },
            errors: {
                name: 'El nombre es requerido',
                subject: 'El asunto es requerido',
                message: 'El mensaje es requerido'
            },
            success: {
                title: '¡Mensaje Preparado!',
                text: 'Se abrirá WhatsApp para enviar tu mensaje de manera exitosa.'
            }
        },
        footer: {
            brand: 'Erick Rodríguez',
            description: 'Desarrollador Full Stack especializado en .NET Core/C#, React 19 y Azure. 3 años de experiencia en desarrollo empresarial.',
            navigation: 'Navegación',
            contact: 'Contacto',
            rights: 'Todos los derechos reservados.',
            madeWith: 'Hecho con'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About Me',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            title: 'Erick Rodríguez',
            subtitle: 'Bores Isaías',
            role: 'Full Stack Developer .NET & React',
            description: 'Specialist in C#/.NET Core 10/10, React 19, SQL Server and Azure. 3 years building scalable architectures and enterprise solutions.',
            contactBtn: 'Contact Me',
            projectsBtn: 'View Projects',
            downloadBtn: 'Download CV',
            generating: 'Generating...'
        },
        about: {
            title: 'About Me',
            subtitle: 'Transforming ideas into high-impact business solutions',
            roleTitle: 'Full Stack Developer .NET & React',
            description1: 'With 3 years of experience in enterprise software development, I design and implement scalable architectures with C#/.NET Core 6/8/10 (3 years), React 19 / Next.js 15 (2 years), SQL Server / PostgreSQL (3 years), and Node.js / NestJS 11 (3 years). Solid experience in REST APIs, Entity Framework, OAuth2/JWT, AES/RSA encryption, Docker and Python.',
            description2: 'Currently as a Senior Audit Programmer at Grupo Salinas, I lead the development of critical internal audit systems (ADA/HONESTEL) with .NET Core 6, C#, SQL Server and OAuth2/JWT. In parallel, I develop the Align Designs platform (freelance) with NestJS 11, Next.js 16, PostgreSQL and Docker. I stand out for Clean Architecture, DDD and AI-assisted development.',
            stats: {
                experience: 'Years of Experience',
                technologies: 'Technologies Mastered',
                projects: 'Completed Projects',
                optimization: 'SQL Optimization'
            },
            education: {
                title: 'Education',
                degree1: 'B.S. Computer Systems Engineering',
                school1: 'UTEL University • 2019 - 2023',
                degree2: 'Master in Artificial Intelligence',
                school2: 'UNIR (International University of La Rioja)',
                status2: 'In progress • 2025 - Present'
            },
            availability: {
                title: 'Availability',
                status: 'Full time • Hybrid/Remote',
                note: 'Open to international opportunities'
            },
            location: {
                title: 'Location',
                city: 'Cuajimalpa de Morelos, CDMX, Mexico'
            },
            interests: {
                title: 'Professional Interests',
                list: [
                    'AI applied to development',
                    'Cloud-native architectures and microservices',
                    'High-performance scalable SaaS products',
                    'Remote and international opportunities'
                ]
            }
        },
        experience: {
            title: 'Professional Experience',
            subtitle: '3 years of experience in enterprise software development',
            responsibilities: 'Responsibilities:',
            achievements: 'Key Achievements:',
            stack: 'Tech Stack:',
            jobs: [
                {
                    role: "Senior Audit Programmer",
                    company: "Grupo Salinas",
                    period: "May 2024 - Present",
                    duration: "~2 years",
                    description: "Technical lead responsible for architecture, development and evolution of critical internal audit systems (ADA/HONESTEL). Stack: .NET Core 6, C#, HTML, Bootstrap, SQL Server, OAuth2/JWT, Entity Framework.",
                    functions: [
                        "REST API development with .NET Core 6 integrating OAuth2 and JWT tokenization for secure authentication.",
                        "Frontend development with HTML, JavaScript and Bootstrap applying responsive design.",
                        "SQL Server query optimization with T-SQL, stored procedures and functions.",
                        "Implementation of encryption algorithms (AES, RSA, SHA-256) for sensitive data protection.",
                        "Backend architecture based on SOLID, Clean Architecture and DDD principles.",
                        "Legacy architecture refactoring towards project with Entity Framework and clean principles.",
                        "Technical documentation with Swagger and API testing with Postman/Insomnia."
                    ],
                    achievements: [
                        "Creation of Honestel v2 API from scratch (6 core endpoints) with Swagger documentation.",
                        "40% reduction in critical query execution time through stored procedure optimization.",
                        "Automation of 5 operational processes via scripts, eliminating ~8 hrs/week of manual work."
                    ]
                },
                {
                    role: "Full Stack Developer",
                    company: "Digital Solutions",
                    period: "May 2023 - May 2024",
                    duration: "1 year",
                    description: "Integral development of enterprise systems for HR and recruitment management. Stack: .NET Framework, C#, Entity Framework, SQL Server, JavaScript, jQuery, Bootstrap.",
                    functions: [
                        "REST API development with .NET Framework and Entity Framework for candidate management.",
                        "Implementation of bulk upload module from Excel and TXT processing thousands of records.",
                        "Responsive interface design with JavaScript, jQuery and Bootstrap.",
                        "SQL Server query optimization with stored procedures and functions.",
                        "Version control with GitHub and branch management for collaborative work."
                    ],
                    achievements: [
                        "Delivery of complete recruitment management system (12 modules) in 8 months.",
                        "Bulk upload module processing +5,000 records in <10 seconds from Excel/TXT.",
                        "50% reduction in onboarding time through employee registration automation."
                    ]
                },
                {
                    role: "Full Stack Developer",
                    company: "Freelance · Align Designs Platform",
                    period: "Oct. 2025 - Present",
                    duration: "~6 months",
                    description: "Cloud B2B/B2C platform with professional monorepo architecture. Stack: NestJS 11, Next.js 16, PostgreSQL 15, Prisma ORM, Docker, GitHub Actions, Redis, DigitalOcean Spaces, Prometheus.",
                    functions: [
                        "Modular monorepo architecture (pnpm workspaces) with NestJS 11 + Next.js 16 + PostgreSQL/Prisma applying SOLID and Clean Architecture.",
                        "Dual auth system: JWT with refresh token rotation for admins and OTP with bcrypt for clients. RBAC with 3 roles (Admin, Client, Employee).",
                        "Full HTTP security: CSRF (HMAC-SHA256), Helmet (CSP, HSTS), IP rate limiting, account lockout after 5 attempts, Zod schema validation.",
                        "File storage on DigitalOcean Spaces (S3-compatible) with 15-min presigned URLs and magic number validation to prevent MIME spoofing.",
                        "CI/CD with GitHub Actions + SonarCloud + Codecov + Lighthouse. Automated deploy with Docker on DigitalOcean with automatic backups to Spaces.",
                        "Billing with auto-numbering, file versioning, in-app notifications, Prometheus metrics and structured logging with Pino.",
                        "57 unit test files (Jest + Vitest) and full E2E test suite with Playwright."
                    ],
                    achievements: [
                        "Production platform with 16+ modules and 8 workflow stages: auth, billing, employee payments, file storage and notifications.",
                        "Complete CI/CD pipeline: lint → tests → SonarCloud → build → deploy → health checks → automatic backup on every push.",
                        "Layered security architecture: CSRF + Helmet + rate limiting + JWT rotation + OTP + AES/RSA + SSH hardening + fail2ban."
                    ]
                }
            ]
        },
        skills: {
            title: 'Technical Skills',
            subtitle: 'Tech stack and professional competencies',
            mainTech: 'Main Technologies',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                devops: 'DevOps & Tools',
                ai: 'AI & Productivity'
            },
            competencies: {
                title: 'Key Competencies',
                items: [
                    { title: 'Clean Architecture / DDD', desc: 'Solution design with Clean Architecture and Domain-Driven Design (2 years)' },
                    { title: 'Secure Coding', desc: 'Implementation of AES/RSA encryption, OAuth2, JWT and security practices' },
                    { title: 'SQL Optimization', desc: 'Query time improvement up to 40% with procedures and functions' },
                    { title: 'SCRUM Methodology', desc: 'Experience working with agile methodologies (10 months)' },
                    { title: 'Testing & QA', desc: 'Unit testing, user testing and technical documentation (Swagger)' },
                    { title: 'Self-Taught Learning', desc: 'Demonstrated ability to master new technologies independently' },
                    { title: 'Teamwork', desc: 'Assertive communication, adaptability and effective collaboration' },
                    { title: 'AI-Assisted Development', desc: 'Programming with Claude and Gemini optimizing every line with best practices' },
                    { title: 'Immediate Availability', desc: 'Available for onboarding in 1 week or 3 days' }
                ]
            }
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'Innovative Solutions and Modern Applications',
            items: [
                {
                    title: "Align Designs Platform",
                    description: "Cloud B2B/B2C platform with monorepo architecture (NestJS 11 + Next.js 15 + PostgreSQL/Prisma). Dual JWT/OTP authentication, async messaging, AES/RSA encryption, CI/CD with GitHub Actions, Docker and Clean/SOLID architecture with RBAC."
                },
                {
                    title: "Internal Audit System (ADA/HONESTEL)",
                    description: "Critical platform for internal whistleblowing management for all Grupo Salinas companies. Led the migration from .NET Framework to .NET Core 6, improving performance by 40% and reducing SQL Server query times."
                },
                {
                    title: "Enterprise Recruitment System",
                    description: "End-to-end platform for full recruitment cycle management with bulk candidate upload from Excel/TXT, processing +5,000 records in under 10 seconds."
                }
            ]
        },
        languages: {
            title: 'Languages',
            subtitle: 'Linguistic Competencies',
            items: [
                {
                    name: 'Spanish',
                    level: 'Native',
                    details: ['Mother tongue', 'Professional communication', 'Advanced technical writing']
                },
                {
                    name: 'English',
                    level: 'A2-B1 Intermediate',
                    details: ['Reading and understanding technical documentation', 'Intermediate technical writing', 'Basic-intermediate conversation', 'Constantly improving']
                }
            ]
        },
        contact: {
            title: 'Contact Me',
            subtitle: 'Have a project in mind? I would love to hear about it!',
            infoTitle: 'Contact Information',
            followMe: 'Follow Me',
            messageTitle: 'Send Me a Message',
            form: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                send: 'Send Message',
                sent: 'Message sent (simulation)'
            },
            errors: {
                name: 'Name is required',
                subject: 'Subject is required',
                message: 'Message is required'
            },
            success: {
                title: 'Message Ready!',
                text: 'WhatsApp will open to send your message successfully.'
            }
        },
        footer: {
            brand: 'Erick Rodríguez',
            description: 'Full Stack Developer specializing in .NET Core/C#, React 19 and Azure. 3 years of experience in enterprise development.',
            navigation: 'Navigation',
            contact: 'Contact',
            rights: 'All rights reserved.',
            madeWith: 'Made with'
        }
    }
};
