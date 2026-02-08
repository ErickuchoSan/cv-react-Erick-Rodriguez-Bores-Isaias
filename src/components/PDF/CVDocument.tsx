import { Page, Text, View, Document, StyleSheet, Image, Font, Link, Svg, Path } from '@react-pdf/renderer';
import { EXPERIENCE_DATA } from '../Sections/Experience';
import { PROJECTS } from '../Sections/Projects';

// Register Roboto font
Font.register({
    family: 'Roboto',
    fonts: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
    ],
});

// Color palette
const COLORS = {
    primary: '#2563eb',
    primaryLight: '#3b82f6',
    accent: '#06b6d4',
    dark: '#0f172a',
    darkMedium: '#1e293b',
    medium: '#334155',
    light: '#64748b',
    lighter: '#94a3b8',
    white: '#ffffff',
    bgLight: '#f8fafc',
    bgAccent: '#dbeafe',
};

// Skills with levels
const SKILLS_DATA = [
    { name: '.NET / C#', level: 95 },
    { name: 'React / Next.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'SQL Server', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'NestJS / Node.js', level: 70 },
    { name: 'Docker / DevOps', level: 72 },
    { name: 'AWS / Azure', level: 68 },
];

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        fontFamily: 'Roboto',
    },
    sidebar: {
        width: '35%',
        backgroundColor: COLORS.dark,
        height: '100%',
    },
    sidebarGradient: {
        height: 10,
        backgroundColor: COLORS.primary,
    },
    sidebarContent: {
        padding: 16,
        paddingTop: 18,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 18,
    },
    profileImageWrapper: {
        padding: 3,
        borderRadius: 55,
        backgroundColor: COLORS.primary,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    sidebarSection: {
        marginBottom: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.darkMedium,
        paddingBottom: 5,
    },
    sectionIcon: {
        width: 12,
        height: 12,
        marginRight: 6,
    },
    sidebarTitle: {
        fontSize: 9,
        fontWeight: 700,
        color: COLORS.primary,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
        paddingLeft: 2,
    },
    contactIcon: {
        width: 10,
        marginRight: 8,
    },
    contactText: {
        fontSize: 7,
        color: COLORS.lighter,
    },
    contactLink: {
        fontSize: 7,
        color: COLORS.accent,
        textDecoration: 'none',
    },
    skillItem: {
        marginBottom: 8,
    },
    skillHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    skillName: {
        fontSize: 7,
        color: COLORS.lighter,
    },
    skillPercent: {
        fontSize: 6,
        color: COLORS.primary,
        fontWeight: 700,
    },
    progressBarBg: {
        height: 3,
        backgroundColor: COLORS.darkMedium,
        borderRadius: 2,
    },
    progressBarFill: {
        height: 3,
        backgroundColor: COLORS.primary,
        borderRadius: 2,
    },
    educationItem: {
        marginBottom: 10,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: COLORS.primary,
    },
    degree: {
        fontSize: 8,
        fontWeight: 700,
        color: COLORS.white,
    },
    school: {
        fontSize: 7,
        color: COLORS.lighter,
        marginTop: 1,
    },
    eduDate: {
        fontSize: 6,
        color: COLORS.accent,
        marginTop: 2,
    },
    languageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
        paddingVertical: 3,
        paddingHorizontal: 6,
        backgroundColor: COLORS.darkMedium,
        borderRadius: 3,
    },
    languageName: {
        fontSize: 7,
        color: COLORS.lighter,
    },
    languageLevel: {
        fontSize: 6,
        color: COLORS.accent,
        fontWeight: 700,
    },
    competencyChip: {
        fontSize: 6,
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 6,
        marginRight: 3,
        marginBottom: 3,
    },
    competencyRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    main: {
        width: '65%',
    },
    mainGradient: {
        height: 10,
        backgroundColor: COLORS.bgAccent,
    },
    mainContent: {
        padding: 20,
        paddingTop: 22,
    },
    header: {
        marginBottom: 14,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.primary,
    },
    name: {
        fontSize: 20,
        fontWeight: 700,
        color: COLORS.dark,
        letterSpacing: 0.5,
        marginBottom: 3,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 4,
    },
    jobTitle: {
        fontSize: 10,
        color: COLORS.primary,
        fontWeight: 700,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    expBadge: {
        marginLeft: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
    },
    expBadgeText: {
        fontSize: 6,
        color: COLORS.white,
        fontWeight: 700,
    },
    summary: {
        fontSize: 8,
        color: COLORS.medium,
        lineHeight: 1.5,
        marginBottom: 14,
        paddingLeft: 8,
        borderLeftWidth: 2,
        borderLeftColor: COLORS.bgAccent,
    },
    mainSection: {
        marginBottom: 12,
    },
    mainSectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: COLORS.bgLight,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 3,
        borderLeftWidth: 3,
        borderLeftColor: COLORS.primary,
    },
    mainSectionIcon: {
        width: 12,
        height: 12,
        marginRight: 6,
    },
    mainSectionTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: COLORS.dark,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    experienceItem: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    timelineDot: {
        width: 16,
        alignItems: 'center',
        marginRight: 8,
    },
    dotOuter: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.bgAccent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dotInner: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: COLORS.primary,
    },
    timelineLine: {
        width: 2,
        flex: 1,
        backgroundColor: COLORS.bgAccent,
        marginLeft: 3,
        marginTop: 2,
    },
    expContent: {
        flex: 1,
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 3,
    },
    expRole: {
        fontSize: 9,
        fontWeight: 700,
        color: COLORS.dark,
    },
    expCompany: {
        fontSize: 8,
        color: COLORS.primary,
        fontWeight: 500,
    },
    expDateBadge: {
        fontSize: 6,
        color: COLORS.light,
        backgroundColor: COLORS.bgLight,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 6,
    },
    expDesc: {
        fontSize: 7,
        color: COLORS.medium,
        marginBottom: 3,
        lineHeight: 1.3,
    },
    bulletPoint: {
        fontSize: 6,
        color: COLORS.medium,
        marginLeft: 6,
        marginBottom: 1,
        lineHeight: 1.2,
    },
    projectItem: {
        marginBottom: 10,
        padding: 8,
        backgroundColor: COLORS.bgLight,
        borderRadius: 4,
        borderLeftWidth: 2,
        borderLeftColor: COLORS.primary,
    },
    projectTitle: {
        fontSize: 9,
        fontWeight: 700,
        color: COLORS.dark,
        marginBottom: 3,
    },
    techChipsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 3,
    },
    techChip: {
        fontSize: 5,
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 6,
        marginRight: 3,
        marginBottom: 2,
    },
    projectDesc: {
        fontSize: 7,
        color: COLORS.medium,
        lineHeight: 1.3,
    },
});

// Icon components
const EmailIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.accent} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </Svg>
);

const PhoneIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.accent} d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </Svg>
);

const LocationIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.accent} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </Svg>
);

const LinkedInIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.accent} d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </Svg>
);

const GitHubIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.accent} d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </Svg>
);

const ContactSectionIcon = () => (
    <Svg style={styles.sectionIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </Svg>
);

const EducationSectionIcon = () => (
    <Svg style={styles.sectionIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </Svg>
);

const SkillsSectionIcon = () => (
    <Svg style={styles.sectionIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </Svg>
);

const BriefcaseIcon = () => (
    <Svg style={styles.mainSectionIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </Svg>
);

const ProjectIcon = () => (
    <Svg style={styles.mainSectionIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </Svg>
);

// Progress bar component
const ProgressBar = ({ level }: { level: number }) => (
    <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${level}%` }]} />
    </View>
);

// Timeline dot component
const TimelineDot = ({ isLast }: { isLast: boolean }) => (
    <View style={styles.timelineDot}>
        <View style={styles.dotOuter}>
            <View style={styles.dotInner} />
        </View>
        {!isLast && <View style={styles.timelineLine} />}
    </View>
);

export const CVDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* Sidebar */}
            <View style={styles.sidebar}>
                <View style={styles.sidebarGradient} />
                <View style={styles.sidebarContent}>

                    <View style={styles.profileContainer}>
                        <View style={styles.profileImageWrapper}>
                            <Image
                                style={styles.profileImage}
                                src="/assets/images/profile.jpg"
                            />
                        </View>
                    </View>

                    <View style={styles.sidebarSection}>
                        <View style={styles.sectionHeader}>
                            <ContactSectionIcon />
                            <Text style={styles.sidebarTitle}>Contacto</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <EmailIcon />
                            <Link src="mailto:erickisaiasbores@gmail.com" style={styles.contactLink}>
                                erickisaiasbores@gmail.com
                            </Link>
                        </View>
                        <View style={styles.contactRow}>
                            <PhoneIcon />
                            <Text style={styles.contactText}>55 7110 4581</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <LocationIcon />
                            <Text style={styles.contactText}>Cuajimalpa de Morelos, CDMX, México</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <LinkedInIcon />
                            <Link src="https://linkedin.com/in/erickrodriguezbores" style={styles.contactLink}>
                                /in/erickrodriguezbores
                            </Link>
                        </View>
                        <View style={styles.contactRow}>
                            <GitHubIcon />
                            <Link src="https://github.com/erickrodriguez" style={styles.contactLink}>
                                /erickrodriguez
                            </Link>
                        </View>
                    </View>

                    <View style={styles.sidebarSection}>
                        <View style={styles.sectionHeader}>
                            <EducationSectionIcon />
                            <Text style={styles.sidebarTitle}>Educación</Text>
                        </View>
                        <View style={styles.educationItem}>
                            <Text style={styles.degree}>Ing. Sistemas Computacionales</Text>
                            <Text style={styles.school}>UTEL Universidad</Text>
                            <Text style={styles.eduDate}>2019 - 2023</Text>
                        </View>
                        <View style={styles.educationItem}>
                            <Text style={styles.degree}>Maestría en Inteligencia Artificial</Text>
                            <Text style={styles.school}>UNIR (Universidad Internacional de La Rioja)</Text>
                            <Text style={styles.eduDate}>En curso • 2025 - Actual</Text>
                        </View>
                    </View>

                    <View style={styles.sidebarSection}>
                        <View style={styles.sectionHeader}>
                            <SkillsSectionIcon />
                            <Text style={styles.sidebarTitle}>Habilidades</Text>
                        </View>
                        {SKILLS_DATA.map((skill, i) => (
                            <View key={i} style={styles.skillItem}>
                                <View style={styles.skillHeader}>
                                    <Text style={styles.skillName}>{skill.name}</Text>
                                    <Text style={styles.skillPercent}>{skill.level}%</Text>
                                </View>
                                <ProgressBar level={skill.level} />
                            </View>
                        ))}
                    </View>

                    <View style={styles.sidebarSection}>
                        <Text style={[styles.sidebarTitle, { marginBottom: 8 }]}>Idiomas</Text>
                        <View style={styles.languageRow}>
                            <Text style={styles.languageName}>Español</Text>
                            <Text style={styles.languageLevel}>Nativo</Text>
                        </View>
                        <View style={styles.languageRow}>
                            <Text style={styles.languageName}>Inglés</Text>
                            <Text style={styles.languageLevel}>A2-B1 Intermedio</Text>
                        </View>
                    </View>

                    <View style={styles.sidebarSection}>
                        <Text style={[styles.sidebarTitle, { marginBottom: 8 }]}>Competencias</Text>
                        <View style={styles.competencyRow}>
                            {[
                                'Aprendizaje Autodidacta',
                                'Resolución de Problemas',
                                'Resiliencia',
                                'Desarrollo con IA',
                                'Optimización SQL',
                                'Automatización',
                            ].map((comp, i) => (
                                <Text key={i} style={styles.competencyChip}>{comp}</Text>
                            ))}
                        </View>
                    </View>
                </View>
            </View>

            {/* Main Content */}
            <View style={styles.main}>
                <View style={styles.mainGradient} />
                <View style={styles.mainContent}>

                    <View style={styles.header}>
                        <Text style={styles.name}>Erick Rodríguez Bores Isaías</Text>
                        <View style={styles.titleRow}>
                            <Text style={styles.jobTitle}>Desarrollador Full Stack Senior | Arquitecto de Soluciones</Text>
                            <View style={styles.expBadge}>
                                <Text style={styles.expBadgeText}>+5 años</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.summary}>
                        Desarrollador Full Stack Senior con +5 años de experiencia diseñando arquitecturas empresariales escalables.
                        He logrado reducir tiempos de consulta en un 40%, automatizar procesos críticos y migrar sistemas legacy a tecnologías
                        modernas con .NET/C#, React y SQL Server. Me distingo por mi capacidad autodidacta, pensamiento orientado a resultados
                        y uso estratégico de herramientas de IA para maximizar productividad.
                    </Text>

                    <View style={styles.mainSection}>
                        <View style={styles.mainSectionHeader}>
                            <BriefcaseIcon />
                            <Text style={styles.mainSectionTitle}>Experiencia Profesional</Text>
                        </View>
                        {EXPERIENCE_DATA.map((exp, index) => (
                            <View key={index} style={styles.experienceItem}>
                                <TimelineDot isLast={index === EXPERIENCE_DATA.length - 1} />
                                <View style={styles.expContent}>
                                    <View style={styles.expHeader}>
                                        <View>
                                            <Text style={styles.expRole}>{exp.role}</Text>
                                            <Text style={styles.expCompany}>{exp.company}</Text>
                                        </View>
                                        <Text style={styles.expDateBadge}>{exp.period}</Text>
                                    </View>
                                    <Text style={styles.expDesc}>{exp.description}</Text>
                                    {exp.functions.slice(0, 3).map((func, i) => (
                                        <Text key={i} style={styles.bulletPoint}>• {func}</Text>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>

                    <View style={styles.mainSection}>
                        <View style={styles.mainSectionHeader}>
                            <ProjectIcon />
                            <Text style={styles.mainSectionTitle}>Proyectos Destacados</Text>
                        </View>
                        {PROJECTS.map((proj, index) => (
                            <View key={index} style={styles.projectItem}>
                                <Text style={styles.projectTitle}>{proj.title}</Text>
                                <View style={styles.techChipsRow}>
                                    {proj.tech.slice(0, 5).map((tech, i) => (
                                        <Text key={i} style={styles.techChip}>{tech}</Text>
                                    ))}
                                </View>
                                <Text style={styles.projectDesc}>{proj.description}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

        </Page>
    </Document>
);
