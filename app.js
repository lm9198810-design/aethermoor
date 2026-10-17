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

  /* ============ AETHERMOOR SIGIL SYSTEM ============ */
  const ICON_SYMBOLS = Object.freeze({
    '🌍': 'world', '🗺️': 'map', '👥': 'people', '✨': 'sparkle', '⚔️': 'swords',
    '🏰': 'castle', '🏔️': 'mountain', '📜': 'scroll', '📖': 'book', '📚': 'books',
    '⚒️': 'crossed-hammers', '🕳️': 'abyss', '🕯️': 'candle', '🗡️': 'dagger',
    '🌑': 'eclipse', '🩸': 'blood', '🌸': 'blossom', '💀': 'skull', '🌊': 'waves',
    '👑': 'crown', '🌙': 'moon', '🕷️': 'spider', '🔨': 'hammer', '🐉': 'dragon',
    '🪓': 'axe', '🦊': 'fox', '👁️': 'eye', '👹': 'demon', '🜁': 'wind',
    'ᛟ': 'rune', '🔥': 'flame', '◈': 'rune', '✦': 'star', '☀️': 'sun',
    '❄️': 'snowflake', '🏹': 'bow', '💎': 'gem', '🌟': 'star', '🌠': 'comet',
    '🪶': 'feather', '⚖️': 'scales', '📕': 'book', '📗': 'book', '📘': 'book',
    '⚱️': 'urn', '🗝️': 'key', '🎭': 'mask', '🚪': 'gate', '🧭': 'compass',
    '🌲': 'pine', '🜂': 'flame', '🜄': 'water', '🌋': 'volcano', '🌫️': 'mist',
    '🐄': 'beast', '🐑': 'beast', '🐎': 'beast', '🐺': 'beast', '🐻': 'beast',
    '🦅': 'eagle', '🐟': 'fish', '🐀': 'beast', '🦇': 'bat', '🦎': 'beast',
    '🐍': 'serpent', '🐲': 'dragon', '👻': 'ghost', '🦑': 'squid', '🐂': 'beast',
    '🦌': 'deer', '🌳': 'pine', '🦁': 'lion', '🦋': 'butterfly', '💰': 'coin',
    '⚡': 'lightning', '🦷': 'fang'
  });

  const HOUSE_CRESTS = Object.freeze({
    'House Vaelor': 'crest-vaelor',
    'House Shadowmere': 'crest-shadowmere',
    'House Whisper': 'crest-whisper',
    'House Ironheart': 'crest-ironheart',
    'House Emberforge': 'crest-emberforge',
    'The Valerian Empire': 'crest-valerian',
    'House Vareth': 'crest-vareth',
    'House Stormborn': 'crest-stormborn',
    'House Drakmoor': 'crest-drakmoor',
    'House Cinderborn': 'crest-cinderborn',
    'House Ashborn': 'crest-ashborn',
    'The Red Hand': 'crest-redhand',
    'The Iron Fangs': 'crest-ironfangs',
    'The Broken Skull': 'crest-brokenskull',
    "The Adventurers' Guild": 'crest-adventurers',
    'The Iron Pact': 'crest-ironpact',
    'The Silent Choir': 'crest-choir'
  });

  const VECTOR_SIGIL_IDS = new Set(Object.values(ICON_SYMBOLS));

  function iconSymbol(value) {
    return ICON_SYMBOLS[value] || (VECTOR_SIGIL_IDS.has(value) ? value : 'rune');
  }

  function createSigilIcon(value, options = {}) {
    const symbol = options.symbol || iconSymbol(value);
    const baseClass = options.className || 'sigil-icon';
    const classes = baseClass.split(/\s+/).includes('sigil-icon') ? baseClass : baseClass + ' sigil-icon';
    const attrs = { class: classes, 'aria-hidden': 'true' };
    if (options.color) attrs.style = '--sigil-color: ' + options.color;
    const wrapper = el('span', attrs);
    const svg = svgEl('svg', {
      class: 'sigil-art', viewBox: '0 0 64 64',
      focusable: 'false', 'aria-hidden': 'true'
    });
    svg.appendChild(svgEl('use', { href: 'assets/aethermoor-sigils.svg#' + symbol }));
    wrapper.appendChild(svg);
    return wrapper;
  }

  function sigilMarkup(value, options = {}) {
    const symbol = options.symbol || iconSymbol(value);
    const baseClass = options.className || 'sigil-icon';
    const classes = baseClass.split(/\s+/).includes('sigil-icon') ? baseClass : baseClass + ' sigil-icon';
    const colorStyle = options.color ? ' style="--sigil-color:' + escapeHtml(options.color) + '"' : '';
    return '<span class="' + classes + '"' + colorStyle + ' aria-hidden="true">' +
      '<svg class="sigil-art" viewBox="0 0 64 64" focusable="false" aria-hidden="true">' +
      '<use href="assets/aethermoor-sigils.svg#' + symbol + '"></use></svg></span>';
  }

  function hydrateStaticSigils() {
    $$('[data-sigil]').forEach(node => {
      if (node.querySelector('svg')) return;
      const svg = svgEl('svg', {
        class: 'sigil-art', viewBox: '0 0 64 64',
        focusable: 'false', 'aria-hidden': 'true'
      });
      svg.appendChild(svgEl('use', { href: 'assets/aethermoor-sigils.svg#' + node.dataset.sigil }));
      node.appendChild(svg);
    });
  }

  /* ============ GLOBAL STATE ============ */
  const getSavedLanguage = () => {
    try {
      return window.localStorage.getItem('aethermoor_lang') === 'fa' ? 'fa' : 'en';
    } catch (_) {
      // Storage can be unavailable in private/restricted browser contexts.
      return 'en';
    }
  };

  let CURRENT_LANG = getSavedLanguage();
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
    if (!navToggle || !navLinks) return;
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
    window.scrollTo({ top: 0, behavior: 'auto' });
    
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
        createSigilIcon(tile.icon, { className: 'tile-icon sigil-icon' }),
        el('h3', { text: getContent('worldTiles', tile.title, 'title', tile.title) }),
        el('p', { text: getContent('worldTiles', tile.title, 'desc', tile.desc) }),
        el('div', { class: 'tile-stat' }, [
          el('span', { text: getContent('worldTiles', tile.title, 'statLabel', tile.statLabel) }),
          el('span', { text: getContent('worldTiles', tile.title, 'statValue', tile.statValue) })
        ])
      ]));
    });
  }

  /* ============ INTERACTIVE FANTASY ATLAS ============ */
  const MAP_VIEW = { x: 0, y: 0, w: 1800, h: 1260, borders: true, cities: true, drag: null };

  function applyMapView(svg) {
    svg.setAttribute('viewBox', [MAP_VIEW.x, MAP_VIEW.y, MAP_VIEW.w, MAP_VIEW.h].join(' '));
  }

  function zoomMapAt(svg, factor, clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    const px = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const py = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    const nextW = Math.max(450, Math.min(1800, MAP_VIEW.w * factor));
    const nextH = nextW * 0.7;
    const worldX = MAP_VIEW.x + px * MAP_VIEW.w;
    const worldY = MAP_VIEW.y + py * MAP_VIEW.h;
    MAP_VIEW.x = Math.max(0, Math.min(1800 - nextW, worldX - px * nextW));
    MAP_VIEW.y = Math.max(0, Math.min(1260 - nextH, worldY - py * nextH));
    MAP_VIEW.w = nextW;
    MAP_VIEW.h = nextH;
    applyMapView(svg);
  }

  function updateMapControlLabels() {
    const borders = $('#mapBordersToggle');
    const cities = $('#mapCitiesToggle');
    if (borders) {
      borders.textContent = t(MAP_VIEW.borders ? 'map_borders_on' : 'map_borders_off');
      borders.setAttribute('aria-pressed', String(MAP_VIEW.borders));
      borders.classList.toggle('is-active', MAP_VIEW.borders);
    }
    if (cities) {
      cities.textContent = t(MAP_VIEW.cities ? 'map_cities_on' : 'map_cities_off');
      cities.setAttribute('aria-pressed', String(MAP_VIEW.cities));
      cities.classList.toggle('is-active', MAP_VIEW.cities);
    }
  }

  function initMapControls(svg) {
    if (svg.dataset.mapControlsInit === 'true') return;
    svg.dataset.mapControlsInit = 'true';
    $('#mapZoomIn')?.addEventListener('click', () => zoomMapAt(svg, 0.78, svg.getBoundingClientRect().left + svg.clientWidth / 2, svg.getBoundingClientRect().top + svg.clientHeight / 2));
    $('#mapZoomOut')?.addEventListener('click', () => zoomMapAt(svg, 1.28, svg.getBoundingClientRect().left + svg.clientWidth / 2, svg.getBoundingClientRect().top + svg.clientHeight / 2));
    $('#mapResetView')?.addEventListener('click', () => {
      MAP_VIEW.x = 0; MAP_VIEW.y = 0; MAP_VIEW.w = 1800; MAP_VIEW.h = 1260;
      applyMapView(svg);
    });
    $('#mapBordersToggle')?.addEventListener('click', () => {
      MAP_VIEW.borders = !MAP_VIEW.borders;
      svg.querySelector('.map-border-layer')?.classList.toggle('is-hidden', !MAP_VIEW.borders);
      updateMapControlLabels();
    });
    $('#mapCitiesToggle')?.addEventListener('click', () => {
      MAP_VIEW.cities = !MAP_VIEW.cities;
      svg.querySelector('.map-city-layer')?.classList.toggle('is-hidden', !MAP_VIEW.cities);
      updateMapControlLabels();
    });
    svg.addEventListener('wheel', event => {
      event.preventDefault();
      zoomMapAt(svg, event.deltaY < 0 ? 0.86 : 1.16, event.clientX, event.clientY);
    }, { passive: false });
    svg.addEventListener('pointerdown', event => {
      if (event.target.closest('.map-region-marker, .map-city-marker')) return;
      MAP_VIEW.drag = { id: event.pointerId, x: event.clientX, y: event.clientY, viewX: MAP_VIEW.x, viewY: MAP_VIEW.y };
      svg.classList.add('is-panning');
      svg.setPointerCapture(event.pointerId);
    });
    svg.addEventListener('pointermove', event => {
      if (!MAP_VIEW.drag || MAP_VIEW.drag.id !== event.pointerId) return;
      const rect = svg.getBoundingClientRect();
      MAP_VIEW.x = Math.max(0, Math.min(1800 - MAP_VIEW.w, MAP_VIEW.drag.viewX - (event.clientX - MAP_VIEW.drag.x) * MAP_VIEW.w / rect.width));
      MAP_VIEW.y = Math.max(0, Math.min(1260 - MAP_VIEW.h, MAP_VIEW.drag.viewY - (event.clientY - MAP_VIEW.drag.y) * MAP_VIEW.h / rect.height));
      applyMapView(svg);
    });
    const endPan = event => {
      if (MAP_VIEW.drag && MAP_VIEW.drag.id === event.pointerId) MAP_VIEW.drag = null;
      svg.classList.remove('is-panning');
    };
    svg.addEventListener('pointerup', endPan);
    svg.addEventListener('pointercancel', endPan);
    updateMapControlLabels();
  }

  function renderAtlasOverlays(svg, tooltip) {
    const terrain = svgEl('g', { class: 'map-terrain-detail', transform: 'scale(1.8)' });
    // The Divine Divide is a natural wall as well as a divine wound: layered ridges make
    // the Black Chasm a continent-scale barrier, not a passable valley.
    terrain.appendChild(svgEl('path', { d: 'M 52 151 C 170 137 255 158 350 148 S 540 142 640 153 S 825 139 948 151', fill: 'none', stroke: '#202a2e', 'stroke-width': 22, 'stroke-linecap': 'round', opacity: '.95' }));
    terrain.appendChild(svgEl('path', { d: 'M 52 151 C 170 137 255 158 350 148 S 540 142 640 153 S 825 139 948 151', fill: 'none', stroke: '#a9a38b', 'stroke-width': 1.8', 'stroke-linecap': 'round', opacity: '.8' }));
    for (let i = 0; i < 28; i++) {
      const x = 66 + i * 32;
      const y = 150 + Math.sin(i * 1.7) * 7;
      const height = 23 + (i % 4) * 5 + (i % 7 === 0 ? 9 : 0);
      const peak = svgEl('g', { opacity: i % 3 === 0 ? '.98' : '.84' });
      peak.appendChild(svgEl('path', { d: `M ${x - 22} ${y + 17} L ${x} ${y - height} L ${x + 25} ${y + 17} Z`, fill: '#303638', stroke: '#9b9a87', 'stroke-width': 1.2 }));
      peak.appendChild(svgEl('path', { d: `M ${x - 8} ${y - height + 13} L ${x} ${y - height} L ${x + 9} ${y - height + 13} L ${x + 2} ${y - height + 10} L ${x} ${y - height + 15} L ${x - 3} ${y - height + 10} Z`, fill: '#d8d7c7', opacity: '.9' }));
      terrain.appendChild(peak);
    }
    // A second broken ridge makes the gorge difficult to bypass even far from the seal.
    terrain.appendChild(svgEl('path', { d: 'M 70 181 Q 180 165 275 184 T 480 179 T 690 184 T 930 178', fill: 'none', stroke: '#111a20', 'stroke-width': 10, opacity: '.9' }));
    // Trade roads and rivers are deliberately subtle, so political labels remain legible.
    terrain.appendChild(svgEl('path', { d: 'M 415 272 C 390 315 430 355 405 405 S 430 470 455 510 S 470 575 420 620', fill: 'none', stroke: '#6aa8b4', 'stroke-width': 2.2, opacity: '.7' }));
    terrain.appendChild(svgEl('path', { d: 'M 220 278 C 260 310 310 318 335 350 S 380 395 405 405', fill: 'none', stroke: '#8b7951', 'stroke-width': 2, 'stroke-dasharray': '5 4', opacity: '.9' }));
    terrain.appendChild(svgEl('path', { d: 'M 405 405 C 470 390 515 390 585 410 S 660 470 735 545', fill: 'none', stroke: '#8b7951', 'stroke-width': 2, 'stroke-dasharray': '5 4', opacity: '.9' }));
    const divideLabel = svgEl('text', { x: 500, y: 211, 'text-anchor': 'middle', fill: '#e0d3ac', 'font-size': 9, 'font-family': 'Cinzel,serif', 'letter-spacing': 1.5, stroke: '#07111c', 'stroke-width': 2.5, 'paint-order': 'stroke' });
    divideLabel.textContent = CURRENT_LANG === 'fa' ? 'دیواره‌ی الهی — گذرناپذیر' : 'THE DIVINE DIVIDE · IMPASSABLE HIGH WALL';
    terrain.appendChild(divideLabel);
    svg.appendChild(terrain);

    const borders = svgEl('g', { class: 'map-border-layer' + (MAP_VIEW.borders ? '' : ' is-hidden'), transform: 'scale(1.8)' });
    const borderLines = [
      { name: 'VALERIAN SUCCESSOR REALMS', d: 'M 270 352 C 310 325 348 338 378 358 S 442 353 476 378 S 526 422 520 465', x: 405, y: 372 },
      { name: 'AELDRIN ENCLAVE', d: 'M 333 207 C 365 190 416 196 456 224 S 459 263 424 285', x: 394, y: 218 },
      { name: 'FROSTSPINE HOLDS', d: 'M 104 219 C 145 197 205 201 260 224 S 282 254 276 285', x: 190, y: 214 },
      { name: 'STORMLAND LEAGUE', d: 'M 84 392 C 128 376 178 402 220 426 S 246 461 234 493', x: 159, y: 411 },
      { name: 'SYLVAAR BELOW', d: 'M 389 453 C 425 432 478 442 522 470 S 533 511 507 545', x: 464, y: 462 },
      { name: 'ASHEN FREE CITIES', d: 'M 588 286 C 632 277 679 299 705 330 S 720 367 705 392', x: 650, y: 306 },
      { name: 'DRAEKON CLANS', d: 'M 654 492 C 700 474 756 489 800 525 S 802 574 778 612', x: 730, y: 503 },
      { name: 'MISTLAND WARDS', d: 'M 48 527 C 73 512 105 523 124 547 S 119 584 91 596', x: 88, y: 536 }
    ];
    borderLines.forEach(b => {
      borders.appendChild(svgEl('path', { d: b.d, class: 'map-border-line' }));
      const label = svgEl('text', { x: b.x, y: b.y, class: 'map-border-label', 'text-anchor': 'middle' });
      label.textContent = b.name;
      borders.appendChild(label);
    });
    svg.appendChild(borders);

    const places = [
      { name: "Valerius's Rest", fa: 'آرامگاه والریوس', x: 400, y: 420, region: 'heartlands', note: 'Imperial capital built above the Abyss; court factions dispute the succession.' },
      { name: 'Aelthalas', fa: 'آئل‌تالاس', x: 430, y: 242, region: 'silver-wood', note: 'The Aeldrin crystal capital, sheltered within the Silver Wood.' },
      { name: 'Hearthforge', fa: 'آتشگاه', x: 220, y: 246, region: 'frostspine', note: 'The dwarven Iron Hold, carved deep into the Frostspine.' },
      { name: 'Ondrath', fa: 'اوندراِث', x: 480, y: 500, region: 'shadowmere', note: 'The Sylvaar seat beneath the earth; its court hides the truth of its queen.' },
      { name: "Kael'Dorath", fa: 'کائل‌دورات', x: 750, y: 560, region: 'dragons-reach', note: 'The Ashen Citadel of the Draekon clans.' },
      { name: 'Stormwatch', fa: 'دیده‌بان توفان', x: 185, y: 452, region: 'stormlands', note: 'A fortified port that watches the western storm routes.' },
      { name: 'Thornhollow', fa: 'تورن‌هالو', x: 122, y: 357, region: 'whispering-forest', note: 'A forest town whose old roads vanish under the Whispering Forest.' },
      { name: 'Redhaven', fa: 'بندر سرخ', x: 585, y: 405, region: 'ashen-wastes', note: 'A disputed caravan port linking the central roads to the eastern wastes.' },
      { name: 'Ashen Gate', fa: 'دروازه‌ی خاکستر', x: 610, y: 321, region: 'ashen-wastes', note: 'A fortified crossing on the old imperial road.' },
      { name: 'Mistport', fa: 'بندر مه', x: 78, y: 560, region: 'mistlands', note: 'A remote harbor whose charts are unreliable even in calm weather.' },
      { name: 'Godfall Abbey', fa: 'صومعه‌ی سقوط خدا', x: 300, y: 340, region: 'godfall', note: 'A ruined sanctuary built where divine weapons struck the earth.' },
      { name: 'Irondeep', fa: 'ژرف‌آهن', x: 180, y: 580, region: 'iron-coast', note: 'A dwarven trade enclave on the iron coast.' },
      { name: 'Sunspire', fa: 'خورشیدمنار', x: 340, y: 600, region: 'sunlit-coast', note: 'A coastal market city known for salt, glass, and sea charts.' },
      { name: 'Emberfall', fa: 'اخگرفرود', x: 700, y: 620, region: 'ember-fields', note: 'A settlement built along the safe edge of the volcanic fields.' }
    ];
    const cityLayer = svgEl('g', { class: 'map-city-layer' + (MAP_VIEW.cities ? '' : ' is-hidden'), transform: 'scale(1.8)' });
    places.forEach(place => {
      const shownName = CURRENT_LANG === 'fa' ? place.fa : place.name;
      const marker = svgEl('g', { class: 'map-city-marker', tabindex: '0', role: 'button', 'aria-label': shownName });
      marker.appendChild(svgEl('circle', { cx: place.x, cy: place.y, r: 7, class: 'map-city-ring' }));
      marker.appendChild(svgEl('circle', { cx: place.x, cy: place.y, r: 3.1, class: 'map-city-dot' }));
      const label = svgEl('text', { x: place.x, y: place.y - 10, class: 'map-city-label' });
      label.textContent = shownName;
      marker.appendChild(label);
      marker.addEventListener('mouseenter', event => showTooltip(tooltip, shownName, CURRENT_LANG === 'fa' ? place.fa + ' · ' + place.note : place.note, event));
      marker.addEventListener('mousemove', event => moveTooltip(tooltip, event));
      marker.addEventListener('mouseleave', () => hideTooltip(tooltip));
      marker.addEventListener('click', () => selectRegion(place.region));
      marker.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectRegion(place.region); }
      });
      cityLayer.appendChild(marker);
    });
    svg.appendChild(cityLayer);
  }

  function renderMap() {
    const svg = $('#worldMap');
    const tooltip = $('#mapTooltip');
    const legend = $('#mapLegend');
    if (!svg || typeof MAP_DATA === 'undefined') return;

    svg.innerHTML = '';
    if (legend) legend.innerHTML = '';

    const { regions } = MAP_DATA;
    applyMapView(svg);
    svg.setAttribute('role', 'group');
    svg.setAttribute('aria-label', CURRENT_LANG === 'fa' ? 'نقشهٔ تعاملی جهان اترمور' : 'Interactive atlas of Aethermoor');

    // The artwork preserves the site's original continent and Xarnath silhouettes.
    // Region markers and labels are a separate interactive layer above the illustration.
    svg.appendChild(svgEl('image', {
      href: 'assets/aethermoor-map.svg',
      x: 0, y: 0, width: 1800, height: 1260,
      preserveAspectRatio: 'none',
      'pointer-events': 'none',
      class: 'map-artwork'
    }));

    renderAtlasOverlays(svg, tooltip);

    const labelOffsets = {
      'xarnath': { dx: 0, dy: -18 },
      'godseal': { dx: 64, dy: -7 },
      'black-chasm': { dx: 72, dy: 16 },
      'frostspine': { dx: -12, dy: 35 },
      'silver-wood': { dx: 32, dy: 36 },
      'ashen-wastes': { dx: 16, dy: 35 },
      'heartlands': { dx: 0, dy: 38 },
      'stormlands': { dx: -10, dy: 35 },
      'shadowmere': { dx: 0, dy: 36 },
      'broken-steppe': { dx: -8, dy: 34 },
      'sunlit-coast': { dx: -10, dy: 29 },
      'dragons-reach': { dx: -16, dy: 34 },
      'godfall': { dx: -18, dy: 35 },
      'sunken-kingdoms': { dx: 0, dy: -17 },
      'dead-marches': { dx: 22, dy: 35 },
      'whispering-forest': { dx: 10, dy: 34 },
      'veil': { dx: 0, dy: 35 },
      'mistlands': { dx: 0, dy: 28 },
      'iron-coast': { dx: 0, dy: 34 },
      'fading-garden': { dx: -18, dy: -19 },
      'ember-fields': { dx: 18, dy: 33 }
    };

    const regionLayer = svgEl('g', { id: 'regionLayer', class: 'map-region-layer', transform: 'scale(1.8)' });
    regions.forEach(region => {
      const displayName = CURRENT_LANG === 'fa'
        ? getContent('regions', region.id, 'name', region.name)
        : region.name;
      const displayControl = CURRENT_LANG === 'fa'
        ? getContent('regions', region.id, 'control', region.control)
        : region.control;
      const offset = labelOffsets[region.id] || { dx: 0, dy: 34 };
      const labelX = region.x + offset.dx;
      const labelY = region.y + offset.dy;
      const estimatedWidth = displayName.length * (CURRENT_LANG === 'fa' ? 5.4 : 5.9) + 18;
      const labelWidth = Math.max(56, Math.min(184, estimatedWidth));

      const marker = svgEl('g', {
        class: 'map-region-marker',
        'data-region': region.id,
        style: '--region-color: ' + region.color,
        tabindex: '0',
        role: 'button',
        'aria-label': displayName
      });
      marker.appendChild(svgEl('circle', {
        cx: region.x, cy: region.y, r: 17,
        class: 'map-marker-halo'
      }));
      marker.appendChild(svgEl('circle', {
        cx: region.x, cy: region.y, r: 10,
        class: 'map-marker-ring'
      }));
      marker.appendChild(svgEl('path', {
        d: 'M ' + region.x + ' ' + (region.y - 5) +
           ' L ' + (region.x + 5) + ' ' + region.y +
           ' L ' + region.x + ' ' + (region.y + 5) +
           ' L ' + (region.x - 5) + ' ' + region.y + ' Z',
        class: 'map-marker-gem'
      }));
      marker.appendChild(svgEl('circle', {
        cx: region.x, cy: region.y, r: 1.35,
        class: 'map-marker-core'
      }));

      const labelGroup = svgEl('g', { class: 'map-label-group', 'pointer-events': 'none' });
      labelGroup.appendChild(svgEl('rect', {
        x: labelX - labelWidth / 2,
        y: labelY - 11,
        width: labelWidth,
        height: 22,
        rx: 6,
        class: 'map-label-plate'
      }));
      const label = svgEl('text', {
        x: labelX,
        y: labelY + 0.5,
        class: 'map-region-label',
        'text-anchor': 'middle',
        'dominant-baseline': 'middle'
      });
      label.textContent = displayName;
      labelGroup.appendChild(label);
      marker.appendChild(labelGroup);

      marker.addEventListener('mouseenter', event => {
        marker.classList.add('is-hovered');
        showTooltip(tooltip, displayName, displayControl, event);
      });
      marker.addEventListener('mousemove', event => moveTooltip(tooltip, event));
      marker.addEventListener('mouseleave', () => {
        marker.classList.remove('is-hovered');
        hideTooltip(tooltip);
      });
      marker.addEventListener('click', () => selectRegion(region.id));
      marker.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectRegion(region.id);
        }
      });

      regionLayer.appendChild(marker);
    });
    svg.appendChild(regionLayer);

    // The legend uses the same line-art emblems as the rest of the site.
    if (legend && MAP_DATA.legends) {
      const legendSymbols = {
        Human: 'crown',
        Aeldrin: 'moon',
        Sylvaar: 'spider',
        Dwarves: 'crossed-hammers',
        Draekon: 'dragon',
        Orcs: 'axe',
        Kemiiri: 'fox',
        Demons: 'demon',
        Unknown: 'mist'
      };
      const legendRaces = {
        Human: 'humans', Aeldrin: 'aeldrin', Sylvaar: 'sylvaar',
        Dwarves: 'dwarves', Draekon: 'draekon', Orcs: 'orcs',
        Kemiiri: 'kemiiri', Demons: 'demons'
      };
      MAP_DATA.legends.forEach(itemData => {
        const item = el('div', { class: 'legend-item' });
        item.appendChild(createSigilIcon('', {
          className: 'legend-sigil sigil-icon',
          color: itemData.color,
          symbol: legendSymbols[itemData.label] || 'rune'
        }));
        const label = itemData.label === 'Unknown'
          ? t('unknown')
          : getContent('races', legendRaces[itemData.label], 'name', itemData.label);
        item.appendChild(el('div', { class: 'legend-name', text: label }));
        legend.appendChild(item);
      });
    }
    initMapControls(svg);
    updateMapControlLabels();
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
        createSigilIcon(race.icon, { className: 'race-icon sigil-icon' }),
        el('h3', { class: 'race-name', text: name }),
        el('div', { class: 'race-epithet', text: epithet }),
        el('p', { class: 'race-desc', text: shortDesc }),
        el('div', { class: 'race-traits' }, race.traits.map(tr => el('span', { class: 'race-trait', text: (CURRENT_LANG === 'fa' && typeof FA_DATA !== 'undefined' && FA_DATA.traits && FA_DATA.traits[tr]) || tr }))),
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
        createSigilIcon(school.icon, { className: 'magic-symbol sigil-icon', color: school.color }),
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
        createSigilIcon(char.icon, { className: 'char-portrait sigil-icon', color: char.statusColor }),
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
        <div class="modal-char-icon">${sigilMarkup(char.icon, { className: 'modal-char-sigil sigil-icon', color: char.statusColor })}</div>
        <div>
          <div class="modal-char-faction">${escapeHtml(faction)}</div>
          <h2 class="modal-char-name">${escapeHtml(name)}</h2>
          <div class="modal-char-title">${escapeHtml(title)}</div>
        </div>
      </div>
      <div class="modal-stats">
        <div class="stat-box"><span class="stat-box-label">${escapeHtml(t('modal_race'))}</span><span class="stat-box-value">${escapeHtml(race)}</span></div>
        <div class="stat-box"><span class="stat-box-label">${escapeHtml(t('modal_age'))}</span><span class="stat-box-value">${escapeHtml(getContent('characters', char.id, 'age', char.age))}</span></div>
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
        createSigilIcon(house.sigil, { className: 'house-sigil house-crest sigil-icon', color: house.color, symbol: HOUSE_CRESTS[house.name] || iconSymbol(house.sigil) }),
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
      
      const type = getContent(config.categoryKey, nameKey, config.typeKey, item[config.typeKey]);
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
        createSigilIcon(item.icon, { className: 'codex-item-icon sigil-icon' }),
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
        createSigilIcon('📖', { className: 'book-icon sigil-icon' }),
        el('div', { class: 'book-category', text: category }),
        el('h3', { class: 'book-title', text: title }),
        el('div', { class: 'book-author', text: author }),
        el('p', { class: 'book-excerpt', text: excerpt }),
        el('div', { class: 'book-footer' }, [
          el('span', { text: `${typeof book.pages === 'number' ? book.pages + ' ' + t('book_pages') : getContent('books', book.id, 'pages', book.pages)} · ${getContent('books', book.id, 'date', book.date)}` }),
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
        <span>${escapeHtml(getContent('books', book.id, 'language', book.language))}</span>
        <span>${escapeHtml(typeof book.pages === 'number' ? book.pages + ' ' + t('book_pages') : getContent('books', book.id, 'pages', book.pages))}</span>
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
      const branchesText = typeof guild.branches === 'number'
        ? `${guild.branches} ${branchesWord}`
        : `${L.branchMany}: ${getContent('guilds', guild.name, 'branches', guild.branches)}`;
      
      const card = el('article', {
        class: 'guild-card',
        style: `--guild-color: ${guild.color}`
      }, [
        createSigilIcon(guild.icon, { className: 'guild-icon sigil-icon', color: guild.color }),
        el('h3', { class: 'guild-name', text: name }),
        el('div', { class: 'guild-founded', text: `${L.founded}: ${getContent('guilds', guild.name, 'founded', guild.founded)} · ${branchesText}` }),
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
    const tBoss = (n) => (faAbyss.bossNames && faAbyss.bossNames[n]) || (CURRENT_LANG === 'fa' && n === 'Unknown' ? t('unknown') : n);
    const tBossDesc = (b) => {
      if (CURRENT_LANG !== 'fa') return b.description;
      const mapped = faAbyss.bossDescriptions && faAbyss.bossDescriptions[b.name];
      if (mapped) return mapped;
      const m = b.description.match(/^No living adventurer has returned from Floor (\d+)\. The boss is unknown\.$/);
      if (m) return `هیچ ماجراجوی زنده‌ای از طبقه‌ی ${m[1]} بازنگشته است. رئیس این طبقه ناشناخته است.`;
      if (/^No living adventurer has ever reached Floor 100\./.test(b.description)) return 'هیچ ماجراجوی زنده‌ای هرگز به طبقه‌ی 100 نرسیده است. رئیس ناشناخته است. خودِ طبقه ناشناخته است. همه‌چیز ناشناخته است.';
      return b.description;
    };
    const tThemeDesc = (th) => (faAbyss.themeDescriptions && faAbyss.themeDescriptions[th.theme]) || th.description;
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
      createSigilIcon('🕳️', { className: 'abyss-icon sigil-icon' }),
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
          el('div', { class: 'theme-desc', text: tThemeDesc(theme) })
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
        el('div', { class: 'boss-desc', text: tBossDesc(boss) })
      ]));
    });
    bossesSection.appendChild(bossList);
    container.appendChild(bossesSection);

    // Rules
    const rulesSection = el('div', { class: 'abyss-section' }, [
      el('h3', { class: 'abyss-section-title', text: L.rules })
    ]);
    const rulesList = el('ul', { class: 'rules-list' });
    (faAbyss.rulesFA || abyss.rules).forEach(rule => {
      rulesList.appendChild(el('li', { text: rule }));
    });
    rulesSection.appendChild(rulesList);
    container.appendChild(rulesSection);

    // Facts
    const factsSection = el('div', { class: 'abyss-section' }, [
      el('h3', { class: 'abyss-section-title', text: L.facts })
    ]);
    const factsList = el('ul', { class: 'facts-list' });
    (faAbyss.notableFactsFA || abyss.notableFacts).forEach(fact => {
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
        el('div', { class: 'other-dungeon-location', text: (faDungeons.otherDungeonLocations && faDungeons.otherDungeonLocations[d.name]) || d.location }),
        el('p', { class: 'other-dungeon-desc', text: (faDungeons.otherDungeonDescriptions && faDungeons.otherDungeonDescriptions[d.name]) || d.description }),
        el('div', { class: 'other-dungeon-meta' }, [
          el('span', {}, [document.createTextNode(L.floorsLabel + ' '), el('strong', { text: d.floors })]),
          el('span', {}, [document.createTextNode(L.bossLabel + ' '), el('strong', { text: (faDungeons.otherDungeonBosses && faDungeons.otherDungeonBosses[d.name]) || d.boss.split('—')[0].trim() })])
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
      const activeRaceFilter = $('#raceFilters .filter-btn.active')?.dataset.filter || 'all';
      const activeTimelineEra = $('#timelineControls .era-btn.active')?.dataset.era || 'all';
      const activeCodexTab = $('#codexTabs .codex-tab.active')?.dataset.tab || CURRENT_CODEX_TAB;

      CURRENT_LANG = CURRENT_LANG === 'en' ? 'fa' : 'en';
      try {
        window.localStorage.setItem('aethermoor_lang', CURRENT_LANG);
      } catch (_) {
        // Language switching still works for this session when storage is blocked.
      }
      applyUITranslations();
      
      // Clear rendered cache so pages re-render
      renderedPages.clear();
      // Re-render current page
      renderPage(CURRENT_PAGE);
      // Restore active filters after the current page is rebuilt.
      if (CURRENT_PAGE === 'races') renderRaces(activeRaceFilter);
      if (CURRENT_PAGE === 'timeline') renderTimeline(activeTimelineEra);
      if (CURRENT_PAGE === 'codex') renderCodex(activeCodexTab);
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
          el('div', { class: 'sr-cat', text: CURRENT_LANG === 'fa' ? (({ Character: 'شخصیت', Race: 'نژاد', House: 'خاندان', Region: 'ناحیه', Artifact: 'اثر', Magic: 'جادو', God: 'خدا', Creature: 'موجود', Prophecy: 'پیشگویی', Book: 'کتاب', Guild: 'گیلد' })[m.cat] || m.cat) : m.cat }),
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
    hydrateStaticSigils();
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