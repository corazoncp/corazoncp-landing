# corazoncp-landing — Repository Guidelines

This repository contains the public landing page for **El Corazón como Portal**.

---

## 1. Persona Delegation & Ownership

- **Lead Specialist:** **Anne Droid** (`profile/agents/anne-droid.md`)
  - Anne owns frontend layout, component architecture, styling tokens, responsive viewports, and client-side testing.
  - All frontend implementation work occurs strictly on **`feat/anne/*`** branches.
  - Code changes must be reviewed against the acceptance criteria defined in [`docs/specs/landing-page-brief.md`](./docs/specs/landing-page-brief.md).

---

## 2. Architectural Boundaries & Anti-Complexity Rules

1. **Static First:** Zero backend dependency for v1. No database or scheduling API calls.
2. **Direct Conversion:** All calls-to-action (CTAs) link directly to WhatsApp with pre-filled message text.
3. **Evidence-Based Styling:** Follow the aesthetic guidelines derived from the Sagrada Ela reference (warm earthy neutrals, serif headings, high visual calm) and Azu's flyer.
4. **Clean Commits:** Follow Conventional Commits format.

---

## 3. Git Workflow

- **Branch before editing:** Always create a branch (`feat/anne/*`, `docs/*`, `chore/*`) before modifying files.
- **Main Protection:** Never commit directly to `main`.
