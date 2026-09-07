import type { Plugin } from 'vite';
import {
  absoluteUrl,
  identity,
  isPlaceholder,
  pages,
  shareImage,
  siteUrl,
  socialProfiles,
  type PageMeta,
} from '../src/config/site.config';

/* =====================================================================
   Ein Plugin, eine Quelle: erzeugt aus src/config/site.config.ts
   - die vollständigen <head>-Tags jeder Seite (Title, Description,
     Canonical, Open Graph, Twitter/X, JSON-LD)
   - robots.txt, sitemap.xml und llms.txt (Build und Dev-Server)
   So gibt es keine doppelten Metadaten und keine hart codierte Domain.
   ===================================================================== */

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const domainConfigured = !isPlaceholder(siteUrl);
const today = new Date().toISOString().slice(0, 10);

function structuredData(page: PageMeta): object[] {
  const sameAs = socialProfiles();
  const person = {
    '@type': 'Person',
    name: identity.fullName,
    givenName: identity.firstName,
    familyName: identity.lastName,
    alternateName: identity.nicknames,
    jobTitle: identity.role,
    birthDate: identity.birthDate,
    description:
      'Entwickler und Creator aus Dresden mit Schwerpunkt auf C#, Lua, FiveM und eigenen Softwareprojekten.',
    knowsAbout: [
      'C#',
      '.NET',
      'Lua',
      'FiveM',
      'ND_Core',
      'JavaScript',
      'TypeScript',
      'React',
      'Webentwicklung',
      'Android',
      'Jetpack Compose',
      'Linux',
      'Raspberry Pi',
      'Systemoptimierung',
    ],
    knowsLanguage: identity.languages,
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'Dinglingerschule Dresden' },
      { '@type': 'EducationalOrganization', name: 'BBW Leipzig' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: identity.locality,
      addressRegion: identity.region,
      addressCountry: identity.country,
    },
    ...(domainConfigured ? { url: absoluteUrl('/'), mainEntityOfPage: absoluteUrl('/') } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };

  const breadcrumb = page.breadcrumb
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Startseite',
              ...(domainConfigured ? { item: absoluteUrl('/') } : {}),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: page.breadcrumb,
              ...(domainConfigured ? { item: absoluteUrl(page.path) } : {}),
            },
          ],
        },
      ]
    : [];

  if (page.key === 'home') {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: page.title,
        description: page.description,
        inLanguage: identity.language,
        ...(domainConfigured ? { url: absoluteUrl(page.path) } : {}),
        mainEntity: person,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: identity.siteName,
        description: page.description,
        inLanguage: identity.language,
        ...(domainConfigured ? { url: absoluteUrl('/') } : {}),
        author: { '@type': 'Person', name: identity.fullName },
      },
    ];
  }

  if (page.key === 'notFound') return [];

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      inLanguage: identity.language,
      ...(domainConfigured ? { url: absoluteUrl(page.path) } : {}),
      isPartOf: {
        '@type': 'WebSite',
        name: identity.siteName,
        ...(domainConfigured ? { url: absoluteUrl('/') } : {}),
      },
    },
    ...breadcrumb,
  ];
}

function headFor(page: PageMeta): string {
  const canonical = absoluteUrl(page.path);
  const image = absoluteUrl(shareImage.path);
  const jsonLd = structuredData(page)
    .map((data) => `    <script type="application/ld+json">${JSON.stringify(data)}</script>`)
    .join('\n');

  const lines = [
    `    <title>${escape(page.title)}</title>`,
    `    <meta name="description" content="${escape(page.description)}" />`,
    `    <meta name="author" content="${escape(identity.fullName)}" />`,
    page.indexable
      ? '    <meta name="robots" content="index, follow, max-image-preview:large" />'
      : '    <meta name="robots" content="noindex, follow" />',
    page.indexable ? `    <link rel="canonical" href="${canonical}" />` : '',
    '',
    '    <!-- Open Graph -->',
    `    <meta property="og:type" content="${page.key === 'home' ? 'website' : 'article'}" />`,
    `    <meta property="og:site_name" content="${escape(identity.siteName)}" />`,
    `    <meta property="og:locale" content="${identity.locale}" />`,
    `    <meta property="og:title" content="${escape(page.title)}" />`,
    `    <meta property="og:description" content="${escape(page.description)}" />`,
    `    <meta property="og:url" content="${canonical}" />`,
    `    <meta property="og:image" content="${image}" />`,
    `    <meta property="og:image:type" content="${shareImage.type}" />`,
    `    <meta property="og:image:width" content="${shareImage.width}" />`,
    `    <meta property="og:image:height" content="${shareImage.height}" />`,
    `    <meta property="og:image:alt" content="${escape(shareImage.alt)}" />`,
    '',
    '    <!-- Twitter / X -->',
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escape(page.title)}" />`,
    `    <meta name="twitter:description" content="${escape(page.description)}" />`,
    `    <meta name="twitter:image" content="${image}" />`,
    `    <meta name="twitter:image:alt" content="${escape(shareImage.alt)}" />`,
    jsonLd,
  ];

  return lines.filter((line) => line !== '').join('\n');
}

function robotsTxt(): string {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    '# Fehlerseite nicht indexieren',
    'Disallow: /404.html',
    '',
    domainConfigured
      ? `Sitemap: ${absoluteUrl('/sitemap.xml')}`
      : `# Domain in src/config/site.config.ts eintragen, dann steht hier die echte Sitemap-URL\nSitemap: ${absoluteUrl('/sitemap.xml')}`,
    '',
  ].join('\n');
}

function sitemapXml(): string {
  const entries = pages
    .filter((page) => page.indexable)
    .map((page) =>
      [
        '  <url>',
        `    <loc>${absoluteUrl(page.path)}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        page.changefreq ? `    <changefreq>${page.changefreq}</changefreq>` : '',
        page.priority ? `    <priority>${page.priority.toFixed(1)}</priority>` : '',
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n'),
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

function llmsTxt(): string {
  const home = pages.find((p) => p.key === 'home')!;
  const sections = [
    [
      'Über mich',
      '/#about',
      'Vollständiges Profil: Statement, Schwerpunkte, Werdegang (Dinglingerschule Dresden, Berufsvorbereitungsjahr, BBW Leipzig, Praktikum bei Lloyd’s Café & Bar), Interessen und Ziele.',
    ],
    [
      'Skills',
      '/#skills',
      'Programmiersprachen C#, Lua, JavaScript, TypeScript, HTML, CSS; Frameworks .NET, React, Vite, Jetpack Compose, ND_Core; Werkzeuge Git, GitHub, Visual Studio, txAdmin, Pterodactyl, OpenCore, Linux-Terminal; Plattformen Windows, Linux, Android, FiveM, FXServer, Raspberry Pi, macOS; Sprachen Deutsch und Englisch.',
    ],
    [
      'Projekte',
      '/#projects',
      'eDienstplanReload (Android, Jetpack Compose, Material 3), FiveM Development (Lua, C#, FXServer, ND_Core, NUI), diese Website (React, TypeScript, Vite, Tailwind CSS) sowie weitere Arbeiten aus den Bereichen Server, Linux und Systemoptimierung.',
    ],
    ['GitHub', '/#github', 'Veröffentlichte Projekte und Scripts unter github.com/Pizzakaufen.'],
    ['Kontakt', '/#contact', 'Kontaktwege über GitHub, E-Mail, Discord (Pizzakaufen) und TikTok (@PizzakaufenPro).'],
  ];

  const lines: (string | null)[] = [
    `# ${identity.siteName}`,
    '',
    `> ${home.description}`,
    '',
    `Persönliche Website von ${identity.fullName}, online auch als ${identity.nicknames.join(' und ')} (${identity.location}). ${identity.role} mit Schwerpunkt auf C#, Lua, FiveM, Android und Webentwicklung. Statische Seite, kein Tracking, keine Anmeldung.`,
    '',
    '## Seiten',
    ...pages
      .filter((page) => page.indexable)
      .map((page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`),
    '',
    '## Abschnitte der Startseite',
    ...sections.map(([name, path, text]) => `- [${name}](${absoluteUrl(path)}): ${text}`),
    '',
    '## Hinweise',
    '- Sprache: Deutsch',
    '- Inhalte sind öffentlich; es werden keine personenbezogenen Daten erhoben.',
    domainConfigured
      ? null
      : '- Die Domain ist noch nicht konfiguriert (Platzhalter example.com in src/config/site.config.ts).',
    '',
  ];

  return lines.filter((line): line is string => line !== null).join('\n');
}

export function seoPlugin(): Plugin {
  const generated: Record<string, { content: string; type: string }> = {
    'robots.txt': { content: robotsTxt(), type: 'text/plain; charset=utf-8' },
    'sitemap.xml': { content: sitemapXml(), type: 'application/xml; charset=utf-8' },
    'llms.txt': { content: llmsTxt(), type: 'text/plain; charset=utf-8' },
  };

  return {
    name: 'portfolio-seo',

    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const relative = ctx.path.replace(/^\//, '') || 'index.html';
        const page =
          pages.find((p) => p.file === relative) ??
          pages.find((p) => relative.startsWith(p.file.replace(/index\.html$/, '')) && p.file !== 'index.html') ??
          pages.find((p) => p.key === 'home')!;

        return html.replace('<!--%SEO%-->', headFor(page));
      },
    },

    /** robots.txt, sitemap.xml und llms.txt auch im Dev-Server ausliefern */
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const name = (req.url ?? '').split('?')[0].replace(/^\//, '');
        const file = generated[name];
        if (!file) return next();
        res.setHeader('Content-Type', file.type);
        res.end(file.content);
      });
    },

    generateBundle() {
      for (const [fileName, file] of Object.entries(generated)) {
        this.emitFile({ type: 'asset', fileName, source: file.content });
      }
    },
  };
}
