const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');

function loadData() {
  const sandbox = vm.createContext({ console: { log() {}, warn() {}, error() {} } });
  const exposure = `
globalThis.__AETHERMOOR_TEST__ = {
  UI_TEXT, FA_DATA, WORLD_META, RACES, MAGIC_SCHOOLS, MAGIC_LAWS, HOUSES,
  MAP_DATA, REGIONS, TIMELINE, CHARACTERS, ARTIFACTS, GODS, CREATURES,
  PROPHECIES, LANGUAGES, BOOKS, GUILDS_DATA, DUNGEONS_DATA, WORLD_STATS
};`;
  new vm.Script(read('data.js') + exposure, { filename: 'data.js' })
    .runInContext(sandbox, { timeout: 10000 });
  return sandbox.__AETHERMOOR_TEST__;
}

test('the bundled data/localization and application scripts parse', () => {
  assert.doesNotThrow(() => new vm.Script(read('data.js'), { filename: 'data.js' }));
  assert.doesNotThrow(() => new vm.Script(read('app.js'), { filename: 'app.js' }));
});

test('the rebuilt canon loads, remains bilingual, and preserves the full map', () => {
  const d = loadData();
  assert.ok(d.UI_TEXT.en && d.UI_TEXT.fa, 'both UI locales should exist');
  assert.equal(d.WORLD_META.currentYear, 402, 'the current era should stay at 402 S.A.');
  assert.equal(d.RACES.length, 7, 'the canon should present seven core peoples/lineages');
  assert.equal(d.MAGIC_SCHOOLS.length, 5, 'the five practices of mana should be present');
  assert.equal(d.MAGIC_LAWS.length, 4, 'the four magic limits should be present');
  assert.equal(d.TIMELINE.length, 15, 'the timeline should contain the curated record set');
  assert.equal(d.CHARACTERS.length, 12, 'the core character list should be curated');
  assert.equal(d.ARTIFACTS.length, 12, 'the relic list should remain selective');
  assert.equal(d.GODS.length, 8, 'the faiths and legendary figures should remain explicitly uncertain');
  assert.equal(d.CREATURES.length, 20, 'the bestiary should remain selective');
  assert.equal(d.PROPHECIES.length, 5, 'the prophecy catalogue should remain selective');
  assert.equal(d.MAP_DATA.regions.length, 21, 'the map should retain all 21 regions');
  assert.equal(d.DUNGEONS_DATA.theAbyss.floors, 100, 'only the great dungeon has one hundred floors');
  assert.equal(d.DUNGEONS_DATA.otherDungeons.length, 4, 'other dungeons should remain smaller and varied');
  assert.match(d.WORLD_META.worldLaws.death, /No reliable evidence proves an afterlife/);
  assert.match(d.WORLD_META.worldLaws.mana, /not a free source/);
  assert.match(d.WORLD_META.worldLaws.lifeForce, /every living thing they kill/);

  const regionIds = d.MAP_DATA.regions.map((region) => region.id);
  assert.equal(new Set(regionIds).size, regionIds.length, 'region ids must be unique');
  for (const region of d.MAP_DATA.regions) {
    assert.ok(Number.isFinite(region.x) && Number.isFinite(region.y), 'missing map coordinates: ' + region.id);
    assert.ok(region.x >= 0 && region.x <= 1000, 'x coordinate out of bounds: ' + region.id);
    assert.ok(region.y >= 0 && region.y <= 700, 'y coordinate out of bounds: ' + region.id);
    assert.ok(d.FA_DATA.regions[region.id], 'missing Persian region entry: ' + region.id);
  }

  for (const race of d.RACES) assert.ok(d.FA_DATA.races[race.id], 'missing Persian race entry: ' + race.id);
  for (const school of d.MAGIC_SCHOOLS) assert.ok(d.FA_DATA.magic[school.id], 'missing Persian magic entry: ' + school.id);
  for (const event of d.TIMELINE) assert.ok(d.FA_DATA.timeline[event.title], 'missing Persian timeline entry: ' + event.title);
  for (const character of d.CHARACTERS) assert.ok(d.FA_DATA.characters[character.id], 'missing Persian character entry: ' + character.id);
  for (const item of d.ARTIFACTS) assert.ok(d.FA_DATA.artifacts[item.name], 'missing Persian artifact entry: ' + item.name);
  for (const item of d.GODS) assert.ok(d.FA_DATA.gods[item.name], 'missing Persian faith entry: ' + item.name);
  for (const item of d.CREATURES) assert.ok(d.FA_DATA.creatures[item.name], 'missing Persian creature entry: ' + item.name);
  for (const item of d.PROPHECIES) assert.ok(d.FA_DATA.prophecies[item.title], 'missing Persian proverb entry: ' + item.title);

  assert.ok(d.GODS.every((g) => /unverified|folk belief|venerated|taboo figure/i.test(g.status)),
    'no deity should be presented as physically confirmed');
  assert.equal(d.WORLD_STATS.totalEntries,
    d.RACES.length + d.MAGIC_SCHOOLS.length + d.MAGIC_LAWS.length + d.HOUSES.length +
    d.REGIONS.length + d.CHARACTERS.length + d.ARTIFACTS.length + d.GODS.length +
    d.CREATURES.length + d.PROPHECIES.length + d.LANGUAGES.length + d.BOOKS.length +
    d.GUILDS_DATA.length + d.TIMELINE.length + d.DUNGEONS_DATA.otherDungeons.length + 1,
    'catalogue totals should be computed from the current data');
});

test('all static UI translation keys have English and Persian values', () => {
  const html = read('index.html');
  const d = loadData();
  const keys = [...new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]))];
  const missing = keys.filter((key) => d.UI_TEXT.en[key] === undefined || d.UI_TEXT.fa[key] === undefined);
  assert.deepEqual(missing, [], 'missing UI translations: ' + missing.join(', '));
});

test('the page loads the merged bundle once and no longer references lang.js', () => {
  const html = read('index.html');
  const scripts = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/g)].map((m) => m[1]);
  assert.deepEqual(scripts, ['data.js', 'app.js']);
  assert.equal(fs.existsSync(path.join(root, 'lang.js')), false);
});

test('the people catalogue is unified and the dungeon display has no stale floor count', () => {
  const app = read('app.js');
  assert.match(app, /const filtered = RACES;/);
  assert.match(app, /if \(bar\) bar\.hidden = true;/);
  assert.match(app, /liftTo20: 'Lift to Floor 20'/);
  assert.match(app, /liftTo20: 'آسانسور تا طبقهٔ ۲۰'/);
  assert.doesNotMatch(app, /class: 'abyss-stat-num', text: '200'/);
});

test('the atlas supports wheel zoom, pointer panning, and reveals town names on zoom', () => {
  const app = read('app.js');
  const css = read('styles.css');
  assert.match(app, /svg\.addEventListener\('wheel'/);
  assert.match(app, /svg\.addEventListener\('pointerdown'/);
  assert.match(app, /classList\.toggle\('map-zoomed', MAP_VIEW\.w <= 1200\)/);
  assert.match(css, /\.world-map\.map-zoomed \.map-city-label\.is-hidden-until-hover/);
});

test('the illustrated atlas assets are present and structurally identifiable', () => {
  const map = read('assets/aethermoor-map.svg');
  const sigils = read('assets/aethermoor-sigils.svg');
  assert.match(map, /<svg\b/);
  assert.match(map, /viewBox="0 0 1000 700"/);
  assert.match(map, /<\/svg>\s*$/);
  assert.match(sigils, /<svg\b/);
  assert.match(sigils, /<\/svg>\s*$/);
});
