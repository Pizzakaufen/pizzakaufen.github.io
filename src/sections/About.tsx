import { focusAreas, interests, site, timeline } from '../data/site';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading label="01 — Profil" title="Über mich" text={site.about} />

          <div>
            <div className="space-y-4 text-[color:var(--color-text-muted)]">
              <p>{site.statement}</p>
              <p>{site.experienceNote}</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area, i) => (
                <Reveal key={area.title} delay={i * 70}>
                  <article className="card h-full p-5 sm:p-6">
                    <h3 className="font-medium" style={{ fontSize: 'var(--text-base)' }}>
                      {area.title}
                    </h3>
                    <p
                      className="mt-2 text-[color:var(--color-text-muted)]"
                      style={{ fontSize: 'var(--text-sm)' }}
                    >
                      {area.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Werdegang und Interessen */}
        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h3 className="mono-label">Werdegang</h3>
            <ol className="mt-6 space-y-6 border-l border-[color:var(--color-border)] pl-6">
              {timeline.map((entry, i) => (
                <Reveal key={`${entry.kind}-${entry.title}`} delay={i * 60}>
                  <li className="relative">
                    <span
                      className="absolute -left-[1.9rem] top-2 h-2 w-2 rounded-full"
                      style={{ background: 'var(--accent-color)' }}
                      aria-hidden="true"
                    />
                    <p className="mono-label">{entry.kind}</p>
                    <p className="mt-1.5 font-medium" style={{ fontSize: 'var(--text-base)' }}>
                      {entry.title}
                      {entry.place ? (
                        <span className="text-[color:var(--color-text-muted)]"> · {entry.place}</span>
                      ) : null}
                    </p>
                    <p
                      className="mt-1 text-[color:var(--color-text-muted)]"
                      style={{ fontSize: 'var(--text-sm)' }}
                    >
                      {entry.text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:content-start">
            <div className="card p-5 sm:p-6">
              <h3 className="mono-label">Interessen</h3>
              <ul className="mt-4 flex flex-wrap gap-2" style={{ fontSize: 'var(--text-sm)' }}>
                {interests.map((item) => (
                  <li key={item}>
                    <span className="badge">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-5 sm:p-6">
              <h3 className="mono-label">Ziele</h3>
              <p
                className="mt-4 text-[color:var(--color-text-muted)]"
                style={{ fontSize: 'var(--text-sm)' }}
              >
                {site.goals}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
