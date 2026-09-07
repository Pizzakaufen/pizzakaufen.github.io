/* =====================================================================
   PROJEKTE
   Neues Projekt = einfach ein weiteres Objekt in dieses Array einfügen.
   Layout passt sich automatisch an.
   ===================================================================== */

export type ProjectStatus =
  | 'In Weiterentwicklung'
  | 'Laufende Entwicklung'
  | 'Aktiv'
  | 'Abgeschlossen'
  | 'Geplant';

export type Project = {
  name: string;
  description: string;
  /** weiterführende Details, Stichpunkte */
  details?: string[];
  tech: string[];
  status: ProjectStatus;
  /** optional: GitHub-Repo-Link */
  github?: string;
  /** optional: Live-Demo-Link */
  demo?: string;
  /** hebt das Projekt als großes Karten-Format hervor */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'eDienstplanReload',
    description:
      'Persönliche Weiterentwicklung einer Dienstplan-App für die Verwaltung und Darstellung von Arbeitszeiten und Dienstplänen — mit einem modernen, an One UI orientierten Android-Design.',
    details: [
      'Oberfläche orientiert an One UI 8.5 und Android 16',
      'Dark Mode, Light Mode und eigene Themes',
      'Lokale Speicherung offline nutzbar',
      'Server- und API-Komponenten aus früheren Versionen',
      'Weiterentwicklung der Dienstplan- und Benutzerfunktionen',
    ],
    tech: ['Android', 'Jetpack Compose', 'Material 3', 'Offline-Speicherung', 'API'],
    status: 'In Weiterentwicklung',
    // PLATZHALTER: Repo-Link eintragen, sobald das Repository öffentlich ist
    featured: true,
  },
  {
    name: 'FiveM Development',
    description:
      'Entwicklung eigener FiveM-Ressourcen, Scripts und Systeme für Roleplay-Server. Schwerpunkt auf Lua, Server- und Client-Systemen, UI und Framework-Integration.',
    details: [
      'Eigene HUDs und NUI-Oberflächen',
      'Taser-System und weitere Gameplay-Systeme',
      'Serverfunktionen und Server-Client-Logik',
      'Framework-Integration mit ND_Core (kein ESX, kein QBCore)',
    ],
    tech: ['Lua', 'C#', 'FiveM', 'FXServer', 'ND_Core', 'NUI', 'HTML', 'CSS', 'JavaScript'],
    status: 'Laufende Entwicklung',
    featured: true,
  },
  {
    name: 'Diese Website',
    description:
      'Meine persönliche Website: statisch gebaut, ohne Tracking, mit Dark und Light Mode und einer zentralen Konfiguration für Inhalte und Metadaten.',
    details: [
      'React mit TypeScript, gebaut mit Vite',
      'Tailwind CSS mit eigenen Design-Tokens',
      'Eigene Seiten für Impressum, Datenschutz und 404',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    status: 'Aktiv',
  },
  {
    name: 'Weitere Arbeiten',
    description:
      'Neben den Hauptprojekten arbeite ich an kleineren Dingen aus denselben Bereichen: frühere FiveM-Ressourcen, Android-Projekte, Webprojekte, Serverprojekte und Systemoptimierungen.',
    details: [
      'Serververwaltung mit txAdmin und Pterodactyl',
      'Linux- und Raspberry-Pi-Setups',
      'macOS-Installationen mit OpenCore',
    ],
    tech: ['C#', '.NET', 'Lua', 'Linux', 'Raspberry Pi'],
    status: 'Laufende Entwicklung',
  },
];
