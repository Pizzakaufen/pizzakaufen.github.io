/* Templates — erzeugen aus content.mjs fertiges HTML. Normalerweise musst du
   hier nichts ändern; Inhalte stehen in content.mjs. */

import * as c from './content.mjs';

const { person, texts, links } = c;

export const esc = (v) =>
  String(v).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);

export function ageOn(date = new Date()) {
  const [y, m, d] = person.birthDate.split('-').map(Number);
  let age = date.getFullYear() - y;
  const md = date.getMonth() + 1 - m;
  if (md < 0 || (md === 0 && date.getDate() < d)) age -= 1;
  return age;
}
const birthDateDe = person.birthDate.split('-').reverse().join('.');
const isPlaceholder = (v) => !v || /\[[^\]]+\]/.test(v);

/* ---------------- Icons (inline SVG, erben die Textfarbe) ---------------- */
const svg = (body, size = 18) =>
  `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
export const icon = {
  arrow: (s) => svg('<path d="M5 12h14M13 6l6 6-6 6"/>', s),
  external: (s) => svg('<path d="M7 17 17 7M8 7h9v9"/>', s),
  github: (s) => svg('<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>', s),
  tiktok: (s) => svg('<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2.2 4.4 5 4.6"/>', s),
  mail: (s) => svg('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>', s),
  discord: (s) => svg('<path d="M8.5 7.5c2.3-.7 4.7-.7 7 0M8 16.5c2.6.9 5.4.9 8 0"/><path d="M15.5 17.5 17 20c2-.6 3.6-1.6 5-3 .3-3.8-.6-7.4-2.6-10.6A15 15 0 0 0 16 5l-.6 1.3M8.5 17.5 7 20c-2-.6-3.6-1.6-5-3-.3-3.8.6-7.4 2.6-10.6A15 15 0 0 1 8 5l.6 1.3"/><circle cx="9" cy="12.5" r="1.2"/><circle cx="15" cy="12.5" r="1.2"/>', s),
  copy: (s) => svg('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/>', s),
  sun: (s) => svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>', s),
  moon: (s) => svg('<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>', s),
  system: (s) => svg('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>', s),
  menu: (s) => svg('<path d="M4 7h16M4 12h16M4 17h16"/>', s),
  close: (s) => svg('<path d="M6 6l12 12M18 6 6 18"/>', s),
  code: (s) => svg('<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>', s),
  star: (s) => svg('<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9Z"/>', s),
};

/* ---------------- Seiten-Metadaten ---------------- */
const shortDesc =
  'Persönliche Website von Hagen Böttcher (Pizzakaufen) aus Dresden: Developer & Creator mit Schwerpunkt auf C#, Lua, FiveM, Android und Webentwicklung.';

export const pages = {
  home: {
    file: 'index.html', path: '/', prefix: '',
    title: 'Hagen Böttcher — Developer & Creator aus Dresden',
    description: shortDesc,
  },
  imprint: {
    file: 'impressum/index.html', path: '/impressum/', prefix: '../',
    title: 'Impressum | Hagen Böttcher',
    description: 'Impressum und Anbieterkennzeichnung der persönlichen Website von Hagen Böttcher.',
  },
  privacy: {
    file: 'datenschutz/index.html', path: '/datenschutz/', prefix: '../',
    title: 'Datenschutz | Hagen Böttcher',
    description: 'Datenschutzhinweise der Website von Hagen Böttcher: welche Daten beim Aufruf verarbeitet werden und welche Rechte du nach DSGVO hast.',
  },
  notFound: {
    file: '404.html', path: '/404.html', prefix: '/', noindex: true,
    title: 'Seite nicht gefunden | Hagen Böttcher',
    description: 'Diese Seite existiert nicht oder wurde verschoben.',
  },
};

function jsonLd(key) {
  const p = pages[key];
  if (key !== 'home') {
    return [{ '@context': 'https://schema.org', '@type': 'WebPage', name: p.title, description: p.description, inLanguage: 'de', url: c.siteUrl + p.path }];
  }
  return [{
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: p.title,
    description: p.description,
    inLanguage: 'de',
    url: c.siteUrl + '/',
    mainEntity: {
      '@type': 'Person',
      name: person.name,
      givenName: person.firstName,
      familyName: 'Böttcher',
      alternateName: [person.handle, ...person.nicknames],
      jobTitle: person.role,
      birthDate: person.birthDate,
      url: c.siteUrl + '/',
      image: person.photo ? `${c.siteUrl}/${person.photo}` : undefined,
      knowsAbout: ['C#', '.NET', 'Lua', 'FiveM', 'ND_Core', 'JavaScript', 'TypeScript', 'Webentwicklung', 'Android', 'Jetpack Compose', 'Linux', 'Raspberry Pi'],
      knowsLanguage: person.languages,
      homeLocation: { '@type': 'Place', name: person.location },
      sameAs: [links.github, links.tiktok],
    },
  }];
}

function head(key) {
  const p = pages[key];
  const pre = p.prefix;
  const url = c.siteUrl + p.path;
  const img = `${c.siteUrl}/og-image.png`;
  return `<!doctype html>
<html lang="de" data-theme="system">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(p.title)}</title>
    <meta name="description" content="${esc(p.description)}" />
    <meta name="author" content="${esc(person.name)}" />
    <meta name="robots" content="${p.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />
    ${p.noindex ? '' : `<link rel="canonical" href="${url}" />`}
    <meta name="color-scheme" content="dark light" />
    <meta name="theme-color" content="#0b0c0e" media="(prefers-color-scheme: dark)" />
    <meta name="theme-color" content="#f6f6f4" media="(prefers-color-scheme: light)" />
    <meta property="og:type" content="${key === 'home' ? 'profile' : 'website'}" />
    <meta property="og:site_name" content="${esc(person.name)}" />
    <meta property="og:locale" content="de_DE" />
    <meta property="og:title" content="${esc(p.title)}" />
    <meta property="og:description" content="${esc(p.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${img}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Hagen Böttcher — Developer &amp; Creator aus Dresden" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(p.title)}" />
    <meta name="twitter:description" content="${esc(p.description)}" />
    <meta name="twitter:image" content="${img}" />
    ${jsonLd(key).map((d) => `<script type="application/ld+json">${JSON.stringify(d)}</script>`).join('\n    ')}
    <script>try{document.documentElement.dataset.theme=localStorage.getItem('theme-preference')||'system'}catch(e){}</script>
    <link rel="icon" href="${pre}favicon.ico" sizes="32x32" />
    <link rel="icon" type="image/svg+xml" href="${pre}favicon.svg" />
    <link rel="apple-touch-icon" href="${pre}apple-touch-icon.png" />
    <link rel="manifest" href="${pre}site.webmanifest" />
    <link rel="preconnect" href="https://api.fontshare.com" crossorigin />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&amp;display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&amp;display=swap" />
    <link rel="stylesheet" href="${pre}style.css" />
    <script src="${pre}app.js" defer></script>
  </head>`;
}

/* ---------------- Bausteine ---------------- */
const navItems = [['about', 'Über mich'], ['skills', 'Skills'], ['projects', 'Projekte'], ['github', 'GitHub'], ['contact', 'Kontakt']];
const badges = (items) => `<ul class="badges" role="list">${items.map((i) => `<li class="badge">${esc(i)}</li>`).join('')}</ul>`;
const ext = ' target="_blank" rel="noopener noreferrer"';

function brand(href) {
  return `<a class="brand" href="${href}" aria-label="${esc(person.name)}, Startseite"><span class="logo" aria-hidden="true">H</span><span>${esc(person.name)}</span></a>`;
}

function themeButton() {
  return `<button class="icon-button" id="theme-toggle" type="button" aria-label="Farbschema: System" title="Farbschema: System">
      <span class="theme-icon" data-for="system">${icon.system(17)}</span><span class="theme-icon" data-for="light">${icon.sun(17)}</span><span class="theme-icon" data-for="dark">${icon.moon(17)}</span>
    </button>`;
}

function header(key) {
  const pre = pages[key].prefix;
  const home = key === 'home';
  const sec = (id) => (home ? `#${id}` : `${pre === '/' ? '/' : pre}#${id}`);
  return `<header class="site-nav${home ? '' : ' scrolled'}">
  <a class="skip" href="#main">Zum Inhalt springen</a>
  <div class="container nav-inner">
    ${brand(home ? '#home' : pre === '/' ? '/' : pre)}
    <nav aria-label="Hauptnavigation" id="site-menu" class="nav-menu">
      <ul class="nav-links" role="list">${navItems.map(([id, label]) => `<li><a href="${sec(id)}"${home ? ` data-nav="${id}"` : ''}>${label}</a></li>`).join('')}</ul>
    </nav>
    <div class="nav-actions">
      ${themeButton()}
      <button class="icon-button menu-button" id="menu-toggle" type="button" aria-label="Navigation öffnen" aria-controls="site-menu" aria-expanded="false">
        <span class="menu-open">${icon.menu(18)}</span><span class="menu-close">${icon.close(18)}</span>
      </button>
    </div>
  </div>
</header>`;
}

function footer(key) {
  const pre = pages[key].prefix;
  const root = pre === '' ? '' : pre;
  const sec = (id) => (key === 'home' ? `#${id}` : `${root}#${id}`);
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-about">
      ${brand(key === 'home' ? '#home' : root)}
      <p>${esc(person.role)} aus Dresden.<br />Ohne Tracking, ohne Cookies.</p>
    </div>
    <nav aria-label="Seitenbereiche">
      <p class="mono">Navigation</p>
      <ul role="list"><li><a href="${sec('about')}">Über mich</a></li><li><a href="${sec('projects')}">Projekte</a></li><li><a href="${sec('contact')}">Kontakt</a></li></ul>
    </nav>
    <nav aria-label="Profile und Rechtliches">
      <p class="mono">Profile &amp; Rechtliches</p>
      <ul role="list"><li><a href="${links.github}"${ext}>GitHub</a></li><li><a href="${links.tiktok}"${ext}>TikTok</a></li><li><a href="${root}impressum/">Impressum</a></li><li><a href="${root}datenschutz/">Datenschutz</a></li></ul>
    </nav>
  </div>
  <div class="container footer-bottom">
    <p>© <span data-year>${new Date().getFullYear()}</span> ${esc(person.name)}</p>
    <a class="to-top" href="#top">Nach oben ${svg('<path d="M12 19V5M6 11l6-6 6 6"/>', 15)}</a>
  </div>
</footer>`;
}

const heading = (num, title, text) =>
  `<div class="section-heading reveal"><p class="mono">${num}</p><h2>${title}</h2>${text ? `<p class="section-lead">${text}</p>` : ''}</div>`;

function avatar(cls) {
  return person.photo
    ? `<img class="${cls} avatar-photo" src="${esc(person.photo)}" alt="Foto von ${esc(person.name)}" width="384" height="384" decoding="async" />`
    : `<div class="${cls}" role="img" aria-label="H-Monogramm für ${esc(person.name)}"><span aria-hidden="true">H</span></div>`;
}

function profileFacts(limit) {
  const rows = [
    ['Name', person.name],
    ['Profilname', [person.handle, ...person.nicknames].join(' · ')],
    ['Alter', `<span data-age="${person.birthDate}">${ageOn()}</span> Jahre`, true],
    ['Ort', person.location],
    ['Sprachen', person.languages.join(' · ')],
    ['Fokus', person.focus],
  ].slice(0, limit);
  return `<dl class="facts">${rows.map(([l, v, raw]) => `<div><dt>${l}</dt><dd>${raw ? v : esc(v)}</dd></div>`).join('')}</dl>`;
}

function projectCard(p) {
  const actions = [
    p.github && `<a class="button small" href="${esc(p.github)}"${ext}>${icon.code(16)} Code ansehen</a>`,
    p.demo && `<a class="button small" href="${esc(p.demo)}"${ext}>${icon.external(16)} Live ansehen</a>`,
  ].filter(Boolean).join('');
  const gallery = p.images?.length
    ? `<div class="shots">${p.images.map((im) => `<img src="${esc(im.src)}" alt="${esc(im.alt || p.name)}" loading="lazy" decoding="async" />`).join('')}</div>`
    : '';
  return `<article class="project-card reveal${p.featured ? ' featured' : ''}" id="projekt-${p.id}">
  <div class="project-top">
    <div><p class="mono">${esc(p.eyebrow)}</p><h3>${esc(p.name)}</h3></div>
    <span class="status" data-status="${esc(p.status)}">${esc(p.status)}</span>
  </div>
  <p class="project-desc">${esc(p.description)}</p>
  ${gallery}
  <div class="project-detail">
    <p class="mono">Ziel</p>
    <div><p class="goal">${esc(p.goal)}</p><ul>${p.details.map((d) => `<li>${esc(d)}</li>`).join('')}</ul></div>
  </div>
  ${badges(p.tech)}
  ${actions ? `<div class="project-actions">${actions}</div>` : ''}
</article>`;
}

function contactCards() {
  return `<div class="contact-grid">
  <a class="contact-card reveal" href="mailto:${links.email}">${icon.mail(20)}<span><strong>E-Mail</strong><small>${esc(links.email)}</small></span><span class="contact-go">${icon.arrow(16)}</span></a>
  <a class="contact-card reveal" href="${links.github}"${ext}>${icon.github(20)}<span><strong>GitHub</strong><small>github.com/${esc(person.handle)}</small></span><span class="contact-go">${icon.external(16)}</span></a>
  <a class="contact-card reveal" href="${links.tiktok}"${ext}>${icon.tiktok(20)}<span><strong>TikTok</strong><small>@PizzakaufenPro</small></span><span class="contact-go">${icon.external(16)}</span></a>
  <button class="contact-card reveal" type="button" data-copy="${esc(links.discord)}" aria-describedby="discord-hint">${icon.discord(20)}<span><strong>Discord</strong><small>${esc(links.discord)}</small></span><span class="contact-go" data-copy-label>${icon.copy(16)}</span></button>
</div>
<p class="hint" id="discord-hint">Discord: Klick kopiert den Benutzernamen.</p>
<p class="visually-hidden" role="status" aria-live="polite" data-copy-status></p>`;
}

/* ---------------- Seiten ---------------- */
function homeMain() {
  return `<main id="main">
<section id="home" class="hero">
  <div class="hero-grid container">
    <div class="hero-copy">
      <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span>${esc(person.location)} · ${esc(person.handle)}</p>
      <h1>Hallo, ich bin <span class="accent">${esc(person.firstName)}.</span></h1>
      <p class="hero-role">${esc(person.role)}</p>
      <p class="lead">${esc(texts.heroLead)}</p>
      <div class="actions">
        <a class="button primary" href="#projects">Meine Projekte ${icon.arrow(16)}</a>
        <a class="button" href="#contact">Kontakt aufnehmen</a>
      </div>
      <ul class="hero-socials" role="list" aria-label="Profile">
        <li><a href="${links.github}"${ext} aria-label="GitHub">${icon.github(18)}</a></li>
        <li><a href="${links.tiktok}"${ext} aria-label="TikTok">${icon.tiktok(18)}</a></li>
        <li><a href="mailto:${links.email}" aria-label="E-Mail">${icon.mail(18)}</a></li>
      </ul>
    </div>
    <div class="hero-profile">
      ${avatar('avatar-hero')}
      <div class="hero-profile-card">
        <p class="profile-status"><span class="mono">~/profil</span><span class="mono live">aktiv</span></p>
        ${profileFacts(4)}
      </div>
    </div>
  </div>
</section>

<section id="about" class="section">
  <div class="container">
    ${heading('01 — Profil', 'Über mich', esc(texts.about))}
    <div class="about-grid">
      <div class="about-copy reveal">
        <p>${esc(texts.statement)}</p>
        <p>${esc(texts.experience)}</p>
        <p>${esc(texts.motivation)}</p>
      </div>
      <div class="profile-card reveal">
        <div class="profile-head">${avatar('avatar-small')}<div><p class="mono">Kurzprofil</p><p class="profile-name">${esc(person.name)}</p></div></div>
        ${profileFacts(6)}
      </div>
    </div>
    <div class="focus-grid">
      ${c.focusAreas.map(([t, x], i) => `<article class="card reveal"><span class="card-num" aria-hidden="true">0${i + 1}</span><h3>${esc(t)}</h3><p>${esc(x)}</p></article>`).join('\n      ')}
    </div>
    <div class="about-lower">
      <div class="reveal">
        <h3 class="mono">Werdegang</h3>
        <ol class="timeline">
          ${c.timeline.map(([k, t, place, x]) => `<li><span class="timeline-kind">${esc(k)}</span><h4>${esc(t)}${place ? ` <span>· ${esc(place)}</span>` : ''}</h4><p>${esc(x)}</p></li>`).join('\n          ')}
        </ol>
      </div>
      <div class="interest-stack">
        <article class="card reveal"><h3 class="mono">Interessen</h3>${badges(c.interests)}</article>
        <article class="card reveal"><h3 class="mono">Ziele</h3><p>${esc(texts.goals)}</p></article>
      </div>
    </div>
  </div>
</section>

<section id="skills" class="section section-alt">
  <div class="container">
    ${heading('02 — Stack', 'Skills', 'Technologien, mit denen ich regelmäßig arbeite — sortiert nach Einsatzbereich.')}
    <div class="skill-grid">
      ${c.skillGroups.map(([g, note, items]) => `<article class="skill-card reveal"><h3>${esc(g)}</h3>${note ? `<p>${esc(note)}</p>` : ''}${badges(items)}</article>`).join('\n      ')}
    </div>
  </div>
</section>

<section id="projects" class="section">
  <div class="container">
    ${heading('03 — Arbeit', 'Projekte', 'Eine Auswahl an Dingen, die ich gebaut habe oder gerade baue.')}
    <div class="projects-grid">
      ${c.projects.map(projectCard).join('\n')}
    </div>
  </div>
</section>

<section id="github" class="section section-alt">
  <div class="container">
    ${heading('04 — Open Source', 'Auf GitHub', 'Meine öffentlichen Repositories — direkt von GitHub geladen.')}
    <div class="repo-grid" data-github-user="${esc(person.handle)}" aria-live="polite">
      <p class="repo-fallback">Die aktuellen Repositories findest du auf <a href="${links.github}"${ext}>github.com/${esc(person.handle)}</a>.</p>
    </div>
    <div class="github-band reveal">
      <div><p class="mono">github.com/${esc(person.handle)}</p><p class="band-title">Alle Projekte, Scripts und Experimente</p></div>
      <a class="button primary" href="${links.github}"${ext}>${icon.github(16)} GitHub öffnen</a>
    </div>
  </div>
</section>

<section id="contact" class="section">
  <div class="container">
    ${heading('05 — Kontakt', 'Lass uns reden', 'Fragen zu einem Projekt, eine Idee oder einfach Hallo sagen? Am schnellsten erreichst du mich per E-Mail oder Discord.')}
    ${contactCards()}
  </div>
</section>
</main>`;
}

function legalMain(kind) {
  const imprint = kind === 'imprint';
  const title = imprint ? 'Impressum' : 'Datenschutzerklärung';
  const addrMissing = isPlaceholder(c.imprint.street) || isPlaceholder(c.imprint.zipCity);
  const address = `${esc(person.name)}<br />${esc(c.imprint.street)}<br />${esc(c.imprint.zipCity)}<br />${esc(c.imprint.country)}`;
  const note = addrMissing
    ? '<div class="note" role="note"><strong>Noch offen:</strong> Die ladungsfähige Anschrift fehlt noch. Sie wird in <code>content.mjs</code> unter <code>imprint</code> eingetragen.</div>'
    : '';
  const body = imprint
    ? `${note}
<section><h2>Angaben gemäß § 5 DDG</h2><address>${address}</address></section>
<section><h2>Kontakt</h2><p>E-Mail: <a href="mailto:${links.email}">${esc(links.email)}</a></p></section>
<section><h2>Verantwortlich für den Inhalt</h2><p>${esc(person.name)}, Anschrift wie oben.</p></section>
<section><h2>Haftung für Inhalte</h2><p>Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.</p></section>
<section><h2>Haftung für Links</h2><p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p></section>`
    : `${note}
<section><h2>1. Verantwortlicher</h2><p>${address}<br />E-Mail: <a href="mailto:${links.email}">${esc(links.email)}</a></p></section>
<section><h2>2. Hosting und Server-Logfiles</h2><p>Diese Website wird über ${esc(c.hosting.name)} bereitgestellt, einen Dienst der ${esc(c.hosting.company)}. Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite sowie Browser- und Betriebssysteminformationen, um die Seite auszuliefern und die Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Eine Übermittlung in die USA ist dabei möglich; GitHub ist nach dem EU-US Data Privacy Framework zertifiziert. Details: <a href="${c.hosting.privacyUrl}"${ext}>Datenschutzerklärung von GitHub</a>.</p></section>
<section><h2>3. Anzeige der GitHub-Repositories</h2><p>Im Bereich „Auf GitHub“ lädt dein Browser die Liste meiner öffentlichen Repositories direkt über die GitHub-API (api.github.com). Dabei wird deine IP-Adresse an GitHub übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt in einer aktuellen Darstellung meiner Projekte.</p></section>
<section><h2>4. Schriftarten</h2><p>Für die Darstellung werden die Schriftarten „Satoshi“ von Fontshare (Indian Type Foundry) und „JetBrains Mono“ von Google Fonts (Google Ireland Limited) geladen. Dabei wird deine IP-Adresse an den jeweiligen Anbieter übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p></section>
<section><h2>5. Cookies, Tracking und lokale Speicherung</h2><p>Es werden keine Cookies gesetzt und keine Analyse- oder Tracking-Dienste eingesetzt. Wenn du das Farbschema umschaltest, wird diese Einstellung ausschließlich lokal in deinem Browser (localStorage) gespeichert und nicht übertragen.</p></section>
<section><h2>6. Kontakt per E-Mail</h2><p>Wenn du mir eine E-Mail schreibst, verarbeite ich deine Angaben nur, um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO), und lösche sie, wenn sie nicht mehr benötigt werden.</p></section>
<section><h2>7. Deine Rechte</h2><p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO). Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel bei der Sächsischen Datenschutz- und Transparenzbeauftragten.</p></section>
<p class="stand">Stand: ${new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</p>`;
  return `<main id="main">
<article class="legal">
  <div class="container legal-copy">
    <nav aria-label="Brotkrümel" class="crumbs"><a href="../">Startseite</a> <span aria-hidden="true">/</span> <span aria-current="page">${title}</span></nav>
    <h1>${title}</h1>
    <div class="legal-body">${body}</div>
  </div>
</article>
</main>`;
}

function notFoundMain() {
  return `<main id="main">
<article class="legal not-found">
  <div class="container legal-copy">
    <p class="eyebrow">Fehler 404</p>
    <h1>Diese Seite gibt es nicht.</h1>
    <p class="lead">Vielleicht hat sich ein Tippfehler eingeschlichen oder die Seite wurde verschoben.</p>
    <div class="actions">
      <a class="button primary" href="/">Zur Startseite ${icon.arrow(16)}</a>
      <a class="button" href="/#projects">Projekte ansehen</a>
    </div>
  </div>
</article>
</main>`;
}

export function renderPage(key) {
  const main = key === 'home' ? homeMain() : key === 'notFound' ? notFoundMain() : legalMain(key);
  return `${head(key)}
  <body id="top">
${header(key)}
${main}
${footer(key)}
  </body>
</html>
`;
}
