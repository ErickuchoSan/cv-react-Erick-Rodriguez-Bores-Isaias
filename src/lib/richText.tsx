import { Fragment, type ReactNode } from 'react';

/**
 * Fills `{key}` placeholders with React nodes, so a translated sentence stays whole
 * instead of being cut into fragments around the highlighted words.
 */
export function richText(template: string, values: Record<string, ReactNode>): ReactNode[] {
  return template.split(/(\{\w+\})/g).map((part, i) => {
    const key = /^\{(\w+)\}$/.exec(part)?.[1];
    return <Fragment key={i}>{key !== undefined && key in values ? values[key] : part}</Fragment>;
  });
}
