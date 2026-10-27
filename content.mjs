/* =====================================================================
   ALLE INHALTE DER WEBSITE
   Hier änderst du Texte, Projekte, Skills und Links.
   Danach `npm run build` ausführen (oder einfach pushen — GitHub baut mit).

   Felder mit `null` sind noch leer. Sobald du etwas einträgst, erscheint es
   automatisch auf der Seite (z. B. Profilbild, Screenshots, Repo-Links).
   ===================================================================== */

export const siteUrl = 'https://pizzakaufen.github.io';

export const person = {
  name: 'Hagen Böttcher',
  firstName: 'Hagen',
  handle: 'Pizzakaufen',
  nicknames: ['NanoPizza', 'DexPizza'],
  role: 'Developer & Creator',
  location: 'Dresden, Deutschland',
  birthDate: '2006-09-12', // Alter wird daraus automatisch berechnet
  languages: ['Deutsch', 'Englisch'],
  focus: 'C# · Lua · FiveM · Android',

  /** Profilbild: Datei in den Ordner `assets/` legen und hier den Namen eintragen,
   *  z. B. 'assets/profil.jpg'. Ohne Bild wird das H-Monogramm gezeigt. */
  photo: null,
};

export const texts = {
  heroLead:
    'Ich entwickle eigene Software, Systeme und technische Projekte — von Anwendungen in C# über FiveM-Ressourcen in Lua bis zu Android- und Webprojekten.',
  about:
    'Ich bin Hagen und beschäftige mich hauptsächlich mit Softwareentwicklung, Webentwicklung, FiveM und moderner Computertechnik. Ich probiere gerne neue Technologien aus und arbeite an eigenen Projekten.',
  statement:
    'Mein Schwerpunkt liegt auf praktischen Lösungen: eigene Anwendungen, Scripts und technische Systeme, die ich von der Idee bis zur Weiterentwicklung selbst begleite.',
  experience:
    'Ich entwickle seit mehreren Jahren; C# und Lua gehören zu den Technologien, mit denen ich am längsten arbeite.',
  motivation:
    'Mich interessieren technische Themen besonders dann, wenn daraus etwas Eigenes entsteht: eine Anwendung, ein System, ein Script oder eine Website, die im Alltag funktioniert.',
  goals:
    'Eigene Software- und Webprojekte weiterentwickeln, neue technische Fähigkeiten aufbauen und professionelle eigene Projekte umsetzen.',
};

export const links = {
  github: 'https://github.com/Pizzakaufen',
  tiktok: 'https://www.tiktok.com/@PizzakaufenPro',
  email: 'hagen@con-meo.de',
  discord: 'Pizzakaufen', // Benutzername — wird zum Kopieren angeboten
};

export const focusAreas = [
  ['Softwareentwicklung', 'Eigene Anwendungen und Tools in C# und .NET, dazu die Optimierung bestehender Software.'],
  ['FiveM Development', 'Eigene Ressourcen, Scripts und Systeme in Lua für Roleplay-Server auf Basis von ND_Core.'],
  ['Android & Web', 'Die Dienstplan-App eDienstplanReload mit Jetpack Compose sowie Webprojekte.'],
  ['Technik & Systeme', 'PC-Hardware, Linux, Raspberry Pi, Serververwaltung und Systemoptimierung.'],
];

export const skillGroups = [
  ['Programmiersprachen', 'C# und Lua nutze ich am längsten', ['C#', 'Lua', 'JavaScript', 'TypeScript', 'HTML', 'CSS']],
  ['Frameworks', null, ['.NET', 'React', 'Vite', 'Jetpack Compose', 'Material 3', 'ND_Core']],
  ['Plattformen', null, ['Windows', 'Linux', 'Android', 'FiveM', 'FXServer', 'Raspberry Pi', 'macOS']],
  ['Werkzeuge', null, ['Git', 'GitHub', 'Visual Studio', 'txAdmin', 'Pterodactyl', 'OpenCore', 'Linux-Terminal']],
  ['Sprachen', 'gesprochen', ['Deutsch', 'Englisch']],
];

/** Werdegang — chronologisch, oben das Älteste. */
export const timeline = [
  ['Schule', 'Förderschulabschluss', 'Dinglingerschule Dresden', 'Schulischer Abschluss in Dresden.'],
  ['BVB', 'Berufsvorbereitungsjahr', null, 'Berufsvorbereitung im Anschluss an die Schule.'],
  ['Ausbildung', 'BBW Leipzig', null, 'Weiterführende Ausbildung im Berufsbildungswerk Leipzig.'],
  ['Praktikum', 'Praktische Erfahrungen', 'Lloyd’s Café & Bar', 'Praktische Erfahrung unter anderem im Küchenbereich.'],
  ['Heute', 'Eigene Softwareentwicklung', null, 'Eigene Anwendungen, Scripts, Systeme und technische Projekte.'],
];

export const interests = ['FiveM & Roleplay', 'eigene technische Projekte', 'Computer & Hardware', 'Android & Samsung', 'Linux', 'Webseiten', 'Systemoptimierung'];

/**
 * Projekte. Optionale Felder:
 *   github: 'https://github.com/Pizzakaufen/...'   → Button „Code ansehen“
 *   demo:   'https://...'                           → Button „Live ansehen“
 *   images: [{ src: 'assets/projekt-1.jpg', alt: 'Was man sieht' }]  → Screenshots
 */
export const projects = [
  {
    id: 'edienstplanreload',
    name: 'eDienstplanReload',
    eyebrow: 'Android · App',
    status: 'In Weiterentwicklung',
    featured: true,
    description:
      'Persönliche Weiterentwicklung einer Dienstplan-App für die Verwaltung und Darstellung von Arbeitszeiten und Dienstplänen — mit einem modernen, an One UI orientierten Android-Design.',
    goal: 'Dienstpläne und Arbeitszeiten übersichtlich, modern und auch offline nutzbar darstellen.',
    details: [
      'Oberfläche orientiert an One UI 8.5 und Android 16',
      'Dark Mode, Light Mode und eigene Themes',
      'Lokale Speicherung, offline nutzbar',
      'Server- und API-Komponenten aus früheren Versionen',
      'Weiterentwicklung der Dienstplan- und Benutzerfunktionen',
    ],
    tech: ['Android', 'Jetpack Compose', 'Material 3', 'Offline-Speicherung', 'API'],
    github: null,
    demo: null,
    images: [],
  },
  {
    id: 'fivem-development',
    name: 'FiveM Development',
    eyebrow: 'FiveM · Lua · Server',
    status: 'Laufende Entwicklung',
    featured: true,
    description:
      'Eigene FiveM-Ressourcen, Scripts und Systeme für Roleplay-Server. Schwerpunkt auf Lua, Server- und Client-Systemen, UI und Framework-Integration.',
    goal: 'Eigene technische Systeme für Roleplay-Server entwickeln und in der Praxis weiter verbessern.',
    details: [
      'Eigene Scripts und Ressourcen',
      'HUDs und NUI-Oberflächen',
      'Gameplay-Systeme, unter anderem ein Taser-System',
      'Serverfunktionen und Server-Client-Logik',
      'Framework-Integration mit ND_Core — kein ESX oder QBCore',
    ],
    tech: ['Lua', 'C#', 'FiveM', 'FXServer', 'ND_Core', 'NUI', 'HTML', 'CSS', 'JavaScript'],
    github: null,
    demo: null,
    images: [],
  },
  {
    id: 'website',
    name: 'Diese Website',
    eyebrow: 'Web · Portfolio',
    status: 'Aktiv',
    description:
      'Meine persönliche Website: statisch gebaut, ohne Tracking, mit hellem, dunklem und System-Farbschema.',
    goal: 'Eine schnelle, persönliche und leicht pflegbare Präsentation meiner Arbeit.',
    details: ['Semantisches HTML und responsives CSS', 'Vanilla JavaScript ohne Abhängigkeiten', 'Eigene Seiten für Impressum, Datenschutz und 404'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Pizzakaufen/pizzakaufen.github.io',
    demo: null,
    images: [],
  },
  {
    id: 'weitere-arbeiten',
    name: 'Weitere Arbeiten',
    eyebrow: 'Systeme · Experimente',
    status: 'Laufende Entwicklung',
    description:
      'Kleinere Arbeiten aus denselben Bereichen: frühere FiveM-Ressourcen, Android-Projekte, Webprojekte, Serverprojekte und Systemoptimierungen.',
    goal: 'Technische Ideen ausprobieren, Erfahrungen sammeln und bestehende Systeme verbessern.',
    details: ['Serververwaltung mit txAdmin und Pterodactyl', 'Linux- und Raspberry-Pi-Setups', 'macOS-Installationen mit OpenCore'],
    tech: ['C#', '.NET', 'Lua', 'Linux', 'Raspberry Pi'],
    github: null,
    demo: null,
    images: [],
  },
];

/** Impressum — Pflichtangaben. Solange hier [ ... ] steht, zeigt die Seite einen Hinweis. */
export const imprint = {
  street: '[STRASSE UND HAUSNUMMER]',
  zipCity: '[PLZ] Dresden',
  country: 'Deutschland',
};

/** Hosting — für die Datenschutzerklärung. */
export const hosting = {
  name: 'GitHub Pages',
  company: 'GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA',
  privacyUrl: 'https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement',
};
