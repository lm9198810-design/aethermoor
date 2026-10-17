/* ============================================================
   AETHERMOOR — APPLICATION LOGIC
   Renders the world, the living map, all interactions
   Bilingual support: EN / FA
   ============================================================ */

(function() {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const SVGNS = 'http://www.w3.org/2000/svg';

  /* ============ GLOBAL STATE ============ */
  let CURRENT_LANG = localStorage.getItem('aethermoor_lang') || 'en';

  /* ============ HELPERS ============ */
  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k === 'text') node.textContent = v;
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

  /* ============ TRANSLATION HELPERS ============ */
  // UI string lookup
  const t = (key) => {
    if (typeof UI_TEXT === 'undefined') return key;
    return UI_TEXT[CURRENT_LANG]?.[key] || UI_TEXT.en?.[key] || key;
  };

  // Get content by key from FA_DATA (Persian) or original object (English)
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

  // Apply data-i18n attributes across the static HTML
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
    
    // Update language toggle button
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

  /* ============ NAVIGATION ============ */
  function initNavigation() {
    const nav = $('#navbar');
    const navToggle = $('#navToggle');
    const navLinks = $('#navLinks');
    
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
    
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
    
    $$('a[data-scroll]').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const target = $(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks.classList.contains('active')) {
          navToggle.classList.remove('active');
          navLinks.classList.remove('active');
        }
      });
    });
    
    const sections = $$('section[id], header[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          $$('.nav-links a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => observer.observe(s));
  }

  /* ============ LANGUAGE TOGGLE ============ */
  function initLanguageToggle() {
    const btn = $('#langToggle');
    if (!btn) return;
    
    btn.addEventListener('click', () => {
      CURRENT_LANG = CURRENT_LANG === 'en' ? 'fa' : 'en';
      localStorage.setItem('aethermoor_lang', CURRENT_LANG);
      applyUITranslations();
      reRenderAll();
      
      // Update document title
      document.title = CURRENT_LANG === 'fa' 
        ? 'آرکِیا | قلمرو از هم شکسته' 
        : 'Aethermoor | The Sundered Realm';
    });
  }

  /* ============ HERO PARTICLES ============ */
  function initParticles() {
    const container = $('#heroParticles');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 50; i++) {
      const p = el('div', { class: 'hero-particle' });
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 12) + 's';
      p.style.animationDelay = (Math.random() * 8) + 's';
      p.style.opacity = 0.3 + Math.random() * 0.5;
      const size = 1 + Math.random() * 2.5;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      container.appendChild(p);
    }
  }

  /* ============ STAT COUNTERS ============ */
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
        const duration = 1800;
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

  /* ============ LIVING MAP ============ */
  function renderMap() {
    const svg = $('#worldMap');
    const tooltip = $('#mapTooltip');
    const legend = $('#mapLegend');
    if (!svg || typeof MAP_DATA === 'undefined') return;
    
    // Clear previous content (important for language switch)
    svg.innerHTML = '';
    if (legend) legend.innerHTML = '';
    
    const { viewBox, regions } = MAP_DATA;
    svg.setAttribute('viewBox', viewBox);

    // === Water background ===
    svg.appendChild(svgEl('rect', {
      x: 0, y: 0, width: 1000, height: 700,
      fill: 'url(#oceanGradient)'
    }));

    // === Defs ===
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

    const continent = svgEl('path', {
      d: `M 80 200 Q 100 60 220 40 L 340 60 Q 400 40 480 70 L 560 100 Q 620 80 700 100 L 780 60 Q 880 40 950 90 L 970 200 Q 990 300 960 400 L 980 500 Q 950 620 840 640 L 700 620 Q 620 640 540 620 L 400 660 Q 280 680 180 640 L 60 500 Q 40 380 60 280 Q 60 230 80 200 Z`,
      fill: 'rgba(23, 15, 40, 0.6)',
      stroke: 'rgba(201, 162, 39, 0.15)',
      'stroke-width': '1',
      'pointer-events': 'none'
    });
    svg.appendChild(continent);

    // === Regions ===
    const regionLayer = svgEl('g', { id: 'regionLayer' });
    regions.forEach(region => {
      const displayName = CURRENT_LANG === 'fa' 
        ? getContent('regions', region.id, 'name', region.name)
        : region.name;
      const displayControl = CURRENT_LANG === 'fa'
        ? getContent('regions', region.id, 'control', region.control)
        : region.control;
      
      const circle = svgEl('circle', {
        cx: region.x, cy: region.y, r: 22,
        fill: region.color,
        'fill-opacity': '0.35',
        stroke: region.color,
        'stroke-width': '2',
        class: 'map-region',
        'data-region': region.id,
        filter: 'url(#glowFilter)'
      });
      
      circle.addEventListener('mouseenter', (e) => {
        circle.setAttribute('fill-opacity', '0.65');
        circle.setAttribute('r', '26');
        showTooltip(tooltip, displayName, displayControl, e);
      });
      
      circle.addEventListener('mousemove', (e) => moveTooltip(tooltip, e));
      
      circle.addEventListener('mouseleave', () => {
        circle.setAttribute('fill-opacity', '0.35');
        circle.setAttribute('r', '22');
        hideTooltip(tooltip);
      });
      
      circle.addEventListener('click', () => selectRegion(region.id));
      
      regionLayer.appendChild(circle);

      // Capital dot
      const capDot = svgEl('circle', {
        cx: region.x, cy: region.y - 30, r: 4,
        fill: '#e8c547',
        stroke: '#050308',
        'stroke-width': '1.5',
        'pointer-events': 'none'
      });
      regionLayer.appendChild(capDot);

      // Label (use English name in map for clarity even in FA, OR use Persian)
      const label = svgEl('text', {
        x: region.x, y: region.y + 42,
        class: 'map-region-label',
        'pointer-events': 'none'
      });
      label.textContent = displayName;
      regionLayer.appendChild(label);
    });
    svg.appendChild(regionLayer);

    // === Legend ===
    if (legend) {
      regions.forEach(region => {
        const displayName = CURRENT_LANG === 'fa' 
          ? getContent('regions', region.id, 'name', region.name)
          : region.name;
        const item = el('div', { class: 'legend-item', 'data-region': region.id });
        const dot = el('span', { class: 'legend-dot' });
        dot.style.background = region.color;
        dot.style.color = region.color;
        item.appendChild(dot);
        item.appendChild(el('div', { class: 'legend-name', text: displayName }));
        item.addEventListener('click', () => selectRegion(region.id));
        item.addEventListener('mouseenter', () => highlightRegion(region.id, true));
        item.addEventListener('mouseleave', () => highlightRegion(region.id, false));
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

  function highlightRegion(id, on) {
    const circle = $(`[data-region="${id}"]`, $('#worldMap'));
    if (circle && circle.tagName === 'circle') {
      circle.setAttribute('fill-opacity', on ? '0.65' : '0.35');
      circle.setAttribute('r', on ? '26' : '22');
    }
    const legendItem = $(`.legend-item[data-region="${id}"]`);
    if (legendItem) legendItem.classList.toggle('active', on);
  }

  function selectRegion(id) {
    const region = MAP_DATA.regions.find(r => r.id === id);
    if (!region) return;
    
    $$('.map-region').forEach(c => c.classList.remove('selected'));
    const circle = $(`[data-region="${id}"]`, $('#worldMap'));
    if (circle) circle.classList.add('selected');
    
    $$('.legend-item').forEach(i => i.classList.remove('active'));
    const legendItem = $(`.legend-item[data-region="${id}"]`);
    if (legendItem) legendItem.classList.add('active');
    
    // Scroll to corresponding region card
    const displayName = CURRENT_LANG === 'fa'
      ? getContent('regions', region.id, 'name', region.name)
      : region.name;
    const regionCard = $$('.region-card').find(card => {
      const nameEl = card.querySelector('.region-name');
      return nameEl && nameEl.textContent === displayName;
    });
    if (regionCard) {
      setTimeout(() => {
        regionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        regionCard.style.borderColor = 'var(--gold-bright)';
        regionCard.style.boxShadow = '0 0 60px var(--gold-glow-strong)';
        setTimeout(() => {
          regionCard.style.borderColor = '';
          regionCard.style.boxShadow = '';
        }, 2500);
      }, 300);
    }
  }

  /* ============ WORLD TILES ============ */
  function renderWorld() {
    const grid = $('#worldGrid');
    if (!grid || typeof WORLD_TILES === 'undefined') return;
    grid.innerHTML = '';
    WORLD_TILES.forEach((tile, i) => {
      grid.appendChild(el('div', {
        class: 'world-tile',
        style: `animation-delay: ${i * 0.08}s`
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
      
      // Traits — kept in English as proper nouns (e.g. "Ageless")
      const traits = race.traits;
      
      const card = el('article', {
        class: 'race-card',
        'data-race-id': race.id,
        style: `animation-delay: ${i * 0.06}s`
      });
      card.appendChild(el('div', { class: 'race-card-inner' }, [
        el('span', { class: 'race-icon', text: race.icon }),
        el('h3', { class: 'race-name', text: name }),
        el('div', { class: 'race-epithet', text: epithet }),
        el('p', { class: 'race-desc', text: shortDesc }),
        el('div', { class: 'race-traits' }, traits.map(tr => el('span', { class: 'race-trait', text: tr }))),
        el('div', { class: 'race-secret', text: secret })
      ]));
      grid.appendChild(card);
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width) * 100 + '%');
        card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height) * 100 + '%');
      });
    });
  }

  function initRaceFilters() {
    const bar = $('#raceFilters');
    if (!bar) return;
    // Remove old listeners by cloning
    const newBar = bar.cloneNode(true);
    bar.parentNode.replaceChild(newBar, bar);
    newBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      $$('.filter-btn', newBar).forEach(b => b.classList.remove('active'));
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
          el('div', { class: 'magic-meta-item' }, [el('span', { class: 'label', text: t('magic_label_source') }), el('span', { class: 'value', text: source })]),
          el('div', { class: 'magic-meta-item' }, [el('span', { class: 'label', text: t('magic_label_cost') }), el('span', { class: 'value', text: cost })]),
          el('div', { class: 'magic-meta-item' }, [el('span', { class: 'label', text: t('magic_label_users') }), el('span', { class: 'value', text: users })]),
          el('div', { class: 'magic-meta-item' }, [el('span', { class: 'label', text: t('magic_label_use') }), el('span', { class: 'value', text: combatUse })])
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
      const title = getContent('characters', char.id, 'title', char.title);
      const faction = getContent('characters', char.id, 'faction', char.faction);
      const status = getContent('characters', char.id, 'status', char.status);
      
      const card = el('article', { class: 'char-card', 'data-char-id': char.id }, [
        el('div', { class: 'char-portrait', text: char.icon }),
        el('div', { class: 'char-overlay' }, [
          el('div', { class: 'char-faction', text: faction }),
          el('h3', { class: 'char-name', text: char.name }),
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
    
    const isFa = CURRENT_LANG === 'fa';
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
          <h2 class="modal-char-name">${escapeHtml(char.name)}</h2>
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
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_abilities'))}</div><ul style="list-style:none;padding:0;">${abilities.map(a => `<li style="padding:0.75rem 0;border-bottom:1px solid rgba(201,162,39,0.08);font-family:var(--font-serif);color:var(--text-secondary);line-height:1.75;">${escapeHtml(a)}</li>`).join('')}</ul></div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_flaws'))}</div><ul style="list-style:none;padding:0;">${flaws.map(f => `<li style="padding:0.75rem 0;border-bottom:1px solid rgba(122,26,26,0.15);font-family:var(--font-serif);color:#c89a9a;line-height:1.75;">${escapeHtml(f)}</li>`).join('')}</ul></div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_relationships'))}</div><ul style="list-style:none;padding:0;">${relationships.map(r => `<li style="padding:0.75rem 0;border-bottom:1px solid rgba(201,162,39,0.08);"><div style="font-family:var(--font-display);color:var(--gold-bright);font-size:0.95rem;margin-bottom:0.25rem;">${escapeHtml(r.to)} <span style="font-size:0.75rem;color:var(--text-muted);letter-spacing:0.1em;">— ${escapeHtml(r.type)}</span></div><div style="font-family:var(--font-serif);color:var(--text-secondary);font-size:0.95rem;">${escapeHtml(r.detail)}</div></li>`).join('')}</ul></div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_quotes'))}</div>${quotes.map(q => `<p style="font-style:italic;color:var(--gold-dim);border-left:2px solid var(--gold);padding-left:1rem;margin:1rem 0;">"${escapeHtml(q)}"</p>`).join('')}</div>
      <div class="modal-section"><div class="modal-section-title">${escapeHtml(t('modal_story_hooks'))}</div><ul style="list-style:none;padding:0;">${storyHooks.map(h => `<li style="padding:0.75rem 0;border-bottom:1px solid rgba(201,162,39,0.08);font-family:var(--font-serif);color:var(--text-secondary);line-height:1.75;">${escapeHtml(h)}</li>`).join('')}</ul></div>
    `;
    
    $('#characterModal').classList.add('active');
    document.body.classList.add('modal-open');
  }

  function initModal() {
    const modal = $('#characterModal');
    if (!modal) return;
    // Prevent duplicate listeners
    if (modal.dataset.init === 'true') return;
    modal.dataset.init = 'true';
    
    $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    function closeModal() {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  }

  /* ============ HOUSES ============ */
  function renderHouses() {
    const grid = $('#housesGrid');
    if (!grid || typeof HOUSES === 'undefined') return;
    grid.innerHTML = '';
    HOUSES.forEach(house => {
      const name = getContent('houses', house.name, 'name', house.name);
      const seat = getContent('houses', house.name, 'seat', house.seat);
      const region = getContent('houses', house.name, 'region', house.region);
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
      
      const card = el('article', {
        class: 'region-card',
        'data-region-name': region.name,
        style: `--region-color: ${region.color}`
      }, [
        el('h3', { class: 'region-name', text: name }),
        el('div', { class: 'region-type', text: type }),
        el('p', { class: 'region-desc', text: desc }),
        el('div', { class: 'region-control' }, [
          document.createTextNode(t('region_label_controlled') + ': '),
          el('strong', { text: control })
        ])
      ]);
      card.addEventListener('click', () => {
        const mapRegion = MAP_DATA.regions.find(r => r.name === region.name);
        if (mapRegion) {
          $('#map').scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => selectRegion(mapRegion.id), 500);
        }
      });
      grid.appendChild(card);
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
    const controls = $('.timeline-controls');
    if (!controls) return;
    if (controls.dataset.init === 'true') return;
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
    const content = $('#codexContent');
    if (!content) return;
    content.innerHTML = '';
    
    const dataMap = {
      artifacts: { data: ARTIFACTS, typeKey: 'type', categoryKey: 'artifacts' },
      gods: { data: GODS, typeKey: 'domain', nameKey: 'name', descKey: 'desc', extraKey: 'status', categoryKey: 'gods' },
      creatures: { data: CREATURES, typeKey: 'class', nameKey: 'name', descKey: 'desc', extraKey: 'danger', categoryKey: 'creatures' },
      prophecies: { data: PROPHECIES, typeKey: 'source', nameKey: 'title', descKey: 'text', extraKey: 'status', categoryKey: 'prophecies' },
      languages: { data: LANGUAGES, typeKey: 'script', nameKey: 'name', descKey: 'desc', extraKey: 'speakers', categoryKey: 'languages' }
    };
    
    const config = dataMap[tab];
    if (!config || !config.data) return;
    
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
      if (tab === 'prophecies') {
        desc = getContent(config.categoryKey, nameKey, 'text', item.text);
      }
      
      const extra = getContent(config.categoryKey, nameKey, config.extraKey, item[config.extraKey]);
      
      let extraLabel = '';
      if (tab === 'prophecies') extraLabel = (CURRENT_LANG === 'fa' ? 'وضعیت: ' : t('codex_label_status') + ': ');
      else if (tab === 'creatures') extraLabel = (CURRENT_LANG === 'fa' ? 'خطر: ' : t('codex_label_danger') + ': ');
      else if (tab === 'gods') extraLabel = (CURRENT_LANG === 'fa' ? 'وضعیت: ' : t('codex_label_status') + ': ');
      else if (tab === 'languages') extraLabel = (CURRENT_LANG === 'fa' ? 'گویشوران: ' : t('codex_label_speakers') + ': ');
      
      grid.appendChild(el('div', { class: 'codex-item' }, [
        el('span', { class: 'codex-item-icon', text: item.icon }),
        el('h4', { class: 'codex-item-name', text: displayName }),
        el('div', { class: 'codex-item-type', text: displayType }),
        el('p', { class: 'codex-item-desc', text: desc }),
        extra ? el('div', {
          style: 'margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(201,162,39,0.1);font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);',
          text: extraLabel + extra
        }) : null
      ]));
    });
    content.appendChild(grid);
  }

  function initCodexTabs() {
    const tabs = $('#codexTabs');
    if (!tabs) return;
    if (tabs.dataset.init === 'true') return;
    tabs.dataset.init = 'true';
    tabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.codex-tab');
      if (!tab) return;
      $$('.codex-tab', tabs).forEach(t2 => t2.classList.remove('active'));
      tab.classList.add('active');
      renderCodex(tab.dataset.tab);
    });
  }

  /* ============ SEARCH ============ */
  function initSearch() {
    const input = $('#globalSearch');
    const results = $('#searchResults');
    if (!input || !results) return;
    if (input.dataset.init === 'true') {
      // Rebuild index on language change is fine; just clear
      return;
    }
    input.dataset.init = 'true';
    
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) {
        results.classList.remove('active');
        results.innerHTML = '';
        return;
      }
      
      const index = [];
      const add = (arr, cat, type, categoryKey) => {
        if (typeof arr === 'undefined') return;
        arr.forEach(item => {
          const name = item.name || item.title;
          let displayName = name;
          if (categoryKey && CURRENT_LANG === 'fa') {
            displayName = getContent(categoryKey, name, 'name', name);
            if (!displayName || displayName === name) {
              displayName = getContent(categoryKey, name, 'title', name);
            }
          }
          index.push({
            cat, type,
            name: displayName,
            searchText: (name + ' ' + displayName).toLowerCase(),
            id: item.id || name.toLowerCase().replace(/\s+/g, '-')
          });
        });
      };
      
      add(CHARACTERS, 'Character', 'character', 'characters');
      add(RACES, 'Race', 'race', 'races');
      add(HOUSES, 'House', 'house', 'houses');
      add(REGIONS, 'Region', 'region', 'regions');
      add(ARTIFACTS, 'Artifact', 'artifact', 'artifacts');
      add(MAGIC_SCHOOLS, 'Magic', 'magic', 'magic');
      add(GODS, 'God', 'god', 'gods');
      add(CREATURES, 'Creature', 'creature', 'creatures');
      add(PROPHECIES, 'Prophecy', 'prophecy', 'prophecies');
      
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
          if (m.type === 'character') openCharacterModal(m.id);
          else if (m.type === 'race') {
            const c = $(`[data-race-id="${m.id}"]`);
            if (c) {
              c.scrollIntoView({ behavior: 'smooth', block: 'center' });
              c.style.borderColor = 'var(--gold-bright)';
              setTimeout(() => c.style.borderColor = '', 2500);
            }
          } else if (m.type === 'region') {
            const mapRegion = MAP_DATA.regions.find(r => r.id === m.id);
            if (mapRegion) {
              $('#map').scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => selectRegion(mapRegion.id), 500);
            }
          } else {
            const target = $(`#${m.type}s`) || $('#codex');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }
        });
        results.appendChild(item);
      });
      results.classList.add('active');
    });
    
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-search')) results.classList.remove('active');
    });
  }

  /* ============ SCROLL ANIMATIONS ============ */
  function initScrollAnimations() {
    const targets = $$('.world-tile, .race-card, .magic-school, .char-card, .house-card, .region-card, .codex-item');
    if (!targets.length) return;
    targets.forEach(t2 => {
      t2.style.opacity = '0';
      t2.style.transform = 'translateY(30px)';
      t2.style.transition = 'opacity 0.7s cubic-bezier(0.19, 1, 0.22, 1), transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)';
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el2 = entry.target;
          setTimeout(() => {
            el2.style.opacity = '1';
            el2.style.transform = 'translateY(0)';
          }, parseInt(el2.style.animationDelay) || 0);
          observer.unobserve(el2);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    targets.forEach(t2 => observer.observe(t2));
  }

  /* ============ RE-RENDER ALL (for language switch) ============ */
  function reRenderAll() {
    renderMap();
    renderWorld();
    renderRaces();
    renderMagic();
    renderCharacters();
    renderHouses();
    renderRegions();
    renderTimeline();
    renderCodex($('.codex-tab.active')?.dataset.tab || 'artifacts');
    requestAnimationFrame(() => setTimeout(initScrollAnimations, 50));
  }

  /* ============ INIT ============ */
  function init() {
    initLoader();
    applyUITranslations();
    initNavigation();
    initLanguageToggle();
    initParticles();
    initCounters();
    
    renderMap();
    renderWorld();
    renderRaces();
    initRaceFilters();
    renderMagic();
    renderCharacters();
    initModal();
    renderHouses();
    renderRegions();
    renderTimeline();
    initTimelineFilters();
    renderCodex('artifacts');
    initCodexTabs();
    initSearch();
    
    requestAnimationFrame(() => setTimeout(initScrollAnimations, 100));
    
    // Update title based on language
    document.title = CURRENT_LANG === 'fa'
      ? 'آرکِیا | قلمرو از هم شکسته'
      : 'Aethermoor | The Sundered Realm';
    
    console.log('%c◈ AETHERMOOR LOADED ◈', 'color: #e8c547; font-family: serif; font-size: 16px; letter-spacing: 0.3em;');
    console.log('%cLanguage: ' + CURRENT_LANG.toUpperCase(), 'color: #c9a227; font-style: italic;');
    console.log('%cThe chronicle is complete. The world is waiting.', 'color: #7a6f5e; font-style: italic; font-family: serif;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();