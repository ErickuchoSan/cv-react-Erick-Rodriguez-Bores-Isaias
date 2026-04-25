/* eslint-disable react-refresh/only-export-components */
import React, { useMemo } from 'react';
import { Document, Page, Text, View, Font, Image, Link } from '@react-pdf/renderer';
import { translations } from '../../i18n/translations';
import { CONTACT_INFO } from '../../data/contact';
import { PROJECTS_DATA } from '../../data/projects';
import { makeLeafStyles, NEUTRAL_THEME, NEUTRAL_ACCENT, type PdfTheme } from './leafStyles';

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

interface Props {
  theme?: PdfTheme;
  accent?: string;
}

export const CVDocumentLeaf_EN: React.FC<Props> = ({ theme = NEUTRAL_THEME, accent = NEUTRAL_ACCENT }) => {
  const t = translations.en;
  const profileImage = `${window.location.origin}/assets/images/profile.jpg`;
  const s = useMemo(() => makeLeafStyles(theme, accent), [theme, accent]);

  return (
    <Document>
      <Page size="A4" style={s.page} wrap={false}>
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
          <Text style={s.eduSchool}>{t.about.education.school2}</Text>
          <Text style={s.eduYear}>{t.about.education.status2}</Text>

          <View style={[s.sidebarDivider, { marginTop: 6 }]} />
          <Text style={s.sidebarSectionLabel}>Languages</Text>
          {t.languages.items.map((lang, i) => (
            <View key={i}>
              <Text style={s.langName}>{lang.name}</Text>
              <Text style={s.langLevel}>{lang.level}</Text>
            </View>
          ))}
        </View>

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
                  <View style={s.bulletDotAccent} />
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

        <Text style={s.footer} fixed render={({ pageNumber, totalPages }) =>
          `${t.hero.title} ${t.hero.subtitle}  •  ${CONTACT_INFO.email}  •  Page ${pageNumber} / ${totalPages}`
        } />
      </Page>
    </Document>
  );
};
