import { useMemo, type ReactNode } from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { buildCV } from '../../data/model';
import type { Lang } from '../../i18n/lang';
import { translations } from '../../i18n/translations';

// ATS format: built-in Helvetica, no images, no colors, single column, plain text.

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

/**
 * Points of following content a section heading needs on its page, or it moves to the
 * next one. react-pdf reads `minPresenceAhead` as a prop (inside a StyleSheet it is
 * ignored) and it only works on a direct child of the page, which headings are.
 */
const TITLE_KEEP = 80;

function SectionTitle({ children }: { children: ReactNode }) {
    return <Text style={styles.sectionTitle} minPresenceAhead={TITLE_KEEP}>{children}</Text>;
}

/** One bullet; it never splits across pages. */
function Bullet({ children }: { children: string }) {
    return (
        <View style={styles.bulletRow} wrap={false}>
            <Text style={styles.bulletChar}>-</Text>
            <Text style={styles.bulletText}>{children}</Text>
        </View>
    );
}

interface Props {
    lang: Lang;
}

export function CVDocumentATS({ lang }: Props) {
    const cv = useMemo(() => buildCV(lang), [lang]);
    const t = translations[lang].pdf;
    const { contact } = cv;

    return (
        <Document>
            <Page size="A4" style={styles.page} wrap={true}>

                {/* ===== HEADER ===== */}
                <Text style={styles.name}>{cv.name.full}</Text>
                <Text style={styles.role}>{cv.role}</Text>

                {/* Contact info on one line for ATS parsing */}
                <View style={styles.contactLine}>
                    <Text style={styles.contactText}>{contact.location}  |  </Text>
                    <Link src={contact.phoneHref} style={styles.contactLink}>
                        {contact.phone}
                    </Link>
                    <Text style={styles.contactText}>  |  </Text>
                    <Link src={`mailto:${contact.email}`} style={styles.contactLink}>
                        {contact.email}
                    </Link>
                    <Text style={styles.contactText}>  |  </Text>
                    <Link src={contact.linkedin.url} style={styles.contactLink}>
                        {contact.linkedin.display}
                    </Link>
                    <Text style={styles.contactText}>  |  </Text>
                    <Link src={contact.github.url} style={styles.contactLink}>
                        {contact.github.display}
                    </Link>
                    <Text style={styles.contactText}>  |  </Text>
                    <Link src={contact.website.url} style={styles.contactLink}>
                        {contact.website.display}
                    </Link>
                </View>

                <View style={styles.divider} />

                {/* ===== PROFESSIONAL SUMMARY ===== */}
                <SectionTitle>{t.atsSummary}</SectionTitle>
                <Text style={styles.bodyText}>{cv.summary}</Text>
                <Text style={styles.bodyText}>{cv.current}</Text>

                {/* ===== TECHNICAL SKILLS ===== */}
                <SectionTitle>{t.atsSkills}</SectionTitle>
                <Text style={styles.skillsText}>{cv.skills.ats.join('  |  ')}</Text>

                {/* ===== KEY COMPETENCIES ===== */}
                <SectionTitle>{t.atsCompetencies}</SectionTitle>
                <Text style={styles.skillsText}>
                    {cv.competencies.map((c) => c.title).join('  |  ')}
                </Text>

                {/* ===== PROFESSIONAL EXPERIENCE ===== */}
                <SectionTitle>{t.experience}</SectionTitle>

                {/* A job may continue on the next page (an unbreakable job left a quarter of
                    each page blank). Its header and the achievements label are kept together
                    with their first bullet, so neither can end a page alone. */}
                {cv.experience.map((job) => {
                    const [firstFunction, ...functions] = job.functions;
                    const [firstAchievement, ...achievements] = job.achievements;
                    return (
                        <View key={job.id} style={styles.experienceItem}>
                            <View wrap={false}>
                                <View style={styles.jobHeader}>
                                    <Text style={styles.jobTitle}>{job.role}</Text>
                                    <Text style={styles.period}>{job.period}</Text>
                                </View>
                                <Text style={styles.company}>{job.company}</Text>
                                <Text style={styles.jobDescription}>{`${job.summary} Stack: ${job.stack.join(', ')}.`}</Text>
                                {firstFunction && <Bullet>{firstFunction}</Bullet>}
                            </View>
                            {functions.map((func) => <Bullet key={func}>{func}</Bullet>)}

                            {firstAchievement && (
                                <View wrap={false}>
                                    <Text style={styles.achievementsLabel}>{t.atsAchievements}</Text>
                                    <Bullet>{firstAchievement}</Bullet>
                                </View>
                            )}
                            {achievements.map((achievement) => <Bullet key={achievement}>{achievement}</Bullet>)}
                        </View>
                    );
                })}

                {/* ===== EDUCATION ===== */}
                <SectionTitle>{t.education}</SectionTitle>
                {cv.education.map((e) => (
                    <View key={e.degree} style={styles.eduItem}>
                        <Text style={styles.eduDegree}>{e.degree}</Text>
                        <Text style={styles.eduSchool}>{e.school}  |  {e.period}</Text>
                    </View>
                ))}

                {/* ===== LANGUAGES ===== */}
                <SectionTitle>{t.languages}</SectionTitle>
                {cv.languages.map((l) => (
                    <View key={l.name} style={styles.langItem}>
                        <Text style={styles.langText}>
                            {l.name}: {l.level}  —  {l.details.join(', ')}
                        </Text>
                    </View>
                ))}

                {/* ===== FEATURED PROJECTS ===== */}
                <SectionTitle>{t.atsProjects}</SectionTitle>
                {cv.projects.map((project) => (
                    <View key={project.id} style={styles.projectItem} wrap={false}>
                        <Text style={styles.projectTitle}>{project.name}</Text>
                        <Text style={styles.projectDesc}>{project.description}</Text>
                        <Text style={styles.projectTech}>{t.atsTechnologies} {project.tech.join(', ')}</Text>
                    </View>
                ))}

                {/* ===== FOOTER ===== */}
                <Text
                    style={styles.footer}
                    fixed
                    render={({ pageNumber, totalPages }) =>
                        `${cv.name.full}  •  ${contact.email}  •  ${t.page} ${pageNumber} / ${totalPages}  •  ${t.atsFormat}`
                    }
                />
            </Page>
        </Document>
    );
}
