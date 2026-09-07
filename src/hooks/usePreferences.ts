import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

/** localStorage kann in Sandbox-Umgebungen blockiert sein — daher abgesichert. */
function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* ignorieren */
  }
}

/** Dark Mode ist Standard; Light Mode optional per Toggle. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = safeGet('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    root.style.colorScheme = theme;
    safeSet('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  );

  return { theme, toggleTheme };
}

/** Manueller Schalter, um Animationen zu reduzieren (zusätzlich zu prefers-reduced-motion). */
export function useReducedMotion() {
  const [reduced, setReduced] = useState<boolean>(() => safeGet('motion') === 'reduced');

  useEffect(() => {
    document.documentElement.dataset.motion = reduced ? 'reduced' : 'full';
    safeSet('motion', reduced ? 'reduced' : 'full');
  }, [reduced]);

  const toggleMotion = useCallback(() => setReduced((r) => !r), []);
  return { reduced, toggleMotion };
}

/** Markiert den aktiven Navigationspunkt beim Scrollen. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/** true, sobald die Seite ein Stück gescrollt wurde (für Nav-Blur). */
export function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return scrolled;
}
