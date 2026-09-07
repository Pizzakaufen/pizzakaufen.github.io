import { site, profileFacts } from '../data/site';
import { identity } from '../config/site.config';
import { ArrowIcon } from '../components/Icons';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* dezentes technisches Raster im Hintergrund */}
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="hero-glow pointer-events-none absolute -top-40 left-1/2 h-64 w-[36rem] max-w-[110vw] -translate-x-1/2 rounded-full"
        aria-hidden="true"
      />

      <div
        className="container-page relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        style={{ paddingTop: 'clamp(7rem, 16vh, 10rem)', paddingBottom: 'clamp(4rem, 10vh, 7rem)' }}
      >
        <div>
          <p className="mono-label animate-fade-up">{site.location}</p>

          <h1
            className="animate-fade-up mt-5"
            style={{ fontSize: 'var(--text-2xl)', animationDelay: '80ms' }}
          >
            Hallo, ich bin{' '}
            <span className="relative whitespace-nowrap" style={{ color: 'var(--accent-color)' }}>
              Hagen.
            </span>
          </h1>

          <p
            className="animate-fade-up mt-4 font-medium"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text)',
              animationDelay: '160ms',
            }}
          >
            {site.role}
          </p>

          <p
            className="animate-fade-up mt-3 text-[color:var(--color-text-muted)]"
            style={{ fontSize: 'var(--text-sm)', animationDelay: '200ms' }}
          >
            {identity.fullName} · online als {identity.nicknames.join(' und ')}
          </p>

          <p
            className="animate-fade-up mt-5 text-[color:var(--color-text-muted)]"
            style={{ maxWidth: '48ch', animationDelay: '240ms' }}
          >
            {site.intro}
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: '320ms' }}>
            <a href="#projects" className="btn btn-primary">
              Meine Projekte
              <ArrowIcon width={16} height={16} />
            </a>
            <a href="#about" className="btn btn-ghost">
              Über mich
            </a>
          </div>
        </div>

        {/* Kurzprofil als Datenpanel statt Stock-Foto */}
        <div
          className="animate-fade-up card p-1.5"
          style={{ animationDelay: '400ms' }}
          aria-label="Kurzprofil"
        >
          <div className="glass rounded-[0.9rem] p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <span className="mono-label">~/profil</span>
              <span className="flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: 'var(--accent-color)' }}
                  aria-hidden="true"
                />
                <span className="mono-label">aktiv</span>
              </span>
            </div>

            <dl className="mt-5 space-y-3.5">
              {profileFacts.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-[color:var(--color-border)] pb-3.5 last:border-0 last:pb-0"
                >
                  <dt className="mono-label">{row.label}</dt>
                  <dd className="text-right font-medium" style={{ fontSize: 'var(--text-sm)' }}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
