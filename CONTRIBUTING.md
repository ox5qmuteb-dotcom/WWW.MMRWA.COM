# Contributing Guidelines

## Branching Strategy

- `main`: stable and deployable branch.
- Use short-lived branches from `main` in the format:
  - `feature/<short-description>`
  - `fix/<short-description>`
  - `docs/<short-description>`

## Commit Message Convention

Use Conventional Commits:

- `feat: add new capability`
- `fix: resolve bug`
- `docs: update documentation`
- `chore: maintenance tasks`

## Pull Requests

1. Keep PRs focused and small.
2. Fill in the pull request template fully.
3. Link related issues when applicable.
4. Ensure CI passes before requesting review.

## Code Quality and Testing Standards

- Follow `.editorconfig` formatting rules.
- Add or update tests for behavior changes when a test suite exists.
- Do not merge changes that fail validation checks.
- Never commit secrets or credentials.

## Review Expectations

- At least one reviewer approval for non-trivial changes.
- Address review comments with follow-up commits.
