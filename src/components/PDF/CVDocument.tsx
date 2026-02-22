/* eslint-disable react-refresh/only-export-components */
import { Document, Page, Text, View, StyleSheet, Font, Image, Link } from '@react-pdf/renderer';

Font.register({
    family: 'Roboto',
    fonts: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-italic-webfont.ttf', fontStyle: 'italic' },
    ],
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Roboto',
    },
    sidebar: {
        width: '32%',
        backgroundColor: '#1e293b', // slate-800
        color: 'white',
        padding: 15,
        height: '100%',
    },
    main: {
        width: '68%',
        padding: 20,
        paddingTop: 15,
        backgroundColor: '#f8fafc', // slate-50
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 15,
    },
    profileImage: {
        width: 85,
        height: 85,
        borderRadius: 42.5,
        borderWidth: 3,
        borderColor: '#3b82f6', // blue-500
        marginBottom: 8,
        objectFit: 'cover',
    },
    sidebarTitle: {
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 8,
        color: '#60a5fa', // blue-400
        textTransform: 'uppercase',
        letterSpacing: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#334155',
        paddingBottom: 4,
        marginTop: 8,
    },
    contactItem: {
        marginBottom: 6,
        fontSize: 8.5,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    contactIcon: {
        marginRight: 6,
        color: '#94a3b8',
    },
    skillCategory: {
        marginBottom: 4,
    },
    categoryTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: '#e2e8f0', // slate-200
        marginBottom: 4,
    },
    skillItem: {
        fontSize: 8.5,
        marginBottom: 1,
        color: '#cbd5e1', // slate-300
    },
    languageItem: {
        marginBottom: 4,
    },
    languageName: {
        fontSize: 10,
        fontWeight: 700,
        color: 'white',
    },
    languageLevel: {
        fontSize: 9,
        color: '#94a3b8',
    },
    header: {
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#e2e8f0', // slate-200
        paddingBottom: 8,
    },
    name: {
        fontSize: 24,
        fontWeight: 700,
        color: '#1e293b', // slate-800
        marginBottom: 2,
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 12,
        color: '#3b82f6', // blue-500
        fontWeight: 500,
        letterSpacing: 1,
    },
    summary: {
        fontSize: 9,
        color: '#475569', // slate-600
        lineHeight: 1.3,
        marginBottom: 10,
        textAlign: 'justify',
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: '#1e293b',
        textTransform: 'uppercase',
        marginBottom: 6,
        marginTop: 6,
        borderLeftWidth: 3,
        borderLeftColor: '#3b82f6',
        paddingLeft: 8,
    },
    experienceItem: {
        marginBottom: 8,
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1,
        alignItems: 'baseline',
    },
    jobTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: '#334155', // slate-700
    },
    company: {
        fontSize: 9,
        color: '#3b82f6', // blue-500
        fontWeight: 500,
    },
    period: {
        fontSize: 8.5,
        color: '#64748b', // slate-500
    },
    jobDescription: {
        fontSize: 9,
        color: '#475569',
        marginBottom: 4,
        fontStyle: 'italic',
    },
    bulletPoint: {
        flexDirection: 'row',
        marginBottom: 1.5,
        paddingLeft: 4,
    },
    bullet: {
        width: 3,
        height: 3,
        backgroundColor: '#94a3b8',
        borderRadius: 1.5,
        marginRight: 6,
        marginTop: 4,
    },
    bulletText: {
        fontSize: 8,
        color: '#475569',
        flex: 1,
        lineHeight: 1.2,
    },
    projectItem: {
        marginBottom: 6,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    projectTitle: {
        fontSize: 9,
        fontWeight: 700,
        color: '#1e293b',
        marginBottom: 1,
    },
    projectDesc: {
        fontSize: 8,
        color: '#475569',
        marginBottom: 2,
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    techBagde: {
        fontSize: 7,
        backgroundColor: '#f1f5f9',
        color: '#475569',
        paddingHorizontal: 4,
        paddingVertical: 1,
        borderRadius: 2,
    },
    educationItem: {
        marginBottom: 6,
    },
    degree: {
        fontSize: 9,
        fontWeight: 700,
        color: '#1e293b',
    },
    school: {
        fontSize: 8.5,
        color: '#475569',
    },
    year: {
        fontSize: 8.5,
        color: '#64748b',
    }
});

export const CVDocument = () => {
    // Definimos la imagen aquí dentro del componente para que se evalúe al renderizar
    const profileImage = `${window.location.origin}/assets/images/profile.jpg`;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Sidebar - Left Column */}
                <View style={styles.sidebar}>
                    <View style={styles.profileContainer}>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image
                            src={profileImage}
                            style={styles.profileImage}
                        />
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.sidebarTitle}>CONTACTO</Text>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>Ubicación:</Text>
                            <Text>Cuajimalpa, CDMX</Text>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>Teléfono:</Text>
                            <Link src="tel:+525571104581" style={{ color: 'white', textDecoration: 'none' }}>
                                +52 55 7110 4581
                            </Link>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>Email:</Text>
                            <Link src="mailto:e.bores.i@outlook.com" style={{ color: 'white', textDecoration: 'none', fontSize: 8 }}>
                                e.bores.i@outlook.com
                            </Link>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>LinkedIn:</Text>
                            <Link src="https://www.linkedin.com/in/erick-rodr%C3%ADguez-bores-isa%C3%ADas-0a0117149/" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                                linkedin.com/in/erick-rodríguez-bores-isaías
                            </Link>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>GitHub:</Text>
                            <Link src="https://github.com/ErickuchoSan" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                                github.com/ErickuchoSan
                            </Link>
                        </View>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.sidebarTitle}>HABILIDADES TÉCNICAS</Text>

                        <View style={styles.skillCategory}>
                            <Text style={styles.categoryTitle}>BACKEND</Text>
                            <Text style={styles.skillItem}>• .NET Core / C# (Experto)</Text>
                            <Text style={styles.skillItem}>• SQL Server / T-SQL</Text>
                            <Text style={styles.skillItem}>• Entity Framework</Text>
                            <Text style={styles.skillItem}>• Microservicios / API</Text>
                            <Text style={styles.skillItem}>• Python / Scripts</Text>
                        </View>

                        <View style={styles.skillCategory}>
                            <Text style={styles.categoryTitle}>FRONTEND</Text>
                            <Text style={styles.skillItem}>• React / Next.js</Text>
                            <Text style={styles.skillItem}>• TypeScript</Text>
                            <Text style={styles.skillItem}>• Tailwind CSS</Text>
                            <Text style={styles.skillItem}>• JavaScript (ES6+)</Text>
                        </View>

                        <View style={styles.skillCategory}>
                            <Text style={styles.categoryTitle}>DEVOPS & HERRAMIENTAS</Text>
                            <Text style={styles.skillItem}>• Docker / Contenedores</Text>
                            <Text style={styles.skillItem}>• Git / CI/CD</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.sidebarTitle}>IDIOMAS</Text>

                        <View style={styles.languageItem}>
                            <Text style={styles.languageName}>Inglés</Text>
                            <Text style={styles.languageLevel}>A2-B1 Intermedio</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.sidebarTitle}>EDUCACIÓN</Text>
                        <View style={styles.educationItem}>
                            <Text style={styles.degree}>Ing. Sistemas Computacionales</Text>
                            <Text style={styles.school}>UTEL Universidad</Text>
                            <Text style={styles.year}>2019 - 2023</Text>
                        </View>
                        <View style={styles.educationItem}>
                            <Text style={styles.degree}>Maestría en IA</Text>
                            <Text style={styles.school}>UNIR</Text>
                            <Text style={styles.year}>2025 - Presente</Text>
                        </View>
                    </View>
                </View>

                {/* Main Content - Right Column */}
                <View style={styles.main}>
                    <View style={styles.header}>
                        <Text style={styles.name}>ERICK RODRÍGUEZ</Text>
                        <Text style={styles.title}>DESARROLLADOR FULL STACK SENIOR</Text>
                    </View>

                    <Text style={styles.summary}>
                        Especialista en Arquitectura Empresarial con +5 años de experiencia. Experto en .NET/C#, React y SQL Server.
                        Enfocado en optimizar rendimiento (reducción de 40% en tiempos de consulta), migrar sistemas legados e implementar
                        arquitecturas escalables. Autodidacta y orientado a resultados, aprovechando herramientas de IA para acelerar el desarrollo
                        sin comprometer la calidad.
                    </Text>

                    <View>
                        <Text style={styles.sectionTitle}>EXPERIENCIA PROFESIONAL</Text>

                        {/* Job 1 */}
                        <View style={styles.experienceItem}>
                            <View style={styles.jobHeader}>
                                <View>
                                    <Text style={styles.jobTitle}>Programador de Auditoría Senior</Text>
                                    <Text style={styles.company}>Grupo Salinas</Text>
                                </View>
                                <Text style={styles.period}>Mayo 2024 - Actual</Text>
                            </View>
                            <Text style={styles.jobDescription}>
                                Líder técnico de sistemas críticos de auditoría interna (ADA/HONESTEL).
                            </Text>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Diseño y desarrollo de API v2 del Sistema de Auditoría con microservicios.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Optimización de procedimientos almacenados SQL (mejora de performance del 40%).</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Implementación de encriptación end-to-end (AES-256, RSA) para datos sensibles.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Migración de .NET Framework a .NET Core y frontend a React/Next.js.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Automatización de procesos con scripts de Python.</Text>
                            </View>
                            <Text style={{ fontSize: 9, fontFamily: 'Roboto', fontWeight: 'bold', color: '#1f2937', marginTop: 4, marginBottom: 2 }}>Logros Destacados:</Text>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Reducción de 40% en tiempo de ejecución de consultas SQL críticas.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Automatización de procesos de 30 min a segundos con Python.</Text>
                            </View>
                        </View>

                        {/* Job 2 */}
                        <View style={styles.experienceItem}>
                            <View style={styles.jobHeader}>
                                <View>
                                    <Text style={styles.jobTitle}>Desarrollador Full Stack</Text>
                                    <Text style={styles.company}>Digital Solutions</Text>
                                </View>
                                <Text style={styles.period}>Mayo 2023 - Mayo 2024</Text>
                            </View>
                            <Text style={styles.jobDescription}>
                                Desarrollo de sistemas empresariales de RRHH y Reclutamiento.
                            </Text>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Implementación end-to-end del sistema de reclutamiento.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Módulo de carga masiva procesando miles de registros desde Excel/TXT.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Integración backend con .NET Framework y Entity Framework.</Text>
                            </View>
                            <Text style={{ fontSize: 9, fontFamily: 'Roboto', fontWeight: 'bold', color: '#1f2937', marginTop: 4, marginBottom: 2 }}>Logros Destacados:</Text>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Entrega de sistema de reclutamiento completo desde cero.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Procesamiento de miles de registros de candidatos en segundos.</Text>
                            </View>
                        </View>

                        {/* Job 3 */}
                        <View style={styles.experienceItem}>
                            <View style={styles.jobHeader}>
                                <View>
                                    <Text style={styles.jobTitle}>Desarrollador Full Stack</Text>
                                    <Text style={styles.company}>Freelance / Proyectos Propios</Text>
                                </View>
                                <Text style={styles.period}>2025 - 2026</Text>
                            </View>
                            <Text style={styles.jobDescription}>
                                Desarrollo autodidacta de aplicaciones web y sistemas de gestión.
                            </Text>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Desarrollo con .NET, NestJS, PostgreSQL, Vue.js y Node.js.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Implementación de algoritmos de seguridad (AES, RSA, SHA-256).</Text>
                            </View>
                            <Text style={{ fontSize: 9, fontFamily: 'Roboto', fontWeight: 'bold', color: '#1f2937', marginTop: 4, marginBottom: 2 }}>Logros Destacados:</Text>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Dominio autodidacta de +20 tecnologías en backend, frontend y DevOps.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Portfolio de proyectos funcionales desplegados en producción.</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>PROYECTOS DESTACADOS</Text>

                        <View style={styles.projectItem}>
                            <Text style={styles.projectTitle}>Align Designs Platform</Text>
                            <Text style={styles.projectDesc}>Plataforma B2B/B2C en la nube con arquitectura monorepo. Buenas prácticas (SOLID, SoC). Desarrollo guiado por IA (Claude).</Text>
                            <View style={styles.techStack}>
                                <Text style={styles.techBagde}>Next.js</Text>
                                <Text style={styles.techBagde}>React</Text>
                                <Text style={styles.techBagde}>NestJS</Text>
                                <Text style={styles.techBagde}>MinIO</Text>
                                <Text style={styles.techBagde}>PostgreSQL</Text>
                            </View>
                        </View>

                        <View style={styles.projectItem}>
                            <Text style={styles.projectTitle}>Sistema de Auditoría Interna (ADA/HONESTEL)</Text>
                            <Text style={styles.projectDesc}>Plataforma crítica de gestión de denuncias. Migrada a .NET Core con micro-frontends.</Text>
                            <View style={styles.techStack}>
                                <Text style={styles.techBagde}>.NET Core</Text>
                                <Text style={styles.techBagde}>React</Text>
                                <Text style={styles.techBagde}>Next.js</Text>
                            </View>
                        </View>

                        <View style={styles.projectItem}>
                            <Text style={styles.projectTitle}>Sistema de Reclutamiento Empresarial</Text>
                            <Text style={styles.projectDesc}>Gestión de reclutamiento con procesamiento masivo de candidatos.</Text>
                            <View style={styles.techStack}>
                                <Text style={styles.techBagde}>.NET</Text>
                                <Text style={styles.techBagde}>Bootstrap</Text>
                                <Text style={styles.techBagde}>SQL</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};
