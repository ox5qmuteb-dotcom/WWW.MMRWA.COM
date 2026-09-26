# WWW.MMRWA.COM

This repository hosts the static site for `WWW.MMRWA.COM` with a separated structure:

- `frontend/` for site assets and pages
- `backend/` reserved for backend code
- `config/` reserved for configuration templates
- `docs/` for project documentation

## Weather dashboard integration

The weather dashboard from `ox5qmuteb-dotcom/moteb-score` commit `53d86f4a31636fd0d77de3805310c4894c1169d2` is integrated at:

- `frontend/public/weather-dashboard/`
- Linked from `frontend/public/index.html`

## Data source and prototype limits

- Source: Open-Meteo Geocoding + Forecast APIs
- No API keys or secrets are used
- "Future risk" cards are prototype estimations only, not scientific forecasting

## Local run

```bash
python3 -m http.server 8080
```

Open:

- `http://localhost:8080/frontend/public/`
- `http://localhost:8080/frontend/public/weather-dashboard/`

## Verification

```bash
node frontend/public/weather-dashboard/tests/verify.mjs
```

## Domain and DNS

If production should use `MMRWS.COM` while this codebase is `WWW.MMRWA.COM`, DNS/custom-domain setup must be done in GitHub Pages and domain-provider settings outside this repository code.
