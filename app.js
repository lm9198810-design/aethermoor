/* ============================================================
   AETHERMOOR — APPLICATION LOGIC
   Renders the world, the living map, and all interactions
   ============================================================ */

(function() {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const SVGNS = 'http://www.w3.org/2000/svg';

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

  /* ============ LOADER ============ */
  function initLoader() {
    const loader = $('#loader');
    if (!loader) return;
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 900);
    });
    setTimeout(() => loader.classList.add('hidden'), 3500);
  }

  /* ============ STAR FIELD ============ */
  function initStarField() {
    const stars = $('#starsBg');
    if (!stars) return;
    // CSS handles the base stars. Add subtle movement via CSS animation already set.
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

  /* ============ HERO PARTICLES ============ */
  function initParticles() {
    const container = $('#heroParticles');
    if (!container) return;
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
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const value = Math.floor(target * eased);
          el.textContent = value.toLocaleString();
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString() + (target > 100 ? '+' : '');
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
    
    const { viewBox, regions } = MAP_DATA;
    svg.setAttribute('viewBox', viewBox);

    // === Water background ===
    const waterBg = svgEl('rect', {
      x: 0, y: 0, width: 1000, height: 700,
      fill: 'url(#oceanGradient)'
    });
    svg.appendChild(waterBg);

    // === Defs (gradients + filters) ===
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

    // Grid pattern
    const gridPattern = svgEl('pattern', { id: 'gridPattern', width: '50', height: '50', patternUnits: 'userSpaceOnUse' });
    gridPattern.appendChild(svgEl('path', {
      d: 'M 50 0 L 0 0 0 50',
      fill: 'none',
      stroke: 'rgba(201, 162, 39, 0.06)',
      'stroke-width': '0.5'
    }));
    defs.appendChild(gridPattern);

    svg.appendChild(defs);

    // === Grid overlay ===
    svg.appendChild(svgEl('rect', {
      x: 0, y: 0, width: 1000, height: 700,
      fill: 'url(#gridPattern)',
      'pointer-events': 'none'
    }));

    // === Decorative land silhouette ===
    const continent = svgEl('path', {
      d: `M 80 200 Q 100 60 220 40 L 340 60 Q 400 40 480 70 L 560 100 Q 620 80 700 100 L 780 60 Q 880 40 950 90 L 970 200 Q 990 300 960 400 L 980 500 Q 950 620 840 640 L 700 620 Q 620 640 540 620 L 400 660 Q 280 680 180 640 L 60 500 Q 40 380 60 280 Q 60 230 80 200 Z`,
      fill: 'rgba(23, 15, 40, 0.6)',
      stroke: 'rgba(201, 162, 39, 0.15)',
      'stroke-width': '1',
      'pointer-events': 'none'
    });
    svg.appendChild(continent);

    // === Regions (clickable) ===
    const regionLayer = svgEl('g', { id: 'regionLayer' });
    regions.forEach(region => {
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
        showTooltip(tooltip, region, e);
      });
      
      circle.addEventListener('mousemove', (e) => {
        moveTooltip(tooltip, e);
      });
      
      circle.addEventListener('mouseleave', () => {
        circle.setAttribute('fill-opacity', '0.35');
        circle.setAttribute('r', '22');
        hideTooltip(tooltip);
      });
      
      circle.addEventListener('click', () => {
        selectRegion(region.id);
      });
      
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

      // Region name label
      const label = svgEl('text', {
        x: region.x, y: region.y + 42,
        class: 'map-region-label',
        'pointer-events': 'none'
      });
      label.textContent = region.name;
      regionLayer.appendChild(label);
    });
    svg.appendChild(regionLayer);

    // === Legend ===
    if (legend) {
      regions.forEach(region => {
        const item = el('div', { class: 'legend-item', 'data-region': region.id });
        const dot = el('span', { class: 'legend-dot' });
        dot.style.background = region.color;
        dot.style.color = region.color;
        item.appendChild(dot);
        item.appendChild(el('div', { class: 'legend-name', text: region.name }));
        item.addEventListener('click', () => selectRegion(region.id));
        item.addEventListener('mouseenter', () => highlightRegion(region.id, true));
        item.addEventListener('mouseleave', () => highlightRegion(region.id, false));
        legend.appendChild(item);
      });
    }
  }

  function showTooltip(tooltip, region, e) {
    tooltip.innerHTML = `
      <div class="map-tooltip-title">${escapeHtml(region.name)}</div>
      <div class="map-tooltip-sub">${escapeHtml(region.control || 'Unknown')}</div>
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
    
    // Scroll to region card in Regions section
    const regionCard = $$('.region-card').find(card => {
      const nameEl = card.querySelector('.region-name');
      return nameEl && nameEl.textContent === region.name;
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
      const card = el('article', {
        class: 'race-card',
        'data-race-id': race.id,
        style: `animation-delay: ${i * 0.06}s`
      });
      card.appendChild(el('div', { class: 'race-card-inner' }, [
        el('span', { class: 'race-icon', text: race.icon }),
        el('h3', { class: 'race-name', text: race.name }),
        el('div', { class: 'race-epithet', text: race.epithet }),
        el('p', { class: 'race-desc', text: race.shortDesc }),
        el('div', { class: 'race-traits' }, race.traits.map(t => el('span', { class: 'race-trait', text: t }))),
        el('div', { class: 'race-secret', text: race.secret })
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
    MAGIC_SCHOOLS.forEach(school => {
      container.appendChild(el('article', {
        class: 'magic-school',
        style: `--school-color: ${school.color}`
      }, [
        el('span', { class: 'magic-symbol', text: school.icon }),
        el('h3', { class: 'magic-name', text: school.name }),
        el('div', { class: 'magic-tag', text: school.tag }),
        el('p', { class: 'magic-desc', text: school.desc }),
        el('div', { class: 'magic-meta' }, [
          el('div', { class: 'magic-meta-item' }, [el('span', { class: 'label', text: 'Source' }), el('span', { class: 'value', text: school.source })]),
          el('div', { class: 'magic-meta-item' }, [el('span', { class: 'label', text: 'Cost' }), el('span', { class: 'value', text: school.cost })]),
          el('div', { class: 'magic-meta-item' }, [el('span', { class: 'label', text: 'Users' }), el('span', { class: 'value', text: school.users })]),
          el('div', { class: 'magic-meta-item' }, [el('span', { class: 'label', text: 'Use' }), el('span', { class: 'value', text: school.combatUse })])
        ])
      ]));
    });
    
    const lawsGrid = $('#lawsGrid');
    if (lawsGrid && typeof MAGIC_LAWS !== 'undefined') {
      MAGIC_LAWS.forEach(law => {
        lawsGrid.appendChild(el('div', { class: 'law-card' }, [
          el('span', { class: 'law-num', text: law.num }),
          el('h4', { class: 'law-title', text: law.title }),
          el('p', { class: 'law-desc', text: law.desc })
        ]));
      });
    }
  }

  /* ============ CHARACTERS ============ */
  function renderCharacters() {
    const grid = $('#charactersGrid');
    if (!grid || typeof CHARACTERS === 'undefined') return;
    CHARACTERS.forEach(char => {
      const card = el('article', { class: 'char-card', 'data-char-id': char.id }, [
        el('div', { class: 'char-portrait', text: char.icon }),
        el('div', { class: 'char-overlay' }, [
          el('div', { class: 'char-faction', text: char.faction }),
          el('h3', { class: 'char-name', text: char.name }),
          el('div', { class: 'char-title', text: char.title }),
          el('div', { class: 'char-status', style: `--status-color: ${char.statusColor}` }, [
            el('span', { class: 'dot' }),
            el('span', { text: char.status })
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
    
    body.innerHTML = `
      <div class="modal-char-header">
        <div class="modal-char-icon">${char.icon}</div>
        <div>
          <div class="modal-char-faction">${escapeHtml(char.faction)}</div>
          <h2 class="modal-char-name">${escapeHtml(char.name)}</h2>
          <div class="modal-char-title">${escapeHtml(char.title)}</div>
        </div>
      </div>
      <div class="modal-stats">
        <div class="stat-box"><span class="stat-box-label">Race</span><span class="stat-box-value">${escapeHtml(char.race)}</span></div>
        <div class="stat-box"><span class="stat-box-label">Age</span><span class="stat-box-value">${escapeHtml(char.age)}</span></div>
        <div class="stat-box"><span class="stat-box-label">Born</span><span class="stat-box-value">${escapeHtml(char.born)}</span></div>
        <div class="stat-box"><span class="stat-box-label">Status</span><span class="stat-box-value" style="color:${char.statusColor}">${escapeHtml(char.status)}</span></div>
      </div>
      <div class="modal-section"><div class="modal-section-title">Summary</div><p>${escapeHtml(char.summary)}</p></div>
      <div class="modal-section"><div class="modal-section-title">Biography</div><p>${escapeHtml(char.fullBio)}</p></div>
      <div class="modal-section"><div class="modal-section-title">Personality</div><p>${escapeHtml(char.personality)}</p></div>
      <div class="modal-section"><div class="modal-section-title">Abilities</div><ul style="list-style:none;padding:0;">${(char.abilities||[]).map(a => `<li style="padding:0.75rem 0;border-bottom:1px solid rgba(201,162,39,0.08);font-family:var(--font-serif);color:var(--text-secondary);line-height:1.75;">${escapeHtml(a)}</li>`).join('')}</ul></div>
      <div class="modal-section"><div class="modal-section-title">Flaws</div><ul style="list-style:none;padding:0;">${(char.flaws||[]).map(f => `<li style="padding:0.75rem 0;border-bottom:1px solid rgba(122,26,26,0.15);font-family:var(--font-serif);color:#c89a9a;line-height:1.75;">${escapeHtml(f)}</li>`).join('')}</ul></div>
      <div class="modal-section"><div class="modal-section-title">Relationships</div><ul style="list-style:none;padding:0;">${(char.relationships||[]).map(r => `<li style="padding:0.75rem 0;border-bottom:1px solid rgba(201,162,39,0.08);"><div style="font-family:var(--font-display);color:var(--gold-bright);font-size:0.95rem;margin-bottom:0.25rem;">${escapeHtml(r.to)} <span style="font-size:0.75rem;color:var(--text-muted);letter-spacing:0.1em;">— ${escapeHtml(r.type)}</span></div><div style="font-family:var(--font-serif);color:var(--text-secondary);font-size:0.95rem;">${escapeHtml(r.detail)}</div></li>`).join('')}</ul></div>
      <div class="modal-section"><div class="modal-section-title">Quotes</div>${(char.quotes||[]).map(q => `<p style="font-style:italic;color:var(--gold-dim);border-left:2px solid var(--gold);padding-left:1rem;margin:1rem 0;">"${escapeHtml(q)}"</p>`).join('')}</div>
      <div class="modal-section"><div class="modal-section-title">Story Hooks</div><ul style="list-style:none;padding:0;">${(char.storyHooks||[]).map(h => `<li style="padding:0.75rem 0;border-bottom:1px solid rgba(201,162,39,0.08);font-family:var(--font-serif);color:var(--text-secondary);line-height:1.75;">${escapeHtml(h)}</li>`).join('')}</ul></div>
    `;
    
    $('#characterModal').classList.add('active');
    document.body.classList.add('modal-open');
  }

  function initModal() {
    const modal = $('#characterModal');
    if (!modal) return;
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
    HOUSES.forEach(house => {
      grid.appendChild(el('article', {
        class: 'house-card',
        style: `--house-color: ${house.color}`
      }, [
        el('span', { class: 'house-sigil', text: house.sigil }),
        el('h3', { class: 'house-name', text: house.name }),
        el('div', { class: 'house-seat', text: house.seat }),
        el('div', { class: 'house-motto', text: house.motto }),
        el('p', { class: 'house-desc', text: house.desc }),
        el('div', { class: 'house-meta' }, [
          el('span', {}, [document.createTextNode('Wealth: '), el('strong', { text: house.wealth })]),
          el('span', {}, [document.createTextNode('Military: '), el('strong', { text: house.military })])
        ])
      ]));
    });
  }

  /* ============ REGIONS ============ */
  function renderRegions() {
    const grid = $('#regionsGrid');
    if (!grid || typeof REGIONS === 'undefined') return;
    REGIONS.forEach(region => {
      const card = el('article', {
        class: 'region-card',
        'data-region-name': region.name,
        style: `--region-color: ${region.color}`
      }, [
        el('h3', { class: 'region-name', text: region.name }),
        el('div', { class: 'region-type', text: region.type }),
        el('p', { class: 'region-desc', text: region.desc }),
        el('div', { class: 'region-control' }, [
          document.createTextNode('Controlled by: '),
          el('strong', { text: region.control })
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
    const filtered = filter === 'all' ? TIMELINE : TIMELINE.filter(t => t.era === filter);
    filtered.forEach(event => {
      container.appendChild(el('div', { class: 'timeline-event' }, [
        el('div', { class: 'timeline-year', text: event.year }),
        el('h4', { class: 'timeline-title', text: event.title }),
        el('p', { class: 'timeline-desc', text: event.desc }),
        el('span', { class: 'timeline-era-tag', text: event.eraName })
      ]));
    });
  }

  function initTimelineFilters() {
    const controls = $('.timeline-controls');
    if (!controls) return;
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
      artifacts: { data: ARTIFACTS, typeKey: 'type' },
      gods: { data: GODS, typeKey: 'domain', nameKey: 'name', descKey: 'desc', extraKey: 'status' },
      creatures: { data: CREATURES, typeKey: 'class', nameKey: 'name', descKey: 'desc', extraKey: 'danger' },
      prophecies: { data: PROPHECIES, typeKey: 'source', nameKey: 'title', descKey: 'text', extraKey: 'status' },
      languages: { data: LANGUAGES, typeKey: 'script', nameKey: 'name', descKey: 'desc', extraKey: 'speakers' }
    };
    
    const config = dataMap[tab];
    if (!config || !config.data) return;
    
    const grid = el('div', { class: 'codex-grid' });
    config.data.forEach(item => {
      const name = item[config.nameKey || 'name'];
      const type = item[config.typeKey];
      const desc = item[config.descKey || 'desc'];
      const extra = item[config.extraKey];
      grid.appendChild(el('div', { class: 'codex-item' }, [
        el('span', { class: 'codex-item-icon', text: item.icon }),
        el('h4', { class: 'codex-item-name', text: name }),
        el('div', { class: 'codex-item-type', text: type }),
        el('p', { class: 'codex-item-desc', text: desc }),
        extra ? el('div', {
          style: 'margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(201,162,39,0.1);font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);',
          text: (tab === 'prophecies' ? 'Status: ' : tab === 'creatures' ? 'Danger: ' : tab === 'gods' ? 'Status: ' : 'Speakers: ') + extra
        }) : null
      ]));
    });
    content.appendChild(grid);
  }

  function initCodexTabs() {
    const tabs = $('#codexTabs');
    if (!tabs) return;
    tabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.codex-tab');
      if (!tab) return;
      $$('.codex-tab', tabs).forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCodex(tab.dataset.tab);
    });
  }

  /* ============ SEARCH ============ */
  function initSearch() {
    const input = $('#globalSearch');
    const results = $('#searchResults');
    if (!input || !results) return;
    
    const index = [];
    const add = (arr, cat, type) => {
      if (typeof arr === 'undefined') return;
      arr.forEach(item => {
        index.push({
          cat, type,
          name: item.name || item.title,
          id: item.id || (item.name || item.title).toLowerCase().replace(/\s+/g, '-')
        });
      });
    };
    add(CHARACTERS, 'Character', 'character');
    add(RACES, 'Race', 'race');
    add(HOUSES, 'House', 'house');
    add(REGIONS, 'Region', 'region');
    add(ARTIFACTS, 'Artifact', 'artifact');
    add(MAGIC_SCHOOLS, 'Magic', 'magic');
    add(GODS, 'God', 'god');
    add(CREATURES, 'Creature', 'creature');
    add(PROPHECIES, 'Prophecy', 'prophecy');
    
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) {
        results.classList.remove('active');
        results.innerHTML = '';
        return;
      }
      const matches = index.filter(item => item.name.toLowerCase().includes(q)).slice(0, 10);
      if (!matches.length) {
        results.innerHTML = '<div class="search-result-item" style="color:var(--text-muted);font-style:italic;">No results found in the chronicle.</div>';
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
            const mapRegion = MAP_DATA.regions.find(r => r.name === m.name);
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
    targets.forEach(t => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(30px)';
      t.style.transition = 'opacity 0.7s cubic-bezier(0.19, 1, 0.22, 1), transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)';
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, parseInt(el.style.animationDelay) || 0);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    targets.forEach(t => observer.observe(t));
  }

  /* ============ INIT ============ */
  function init() {
    initLoader();
    initStarField();
    initNavigation();
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
    
    console.log('%c◈ AETHERMOOR LOADED ◈', 'color: #e8c547; font-family: serif; font-size: 16px; letter-spacing: 0.3em;');
    console.log('%cThe chronicle is complete. The world is waiting.', 'color: #7a6f5e; font-style: italic; font-family: serif;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();