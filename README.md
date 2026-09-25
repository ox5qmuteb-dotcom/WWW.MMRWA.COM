# WWW.MMRWA.COM

Professional foundation for the WWW.MMRWA.COM project, including repository
standards, collaboration workflows, and development governance.

## Project Overview

This repository is organized to support scalable web development with clear
separation between frontend, backend, configuration, and documentation.

## Directory Structure

- `frontend/` - client-side code
- `backend/` - server-side code
- `config/` - configuration templates
- `docs/` - architecture, standards, and contributor docs
- `.github/` - workflows, issue templates, and PR templates

See `docs/project-structure.md` for the full structure.

## Getting Started

1. Clone this repository.
2. Copy `.env.example` to `.env` and adjust values.
3. Review `docs/development-environment.md`.
4. Create a feature branch from `main`.

## Development Workflow

- Follow the process described in `CONTRIBUTING.md`.
- Use Conventional Commits for all commits.
- Open pull requests using the provided template.

## CI/CD

- CI workflow checks repository baseline quality.
- CD workflow deploys `frontend/public` to GitHub Pages on pushes to `main` and on manual dispatch.

## License

Licensed under Apache 2.0. See `LICENSE`.
