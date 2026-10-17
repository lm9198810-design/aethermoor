/* Dependency-free smoke tests for Aethermoor. Run: node tests/smoke.test.cjs */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const source = { app: read('app.js'), data: read('data.js'), lang: read('lang.js'), html: read('index.html'), css: read('styles.css') };
const silentConsole = { log() {}, warn() {}, error() {} };
for (const [name, text] of Object.entries({ app: source.app, data: source.data, lang: source.lang })) {
  assert.doesNotThrow(() => new vm.Script(text, { filename: name + '.js' }), name + '.js must parse');
}
const world = vm.runInNewContext(
  source.data + '\n;({ WORLD_META, WORLD_TILES, RACES, MAGIC_SCHOOLS, MAGIC_LAWS, HOUSES, REGIONS, TIMELINE, CHARACTERS, ARTIFACTS, GODS, CREATURES, PROPHECIES, LANGUAGES, BOOKS, GUILDS_DATA, DUNGEONS_DATA, MAP_DATA, WORLD_STATS })',
  { console: silentConsole }
);
const translations = vm.runInNewContext(source.lang + '\n;({ UI_TEXT, FA_DATA })', { console: silentConsole });
const expectedStats = {
  races: world.RACES.length, magicSchools: world.MAGIC_SCHOOLS.length, magicLaws: world.MAGIC_LAWS.length,
  houses: world.HOUSES.length, regions: world.REGIONS.length, timelineEvents: world.TIMELINE.length,
  characters: world.CHARACTERS.length, artifacts: world.ARTIFACTS.length, gods: world.GODS.length,
  creatures: world.CREATURES.length, prophecies: world.PROPHECIES.length, languages: world.LANGUAGES.length,
  books: world.BOOKS.length, guilds: world.GUILDS_DATA.length, dungeons: world.DUNGEONS_DATA.otherDungeons.length + 1
};
for (const [key, expected] of Object.entries(expectedStats)) {
  assert.equal(world.WORLD_STATS[key], expected, 'WORLD_STATS.' + key + ' should match source data');
}
const total = Object.values(expectedStats).reduce((sum, count) => sum + count, 0);
assert.equal(world.WORLD_STATS.totalEntries, total, 'totalEntries should include every catalogue category');
assert.equal(total, 230, 'documented catalogue total should be 230');
const regionIds = world.REGIONS.map((region) => region.id);
const mapRegionIds = world.MAP_DATA.regions.map((region) => region.id);
assert.equal(new Set(regionIds).size, regionIds.length, 'region IDs must be unique');
assert.equal(new Set(mapRegionIds).size, mapRegionIds.length, 'map region IDs must be unique');
assert.equal([...mapRegionIds].sort().join('|'), [...regionIds].sort().join('|'), 'map and region IDs should match');
const pageRoutes = [...source.html.matchAll(/<section\b[^>]*\bdata-page="([^"]+)"/g)].map((m) => m[1]);
const routeDeclaration = source.app.match(/const VALID_ROUTES = \[([\s\S]*?)\];/);
assert.ok(routeDeclaration, 'router route declaration must exist');
const validRoutes = [...routeDeclaration[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
assert.equal([...pageRoutes].sort().join('|'), [...validRoutes].sort().join('|'), 'HTML pages and router routes should match');
assert.equal(new Set(pageRoutes).size, pageRoutes.length, 'page route names must be unique');
assert.equal(pageRoutes.length, 13, 'site should contain 13 pages');
const i18nKeys = [...source.html.matchAll(/\bdata-i18n="([^"]+)"/g)].map((m) => m[1]);
for (const key of new Set(i18nKeys)) {
  assert.ok(Object.hasOwn(translations.UI_TEXT.en, key), 'English UI translation missing: ' + key);
  assert.ok(Object.hasOwn(translations.UI_TEXT.fa, key), 'Persian UI translation missing: ' + key);
}
const categories = {
  races: world.RACES, magic: world.MAGIC_SCHOOLS, houses: world.HOUSES, regions: world.REGIONS,
  timeline: world.TIMELINE, characters: world.CHARACTERS, artifacts: world.ARTIFACTS, gods: world.GODS,
  creatures: world.CREATURES, prophecies: world.PROPHECIES, languages: world.LANGUAGES, books: world.BOOKS,
  guilds: world.GUILDS_DATA
};
for (const [category, entries] of Object.entries(categories)) {
  assert.equal(Object.keys(translations.FA_DATA[category] || {}).length, entries.length, 'Persian translation count should match ' + category);
}
assert.equal(translations.FA_DATA.magicLaws.length, world.MAGIC_LAWS.length, 'Persian magic-law translations should match data');
assert.ok(source.app.includes('window.localStorage'), 'language preference access should be guarded');
assert.ok(source.app.includes('activeRaceFilter'), 'language toggle should preserve filter state');
assert.ok(source.app.includes("behavior: 'auto'"), 'navigation should use standard scroll behavior');
assert.ok(source.css.includes('html[dir="rtl"] .timeline { direction: ltr; }'), 'RTL timeline positioning should use stable LTR coordinates');
assert.ok(source.css.includes('html[dir="rtl"] .timeline-event { direction: rtl; }'), 'timeline event content should retain RTL direction');
assert.match(source.css, /html\[dir="rtl"\] \.timeline::before \{\s*left: auto;\s*right: 22px;/, 'mobile RTL timeline line should move to the right');
assert.match(source.css, /html\[dir="rtl"\] \.timeline-event:nth-child\(odd\),\s*html\[dir="rtl"\] \.timeline-event:nth-child\(even\) \{[^}]*width: 100%;[^}]*left: 0;[^}]*text-align: right;/s, 'mobile RTL timeline events should use one right-aligned column');
console.log('Aethermoor smoke tests passed: syntax, routes, translations, map consistency, and 230 entries.');
