# ◈ AETHERMOOR
### The Sundered Realm — A Living Fantasy World Chronicle

> *“We write so that the world does not forget.”*

Aethermoor is an interactive bilingual (English / Persian) fantasy-world chronicle built with plain HTML, CSS, and JavaScript. It has no runtime framework or third-party JavaScript dependencies.

**Live site:** https://lm9198810-design.github.io/aethermoor/

## The world

Aethermoor is one continent on Vaelthar, a world scarred by a divine war. Beyond the Divine Divide and the Black Chasm lies Xarnath, the Demon Continent. The chronicle collects the world's peoples, history, magic, powerful houses, artifacts, and dangerous places.

## What's included

The site has 13 pages: Home, World, Map, Races, Magic, Characters, Houses, Regions, Timeline, Codex, Library, Guilds, and Dungeons.

| Category | Entries |
|---|---:|
| Races | 10 |
| Magic schools | 5 |
| Laws of magic | 4 |
| Houses and tribes | 17 |
| Regions | 21 |
| Timeline events | 31 |
| Characters | 18 |
| Artifacts | 26 |
| Gods | 19 |
| Creatures | 30 |
| Prophecies | 12 |
| Languages | 10 |
| Books | 10 |
| Guilds | 12 |
| Dungeons | 5 |
| **Total catalogued entries** | **230** |

The total counts entries across the categories listed above. The map and region catalogue contain the same 21 region records.

## Features

- English and Persian interface, including right-to-left layout
- Interactive SVG map with region tooltips and a legend
- Search across characters, races, artifacts, books, guilds, and other lore
- Character biographies and a parchment-styled book reader
- Race and timeline filters, plus Codex tabs
- Responsive navigation for desktop and mobile
- Animated home-page counters and saved language preference when browser storage is available
- Dark fantasy visual design with gold accents, mist effects, and page transitions

## Project structure

```text
aethermoor/
├── index.html       # Static page markup and home content
├── styles.css       # Layout, themes, responsive rules, and RTL styles
├── app.js           # Hash router, renderers, search, modals, interactions
├── data.js          # World data and computed catalogue counts
├── lang.js          # English interface strings and Persian translations
├── tests/
│   └── smoke.test.cjs
└── .github/
    └── workflows/
        └── smoke-tests.yml
```

## Run locally

No install step is required. Open `index.html` in a browser, or run a small local server from the project folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000/.

## Validate the project

With Node.js 20 or newer installed, run the dependency-free checks:

```bash
node tests/smoke.test.cjs
```

The tests check JavaScript syntax, catalogue counts, map-to-region consistency, route coverage, and translation-key coverage.


## Illustrated assets

- `assets/aethermoor-map.svg` — detailed 2D atlas art that preserves the original landmass and Xarnath outlines; interactive labels and markers are overlaid by `app.js`.
- `assets/aethermoor-sigils.svg` — shared vector icon library and 17 distinct house/faction crests. These assets are kept in one folder so the six main project files remain uncluttered at the repository root.
