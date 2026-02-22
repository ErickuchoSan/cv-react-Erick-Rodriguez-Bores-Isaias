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
            role: 'Desarrollador Full Stack Senior',
            description: 'Impulsando la innovación con arquitecturas escalables y experiencias de usuario modernas. Especialista en .NET/C#, React y Soluciones Cloud.',
            contactBtn: 'Contáctame',
            projectsBtn: 'Ver Proyectos',
            downloadBtn: 'Descargar CV',
            generating: 'Generando...'
        },
        about: {
            title: 'Sobre Mí',
            subtitle: 'Transformando ideas en soluciones empresariales de alto impacto',
            roleTitle: 'Especialista en Arquitecturas Empresariales',
            description1: 'Con +5 años de experiencia en desarrollo de software empresarial, diseño e implemento arquitecturas escalables que resuelven problemas reales de negocio. He logrado reducir tiempos de consulta en un 40%, automatizar procesos críticos y migrar sistemas legacy a tecnologías modernas con .NET/C#, React y SQL Server.',
            description2: 'Actualmente como Programador de Auditoría Senior en Grupo Salinas, lidero el desarrollo de sistemas críticos de auditoría interna que dan servicio a todas las empresas del grupo, utilizando .NET Core, React, Next.js y arquitecturas de microservicios. Me distingo por mi capacidad autodidacta, pensamiento orientado a resultados y programación asistida por IA (Claude, Gemini, Antigravity) sin sacrificar la calidad del código.',
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
            subtitle: '+5 años de trayectoria en desarrollo de software',
            responsibilities: 'Responsabilidades:',
            achievements: 'Logros Destacados:',
            stack: 'Stack Tecnológico:',
            jobs: [
                {
                    role: "Programador de Auditoría Senior",
                    company: "Grupo Salinas",
                    period: "Mayo 2024 - Actual",
                    duration: "~2 años",
                    description: "Líder técnico responsable de la arquitectura, desarrollo y evolución de los sistemas críticos de auditoría interna (ADA/HONESTEL) que procesan denuncias de todas las empresas del grupo corporativo.",
                    functions: [
                        "Desarrollo de la API v2 de Honestel (SICH) con 6 endpoints iniciales e integración con ADACH aplicando metodología DRY.",
                        "Refactorización de la arquitectura legacy (código espagueti) de ADACH hacia un proyecto con principios limpios de Frontend y Backend.",
                        "Desarrollo de nuevos endpoints API para el sistema de alarmas NOC.",
                        "Optimización integral de rendimiento abarcando consultas SQL, lógica de Backend y renderizado en Frontend.",
                        "Mantenimiento activo mediante la actualización de paquetes NuGet y librerías JS, resolviendo dependencias y adaptando el código.",
                        "Soporte técnico e impartición de capacitaciones mensuales a usuarios finales sobre el sistema ADACH.",
                        "Implementación de algoritmos de encriptación (AES y SHA-256) para la protección de datos sensibles end-to-end.",
                        "Diseño de Arquitectura Backend basado en: SOLID, YAGNI, Fail Fast, Ley de Demeter (LoD), Idempotencia, Least Privilege y DRY.",
                        "Desarrollo Frontend guiado por: KISS, SoC, DRY, Single Source of Truth, Progressive Enhancement y Accessibility First."
                    ],
                    achievements: [
                        "Creación de la API v2 de Honestel desde cero (6 endpoints principales) y su integración continua con múltiples sistemas.",
                        "Reducción de 40% en tiempo de ejecución de consultas críticas de base de datos.",
                        "Automatización de procesos operativos mediante scripts Python, eliminando tareas repetitivas."
                    ]
                },
                {
                    role: "Desarrollador Full Stack",
                    company: "Digital Solutions",
                    period: "Mayo 2023 - Mayo 2024",
                    duration: "1 año",
                    description: "Desarrollo integral de sistemas empresariales para gestión de recursos humanos y reclutamiento, con enfoque en procesamiento masivo de datos y automatización de flujos operativos.",
                    functions: [
                        "Diseño e implementación end-to-end del sistema de reclutamiento y gestión de candidatos",
                        "Desarrollo de módulo de carga masiva desde Excel y TXT, procesando miles de registros simultáneamente",
                        "Arquitectura e integración de servicios backend con .NET Framework y Entity Framework",
                        "Diseño de interfaces responsivas y accesibles con JavaScript y Bootstrap",
                        "Optimización de consultas SQL Server para manejo eficiente de grandes volúmenes de datos"
                    ],
                    achievements: [
                        "Entrega de sistema completo de gestión de reclutamiento desde cero",
                        "Módulo de carga masiva capaz de procesar miles de registros en segundos",
                        "Reducción significativa del tiempo de onboarding mediante automatización de procesos"
                    ]
                },
                {
                    role: "Desarrollador Full Stack",
                    company: "Freelance / Proyectos Propios",
                    period: "2025 - 2026",
                    duration: "1 año",
                    description: "Desarrollo profesional autodidacta construyendo aplicaciones web completas, sistemas de gestión empresarial y herramientas de automatización con múltiples stacks tecnológicos.",
                    functions: [
                        "Desarrollo de aplicaciones web completas con .NET, Entity Framework y bases de datos relacionales",
                        "Diseño e implementación de sistemas de administración con SQL Server",
                        "Construcción de APIs RESTful y exploración de arquitecturas de microservicios",
                        "Implementación de algoritmos de seguridad y criptografía (AES, RSA, SHA-256)",
                        "Desarrollo con stacks modernos: NestJS, PostgreSQL, Vue.js y Node.js"
                    ],
                    achievements: [
                        "Dominio autodidacta de +20 tecnologías en backend, frontend y DevOps",
                        "Portfolio de proyectos funcionales desplegados en producción",
                        "Base sólida en patrones de diseño y arquitecturas escalables"
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
                    { title: 'Desarrollo Asistido por IA', desc: 'Programo con Claude, Gemini y Antigravity - entiendo, reviso y optimizo cada línea aplicando buenas prácticas' },
                    { title: 'Aprendizaje Autodidacta', desc: 'Capacidad demostrada para dominar nuevas tecnologías de forma independiente' },
                    { title: 'Resolución de Problemas', desc: 'Pensamiento analítico y sistemático para optimización de sistemas' },
                    { title: 'Adaptabilidad Tecnológica', desc: 'Rápida adopción de nuevas herramientas y frameworks' },
                    { title: 'Políglota Tecnológico', desc: 'Con IA me adapto a cualquier lenguaje o stack que el proyecto requiera' },
                    { title: 'Resiliencia', desc: 'Persistencia y enfoque bajo presión en proyectos complejos' },
                    { title: 'Optimización de Rendimiento', desc: 'Mejora de tiempos de respuesta y queries SQL hasta 40%' },
                    { title: 'Refactorización de Código', desc: 'Modularización, eliminación de redundancia y mejora de mantenibilidad' },
                    { title: 'Automatización de Procesos', desc: 'Scripts y pipelines para eficiencia operativa' }
                ]
            }
        },
        projects: {
            title: 'Proyectos Destacados',
            subtitle: 'Soluciones Innovadoras y Aplicaciones Modernas',
            items: [
                {
                    title: "Align Designs Platform",
                    description: "Plataforma B2B/B2C en la nube con arquitectura monorepo. Diseño regido por metodologías SOLID y SoC con seguridad avanzada. Desarrollo optimizado e implementado con el uso de IA (Claude) para garantizar la mejor calidad y rendimiento."
                },
                {
                    title: "Sistema de Auditoría Interna (ADA/HONESTEL)",
                    description: "Plataforma crítica para gestión de denuncias internas de todas las empresas del Grupo Salinas. Lideré la migración de .NET Framework a .NET Core con arquitectura de microfrontends, mejorando el rendimiento un 40%."
                },
                {
                    title: "Sistema de Reclutamiento Empresarial",
                    description: "Plataforma end-to-end para gestión del ciclo completo de reclutamiento con carga masiva de candidatos desde Excel/TXT, procesando miles de registros simultáneamente."
                }
            ]
        },
        languages: {
            title: 'Idiomas',
            subtitle: 'Competencias Lingüísticas',
            items: [

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
            description: 'Desarrollador Full Stack Senior especializado en arquitecturas empresariales escalables con .NET/C# y React. +5 años de experiencia.',
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
            role: 'Senior Full Stack Developer',
            description: 'Driving innovation with scalable architectures and modern user experiences. Specialist in .NET/C#, React, and Cloud Solutions.',
            contactBtn: 'Contact Me',
            projectsBtn: 'View Projects',
            downloadBtn: 'Download CV',
            generating: 'Generating...'
        },
        about: {
            title: 'About Me',
            subtitle: 'Transforming ideas into high-impact business solutions',
            roleTitle: 'Enterprise Architecture Specialist',
            description1: 'With +5 years of experience in enterprise software development, I design and implement scalable architectures that solve real business problems. I have achieved a 40% reduction in query times, automated critical processes, and migrated legacy systems to modern technologies using .NET/C#, React, and SQL Server.',
            description2: 'Currently as a Senior Audit Programmer at Group Salinas, I lead the development of critical internal audit systems serving all group companies, using .NET Core, React, Next.js, and microservices architectures. I distinguish myself by my self-taught ability, results-oriented thinking, and AI-assisted programming (Claude, Gemini, Antigravity) without sacrificing code quality.',
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
            subtitle: '+5 years of experience in software development',
            responsibilities: 'Responsibilities:',
            achievements: 'Key Achievements:',
            stack: 'Tech Stack:',
            jobs: [
                {
                    role: "Senior Audit Programmer",
                    company: "Grupo Salinas",
                    period: "May 2024 - Present",
                    duration: "~2 years",
                    description: "Technical lead responsible for the architecture, development, and evolution of critical internal audit systems (ADA/HONESTEL) processing reports from all corporate group companies.",
                    functions: [
                        "Development of the Honestel v2 API (SICH) with 6 initial endpoints and integration with ADACH applying DRY methodology.",
                        "Refactoring of ADACH's legacy architecture (spaghetti code) into a project with clean Frontend and Backend principles.",
                        "Development of new API endpoints for the NOC alarm system.",
                        "Comprehensive performance optimization spanning SQL queries, Backend logic, and Frontend rendering.",
                        "Active maintenance through updating NuGet packages and JS libraries, resolving dependencies and adapting code.",
                        "Technical support and conducting monthly training sessions for end-users on the ADACH system.",
                        "Implementation of encryption algorithms (AES and SHA-256) for end-to-end sensitive data protection.",
                        "Backend Architecture design based on: SOLID, YAGNI, Fail Fast, Law of Demeter (LoD), Idempotency, Least Privilege, and DRY.",
                        "Frontend Development guided by: KISS, SoC, DRY, Single Source of Truth, Progressive Enhancement, and Accessibility First."
                    ],
                    achievements: [
                        "Creation of the Honestel v2 API from scratch (6 core endpoints) and its continuous integration with multiple systems.",
                        "40% reduction in execution time of critical database queries.",
                        "Automation of operational processes using Python scripts, eliminating repetitive tasks."
                    ]
                },
                {
                    role: "Full Stack Developer",
                    company: "Digital Solutions",
                    period: "May 2023 - May 2024",
                    duration: "1 year",
                    description: "Integral development of enterprise systems for human resources and recruitment management, focusing on massive data processing and automation of operational flows.",
                    functions: [
                        "End-to-end design and implementation of the recruitment and candidate management system",
                        "Development of bulk upload module from Excel and TXT, processing thousands of records simultaneously",
                        "Architecture and integration of backend services with .NET Framework and Entity Framework",
                        "Design of responsive and accessible interfaces with JavaScript and Bootstrap",
                        "Optimization of SQL Server queries for efficient handling of large data volumes"
                    ],
                    achievements: [
                        "Delivery of complete recruitment management system from scratch",
                        "Bulk upload module capable of processing thousands of records in seconds",
                        "Significant reduction of onboarding time through process automation"
                    ]
                },
                {
                    role: "Full Stack Developer",
                    company: "Freelance / Own Projects",
                    period: "2025 - 2026",
                    duration: "1 year",
                    description: "Self-taught professional development building complete web applications, business management systems, and automation tools with multiple tech stacks.",
                    functions: [
                        "Development of complete web applications with .NET, Entity Framework, and relational databases",
                        "Design and implementation of administration systems with SQL Server",
                        "Construction of RESTful APIs and exploration of microservices architectures",
                        "Implementation of security and cryptography algorithms (AES, RSA, SHA-256)",
                        "Development with modern stacks: NestJS, PostgreSQL, Vue.js, and Node.js"
                    ],
                    achievements: [
                        "Self-taught mastery of +20 technologies in backend, frontend, and DevOps",
                        "Portfolio of functional projects deployed in production",
                        "Solid foundation in design patterns and scalable architectures"
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
                    { title: 'AI-Assisted Development', desc: 'Programming with Claude, Gemini and Antigravity - understanding, reviewing, and optimizing every line applying best practices' },
                    { title: 'Self-Taught Learning', desc: 'Demonstrated ability to master new technologies independently' },
                    { title: 'Problem Solving', desc: 'Analytical and systematic thinking for system optimization' },
                    { title: 'Technological Adaptability', desc: 'Rapid adoption of new tools and frameworks' },
                    { title: 'Tech Polyglot', desc: 'With AI, I adapt to any language or stack the project requires' },
                    { title: 'Resilience', desc: 'Persistence and focus under pressure in complex projects' },
                    { title: 'Performance Optimization', desc: 'Improvement of response times and SQL queries up to 40%' },
                    { title: 'Code Refactoring', desc: 'Modularization, redundancy elimination, and maintainability improvement' },
                    { title: 'Process Automation', desc: 'Scripts and pipelines for operational efficiency' }
                ]
            }
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'Innovative Solutions and Modern Applications',
            items: [
                {
                    title: "Align Designs Platform",
                    description: "Cloud B2B/B2C platform with monorepo architecture. Design governed by SOLID and SoC methodologies with advanced security. Development optimized and implemented using AI (Claude) to ensure the highest quality and performance."
                },
                {
                    title: "Internal Audit System (ADA/HONESTEL)",
                    description: "Critical platform for internal whistleblowing management for all Grupo Salinas companies. I lead the migration from .NET Framework to .NET Core with micro-frontend architecture, improving performance by 40%."
                },
                {
                    title: "Enterprise Recruitment System",
                    description: "End-to-end platform for full recruitment cycle management with bulk candidate upload from Excel/TXT, processing thousands of records simultaneously."
                }
            ]
        },
        languages: {
            title: 'Languages',
            subtitle: 'Linguistic Competencies',
            items: [

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
            description: 'Senior Full Stack Developer specializing in scalable enterprise architectures with .NET/C# and React. +5 years of experience.',
            navigation: 'Navigation',
            contact: 'Contact',
            rights: 'All rights reserved.',
            madeWith: 'Made with'
        }
    }
};
