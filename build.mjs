/* Baut die Website:
   1. erzeugt index.html, 404.html, impressum/, datenschutz/, sitemap.xml und llms.txt
      aus content.mjs direkt im Projektordner (so funktioniert die Seite auch ohne Build-Server),
   2. kopiert alles Auslieferbare nach dist/ (wird von GitHub Actions veröffentlicht).
   Aufruf: npm run build */

import { cp, mkdir, rm, writeFile, access } from 'node:fs/promises';
import { renderPage, pages, ageOn } from './render.mjs';
import * as c from './content.mjs';

const root = new URL('./', import.meta.url);
const dist = new URL('./dist/', root);
const exists = (u) => access(u).then(() => true, () => false);

// 1. Seiten erzeugen
for (const [key, page] of Object.entries(pages)) {
  const target = new URL(page.file, root);
  await mkdir(new URL('./', target), { recursive: true });
  await writeFile(target, renderPage(key), 'utf8');
}

const today = new Date().toISOString().slice(0, 10);
const sitemapEntries = Object.values(pages)
  .filter((p) => !p.noindex)
  .map((p) => `  <url>\n    <loc>${c.siteUrl}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.path === '/' ? '1.0' : '0.3'}</priority>\n  </url>`)
  .join('\n');
await writeFile(new URL('sitemap.xml', root), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`, 'utf8');

const p = c.person;
const llms = `# ${p.name}

> Persönliche Website von ${p.name} (${p.handle}) aus ${p.location}. ${p.role} mit Schwerpunkt auf C#, Lua, FiveM, Android und Webentwicklung.

## Profil
- [Startseite](${c.siteUrl}/): Portfolio von ${p.name}.
- [Über mich](${c.siteUrl}/#about): Profil, Werdegang, Interessen und Ziele.
- Alter: ${ageOn()} Jahre (Stand ${today})
- Standort: ${p.location}
- Sprachen: ${p.languages.join(', ')}

## Skills
${c.skillGroups.map(([g, , items]) => `- ${g}: ${items.join(', ')}`).join('\n')}

## Projekte
${c.projects.map((pr) => `- ${pr.name} (${pr.status}): ${pr.description}${pr.github ? ` Code: ${pr.github}` : ''}`).join('\n')}

## Kontakt
- [GitHub](${c.links.github})
- [TikTok](${c.links.tiktok})
- [E-Mail](mailto:${c.links.email})
- Discord: ${c.links.discord}

## Rechtliches
- [Impressum](${c.siteUrl}/impressum/)
- [Datenschutz](${c.siteUrl}/datenschutz/)
`;
await writeFile(new URL('llms.txt', root), llms, 'utf8');

// 2. dist/ befüllen
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
const files = ['index.html', '404.html', 'app.js', 'style.css', 'robots.txt', 'sitemap.xml', 'llms.txt', 'site.webmanifest',
  'favicon.ico', 'favicon.svg', 'favicon-192.png', 'favicon-512.png', 'apple-touch-icon.png', 'og-image.png', '.nojekyll'];
for (const f of files) {
  if (await exists(new URL(f, root))) await cp(new URL(f, root), new URL(f, dist));
}
for (const dir of ['impressum', 'datenschutz', 'assets']) {
  if (await exists(new URL(`${dir}/`, root))) await cp(new URL(`${dir}/`, root), new URL(`${dir}/`, dist), { recursive: true });
}

console.log(`Fertig: ${Object.keys(pages).length} Seiten erzeugt, dist/ bereit.`);
