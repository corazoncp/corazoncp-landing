# AGENTS.md: corazoncp-landing

Public landing page for **El Corazón como Portal** (`corazoncp/corazoncp-landing`, mirrored publicly to GitHub).

## Rules for working in this repo
- **Acceptance criteria:** Implement strictly against [`docs/specs/landing-page-brief.md`](./docs/specs/landing-page-brief.md). Never invent service copy, pricing, schedules, or contact numbers.
- **Static-first v1:** Zero backend, database, authentication, payment, or scheduling API dependencies.
- **Direct conversion:** All primary and per-service CTAs route directly to WhatsApp (`wa.me`) with URL-encoded pre-filled inquiry text.
- **Visual & a11y baseline:** Mobile-first (`375px` to `1440px`), WCAG AA contrast (`>= 4.5:1`), zero console errors, and grounded warm-neutral styling per approved brand assets (never pull raw/unapproved files from workspace `.internal/`).
- **Bilingual parity invariant (multi-page static):** Prior to adopting a component compiler or templating layer, any structural, CSS class, asset, or design token change applied to `index.html` (Spanish default) must be mirrored with identical structural parity in `en/index.html` (English), maintaining localized copy, reciprocal `hreflang` tags, and language-specific WhatsApp inquiry strings.
