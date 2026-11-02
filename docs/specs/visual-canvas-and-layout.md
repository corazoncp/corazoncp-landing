# Visual Canvas & Layout Specification — El Corazón como Portal

This document specifies the responsive layout architecture, design tokens, visual hierarchy, and asset guidelines for the **El Corazón como Portal** landing page (`corazoncp-landing`). It serves as the authoritative visual reference for engineering implementation, accessibility validation, and stakeholder alignment.

---

## 1. Architectural Principles & Layout Intent

The layout is engineered around an **outcome-first, mobile-centric conversion architecture**:
- **Mobile-First Orientation:** Discovery traffic predominantly originates from Instagram and WhatsApp channels (>80% projected mobile viewport share). The interface prioritizes touch ergonomics ($\ge 48\text{px}$ touch targets), single-column fluid stacking, zero horizontal overflow, and minimal cognitive friction.
- **Serene Editorial Aesthetic:** The visual rhythm pairs editorial typography with warm earth tones, evoking calm, somatic presence, and personal grounding rather than transactional commercialism.
- **Frictionless Conversion Funnel:** Rather than requiring form fills or client account creation, every touchpoint routes directly into a 1:1 WhatsApp Business conversation with pre-populated contextual inquiry text.

---

## 2. Desktop Viewport Specification (1440px Reference)

### 2.1 First Viewport & Hero Composition

The desktop layout establishes credibility and immediate emotional resonance upon landing:
- **Header:** Lightweight navigation bar with sacred geometry logo, brand title, and section anchor links (`#servicios`, `#acerca`, `#filosofia`, `#contacto`). No login or registration links.
- **Hero Section:** Split-column composition:
  - **Left Column:** Dual-modality eyebrow badge (`ACOMPAÑAMIENTO CONSCIENTE · VALLEDUPAR & ONLINE`), editorial slogan headline (*"Sal del automático. Abre tu corazón, recupera tu soberanía."*), grounding symptom identification narrative, and the primary WhatsApp call to action.
  - **Right Column:** Azu's natural lifestyle portrait (`azu-hero.jpg`), framed with soft organic border radius and subtle antique gold backdrop framing.

![Desktop Hero Viewport](../assets/preview-hero.png)

### 2.2 Full-Page Sequential Hierarchy

The full desktop scroll follows seven clearly demarcated content blocks:

1. **Header & Navigation:** Persistent/accessible anchor navigation.
2. **Hero Section:** Problem identification and primary conversion hook.
3. **Servicios & Acompañamiento:** Outcome-first presentation of offerings in prioritized order:
   - *Oidaterapia (Sesión Inicial)* — Claridad emocional y valoración.
   - *Kundalini Yoga & Acompañamiento Personalizado* — Vitalidad somática.
   - *Barras de Access® & Procesos de Cuerpo* — Calma electromagnética y reseteo de estrés. Includes official registered trademark symbol and link to [Access Consciousness®](https://www.accessconsciousness.com/bars).
   - *Meditaciones Personalizadas* — Herramienta sonora asíncrona a la medida.
4. **Recursos Gratuitos & Podcast Bridge:** Bridge section connecting visitors to free meditations on the official YouTube channel (`@Elcorazóncomoportal`).
5. **Acerca de Azu:** Narrative recounting Azu's transition from Colombian television production to holistic practice, emphasizing grounded somatic wisdom.
6. **Filosofía ("Animados, no Pacientes"):** Forest green grounding banner explaining the Anahata heart portal philosophy.
7. **Contacto & Redes:** Verified physical location (`Calle 7 #19B-88 Apto 102, Valledupar`), WhatsApp Business line (`+57 321 542 8972`), social links, and floating WhatsApp quick-action widget.

![Full Page Scroll Sequence](../assets/preview-full.png)

---

## 3. Mobile Viewport Specification (390px Reference)

### 3.1 Mobile Viewport Behavior

Mobile optimization is the core design constraint for this interface:
- **Card Stacking:** Multi-column desktop grids gracefully collapse to full-width stacked cards with consistent $16\text{px}$–$24\text{px}$ horizontal gutters.
- **Touch Ergonomics:** All action buttons and interactive touch targets enforce a minimum height of $48\text{px}$ to prevent misclicks.
- **Floating Conversion Pill:** A persistent WhatsApp pill is anchored at the bottom right corner with high contrast, enabling immediate connection from any scroll depth.

### 3.2 Mobile First Viewport (Hero)

![Mobile Hero Viewport](../assets/preview-mobile-hero.png)

### 3.3 Mobile Scroll Sequence

![Mobile Full Scroll](../assets/preview-mobile-full.png)

---

## 4. Applied Design Tokens & Contrast Ratios

The brand identity employs an earthy, grounding palette designed to convey warmth, safety, and natural equilibrium:

| Token Name | Hex Code | Primary Role | Accessibility Contrast (WCAG 2.1 AA) |
| :--- | :--- | :--- | :--- |
| **Ivory** | `#F2EBDD` | Primary Canvas & Background | Baseline background |
| **Forest** | `#102F27` | Headings, High-Contrast Body & Dark Banners | **12.14:1** on Ivory (Passes AAA) |
| **Emerald** | `#185844` | Primary Action Buttons & Status Badges | **7.03:1** on Ivory (Passes AAA) |
| **Sage** | `#78947F` | Subtle Borders, Dividers & Meta Tags | Auxiliary accent & subtle borders |
| **Antique Gold**| `#B08A4F` | Eyebrow Badges, Decorative Highlights & Accents | **3.56:1** on Ivory (for large/bold text & decorative) |

### 4.1 Typography

- **Display & Headings:** `Cormorant Garamond` (Weights: 500, 600, 700). Evokes editorial elegance, mindfulness, and literary depth.
- **Body & Interactive UI:** `Plus Jakarta Sans` (Weights: 400, 500, 600). Clean, geometric sans-serif ensuring crisp legibility across mobile displays.

---

## 5. Asset and Content Policy Invariants

1. **Photography Attribution & Context:**
   - The natural lifestyle portrait (`azu-hero.jpg`) is reserved for the Hero and bio sections to maintain an approachable, grounded presence.
   - Photography featuring sacred Kundalini attire (turban and white garments) is strictly reserved for the Kundalini Yoga service section.
2. **Trademark Invariants:**
   - The phrase **Barras de Access®** must retain its registered trademark symbol (`®`) on its initial heading mention, accompanied by an explicit authority hyperlink to the official [Access Consciousness®](https://www.accessconsciousness.com/bars) directory.
3. **Contact Channels & Privacy:**
   - Only the verified WhatsApp Business line (`+57 321 542 8972` / `https://wa.me/573215428972`) may appear in public client-facing code.
   - Personal phone numbers, private intake submissions, and unapproved client PII are strictly excluded from the repository.
