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

const SIDEBAR_W = 179;
const RED = '#b61722';
const DARK = '#09090b';

const CORE_SKILLS = [
    'C# / .NET Core 6/8/10',
    'React 19 / Next.js 16',
    'SQL Server / T-SQL',
    'Node.js / NestJS 11',
    'TypeScript 5',
    'Entity Framework',
    'OAuth2 / JWT',
    'AES / RSA Encryption',
    'Docker',
    'SOLID / Clean Arch',
    'Git / GitHub',
    'PostgreSQL 15/16',
];

const s = StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    sidebar: {
        width: SIDEBAR_W,
        backgroundColor: DARK,
        paddingHorizontal: 14,
        paddingBottom: 20,
        flexShrink: 0,
    },
    photo: {
        width: SIDEBAR_W,
        height: 170,
        objectFit: 'cover',
        marginLeft: -14,
        marginBottom: 14,
    },
    name: {
        fontSize: 13,
        fontWeight: 700,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        lineHeight: 1.2,
        marginBottom: 3,
    },
    jobTitle: {
        fontSize: 8,
        color: RED,
        fontWeight: 500,
        letterSpacing: 0.3,
        marginBottom: 10,
    },
    sidebarDivider: {
        borderBottomWidth: 1,
        borderBottomColor: '#27272a',
        marginBottom: 7,
    },
    sidebarSectionLabel: {
        fontSize: 7,
        fontWeight: 700,
        color: RED,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 5,
    },
    contactItem: {
        fontSize: 7.5,
        color: '#a1a1aa',
        marginBottom: 3,
        lineHeight: 1.3,
    },
    contactLink: {
        fontSize: 7.5,
        color: '#a1a1aa',
        textDecoration: 'none',
        marginBottom: 3,
        lineHeight: 1.3,
    },
    skillPill: {
        fontSize: 7,
        color: '#d4d4d8',
        backgroundColor: '#18181b',
        borderRadius: 2,
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginBottom: 3,
        fontWeight: 400,
    },
    eduDegree: {
        fontSize: 7.5,
        fontWeight: 700,
        color: '#FFFFFF',
        marginBottom: 1,
    },
    eduSchool: {
        fontSize: 7,
        color: '#71717a',
        marginBottom: 1,
    },
    eduYear: {
        fontSize: 7,
        color: '#52525b',
        marginBottom: 5,
    },
    langName: {
        fontSize: 7.5,
        fontWeight: 700,
        color: '#FFFFFF',
    },
    langLevel: {
        fontSize: 7,
        color: '#71717a',
        marginBottom: 4,
    },
    body: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
    },
    bodySectionTitle: {
        fontSize: 9.5,
        fontWeight: 700,
        color: DARK,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        borderBottomWidth: 1.5,
        borderBottomColor: RED,
        paddingBottom: 3,
        marginBottom: 6,
        marginTop: 10,
    },
    summary: {
        fontSize: 8.5,
        color: '#374151',
        lineHeight: 1.4,
        textAlign: 'justify',
        marginBottom: 3,
    },
    jobRole: {
        fontSize: 10,
        fontWeight: 700,
        color: DARK,
    },
    jobCompany: {
        fontSize: 9,
        color: RED,
        fontWeight: 500,
        marginTop: 1,
    },
    jobPeriod: {
        fontSize: 8,
        color: '#6b7280',
        fontWeight: 500,
    },
    bullet: {
        flexDirection: 'row',
        marginBottom: 2.5,
        paddingLeft: 2,
    },
    bulletDot: {
        width: 3,
        height: 3,
        backgroundColor: '#9ca3af',
        borderRadius: 1.5,
        marginRight: 6,
        marginTop: 3.5,
    },
    bulletText: {
        fontSize: 8,
        color: '#374151',
        flex: 1,
        lineHeight: 1.35,
    },
    jobItem: {
        marginBottom: 7,
    },
    jobHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    jobHeaderLeft: { flex: 1 },
    projectCard: {
        marginBottom: 7,
        paddingLeft: 8,
        borderLeftWidth: 2,
        borderLeftColor: RED,
    },
    projectTitle: {
        fontSize: 9,
        fontWeight: 700,
        color: DARK,
        marginBottom: 2,
    },
    projectDesc: {
        fontSize: 8,
        color: '#4b5563',
        lineHeight: 1.35,
        marginBottom: 3,
    },
    techRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 3,
    },
    techBadge: {
        fontSize: 7,
        backgroundColor: '#fff1f2',
        color: RED,
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 2,
        fontWeight: 500,
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        left: SIDEBAR_W + 10,
        right: 10,
        textAlign: 'center',
        fontSize: 7.5,
        color: '#9ca3af',
    },
});

export const CVDocumentLeaf_EN: React.FC = () => {
    const t = translations.en;
    const profileImage = `${window.location.origin}/assets/images/profile.jpg`;

    return (
        <Document>
            <Page size="A4" style={s.page} wrap={false}>

                {/* ── SIDEBAR ── */}
                <View style={s.sidebar}>
                    <Image src={profileImage} style={s.photo} />

                    <Text style={s.name}>{t.hero.title}{'\n'}{t.hero.subtitle}</Text>
                    <Text style={s.jobTitle}>{t.hero.role}</Text>

                    <View style={s.sidebarDivider} />
                    <Text style={s.sidebarSectionLabel}>Contact</Text>
                    <Text style={s.contactItem}>{CONTACT_INFO.location}</Text>
                    <Link src={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} style={s.contactLink}>{CONTACT_INFO.phone}</Link>
                    <Link src={`mailto:${CONTACT_INFO.email}`} style={s.contactLink}>{CONTACT_INFO.email}</Link>
                    <Link src={CONTACT_INFO.social.linkedin} style={s.contactLink}>LinkedIn</Link>
                    <Link src={CONTACT_INFO.social.github} style={s.contactLink}>GitHub</Link>

                    <View style={[s.sidebarDivider, { marginTop: 6 }]} />
                    <Text style={s.sidebarSectionLabel}>Core Skills</Text>
                    {CORE_SKILLS.map((skill, i) => (
                        <Text key={i} style={s.skillPill}>{skill}</Text>
                    ))}

                    <View style={[s.sidebarDivider, { marginTop: 6 }]} />
                    <Text style={s.sidebarSectionLabel}>Education</Text>
                    <Text style={s.eduDegree}>{t.about.education.degree1}</Text>
                    <Text style={s.eduSchool}>{t.about.education.school1.split(' • ')[0]}</Text>
                    <Text style={s.eduYear}>{t.about.education.school1.split(' • ')[1]}</Text>
                    <Text style={s.eduDegree}>{t.about.education.degree2}</Text>
                    <Text style={s.eduSchool}>UNIR</Text>
                    <Text style={s.eduYear}>2025 — In progress</Text>

                    <View style={[s.sidebarDivider, { marginTop: 6 }]} />
                    <Text style={s.sidebarSectionLabel}>Languages</Text>
                    {t.languages.items.map((lang, i) => (
                        <View key={i}>
                            <Text style={s.langName}>{lang.name}</Text>
                            <Text style={s.langLevel}>{lang.level}</Text>
                        </View>
                    ))}
                </View>

                {/* ── BODY ── */}
                <View style={s.body}>

                    <View>
                        <Text style={[s.bodySectionTitle, { marginTop: 0 }]}>Professional Profile</Text>
                        <Text style={s.summary}>{t.about.description1}</Text>
                    </View>

                    <Text style={s.bodySectionTitle}>Professional Experience</Text>

                    {t.experience.jobs.map((job, idx) => (
                        <View key={idx} style={s.jobItem}>
                            <View style={s.jobHeaderRow}>
                                <View style={s.jobHeaderLeft}>
                                    <Text style={s.jobRole}>{job.role}</Text>
                                    <Text style={s.jobCompany}>{job.company}</Text>
                                </View>
                                <Text style={s.jobPeriod}>{job.period}</Text>
                            </View>

                            {job.functions.slice(0, 2).map((fn, i) => (
                                <View key={i} style={s.bullet}>
                                    <View style={s.bulletDot} />
                                    <Text style={s.bulletText}>{fn}</Text>
                                </View>
                            ))}

                            {job.achievements && job.achievements.length > 0 && (
                                <View style={s.bullet}>
                                    <View style={[s.bulletDot, { backgroundColor: RED }]} />
                                    <Text style={s.bulletText}>{job.achievements[0]}</Text>
                                </View>
                            )}
                        </View>
                    ))}

                    <Text style={s.bodySectionTitle}>Featured Project</Text>

                    <View style={s.projectCard}>
                        <Text style={s.projectTitle}>{t.projects.items[0].title}</Text>
                        <Text style={s.projectDesc}>{t.projects.items[0].description}</Text>
                        {PROJECTS_DATA[0] && (
                            <View style={s.techRow}>
                                {PROJECTS_DATA[0].tech.slice(0, 6).map((tag, ti) => (
                                    <Text key={ti} style={s.techBadge}>{tag}</Text>
                                ))}
                            </View>
                        )}
                    </View>
                </View>

                {/* ── FOOTER ── */}
                <Text style={s.footer} fixed render={({ pageNumber, totalPages }) =>
                    `${t.hero.title} ${t.hero.subtitle}  •  ${CONTACT_INFO.email}  •  Page ${pageNumber} / ${totalPages}`
                } />
            </Page>
        </Document>
    );
};
