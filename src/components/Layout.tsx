import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useTheme } from '../hooks/usePreferences';
import type { PageKey } from '../config/site.config';

/** Gemeinsames Gerüst aller Seiten: Header, Hauptinhalt, Footer. */
export function Layout({ pageKey, children }: { pageKey: PageKey; children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} pageKey={pageKey} />
      <main id="main">{children}</main>
      <Footer pageKey={pageKey} />
    </>
  );
}
