# MMA Architecture

## Overview
The repository is organized into independent runtime areas:

- `backend/` Express-based API scaffold.
- `frontend/` public-facing client scaffold.
- `admin/` admin-side UI scaffold.
- `database/` PostgreSQL migrations, seeds, and consolidated schema.

## Admin structure
`admin/src/` includes:

- `components/` (`common`, `forms`, `tables`, `charts`, `navigation`)
- `pages/` auth, dashboard, users, roles, permissions, materials, categories, lessons, files, notifications, audit logs, settings, profile, reports, system status, and error pages
- `services/` API client plus feature services
- `layouts/`, `routes/`, `store/`, `styles/`, `utils/`, and `assets/`

## Backend structure
`backend/src/` includes:

- entry points: `app.js`, `server.js`
- `config/`, `controllers/`, `middlewares/`, `models/`, `routes/`, `services/`, `utils/`

## Database structure
Core tables included in migrations and `schema.sql`:

- roles, permissions, role_permissions, users
- material_categories, materials, lessons, material_files
- user_sessions, notifications, audit_logs, activity_feed, system_settings
