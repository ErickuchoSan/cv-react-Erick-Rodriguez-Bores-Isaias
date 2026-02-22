const fs = require('fs');
const path = require('path');

const srcDir = 'd:\\ErickuchoSan\\Desktop\\CV Erick Rodriguez Bores Isaias CV WEB\\cv-react-Erick-Rodriguez -Bores-Isaias\\src\\components\\PDF';

const files = ['CVDocument.tsx', 'CVDocumentEN.tsx'];

const newStyles = `const styles = StyleSheet.create({
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
});\n\n`;

files.forEach(file => {
    const filePath = path.join(srcDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Find where styles block starts and ends
    const startIndex = content.indexOf('const styles = StyleSheet.create({');
    if (startIndex === -1) {
        console.log('No startIndex in ' + file);
        return;
    }

    const endIndex = content.indexOf('export const CVDocument');
    if (endIndex === -1) {
        console.log('No endIndex in ' + file);
        return;
    }

    const newContent = content.substring(0, startIndex) + newStyles + content.substring(endIndex);

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated ' + file);
});
