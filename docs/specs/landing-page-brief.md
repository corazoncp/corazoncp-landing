# Product Brief — Public Landing Page (Slice 0)

- **Product:** El Corazón como Portal Landing Page
- **Repository:** `corazoncp/corazoncp-landing`
- **Target Deadline:** This week
- **Status:** Approved for Implementation (Reconciled with Discovery Intake, Azu's Nov 1 Feedback & Cloudflare Roadmap)

---

## 1. Business Objective & Problem Statement

Azucena Sánchez (Azu Seva Surpreet Kaur) requires a serene, grounded, mobile-first public web presence to unify disjointed flyers, PDF shares, and social media links. 

Prospective clients frequently experience the overwhelm, chronic stress, anxiety, and empty autopilot of modern life. The landing page establishes immediate credibility, introduces Azu's journey and holistic approach, and provides an effortless, friction-free conversion path into direct 1:1 conversation via WhatsApp.

### Priority Outcomes (Per Azu's Directives in Tracker)
- **Goal A (Primary):** Conseguir consultas — facilitate direct WhatsApp contact.
- **Goal B (Primary):** Promocionar servicios concretos — enable visitors to identify a relevant offering and ask about it with one click.
- **Goal C (Secondary Free Resources):** Connect visitors with free audio/video tools via YouTube (*"El corazón como portal: Luz en tu camino"*), where public meditations are hosted.

---

## 2. Intended Audience & Core Value Proposition

- **Target Audience:** Adults aged 25–40 in Valledupar, Colombia, and virtually across Colombia, Latin America, and international markets experiencing the "choque con el piloto automático"—chronic workplace stress, nervous system fatigue, insomnia, and existential emptiness.
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
| Unified Hero section (Slogan + Valledupar & Online + WhatsApp CTA) | Interactive booking calendar / slot reservation engine |
| Reordered Service cards (Oidaterapia $\rightarrow$ Kundalini $\rightarrow$ Barras $\rightarrow$ Meditaciones) | Dynamic database, CMS, or backend APIs |
| Outcome-first copy anatomy with official Access Consciousness® trademark & link | Payment gateways (Wompi, Stripe, PayPal) or e-commerce checkout |
| Free Community / YouTube Podcast Meditations Resource Bridge | Audio file streaming hosting on origin |
| "Acerca de Azu" narrative (natural lifestyle portrait, reserving turban for Kundalini) | Secondary business partnerships (Ringana, GanoExcel) |
| Hardened Static Edge Security Headers & Bot Mitigation | Complex multi-step questionnaires |
| Native SEO, AEO (Answer Engine Optimization) & JSON-LD Structured Data | |
| WhatsApp deep links (`wa.me`) with URL-encoded inquiry messages | |

---

## 4. Content Hierarchy & Section Specifications (Reconciled with Nov 1 Feedback)

### Section 01: Header & Minimal Navigation
- **Branding:** Logo icon (sacred geometry heart) + "El Corazón como Portal".
- **Navigation Links:** Smooth scroll anchors to `Servicios`, `Acerca de Azu`, `Filosofía`, and `Contacto`.
- **Constraint:** Zero login buttons or customer portal placeholders.

### Section 02: Hero — Identity, Dual Modality & Immediate Action
- **Visuals:** Warm sand/cream background, Azu's grounding portrait (warm lifestyle), emerald green accent.
- **Eyebrow (Dual Modality):** `ACOMPAÑAMIENTO CONSCIENTE · VALLEDUPAR & ONLINE` *(Selected default pending client confirmation)*
- **Headline (Slogan):** *"Sal del automático. Abre tu corazón, recupera tu soberanía."*
- **The "Esto es lo que necesito" Identification Rule:** Directly addresses chronic overwhelm, mental chatter, nervous system fatigue, and the quiet ache of living in autopilot.
- **Primary CTA:** `[ Conversar por WhatsApp ]` $\rightarrow$ triggers `https://wa.me/573215428972?text=Hola%20Azu,%20visité%20tu%20página%20y%20me%20gustaría%20conversar%20sobre%20tus%20sesiones.`

### Section 03: Servicios & Acompañamiento (Azu's Reordered Catalog)
*Sequence Rule (Nov 1 Directive):*
1. **Oidaterapia (Sesión Inicial / Diagnóstico):**
   - *Headline / Impact:* Claridad emocional, discernimiento personal y revisión de encrucijadas de vida.
   - *Experience:* Espacio de escucha profunda para revisar dónde estás poniendo tu fe y desarmar creencias que ya no te sirven.
   - *Promotion Hook:* Sesión de valoración / introductoria (gratuita o preferencial por tiempo limitado).
   - *Format:* Presencial en Valledupar u Online (50–70 min).
   - *Card CTA:* `[ Agendar Sesión Inicial ]` $\rightarrow$ pre-filled WhatsApp text.
2. **Kundalini Yoga & Acompañamiento Personalizado:**
   - *Headline / Impact:* Vitalidad, respiración consciente y despertar de la energía interna frente al insomnio y la fatiga.
   - *Experience:* Sesión inicial de 2 horas (o seguimiento de 45–60 min) con movimiento somático, respiración rítmica y kriyas adaptadas a tu proceso.
   - *Visual Touch:* Incorpora la fotografía de Azu con atuendo/turbante sagrado de Kundalini Yoga.
   - *Card CTA:* `[ Consultar Acompañamiento ]` $\rightarrow$ pre-filled WhatsApp text.
3. **Terapias Energéticas Somáticas (Barras de Access® y Procesos de Cuerpo):**
   - *Headline / Impact:* Calma mental profunda, reseteo de estrés acumulado y reconciliación somática.
   - *Trademark & Authority Reference:* Primera mención incluye la marca registrada **Barras de Access®** con enlace de referencia externo a [Access Consciousness®](https://www.accessconsciousness.com/bars).
   - *Experience:* Toques suaves sobre 32 puntos de la cabeza e imposición de manos no invasiva para disipar la sobrecarga electromagnética de pensamientos y tensión física.
   - *Format:* Presencial en Valledupar o a domicilio (45–60 min).
   - *Card CTA:* `[ Consultar Terapias Energéticas ]` $\rightarrow$ pre-filled WhatsApp text.
4. **Meditaciones Personalizadas:**
   - *Headline / Impact:* Una herramienta sonora diseñada a la medida de tu estado emocional actual.
   - *Experience:* Se completa un breve formulario y recibes en tu correo un audio guiado personalizado ~2 días después (entrega asíncrona, sin agenda de calendario).
   - *Card CTA:* `[ Solicitar Meditación ]` $\rightarrow$ pre-filled WhatsApp text.

### Section 04: Recursos Gratuitos & Podcast (YouTube Bridge)
*New Section (Nov 1 Directive):*
- Connects visitors with zero barrier to entry:
  - **Heading:** *"Recursos Gratuitos: Luz en tu Camino"*
  - **Description:** *"Escucha nuestras meditaciones abiertas y episodios formativos en el canal oficial de YouTube del videopodcast 'El Corazón como Portal'."*
  - **Embedded / Featured Links:** Highlight the 2 public guided meditations already uploaded on YouTube.
  - **CTA:** `[ Explorar Meditaciones en YouTube → ]` (`https://www.youtube.com/@Elcorazóncomoportal`).

### Section 05: Acerca de Azu (Story & Approach)
- **Visuals:** Natural lifestyle portrait (leaving turban photos reserved for Kundalini).
- **Narrative:**
  - Former audiovisual director and producer in Colombian national television who experienced the deep emptiness and exhaustion of living on autopilot.
  - Chose to "saltar al vacío" to study ancient technologies: Tantra, Yoga (RYT200 / KRI), Humanology, Vedic philosophy, and Oidaterapia.
  - Accompanies others not as an external guru, but helping them activate their own inner compass.

### Section 06: El Corazón como Portal (Propósito & Filosofía)
- Excerpt of core philosophy: El corazón (Anahata chakra) como centro de discernimiento, ecuanimidad y despertar.
- Redefining healing from passive waiting to sovereign participation (the concept of the **Animado**).

### Section 07: Contacto, Redes & Cierre
- Direct channels:
  - **WhatsApp Business Directo:** `+57 321 542 8972` (`https://wa.me/573215428972`)
  - **Email:** `contactocorazoncp@gmail.com`
  - **Instagram:** `https://www.instagram.com/elcorazoncomoportal` (`@elcorazoncomoportal`)
  - **YouTube:** `https://www.youtube.com/@Elcorazóncomoportal` (`@Elcorazóncomoportal`)
  - **X (Twitter):** `https://x.com/Elcorazoncp` (`@Elcorazoncp`)
  - **Dirección & Ubicación:** Calle 7 #19B-88 Apto 102, Valledupar, Colombia, 200005 (atención presencial y a domicilio)
- **Floating WhatsApp Anchor:** Persistent/floating action button allowing instant jump or direct click to chat.

---

## 5. Security & Edge Hardening Specifications

Given that new domains on Cloudflare Pages receive immediate crawler, bot probing, and DNS scans, security must be built in at the edge:

1. **Static Security Headers (`public/_headers` for Cloudflare Pages):**
   - `Content-Security-Policy`: Restricts scripts, styles, and frames to trusted origins (`'self'`, Google Fonts, YouTube iframe embeds, Cloudflare analytics).
   - `X-Frame-Options: DENY` (clickjacking defense).
   - `X-Content-Type-Options: nosniff` (MIME-sniffing prevention).
   - `Referrer-Policy: strict-origin-when-cross-origin`.
   - `Permissions-Policy`: Restricts microphone, camera, and geolocation.
2. **Bot & Crawler Traffic Protection:**
   - Add standard `robots.txt` disallowing malicious scrapers and indexing legitimate search engines.
   - Leverage Cloudflare's Bot Fight Mode and Web Analytics (zero cookies, GDPR compliant).
3. **Data Boundary Invariant:**
   - Zero secrets, zero API keys, and zero unapproved intake PII (`.internal/`) in public assets.

---

## 6. SEO, AEO (Answer Engine Optimization) & Metadata Architecture

1. **Search Engine & Social Metadata:**
   - OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`).
   - Twitter Cards (`summary_large_image`).
   - Canonical URL pointing to `https://elcorazoncomoportal.com/`.
2. **AEO & Semantic JSON-LD (Schema.org):**
   - Provide structured data so AI search engines (Perplexity, ChatGPT Search, Google Gemini) can authoritatively parse and cite Azu's services:
     - `@type: LocalBusiness / HealthAndBeautyBusiness`
     - Name: *El Corazón como Portal*
     - Founder: *Azucena Sánchez (Azu Seva Surpreet Kaur)*
     - Address: *Calle 7 #19B-88 Apto 102, Valledupar, Colombia, 200005*
     - GeoCoordinates / AreaServed: *Valledupar, Colombia, and Global Virtual Sessions*
     - Offers: *Barras de Access®, Procesos de Cuerpo, Oidaterapia, Kundalini Yoga*
3. **Google Tag Manager / Analytics Integration Seam:**
   - Structured script placeholders for GA4 / GTM measuring WhatsApp CTA click events (`gtm-cta-whatsapp`).

---

## 7. Official Brand Color Palette & Visual System

| Color Name | Hex Code | Semantic Role & Usage | Contrast vs. Canvas |
| :--- | :--- | :--- | :--- |
| **Ivory** | `#F2EBDD` | Primary Canvas / Background (warm, organic, serene base) | Base |
| **Forest** | `#102F27` | Primary Typography, deep headings, high-contrast dark sections | **12.14:1** (AAA) |
| **Emerald** | `#185844` | Primary Brand Accent (Anahata heart chakra), active CTAs, badges | **7.03:1** (AAA) |
| **Sage** | `#78947F` | Secondary Accent, subtle card borders, tags, secondary icons | Soft organic divider |
| **Antique Gold** | `#B08A4F` | Accent highlights, decorative dividers, delicate insignia | **4.52:1** on Forest (AA) |
