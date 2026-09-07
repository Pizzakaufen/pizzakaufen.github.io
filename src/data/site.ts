/* =====================================================================
   PERSÖNLICHE INHALTE
   Domain, Links und Seiten-Metadaten liegen zentral in
   src/config/site.config.ts — hier stehen Texte und Profilangaben.
   ===================================================================== */

import { birthDateFormatted, currentAge, handles, identity, links } from '../config/site.config';

export const site = {
  name: identity.fullName,
  firstName: identity.firstName,
  nicknames: identity.nicknames,
  role: identity.role,
  location: identity.location,
  /** Originaltext der Über-mich-Sektion */
  about:
    'Ich bin Hagen und beschäftige mich hauptsächlich mit Softwareentwicklung, Webentwicklung, FiveM und moderner Computertechnik. Ich probiere gerne neue Technologien aus und arbeite an eigenen Projekten.',
  intro:
    'Ich entwickle eigene Anwendungen, Scripts und technische Lösungen — von Software in C# über FiveM-Ressourcen in Lua bis zu Android- und Webprojekten.',
  /** persönliches Statement */
  statement:
    'Entwickler und Creator mit Schwerpunkt auf C#, Lua, FiveM und eigenen Softwareprojekten. Ich entwickle eigene Anwendungen, Scripts und technische Lösungen und beschäftige mich mit der Weiterentwicklung und Optimierung von Software und Systemen.',
  goals:
    'Eigene Software- und Webprojekte weiterentwickeln, neue technische Fähigkeiten aufbauen und professionelle eigene Projekte umsetzen.',
  experienceNote:
    'Ich entwickle seit mehreren Jahren; C# und Lua gehören zu den Technologien, mit denen ich am längsten arbeite.',
  links,
  handles,
} as const;

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Über mich' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projekte' },
  { id: 'contact', label: 'Kontakt' },
] as const;

/** Kurzprofil als Datenliste — erscheint im Hero und im Bereich „Über mich“. */
export const profileFacts = [
  { label: 'Name', value: identity.fullName },
  { label: 'Profilnamen', value: identity.nicknames.join(' · ') },
  { label: 'Alter', value: `${currentAge()} Jahre (${birthDateFormatted})` },
  { label: 'Ort', value: identity.location },
  { label: 'Sprachen', value: identity.languages.join(' · ') },
  { label: 'Schwerpunkt', value: 'C# · Lua · FiveM · Android' },
] as const;

/** Schwerpunkte im Bereich „Über mich“ */
export const focusAreas = [
  {
    title: 'Softwareentwicklung',
    text: 'Eigene Anwendungen und Tools in C# und .NET, dazu die Optimierung bestehender Software.',
  },
  {
    title: 'FiveM Development',
    text: 'Eigene Ressourcen, Scripts und Systeme in Lua für Roleplay-Server — auf Basis von ND_Core.',
  },
  {
    title: 'Android & Web',
    text: 'Die Dienstplan-App eDienstplanReload mit Jetpack Compose sowie Webprojekte mit React und Vite.',
  },
  {
    title: 'Technik & Systeme',
    text: 'PC-Hardware, Linux, Raspberry Pi, Serververwaltung und Systemoptimierung.',
  },
] as const;

/** Werdegang: Schule, Ausbildung, Praktikum — chronologisch. */
export type TimelineEntry = {
  title: string;
  place?: string;
  text: string;
  kind: 'Schule' | 'Ausbildung' | 'Praktikum' | 'Erfahrung';
};

export const timeline: TimelineEntry[] = [
  {
    kind: 'Schule',
    title: 'Förderschulabschluss',
    place: 'Dinglingerschule Dresden',
    text: 'Schulischer Abschluss in Dresden.',
  },
  {
    kind: 'Ausbildung',
    title: 'Berufsvorbereitungsjahr (BVB)',
    text: 'Berufsvorbereitung im Anschluss an die Schule.',
  },
  {
    kind: 'Ausbildung',
    title: 'BBW Leipzig',
    text: 'Weiterführende Ausbildung im Berufsbildungswerk Leipzig.',
  },
  {
    kind: 'Praktikum',
    title: 'Praktikum',
    place: 'Lloyd’s Café & Bar',
    text: 'Praktische Erfahrung unter anderem im Küchenbereich.',
  },
  {
    kind: 'Erfahrung',
    title: 'Praktische Erfahrung',
    text: 'Gesammelt im Rahmen des BBW und des Praktikums bei Lloyd’s Café & Bar.',
  },
];

/** Interessen und Hobbys */
export const interests = [
  'Softwareentwicklung',
  'FiveM & Roleplay',
  'eigene technische Projekte',
  'Computer & Hardware',
  'Android & Samsung',
  'Linux',
  'Webseiten',
  'Systemoptimierung',
] as const;
