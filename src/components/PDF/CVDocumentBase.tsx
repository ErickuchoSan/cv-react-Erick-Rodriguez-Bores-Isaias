/* eslint-disable react-refresh/only-export-components */
import { Document, Page, Text, View, StyleSheet, Font, Image, Link } from '@react-pdf/renderer';
import { translations } from '../../i18n/translations';
import { CONTACT_INFO } from '../../data/contact';
import { PROJECTS_DATA } from '../../data/projects';

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

interface CVDocumentBaseProps {
    language: 'es' | 'en';
}

export const CVDocumentBase: React.FC<CVDocumentBaseProps> = ({ language }) => {
    // Note: profile image must be accessible
    const profileImage = `${window.location.origin}/assets/images/profile.jpg`;
    const t = translations[language];

    const isEs = language === 'es';

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Sidebar - Left Column */}
                <View style={styles.sidebar}>
                    <View style={styles.profileContainer}>
                        <Image
                            src={profileImage}
                            style={styles.profileImage}
                        // Omit or provide an empty alt tag for decorative images, but provide a descriptive one for accessibility
                        />
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.sidebarTitle}>{isEs ? 'CONTACTO' : 'CONTACT'}</Text>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>{isEs ? 'Ubicación:' : 'Location:'}</Text>
                            <Text>{t.about.location.city.split(',')[0]}, CDMX</Text>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>{isEs ? 'Teléfono:' : 'Phone:'}</Text>
                            <Link src={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} style={{ color: 'white', textDecoration: 'none' }}>
                                {CONTACT_INFO.phone}
                            </Link>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>Email:</Text>
                            <Link src={`mailto:${CONTACT_INFO.email}`} style={{ color: 'white', textDecoration: 'none', fontSize: 8 }}>
                                {CONTACT_INFO.email}
                            </Link>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>LinkedIn:</Text>
                            <Link src={CONTACT_INFO.social.linkedin} style={{ color: '#60a5fa', textDecoration: 'none' }}>
                                linkedin.com/in/erick-rodríguez-bores-isaías
                            </Link>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactIcon}>GitHub:</Text>
                            <Link src={CONTACT_INFO.social.github} style={{ color: '#60a5fa', textDecoration: 'none' }}>
                                github.com/ErickuchoSan
                            </Link>
                        </View>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.sidebarTitle}>{isEs ? 'HABILIDADES TÉCNICAS' : 'TECHNICAL SKILLS'}</Text>

                        <View style={styles.skillCategory}>
                            <Text style={styles.categoryTitle}>BACKEND</Text>
                            <Text style={styles.skillItem}>• .NET Core / C# ({isEs ? 'Experto' : 'Expert'})</Text>
                            <Text style={styles.skillItem}>• SQL Server / T-SQL</Text>
                            <Text style={styles.skillItem}>• Entity Framework</Text>
                            <Text style={styles.skillItem}>• {isEs ? 'Microservicios' : 'Microservices'} / API</Text>
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
                            <Text style={styles.categoryTitle}>{isEs ? 'DEVOPS & HERRAMIENTAS' : 'DEVOPS & TOOLS'}</Text>
                            <Text style={styles.skillItem}>• Docker / {isEs ? 'Contenedores' : 'Containers'}</Text>
                            <Text style={styles.skillItem}>• Git / CI/CD</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.sidebarTitle}>{isEs ? 'IDIOMAS' : 'LANGUAGES'}</Text>

                        {t.languages.items.map((lang, index) => (
                            <View key={index} style={styles.languageItem}>
                                <Text style={styles.languageName}>{lang.name}</Text>
                                <Text style={styles.languageLevel}>{lang.level}</Text>
                            </View>
                        ))}
                    </View>

                    <View>
                        <Text style={styles.sidebarTitle}>{t.about.education.title.toUpperCase()}</Text>
                        <View style={styles.educationItem}>
                            <Text style={styles.degree}>{t.about.education.degree1}</Text>
                            <Text style={styles.school}>{t.about.education.school1.split(' • ')[0]}</Text>
                            <Text style={styles.year}>{t.about.education.school1.split(' • ')[1]}</Text>
                        </View>
                        <View style={styles.educationItem}>
                            <Text style={styles.degree}>{t.about.education.degree2}</Text>
                            <Text style={styles.school}>{t.about.education.school2}</Text>
                            <Text style={styles.year}>{t.about.education.status2.split(' • ')[1]}</Text>
                        </View>
                    </View>
                </View>

                {/* Main Content - Right Column */}
                <View style={styles.main}>
                    <View style={styles.header}>
                        <Text style={styles.name}>{`${t.hero.title} ${t.hero.subtitle}`}</Text>
                        <Text style={styles.title}>{t.hero.role.toUpperCase()}</Text>
                    </View>

                    <Text style={styles.summary}>
                        {t.about.description1}
                    </Text>

                    <View>
                        <Text style={styles.sectionTitle}>{t.experience.title.toUpperCase()}</Text>

                        {t.experience.jobs.map((job, index) => (
                            <View key={index} style={styles.experienceItem}>
                                <View style={styles.jobHeader}>
                                    <View>
                                        <Text style={styles.jobTitle}>{job.role}</Text>
                                        <Text style={styles.company}>{job.company}</Text>
                                    </View>
                                    <Text style={styles.period}>{job.period}</Text>
                                </View>
                                <Text style={styles.jobDescription}>
                                    {job.description}
                                </Text>
                                {job.functions.map((func, i) => (
                                    <View key={i} style={styles.bulletPoint}>
                                        <View style={styles.bullet} />
                                        <Text style={styles.bulletText}>{func}</Text>
                                    </View>
                                ))}
                                {job.achievements && job.achievements.length > 0 && (
                                    <View>
                                        <Text style={{ fontSize: 9, fontFamily: 'Roboto', fontWeight: 'bold', color: '#1f2937', marginTop: 4, marginBottom: 2 }}>{t.experience.achievements}</Text>
                                        {job.achievements.map((achievement, i) => (
                                            <View key={`ach-${i}`} style={styles.bulletPoint}>
                                                <View style={styles.bullet} />
                                                <Text style={styles.bulletText}>{achievement}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>{t.projects.title.toUpperCase()}</Text>

                        {PROJECTS_DATA.map((project, index) => {
                            const trans = t.projects.items[index];
                            return (
                                <View key={index} style={styles.projectItem}>
                                    <Text style={styles.projectTitle}>{trans.title}</Text>
                                    <Text style={styles.projectDesc}>{trans.description}</Text>
                                    <View style={styles.techStack}>
                                        {project.tech.map((tag, tIndex) => (
                                            <Text key={tIndex} style={styles.techBagde}>{tag}</Text>
                                        ))}
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </Page>
        </Document>
    );
};
