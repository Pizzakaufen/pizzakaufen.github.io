/* =====================================================================
   ZENTRALE PRODUCTION-KONFIGURATION
   Einzige Quelle für Domain, Identität, Links und Seiten-Metadaten.
   Wird sowohl vom Browser-Code als auch vom Build (Vite-SEO-Plugin für
   robots.txt, sitemap.xml, llms.txt und die <head>-Tags) gelesen.
   ===================================================================== */

/**
 * Production-Domain, OHNE Slash am Ende.
 * Aktuell die GitHub-Pages-Adresse des Benutzerkontos Pizzakaufen.
 * Eigene Domain später einfach hier eintragen.
 * Alternativ beim Build überschreibbar: SITE_URL=https://meine-domain.de npm run build
 * Steht hier "example.com", werden Canonical- und OG-URLs als noch nicht
 * konfiguriert behandelt und aus den strukturierten Daten herausgehalten.
 */
export const SITE_URL_FALLBACK = 'https://pizzakaufen.github.io';

/** Werte, die noch ersetzt werden müssen, erkennen wir an diesen Markern. */
const PLACEHOLDER_MARKERS = ['DEIN-', 'DEINE-', 'EINTRAGEN', 'example.com'];

export function isPlaceholder(value: string | undefined): boolean {
  if (!value) return true;
  return PLACEHOLDER_MARKERS.some((marker) => value.includes(marker));
}

export const siteUrl = (
  (typeof process !== 'undefined' && process.env && process.env.SITE_URL) ||
  SITE_URL_FALLBACK
).replace(/\/+$/, '');

export const absoluteUrl = (path: string): string =>
  `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

/* ---------------- IDENTITÄT ---------------- */
export const identity = {
  firstName: 'Hagen',
  lastName: 'Böttcher',
  fullName: 'Hagen Böttcher',
  /** Anzeigename, wird in Metadaten und strukturierten Daten verwendet */
  name: 'Hagen Böttcher',
  /** Kurzform für Logo, Footer und Navigation */
  siteName: 'Hagen Böttcher',
  /** Profilnamen, unter denen ich online unterwegs bin */
  nicknames: ['NanoPizza', 'DexPizza'],
  role: 'Developer & Creator',
  roleLong: 'Developer & Creator aus Dresden',
  birthDate: '2006-09-12',
  location: 'Dresden, Deutschland',
  locality: 'Dresden',
  region: 'Sachsen',
  country: 'DE',
  /** Sprachen, die ich spreche */
  languages: ['Deutsch', 'Englisch'],
  language: 'de',
  locale: 'de_DE',
} as const;

/** Alter aus dem Geburtsdatum — bleibt dadurch automatisch aktuell. */
export function currentAge(reference: Date = new Date()): number {
  const [year, month, day] = identity.birthDate.split('-').map(Number);
  let age = reference.getFullYear() - year;
  const monthDiff = reference.getMonth() + 1 - month;
  if (monthDiff < 0 || (monthDiff === 0 && reference.getDate() < day)) age -= 1;
  return age;
}

/**
 * Geburtsdatum in deutscher Schreibweise.
 * Bewusst ohne Date-Objekt formatiert, damit die Zeitzone des Besuchers
 * das Datum nicht um einen Tag verschiebt.
 */
export const birthDateFormatted = (() => {
  const [year, month, day] = identity.birthDate.split('-');
  return `${day}.${month}.${year}`;
})();

/* ---------------- LINKS UND KONTAKT ---------------- */
export const links = {
  github: 'https://github.com/Pizzakaufen',
  tiktok: 'https://www.tiktok.com/@PizzakaufenPro',
  email: 'mailto:hagen@con-meo.de',
} as const;

export const handles = {
  github: 'Pizzakaufen',
  /** Discord-Benutzername — Direktlinks brauchen eine numerische ID, die nicht vorliegt */
  discord: 'Pizzakaufen',
  tiktok: '@PizzakaufenPro',
  email: 'hagen@con-meo.de',
} as const;

/** Öffentliche Profile für schema.org sameAs — nur echte, verlinkbare Adressen. */
export const socialProfiles = (): string[] =>
  [links.github, links.tiktok].filter((url) => !isPlaceholder(url));

/* ---------------- SEITEN ---------------- */
export type PageKey = 'home' | 'imprint' | 'privacy' | 'notFound';

export type PageMeta = {
  key: PageKey;
  /** Pfad relativ zur Domain (Canonical-Struktur) */
  path: string;
  /** Datei im Build */
  file: string;
  title: string;
  description: string;
  /** H1 der Seite */
  heading: string;
  /** Breadcrumb-Beschriftung; leer = Startseite */
  breadcrumb?: string;
  indexable: boolean;
  /** Priorität in der sitemap.xml */
  priority?: number;
  changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly';
};

export const pages: PageMeta[] = [
  {
    key: 'home',
    path: '/',
    file: 'index.html',
    title: 'Hagen Böttcher — Developer & Creator aus Dresden',
    description:
      'Persönliche Website von Hagen Böttcher (NanoPizza) aus Dresden: Softwareentwicklung mit C# und .NET, FiveM-Ressourcen mit Lua und ND_Core, die Android-App eDienstplanReload sowie Webprojekte mit React und Vite.',
    heading: 'Hallo, ich bin Hagen.',
    indexable: true,
    priority: 1.0,
    changefreq: 'monthly',
  },
  {
    key: 'imprint',
    path: '/impressum/',
    file: 'impressum/index.html',
    title: 'Impressum | Hagen Böttcher',
    description:
      'Impressum und Anbieterkennzeichnung der persönlichen Website von Hagen Böttcher: verantwortliche Person, Kontaktmöglichkeit und Hinweise zur Haftung für Inhalte und Links.',
    heading: 'Impressum',
    breadcrumb: 'Impressum',
    indexable: true,
    priority: 0.3,
    changefreq: 'yearly',
  },
  {
    key: 'privacy',
    path: '/datenschutz/',
    file: 'datenschutz/index.html',
    title: 'Datenschutz | Hagen Böttcher',
    description:
      'Datenschutzhinweise der Website von Hagen Böttcher: welche Daten beim Aufruf verarbeitet werden, warum kein Tracking eingesetzt wird und welche Rechte du nach DSGVO hast.',
    heading: 'Datenschutzerklärung',
    breadcrumb: 'Datenschutz',
    indexable: true,
    priority: 0.3,
    changefreq: 'yearly',
  },
  {
    key: 'notFound',
    path: '/404.html',
    file: '404.html',
    title: 'Seite nicht gefunden | Hagen Böttcher',
    description:
      'Diese Seite existiert nicht oder wurde verschoben. Von hier geht es zurück zur Startseite und zu den Bereichen Über mich, Skills, Projekte und Kontakt.',
    heading: 'Seite nicht gefunden',
    breadcrumb: 'Seite nicht gefunden',
    indexable: false,
  },
];

/**
 * Interne Links werden relativ aufgebaut, damit die Seite sowohl unter einer
 * eigenen Domain als auch in einem Unterordner (z. B. Preview-Hosting)
 * funktioniert. `prefix` ist der Weg vom aktuellen Dokument zum Wurzelordner.
 */
export const linkPrefix = (key: PageKey): string =>
  key === 'imprint' || key === 'privacy' ? '../' : '';

export const internalLinks = (key: PageKey) => {
  // Die 404-Seite wird vom Server unter beliebigen URLs ausgeliefert.
  // Relative Links wären dort falsch, deshalb absolute Pfade ab Wurzel.
  if (key === 'notFound') {
    return {
      home: '/',
      homePage: '/',
      imprint: '/impressum/',
      privacy: '/datenschutz/',
      section: (id: string) => `/#${id}`,
    };
  }

  const prefix = linkPrefix(key);
  return {
    home: prefix === '' ? '#home' : prefix,
    homePage: prefix === '' ? './' : prefix,
    imprint: `${prefix}impressum/`,
    privacy: `${prefix}datenschutz/`,
    section: (id: string) => (prefix === '' ? `#${id}` : `${prefix}#${id}`),
  };
};

export const getPage = (key: PageKey): PageMeta => {
  const page = pages.find((p) => p.key === key);
  if (!page) throw new Error(`Unbekannte Seite: ${key}`);
  return page;
};

/** Social-Share-Bild (liegt in public/) */
export const shareImage = {
  path: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Hagen Böttcher — Developer & Creator aus Dresden',
  type: 'image/png',
} as const;
