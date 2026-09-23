import type { DemoState } from '../../data/projects';
import type { Lang } from '../../i18n/lang';
import { translations } from '../../i18n/translations';

/**
 * Icon and copy for a project's demo state, so the project list and the case study
 * can't disagree. `label` is the short badge; `note` is the case study's demo section
 * (the link text when the demo is live).
 */
export function demoCopy(demo: DemoState, lang: Lang): { icon: string; label: string; note: string } {
  const t = translations[lang];
  switch (demo.status) {
    case 'live':
      return { icon: '●', label: t.caseStudy.live, note: t.caseStudy.openDemo };
    case 'in-construction':
      return { icon: '🚧', label: t.projects.demoInConstruction, note: t.caseStudy.demoMsg };
    case 'private':
      return { icon: '🔒', label: t.projects.privateInfra, note: t.caseStudy.privateMsg };
  }
}
