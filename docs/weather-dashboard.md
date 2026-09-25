# Weather Dashboard

## Path in this repository

- Dashboard route: `frontend/public/weather-dashboard/`
- Entry link: `frontend/public/index.html`

## Data source and limits

This dashboard uses Open-Meteo services:

- Geocoding API: `https://geocoding-api.open-meteo.com/v1/search`
- Forecast API: `https://api.open-meteo.com/v1/forecast`

No API keys are required or stored.

The 7-day forecast and derived risk cards are **prototype estimations** based on current API payload values.
They are not scientific long-range forecasting and should not be treated as authoritative risk predictions.

## Local run

From repository root:

```bash
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/frontend/public/`
- `http://localhost:8080/frontend/public/weather-dashboard/`

## Tests

```bash
node frontend/public/weather-dashboard/tests/verify.mjs
```

This check validates utility behavior, payload validation basics, and CSP presence.

## Domain/DNS note

If the target public domain is `MMRWS.COM` while this repository is `WWW.MMRWA.COM`, routing DNS and GitHub Pages custom domain mapping must be configured outside code (GitHub Pages settings and domain provider).
