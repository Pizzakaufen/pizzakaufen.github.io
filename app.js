const site = {
  name: 'Hagen Böttcher', handle: 'Pizzakaufen', role: 'Developer & Creator',
  location: 'Dresden, Deutschland', birthDate: '12.09.2006', age: 19,
  description: 'Ich entwickle eigene Software, Systeme und technische Projekte.',
  about: 'Ich bin Hagen und beschäftige mich hauptsächlich mit Softwareentwicklung, Webentwicklung, FiveM und moderner Computertechnik. Ich probiere gerne neue Technologien aus und arbeite an eigenen Projekten.',
  statement: 'Mein Schwerpunkt liegt auf praktischen Lösungen: eigene Anwendungen, Scripts und technische Systeme, die ich von der Idee bis zur Weiterentwicklung selbst begleite.',
  experience: 'Ich entwickle seit mehreren Jahren; C# und Lua gehören zu den Technologien, mit denen ich am längsten arbeite.',
  goals: 'Eigene Software- und Webprojekte weiterentwickeln, neue technische Fähigkeiten aufbauen und professionelle eigene Projekte umsetzen.'
};

const socialLinks = [
  { label: 'GitHub', value: 'github.com/Pizzakaufen', href: 'https://github.com/Pizzakaufen', external: true },
  { label: 'TikTok', value: '@PizzakaufenPro', href: 'https://www.tiktok.com/@PizzakaufenPro', external: true },
  { label: 'E-Mail', value: 'hagen@con-meo.de', href: 'mailto:hagen@con-meo.de' },
  { label: 'Discord', value: 'Pizzakaufen', note: 'Benutzername' }
];

const profileFacts = [['Name', site.name], ['Profilname', site.handle], ['Alter', `${site.age} Jahre`], ['Ort', site.location], ['Sprachen', 'Deutsch · Englisch'], ['Fokus', 'C# · Lua · FiveM · Android']];
const focusAreas = [
  ['Softwareentwicklung', 'Eigene Anwendungen und Tools in C# und .NET, dazu die Optimierung bestehender Software.'],
  ['FiveM Development', 'Eigene Ressourcen, Scripts und Systeme in Lua für Roleplay-Server auf Basis von ND_Core.'],
  ['Android & Web', 'Die Dienstplan-App eDienstplanReload mit Jetpack Compose sowie Webprojekte.'],
  ['Technik & Systeme', 'PC-Hardware, Linux, Raspberry Pi, Serververwaltung und Systemoptimierung.']
];
const skillGroups = [
  ['Programming', ['C#', 'Lua', 'JavaScript', 'TypeScript', 'HTML', 'CSS']],
  ['Frameworks', ['.NET', 'React', 'Vite', 'Jetpack Compose', 'Material 3', 'ND_Core']],
  ['Platforms', ['Windows', 'Linux', 'Android', 'FiveM', 'FXServer', 'Raspberry Pi', 'macOS']],
  ['Tools', ['Git', 'GitHub', 'Visual Studio', 'txAdmin', 'Pterodactyl', 'OpenCore', 'Linux-Terminal']],
  ['Languages', ['Deutsch', 'Englisch']]
];
const timeline = [
  ['Schule', 'Förderschulabschluss', 'Dinglingerschule Dresden', 'Schulischer Abschluss in Dresden.'],
  ['BVB', 'Berufsvorbereitungsjahr', '', 'Berufsvorbereitung im Anschluss an die Schule.'],
  ['Ausbildung', 'BBW Leipzig', '', 'Weiterführende Ausbildung im Berufsbildungswerk Leipzig.'],
  ['Erfahrung', 'Praktische Erfahrungen', 'Lloyd’s Café & Bar', 'Praktische Erfahrung unter anderem im Küchenbereich.'],
  ['Heute', 'Eigene Softwareentwicklung', '', 'Eigene Anwendungen, Scripts, Systeme und technische Projekte.']
];
const projects = [
  { id: 'edienstplanreload', name: 'eDienstplanReload', eyebrow: 'Android · App Development', status: 'In Weiterentwicklung', featured: true, description: 'Persönliche Weiterentwicklung einer Dienstplan-App für die Verwaltung und Darstellung von Arbeitszeiten und Dienstplänen mit einem modernen, an One UI orientierten Android-Design.', goal: 'Dienstpläne und Arbeitszeiten übersichtlich, modern und auch offline nutzbar darstellen.', details: ['Oberfläche orientiert an One UI 8.5 und Android 16', 'Dark Mode, Light Mode und eigene Themes', 'Lokale Speicherung, offline nutzbar', 'Server- und API-Komponenten aus früheren Versionen', 'Weiterentwicklung der Dienstplan- und Benutzerfunktionen'], tech: ['Android', 'Jetpack Compose', 'Material 3', 'Offline-Speicherung', 'API'] },
  { id: 'fivem-development', name: 'FiveM Development', eyebrow: 'FiveM · Lua · Server Systems', status: 'Laufende Entwicklung', featured: true, description: 'Entwicklung eigener FiveM-Ressourcen, Scripts und Systeme für Roleplay-Server. Schwerpunkt auf Lua, Server- und Client-Systemen, UI und Framework-Integration.', goal: 'Eigene technische Systeme für Roleplay-Server entwickeln und in der Praxis weiter verbessern.', details: ['Scripts und eigene Ressourcen', 'HUDs und NUI-Oberflächen', 'Gameplay-Systeme, unter anderem ein Taser-System', 'Serverfunktionen und Server-Client-Logik', 'Framework-Integration mit ND_Core, kein ESX oder QBCore'], tech: ['Lua', 'C#', 'FiveM', 'FXServer', 'ND_Core', 'NUI', 'HTML', 'CSS', 'JavaScript'] },
  { id: 'website', name: 'Diese Website', eyebrow: 'Webentwicklung · Portfolio', status: 'Aktiv', description: 'Meine persönliche Website: statisch gebaut, ohne Tracking, mit Dark-, Light- und System-Theme sowie einer zentralen Struktur für Inhalte und Metadaten.', goal: 'Eine schnelle, persönliche und wartbare Präsentation meiner Arbeit schaffen.', details: ['Semantisches HTML und responsive CSS', 'Vanilla JavaScript ohne Runtime-Abhängigkeiten', 'Eigene Seiten für Impressum, Datenschutz und 404'], tech: ['HTML', 'CSS', 'JavaScript'] },
  { id: 'weitere-arbeiten', name: 'Weitere Arbeiten', eyebrow: 'Systeme · Experimente · Projekte', status: 'Laufende Entwicklung', description: 'Kleinere Arbeiten aus denselben Bereichen: frühere FiveM-Ressourcen, Android-Projekte, Webprojekte, Serverprojekte und Systemoptimierungen.', goal: 'Technische Ideen ausprobieren, Erfahrungen sammeln und bestehende Systeme verbessern.', details: ['Serververwaltung mit txAdmin und Pterodactyl', 'Linux- und Raspberry-Pi-Setups', 'macOS-Installationen mit OpenCore'], tech: ['C#', '.NET', 'Lua', 'Linux', 'Raspberry Pi'] }
];
const interests = ['FiveM & Roleplay', 'eigene technische Projekte', 'Computer & Hardware', 'Android & Samsung', 'Linux', 'Webseiten', 'Systemoptimierung'];
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const badges = (items) => items.map((item) => `<span class="badge">${esc(item)}</span>`).join('');
const externalAttrs = (item) => item.external ? ' target="_blank" rel="noopener noreferrer"' : '';

function header() {
  const links = [['home', 'Home'], ['about', 'Über mich'], ['skills', 'Skills'], ['projects', 'Projekte'], ['contact', 'Kontakt']];
  return `<header class="site-nav"><a class="skip" href="#main">Zum Inhalt springen</a><div class="container nav-inner"><a class="brand" href="#home" aria-label="Hagen Böttcher, Startseite"><span class="logo" aria-hidden="true">H</span><span>${site.name}</span></a><nav aria-label="Hauptnavigation"><ul class="nav-links">${links.map(([id, label]) => `<li><a href="#${id}" data-nav="${id}">${label}</a></li>`).join('')}</ul></nav><div class="nav-actions"><button class="icon-button" id="theme-toggle" type="button" aria-label="Farbschema: System" title="Farbschema wechseln">◐</button><button class="menu-button" id="menu-toggle" type="button" aria-label="Navigation öffnen" aria-expanded="false">☰</button></div></div></header>`;
}

  return `<footer class="site-footer"><div class="container footer-grid"><div><a class="brand" href="#home"><span class="logo" aria-hidden="true">H</span><span>${site.name}</span></a><p>Developer & Creator aus Dresden.</p><p>© 2026 ${site.name}. Alle Rechte vorbehalten.</p></div><nav aria-label="Footer-Navigation"><span class="mono">Navigation</span><ul><li><a href="#about">Über mich</a></li><li><a href="#projects">Projekte</a></li><li><a href="#contact">Kontakt</a></li></ul></nav><nav aria-label="Profile und Rechtliches"><span class="mono">Profile & Rechtliches</span><ul><li><a href="${socialLinks[0].href}" target="_blank" rel="noopener">GitHub</a></li><li><a href="${socialLinks[1].href}" target="_blank" rel="noopener">TikTok</a></li><li><a href="${socialLinks[2].href}">E-Mail</a></li><li><a href="impressum/">Impressum</a></li><li><a href="datenschutz/">Datenschutz</a></li></ul></nav></div></footer>`;
const cleanTemplate = (html) => html.replace(/^\+/gm, '');
}
function heading(number, title, text) { return `<div class="section-heading"><span class="mono">${number}</span><h2>${title}</h2><p>${text}</p></div>`; }
function profileCard() { return `<div class="profile-card"><div class="avatar-large" aria-hidden="true">H</div><div><span class="mono">Developer Profile</span><h2>${site.name}</h2><p class="muted">${site.role} · ${site.location}</p></div><dl class="profile-facts">${profileFacts.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl></div>`; }
function projectCard(project) { return `<article class="project-card ${project.featured ? 'featured' : ''}" id="project-${project.id}"><div class="project-top"><div><span class="mono">${esc(project.eyebrow)}</span><h3>${esc(project.name)}</h3></div><span class="status">${esc(project.status)}</span></div><p>${esc(project.description)}</p><div class="project-detail"><span class="mono">Ziel</span><p>${esc(project.goal)}</p><ul>${project.details.map((detail) => `<li>${esc(detail)}</li>`).join('')}</ul></div><div class="badges">${badges(project.tech)}</div></article>`; }

function homePage() {
  return `${header()}<main id="main"><section id="home" class="hero"><div class="hero-grid container"><div class="hero-copy"><span class="eyebrow">${site.location} · ${site.handle}</span><h1>${site.name}</h1><p class="hero-role">${site.role}</p><p class="lead">${site.description} ${site.statement}</p><div class="actions"><a class="button primary" href="#projects">Meine Projekte <span aria-hidden="true">→</span></a><a class="button" href="#about">Über mich</a></div><div class="hero-socials" aria-label="Öffentliche Profile">${socialLinks.filter((item) => item.href).map((item) => `<a href="${item.href}"${externalAttrs(item)}>${item.label}</a>`).join('')}</div></div><div class="hero-profile"><div class="avatar-hero" aria-label="H-Monogramm für Hagen Böttcher">H</div><div class="hero-profile-card"><div class="profile-status"><span class="status-dot"></span><span class="mono">eigene Projekte</span></div><dl>${profileFacts.slice(0, 4).map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl></div></div></div></section>
+<section id="about" class="section"><div class="container">${heading('01 — Profil', 'Über mich', site.about)}<div class="about-grid"><div class="about-copy"><p>${site.statement}</p><p>${site.experience}</p><p>Mich interessieren technische Themen besonders dann, wenn daraus etwas Eigenes entsteht: eine Anwendung, ein System, ein Script oder eine Website, die im Alltag funktioniert.</p></div>${profileCard()}</div><div class="focus-grid">${focusAreas.map(([title, text]) => `<article class="card"><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join('')}</div><div class="about-lower"><div><span class="mono">Entwicklung und Ausbildung</span><ol class="timeline">${timeline.map(([kind, title, place, text]) => `<li><span class="timeline-kind">${esc(kind)}</span><h3>${esc(title)}${place ? ` <span>· ${esc(place)}</span>` : ''}</h3><p>${esc(text)}</p></li>`).join('')}</ol></div><div class="interest-stack"><article class="card"><span class="mono">Persönliche Interessen</span><div class="badges">${badges(interests)}</div></article><article class="card"><span class="mono">Ziele</span><p>${site.goals}</p></article></div></div></div></section>
+<section id="skills" class="section section-alt"><div class="container">${heading('02 — Stack', 'Skills', 'Technologien, mit denen ich regelmäßig arbeite — sortiert nach ihrem Einsatzbereich.')}<div class="skill-grid">${skillGroups.map(([group, items]) => `<article class="skill-card"><span class="mono">${esc(group)}</span><div class="badges">${badges(items)}</div></article>`).join('')}</div></div></section>
+<section id="projects" class="section"><div class="container">${heading('03 — Arbeit', 'Meine Projekte', 'Eine Auswahl an Dingen, die ich gebaut habe oder gerade baue.')}<div class="projects-grid">${projects.map(projectCard).join('')}</div><p class="project-note">Projekt-Repositorys, Demos und Screenshots sind derzeit nicht öffentlich im Projekt hinterlegt.</p></div></section>
+<section id="github" class="section section-compact"><div class="container"><div class="github-band"><div><span class="mono">04 — Open Source</span><h2>Mehr von meiner Arbeit</h2><p>Auf GitHub veröffentliche ich Projekte, Scripts und andere Entwicklungen.</p></div><a class="button primary" href="${socialLinks[0].href}" target="_blank" rel="noopener">GitHub öffnen <span aria-hidden="true">↗</span></a></div></div></section>
+<section id="contact" class="section"><div class="container">${heading('05 — Kontakt', 'Kontakt', 'Du möchtest mich kontaktieren oder mehr über meine Projekte erfahren?')}<div class="contact-grid">${socialLinks.map((item) => { const content = `<span class="contact-symbol" aria-hidden="true">${item.label.slice(0, 1)}</span><span><strong>${esc(item.label)}</strong><small>${esc(item.value)}${item.note ? ` · ${esc(item.note)}` : ''}</small></span>`; return item.href ? `<a class="contact-card" href="${item.href}"${externalAttrs(item)}>${content}</a>` : `<div class="contact-card">${content}</div>`; }).join('')}</div></div></section></main>${footer()}`;
}

function legalPage(kind) {
  const imprint = kind === 'imprint';
  const title = imprint ? 'Impressum' : 'Datenschutzerklärung';
  const intro = imprint ? 'Anbieterkennzeichnung dieser Website nach § 5 DDG.' : 'Diese Website ist eine statische Seite ohne Nutzerkonten, Formulare und ohne Analyse-Tracking.';
  const body = imprint ? '<div class="note">Noch zu ergänzen: Straße, Hausnummer und Postleitzahl. Diese Angaben liegen nicht vor und dürfen nicht geraten werden.</div><section><h2>Angaben gemäß § 5 DDG</h2><address>Hagen Böttcher<br>[STRASSE UND HAUSNUMMER EINTRAGEN]<br>[PLZ EINTRAGEN] Dresden<br>Deutschland</address></section><section><h2>Kontakt</h2><p>E-Mail: <a href="mailto:hagen@con-meo.de">hagen@con-meo.de</a></p></section><section><h2>Haftung für Inhalte und Links</h2><p>Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann keine Gewähr übernommen werden. Für Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.</p></section>' : '<section><h2>Verantwortlicher</h2><p>Hagen Böttcher, [ADRESSE EINTRAGEN], Dresden<br>E-Mail: <a href="mailto:hagen@con-meo.de">hagen@con-meo.de</a></p></section><section><h2>Hosting und Server-Logfiles</h2><p>Diese Website wird bei [HOSTER EINTRAGEN] gehostet. Beim Aufruf werden technisch notwendige Daten verarbeitet: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und Betriebssystem.</p></section><section><h2>Cookies und Tracking</h2><p>Es werden keine Analyse- oder Tracking-Cookies gesetzt. Die Einstellungen für das Farbschema werden ausschließlich lokal im Browser gespeichert.</p></section><section><h2>Externe Schriftarten</h2><p>Die Schriftarten dieser Website werden von den Servern der jeweiligen Anbieter geladen. Dabei wird die IP-Adresse an den Anbieter übertragen.</p></section><section><h2>Deine Rechte</h2><p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.</p></section>';
  return `<header class="site-nav scrolled"><div class="container nav-inner"><a class="brand" href="../"><span class="logo" aria-hidden="true">H</span><span>${site.name}</span></a><a class="button" href="../">Zur Startseite</a></div></header><main id="main"><article class="legal"><div class="container legal-copy"><p class="mono"><a href="../">Startseite</a> / ${title}</p><h1>${title}</h1><p class="lead">${intro}</p><div class="legal-body">${body}</div></div></article></main>${footer()}`;
}
function notFoundPage() { return `${header()}<main id="main"><article class="legal not-found"><div class="container legal-copy"><span class="eyebrow">404 — Nicht gefunden</span><h1>Diese Seite wurde nicht gefunden.</h1><p class="lead">Vielleicht bist du hier falsch abgebogen.</p><div class="actions"><a class="button primary" href="./">Zur Startseite <span aria-hidden="true">→</span></a><a class="button" href="./#projects">Projekte ansehen</a></div></div></article></main>${footer()}`; }

function getThemePreference() { return localStorage.getItem('theme-preference') || 'system'; }
function applyTheme(preference) {
  document.documentElement.dataset.theme = preference;
  const button = document.querySelector('#theme-toggle');
  const label = preference === 'system' ? 'System' : preference === 'light' ? 'Hell' : 'Dunkel';
  button?.setAttribute('aria-label', `Farbschema: ${label}`); button?.setAttribute('title', `Farbschema: ${label}`);
}
function init() {
  const path = window.location.pathname;
  document.body.innerHTML = cleanTemplate(path.endsWith('/404.html') ? notFoundPage() : path.includes('/impressum') ? legalPage('imprint') : path.includes('/datenschutz') ? legalPage('privacy') : homePage());
  let theme = getThemePreference(); applyTheme(theme);
  document.querySelector('#theme-toggle')?.addEventListener('click', () => { theme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system'; localStorage.setItem('theme-preference', theme); applyTheme(theme); });
  const nav = document.querySelector('.site-nav'); const menu = document.querySelector('.nav-links');
  document.querySelector('#menu-toggle')?.addEventListener('click', (event) => { const button = event.currentTarget; const open = menu.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)); button.setAttribute('aria-label', open ? 'Navigation schließen' : 'Navigation öffnen'); nav.classList.toggle('open', open); });
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('open'); nav.classList.remove('open'); document.querySelector('#menu-toggle')?.setAttribute('aria-expanded', 'false'); }));
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 16), { passive: true });
  const sections = [...document.querySelectorAll('main section[id]')];
  const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => document.querySelectorAll(`[data-nav="${entry.target.id}"]`).forEach((link) => link.classList.toggle('active', entry.isIntersecting))), { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .08 });
  document.querySelectorAll('.section, .hero-copy, .hero-profile, .project-card, .card, .skill-card, .contact-card').forEach((item) => revealObserver.observe(item));
}
init();
