/* eslint-disable react-refresh/only-export-components */
import React from 'react';
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
        backgroundColor: '#FFFFFF',
        fontFamily: 'Roboto',
        paddingTop: 30,
        paddingBottom: 45, // Space for footer
        paddingHorizontal: 30,
    },
    headerBg: {
        backgroundColor: '#1e293b', // slate-800
        padding: 25,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
        marginBottom: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#3b82f6',
        marginRight: 20,
        objectFit: 'cover'
    },
    headerText: {
        flex: 1,
    },
    name: {
        fontSize: 26,
        fontWeight: 700,
        color: 'white',
        textTransform: 'uppercase',
        marginBottom: 2,
    },
    title: {
        fontSize: 14,
        color: '#60a5fa',
        fontWeight: 500,
        letterSpacing: 1,
        marginBottom: 8,
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        fontSize: 9,
        color: '#cbd5e1'
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 700,
        color: '#1e293b',
        textTransform: 'uppercase',
        marginBottom: 8,
        marginTop: 14,
        borderBottomWidth: 2,
        borderBottomColor: '#3b82f6',
        paddingBottom: 4,
        minPresenceAhead: 100,
    },
    summary: {
        fontSize: 10,
        color: '#475569',
        lineHeight: 1.4,
        textAlign: 'justify',
        marginBottom: 6,
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 4,
    },
    skillBadge: {
        backgroundColor: '#f8fafc',
        color: '#334155',
        fontSize: 9,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        fontWeight: 500,
    },
    experienceItem: {
        marginBottom: 14,
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    jobRoleRow: {
        flex: 1,
    },
    jobTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: '#1e293b',
    },
    company: {
        fontSize: 11,
        color: '#3b82f6',
        fontWeight: 500,
        marginTop: 1,
    },
    period: {
        fontSize: 10,
        color: '#64748b',
        fontWeight: 500,
    },
    jobDescription: {
        fontSize: 10,
        color: '#475569',
        marginBottom: 6,
        fontStyle: 'italic',
        lineHeight: 1.3,
    },
    bulletPoint: {
        flexDirection: 'row',
        marginBottom: 3,
        paddingLeft: 4,
    },
    bullet: {
        width: 4,
        height: 4,
        backgroundColor: '#94a3b8',
        borderRadius: 2,
        marginRight: 8,
        marginTop: 4,
    },
    bulletText: {
        fontSize: 10,
        color: '#334155',
        flex: 1,
        lineHeight: 1.4,
    },
    achievementsTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: '#1e293b',
        marginTop: 6,
        marginBottom: 4,
    },
    projectItem: {
        marginBottom: 10,
        backgroundColor: '#f8fafc',
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    projectTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: '#1e293b',
        marginBottom: 3,
    },
    projectDesc: {
        fontSize: 10,
        color: '#475569',
        marginBottom: 6,
        lineHeight: 1.4,
    },
    projectTechWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    projectTechBadge: {
        fontSize: 9,
        backgroundColor: '#eff6ff',
        color: '#2563eb',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 4,
        fontWeight: 500,
    },
    bottomColumns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    bottomCol: {
        width: '48%',
    },
    eduItem: {
        marginBottom: 8,
    },
    eduDegree: {
        fontSize: 10,
        fontWeight: 700,
        color: '#1e293b',
        marginBottom: 2,
    },
    eduSchool: {
        fontSize: 9,
        color: '#475569',
    },
    eduYear: {
        fontSize: 9,
        color: '#64748b',
        marginTop: 1,
    },
    langRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#f8fafc',
        paddingBottom: 4,
    },
    langName: {
        fontSize: 10,
        fontWeight: 700,
        color: '#1e293b',
    },
    langLevel: {
        fontSize: 9,
        color: '#64748b',
    },
    footer: {
        position: 'absolute',
        bottom: 15,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 8,
        color: '#94a3b8',
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
            <Page size="A4" style={styles.page} wrap={true}>

                {/* HEADER - Top Dark Banner Section. Renders once intuitively at the beginning. */}
                <View style={styles.headerBg} wrap={false}>
                    <Image
                        src={profileImage}
                        style={styles.profileImage}
                    />
                    <View style={styles.headerText}>
                        <Text style={styles.name}>{`${t.hero.title} ${t.hero.subtitle}`}</Text>
                        <Text style={styles.title}>{t.hero.role.toUpperCase()}</Text>

                        <View style={styles.contactRow}>
                            <View style={styles.contactItem}>
                                <Text>📍 {t.about.location.city.split(',')[0]}, CDMX    </Text>
                            </View>
                            <View style={styles.contactItem}>
                                <Link src={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} style={{ color: '#cbd5e1', textDecoration: 'none' }}>☏ {CONTACT_INFO.phone}    </Link>
                            </View>
                            <View style={styles.contactItem}>
                                <Link src={`mailto:${CONTACT_INFO.email}`} style={{ color: '#cbd5e1', textDecoration: 'none' }}>✉ {CONTACT_INFO.email}    </Link>
                            </View>
                            <View style={styles.contactItem}>
                                <Link src={CONTACT_INFO.social.linkedin} style={{ color: '#cbd5e1', textDecoration: 'none' }}>🔗 in/erick-rodríguez-bores-isaías</Link>
                            </View>
                        </View>
                    </View>
                </View>

                {/* MAIN BODY - Will wrap gracefully to multiple pages */}
                <View style={styles.body} wrap={true}>

                    {/* Professional Profile */}
                    <View wrap={false}>
                        <Text style={styles.sectionTitle}>{isEs ? 'PERFIL PROFESIONAL' : 'PROFESSIONAL PROFILE'}</Text>
                        <Text style={styles.summary}>{t.about.description1}</Text>
                        <Text style={styles.summary}>{t.about.description2}</Text>
                    </View>

                    {/* Technical Skills - Pill Format */}
                    <View wrap={false}>
                        <Text style={styles.sectionTitle}>{isEs ? 'HABILIDADES TÉCNICAS' : 'TECHNICAL SKILLS'}</Text>
                        <View style={styles.skillsContainer}>
                            <Text style={styles.skillBadge}>.NET Core / C#</Text>
                            <Text style={styles.skillBadge}>SQL Server (T-SQL)</Text>
                            <Text style={styles.skillBadge}>React / Next.js</Text>
                            <Text style={styles.skillBadge}>TypeScript</Text>
                            <Text style={styles.skillBadge}>Tailwind CSS</Text>
                            <Text style={styles.skillBadge}>Python ({isEs ? 'Scripts' : 'Scripting'})</Text>
                            <Text style={styles.skillBadge}>{isEs ? 'Microservicios' : 'Microservices'}</Text>
                            <Text style={styles.skillBadge}>Docker / {isEs ? 'Contenedores' : 'Containers'}</Text>
                            <Text style={styles.skillBadge}>Git / CI/CD</Text>
                            <Text style={styles.skillBadge}>Entity Framework</Text>
                        </View>
                    </View>

                    {/* Professional Experience */}
                    <View>
                        <View wrap={false}>
                            <Text style={styles.sectionTitle}>{t.experience.title.toUpperCase()}</Text>
                            {t.experience.jobs.length > 0 && (
                                <View style={styles.experienceItem}>
                                    <View style={styles.jobHeader}>
                                        <View style={styles.jobRoleRow}>
                                            <Text style={styles.jobTitle}>{t.experience.jobs[0].role}</Text>
                                            <Text style={styles.company}>{t.experience.jobs[0].company}</Text>
                                        </View>
                                        <Text style={styles.period}>{t.experience.jobs[0].period}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.jobDescription}>{t.experience.jobs[0].description}</Text>
                                        {t.experience.jobs[0].functions.map((func, i) => (
                                            <View key={i} style={styles.bulletPoint}>
                                                <View style={styles.bullet} />
                                                <Text style={styles.bulletText}>{func}</Text>
                                            </View>
                                        ))}
                                        {t.experience.jobs[0].achievements && t.experience.jobs[0].achievements.length > 0 && (
                                            <View>
                                                <Text style={styles.achievementsTitle}>{t.experience.achievements}</Text>
                                                {t.experience.jobs[0].achievements.map((achievement, i) => (
                                                    <View key={`ach-${i}`} style={styles.bulletPoint}>
                                                        <View style={styles.bullet} />
                                                        <Text style={styles.bulletText}>{achievement}</Text>
                                                    </View>
                                                ))}
                                            </View>
                                        )}
                                    </View>
                                </View>
                            )}
                        </View>

                        {t.experience.jobs.slice(1).map((job, index) => (
                            <View key={index + 1} style={styles.experienceItem}>
                                <View style={styles.jobHeader}>
                                    <View style={styles.jobRoleRow}>
                                        <Text style={styles.jobTitle}>{job.role}</Text>
                                        <Text style={styles.company}>{job.company}</Text>
                                    </View>
                                    <Text style={styles.period}>{job.period}</Text>
                                </View>
                                <Text style={styles.jobDescription}>{job.description}</Text>

                                {job.functions.map((func, i) => (
                                    <View key={i} style={styles.bulletPoint}>
                                        <View style={styles.bullet} />
                                        <Text style={styles.bulletText}>{func}</Text>
                                    </View>
                                ))}

                                {job.achievements && job.achievements.length > 0 && (
                                    <View>
                                        <Text style={styles.achievementsTitle}>{t.experience.achievements}</Text>
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

                    {/* Featured Projects */}
                    <View>
                        <View wrap={false}>
                            <Text style={styles.sectionTitle}>{t.projects.title.toUpperCase()}</Text>
                            {PROJECTS_DATA.length > 0 && (
                                <View style={styles.projectItem}>
                                    <Text style={styles.projectTitle}>{t.projects.items[0].title}</Text>
                                    <Text style={styles.projectDesc}>{t.projects.items[0].description}</Text>
                                    <View style={styles.projectTechWrap}>
                                        {PROJECTS_DATA[0].tech.map((tag, tIndex) => (
                                            <Text key={tIndex} style={styles.projectTechBadge}>{tag}</Text>
                                        ))}
                                    </View>
                                </View>
                            )}
                        </View>

                        {PROJECTS_DATA.slice(1).map((project, index) => {
                            const trans = t.projects.items[index + 1];
                            return (
                                <View key={index + 1} style={styles.projectItem}>
                                    <Text style={styles.projectTitle}>{trans.title}</Text>
                                    <Text style={styles.projectDesc}>{trans.description}</Text>
                                    <View style={styles.projectTechWrap}>
                                        {project.tech.map((tag, tIndex) => (
                                            <Text key={tIndex} style={styles.projectTechBadge}>{tag}</Text>
                                        ))}
                                    </View>
                                </View>
                            );
                        })}
                    </View>

                    {/* Bottom Split (Education & Languages) */}
                    <View style={styles.bottomColumns} wrap={false}>
                        <View style={styles.bottomCol}>
                            <Text style={styles.sectionTitle}>{t.about.education.title.toUpperCase()}</Text>
                            <View style={styles.eduItem}>
                                <Text style={styles.eduDegree}>{t.about.education.degree1}</Text>
                                <Text style={styles.eduSchool}>{t.about.education.school1.split(' • ')[0]}</Text>
                                <Text style={styles.eduYear}>{t.about.education.school1.split(' • ')[1]}</Text>
                            </View>
                            <View style={styles.eduItem}>
                                <Text style={styles.eduDegree}>{t.about.education.degree2}</Text>
                                <Text style={styles.eduSchool}>{t.about.education.school2}</Text>
                                <Text style={styles.eduYear}>{t.about.education.status2.split(' • ')[1]}</Text>
                            </View>
                        </View>
                        <View style={styles.bottomCol}>
                            <Text style={styles.sectionTitle}>{isEs ? 'IDIOMAS' : 'LANGUAGES'}</Text>
                            {t.languages.items.map((lang, index) => (
                                <View key={index} style={styles.langRow}>
                                    <Text style={styles.langName}>{lang.name}</Text>
                                    <Text style={styles.langLevel}>{lang.level}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* FIXED FOOTER - Appears dynamically on every page bottom */}
                <Text style={styles.footer} fixed render={({ pageNumber, totalPages }) => (
                    `${t.hero.title} ${t.hero.subtitle}  •  ${CONTACT_INFO.email}  •  ${isEs ? 'Página' : 'Page'} ${pageNumber} / ${totalPages}`
                )} />
            </Page>
        </Document>
    );
};
