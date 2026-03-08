/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { translations } from '../../i18n/translations';
import { CONTACT_INFO } from '../../data/contact';
import { PROJECTS_DATA } from '../../data/projects';
import { PDF_SKILLS } from '../../data/skills';

// ATS Format: No custom fonts, no images, no colors, single column, plain text
// Uses built-in Helvetica for maximum ATS compatibility

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
        paddingTop: 36,
        paddingBottom: 50,
        paddingHorizontal: 48,
    },
    // Header - plain text, no background colors
    name: {
        fontSize: 18,
        fontFamily: 'Helvetica-Bold',
        color: '#000000',
        textTransform: 'uppercase',
        marginBottom: 2,
    },
    role: {
        fontSize: 12,
        fontFamily: 'Helvetica',
        color: '#000000',
        marginBottom: 6,
    },
    contactLine: {
        fontSize: 9,
        fontFamily: 'Helvetica',
        color: '#000000',
        marginBottom: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contactText: {
        fontSize: 9,
        color: '#000000',
    },
    contactLink: {
        fontSize: 9,
        color: '#000000',
        textDecoration: 'none',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        marginTop: 8,
        marginBottom: 12,
    },
    thinDivider: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#666666',
        marginTop: 6,
        marginBottom: 8,
    },
    // Section headers - ALL CAPS, bold, underlined via border
    sectionTitle: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        color: '#000000',
        textTransform: 'uppercase',
        marginBottom: 6,
        marginTop: 12,
        letterSpacing: 0.5,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        paddingBottom: 2,
        minPresenceAhead: 80,
    },
    // Body text
    bodyText: {
        fontSize: 9.5,
        fontFamily: 'Helvetica',
        color: '#000000',
        lineHeight: 1.5,
        marginBottom: 4,
    },
    // Skills - plain comma-separated or simple list
    skillsText: {
        fontSize: 9.5,
        fontFamily: 'Helvetica',
        color: '#000000',
        lineHeight: 1.6,
        marginBottom: 4,
    },
    // Experience item
    experienceItem: {
        marginBottom: 10,
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 1,
    },
    jobTitle: {
        fontSize: 10.5,
        fontFamily: 'Helvetica-Bold',
        color: '#000000',
    },
    company: {
        fontSize: 10,
        fontFamily: 'Helvetica',
        color: '#000000',
        marginBottom: 2,
    },
    period: {
        fontSize: 9.5,
        fontFamily: 'Helvetica',
        color: '#000000',
    },
    jobDescription: {
        fontSize: 9.5,
        fontFamily: 'Helvetica-Oblique',
        color: '#000000',
        marginBottom: 4,
        lineHeight: 1.4,
    },
    bulletRow: {
        flexDirection: 'row',
        marginBottom: 2,
        paddingLeft: 8,
    },
    bulletChar: {
        fontSize: 9.5,
        fontFamily: 'Helvetica',
        color: '#000000',
        width: 12,
    },
    bulletText: {
        fontSize: 9.5,
        fontFamily: 'Helvetica',
        color: '#000000',
        flex: 1,
        lineHeight: 1.4,
    },
    achievementsLabel: {
        fontSize: 9.5,
        fontFamily: 'Helvetica-Bold',
        color: '#000000',
        marginTop: 4,
        marginBottom: 2,
    },
    // Education
    eduItem: {
        marginBottom: 6,
    },
    eduDegree: {
        fontSize: 10,
        fontFamily: 'Helvetica-Bold',
        color: '#000000',
    },
    eduSchool: {
        fontSize: 9.5,
        fontFamily: 'Helvetica',
        color: '#000000',
    },
    // Languages
    langItem: {
        marginBottom: 3,
    },
    langText: {
        fontSize: 9.5,
        fontFamily: 'Helvetica',
        color: '#000000',
    },
    // Projects
    projectItem: {
        marginBottom: 8,
    },
    projectTitle: {
        fontSize: 10.5,
        fontFamily: 'Helvetica-Bold',
        color: '#000000',
        marginBottom: 2,
    },
    projectDesc: {
        fontSize: 9.5,
        fontFamily: 'Helvetica',
        color: '#000000',
        lineHeight: 1.4,
        marginBottom: 2,
    },
    projectTech: {
        fontSize: 9,
        fontFamily: 'Helvetica',
        color: '#000000',
    },
    footer: {
        position: 'absolute',
        bottom: 18,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 8,
        fontFamily: 'Helvetica',
        color: '#555555',
    },
});

interface CVDocumentATSBaseProps {
    language: 'es' | 'en';
}

export const CVDocumentATSBase: React.FC<CVDocumentATSBaseProps> = ({ language }) => {
    const t = translations[language];
    const isEs = language === 'es';

    const linkedInUrl = CONTACT_INFO.social.linkedin;
    const githubUrl = CONTACT_INFO.social.github;

    return (
        <Document>
            <Page size="A4" style={styles.page} wrap={true}>

                {/* ===== HEADER ===== */}
                <Text style={styles.name}>{`${t.hero.title} ${t.hero.subtitle}`}</Text>
                <Text style={styles.role}>{t.hero.role}</Text>

                {/* Contact info on one line for ATS parsing */}
                <View style={styles.contactLine}>
                    <Text style={styles.contactText}>{CONTACT_INFO.location}  |  </Text>
                    <Link src={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} style={styles.contactLink}>
                        {CONTACT_INFO.phone}
                    </Link>
                    <Text style={styles.contactText}>  |  </Text>
                    <Link src={`mailto:${CONTACT_INFO.email}`} style={styles.contactLink}>
                        {CONTACT_INFO.email}
                    </Link>
                    <Text style={styles.contactText}>  |  </Text>
                    <Link src={linkedInUrl} style={styles.contactLink}>
                        {linkedInUrl.replace('https://', '')}
                    </Link>
                    <Text style={styles.contactText}>  |  </Text>
                    <Link src={githubUrl} style={styles.contactLink}>
                        {githubUrl.replace('https://', '')}
                    </Link>
                </View>

                <View style={styles.divider} />

                {/* ===== PROFESSIONAL SUMMARY ===== */}
                <Text style={styles.sectionTitle}>
                    {isEs ? 'PERFIL PROFESIONAL' : 'PROFESSIONAL SUMMARY'}
                </Text>
                <Text style={styles.bodyText}>{t.about.description1}</Text>
                <Text style={styles.bodyText}>{t.about.description2}</Text>

                {/* ===== TECHNICAL SKILLS ===== */}
                <Text style={styles.sectionTitle}>
                    {isEs ? 'HABILIDADES TECNICAS' : 'TECHNICAL SKILLS'}
                </Text>
                <Text style={styles.skillsText}>
                    {PDF_SKILLS[language].join('  |  ')}
                </Text>

                {/* ===== KEY COMPETENCIES ===== */}
                <Text style={styles.sectionTitle}>
                    {isEs ? 'COMPETENCIAS CLAVE' : 'KEY COMPETENCIES'}
                </Text>
                <Text style={styles.skillsText}>
                    {t.skills.competencies.items.map(c => c.title).join('  |  ')}
                </Text>

                {/* ===== PROFESSIONAL EXPERIENCE ===== */}
                <Text style={styles.sectionTitle}>
                    {isEs ? 'EXPERIENCIA PROFESIONAL' : 'PROFESSIONAL EXPERIENCE'}
                </Text>

                {t.experience.jobs.map((job, index) => (
                    <View key={index} style={styles.experienceItem} wrap={false}>
                        <View style={styles.jobHeader}>
                            <Text style={styles.jobTitle}>{job.role}</Text>
                            <Text style={styles.period}>{job.period}</Text>
                        </View>
                        <Text style={styles.company}>{job.company}</Text>
                        <Text style={styles.jobDescription}>{job.description}</Text>

                        {job.functions.map((func, i) => (
                            <View key={i} style={styles.bulletRow}>
                                <Text style={styles.bulletChar}>-</Text>
                                <Text style={styles.bulletText}>{func}</Text>
                            </View>
                        ))}

                        {job.achievements && job.achievements.length > 0 && (
                            <View>
                                <Text style={styles.achievementsLabel}>
                                    {isEs ? 'Logros Destacados:' : 'Key Achievements:'}
                                </Text>
                                {job.achievements.map((achievement, i) => (
                                    <View key={`ach-${i}`} style={styles.bulletRow}>
                                        <Text style={styles.bulletChar}>-</Text>
                                        <Text style={styles.bulletText}>{achievement}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ))}

                {/* ===== EDUCATION ===== */}
                <Text style={styles.sectionTitle}>
                    {isEs ? 'EDUCACION' : 'EDUCATION'}
                </Text>

                <View style={styles.eduItem}>
                    <Text style={styles.eduDegree}>{t.about.education.degree1}</Text>
                    <Text style={styles.eduSchool}>{t.about.education.school1}</Text>
                </View>
                <View style={styles.eduItem}>
                    <Text style={styles.eduDegree}>{t.about.education.degree2}</Text>
                    <Text style={styles.eduSchool}>
                        {t.about.education.school2}  |  {t.about.education.status2}
                    </Text>
                </View>

                {/* ===== LANGUAGES ===== */}
                <Text style={styles.sectionTitle}>
                    {isEs ? 'IDIOMAS' : 'LANGUAGES'}
                </Text>
                {t.languages.items.map((lang, index) => (
                    <View key={index} style={styles.langItem}>
                        <Text style={styles.langText}>
                            {lang.name}: {lang.level}  —  {lang.details.join(', ')}
                        </Text>
                    </View>
                ))}

                {/* ===== FEATURED PROJECTS ===== */}
                <Text style={styles.sectionTitle}>
                    {isEs ? 'PROYECTOS DESTACADOS' : 'FEATURED PROJECTS'}
                </Text>
                {t.projects.items.map((project, index) => (
                    <View key={index} style={styles.projectItem} wrap={false}>
                        <Text style={styles.projectTitle}>{project.title}</Text>
                        <Text style={styles.projectDesc}>{project.description}</Text>
                        {PROJECTS_DATA[index] && (
                            <Text style={styles.projectTech}>
                                {isEs ? 'Tecnologías: ' : 'Technologies: '}{PROJECTS_DATA[index].tech.join(', ')}
                            </Text>
                        )}
                    </View>
                ))}

                {/* ===== FOOTER ===== */}
                <Text
                    style={styles.footer}
                    fixed
                    render={({ pageNumber, totalPages }) =>
                        `${t.hero.title} ${t.hero.subtitle}  •  ${CONTACT_INFO.email}  •  ${isEs ? 'Pagina' : 'Page'} ${pageNumber} / ${totalPages}  •  ATS Format`
                    }
                />
            </Page>
        </Document>
    );
};
