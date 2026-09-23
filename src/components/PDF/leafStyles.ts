import { StyleSheet } from '@react-pdf/renderer';
import { mix, readableOn } from '../../lib/color';

export interface PdfTheme {
  bg: string;
  bg2: string;
  bg3: string;
  fg: string;
  fgMuted: string;
  fgDim: string;
  line: string;
  lineStrong: string;
  mode: 'dark' | 'light';
}

export const SIDEBAR_W = 179;

/** Neutral inks for the white "paper" body of light themes — the page must print well. */
const PAPER = {
  bg: '#ffffff',
  ink: '#1a1a18',
  muted: '#374151',
  mutedSoft: '#4b5563',
  dot: '#9ca3af',
  border: 'rgba(0,0,0,0.10)',
};
const DARK_SIDEBAR_BORDER = '#27272a';
/** How far the badge background is pulled from the accent toward the paper (light themes). */
const BADGE_TINT = 0.88;

// Build theme-aware StyleSheet for the Leaf PDF
export function makeLeafStyles(theme: PdfTheme, accent: string) {
  const isDark = theme.mode === 'dark';

  // Dark themes keep their palette; light themes print on white paper with a themed sidebar.
  const sidebarBg = isDark ? theme.bg : theme.bg3;
  const sidebarFg = theme.fg;
  const sidebarMuted = theme.fgMuted;
  const sidebarDim = theme.fgDim;
  const skillBg = theme.bg2;
  const skillFg = isDark ? theme.fgMuted : theme.fg;
  const sidebarBorder = isDark ? DARK_SIDEBAR_BORDER : PAPER.border;

  const bodyBg = isDark ? theme.bg2 : PAPER.bg;
  const bodyFg = isDark ? theme.fg : PAPER.ink;
  const bodyMuted = isDark ? theme.fgMuted : PAPER.muted;
  const bodyMutedSoft = isDark ? theme.fgMuted : PAPER.mutedSoft;
  const dotColor = isDark ? theme.fgDim : PAPER.dot;

  // Accent as text must stay readable (WCAG AA) on every surface it lands on.
  const accentInk = readableOn(accent, [sidebarBg, bodyBg]);
  const badgeBg = isDark ? skillBg : mix(accent, PAPER.bg, BADGE_TINT);
  const badgeInk = readableOn(accent, [badgeBg]);

  return StyleSheet.create({
    page: {
      fontFamily: 'Roboto',
      backgroundColor: bodyBg,
      flexDirection: 'row',
    },
    sidebar: {
      width: SIDEBAR_W,
      backgroundColor: sidebarBg,
      paddingHorizontal: 14,
      paddingBottom: 20,
      flexShrink: 0,
    },
    photo: {
      width: SIDEBAR_W,
      height: 170,
      objectFit: 'cover' as const,
      marginLeft: -14,
      marginBottom: 14,
    },
    name: {
      fontSize: 13,
      fontWeight: 700,
      color: sidebarFg,
      textTransform: 'uppercase' as const,
      letterSpacing: 0.5,
      lineHeight: 1.2,
      marginBottom: 3,
    },
    jobTitle: {
      fontSize: 8,
      color: accentInk,
      fontWeight: 500,
      letterSpacing: 0.3,
      marginBottom: 10,
    },
    sidebarDivider: {
      borderBottomWidth: 1,
      borderBottomColor: sidebarBorder,
      marginBottom: 7,
    },
    sidebarSectionLabel: {
      fontSize: 7,
      fontWeight: 700,
      color: accentInk,
      textTransform: 'uppercase' as const,
      letterSpacing: 1,
      marginBottom: 5,
    },
    contactItem: {
      fontSize: 7.5,
      color: sidebarMuted,
      marginBottom: 3,
      lineHeight: 1.3,
    },
    contactLink: {
      fontSize: 7.5,
      color: sidebarMuted,
      textDecoration: 'none' as const,
      marginBottom: 3,
      lineHeight: 1.3,
    },
    skillPill: {
      fontSize: 7,
      color: skillFg,
      backgroundColor: skillBg,
      borderRadius: 2,
      paddingHorizontal: 5,
      paddingVertical: 2,
      marginBottom: 3,
      fontWeight: 400,
    },
    eduDegree: {
      fontSize: 7.5,
      fontWeight: 700,
      color: sidebarFg,
      marginBottom: 1,
    },
    eduSchool: {
      fontSize: 7,
      color: sidebarDim,
      marginBottom: 1,
    },
    eduYear: {
      fontSize: 7,
      color: sidebarDim,
      marginBottom: 5,
    },
    langName: {
      fontSize: 7.5,
      fontWeight: 700,
      color: sidebarFg,
    },
    langLevel: {
      fontSize: 7,
      color: sidebarDim,
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
      color: bodyFg,
      textTransform: 'uppercase' as const,
      letterSpacing: 0.8,
      borderBottomWidth: 1.5,
      borderBottomColor: accent,
      paddingBottom: 3,
      marginBottom: 6,
      marginTop: 10,
    },
    summary: {
      fontSize: 8.5,
      color: bodyMuted,
      lineHeight: 1.4,
      textAlign: 'justify' as const,
      marginBottom: 3,
    },
    jobRole: {
      fontSize: 10,
      fontWeight: 700,
      color: bodyFg,
    },
    jobCompany: {
      fontSize: 9,
      color: accentInk,
      fontWeight: 500,
      marginTop: 1,
    },
    jobPeriod: {
      fontSize: 8,
      color: bodyMutedSoft,
      fontWeight: 500,
    },
    bullet: {
      flexDirection: 'row' as const,
      marginBottom: 2.5,
      paddingLeft: 2,
    },
    bulletDot: {
      width: 3,
      height: 3,
      backgroundColor: dotColor,
      borderRadius: 1.5,
      marginRight: 6,
      marginTop: 3.5,
    },
    bulletDotAccent: {
      width: 3,
      height: 3,
      backgroundColor: accent,
      borderRadius: 1.5,
      marginRight: 6,
      marginTop: 3.5,
    },
    bulletText: {
      fontSize: 8,
      color: bodyMuted,
      flex: 1,
      lineHeight: 1.35,
    },
    jobItem: {
      marginBottom: 7,
    },
    jobHeaderRow: {
      flexDirection: 'row' as const,
      justifyContent: 'space-between' as const,
      alignItems: 'flex-start' as const,
      marginBottom: 2,
    },
    jobHeaderLeft: { flex: 1 },
    projectCard: {
      marginBottom: 7,
      paddingLeft: 8,
      borderLeftWidth: 2,
      borderLeftColor: accent,
    },
    projectTitle: {
      fontSize: 9,
      fontWeight: 700,
      color: bodyFg,
      marginBottom: 2,
    },
    projectDesc: {
      fontSize: 8,
      color: bodyMutedSoft,
      lineHeight: 1.35,
      marginBottom: 3,
    },
    techRow: {
      flexDirection: 'row' as const,
      flexWrap: 'wrap' as const,
      gap: 3,
    },
    techBadge: {
      fontSize: 7,
      backgroundColor: badgeBg,
      color: badgeInk,
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderRadius: 2,
      fontWeight: 500,
    },
    footer: {
      position: 'absolute' as const,
      bottom: 10,
      left: SIDEBAR_W + 10,
      right: 10,
      textAlign: 'center' as const,
      fontSize: 7.5,
      color: dotColor,
    },
  });
}
