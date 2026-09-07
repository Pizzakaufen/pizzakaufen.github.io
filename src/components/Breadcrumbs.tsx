import { internalLinks, type PageKey } from '../config/site.config';

/**
 * Breadcrumb-Navigation für Unterseiten (Startseite > aktuelle Seite).
 * Die passende BreadcrumbList als JSON-LD erzeugt das SEO-Plugin beim Build.
 */
export function Breadcrumbs({ pageKey, current }: { pageKey: PageKey; current: string }) {
  const urls = internalLinks(pageKey);

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2" style={{ fontSize: 'var(--text-xs)' }}>
        <li>
          <a
            href={urls.homePage}
            className="text-[color:var(--color-text-muted)] transition-colors hover:text-[color:var(--accent-color)]"
          >
            Startseite
          </a>
        </li>
        <li aria-hidden="true" className="text-[color:var(--color-text-faint)]">
          /
        </li>
        <li>
          <span aria-current="page" className="text-[color:var(--color-text)]">
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
}
