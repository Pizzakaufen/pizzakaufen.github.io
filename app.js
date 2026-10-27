/* Kleine Verbesserungen für die fertig gebaute Seite.
   Alle Inhalte stehen bereits im HTML — die Seite funktioniert auch ohne JavaScript. */
(() => {
  const root = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const safe = (name, fn) => { try { fn(); } catch (err) { console.warn(`[site] ${name}:`, err); } };
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* privat-Modus */ } },
  };

  /* ---------- Farbschema: System → Hell → Dunkel ---------- */
  safe('theme', () => {
    const button = $('#theme-toggle');
    const labels = { system: 'System', light: 'Hell', dark: 'Dunkel' };
    const apply = (t) => {
      root.dataset.theme = t;
      const text = `Farbschema: ${labels[t]} (klicken zum Wechseln)`;
      button?.setAttribute('aria-label', text);
      button?.setAttribute('title', text);
    };
    let theme = labels[store.get('theme-preference')] ? store.get('theme-preference') : 'system';
    apply(theme);
    button?.addEventListener('click', () => {
      theme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
      store.set('theme-preference', theme);
      apply(theme);
    });
  });

  /* ---------- Navigation ---------- */
  safe('nav', () => {
    const nav = $('.site-nav');
    const toggle = $('#menu-toggle');
    if (!nav) return;
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      toggle?.setAttribute('aria-expanded', String(open));
      toggle?.setAttribute('aria-label', open ? 'Navigation schließen' : 'Navigation öffnen');
    };
    toggle?.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    $$('.nav-links a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('open')) { setOpen(false); toggle?.focus(); } });
    document.addEventListener('click', (e) => { if (nav.classList.contains('open') && !nav.contains(e.target)) setOpen(false); });

    const isHome = !!$('[data-nav]');
    if (!isHome) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // aktiven Abschnitt in der Navigation markieren
    const links = new Map($$('[data-nav]').map((a) => [a.dataset.nav, a]));
    const sections = $$('main section[id]').filter((s) => links.has(s.id));
    const mark = () => {
      const line = window.innerHeight * 0.35;
      let current = null;
      for (const s of sections) if (s.getBoundingClientRect().top <= line) current = s.id;
      links.forEach((a, id) => {
        a.classList.toggle('active', id === current);
        if (id === current) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    };
    let frame = 0;
    const schedule = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; mark(); }); };
    mark();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
  });

  /* ---------- Einblenden beim Scrollen ---------- */
  safe('reveal', () => {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.classList.add('js');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    items.forEach((el) => io.observe(el));
  });

  /* ---------- Alter & Jahr immer aktuell ---------- */
  safe('dates', () => {
    const now = new Date();
    $$('[data-age]').forEach((el) => {
      const [y, m, d] = el.dataset.age.split('-').map(Number);
      let age = now.getFullYear() - y;
      if (now.getMonth() + 1 < m || (now.getMonth() + 1 === m && now.getDate() < d)) age -= 1;
      el.textContent = age;
    });
    $$('[data-year]').forEach((el) => { el.textContent = now.getFullYear(); });
  });

  /* ---------- Discord-Namen kopieren ---------- */
  safe('copy', () => {
    const status = $('[data-copy-status]');
    $$('[data-copy]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const value = btn.dataset.copy;
        let ok = false;
        try { await navigator.clipboard.writeText(value); ok = true; } catch { /* nicht erlaubt */ }
        const small = $('small', btn);
        const original = small.textContent;
        small.textContent = ok ? 'Kopiert!' : value;
        btn.classList.toggle('copied', ok);
        if (status) status.textContent = ok ? `Discord-Name ${value} kopiert.` : `Discord-Name: ${value}`;
        setTimeout(() => { small.textContent = original; btn.classList.remove('copied'); }, 2000);
      });
    });
  });

  /* ---------- Öffentliche GitHub-Repositories laden ---------- */
  safe('github', () => {
    const grid = $('[data-github-user]');
    if (!grid || !('fetch' in window)) return;
    const user = grid.dataset.githubUser;
    const fallback = grid.innerHTML;
    const CACHE_KEY = 'gh-repos-v1';
    const MAX_AGE = 60 * 60 * 1000; // 1 Stunde

    const icon = (d) => `<svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
    const starIcon = icon('<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9Z"/>');
    const codeIcon = icon('<path d="m8 8-4 4 4 4M16 8l4 4-4 4"/>');
    const repoIcon = icon('<path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5Z"/><path d="M5 19.5V4.5"/>');

    const card = (r) => {
      const a = document.createElement('a');
      a.className = 'repo-card';
      a.href = r.html_url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      const title = document.createElement('strong');
      title.innerHTML = repoIcon;
      title.append(r.name);
      const desc = document.createElement('p');
      desc.textContent = r.description || 'Keine Beschreibung.';
      const meta = document.createElement('span');
      meta.className = 'repo-meta';
      if (r.language) { const s = document.createElement('span'); s.innerHTML = codeIcon; s.append(r.language); meta.append(s); }
      const st = document.createElement('span'); st.innerHTML = starIcon; st.append(String(r.stargazers_count)); meta.append(st);
      const upd = document.createElement('span');
      upd.textContent = `aktualisiert ${new Date(r.pushed_at).toLocaleDateString('de-DE', { month: 'short', year: 'numeric' })}`;
      meta.append(upd);
      a.append(title, desc, meta);
      return a;
    };

    const render = (repos) => {
      const list = repos
        .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== `${user.toLowerCase()}.github.io`)
        .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at)))
        .slice(0, 6);
      if (!list.length) { grid.innerHTML = fallback; return; }
      grid.replaceChildren(...list.map(card));
    };

    try {
      const cached = JSON.parse(store.get(CACHE_KEY) || 'null');
      if (cached && Date.now() - cached.t < MAX_AGE) { render(cached.data); return; }
    } catch { /* ignorieren */ }

    grid.innerHTML = '<div class="repo-skeleton"></div><div class="repo-skeleton"></div><div class="repo-skeleton"></div>';
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?per_page=100&sort=pushed`, { signal: ctrl.signal, headers: { Accept: 'application/vnd.github+json' } })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        const slim = data.map(({ name, description, html_url, language, stargazers_count, pushed_at, fork, archived }) => ({ name, description, html_url, language, stargazers_count, pushed_at, fork, archived }));
        store.set(CACHE_KEY, JSON.stringify({ t: Date.now(), data: slim }));
        render(slim);
      })
      .catch(() => { grid.innerHTML = fallback; })
      .finally(() => clearTimeout(timer));
  });
})();
