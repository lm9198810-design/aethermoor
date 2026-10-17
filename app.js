/* ============================================================
   AETHERMOOR — APPLICATION LOGIC
   SPA with Hash Routing · 13 Pages · Bilingual EN/FA
   Version: 3.0
   ============================================================ */

(function() {
  'use strict';

  /* ============ HELPERS ============ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const SVGNS = 'http://www.w3.org/2000/svg';

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k === 'text') node.textContent = v;
      else if (k.startsWith('data-')) node.setAttribute(k, v);
      else node.setAttribute(k, v);
    });
    children.forEach(c => {
      if (typeof c === 'string') node.appendChild(document.createTextNode(c));
      else if (c) node.appendChild(c);
    });
    return node;
  };

  const svgEl = (tag, attrs = {}) => {
    const node = document.createElementNS(SVGNS, tag);
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    return node;
  };

  const escapeHtml = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  };

  /* ============ GLOBAL STATE ============ */
  let CURRENT_LANG = localStorage.getItem('aethermoor_lang') || 'en';
  let CURRENT_PAGE = 'home';
  let CURRENT_CODEX_TAB = 'artifacts';
  const renderedPages = new Set();

  /* ============ TRANSLATION HELPERS ============ */
  const t = (key) => {
    if (typeof UI_TEXT === 'undefined') return key;
    return UI_TEXT[CURRENT_LANG]?.[key] || UI_TEXT.en?.[key] || key;
  };

  const getContent = (category, keyOrName, field, fallback) => {
    if (CURRENT_LANG === 'fa' && typeof FA_DATA !== 'undefined') {
      const cat = FA_DATA[category];
      if (cat && cat[keyOrName]) {
        const v = cat[keyOrName][field];
        if (v !== undefined && v !== null) return v;
      }
    }
    return fallback;
  };

  /* ============ APPLY UI TRANSLATIONS ============ */
  const applyUITranslations = () => {
    document.documentElement.lang = CURRENT_LANG === 'fa' ? 'fa' : 'en';
    document.documentElement.dir = CURRENT_LANG === 'fa' ? 'rtl' : 'ltr';
    
    $$('[data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n');
      const txt = t(key);
      if (txt) node.textContent = txt;
    });
    
    $$('[data-i18n-placeholder]').forEach(node => {
      const key = node.getAttribute('data-i18n-placeholder');
      const txt = t(key);
      if (txt) node.setAttribute('placeholder', txt);
    });
    
    const langCode = $('#langCode');
    if (langCode) langCode.textContent = CURRENT_LANG === 'fa' ? 'FA' : 'EN';
  };

  /* ============ LOADER ============ */
  function initLoader() {
    const loader = $('#loader');
    if (!loader) return;
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 900);
    });
    setTimeout(() => loader.classList.add('hidden'), 3500);
  }

  /* ============ NAVIGATION SCROLL EFFECT ============ */
  function initNavScroll() {
    const nav = $('#navbar');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }

  /* ============ MOBILE TOGGLE ============ */
  function initMobileToggle() {
    const navToggle = $('#navToggle');
    const navLinks = $('#navLinks');
    if (!navToggle) return;
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  /* ============================================================
     SPA ROUTER
     ============================================================ */
  
  const VALID_ROUTES = ['home', 'world', 'map', 'races', 'magic', 'characters',
                        'houses', 'regions', 'timeline', 'codex', 'library',
                        'guilds', 'dungeons'];

  function getRouteFromHash() {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash) return 'home';
    const route = hash.split('/')[0];
    return VALID_ROUTES.includes(route) ? route : 'home';
  }

  function navigateTo(route) {
    if (!VALID_ROUTES.includes(route)) route = 'home';
    
    // Hide all pages
    $$('.page').forEach(p => p.classList.remove('active'));
    
    // Show target page
    const targetPage = $(`.page[data-page="${route}"]`);
    if (!targetPage) return;
    
    // Lazy render
    if (!renderedPages.has(route)) {
      renderPage(route);
      renderedPages.add(route);
    }
    
    targetPage.classList.add('active');
    CURRENT_PAGE = route;
    
    // Update nav active state
    $$('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.dataset.route === route);
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Close mobile menu
    const navLinks = $('#navLinks');
    const navToggle = $('#navToggle');
    if (navLinks) navLinks.classList.remove('active');
    if (navToggle) navToggle.classList.remove('active');
  }

  function initRouter() {
    window.addEventListener('hashchange', () => {
      navigateTo(getRouteFromHash());
    });
    
    // Initial navigation
    const initialRoute = getRouteFromHash();
    if (!window.location.hash) {
      window.location.hash = '#/home';
    }
    navigateTo(initialRoute);
  }

  /* ============================================================
     PAGE RENDERERS
     ============================================================ */
  
  function renderPage(route) {
    switch (route) {
      case 'home': renderHome(); break;
      case 'world': renderWorld(); break;
      case 'map': renderMap(); break;
      case 'races': renderRaces(); initRaceFilters(); break;
      case 'magic': renderMagic(); break;
      case 'characters': renderCharacters(); break;
      case 'houses': renderHouses(); break;
      case 'regions': renderRegions(); break;
      case 'timeline': renderTimeline(); initTimelineFilters(); break;
      case 'codex': renderCodex(CURRENT_CODEX_TAB); initCodexTabs(); break;
      case 'library': renderLibrary(); break;
      case 'guilds': renderGuilds(); break;
      case 'dungeons': renderDungeons(); break;
    }
  }

  /* ============ HOME ============ */
  function renderHome() {
    // Home content is already in HTML; just animate counters
    initCounters();
  }

  /* ============ WORLD ============ */
  function renderWorld() {
    const grid = $('#worldGrid');
    if (!grid || typeof WORLD_TILES === 'undefined') return;
    grid.innerHTML = '';
    WORLD_TILES.forEach((tile, i) => {
      grid.appendChild(el('div', {
        class: 'world-tile',
        style: `animation-delay: ${i * 0.06}s`
      }, [
        el('span', { class: 'tile-icon', text: tile.icon }),
        el('h3', { text: tile.title }),
        el('p', { text: tile.desc }),
        el('div', { class: 'tile-stat' }, [
          el('span', { text: tile.statLabel }),
          el('span', { text: tile.statValue })
        ])
      ]));
    });
  }

  /* ============ MAP ============ */
  function renderMap() {
    const svg = $('#worldMap');
    const tooltip = $('#mapTooltip');
    const legend = $('#mapLegend');
    if (!svg || typeof MAP_DATA === 'undefined') return;
    
    svg.innerHTML = '';
    if (legend) legend.innerHTML = '';
    
    const { viewBox, regions } = MAP_DATA;
    svg.setAttribute('viewBox', viewBox);

    // Water background
    svg.appendChild(svgEl('rect', {
      x: 0, y: 0, width: 1000, height: 700,
      fill: 'url(#oceanGradient)'
    }));

    // Defs
    const defs = svgEl('defs');
    
    const oceanGrad = svgEl('radialGradient', { id: 'oceanGradient', cx: '50%', cy: '50%', r: '70%' });
    oceanGrad.appendChild(svgEl('stop', { offset: '0%', 'stop-color': '#0a1424' }));
    oceanGrad.appendChild(svgEl('stop', { offset: '100%', 'stop-color': '#030610' }));
    defs.appendChild(oceanGrad);

    const glowFilter = svgEl('filter', { id: 'glowFilter', x: '-50%', y: '-50%', width: '200%', height: '200%' });
    const feGaussian = svgEl('feGaussianBlur', { stdDeviation: '4', result: 'blur' });
    const feMerge = svgEl('feMerge');
    feMerge.appendChild(svgEl('feMergeNode', { in: 'blur' }));
    feMerge.appendChild(svgEl('feMergeNode', { in: 'SourceGraphic' }));
    glowFilter.appendChild(feGaussian);
    glowFilter.appendChild(feMerge);
    defs.appendChild(glowFilter);

    const gridPattern = svgEl('pattern', { id: 'gridPattern', width: '50', height: '50', patternUnits: 'userSpaceOnUse' });
    gridPattern.appendChild(svgEl('path', {
      d: 'M 50 0 L 0 0 0 50',
      fill: 'none',
      stroke: 'rgba(201, 162, 39, 0.06)',
      'stroke-width': '0.5'
    }));
    defs.appendChild(gridPattern);
    svg.appendChild(defs);

    svg.appendChild(svgEl('rect', {
      x: 0, y: 0, width: 1000, height: 700,
      fill: 'url(#gridPattern)',
      'pointer-events': 'none'
    }));

    // Continent silhouettes
    const mainContinent = svgEl('path', {
      d: `M 100 300 Q 150 200 250 220 L 350 240 Q 420 220 480 240 L 560 260 Q 620 240 700 260 L 780 280 Q 850 260 920 300 L 940 400 Q 950 480 900 540 Q 820 600 720 580 L 620 600 Q 540 620 460 600 L 380 620 Q 300 640 220 600 L 140 540 Q 80 460 100 380 Q 100 330 100 300 Z`,
      fill: 'rgba(23, 15, 40, 0.55)',
      stroke: 'rgba(201, 162, 39, 0.2)',
      'stroke-width': '1.5',
      'pointer-events': 'none'
    });
    svg.appendChild(mainContinent);

    // Xarnath silhouette (north)
    const xarnath = svgEl('path', {
      d: `M 200 0 L 800 0 L 780 40 Q 700 70 600 80 Q 550 100 500 95 Q 450 100 400 80 Q 300 70 220 40 Z`,
      fill: 'rgba(61, 10, 10, 0.6)',
      stroke: 'rgba(122, 26, 26, 0.4)',
      'stroke-width': '1.5',
      'pointer-events': 'none'
    });
    svg.appendChild(xarnath);

    // Black Chasm (the dark line across)
    const chasm = svgEl('path', {
      d: `M 100 130 Q 500 145 900 130`,
      stroke: '#1a0a0a',
      'stroke-width': '20',
      fill: 'none',
      'stroke-linecap': 'round',
      'pointer-events': 'none',
      opacity: '0.85'
    });
    svg.appendChild(chasm);

    // Godseal (the barrier — dashed line above chasm)
    const godseal = svgEl('path', {
      d: `M 250 90 Q 500 75 750 90`,
      stroke: '#e8c547',
      'stroke-width': '3',
      fill: 'none',
      'stroke-dasharray': '8,6',
      'pointer-events': 'none',
      opacity: '0.9'
    });
    svg.appendChild(godseal);

    // Godseal label
    const godsealLabel = svgEl('text', {
      x: 500, y: 70, 'text-anchor': 'middle',
      'font-family': 'Cinzel, serif', 'font-size': '11px',
      fill: '#e8c547', 'letter-spacing': '0.15em', 'pointer-events': 'none'
    });
    godsealLabel.textContent = 'THE GODSEAL';
    svg.appendChild(godsealLabel);

    // Chasm label
    const chasmLabel = svgEl('text', {
      x: 500, y: 165, 'text-anchor': 'middle',
      'font-family': 'Cinzel, serif', 'font-size': '10px',
      fill: '#7a1a1a', 'letter-spacing': '0.15em', 'pointer-events': 'none'
    });
    chasmLabel.textContent = 'THE BLACK CHASM';
    svg.appendChild(chasmLabel);

    // Xarnath label
    const xarnathLabel = svgEl('text', {
      x: 500, y: 40, 'text-anchor': 'middle',
      'font-family': 'Cinzel, serif', 'font-size': '14px',
      fill: '#b52a2a', 'letter-spacing': '0.25em', 'pointer-events': 'none'
    });
    xarnathLabel.textContent = 'XARNATH';
    svg.appendChild(xarnathLabel);

    // Regions
    const regionLayer = svgEl('g', { id: 'regionLayer' });
    regions.forEach(region => {
      const displayName = CURRENT_LANG === 'fa' 
        ? getContent('regions', region.id, 'name', region.name)
        : region.name;
      const displayControl = CURRENT_LANG === 'fa'
        ? getContent('regions', region.id, 'control', region.control)
        : region.control;
      
      const circle = svgEl('circle', {
        cx: region.x, cy: region.y, r: 20,
        fill: region.color,
        'fill-opacity': '0.4',
        stroke: region.color,
        'stroke-width': '2',
        class: 'map-region',
        'data-region': region.id,
        filter: 'url(#glowFilter)'
      });
      
      circle.addEventListener('mouseenter', (e) => {
        circle.setAttribute('fill-opacity', '0.7');
        circle.setAttribute('r', '24');
        showTooltip(tooltip, displayName, displayControl, e);
      });
      
      circle.addEventListener('mousemove', (e) => moveTooltip(tooltip, e));
      
      circle.addEventListener('mouseleave', () => {
        circle.setAttribute('fill-opacity', '0.4');
        circle.setAttribute('r', '20');
        hideTooltip(tooltip);
      });
      
      circle.addEventListener('click', () => selectRegion(region.id));
      regionLayer.appendChild(circle);

      const label = svgEl('text', {
        x: region.x, y: region.y + 38,
        class: 'map-region-label',
        'pointer-events': 'none'
      });
      label.textContent = displayName;
      regionLayer.appendChild(label);
    });
    svg.appendChild(regionLayer);

    // Legend
    if (legend && MAP_DATA.legends) {
      MAP_DATA.legends.forEach(lg => {
        const item = el('div', { class: 'legend-item' });
        const dot = el('span', { class: 'legend-dot' });
        dot.style.background = lg.color;
        dot.style.color = lg.color;
        item.appendChild(dot);
        item.appendChild(el('div', { class: 'legend-name', text: lg.label }));
        legend.appendChild(item);
      });
    }
  }

  function showTooltip(tooltip, title, sub, e) {
    tooltip.innerHTML = `
      <div class="map-tooltip-title">${escapeHtml(title)}</div>
      <div class="map-tooltip-sub">${escapeHtml(sub || '')}</div>
    `;
    tooltip.classList.add('active');
    moveTooltip(tooltip, e);
  }

  function moveTooltip(tooltip, e) {
    tooltip.style.left = (e.clientX + 15) + 'px';
    tooltip.style.top = (e.clientY + 15) + 'px';
  }

  function hideTooltip(tooltip) {
    tooltip.classList.remove('active');
  }

  function selectRegion(id) {
    const region = MAP_DATA.regions.find(r => r.id === id);
    if (!region) return;
    // Navigate to regions page and highlight
    window.location.hash = '#/regions';
    setTimeout(() => {
      const cards = $$('.region-card');
      const displayName = CURRENT_LANG === 'fa'
        ? getContent('regions', region.id, 'name', region.name)
        : region.name;
      cards.forEach(card => {
        const nameEl = card.querySelector('.region-name');
        if (nameEl && nameEl.textContent === displayName) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.style.borderColor = 'var(--gold-bright)';
          card.style.boxShadow = '0 0 60px var(--gold-glow-strong)';
          setTimeout(() => {
            card.style.borderColor = '';
            card.style.boxShadow = '';
          }, 2500);
        }
      });
    }, 500);
  }

  /* ============ RACES ============ */
  function renderRaces(filter = 'all') {
    const grid = $('#racesGrid');
    if (!grid || typeof RACES === 'undefined') return;
    grid.innerHTML = '';
    const filtered = filter === 'all' ? RACES : RACES.filter(r => r.category === filter);
    filtered.forEach((race, i) => {
      const name = getContent('races', race.id, 'name', race.name);
      const epithet = getContent('races', race.id, 'epithet', race.epithet);
      const shortDesc = getContent('races', race.id, 'shortDesc', race.shortDesc);
      const secret = getContent('races', race.id, 'secret', race.secret);
      
      const card = el('article', {
        class: 'race-card',
        'data-race-id': race.id,
        style: `animation-delay: ${i * 0.05}s`
      });
      card.appendChild(el('div', { class: 'race-card-inner' }, [
        el('span', { class: 'race-icon', text: race.icon }),
        el('h3', { class: 'race-name', text: name }),
        el('div', { class: 'race-epithet', text: epithet }),
        el('p', { class: 'race-desc', text: shortDesc }),
        el('div', { class: 'race-traits' }, race.traits.map(tr => el('span', { class: 'race-trait', text: tr }))),
        el('div', { class: 'race-secret', text: secret })
      ]));
      grid.appendChild(card);
    });
  }

  function initRaceFilters() {
    const bar = $('#raceFilters');
    if (!bar || bar.dataset.init === 'true') return;
    bar.dataset.init = 'true';
    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      $$('.filter-btn', bar).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRaces(btn.dataset.filter);
    });
  }

  /* ============ MAGIC ============ */
  function renderMagic() {
    const container = $('#magicShowcase');
    if (!container || typeof MAGIC_SCHOOLS === 'undefined') return;
    container.innerHTML = '';
    MAGIC_SCHOOLS.forEach(school => {
      const name = getContent('magic', school.id, 'name', school.name);
      const tag = getContent('magic', school.id, 'tag', school.tag);
      const desc = getContent('magic', school.id, 'desc', school.desc);
      const source = getContent('magic', school.id, 'source', school.source);
      const cost = getContent('magic', school.id, 'cost', school.cost);
      const users = getContent('magic', school.id, 'users', school.users);
      const combatUse = getContent('magic', school.id, 'combatUse', school.combatUse);
      
      container.appendChild(el('article', {
        class: 'magic-school',
        style: `--school-color: ${school.color}`
      }, [
        el('span', { class: 'magic-symbol', text: school.icon }),
        el('h3', { class: 'magic-name', text: name }),
        el('div', { class: 'magic-tag', text: tag }),
        el('p', { class: 'magic-desc', text: desc }),
        el('div', { class: 'magic-meta' }, [
          el('div', { class: 'magic-meta-item' }, [
            el('span', { class: 'label', text: t('magic_label_source') }),
            el('span', { class: 'value', text: source })
          ]),
          el('div', { class: 'magic-meta-item' }, [
            el('span', { class: 'label', text: t('magic_label_cost') }),
            el('span', { class: 'value', text: cost })
          ]),
          el('div', { class: 'magic-meta-item' }, [
            el('span', { class: 'label', text: t('magic_label_users') }),
            el('span', { class: 'value', text: users })
          ]),
          el('div', { class: 'magic-meta-item' }, [
            el('span', { class: 'label', text: t('magic_label_use') }),
            el('span', { class: 'value', text: combatUse })
          ])
        ])
      ]));
    });
    
    const lawsGrid = $('#lawsGrid');
    if (lawsGrid && typeof MAGIC_LAWS !== 'undefined') {
      lawsGrid.innerHTML = '';
      MAGIC_LAWS.forEach((law, idx) => {
        let num = law.num, title = law.title, desc = law.desc;
        if (CURRENT_LANG === 'fa' && typeof FA_DATA !== 'undefined' && FA_DATA.magicLaws && FA_DATA.magicLaws[idx]) {
          num = FA_DATA.magicLaws[idx].num;
          title = FA_DATA.magicLaws[idx].title;
          desc = FA_DATA.magicLaws[idx].desc;
        }
        lawsGrid.appendChild(el('div', { class: 'law-card' }, [
          el('span', { class: 'law-num', text: num }),
          el('h4', { class: 'law-title', text: title }),
          el('p', { class: 'law-desc', text: desc })
        ]));
      });
    }
  }

  /* ============ CHARACTERS ============ */
  function renderCharacters() {
    const grid = $('#charactersGrid');
    if (!grid || typeof CHARACTERS === 'undefined') return;
    grid.innerHTML = '';
    CHARACTERS.forEach(char => {
      const name = getContent('characters', char.id, 'name', char.name);
      const title = getContent('characters', char.id, 'title', char.title);
      const faction = getContent('characters', char.id, 'faction', char.faction);
      const status = getContent('characters', char.id, 'status', char.status);
      
      const card = el('article', { class: 'char-card', 'data-char-id': char.id }, [
        el('div', { class: 'char-portrait', text: char.icon }),
        el('div', { class: 'char-overlay' }, [
          el('div', { class: 'char-faction', text: faction }),
          el('h3', { class: 'char-name', text: name }),
          el('div', { class: 'char-title', text: title }),
          el('div', { class: 'char-status', style: `--status-color: ${char.statusColor}` }, [
            el('span', { class: 'dot' }),
            el('span', { text: status })
          ])
        ])
      ]);
      grid.appendChild(card);
      card.addEventListener('click', () => openCharacterModal(char.id));
    });
  }

  function openCharacterModal(charId) {
    const char = CHARACTERS.find(c => c.id === charId);
    if (!char) return;
    const body = $('#characterModalBody');
    if (!body) return;
    
    const name = getContent('characters', char.id, 'name', char.name);
    const title = getContent('characters', char.id, 'title', char.title);
    const faction = getContent('characters', char.id, 'faction', char.faction);
    const race = getContent('characters', char.id, 'race', char.race);
    const status = getContent('characters', char.id, 'status', char.status);
    const born = getContent('characters', char.id, 'born', char.born);
    const summary = getContent('characters', char.id, 'summary', char.summary);
    const fullBio = getContent('characters', char.id, 'fullBio', char.fullBio);
    const personality = getContent('characters', char.id, 'personality', char.personality);
    const abilities = getContent('characters', char.id, 'abilities', char.abilities) || [];
    const flaws = getContent('characters', char.id, 'flaws', char.flaws) || [];
    const relationships = getContent('characters', char.id, 'relationships', char.relationships) || [];
    const quotes = getContent('characters', char.id, 'quotes', char.quotes) || [];
    const storyHooks = getContent('characters', char.id, 'storyHooks', char.storyHooks) || [];
    
    body.innerHTML = `
      <div class="modal-char-header">
        <div class="modal-char-icon">${char.icon}</div>
        <div>
          <div class="modal-char-faction">${escapeHtml(faction)}</div>
          <h2 class="modal-char-name">${escapeHtml(name)}</h2>
          <div class="modal-char-title">${escapeHtml(title)}</div>
        </div>
      </div>
      <div class="modal-stats">
        <div class="stat-box"><span class="stat-box-label">${escapeHtml(t('modal_race'))}</span><span class="stat-box-value">${escapeHtml(race)}</span></div>
        <div class="stat-box"><span class="stat-box-label">${escapeHtml(t('modal_age'))}</span><span class="stat-box-value">${escapeHtml(char.age)}</span></div>
        <div class="stat-box"><span class="stat-box-label">${escapeHtml(t('modal_born'))}</span><span class="stat-box-value">${escapeHtml(born)}</span></div>
        <div class="stat-box"><span class="stat-box-label">${escapeHtml(t('modal_status'))}</span><span class="stat-box-value" style="color:${char.statusColor}">${escapeHtml(status)}</span></div>
      </div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_summary'))}</div><p>${escapeHtml(summary)}</p></div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_biography'))}</div><p>${escapeHtml(fullBio)}</p></div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_personality'))}</div><p>${escapeHtml(personality)}</p></div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_abilities'))}</div><ul class="modal-list">${abilities.map(a => `<li>${escapeHtml(a)}</li>`).join('')}</ul></div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_flaws'))}</div><ul class="modal-list flaws">${flaws.map(f => `<li>${escapeHtml(f)}</li>`).join('')}</ul></div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_relationships'))}</div>${relationships.map(r => `<div class="modal-relationship"><div class="modal-rel-to">${escapeHtml(r.to)}</div><div class="modal-rel-type">${escapeHtml(r.type)}</div><div class="modal-rel-detail">${escapeHtml(r.detail)}</div></div>`).join('')}</div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_quotes'))}</div>${quotes.map(q => `<p class="modal-quote">"${escapeHtml(q)}"</p>`).join('')}</div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_story_hooks'))}</div><ul class="modal-list">${storyHooks.map(h => `<li>${escapeHtml(h)}</li>`).join('')}</ul></div>
    `;
    
    $('#characterModal').classList.add('active');
    document.body.classList.add('modal-open');
  }

  /* ============ HOUSES ============ */
  function renderHouses() {
    const grid = $('#housesGrid');
    if (!grid || typeof HOUSES === 'undefined') return;
    grid.innerHTML = '';
    HOUSES.forEach(house => {
      const name = getContent('houses', house.name, 'name', house.name);
      const seat = getContent('houses', house.name, 'seat', house.seat);
      const motto = getContent('houses', house.name, 'motto', house.motto);
      const desc = getContent('houses', house.name, 'desc', house.desc);
      const wealth = getContent('houses', house.name, 'wealth', house.wealth);
      const military = getContent('houses', house.name, 'military', house.military);
      
      grid.appendChild(el('article', {
        class: 'house-card',
        style: `--house-color: ${house.color}`
      }, [
        el('span', { class: 'house-sigil', text: house.sigil }),
        el('h3', { class: 'house-name', text: name }),
        el('div', { class: 'house-seat', text: seat }),
        el('div', { class: 'house-motto', text: motto }),
        el('p', { class: 'house-desc', text: desc }),
        el('div', { class: 'house-meta' }, [
          el('span', {}, [document.createTextNode(t('house_label_wealth') + ': '), el('strong', { text: wealth })]),
          el('span', {}, [document.createTextNode(t('house_label_military') + ': '), el('strong', { text: military })])
        ])
      ]));
    });
  }

  /* ============ REGIONS ============ */
  function renderRegions() {
    const grid = $('#regionsGrid');
    if (!grid || typeof REGIONS === 'undefined') return;
    grid.innerHTML = '';
    REGIONS.forEach(region => {
      const name = getContent('regions', region.id, 'name', region.name);
      const type = getContent('regions', region.id, 'type', region.type);
      const desc = getContent('regions', region.id, 'desc', region.desc);
      const control = getContent('regions', region.id, 'control', region.control);
      
      grid.appendChild(el('article', {
        class: 'region-card',
        style: `--region-color: ${region.color}`,
        'data-region-name': region.name
      }, [
        el('h3', { class: 'region-name', text: name }),
        el('div', { class: 'region-type', text: type }),
        el('p', { class: 'region-desc', text: desc }),
        el('div', { class: 'region-control' }, [
          document.createTextNode(t('region_label_controlled') + ': '),
          el('strong', { text: control })
        ])
      ]));
    });
  }

  /* ============ TIMELINE ============ */
  function renderTimeline(filter = 'all') {
    const container = $('#timelineContainer');
    if (!container || typeof TIMELINE === 'undefined') return;
    container.innerHTML = '';
    const filtered = filter === 'all' ? TIMELINE : TIMELINE.filter(ev => ev.era === filter);
    filtered.forEach(event => {
      const faEvent = (CURRENT_LANG === 'fa' && typeof FA_DATA !== 'undefined' && FA_DATA.timeline)
        ? FA_DATA.timeline[event.title]
        : null;
      
      const title = faEvent ? faEvent.title : event.title;
      const desc = faEvent ? faEvent.desc : event.desc;
      const eraName = CURRENT_LANG === 'fa' ? eraToFa(event.eraName) : event.eraName;
      
      container.appendChild(el('div', { class: 'timeline-event' }, [
        el('div', { class: 'timeline-year', text: event.year }),
        el('h4', { class: 'timeline-title', text: title }),
        el('p', { class: 'timeline-desc', text: desc }),
        el('span', { class: 'timeline-era-tag', text: eraName })
      ]));
    });
  }

  function eraToFa(eraName) {
    const map = {
      'Age of Dawn': 'عصر سپیده',
      'Age of Myth': 'عصر اسطوره',
      'The Sundering': 'شکاف',
      'The Ash Age': 'عصر خاکستر'
    };
    return map[eraName] || eraName;
  }

  function initTimelineFilters() {
    const controls = $('#timelineControls');
    if (!controls || controls.dataset.init === 'true') return;
    controls.dataset.init = 'true';
    controls.addEventListener('click', (e) => {
      const btn = e.target.closest('.era-btn');
      if (!btn) return;
      $$('.era-btn', controls).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTimeline(btn.dataset.era);
    });
  }

  /* ============ CODEX ============ */
  function renderCodex(tab = 'artifacts') {
    CURRENT_CODEX_TAB = tab;
    const content = $('#codexContent');
    if (!content) return;
    content.innerHTML = '';
    
    const dataMap = {
      artifacts: { data: typeof ARTIFACTS !== 'undefined' ? ARTIFACTS : [], typeKey: 'type', categoryKey: 'artifacts' },
      gods: { data: typeof GODS !== 'undefined' ? GODS : [], typeKey: 'domain', nameKey: 'name', descKey: 'desc', extraKey: 'status', categoryKey: 'gods' },
      creatures: { data: typeof CREATURES !== 'undefined' ? CREATURES : [], typeKey: 'class', nameKey: 'name', descKey: 'desc', extraKey: 'danger', categoryKey: 'creatures' },
      prophecies: { data: typeof PROPHECIES !== 'undefined' ? PROPHECIES : [], typeKey: 'source', nameKey: 'title', descKey: 'text', extraKey: 'status', categoryKey: 'prophecies' },
      languages: { data: typeof LANGUAGES !== 'undefined' ? LANGUAGES : [], typeKey: 'script', nameKey: 'name', descKey: 'desc', extraKey: 'speakers', categoryKey: 'languages' }
    };
    
    const config = dataMap[tab];
    if (!config) return;
    
    const grid = el('div', { class: 'codex-grid' });
    config.data.forEach(item => {
      const nameKey = item.name || item.title;
      const name = getContent(config.categoryKey, nameKey, 'name', item.name || item.title);
      const title = getContent(config.categoryKey, nameKey, 'title', item.title);
      const displayName = tab === 'prophecies' ? title : name;
      
      const type = getContent(config.categoryKey, nameKey, 'type', item[config.typeKey]);
      const domain = getContent(config.categoryKey, nameKey, 'domain', item.domain);
      const cls = getContent(config.categoryKey, nameKey, 'class', item.class);
      const source = getContent(config.categoryKey, nameKey, 'source', item.source);
      const script = getContent(config.categoryKey, nameKey, 'script', item.script);
      const displayType = type || domain || cls || source || script;
      
      const descKey = config.descKey || 'desc';
      let desc = getContent(config.categoryKey, nameKey, descKey, item[descKey]);
      if (tab === 'prophecies') desc = getContent(config.categoryKey, nameKey, 'text', item.text);
      
      const extra = getContent(config.categoryKey, nameKey, config.extraKey, item[config.extraKey]);
      
      let extraLabel = '';
      if (tab === 'prophecies' || tab === 'gods') extraLabel = (CURRENT_LANG === 'fa' ? 'وضعیت: ' : t('codex_label_status') + ': ');
      else if (tab === 'creatures') extraLabel = (CURRENT_LANG === 'fa' ? 'خطر: ' : t('codex_label_danger') + ': ');
      else if (tab === 'languages') extraLabel = (CURRENT_LANG === 'fa' ? 'گویشوران: ' : t('codex_label_speakers') + ': ');
      
      grid.appendChild(el('div', { class: 'codex-item' }, [
        el('span', { class: 'codex-item-icon', text: item.icon }),
        el('h4', { class: 'codex-item-name', text: displayName }),
        el('div', { class: 'codex-item-type', text: displayType }),
        el('p', { class: 'codex-item-desc', text: desc }),
        extra ? el('div', {
          style: 'margin-top:0.9rem;padding-top:0.9rem;border-top:1px solid rgba(201,162,39,0.1);font-size:0.72rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);',
          text: extraLabel + extra
        }) : null
      ]));
    });
    content.appendChild(grid);
  }

  function initCodexTabs() {
    const tabs = $('#codexTabs');
    if (!tabs || tabs.dataset.init === 'true') return;
    tabs.dataset.init = 'true';
    tabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.codex-tab');
      if (!tab) return;
      $$('.codex-tab', tabs).forEach(t2 => t2.classList.remove('active'));
      tab.classList.add('active');
      renderCodex(tab.dataset.tab);
    });
  }

  /* ============ LIBRARY (Books) ============ */
  function renderLibrary() {
    const grid = $('#booksGrid');
    if (!grid || typeof BOOKS === 'undefined') return;
    grid.innerHTML = '';
    BOOKS.forEach(book => {
      const title = getContent('books', book.id, 'title', book.title);
      const author = getContent('books', book.id, 'author', book.author);
      const category = getContent('books', book.id, 'category', book.category);
      const excerpt = getContent('books', book.id, 'excerpt', book.excerpt);
      
      const card = el('article', { class: 'book-card', 'data-book-id': book.id }, [
        el('span', { class: 'book-icon', text: '📖' }),
        el('div', { class: 'book-category', text: category }),
        el('h3', { class: 'book-title', text: title }),
        el('div', { class: 'book-author', text: author }),
        el('p', { class: 'book-excerpt', text: excerpt }),
        el('div', { class: 'book-footer' }, [
          el('span', { text: `${book.pages} ${t('book_pages')} · ${getContent('books', book.id, 'date', book.date)}` }),
          el('span', { class: 'book-read-btn', text: t('book_read') })
        ])
      ]);
      grid.appendChild(card);
      card.addEventListener('click', () => openBookModal(book.id));
    });
  }

  function openBookModal(bookId) {
    const book = BOOKS.find(b => b.id === bookId);
    if (!book) return;
    const reader = $('#bookReader');
    if (!reader) return;
    
    const title = getContent('books', book.id, 'title', book.title);
    const author = getContent('books', book.id, 'author', book.author);
    const fullText = getContent('books', book.id, 'fullText', book.fullText);
    const note = getContent('books', book.id, 'note', book.note);
    
    reader.innerHTML = `
      <h1>${escapeHtml(title)}</h1>
      <div class="book-reader-author">${CURRENT_LANG === 'fa' ? 'نوشته‌ی' : 'by'} ${escapeHtml(author)}</div>
      <div class="book-reader-meta">
        <span>${escapeHtml(getContent('books', book.id, 'date', book.date))}</span>
        <span>${escapeHtml(book.language)}</span>
        <span>${book.pages} ${t('book_pages')}</span>
      </div>
      <div class="book-reader-text">${escapeHtml(fullText)}</div>
      ${note ? `<div class="book-reader-note">${escapeHtml(note)}</div>` : ''}
    `;
    
    $('#bookModal').classList.add('active');
    document.body.classList.add('modal-open');
  }

  /* ============ GUILDS ============ */
  function renderGuilds() {
    const grid = $('#guildsGrid');
    if (!grid || typeof GUILDS_DATA === 'undefined') return;
    grid.innerHTML = '';
    
    const isFA = CURRENT_LANG === 'fa';
    const L = isFA ? {
      founded: 'بنیاد',
      branchOne: 'شعبه',
      branchMany: 'شعبه',
      hq: 'مرکز',
      notable: 'برجسته',
      members: 'عضو'
    } : {
      founded: 'Founded',
      branchOne: 'branch',
      branchMany: 'branches',
      hq: 'HQ',
      notable: 'Notable',
      members: 'members'
    };
    
    GUILDS_DATA.forEach(guild => {
      const name = getContent('guilds', guild.name, 'name', guild.name);
      const purpose = getContent('guilds', guild.name, 'purpose', guild.purpose);
      const ranks = getContent('guilds', guild.name, 'ranks', guild.ranks);
      const headquarters = getContent('guilds', guild.name, 'headquarters', guild.headquarters);
      
      const branchesWord = guild.branches === 1 ? L.branchOne : L.branchMany;
      
      const card = el('article', {
        class: 'guild-card',
        style: `--guild-color: ${guild.color}`
      }, [
        el('span', { class: 'guild-icon', text: guild.icon }),
        el('h3', { class: 'guild-name', text: name }),
        el('div', { class: 'guild-founded', text: `${L.founded}: ${getContent('guilds', guild.name, 'founded', guild.founded)} · ${guild.branches} ${branchesWord}` }),
        el('p', { class: 'guild-purpose', text: purpose }),
        el('div', { class: 'guild-ranks' }, 
          (Array.isArray(ranks) ? ranks : []).map(r => el('span', { class: 'guild-rank', text: r }))
        ),
        el('div', { class: 'guild-meta' }, [
          el('span', {}, [document.createTextNode(L.hq + ': '), el('strong', { text: headquarters })]),
          el('span', {}, [document.createTextNode(L.notable + ': '), el('strong', { text: (guild.notable_members || []).length + ' ' + L.members })])
        ])
      ]);
      grid.appendChild(card);
    });
  }

  /* ============ DUNGEONS ============ */
   function renderDungeons() {
    const container = $('#dungeonsContent');
    if (!container || typeof DUNGEONS_DATA === 'undefined') return;
    container.innerHTML = '';
    
    const abyss = DUNGEONS_DATA.theAbyss;
    const faDungeons = (CURRENT_LANG === 'fa' && typeof FA_DATA !== 'undefined' && FA_DATA.dungeons) || {};
    const faAbyss = faDungeons.theAbyss || {};
    const tAbyss = (f, fb) => faAbyss[f] || fb;
    const tTheme = (n) => (faAbyss.themeNames && faAbyss.themeNames[n]) || n;
    const tBoss = (n) => (faAbyss.bossNames && faAbyss.bossNames[n]) || n;
    const tBossDesc = (n, fb) => (faAbyss.bossDescriptions && faAbyss.bossDescriptions[n]) || fb;
    const tOther = (n) => (faDungeons.otherDungeonNames && faDungeons.otherDungeonNames[n]) || n;
    
    const L = CURRENT_LANG === 'fa' ? {
      floors: 'طبقات',
      explored: 'کاوش‌شده',
      floor40: 'رسیده به طبقه ۴۰',
      floor100: 'رسیده به طبقه ۱۰۰',
      themes: 'تِم‌های طبقات',
      bosses: 'رئیس‌ها',
      rules: 'قوانین هاویه',
      facts: 'نکات قابل توجه',
      otherDungeons: 'دنجن‌های دیگر آرکِیا',
      floorPrefix: 'طبقات',
      floorSingle: 'طبقه',
      floorsLabel: 'طبقات:',
      bossLabel: 'رئیس:'
    } : {
      floors: 'Floors',
      explored: 'Explored',
      floor40: 'Reached Floor 40',
      floor100: 'Reached Floor 100',
      themes: 'Floor Themes',
      bosses: 'Bosses',
      rules: 'Rules of the Abyss',
      facts: 'Notable Facts',
      otherDungeons: 'Other Dungeons of Aethermoor',
      floorPrefix: 'Floors',
      floorSingle: 'Floor',
      floorsLabel: 'Floors:',
      bossLabel: 'Boss:'
    };
    
    // Abyss header
    container.appendChild(el('div', { class: 'abyss-header' }, [
      el('span', { class: 'abyss-icon', text: '🕳️' }),
      el('h2', { class: 'abyss-name', text: tAbyss('name', abyss.name) }),
      el('div', { class: 'abyss-location', text: tAbyss('location', abyss.location) }),
      el('div', { class: 'abyss-stats' }, [
        el('div', { class: 'abyss-stat' }, [
          el('span', { class: 'abyss-stat-num', text: abyss.floors }),
          el('span', { class: 'abyss-stat-label', text: L.floors })
        ]),
        el('div', { class: 'abyss-stat' }, [
          el('span', { class: 'abyss-stat-num', text: abyss.exploredFloors }),
          el('span', { class: 'abyss-stat-label', text: L.explored })
        ]),
        el('div', { class: 'abyss-stat' }, [
          el('span', { class: 'abyss-stat-num', text: '200' }),
          el('span', { class: 'abyss-stat-label', text: L.floor40 })
        ]),
        el('div', { class: 'abyss-stat' }, [
          el('span', { class: 'abyss-stat-num', text: '0' }),
          el('span', { class: 'abyss-stat-label', text: L.floor100 })
        ])
      ]),
      el('p', { class: 'abyss-desc', text: tAbyss('description', abyss.description) })
    ]));

    // Themes
    const themesSection = el('div', { class: 'abyss-section' }, [
      el('h3', { class: 'abyss-section-title', text: L.themes })
    ]);
    const themeList = el('div', { class: 'theme-list' });
    abyss.themes.forEach(theme => {
      themeList.appendChild(el('div', { class: 'theme-item' }, [
        el('div', { class: 'theme-range', text: `${L.floorPrefix} ${theme.range}` }),
        el('div', {}, [
          el('div', { class: 'theme-name', text: tTheme(theme.theme) }),
          el('div', { class: 'theme-desc', text: theme.description })
        ])
      ]));
    });
    themesSection.appendChild(themeList);
    container.appendChild(themesSection);

    // Bosses
    const bossesSection = el('div', { class: 'abyss-section' }, [
      el('h3', { class: 'abyss-section-title', text: L.bosses })
    ]);
    const bossList = el('div', { class: 'boss-list' });
    abyss.bosses.forEach(boss => {
      bossList.appendChild(el('div', { class: 'boss-item' }, [
        el('div', { class: 'boss-floor', text: `${L.floorSingle} ${boss.floor}` }),
        el('div', { class: 'boss-name', text: tBoss(boss.name) }),
        el('div', { class: 'boss-desc', text: tBossDesc(boss.name, boss.description) })
      ]));
    });
    bossesSection.appendChild(bossList);
    container.appendChild(bossesSection);

    // Rules
    const rulesSection = el('div', { class: 'abyss-section' }, [
      el('h3', { class: 'abyss-section-title', text: L.rules })
    ]);
    const rulesList = el('ul', { class: 'rules-list' });
    abyss.rules.forEach(rule => {
      rulesList.appendChild(el('li', { text: rule }));
    });
    rulesSection.appendChild(rulesList);
    container.appendChild(rulesSection);

    // Facts
    const factsSection = el('div', { class: 'abyss-section' }, [
      el('h3', { class: 'abyss-section-title', text: L.facts })
    ]);
    const factsList = el('ul', { class: 'facts-list' });
    abyss.notableFacts.forEach(fact => {
      factsList.appendChild(el('li', { text: fact }));
    });
    factsSection.appendChild(factsList);
    container.appendChild(factsSection);

    // Other dungeons
    const otherSection = el('div', { class: 'abyss-section' }, [
      el('h3', { class: 'abyss-section-title', text: L.otherDungeons })
    ]);
    const otherGrid = el('div', { class: 'other-dungeons' });
    DUNGEONS_DATA.otherDungeons.forEach(d => {
      otherGrid.appendChild(el('div', { class: 'other-dungeon' }, [
        el('h4', { class: 'other-dungeon-name', text: tOther(d.name) }),
        el('div', { class: 'other-dungeon-location', text: d.location }),
        el('p', { class: 'other-dungeon-desc', text: d.description }),
        el('div', { class: 'other-dungeon-meta' }, [
          el('span', {}, [document.createTextNode(L.floorsLabel + ' '), el('strong', { text: d.floors })]),
          el('span', {}, [document.createTextNode(L.bossLabel + ' '), el('strong', { text: d.boss.split('—')[0].trim() })])
        ])
      ]));
    });
    otherSection.appendChild(otherGrid);
    container.appendChild(otherSection);
  }
  /* ============ COUNTERS (Hero stats) ============ */
  function initCounters() {
    const stats = $$('.stat-num');
    if (!stats.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.animated === 'true') return;
        el.dataset.animated = 'true';
        const target = parseInt(el.dataset.count, 10);
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const t2 = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t2, 3);
          const value = Math.floor(target * eased);
          el.textContent = value.toLocaleString('en-US');
          if (t2 < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString('en-US') + (target > 100 ? '+' : '');
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    stats.forEach(s => observer.observe(s));
  }

  /* ============ MODALS ============ */
  function initModals() {
    // Close handlers
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-close]') || e.target.closest('[data-close]')) {
        $$('.modal').forEach(m => m.classList.remove('active'));
        document.body.classList.remove('modal-open');
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        $$('.modal').forEach(m => m.classList.remove('active'));
        document.body.classList.remove('modal-open');
      }
    });
  }

  /* ============ LANGUAGE TOGGLE ============ */
  function initLanguageToggle() {
    const btn = $('#langToggle');
    if (!btn) return;
    
    btn.addEventListener('click', () => {
      CURRENT_LANG = CURRENT_LANG === 'en' ? 'fa' : 'en';
      localStorage.setItem('aethermoor_lang', CURRENT_LANG);
      applyUITranslations();
      
      // Clear rendered cache so pages re-render
      renderedPages.clear();
      // Re-render current page
      renderPage(CURRENT_PAGE);
      renderedPages.add(CURRENT_PAGE);
      
      document.title = CURRENT_LANG === 'fa' 
        ? 'آرکِیا | قلمرو از هم شکسته' 
        : 'Aethermoor | The Sundered Realm';
    });
  }

  /* ============ SEARCH ============ */
  function initSearch() {
    const input = $('#globalSearch');
    const results = $('#searchResults');
    if (!input || !results) return;
    
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) {
        results.classList.remove('active');
        results.innerHTML = '';
        return;
      }
      
      const index = [];
      const add = (arr, cat, type, route, categoryKey) => {
        if (typeof arr === 'undefined') return;
        arr.forEach(item => {
          const name = item.name || item.title;
          let displayName = name;
          
          if (categoryKey && CURRENT_LANG === 'fa' && typeof FA_DATA !== 'undefined') {
            const category = FA_DATA[categoryKey];
            if (category) {
              const lookupKeys = [item.id, item.name, item.title].filter(Boolean);
              let entry = null;
              for (const key of lookupKeys) {
                if (category[key]) { entry = category[key]; break; }
              }
              if (entry) {
                displayName = entry.name || entry.title || name;
              }
            }
          }
          
          index.push({
            cat, type, route,
            name: displayName,
            searchText: (name + ' ' + displayName).toLowerCase(),
            id: item.id || name.toLowerCase().replace(/\s+/g, '-')
          });
        });
      };
      
      add(CHARACTERS, 'Character', 'character', 'characters', 'characters');
      add(RACES, 'Race', 'race', 'races', 'races');
      add(HOUSES, 'House', 'house', 'houses', 'houses');
      add(REGIONS, 'Region', 'region', 'regions', 'regions');
      add(ARTIFACTS, 'Artifact', 'artifact', 'codex', 'artifacts');
      add(MAGIC_SCHOOLS, 'Magic', 'magic', 'magic', 'magic');
      add(GODS, 'God', 'god', 'codex', 'gods');
      add(CREATURES, 'Creature', 'creature', 'codex', 'creatures');
      add(PROPHECIES, 'Prophecy', 'prophecy', 'codex', 'prophecies');
      add(BOOKS, 'Book', 'book', 'library', 'books');
      add(GUILDS_DATA, 'Guild', 'guild', 'guilds', 'guilds');
      
      const matches = index.filter(item => item.searchText.includes(q)).slice(0, 10);
      
      if (!matches.length) {
        results.innerHTML = `<div class="search-result-item" style="color:var(--text-muted);font-style:italic;">${escapeHtml(t('search_no_results'))}</div>`;
        results.classList.add('active');
        return;
      }
      
      results.innerHTML = '';
      matches.forEach(m => {
        const item = el('div', { class: 'search-result-item' }, [
          el('div', { class: 'sr-cat', text: m.cat }),
          el('div', { class: 'sr-name', text: m.name })
        ]);
        item.addEventListener('click', () => {
          results.classList.remove('active');
          input.value = '';
          window.location.hash = '#/' + m.route;
          if (m.type === 'character') setTimeout(() => openCharacterModal(m.id), 400);
          if (m.type === 'book') setTimeout(() => openBookModal(m.id), 400);
        });
        results.appendChild(item);
      });
      results.classList.add('active');
    });
    
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-search')) results.classList.remove('active');
    });
  }

  /* ============ INIT ============ */
  function init() {
    initLoader();
    applyUITranslations();
    initNavScroll();
    initMobileToggle();
    initModals();
    initLanguageToggle();
    initSearch();
    initRouter();
    
    document.title = CURRENT_LANG === 'fa'
      ? 'آرکِیا | قلمرو از هم شکسته'
      : 'Aethermoor | The Sundered Realm';
    
    console.log('%c◈ AETHERMOOR SPA LOADED ◈', 'color: #e8c547; font-family: serif; font-size: 16px; letter-spacing: 0.3em;');
    console.log('%c13 pages · Hash routing · Bilingual EN/FA', 'color: #c9a227; font-style: italic;');
    console.log('%c"Navigate the realm."', 'color: #7a6f5e; font-style: italic;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();