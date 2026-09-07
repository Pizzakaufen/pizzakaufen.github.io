import { useEffect, useState } from 'react';
import { nav } from '../data/site';
import { internalLinks, type PageKey, identity } from '../config/site.config';
import { Logo } from './Logo';
import { CloseIcon, MenuIcon, MoonIcon, MotionIcon, SunIcon } from './Icons';
import { useActiveSection, useReducedMotion, useScrolled, type Theme } from '../hooks/usePreferences';

const navIds = nav.map((n) => n.id);
/** stabile Referenz, damit der Observer-Effekt nicht bei jedem Render neu läuft */
const noIds: string[] = [];

type Props = {
  theme: Theme;
  onToggleTheme: () => void;
  /** Auf welcher Seite die Navigation steht — bestimmt die Link-Ziele. */
  pageKey: PageKey;
};

export function Navbar({ theme, onToggleTheme, pageKey }: Props) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(16);
  const isHome = pageKey === 'home';
  const urls = internalLinks(pageKey);
  const active = useActiveSection(isHome ? navIds : noIds);
  const { reduced, toggleMotion } = useReducedMotion();

  // Scroll sperren, solange das Mobile-Menü offen ist + ESC schließt
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: open
          ? 'var(--color-nav-strong)'
          : scrolled
            ? 'var(--color-nav)'
            : 'transparent',
        backdropFilter: scrolled || open ? 'blur(16px) saturate(150%)' : 'none',
        WebkitBackdropFilter: scrolled || open ? 'blur(16px) saturate(150%)' : 'none',
        borderBottom: `1px solid ${scrolled || open ? 'var(--color-border)' : 'transparent'}`,
      }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[color:var(--accent-color)] focus:px-4 focus:py-2 focus:text-white"
      >
        Zum Inhalt springen
      </a>

      <div
        className="container-page flex items-center justify-between"
        style={{ height: 'var(--nav-height)' }}
      >
        <a
          href={urls.home}
          className="flex items-center gap-2.5 text-[color:var(--color-text)]"
          aria-label="Zur Startseite"
        >
          <Logo size={30} />
          <span className="font-medium tracking-tight" style={{ fontSize: 'var(--text-sm)' }}>
            {identity.fullName}
          </span>
        </a>

        {/* Desktop-Navigation */}
        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isActive = isHome && active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.id === 'home' ? urls.home : urls.section(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className="relative inline-block rounded-full px-3.5 py-2 transition-colors"
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                      backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <IconButton
            label={reduced ? 'Animationen aktivieren' : 'Animationen reduzieren'}
            onClick={toggleMotion}
            pressed={reduced}
          >
            <MotionIcon />
          </IconButton>
          <IconButton
            label={theme === 'dark' ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </IconButton>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-surface-2)] md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile-Menü */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <nav aria-label="Mobile Navigation" className="container-page py-4">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.id === 'home' ? urls.home : urls.section(item.id)}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[52px] items-center justify-between rounded-2xl px-4 text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-surface-2)]"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  {item.label}
                  <span className="mono-label">
                    {String(nav.indexOf(item) + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function IconButton({
  label,
  onClick,
  children,
  pressed,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  pressed?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      aria-pressed={pressed}
      className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--color-border)] transition-colors hover:bg-[color:var(--color-surface-2)]"
      style={{ color: pressed ? 'var(--accent-color)' : 'var(--color-text-muted)' }}
    >
      {children}
    </button>
  );
}
