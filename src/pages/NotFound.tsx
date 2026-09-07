import { Layout } from '../components/Layout';
import { internalLinks } from '../config/site.config';
import { nav } from '../data/site';
import { ArrowIcon } from '../components/Icons';

export default function NotFound() {
  const urls = internalLinks('notFound');

  return (
    <Layout pageKey="notFound">
      <section
        className="container-page"
        style={{ paddingTop: '9rem', paddingBottom: '6rem' }}
        aria-labelledby="notfound-heading"
      >
        <div style={{ maxWidth: '40rem' }}>
          <p className="mono-label">Fehler 404</p>
          <h1 id="notfound-heading" className="mt-4" style={{ fontSize: 'var(--text-2xl)' }}>
            Seite nicht gefunden
          </h1>
          <p
            className="mt-5 text-[color:var(--color-text-muted)]"
            style={{ maxWidth: '54ch', fontSize: 'var(--text-base)' }}
          >
            Diese Adresse existiert nicht oder hat sich geändert. Über die Links unten geht es
            zurück zur Startseite oder direkt zu einem der Bereiche.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={urls.homePage} className="btn btn-primary">
              Zur Startseite
              <ArrowIcon />
            </a>
            <a href={urls.section('projects')} className="btn btn-ghost">
              Projekte ansehen
            </a>
          </div>

          <nav aria-label="Bereiche der Startseite" className="mt-12">
            <h2 className="mono-label">Weiter zu</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {nav
                .filter((item) => item.id !== 'home')
                .map((item) => (
                  <li key={item.id}>
                    <a
                      href={urls.section(item.id)}
                      className="text-[color:var(--color-text-muted)] underline decoration-[color:var(--color-border)] underline-offset-4 transition-colors hover:text-[color:var(--accent-color)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </section>
    </Layout>
  );
}
