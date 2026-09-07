import { nav, site } from '../data/site';
import { identity, internalLinks, type PageKey } from '../config/site.config';
import { Logo } from './Logo';

const linkClass =
  'text-[color:var(--color-text-muted)] transition-colors hover:text-[color:var(--accent-color)]';

export function Footer({ pageKey }: { pageKey: PageKey }) {
  const urls = internalLinks(pageKey);

  return (
    <footer
      className="border-t border-[color:var(--color-border)]"
      style={{ paddingBlock: 'var(--space-12)' }}
    >
      <div className="container-page grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo size={26} />
            <span className="font-medium" style={{ fontSize: 'var(--text-base)' }}>
              {identity.fullName}
            </span>
          </div>
          <p
            className="mt-3 text-[color:var(--color-text-muted)]"
            style={{ fontSize: 'var(--text-sm)', maxWidth: '34ch' }}
          >
            {identity.role} aus {identity.locality} · online als {identity.nicknames.join(' und ')}
          </p>
          <p
            className="mt-4 text-[color:var(--color-text-faint)]"
            style={{ fontSize: 'var(--text-xs)' }}
          >
            © 2026 {identity.fullName}. Alle Rechte vorbehalten.
          </p>
        </div>

        <nav aria-label="Footer-Navigation">
          <p className="mono-label">Navigation</p>
          <ul className="mt-4 space-y-2.5" style={{ fontSize: 'var(--text-sm)' }}>
            {nav.map((item) => (
              <li key={item.id}>
                <a href={urls.section(item.id)} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mono-label">Profile & Rechtliches</p>
          <ul className="mt-4 space-y-2.5" style={{ fontSize: 'var(--text-sm)' }}>
            <li>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer me"
                className={linkClass}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.links.tiktok}
                target="_blank"
                rel="noopener noreferrer me"
                className={linkClass}
              >
                TikTok
              </a>
            </li>
            <li>
              <a href={site.links.email} className={linkClass}>
                E-Mail
              </a>
            </li>
            <li>
              <a href={urls.imprint} className={linkClass}>
                Impressum
              </a>
            </li>
            <li>
              <a href={urls.privacy} className={linkClass}>
                Datenschutz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
