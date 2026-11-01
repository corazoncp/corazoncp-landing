# Product Brief — Public Landing Page (Slice 0)

- **Product:** El Corazón como Portal Landing Page
- **Repository:** `corazoncp/corazoncp-landing`
- **Target Deadline:** This week
- **Status:** Approved for Implementation (Reconciled with Discovery Intake, Brief Publicitario & Tracker)

---

## 1. Business Objective & Problem Statement

Azucena Sánchez (Azu Seva Surpreet Kaur) requires a serene, grounded, mobile-first public web presence to unify disjointed flyers, PDF shares, and social media links. 

Prospective clients frequently experience the overwhelm, chronic stress, anxiety, and empty autopilot of modern life. The landing page establishes immediate credibility, introduces Azu's journey and holistic approach, and provides an effortless, friction-free conversion path into direct 1:1 conversation via WhatsApp.

### Priority Outcomes (Per Azu's Directives in Tracker)
- **Goal A (Primary):** Conseguir consultas — facilitate direct WhatsApp contact.
- **Goal B (Primary):** Promocionar servicios concretos — enable visitors to identify a relevant offering and ask about it with one click.
- **Goal C (Explicit Non-Goal for v1):** Building audience / podcast distribution (podcast is not yet launched; only YouTube channel exists and can be linked as secondary reference).

---

## 2. Intended Audience & Core Value Proposition

- **Target Audience:** Adults aged 25–40 (Millennials / mature young adults) in Valledupar, Colombia (and virtually across Hispanic/Anglophone markets) experiencing the "choque con el piloto automático"—chronic workplace stress, nervous system fatigue, insomnia, and existential emptiness.
- **Client Paradigm:** **"ANIMADOS"**, not passive patients. The ecosystem empowers individuals to assume active responsibility for their healing and sovereignty.
- **Core Proposition:** Somatic cranial and body touch (Barras de Access®, Procesos de Cuerpo) paired with conscious mentoring and Oidaterapia to dissolve limiting beliefs, restore vitality, and open the heart.
- **Slogan:**
  - *Spanish:* *"Sal del automático. Abre tu corazón, recupera tu soberanía."*
  - *English:* *"Step out of autopilot. Open your heart, master your sovereignty."*

---

## 3. Scope Boundaries & Explicit Non-Goals

| In Scope (v1) | Explicitly Deferred / Non-Goals (v1) |
| :--- | :--- |
| Responsive single-page architecture (mobile-first 375px–1440px) | User accounts, client login, authentication, or member portals |
| Unified Hero section (Slogan + outcome summary + WhatsApp CTA) | Interactive booking calendar / slot reservation engine |
| "Acerca de Azu" narrative (audiovisual background to spiritual service) | Dynamic database, CMS, or backend APIs |
| Curated service cards with **outcome-first copy** | Payment gateways (Wompi, Stripe, PayPal) or e-commerce checkout |
| WhatsApp deep links (`wa.me`) with URL-encoded inquiry messages | Podcast player / audio hosting |
| Floating WhatsApp quick-action button anchored to Contact section | Secondary business partnerships (Ringana, GanoExcel) |
| Brand channels footer (WhatsApp, Instagram, YouTube, contact email) | |

---

## 4. Content Hierarchy & Section Specifications (Azu's Reordered Sequence)

*Architectural Sequence Change (Oct 30 Directives):* Services appear immediately following the Hero to capture high-intent visitors without delay, followed by Azu's personal story, brand philosophy, and contact.

### Section 01: Header & Minimal Navigation
- **Branding:** Logo icon (sacred geometry heart) + "El Corazón como Portal".
- **Navigation Links:** Smooth scroll anchors to `Servicios`, `Acerca de Azu`, `Filosofía`, and `Contacto`.
- **Constraint:** Zero login buttons or customer portal placeholders.

### Section 02: Hero — Identity, Outcome & Immediate Action
- **Visuals:** Warm sand/cream background, Azu's grounding portrait, emerald green accent.
- **Headline (Slogan):** *"Sal del automático. Abre tu corazón, recupera tu soberanía."*
- **Supporting Narrative:** Brief, tangible explanation of how Azu accompanies individuals to restore nervous system balance, release mental noise, and reconnect with inner vitality.
- **Primary CTA:** `[ Conversar por WhatsApp ]` $\rightarrow$ triggers `https://wa.me/573215428972?text=Hola%20Azu,%20visité%20tu%20página%20y%20me%20gustaría%20conversar%20sobre%20tus%20sesiones.`

### Section 03: Servicios & Acompañamiento (Outcome-First Offerings)
*Placement Rule:* Placed **before** "Acerca de Azu" per Azu's explicit request (*"creo que pensándolo bien, me gustaría primero que apareciesen los servicios y debajo sí el quién es Azu"*).
*Copy Rule:* Lead with the **tangible impact / problem addressed** (e.g. stress relief, insomnia, physical exhaustion, mental noise), followed by a brief, accessible description of the physical session experience.

1. **Barras de Access® (Presencial — Valledupar o a domicilio):**
   - *Headline / Impact:* Calma mental profunda y liberación de estrés acumulado.
   - *Experience:* 32 toques suaves en puntos específicos de la cabeza para disipar la sobrecarga mental y resetear patrones limitantes sin esfuerzo.
   - *Duration Note:* 45 min – 1 hr.
   - *Card CTA:* `[ Consultar por Barras ]` $\rightarrow$ pre-filled WhatsApp text.
2. **Procesos de Cuerpo (Presencial — Valledupar o a domicilio):**
   - *Headline / Impact:* Vitalidad somática, descanso y reconciliación corporal.
   - *Experience:* Imposición de manos suave y energética que ayuda al cuerpo a liberar memorias de trauma, tensión física y recuperar su flujo natural.
   - *Duration Note:* 35 min – 50 min.
   - *Card CTA:* `[ Consultar por Procesos de Cuerpo ]` $\rightarrow$ pre-filled WhatsApp text.
3. **Mentorías de Consciencia & Oidaterapia (Presencial o Virtual):**
   - *Headline / Impact:* Claridad emocional, resignificación de crisis y discernimiento personal.
   - *Experience:* Acompañamiento 1:1 profundo para revisar dónde depositas tu fe, cuestionar creencias y reactivar tu soberanía interna ante encrucijadas de vida.
   - *Format Note:* Sesiones individuales (50–70 min) o paquetes de acompañamiento.
   - *Card CTA:* `[ Consultar por Mentorías ]` $\rightarrow$ pre-filled WhatsApp text.
4. **Clases de Yoga & Meditación (Bajo Demanda / Corporativo):**
   - *Description:* Clases personalizadas de Kundalini y Hatha Yoga para empresas o grupos reducidos (sin agenda abierta para v1).
   - *Card CTA:* `[ Contáctanos ]` $\rightarrow$ WhatsApp inquiry.

*Section Transition CTA (Azu Directive):* At the bottom of the Services section, provide an explicit conversion bridge button:
- **Button:** `[ Quiero agendar una sesión ]` / `[ Quiero más información ]` $\rightarrow$ triggers `https://wa.me/573215428972?text=Hola%20Azu,%20estuve%20viendo%20tus%20servicios%20y%20me%20gustaría%20agendar%20una%20sesión.`

### Section 04: Acerca de Azu (Story & Approach)
- **Content Narrative (from Azu's verified text):**
  - Former audiovisual director and producer in Colombian national television who experienced the deep emptiness and exhaustion of living on autopilot.
  - Chose to "saltar al vacío" following an intuitive call to explore what lies on the other side of discomfort.
  - Dedicated recent years to studying and embodying ancient somatic technologies: Tantra, Yoga (RYT200 / KRI), Humanology, Vedic philosophy, and Oidaterapia.
  - Accompanies others not as a guru with an external map, but as a facilitator of their own inner compass, guiding them to recognize that their body and energy already hold the medicine.

### Section 05: El Corazón como Portal (Propósito & Filosofía)
- Excerpt of core philosophy: El corazón (Anahata chakra) como centro de discernimiento, ecuanimidad y despertar.
- Redefining healing from passive waiting to sovereign participation (the concept of the **Animado**).

### Section 06: Contacto, Redes & Cierre
- Direct conversion button: `[ Contáctame por WhatsApp ]` $\rightarrow$ `https://wa.me/573215428972?text=Hola%20Azu,%20quisiera%20ponerme%20en%20contacto%20contigo.`
- Direct channels:
  - **WhatsApp Business Directo:** `+57 321 542 8972` (`https://wa.me/573215428972`)
  - **Email:** `contactocorazoncp@gmail.com`
  - **Instagram:** `https://www.instagram.com/elcorazoncomoportal` (`@elcorazoncomoportal`)
  - **YouTube:** `https://www.youtube.com/@Elcorazóncomoportal` (`@Elcorazóncomoportal`)
  - **X (Twitter):** `https://x.com/Elcorazoncp` (`@Elcorazoncp`)
  - **Dirección & Ubicación:** Calle 7 #19B-88 Apto 102, Valledupar, Colombia, 200005 (atención presencial y a domicilio)
- **Floating WhatsApp Anchor:** Persistent/floating action button allowing instant jump or direct click to chat.

---

## 5. CTA Distribution Strategy (Multi-Touch WhatsApp Conversion)

Per Azu's explicit directive (*"considero que es importante que hayan varios botones de llamado a la acción que redirijan la persona al WhatsApp"*), the landing page distributes conversion opportunities at natural decision moments:

1. **Top / Hero CTA:** `[ Conversar por WhatsApp ]` — immediate action for returning visitors or warm leads.
2. **Per-Service CTAs:** Dedicated buttons on each of the 4 service cards with contextual pre-filled messages.
3. **Post-Services Anchor CTA:** `[ Quiero agendar una sesión ]` / `[ Quiero más información ]` — captures users immediately after reviewing the catalog.
4. **Final Contact CTA:** `[ Contáctame por WhatsApp ]` — in Section 06 alongside verified socials and physical address.
5. **Floating Action:** Global floating WhatsApp button visible across scroll.
6. **Strict Business Channel Guardrail:** Every CTA exclusively targets WhatsApp Business `+57 321 542 8972` (matching Facebook/Instagram directory), never Azu's personal line.

---

## 5. Visual, Brand & Technical Requirements

- **Domain:** `elcorazoncomoportal.com`
- **Color Palette Baseline:**
  - Backgrounds: Warm sand / cream (`#FAF7F2`, `#F4EFE6`).
  - Primary Brand Accent: Emerald Green / Verde Esmeralda (`#1E5E4B` / `#2D7258` representing Anahata chakra).
  - Text & Neutrals: Deep warm charcoal / espresso (`#23211E`) for high readability.
  - Secondary accents: Soft sage, gold/ochre touches.
- **Typography:** Refined editorial serif for titles (high dignity, serenity) paired with clean, accessible sans-serif for body text.
- **Accessibility & Performance:**
  - WCAG AA contrast ratio ($\ge 4.5:1$).
  - Minimum touch target: $\ge 44 \times 44 \text{ px}$.
  - Mobile viewport tested down to `375px`.
  - Zero console errors; fast static load.
