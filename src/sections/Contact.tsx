import { site } from '../data/site';
import { DiscordIcon, GitHubIcon, MailIcon, TikTokIcon } from '../components/Icons';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

type Channel = {
  label: string;
  value: string;
  /** ohne href wird der Eintrag nur angezeigt, nicht verlinkt */
  href?: string;
  hint?: string;
  Icon: typeof GitHubIcon;
  external?: boolean;
};

const channels: Channel[] = [
  {
    label: 'GitHub',
    value: site.handles.github,
    href: site.links.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: 'E-Mail',
    value: site.handles.email,
    href: site.links.email,
    Icon: MailIcon,
  },
  {
    label: 'Discord',
    value: site.handles.discord,
    hint: 'Benutzername',
    Icon: DiscordIcon,
  },
  {
    label: 'TikTok',
    value: site.handles.tiktok,
    href: site.links.tiktok,
    Icon: TikTokIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          label="05 — Kontakt"
          title="Kontakt"
          text="Du möchtest mich kontaktieren oder mehr über meine Projekte erfahren?"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, hint, Icon, external }, i) => {
            const inner = (
              <>
                <span
                  className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--color-border)] transition-colors group-hover:border-transparent"
                  style={{ color: 'var(--accent-color)' }}
                >
                  <Icon width={17} height={17} />
                </span>
                <span className="mt-5">
                  <span className="block font-medium" style={{ fontSize: 'var(--text-base)' }}>
                    {label}
                  </span>
                  <span
                    className="mt-0.5 block break-words font-mono text-[color:var(--color-text-muted)]"
                    style={{ fontSize: 'var(--text-xs)' }}
                  >
                    {value}
                    {hint ? (
                      <span className="text-[color:var(--color-text-faint)]"> · {hint}</span>
                    ) : null}
                  </span>
                </span>
              </>
            );

            const cardClass = 'card group flex h-full min-h-[104px] flex-col justify-between p-5 sm:p-6';

            return (
              <Reveal key={label} delay={i * 80}>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer me' } : {})}
                    className={cardClass}
                    aria-label={`${label}: ${value}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass} aria-label={`${label}: ${value}`}>
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
