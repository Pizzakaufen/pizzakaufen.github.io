import { site } from '../data/site';
import { GitHubIcon } from '../components/Icons';
import { Reveal } from '../components/Reveal';

export function Github() {
  return (
    <section id="github" className="section" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
      <div className="container-page">
        <Reveal>
          <div className="card overflow-hidden">
            <div className="relative flex flex-col gap-7 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div
                className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full opacity-[0.14] blur-3xl"
                style={{ background: 'var(--accent-color)' }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="mono-label">04 — Open Source</p>
                <h2 className="mt-3" style={{ fontSize: 'var(--text-xl)' }}>
                  GitHub
                </h2>
                <p
                  className="mt-3 text-[color:var(--color-text-muted)]"
                  style={{ maxWidth: '46ch' }}
                >
                  Auf GitHub veröffentliche ich Projekte, Scripts und andere Entwicklungen.
                </p>
                <p className="mono-label mt-4">github.com/{site.handles.github}</p>
              </div>

              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer me"
                className="btn btn-primary relative self-start lg:self-center"
              >
                <GitHubIcon width={17} height={17} />
                GitHub öffnen
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
