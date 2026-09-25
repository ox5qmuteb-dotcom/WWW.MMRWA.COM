import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const {
  convertTemperature,
  formatTemperature,
  normalizeQuery,
  validateWeatherPayload,
  wmoToDescriptor
} = require('../weather-utils.js');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function run() {
  assert.equal(Math.round(convertTemperature(0, 'fahrenheit')), 32, '0C should equal 32F');
  assert.equal(Math.round(convertTemperature(30, 'fahrenheit')), 86, '30C should equal 86F');
  assert.equal(formatTemperature(20, 'celsius'), '20°C');
  assert.equal(formatTemperature(20, 'fahrenheit'), '68°F');

  assert.equal(normalizeQuery('  Riyadh   City  '), 'Riyadh City');

  const en = wmoToDescriptor(0, 'en');
  const ar = wmoToDescriptor(95, 'ar');
  assert.equal(en.text, 'Clear sky');
  assert.equal(ar.text, 'عاصفة رعدية');

  const validPayload = {
    current: {
      time: '2026-09-24T00:00',
      temperature_2m: 30,
      relative_humidity_2m: 40,
      apparent_temperature: 34,
      precipitation: 0,
      surface_pressure: 1003,
      weather_code: 0,
      wind_speed_10m: 10
    },
    hourly: { time: ['2026-09-24T00:00'], temperature_2m: [30], weather_code: [0] },
    daily: { time: ['2026-09-24'], temperature_2m_max: [35], temperature_2m_min: [23], weather_code: [0] }
  };

  const invalidPayload = { current: {}, hourly: { time: [] }, daily: {} };

  assert.equal(validateWeatherPayload(validPayload), true);
  assert.equal(validateWeatherPayload(invalidPayload), false);

  const dashboardHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert.match(dashboardHtml, /Content-Security-Policy/i, 'CSP meta tag must be present');
  assert.match(dashboardHtml, /https:\/\/api\.open-meteo\.com/, 'CSP should allow Open-Meteo forecast host');
  assert.match(dashboardHtml, /https:\/\/geocoding-api\.open-meteo\.com/, 'CSP should allow Open-Meteo geocoding host');

  console.log('✅ Weather dashboard verification passed.');
}

run();
