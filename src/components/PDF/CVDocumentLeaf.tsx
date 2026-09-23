import { useMemo } from 'react';
import { Document, Page, Text, View, Font, Image, Link } from '@react-pdf/renderer';
import { buildCV } from '../../data/model';
import type { Lang } from '../../i18n/lang';
import { translations } from '../../i18n/translations';
import { makeLeafStyles, type PdfTheme } from './leafStyles';

// Self-hosted (public/fonts/roboto, Apache 2.0) so generating the PDF doesn't depend on a
// third-party CDN being reachable. Only the weights leafStyles uses.
const FONT_BASE = `${window.location.origin}/fonts/roboto`;
Font.register({
  family: 'Roboto',
  fonts: [
    { src: `${FONT_BASE}/roboto-regular.ttf`, fontWeight: 400 },
    { src: `${FONT_BASE}/roboto-medium.ttf`, fontWeight: 500 },
    { src: `${FONT_BASE}/roboto-bold.ttf`, fontWeight: 700 },
  ],
});

/** Tech badges that fit on one line of the featured-project card. */
const FEATURED_TECH_LIMIT = 6;

interface Props {
  lang: Lang;
  theme: PdfTheme;
  accent: string;
}

/** One-page visual CV. Inherits the theme and accent active on the web. */
export function CVDocumentLeaf({ lang, theme, accent }: Props) {
  const cv = useMemo(() => buildCV(lang), [lang]);
  const s = useMemo(() => makeLeafStyles(theme, accent), [theme, accent]);
  const t = translations[lang].pdf;
  const profileImage = `${window.location.origin}${cv.photo}`;
  const featuredProject = cv.projects[0];

  return (
    <Document>
      <Page size="A4" style={s.page} wrap={false}>
        <View style={s.sidebar}>
          <Image src={profileImage} style={s.photo} />

          <Text style={s.name}>{cv.name.lines[0]}{'\n'}{cv.name.lines[1]}</Text>
          <Text style={s.jobTitle}>{cv.role}</Text>

          <View style={s.sidebarDivider} />
          <Text style={s.sidebarSectionLabel}>{t.contact}</Text>
          <Text style={s.contactItem}>{cv.contact.location}</Text>
          <Link src={cv.contact.phoneHref} style={s.contactLink}>{cv.contact.phone}</Link>
          <Link src={`mailto:${cv.contact.email}`} style={s.contactLink}>{cv.contact.email}</Link>
          <Link src={cv.contact.linkedin.url} style={s.contactLink}>LinkedIn</Link>
          <Link src={cv.contact.github.url} style={s.contactLink}>GitHub</Link>
          <Link src={cv.contact.website.url} style={s.contactLink}>{cv.contact.website.display}</Link>

          <View style={[s.sidebarDivider, { marginTop: 6 }]} />
          <Text style={s.sidebarSectionLabel}>{t.coreSkills}</Text>
          {cv.skills.core.map((skill) => (
            <Text key={skill} style={s.skillPill}>{skill}</Text>
          ))}

          <View style={[s.sidebarDivider, { marginTop: 6 }]} />
          <Text style={s.sidebarSectionLabel}>{t.education}</Text>
          {cv.education.map((e) => (
            <View key={e.degree}>
              <Text style={s.eduDegree}>{e.degree}</Text>
              <Text style={s.eduSchool}>{e.school}</Text>
              <Text style={s.eduYear}>{e.period}</Text>
            </View>
          ))}

          <View style={[s.sidebarDivider, { marginTop: 6 }]} />
          <Text style={s.sidebarSectionLabel}>{t.languages}</Text>
          {cv.languages.map((l) => (
            <View key={l.name}>
              <Text style={s.langName}>{l.name}</Text>
              <Text style={s.langLevel}>{l.level}</Text>
            </View>
          ))}
        </View>

        <View style={s.body}>
          <View>
            <Text style={[s.bodySectionTitle, { marginTop: 0 }]}>{t.profile}</Text>
            <Text style={s.summary}>{cv.summary}</Text>
          </View>

          <Text style={s.bodySectionTitle}>{t.experience}</Text>

          {cv.experience.map((job) => (
            <View key={job.id} style={s.jobItem}>
              <View style={s.jobHeaderRow}>
                <View style={s.jobHeaderLeft}>
                  <Text style={s.jobRole}>{job.role}</Text>
                  <Text style={s.jobCompany}>{job.company}</Text>
                </View>
                <Text style={s.jobPeriod}>{job.period}</Text>
              </View>

              {job.featured.functions.map((fn) => (
                <View key={fn} style={s.bullet}>
                  <View style={s.bulletDot} />
                  <Text style={s.bulletText}>{fn}</Text>
                </View>
              ))}

              {job.featured.achievement && (
                <View style={s.bullet}>
                  <View style={s.bulletDotAccent} />
                  <Text style={s.bulletText}>{job.featured.achievement}</Text>
                </View>
              )}
            </View>
          ))}

          {featuredProject && (
            <>
              <Text style={s.bodySectionTitle}>{t.featuredProject}</Text>
              <View style={s.projectCard}>
                <Text style={s.projectTitle}>{featuredProject.name}</Text>
                <Text style={s.projectDesc}>{featuredProject.description}</Text>
                <View style={s.techRow}>
                  {featuredProject.tech.slice(0, FEATURED_TECH_LIMIT).map((tag) => (
                    <Text key={tag} style={s.techBadge}>{tag}</Text>
                  ))}
                </View>
              </View>
            </>
          )}
        </View>

        <Text style={s.footer} fixed render={({ pageNumber, totalPages }) =>
          `${cv.name.full}  •  ${cv.contact.email}  •  ${t.page} ${pageNumber} / ${totalPages}`
        } />
      </Page>
    </Document>
  );
}
