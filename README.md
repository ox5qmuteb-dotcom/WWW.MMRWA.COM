# WWW.MMRWA.COM

MMA project scaffold for backend, frontend, admin panel, and PostgreSQL schema setup.

## Project structure

- `/backend/src` - API scaffolding (Express app/server + modular folders)
- `/frontend/src` - initial frontend scaffolding
- `/admin/src` - admin-side scaffolding with pages, services, layouts, routes, store, styles, and components
- `/database/migrations` - table-by-table PostgreSQL migrations
- `/database/seeds` - default seed data
- `/database/schema.sql` - consolidated SQL schema
- `/docs/architecture.md` - architecture and folder organization notes

## Database quick start

Run migration files in order:

1. `database/migrations/001_create_roles.sql`
2. `...`
3. `database/migrations/013_create_system_settings.sql`

Then run seed files in order:

1. `database/seeds/001_roles.seed.sql`
2. `...`
3. `database/seeds/006_system_settings.seed.sql`
