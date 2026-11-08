# corazoncp-landing

The public-facing marketing and discovery website for **El Corazón como Portal** (Azucena Sánchez — Seva Surpreet Kaur).

---

## 🎯 Deliverable Objective

To deliver a high-converting, serene, and responsive mobile-first landing page that:
1. Conveys Seva Surpreet Kaur's grounded spiritual authority and journey from national television production to holistic therapies.
2. Curates her approved 5-card outcome-first service catalog (Oidaterapia, Kundalini Yoga, Barras de Access®, Procesos de Cuerpo, Meditaciones Personalizadas) and complementary paths.
3. Connects prospective clients directly to a conversation via WhatsApp (`+57 321 542 8972`) without form friction, backed by a serverless contact intake.

For full product specifications and acceptance criteria:
- [Landing Page Brief](./docs/specs/landing-page-brief.md)
- [Visual Canvas & Layout Specifications](./docs/specs/visual-canvas-and-layout.md)
- [Awwwards Creative Jury Critiques](./docs/specs/awwwards-critiques/)

---

## 🏗️ Technical Architecture & Stack

- **Toolchain:** Static-first web application powered by Vite+ (`vp`) with Tailwind CSS v4 design tokens.
- **Code Quality & Linter:** Biome (`biome check .`) for formatting and strict linting.
- **Testing:** Hermetic native Node.js test runner (`node:test`) validating structural invariants, conversion deep links, phone number isolation, and accessibility targets.
- **Hosting & CI/CD:** Deployed automatically to Cloudflare Pages on push; custom domain `elcorazoncomoportal.com`.

---

## 💻 Developer Commands

Running with Nix flakes and `direnv`:

```bash
# Start local development server
direnv exec . pnpm dev

# Run automated acceptance test suite (hermetic build + node:test)
direnv exec . pnpm test

# Run linter and formatter
direnv exec . pnpm lint

# Production build
direnv exec . pnpm build
```

---

## 🗺️ Project Tracking

- Global organization board: [El Corazón como Portal — Roadmap](https://gitea.roadtotech.me/corazoncp/-/projects/5)
- Milestone: `v1-public-landing`
