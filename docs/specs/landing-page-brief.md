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

### Section 02: Hero — Identity, Problem Identification & Immediate Action
- **Visuals:** Warm sand/cream background, Azu's grounding portrait, emerald green accent.
- **Headline (Slogan):** *"Sal del automático. Abre tu corazón, recupera tu soberanía."*
- **The "Esto es lo que necesito" Identification Rule:** Per Azu's explicit guidance, this section is where a visitor in pain must see their current struggle reflected so they instantly recognize: *"esto que me ofrece suena como lo que YO NECESITO"*.
- **Supporting Narrative:** Directly addresses chronic overwhelm, mental chatter, nervous system fatigue, and the quiet ache of living in autopilot. Explains how Azu accompanies individuals to ground their body, quiet the mind, and awaken their own inner compass.
- **Primary CTA:** `[ Conversar por WhatsApp ]` $\rightarrow$ triggers `https://wa.me/573215428972?text=Hola%20Azu,%20visité%20tu%20página%20y%20me%20gustaría%20conversar%20sobre%20tus%20sesiones.`

### Section 03: Servicios & Acompañamiento (Outcome-First & Grounded Experience)
*Placement Rule:* Placed **before** "Acerca de Azu" per Azu's explicit request (*"creo que pensándolo bien, me gustaría primero que apareciesen los servicios y debajo sí el quién es Azu"*).

*Copy Architecture: Impact First, Physical Experience Second (Azu Directive):*
Azu notes that unfamiliar therapy names mean nothing to someone struggling with real symptoms (*"si yo nunca he leído sobre el kundalini yoga yo pa qué voy a querer eso en mi vida, puede que ni sepa que es lo que necesito para ej. 'el insomnio que sufro hoy día y desde hace años'"*). Therefore, copy must strictly avoid abstract jargon (e.g. leading with "32 puntos en la cabeza") and follow a two-part anatomy:
1. **The Primary Hook (The Relief / How I Can Help You):** The immediate real-world effect (stress reset, chronic insomnia relief, emotional unburdening, physical ease).
2. **The Grounded Experience (What Actually Happens in the Session):** A gentle, reassuring, non-intimidating description of what the visitor physically experiences during the session.

#### Curated Service Cards:
1. **Barras de Access® (Presencial — Valledupar o a domicilio):**
   - *Primary Hook (Impact & Relief):* Ideal para restablecer el balance frente al estrés crónico, la sobrecarga mental y el agotamiento. Te ayuda a disipar el ruido interno y soltar pensamientos repetitivos para volver a sentir espacio y ligereza.
   - *Grounded Experience (What Happens):* Te recuestas cómodamente en una camilla para recibir una sesión donde mis manos tocan suavemente puntos específicos en tu cabeza; un proceso sutil, profundamente relajante y no invasivo mientras tu cuerpo recibe todos los beneficios.
   - *Duration Note:* 45 min – 1 hr.
   - *Card CTA:* `[ Consultar por Barras ]` $\rightarrow$ pre-filled WhatsApp text.
2. **Procesos de Cuerpo (Presencial — Valledupar o a domicilio):**
   - *Primary Hook (Impact & Relief):* Diseñado para el cuerpo cansado, tensiones retenidas y recuperación somática. Ayuda a liberar memorias de estrés o malestar acumuladas en los tejidos, restaurando la vitalidad y el descanso natural.
   - *Grounded Experience (What Happens):* Una sesión de toque sutil e imposición de manos sobre áreas clave del cuerpo vestidas, guiando a tu energía corporal a reconciliarse con la calma, el alivio y su propio flujo de sanación.
   - *Duration Note:* 35 min – 50 min.
   - *Card CTA:* `[ Consultar por Procesos de Cuerpo ]` $\rightarrow$ pre-filled WhatsApp text.
3. **Mentorías de Consciencia & Oidaterapia (Presencial o Virtual):**
   - *Primary Hook (Impact & Relief):* Acompañamiento para momentos de encrucijada, confusión emocional, transiciones vitales o cuando sientes que perdiste el rumbo. Te ayuda a ganar discernimiento, resignificar crisis y recuperar la soberanía sobre tus decisiones.
   - *Grounded Experience (What Happens):* Un espacio seguro de escucha activa, diálogo consciente y herramientas prácticas de Oidaterapia para explorar dónde estás poniendo tu fe y desarmar creencias que ya no te sirven.
   - *Format Note:* Sesiones individuales (50–70 min) o paquetes de acompañamiento.
   - *Card CTA:* `[ Consultar por Mentorías ]` $\rightarrow$ pre-filled WhatsApp text.
4. **Clases de Yoga & Meditación (Bajo Demanda / Corporativo):**
   - *Primary Hook (Impact & Relief):* Espacios para desacelerar la rutina laboral o grupal, aprender a respirar conscientemente y regular el sistema nervioso frente al desgaste del día a día.
   - *Grounded Experience (What Happens):* Clases personalizadas de Kundalini o Hatha Yoga (KRI / RYT200) y meditaciones guiadas adaptadas a las necesidades del grupo o empresa (sin agenda pública abierta para v1).
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

## 6. Official Brand Color Palette & Visual System

Directly extracted from Azu's official color reference swatch:

| Color Name | Hex Code | Semantic Role & Usage | Contrast vs. Canvas |
| :--- | :--- | :--- | :--- |
| **Ivory** | `#F2EBDD` | Primary Canvas / Background (warm, organic, serene base) | Base |
| **Forest** | `#102F27` | Primary Typography, deep headings, high-contrast dark sections | **12.14:1** (AAA) |
| **Emerald** | `#185844` | Primary Brand Accent (Anahata heart chakra), active CTAs, badges | **7.03:1** (AAA) |
| **Sage** | `#78947F` | Secondary Accent, subtle card borders, tags, secondary icons | Soft organic divider |
| **Antique Gold** | `#B08A4F` | Accent highlights, decorative dividers, delicate insignia | **4.52:1** on Forest (AA) |

### Contrast & Accessibility Invariant
- **Headings & Body on Ivory (`#F2EBDD`):** Use Forest (`#102F27`) or Emerald (`#185844`), exceeding WCAG AAA standards ($\ge 7:1$).
- **Primary Buttons:** Emerald (`#185844`) background with Ivory (`#F2EBDD`) or White (`#FFFFFF`) text ($\ge 7.03:1$).
- **Hover / Focus Ring:** Antique Gold (`#B08A4F`) / Forest (`#102F27`).
