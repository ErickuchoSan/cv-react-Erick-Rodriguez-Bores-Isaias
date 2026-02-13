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

// Modern Clean Palette (Web Match: Electric Blue + Cyan)
const COLORS = {
    primary: '#3b82f6', // Electric Blue
    primaryDark: '#2563eb',
    accent: '#06b6d4', // Cyan
    textMain: '#1e293b', // Slate 800
    textSecondary: '#475569', // Slate 600
    textLight: '#94a3b8', // Slate 400
    divider: '#e2e8f0', // Slate 200
    bgHeader: '#f8fafc', // Slate 50
    white: '#ffffff',
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
        flexDirection: 'column',
        backgroundColor: COLORS.white,
        fontFamily: 'Roboto',
        padding: 30,
        paddingTop: 25,
    },
    // HEADER SECTION
    header: {
        flexDirection: 'row',
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.divider,
        paddingBottom: 20,
        alignItems: 'center',
    },
    headerInfo: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 700,
        color: COLORS.textMain,
        letterSpacing: -0.5,
        marginBottom: 4,
    },
    jobTitle: {
        fontSize: 10,
        color: COLORS.primary,
        fontWeight: 700,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
    },
    headerImageContainer: {
        marginLeft: 20,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    // CONTACT BAR
    contactBar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 25,
        gap: 15,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactIcon: {
        width: 10,
        height: 10,
        marginRight: 6,
    },
    contactText: {
        fontSize: 8,
        color: COLORS.textSecondary,
    },
    contactLink: {
        fontSize: 8,
        color: COLORS.primary,
        textDecoration: 'none',
    },
    // COLUMNS LAYOUT
    columnsContainer: {
        flexDirection: 'row',
        gap: 25,
    },
    leftColumn: {
        width: '68%',
    },
    rightColumn: {
        width: '32%',
    },
    // SECTIONS
    sectionTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: COLORS.textMain,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 12,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.primary,
        paddingBottom: 4,
        alignSelf: 'flex-start',
    },
    // EXPERIENCE
    experienceItem: {
        marginBottom: 15,
        paddingLeft: 12,
        borderLeftWidth: 2,
        borderLeftColor: COLORS.divider,
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 2,
    },
    expRole: {
        fontSize: 10,
        fontWeight: 700,
        color: COLORS.textMain,
    },
    expCompany: {
        fontSize: 9,
        fontWeight: 500,
        color: COLORS.primary,
        marginBottom: 2,
    },
    expDate: {
        fontSize: 7,
        color: COLORS.textLight,
        backgroundColor: COLORS.bgHeader,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    expDesc: {
        fontSize: 8,
        color: COLORS.textSecondary,
        lineHeight: 1.4,
        marginBottom: 4,
    },
    bulletPoint: {
        fontSize: 7.5,
        color: COLORS.textSecondary,
        marginLeft: 6,
        lineHeight: 1.3,
        marginBottom: 1,
    },
    // SKILLS (Chips)
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginBottom: 20,
    },
    skillChip: {
        backgroundColor: COLORS.bgHeader,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COLORS.divider,
    },
    skillText: {
        fontSize: 7,
        color: COLORS.textMain,
        fontWeight: 500,
    },
    skillLevel: {
        fontSize: 6,
        color: COLORS.primary,
        marginTop: 1,
    },
    // SUMMARY
    summary: {
        fontSize: 8.5,
        color: COLORS.textSecondary,
        lineHeight: 1.5,
        marginBottom: 20,
    },
    // EDUCATION & PROJECTS
    sideItem: {
        marginBottom: 15,
    },
    sideTitle: {
        fontSize: 9,
        fontWeight: 700,
        color: COLORS.textMain,
    },
    sideSubtitle: {
        fontSize: 8,
        color: COLORS.textSecondary,
    },
    sideDate: {
        fontSize: 7,
        color: COLORS.textLight,
        marginTop: 1,
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 3,
        marginTop: 3,
    },
    miniChip: {
        fontSize: 6,
        color: COLORS.primaryDark,
        backgroundColor: '#e0f2fe',
        paddingHorizontal: 4,
        paddingVertical: 1,
        borderRadius: 3,
    },
});

// ICONS
const EmailIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </Svg>
);
const PhoneIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </Svg>
);
const LocationIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </Svg>
);
const LinkIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
    </Svg>
);

export const CVDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* 1. Header Section */}
            <View style={styles.header}>
                <View style={styles.headerInfo}>
                    <Text style={styles.name}>Erick Rodríguez Bores Isaías</Text>
                    <Text style={styles.jobTitle}>Desarrollador Full Stack Senior | Arquitecto de Soluciones</Text>
                </View>
                <View style={styles.headerImageContainer}>
                    <Image
                        style={styles.profileImage}
                        src="/assets/images/profile.jpg"
                    />
                </View>
            </View>

            {/* 2. Compact Contact Bar */}
            <View style={styles.contactBar}>
                <View style={styles.contactItem}>
                    <EmailIcon />
                    <Link src="mailto:erickisaiasbores@gmail.com" style={styles.contactLink}>
                        erickisaiasbores@gmail.com
                    </Link>
                </View>
                <View style={styles.contactItem}>
                    <PhoneIcon />
                    <Text style={styles.contactText}>55 7110 4581</Text>
                </View>
                <View style={styles.contactItem}>
                    <LocationIcon />
                    <Text style={styles.contactText}>Cuajimalpa de Morelos, CDMX</Text>
                </View>
                <View style={styles.contactItem}>
                    <LinkIcon />
                    <Link src="https://linkedin.com/in/erickrodriguezbores" style={styles.contactLink}>
                        linkedin.com/in/erickrodriguezbores
                    </Link>
                </View>
                <View style={styles.contactItem}>
                    <LinkIcon />
                    <Link src="https://github.com/erickrodriguez" style={styles.contactLink}>
                        github.com/erickrodriguez
                    </Link>
                </View>
            </View>

            {/* 3. Summary */}
            <Text style={styles.summary}>
                Desarrollador Full Stack Senior con +5 años de experiencia diseñando arquitecturas empresariales escalables.
                Experto en transformar requisitos complejos en soluciones robustas y limpias, logrando reducir tiempos de consulta en un 40%
                y automatizar procesos críticos. Tech Stack moderno: .NET/C#, React, SQL Server y Cloud. Apasionado por la innovación y las
                mejores prácticas de ingeniería de software.
            </Text>

            {/* 4. Two Column Layout */}
            <View style={styles.columnsContainer}>

                {/* LEFT COLUMN (Experience & Projects) */}
                <View style={styles.leftColumn}>

                    <View style={{ marginBottom: 25 }}>
                        <Text style={styles.sectionTitle}>Experiencia Profesional</Text>
                        {EXPERIENCE_DATA.map((exp, index) => (
                            <View key={index} style={styles.experienceItem}>
                                <View style={styles.expHeader}>
                                    <View>
                                        <Text style={styles.expRole}>{exp.role}</Text>
                                        <Text style={styles.expCompany}>{exp.company}</Text>
                                    </View>
                                    <Text style={styles.expDate}>{exp.period}</Text>
                                </View>
                                <Text style={styles.expDesc}>{exp.description}</Text>
                                {exp.functions.slice(0, 3).map((func, i) => (
                                    <Text key={i} style={styles.bulletPoint}>• {func}</Text>
                                ))}
                            </View>
                        ))}
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>Proyectos Destacados</Text>
                        {PROJECTS.slice(0, 3).map((proj, index) => (
                            <View key={index} style={styles.experienceItem}>
                                <Text style={styles.expRole}>{proj.title}</Text>
                                <Text style={styles.expDesc}>{proj.description}</Text>
                                <View style={styles.techStack}>
                                    {proj.tech.slice(0, 5).map((tech, i) => (
                                        <Text key={i} style={styles.miniChip}>{tech}</Text>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>

                </View>

                {/* RIGHT COLUMN (Skills, Education, Languages) */}
                <View style={styles.rightColumn}>

                    <View style={{ marginBottom: 25 }}>
                        <Text style={styles.sectionTitle}>Habilidades</Text>
                        <View style={styles.skillsContainer}>
                            {SKILLS_DATA.map((skill, i) => (
                                <View key={i} style={styles.skillChip}>
                                    <Text style={styles.skillText}>{skill.name}</Text>
                                    {/* Optional: Show level text if needed, minimal style just shows name */}
                                    {/* <Text style={styles.skillLevel}>{skill.level}%</Text> */}
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={{ marginBottom: 25 }}>
                        <Text style={styles.sectionTitle}>Educación</Text>
                        <View style={styles.sideItem}>
                            <Text style={styles.sideTitle}>Maestría en IA</Text>
                            <Text style={styles.sideSubtitle}>UNIR (En curso)</Text>
                            <Text style={styles.sideDate}>2025 - Actual</Text>
                        </View>
                        <View style={styles.sideItem}>
                            <Text style={styles.sideTitle}>Ing. Sistemas Computacionales</Text>
                            <Text style={styles.sideSubtitle}>UTEL Universidad</Text>
                            <Text style={styles.sideDate}>2019 - 2023</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 25 }}>
                        <Text style={styles.sectionTitle}>Idiomas</Text>
                        <View style={styles.sideItem}>
                            <Text style={styles.sideTitle}>Español</Text>
                            <Text style={styles.sideSubtitle}>Nativo</Text>
                        </View>
                        <View style={styles.sideItem}>
                            <Text style={styles.sideTitle}>Inglés</Text>
                            <Text style={styles.sideSubtitle}>A2-B1 Intermedio</Text>
                        </View>
                    </View>

                </View>
            </View>
        </Page>
    </Document>
);
