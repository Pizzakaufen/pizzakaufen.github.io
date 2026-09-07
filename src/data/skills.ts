/* Skills — neue Einträge einfach hier ergänzen. */

export type SkillGroup = {
  group: string;
  /** kurze Einordnung der Gruppe */
  note?: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: 'Programmiersprachen',
    note: 'C# und Lua nutze ich am längsten',
    items: ['C#', 'Lua', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    group: 'Frameworks',
    items: ['.NET', 'React', 'Vite', 'Jetpack Compose', 'ND_Core'],
  },
  {
    group: 'Werkzeuge',
    items: [
      'Git',
      'GitHub',
      'Visual Studio',
      'txAdmin',
      'Pterodactyl',
      'OpenCore',
      'Linux-Terminal',
    ],
  },
  {
    group: 'Plattformen & Systeme',
    items: ['Windows', 'Linux', 'Android', 'FiveM', 'FXServer', 'Raspberry Pi', 'macOS'],
  },
  {
    group: 'Sprachen',
    note: 'gesprochen',
    items: ['Deutsch', 'Englisch'],
  },
];
