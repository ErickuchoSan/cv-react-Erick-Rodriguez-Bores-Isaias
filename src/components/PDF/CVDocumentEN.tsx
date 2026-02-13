/* eslint-disable react-refresh/only-export-components */
import { Document, Page, Text, View, StyleSheet, Font, Image, Link } from '@react-pdf/renderer';

Font.register({
    family: 'Roboto',
    fonts: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
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
        padding: 20,
        height: '100%',
    },
    main: {
        width: '68%',
        padding: 24,
        paddingTop: 20,
        backgroundColor: '#f8fafc', // slate-50
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#3b82f6', // blue-500
        marginBottom: 10,
        objectFit: 'cover',
    },
    sidebarTitle: {
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 12,
        color: '#60a5fa', // blue-400
        textTransform: 'uppercase',
        letterSpacing: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#334155',
        paddingBottom: 4,
        marginTop: 10,
    },
    contactItem: {
        marginBottom: 8,
        fontSize: 9,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    contactIcon: {
        marginRight: 6,
        color: '#94a3b8',
    },
    skillCategory: {
        marginBottom: 10,
    },
    categoryTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: '#e2e8f0', // slate-200
        marginBottom: 4,
    },
    skillItem: {
        fontSize: 9,
        marginBottom: 2,
        color: '#cbd5e1', // slate-300
    },
    languageItem: {
        marginBottom: 6,
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
        marginBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#e2e8f0', // slate-200
        paddingBottom: 10,
    },
    name: {
        fontSize: 28,
        fontWeight: 700,
        color: '#1e293b', // slate-800
        marginBottom: 2,
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 14,
        color: '#3b82f6', // blue-500
        fontWeight: 500,
        letterSpacing: 1,
    },
    summary: {
        fontSize: 9,
        color: '#475569', // slate-600
        lineHeight: 1.4,
        marginBottom: 15,
        textAlign: 'justify',
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: 700,
        color: '#1e293b',
        textTransform: 'uppercase',
        marginBottom: 10,
        marginTop: 10,
        borderLeftWidth: 3,
        borderLeftColor: '#3b82f6',
        paddingLeft: 8,
    },
    experienceItem: {
        marginBottom: 12,
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
        alignItems: 'baseline',
    },
    jobTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: '#334155', // slate-700
    },
    company: {
        fontSize: 10,
        color: '#3b82f6', // blue-500
        fontWeight: 500,
    },
    period: {
        fontSize: 9,
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
        marginBottom: 2,
        paddingLeft: 4,
    },
    bullet: {
        width: 3,
        height: 3,
        backgroundColor: '#94a3b8',
        borderRadius: '50%',
        marginRight: 6,
        marginTop: 4,
    },
    bulletText: {
        fontSize: 8.5,
        color: '#475569',
        flex: 1,
        lineHeight: 1.3,
    },
    projectItem: {
        marginBottom: 8,
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    projectTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: '#1e293b',
        marginBottom: 2,
    },
    projectDesc: {
        fontSize: 9,
        color: '#475569',
        marginBottom: 3,
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
        marginBottom: 8,
    },
    degree: {
        fontSize: 10,
        fontWeight: 700,
        color: '#1e293b',
    },
    school: {
        fontSize: 9,
        color: '#475569',
    },
    year: {
        fontSize: 9,
        color: '#64748b',
    }
});

export const CVDocumentEN = () => {
    const profileImage = `${window.location.origin}/assets/images/profile.jpeg`;

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
                        <Text style={styles.sidebarTitle}>CONTACT</Text>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>Location:</Text>
                            <Text>Cuajimalpa, CDMX</Text>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>Phone:</Text>
                            <Link src="tel:+525512345678" style={{ color: 'white', textDecoration: 'none' }}>
                                +52 55 1234 5678
                            </Link>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>Email:</Text>
                            <Link src="mailto:erick.rodriguez.bores@gmail.com" style={{ color: 'white', textDecoration: 'none', fontSize: 8 }}>
                                erick.rodriguez.bores@gmail.com
                            </Link>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>LinkedIn:</Text>
                            <Link src="https://linkedin.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                                linkedin.com/in/erickrodriguez
                            </Link>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>GitHub:</Text>
                            <Link src="https://github.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                                github.com/erickrodriguez
                            </Link>
                        </View>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.sidebarTitle}>TECHNICAL SKILLS</Text>

                        <View style={styles.skillCategory}>
                            <Text style={styles.categoryTitle}>BACKEND</Text>
                            <Text style={styles.skillItem}>• .NET Core / C# (Expert)</Text>
                            <Text style={styles.skillItem}>• SQL Server / T-SQL</Text>
                            <Text style={styles.skillItem}>• Entity Framework</Text>
                            <Text style={styles.skillItem}>• Microservices / API</Text>
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
                            <Text style={styles.categoryTitle}>DEVOPS & TOOLS</Text>
                            <Text style={styles.skillItem}>• Docker / Containers</Text>
                            <Text style={styles.skillItem}>• Azure DevOps</Text>
                            <Text style={styles.skillItem}>• AWS (Basic)</Text>
                            <Text style={styles.skillItem}>• Git / CI/CD</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.sidebarTitle}>LANGUAGES</Text>
                        <View style={styles.languageItem}>
                            <Text style={styles.languageName}>Spanish</Text>
                            <Text style={styles.languageLevel}>Native</Text>
                        </View>
                        <View style={styles.languageItem}>
                            <Text style={styles.languageName}>English</Text>
                            <Text style={styles.languageLevel}>A2-B1 Intermediate</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.sidebarTitle}>EDUCATION</Text>
                        <View style={styles.educationItem}>
                            <Text style={styles.degree}>B.S. Computer Systems</Text>
                            <Text style={styles.school}>UTEL University</Text>
                            <Text style={styles.year}>2019 - 2023</Text>
                        </View>
                        <View style={styles.educationItem}>
                            <Text style={styles.degree}>Master in AI</Text>
                            <Text style={styles.school}>UNIR</Text>
                            <Text style={styles.year}>2025 - Present</Text>
                        </View>
                    </View>
                </View>

                {/* Main Content - Right Column */}
                <View style={styles.main}>
                    <View style={styles.header}>
                        <Text style={styles.name}>ERICK RODRÍGUEZ</Text>
                        <Text style={styles.title}>SENIOR FULL STACK DEVELOPER</Text>
                    </View>

                    <Text style={styles.summary}>
                        Enterprise Architecture Specialist with +5 years of experience. Expert in .NET/C#, React, and SQL Server.
                        Focused on performance optimization (40% reduction in query times), migrating legacy systems, and implementing
                        scalable architectures. Self-taught and results-oriented, leveraging AI tools to accelerate development
                        without compromising quality.
                    </Text>

                    <View>
                        <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>

                        {/* Job 1 */}
                        <View style={styles.experienceItem}>
                            <View style={styles.jobHeader}>
                                <View>
                                    <Text style={styles.jobTitle}>Senior Audit Programmer</Text>
                                    <Text style={styles.company}>Grupo Salinas</Text>
                                </View>
                                <Text style={styles.period}>May 2024 - Present</Text>
                            </View>
                            <Text style={styles.jobDescription}>
                                Technical lead for critical internal audit systems (ADA/HONESTEL).
                            </Text>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Design and development of Audit System API v2 with microservices architecture.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Optimization of SQL Server stored procedures (40% performance improvement).</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Implementation of end-to-end encryption (AES-256, RSA) for sensitive data.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Migration from .NET Framework to .NET Core and frontend to React/Next.js.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Process automation with Python scripts.</Text>
                            </View>
                        </View>

                        {/* Job 2 */}
                        <View style={styles.experienceItem}>
                            <View style={styles.jobHeader}>
                                <View>
                                    <Text style={styles.jobTitle}>Full Stack Developer</Text>
                                    <Text style={styles.company}>Digital Solutions</Text>
                                </View>
                                <Text style={styles.period}>May 2023 - May 2024</Text>
                            </View>
                            <Text style={styles.jobDescription}>
                                Development of enterprise HR and Recruitment systems.
                            </Text>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>End-to-end implementation of recruitment system.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Bulk upload module processing thousands of records from Excel/TXT.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Backend integration with .NET Framework and Entity Framework.</Text>
                            </View>
                        </View>

                        {/* Job 3 */}
                        <View style={styles.experienceItem}>
                            <View style={styles.jobHeader}>
                                <View>
                                    <Text style={styles.jobTitle}>Full Stack Developer</Text>
                                    <Text style={styles.company}>Freelance / Own Projects</Text>
                                </View>
                                <Text style={styles.period}>2020 - 2023</Text>
                            </View>
                            <Text style={styles.jobDescription}>
                                Self-taught development of web applications and management systems.
                            </Text>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Development with .NET, NestJS, PostgreSQL, Vue.js, and Node.js.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <View style={styles.bullet} />
                                <Text style={styles.bulletText}>Implementation of security algorithms (AES, RSA, SHA-256).</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>FEATURED PROJECTS</Text>

                        <View style={styles.projectItem}>
                            <Text style={styles.projectTitle}>Internal Audit System (ADA/HONESTEL)</Text>
                            <Text style={styles.projectDesc}>Critical whistleblowing platform. Migrated to .NET Core with micro-frontends.</Text>
                            <View style={styles.techStack}>
                                <Text style={styles.techBagde}>.NET Core</Text>
                                <Text style={styles.techBagde}>React</Text>
                                <Text style={styles.techBagde}>AWS</Text>
                                <Text style={styles.techBagde}>SQL Server</Text>
                            </View>
                        </View>

                        <View style={styles.projectItem}>
                            <Text style={styles.projectTitle}>Enterprise Recruitment System</Text>
                            <Text style={styles.projectDesc}>Recruitment management with bulk candidate processing.</Text>
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
