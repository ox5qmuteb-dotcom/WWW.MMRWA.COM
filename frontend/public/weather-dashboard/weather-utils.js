(function factory(root) {
  const WMO_MAP = {
    0: { icon: '☀️', en: 'Clear sky', ar: 'سماء صافية' },
    1: { icon: '🌤️', en: 'Mainly clear', ar: 'صحو غالبًا' },
    2: { icon: '⛅', en: 'Partly cloudy', ar: 'غائم جزئيًا' },
    3: { icon: '☁️', en: 'Overcast', ar: 'غائم كليًا' },
    45: { icon: '🌫️', en: 'Fog', ar: 'ضباب' },
    48: { icon: '🌫️', en: 'Rime fog', ar: 'ضباب جليدي' },
    51: { icon: '🌦️', en: 'Light drizzle', ar: 'رذاذ خفيف' },
    53: { icon: '🌦️', en: 'Moderate drizzle', ar: 'رذاذ متوسط' },
    55: { icon: '🌧️', en: 'Dense drizzle', ar: 'رذاذ كثيف' },
    61: { icon: '🌧️', en: 'Slight rain', ar: 'مطر خفيف' },
    63: { icon: '🌧️', en: 'Moderate rain', ar: 'مطر متوسط' },
    65: { icon: '🌧️', en: 'Heavy rain', ar: 'مطر غزير' },
    71: { icon: '🌨️', en: 'Slight snow', ar: 'ثلوج خفيفة' },
    73: { icon: '🌨️', en: 'Moderate snow', ar: 'ثلوج متوسطة' },
    75: { icon: '❄️', en: 'Heavy snow', ar: 'ثلوج كثيفة' },
    80: { icon: '🌦️', en: 'Rain showers', ar: 'زخات مطر' },
    81: { icon: '🌧️', en: 'Moderate showers', ar: 'زخات متوسطة' },
    82: { icon: '⛈️', en: 'Violent showers', ar: 'زخات عنيفة' },
    85: { icon: '🌨️', en: 'Snow showers', ar: 'زخات ثلج' },
    95: { icon: '⛈️', en: 'Thunderstorm', ar: 'عاصفة رعدية' }
  };

  const SEARCH_MAX_LEN = 80;

  function normalizeQuery(input) {
    if (typeof input !== 'string') {
      return '';
    }
    return input.trim().replace(/\s+/g, ' ').slice(0, SEARCH_MAX_LEN);
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function convertTemperature(value, unit) {
    const targetUnit = unit || 'celsius';
    if (typeof value !== 'number' || Number.isNaN(value)) {
      return null;
    }
    return targetUnit === 'fahrenheit' ? toFahrenheit(value) : value;
  }

  function formatTemperature(value, unit) {
    const targetUnit = unit || 'celsius';
    const converted = convertTemperature(value, targetUnit);
    if (converted === null) {
      return '--';
    }
    const symbol = targetUnit === 'fahrenheit' ? '°F' : '°C';
    return `${Math.round(converted)}${symbol}`;
  }

  function wmoToDescriptor(code, lang) {
    const language = lang || 'en';
    const fallback = language === 'ar'
      ? { icon: '❓', text: 'غير معروف' }
      : { icon: '❓', text: 'Unknown' };
    const record = WMO_MAP[code];
    if (!record) {
      return fallback;
    }
    return { icon: record.icon, text: language === 'ar' ? record.ar : record.en };
  }

  function isStringArray(value) {
    return Array.isArray(value) && value.every((entry) => typeof entry === 'string' && entry.length > 0);
  }

  function isNumericArray(value) {
    return Array.isArray(value) && value.every((entry) => typeof entry === 'number' && Number.isFinite(entry));
  }

  function sameLength(primary, secondary) {
    return Array.isArray(primary) && Array.isArray(secondary) && primary.length > 0 && primary.length === secondary.length;
  }

  function validateWeatherPayload(payload) {
    if (!payload || typeof payload !== 'object') {
      return false;
    }

    const { current, hourly, daily } = payload;
    if (!current || typeof current.time !== 'string') {
      return false;
    }

    const requiredCurrentNumeric = [
      current.temperature_2m,
      current.relative_humidity_2m,
      current.apparent_temperature,
      current.precipitation,
      current.surface_pressure,
      current.wind_speed_10m,
      current.weather_code
    ];

    if (!requiredCurrentNumeric.every((value) => typeof value === 'number' && Number.isFinite(value))) {
      return false;
    }

    const hourlyValid = hourly
      && isStringArray(hourly.time)
      && isNumericArray(hourly.temperature_2m)
      && isNumericArray(hourly.weather_code)
      && sameLength(hourly.time, hourly.temperature_2m)
      && sameLength(hourly.time, hourly.weather_code);

    const dailyValid = daily
      && isStringArray(daily.time)
      && isNumericArray(daily.temperature_2m_max)
      && isNumericArray(daily.temperature_2m_min)
      && isNumericArray(daily.weather_code)
      && sameLength(daily.time, daily.temperature_2m_max)
      && sameLength(daily.time, daily.temperature_2m_min)
      && sameLength(daily.time, daily.weather_code);

    return Boolean(hourlyValid && dailyValid);
  }

  function uvRiskLevel(value, lang) {
    const language = lang || 'en';
    if (typeof value !== 'number') {
      return language === 'ar' ? 'غير محدد' : 'Not available';
    }
    if (value < 3) return language === 'ar' ? 'منخفض' : 'Low';
    if (value < 6) return language === 'ar' ? 'متوسط' : 'Moderate';
    if (value < 8) return language === 'ar' ? 'مرتفع' : 'High';
    return language === 'ar' ? 'شديد' : 'Very high';
  }

  const api = {
    WMO_MAP,
    normalizeQuery,
    toFahrenheit,
    convertTemperature,
    formatTemperature,
    wmoToDescriptor,
    validateWeatherPayload,
    uvRiskLevel
  };

  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  root.WeatherUtils = api;
}(typeof globalThis !== 'undefined' ? globalThis : this));
