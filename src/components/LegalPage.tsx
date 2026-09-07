import type { ReactNode } from 'react';
import { Layout } from './Layout';
import { Breadcrumbs } from './Breadcrumbs';
import type { PageKey } from '../config/site.config';

/** Einheitliches Textlayout für Impressum und Datenschutz. */
export function LegalPage({
  pageKey,
  breadcrumb,
  heading,
  intro,
  children,
}: {
  pageKey: PageKey;
  breadcrumb: string;
  heading: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <Layout pageKey={pageKey}>
      <article className="container-page" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '46rem' }}>
          <Breadcrumbs pageKey={pageKey} current={breadcrumb} />
          <h1 style={{ fontSize: 'var(--text-xl)' }}>{heading}</h1>
          {intro && (
            <p className="mt-4 text-[color:var(--color-text-muted)]" style={{ maxWidth: '62ch' }}>
              {intro}
            </p>
          )}
          <div className="legal-body mt-10">{children}</div>
        </div>
      </article>
    </Layout>
  );
}

/** Hinweisbox für Angaben, die noch ergänzt werden müssen. */
export function TodoNote({ children }: { children: ReactNode }) {
  return (
    <p
      className="rounded-card border border-dashed p-4"
      style={{
        borderColor: 'var(--accent-ring)',
        color: 'var(--color-text)',
        fontSize: 'var(--text-sm)',
      }}
    >
      {children}
    </p>
  );
}
