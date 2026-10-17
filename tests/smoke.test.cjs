const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');

test('the bundled data/localization and application scripts parse', () => {
  assert.doesNotThrow(() => new vm.Script(read('data.js'), { filename: 'data.js' }));
  assert.doesNotThrow(() => new vm.Script(read('app.js'), { filename: 'app.js' }));
});

test('the unified data bundle initializes English, Persian, and the complete atlas', () => {
  const sandbox = vm.createContext({ console: { log() {}, warn() {}, error() {} } });
  const exposure = [
    '',
    'globalThis.__AETHERMOOR_TEST__ = { UI_TEXT, FA_DATA, WORLD_META, RACES, MAP_DATA, WORLD_STATS };'
  ].join('\n');
  new vm.Script(read('data.js') + exposure, { filename: 'data.js' })
    .runInContext(sandbox, { timeout: 10000 });

  const d = sandbox.__AETHERMOOR_TEST__;
  assert.ok(d.UI_TEXT.en && d.UI_TEXT.fa, 'both UI locales should exist');
  assert.equal(d.WORLD_META.currentYear, 402, 'the current era should stay at 402 S.A.');
  assert.equal(d.RACES.length, 10, 'the ten peoples should remain present');
  assert.equal(d.MAP_DATA.regions.length, 21, 'the map should retain all 21 regions');

  const regionIds = d.MAP_DATA.regions.map((region) => region.id);
  assert.equal(new Set(regionIds).size, regionIds.length, 'region ids must be unique');
  for (const region of d.MAP_DATA.regions) {
    assert.ok(Number.isFinite(region.x) && Number.isFinite(region.y), 'missing map coordinates: ' + region.id);
    assert.ok(region.x >= 0 && region.x <= 1000, 'x coordinate out of bounds: ' + region.id);
    assert.ok(region.y >= 0 && region.y <= 700, 'y coordinate out of bounds: ' + region.id);
    assert.ok(d.FA_DATA.regions[region.id], 'missing Persian region entry: ' + region.id);
  }
  for (const race of d.RACES) {
    assert.ok(d.FA_DATA.races[race.id], 'missing Persian race entry: ' + race.id);
  }
  assert.ok(d.WORLD_STATS.totalEntries >= 230, 'lore catalogue should remain complete');
});

test('all static UI translation keys have English and Persian values', () => {
  const html = read('index.html');
  const bundle = read('data.js');
  const sandbox = vm.createContext({ console: { log() {}, warn() {}, error() {} } });
  new vm.Script(bundle + '\nglobalThis.__UI_TEXT__ = UI_TEXT;', { filename: 'data.js' })
    .runInContext(sandbox, { timeout: 10000 });
  const keys = [...new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]))];
  const missing = keys.filter((key) =>
    sandbox.__UI_TEXT__.en[key] === undefined || sandbox.__UI_TEXT__.fa[key] === undefined
  );
  assert.deepEqual(missing, [], 'missing UI translations: ' + missing.join(', '));
});

test('the page loads the merged bundle once and no longer references lang.js', () => {
  const html = read('index.html');
  const scripts = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/g)].map((m) => m[1]);
  assert.deepEqual(scripts, ['data.js', 'app.js']);
  assert.equal(fs.existsSync(path.join(root, 'lang.js')), false);
});

test('the atlas supports wheel zoom, pointer panning, and reveals town names on zoom', () => {
  const app = read('app.js');
  const css = read('styles.css');
  assert.match(app, /svg\.addEventListener\('wheel'/);
  assert.match(app, /svg\.addEventListener\('pointerdown'/);
  assert.match(app, /classList\.toggle\('map-zoomed', MAP_VIEW\.w <= 1200\)/);
  assert.match(css, /\.world-map\.map-zoomed \.map-city-label\.is-hidden-until-hover/);
});
