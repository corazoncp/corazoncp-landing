# Product Brief — Public Landing Page (Slice 0)

- **Product:** El Corazón como Portal Landing Page
- **Repository:** `corazoncp/corazoncp-landing`
- **Target Deadline:** This week
- **Status:** Approved for Implementation

---

## 1. Business Objective & Problem Statement

Azu needs an immediate public-facing presence to share across WhatsApp and Instagram. Prospective clients currently receive disjointed flyers and messages; the landing page serves as a unified, serene introduction that establishes credibility, clarifies her offerings, and provides an immediate conversion path into a direct conversation.

---

## 2. Intended Audience & Value Proposition

- **Primary Audience:** Individuals seeking emotional release, deep relaxation, mental clarity, and spiritual accompaniment in Cali, Colombia (or virtually).
- **Core Proposition:** A compassionate, grounding space integrating somatic touch (Access Bars, Body Process) and consciousness mentoring to dissolve limiting beliefs and reconnect with inner vitality.

---

## 3. Scope Boundaries & Explicit Non-Goals

| In Scope (v1) | Explicitly Deferred / Non-Goals |
| :--- | :--- |
| Responsive, mobile-first single-page experience | Interactive booking calendar |
| Hero identity with Azu's core invitation | User accounts or login authentication |
| Meet Azu & philosophy section | Payment gateway / credit card checkout |
| Curated service cards (Access Bars, Body Process, Mentoring) | Dynamic database backend |
| Direct WhatsApp consultation CTA buttons | Complex multi-step wizards |

---

## 4. Proposed Content Hierarchy (5 Key Sections)

### Section 01: Hero — Identity & Invitation
- **Visual Tone:** Warm sand/cream background, elegant serif heading, grounded serenity.
- **Heading:** *"Regálate un espacio para más calma, claridad y bienestar integral"*
- **Subheading:** *"Acompañamiento consciente, terapias corporales y despertar del corazón en Cali, Colombia."*
- **Primary CTA:** Button: `[ Conversar por WhatsApp ]` -> Opens WhatsApp with pre-filled message: `"Hola Azu, me gustaría conocer más sobre tus sesiones en El Corazón como Portal."`

### Section 02: Conoce a Azu (About Azu)
- **Content:** Portrait placeholder, her background (Azu Seva Surpreet Kaur, practitioner certified in Access Bars® & Body Process, Hatha Yoga RYT200, Oidaterapeuta).
- **Tone:** Warm, inviting, sovereign, and humble.

### Section 03: Caminos de Bienestar (Offerings)
Curated cards highlighting current active services:
1. **Access Bars®:** 32 cranial touch points to release accumulated tension, quiet mental noise, and restore clarity. (Presencial en Barrio Vipasa o a domicilio).
2. **Body Process:** Somatic touch reconnecting with bodily ease, energy circulation, and physical recovery.
3. **Mentoring de Consciencia & Oidaterapia:** One-on-one sessions exploring personal beliefs, faith, and emotional transitions.
- *Each card features a secondary CTA button linking to WhatsApp inquiring about that specific therapy.*

### Section 04: Misión & Enfoque (Vision)
- Short excerpt of Azu's mission statement presented in gentle, accessible language.
- Core pillars: Presencia, Escucha, Soberanía personal, Despertar del corazón.

### Section 05: Contacto & Cierre
- Direct WhatsApp link, Instagram link (`@elcorazoncomoportal`), email, and location note (Cali, Colombia).

---

## 5. Vertical Slices & Acceptance Criteria

### Slice 1: Low-Fidelity Wireframe & Layout Validation
- **Criteria:** Basic structure, section ordering, and content flow reviewed and validated.

### Slice 2: Usable Hero & Primary Conversion
- **Criteria:** Mobile viewport renders crisp typography, warm colors, and a working WhatsApp CTA button that triggers `wa.me` with encoded message text.

### Slice 3: Offerings Cards & Responsive Polish
- **Criteria:** Service cards render cleanly on 375px mobile and 1440px desktop screens.

### Slice 4: Verification & Deployment
- **Criteria:** Zero console errors, fast initial load (< 1s), accessible colors (contrast ratio >= 4.5:1), published on preview/production URL.
