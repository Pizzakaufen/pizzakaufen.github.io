# Portfolio — Hagen Böttcher

Persönliche Website: Startseite mit allen Abschnitten, Impressum, Datenschutz und eigene
404-Seite. Statisch gebaut, kein Backend, kein Tracking.

Stack: HTML, CSS und Vanilla JavaScript. Keine Build-Tools und keine Framework-Abhängigkeiten.

## Betrieb

Die Website ist vollständig statisch und benötigt weder Vite noch React oder TypeScript. `npm run build`
erzeugt den auslieferbaren Ordner `dist/`; dieser kann auf einen beliebigen Static-Host gelegt werden.

## Was noch eingetragen werden muss

Persönliche Daten (Name, Profilnamen, Alter, Ort, Werdegang, Interessen, Ziele, Skills,
Projekte, GitHub, Discord, E-Mail, TikTok) sind vollständig eingetragen — zentral in
`src/config/site.config.ts` und `src/data/`. Offen sind nur noch diese Angaben, die nicht
vorliegen und deshalb nicht geraten werden:

| Wert                        | Datei                       | Marker                     |
| --------------------------- | --------------------------- | -------------------------- |
| Repo-Links der Projekte     | `src/data/projects.ts`      | `PLATZHALTER`              |
| Anschrift (Impressum)       | `src/pages/Imprint.tsx`     | `[STRASSE …]`, `[PLZ …]`   |
| Hoster, Anschrift (Datenschutz) | `src/pages/Privacy.tsx` | `[HOSTER EINTRAGEN]` u. a. |
| Profilbild (optional)       | `src/assets/`               | noch nicht vorhanden       |

## Wo die persönlichen Daten liegen

| Inhalt                                        | Datei                       |
| --------------------------------------------- | --------------------------- |
| Name, Profilnamen, Geburtsdatum, Ort, Sprachen, Links | `src/config/site.config.ts` |
| Statement, Ziele, Kurzprofil, Werdegang, Interessen   | `src/data/site.ts`          |
| Skills nach Gruppen                           | `src/data/skills.ts`        |
| Projekte inklusive Details und Status         | `src/data/projects.ts`      |

Das Alter wird aus dem Geburtsdatum berechnet und bleibt dadurch automatisch aktuell.

Die Domain kann alternativ beim Build gesetzt werden, ohne die Datei zu ändern:

```bash
Die Domain ist in den statischen HTML-Metadaten hinterlegt.
```

Die Seite wird ohne Build-Schritt veröffentlicht.

## Veröffentlichen über GitHub Pages

Der Workflow `.github/workflows/deploy.yml` baut das Projekt und veröffentlicht den Ordner
Die GitHub-Pages-Bereitstellung lädt den Repository-Root direkt hoch. Eine einmalige Einrichtung:

1. Neues öffentliches Repository mit dem Namen `pizzakaufen.github.io` anlegen
   (Benutzername + `.github.io`, damit die Seite direkt unter der Wurzel liegt).
2. Dieses Projekt in das Repository pushen, Branch `main`:

   ```bash
   git remote add origin https://github.com/Pizzakaufen/pizzakaufen.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. Im Repository unter **Settings → Pages → Build and deployment → Source** die Option
   **GitHub Actions** wählen (nicht "Deploy from a branch" — der Build läuft im Workflow).
4. Der Workflow startet bei jedem Push auf `main` und lässt sich unter **Actions** auch
   manuell auslösen. Nach wenigen Minuten ist die Seite unter
   <https://pizzakaufen.github.io> erreichbar.

Hinweise:

- `SITE_URL` ist im Workflow auf `https://pizzakaufen.github.io` gesetzt und steuert
  Canonical-Tags, Open Graph, `sitemap.xml` und `llms.txt`.
- `public/.nojekyll` verhindert, dass GitHub Pages die Dateien durch Jekyll schickt.
- Eigene Domain: Domain unter **Settings → Pages → Custom domain** eintragen, danach
  `SITE_URL` im Workflow und `SITE_URL_FALLBACK` in `src/config/site.config.ts` anpassen.
- Liegt die Seite in einem Unterordner (z. B. `github.io/website/`), funktionieren die
  Asset-Pfade weiterhin, weil `base: './'` gesetzt ist; `SITE_URL` muss dann aber die
  vollständige Adresse inklusive Unterordner enthalten.

## Aufbau

```
index.html                 Startseite
impressum/index.html       Impressum
datenschutz/index.html     Datenschutz
404.html                   Fehlerseite
scripts/vite-plugin-seo.ts Erzeugt Head-Tags, robots.txt, sitemap.xml, llms.txt
src/config/site.config.ts  Domain, Seiten-Metadaten, Links (zentrale Konfiguration)
src/entries/               je Seite ein Einstiegspunkt
src/pages/                 Home, Imprint, Privacy, NotFound
src/components/            Layout, Navbar, Footer, Breadcrumbs, LegalPage, Karten, Icons
src/sections/              Hero, About, Skills, Projects, Github, Contact
src/data/                  Inhalte: Texte, Skills, Projekte
src/styles/index.css       Design-Tokens (u. a. --accent-color) und Komponenten-Klassen
public/                    Favicons, Web-Manifest, Social-Bild
```

Jede Seite ist eine eigene HTML-Datei mit eigenem Title, eigener Meta-Description,
Canonical, Open-Graph-Tags und JSON-LD. Damit sind die Metadaten auch ohne JavaScript
im Quelltext vorhanden.

## Farben und Inhalte anpassen

- Akzentfarbe: `--accent-color` in `src/styles/index.css` (Light Mode: Block `.light`)
- Neues Projekt: Eintrag in `src/data/projects.ts` ergänzen
- Neue Skills: `src/data/skills.ts`
- Neue Seite: Eintrag in `pages` in `src/config/site.config.ts`, HTML-Datei anlegen,
  Einstiegspunkt in `src/entries/` und Route in `vite.config.ts` ergänzen

## Hosting

Den Projektordner auf einen beliebigen Static-Host legen. Zwei Punkte beim Server einstellen:

- unbekannte URLs auf `404.html` mit Statuscode 404 ausliefern
  (Netlify: `/* /404.html 404`, Nginx: `error_page 404 /404.html;`)
- `/impressum` und `/datenschutz` auf die jeweiligen Ordner umleiten, falls der Host
  nicht automatisch `index.html` aus Ordnern lädt

## Datenschutz-Hinweis

Satoshi wird von Fontshare und JetBrains Mono von Google Fonts geladen. Wer keine externen
Requests möchte, kann die Schriften herunterladen, in `public/fonts/` legen und die beiden
`<link rel="stylesheet">`-Zeilen in den HTML-Dateien durch eigene `@font-face`-Regeln ersetzen.
