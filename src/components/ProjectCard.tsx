import type { Project } from '../data/projects';
import { ExternalIcon, GitHubIcon } from './Icons';

const statusColor: Record<Project['status'], string> = {
  Aktiv: 'var(--accent-color)',
  'In Weiterentwicklung': 'var(--accent-color)',
  'Laufende Entwicklung': 'var(--accent-color)',
  Abgeschlossen: 'var(--color-text-muted)',
  Geplant: 'var(--color-text-faint)',
};

export function ProjectCard({ project }: { project: Project }) {
  const { name, description, details, tech, status, github, demo, featured } = project;

  return (
    <article className="card group flex h-full flex-col p-6 sm:p-7 relative overflow-hidden transition-all duration-300">
      {/* Subtle background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at top right, rgba(255, 106, 61, 0.08), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <h3
            className="font-bold"
            style={{ fontSize: featured ? 'var(--text-lg)' : 'var(--text-base)' }}
          >
            {name}
          </h3>
          <span className="badge self-start sm:shrink-0 transition-all group-hover:border-[color:var(--accent-ring)] group-hover:bg-[color:var(--accent-soft)]" style={{ color: statusColor[status] }}>
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: 'currentColor' }}
              aria-hidden="true"
            />
            {status}
          </span>
        </div>

        <p
          className="mt-3 text-[color:var(--color-text-muted)] transition-colors group-hover:text-[color:var(--color-text)]"
          style={{ fontSize: 'var(--text-sm)', maxWidth: '52ch' }}
        >
          {description}
        </p>

        {details && details.length > 0 && (
          <ul
            className="mt-4 space-y-1.5 text-[color:var(--color-text-muted)]"
            style={{ fontSize: 'var(--text-sm)' }}
          >
            {details.map((detail) => (
              <li key={detail} className="flex gap-2.5 transition-all group-hover:text-[color:var(--color-text)]">
                <span
                  className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full"
                  style={{ background: 'var(--accent-color)' }}
                  aria-hidden="true"
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t}>
              <span className="badge transition-all group-hover:border-[color:var(--accent-color)] group-hover:text-[color:var(--color-text)]">{t}</span>
            </li>
          ))}
        </ul>

        {(github || demo) && (
          <div className="mt-6 flex flex-wrap gap-2.5 pt-1">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label={`${name} auf GitHub ansehen`}
              >
                <GitHubIcon width={16} height={16} />
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label={`Demo von ${name} öffnen`}
              >
                <ExternalIcon width={16} height={16} />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
