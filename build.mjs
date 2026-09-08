import { cp, mkdir, rm } from 'node:fs/promises';

const root = new URL('.', import.meta.url);
const dist = new URL('./dist/', root);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of ['index.html', '404.html', 'app.js', 'style.css', 'robots.txt', 'sitemap.xml', 'llms.txt', 'site.webmanifest']) {
  await cp(new URL(`./${file}`, root), new URL(`./${file}`, dist), { force: true });
}

for (const directory of ['impressum', 'datenschutz']) {
  await cp(new URL(`./${directory}/`, root), new URL(`./${directory}/`, dist), {
    recursive: true,
    force: true,
  });
}

await cp(new URL('./public/', root), new URL('./', dist), { recursive: true, force: true });

console.log('Static site copied to dist/.');