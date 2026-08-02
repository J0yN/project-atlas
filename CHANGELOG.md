# Changelog

All notable changes to Project Atlas are documented in this file.

## [1.0.0] - 2026-07-20

### Added
- Production deployment runbook covering environment setup, verification, rollout, and rollback steps.
- QA checklist for pre-release, smoke, accessibility, and localization validation.
- Dedicated v1.0.0 release notes for GitHub Releases and stakeholder handoff.
- GitHub Actions release workflow for publishing tagged releases automatically.

### Changed
- Bumped the application version to `1.0.0` for the production launch milestone.
- Replaced the stale dashboard sprint footer with the v1.0.0 / Sprint 18 release label.
- Expanded the dashboard settings summary to include release-specific production metadata.
- Updated the repository README to reflect the production release milestone and launch documentation.
- Hardened the Next.js production configuration by disabling the `X-Powered-By` header.