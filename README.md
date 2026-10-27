# Portfolio — Hagen Böttcher

Persönliche Website unter **https://pizzakaufen.github.io**. Statisches HTML, CSS und etwas
Vanilla-JavaScript — keine Frameworks, keine Abhängigkeiten, kein Tracking.

## Inhalte ändern

Alle Texte, Projekte, Skills und Links stehen in **`content.mjs`**. Danach:

```bash
npm run build      # erzeugt index.html, 404.html, impressum/, datenschutz/, sitemap.xml, llms.txt
npm run serve      # lokale Vorschau
```

Die erzeugten HTML-Dateien werden mit committet. Dadurch funktioniert die Seite sowohl,
wenn GitHub Pages direkt aus dem Branch veröffentlicht, als auch über den Workflow
`.github/workflows/deploy.yml` (der baut beim Push auf `main` selbst und lädt `dist/` hoch).

| Datei          | Inhalt                                                     |
| -------------- | ---------------------------------------------------------- |
| `content.mjs`  | **alle Inhalte** — hier arbeitest du                       |
| `render.mjs`   | HTML-Vorlagen (Kopf, Navigation, Abschnitte, Footer)       |
| `style.css`    | Design; Farben oben als Variablen, Hell/Dunkel             |
| `app.js`       | Farbschema-Umschalter, Menü, Animationen, Discord-Kopieren, GitHub-Repos |
| `build.mjs`    | Build-Skript                                               |

## Noch offen

| Was                     | Wo in `content.mjs`              |
| ----------------------- | -------------------------------- |
| Anschrift fürs Impressum| `imprint.street`, `imprint.zipCity` (solange `[ … ]` drinsteht, zeigt die Seite einen Hinweis) |
| Profilbild              | Bild nach `assets/` legen, `person.photo: 'assets/profil.jpg'` |
| Screenshots             | bei einem Projekt `images: [{ src: 'assets/x.jpg', alt: '…' }]` |
| Repo-/Demo-Links        | bei einem Projekt `github:` bzw. `demo:` |

Der Bereich „Auf GitHub“ lädt deine öffentlichen Repositories automatisch (Forks und
Archiviertes werden ausgeblendet). Eine gute Beschreibung im jeweiligen Repo erscheint dort direkt.

## Hinweis Schriftarten

Satoshi (Fontshare) und JetBrains Mono (Google Fonts) werden extern geladen; das steht in der
Datenschutzerklärung. Datenschutzfreundlicher wäre, die `.woff2`-Dateien in `assets/fonts/`
selbst zu hosten und die beiden `<link>`-Zeilen in `render.mjs` durch `@font-face` in `style.css`
zu ersetzen.
