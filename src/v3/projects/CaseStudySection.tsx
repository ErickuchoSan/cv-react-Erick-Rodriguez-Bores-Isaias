import type { ReactNode } from 'react';

interface Props {
  prefix: string;
  children: ReactNode;
  accent?: string;
}

export function CaseStudySection({ prefix, children, accent }: Props) {
  return (
    <section style={{
      padding: '32px 0',
      borderTop: '1px solid var(--line)',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: 1.6,
        textTransform: 'uppercase',
        color: accent ?? 'var(--accent)',
        marginBottom: 16,
      }}>
        // {prefix}
      </div>
      <div>{children}</div>
    </section>
  );
}
