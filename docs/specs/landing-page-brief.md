# Product Brief — Public Landing Page (Reconciled with Slice #2 Feedback)

- **Product:** El Corazón como Portal Landing Page
- **Repository:** `corazoncp/corazoncp-landing`
- **Target Deadline:** Active Milestone (`v1-public-landing`)
- **Status:** Approved for Implementation (Reconciled with Client Feedback from Slice #2 Review)

---

## 1. Business Objective & Problem Statement

Azucena Sánchez (Seva Surpreet Kaur) requires a serene, grounded, mobile-first public web presence to unify disjointed flyers, PDF shares, and social media links. 

Prospective clients frequently experience the overwhelm, chronic stress, anxiety, and empty autopilot of modern life. The landing page establishes immediate credibility, introduces Seva Surpreet Kaur's journey and holistic approach, and provides an effortless, friction-free conversion path into direct 1:1 conversation via WhatsApp.

### Priority Outcomes (Per Client Directives)
- **Goal A (Primary):** Conseguir consultas — facilitate direct WhatsApp contact with zero friction.
- **Goal B (Primary):** Promocionar servicios concretos — enable visitors to identify a relevant offering and inquire with one click.
- **Goal C (Secondary Free Resources & Bridge):** Connect visitors with free audio/video tools via YouTube (*"El corazón como portal: Luz en tu camino"*), future Spotify podcast, and secondary invitations (e.g. Hatha Yoga).

---

## 2. Intended Audience & Core Value Proposition

- **Target Audience:** Adults aged 25–40 in Valledupar, Colombia, and virtually across Colombia, Latin America, and international markets experiencing the "choque con el piloto automático"—chronic workplace stress, nervous system fatigue, insomnia, and existential emptiness.
- **Client Paradigm:** **"ANIMADOS"**, not passive patients. The ecosystem empowers individuals to assume active responsibility for their healing and sovereignty.
- **Core Proposition:** Somatic cranial and body touch (Barras de Access®, Procesos de Cuerpo) paired with conscious mentoring, Kundalini Yoga, and Oidaterapia to dissolve limiting beliefs, release physical pain, restore vitality, and open the heart.
- **Slogan:**
  - *Spanish:* *"Sal del automático. Abre tu corazón, recupera tu soberanía."*
  - *English:* *"Step out of autopilot. Open your heart, master your sovereignty."*

---

## 3. Scope Boundaries & Explicit Non-Goals

| In Scope (v1) | Explicitly Deferred / Non-Goals (v1) |
| :--- | :--- |
| Responsive single-page architecture (mobile-first 375px–1440px) | User accounts, client login, authentication, or member portals |
| Unified Hero section (Slogan + Valledupar & Online + WhatsApp CTA) | Interactive booking calendar / slot reservation engine |
| 5 Outcome-first Service cards (Oidaterapia $\rightarrow$ Kundalini $\rightarrow$ Barras $\rightarrow$ Procesos $\rightarrow$ Meditaciones) | Dynamic database, CMS, or backend APIs |
| Post-services secondary transition bridge (YouTube/Podcast + Hatha Yoga) | Payment gateways (Wompi, Stripe, PayPal) or e-commerce checkout |
| "Acerca de Seva Surpreet Kaur" narrative (photo `IMG_1994.HEIC`, reserving turban for Kundalini) | Audio file streaming hosting on origin |
| "Filosofía" banner (*"Conecta con tu guía interno"*, Animados quote with *trascendental*) | Secondary business partnerships (Ringana, GanoExcel) |
| Hardened Static Edge Security Headers & Bot Mitigation | Complex multi-step questionnaires |
| Native SEO, AEO (Answer Engine Optimization) & JSON-LD Structured Data | Telegram bot integration (deferred pending client sign-off) |
| WhatsApp deep links (`wa.me`) with URL-encoded inquiry messages | |

> [!WARNING]
> **Active Implementation Blocker (Photo Staging & Transcoding):**
> The raw client photos selected for the service catalog and bio (`IMG_9190.JPG`, `IMG_4305.CR3`, `IMG_0455.HEIC`, `IMG_2035.HEIC`, `WhatsApp Image 2025-10-20 at 12.55.40_0dc0097c.jpg`, `IMG_1994.HEIC`, `IMG_9204.CR2`) currently reside in `.internal/img/photos/` in uncompressed camera raw and mobile formats (Canon `.CR3`/`.CR2` $>24$MB, Apple `.HEIC`). Direct browser rendering of these files is technically impossible.
> **Staging and transcoding these images to optimized `.webp` assets ($\le 150$KB) inside `corazoncp-landing/public/img/` is an explicit blocker** before final asset binding in Slice 3 and Slice 4 tasks.

---

## 4. Content Hierarchy & Section Specifications (Reconciled with Client Feedback)

### Section 01: Header & Minimal Navigation
- **Branding:** Logo icon (sacred geometry heart) + "El Corazón como Portal".
- **Navigation Links:** Smooth scroll anchors to `#servicios`, `#acerca`, `#filosofia`, and `#contacto`.
- **Visual Contrast Improvement (Slice #2 Feedback):** Explore soft green/sage tint wash (`verdecita` / translucent emerald wash) for the sticky navigation header to enhance visual contrast against the canvas while maintaining backdrop blur.
- **Constraint:** Zero login buttons or customer portal placeholders.

### Section 02: Hero — Identity, Dual Modality & Immediate Action
- **Visuals:** Warm sand/cream background, Azu's grounding portrait (`/img/azu-hero.jpg`), emerald green accent.
- **Photo Caption:** Typography scale increased for the quote accompanying the entrance photo to ensure prominent readability.
- **Eyebrow (Dual Modality):** `ACOMPAÑAMIENTO CONSCIENTE · VALLEDUPAR & ONLINE`
- **Headline (Slogan):** *"Sal del automático. Abre tu corazón, recupera tu soberanía."*
- **Approved Subtitle Copy Hook:**
  > *«Acompañamiento integral para habitar tu cuerpo sin dolor, disipar el estrés, la ansiedad y el insomnio. Un espacio seguro para transitar procesos de sanación emocional profunda, recuperar tu vitalidad y liderar tu vida desde la soberanía».*
- **Primary CTA:** `[ Conversar por WhatsApp → ]` $\rightarrow$ triggers `https://wa.me/573215428972?text=Hola%20Azu,%20visité%20tu%20página%20y%20me%20gustaría%20conversar%20sobre%20tus%20sesiones.`
- **Floating WhatsApp Anchor:** Persistent action button anchored at bottom-right with touch target $\ge 48$px.

### Section 03: Servicios & Acompañamiento (5 Discrete Cards)
*Sequence Rule (Client Approved Order):*
1. **Mentorías y Oidaterapia (Online & Presencial):**
   - *Headline / Impact:* Claridad emocional, discernimiento personal y revisión de encrucijadas de vida. Sesión principal online y presencial.
   - *Experience:* Espacio de escucha profunda para revisar dónde estás poniendo tu fe y desarmar creencias que ya no te sirven.
   - *Visual Touch:* Fotografía `IMG_9190.JPG` (recorte con su hermano o toma equivalente).
   - *Card CTA:* `[ Agendar Sesión Inicial ]` $\rightarrow$ pre-filled WhatsApp text.
2. **Clases de Kundalini Yoga y Acompañamientos:**
   - *Headline / Impact:* Vitalidad, respiración consciente y despertar de la energía interna frente al insomnio y la fatiga.
   - *Visual Touch:* Fotografía sagrada con turbante y manos en oración (`IMG_4305.CR3`).
   - *Card CTA:* `[ Consultar Kundalini Yoga ]` $\rightarrow$ pre-filled WhatsApp text.
3. **Terapias Energéticas (Barras de Access®):**
   - *Headline / Micro-copy:* *«Disipa carga mental y libera de creencias limitantes»*.
   - *Trademark & Authority Reference:* Primera mención incluye la marca registrada **Barras de Access®** con enlace de referencia externo a [Access Consciousness®](https://www.accessconsciousness.com/bars) (`target="_blank" rel="noopener noreferrer"`).
   - *Experience:* Toques suaves sobre 32 puntos de la cabeza para disipar sobrecarga electromagnética. Presencial en Valledupar.
   - *Visual Touch:* Fotografía `IMG_0455.HEIC` (intervención en sofá con biblioteca).
   - *Card CTA:* `[ Consultar Barras de Access® ]` $\rightarrow$ pre-filled WhatsApp text.
4. **Procesos de Cuerpo:**
   - *Headline / Micro-copy:* *«Liberando dolor y ligereza»*.
   - *Experience:* Imposición somática no invasiva orientada al alivio del dolor físico y reconexión celular. Presencial en Valledupar.
   - *Visual Touch:* Fotografía `IMG_2035.HEIC`.
   - *Card CTA:* `[ Consultar Procesos de Cuerpo ]` $\rightarrow$ pre-filled WhatsApp text.
5. **Meditaciones Personalizadas:**
   - *Headline / Impact:* Una herramienta sonora diseñada a la medida de tu estado emocional actual.
   - *Placement:* Ubicada en 5° lugar para preservar el equilibrio y la armonía visual de la retícula.
   - *Experience:* Entrega asíncrona en audio guiado ~2 días después de diligenciar una breve consulta.
   - *Visual Touch:* Fotografía en la cascada (`WhatsApp Image 2025-10-20 at 12.55.40_0dc0097c.jpg`).
   - *Card CTA:* `[ Solicitar Meditación ]` $\rightarrow$ pre-filled WhatsApp text.

### Section 04: Cierre de Servicios & Recursos Gratuitos (Puente de Transición)
- **Recursos Gratuitos & Podcast:**
  - **Heading:** *"Recursos Gratuitos: Luz en tu Camino"*
  - **Description:** *"Escucha nuestras meditaciones abiertas y episodios formativos en el canal oficial de YouTube y próximamente en Spotify."*
  - **Embedded / Featured Links:** Meditaciones públicas en YouTube (`https://www.youtube.com/@Elcorazóncomoportal`).
- **Invitación a Hatha Yoga:**
  - Invitación secundaria a conocer clases de Hatha Yoga personalizadas y grupales.
  - **Fotografía:** `IMG_9204.CR2` o `WhatsApp Image 2025-12-17 at 2.38.44 PM`.
- **CTA Contenedor:** `[ Conversar sobre Clases y Sesiones → ]` $\rightarrow$ enlace directo a WhatsApp.

### Section 05: Acerca de Seva Surpreet Kaur (Historia y Trayectoria)
- **Identidad del Encabezado:** Se retira "Azu" del título; se titula formalmente **`Seva Surpreet Kaur — Facilitadora de bienestar`**.
- **Fotografía:** Retrato con manos en namasté (`IMG_1994.HEIC`).
- **Narrativa Oficial Aprobada:**
  > *«Tras años de trayectoria profesional como directora y productora en la televisión nacional colombiana, comencé a escuchar un profundo sentimiento de vacío y agotamiento: la señal ineludible del piloto automático.*
  > 
  > *Decidí saltar al vacío, transitando mi propia noche oscura para reconectar con el cuerpo, aquietar la mente y estudiar tecnologías milenarias: Tantra, Yoga (RYT200 / Kundalini KRI), Humanología, Acceso a la consciencia y Oidaterapia.*
  > 
  > *Hoy acompaño a personas no desde un mapa externo impuesto, sino facilitando que despiertes tu propia brújula interna y reconozcas que en tu propia energía reside la medicina para sanarte, y con ello, contribuir al mundo que habitamos.»*

### Section 06: El Corazón como Portal (Propósito & Filosofía)
- **Ajuste Conceptual:** Se retira la referencia a "Anahata chakra" y se reemplaza por **«Conecta con tu guía interno»**.
- **Cita Filosófica Oficial:**
  > *«Aquí no atendemos pacientes pasivos; impulsamos Animados: seres soberanos que eligen su propio bienestar y despiertan la sabiduría trascendental del corazón.»*

### Section 07: Contacto, Redes & Cierre
- Direct channels:
  - **WhatsApp Business Directo:** `+57 321 542 8972` (`https://wa.me/573215428972`)
  - **Email:** `contactocorazoncp@gmail.com`
  - **Facebook Fanpage:** `https://www.facebook.com/elcorazoncomoportal/`
  - **Instagram:** `https://www.instagram.com/elcorazoncomoportal` (`@elcorazoncomoportal`)
  - **YouTube:** `https://www.youtube.com/@Elcorazóncomoportal` (`@Elcorazóncomoportal`)
  - **X (Twitter):** `https://x.com/Elcorazoncp` (`@Elcorazoncp`)
  - **Dirección & Ubicación:** Calle 7 #19B-88 Apto 102, Valledupar, Colombia, 200005 (enlace a Google Maps `https://maps.app.goo.gl/FbaV2eRCWbsK8Hnt5` con `target="_blank" rel="noopener noreferrer"`).
- **Floating WhatsApp Anchor:** Persistent action button anchored at bottom-right with touch target $\ge 48$px.

---

## 5. Security & Edge Hardening Specifications

1. **Static Security Headers (`public/_headers` for Cloudflare Pages):**
   - `Content-Security-Policy`: Restricts scripts, styles, and frames to trusted origins (`'self'`, Google Fonts, YouTube iframe embeds, Cloudflare analytics).
   - `X-Frame-Options: DENY` (clickjacking defense).
   - `X-Content-Type-Options: nosniff` (MIME-sniffing prevention).
   - `Referrer-Policy: strict-origin-when-cross-origin`.
   - `Permissions-Policy`: Restricts microphone, camera, and geolocation.
2. **Bot & Crawler Traffic Protection:**
   - Standard `robots.txt` disallowing malicious scrapers and indexing legitimate search engines.
   - Cloudflare Bot Fight Mode and Web Analytics (zero cookies, GDPR compliant).
3. **Data Boundary Invariant:**
   - Zero secrets, zero API keys, and zero unapproved intake PII (`.internal/`) in public assets.

---

## 6. SEO, AEO (Answer Engine Optimization) & Metadata Architecture

1. **Search Engine & Social Metadata:**
   - OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`).
   - Twitter Cards (`summary_large_image`).
   - Canonical URL pointing to `https://elcorazoncomoportal.com/`.
2. **AEO & Semantic JSON-LD (Schema.org):**
   - `@type: LocalBusiness / HealthAndBeautyBusiness`
   - Name: *El Corazón como Portal*
   - Founder: *Seva Surpreet Kaur*
   - Address: *Calle 7 #19B-88 Apto 102, Valledupar, Colombia, 200005*
   - GeoCoordinates / AreaServed: *Valledupar, Colombia, and Global Virtual Sessions*
   - Offers: *Mentorías y Oidaterapia, Clases de Kundalini Yoga, Barras de Access®, Procesos de Cuerpo, Meditaciones Personalizadas*

---

## 7. Official Brand System: Typography & Color Tokens

### Typography System (Client Approved — 100% Free Open-Source via Google Fonts)
| Role | Font Family | Source | Characteristics & License |
| :--- | :--- | :--- | :--- |
| **Títulos Principales (H1 / Display)** | `Playfair Display` | Google Fonts | Elegancia clásica con serifas editoriales (OFL) |
| **Subtítulos y Encabezados (H2 / H3)** | `Cormorant Garamond` | Google Fonts | Serena, refinada, calidez meditativa (OFL) |
| **Cuerpo de Texto y Botones (Body / UI)** | `Raleway` | Google Fonts | Sans-serif geométrica, moderna, excelente legibilidad en pantalla (OFL) |

### Color Tokens
| Token Name | Hex Code | Semantic Role & Usage | Contrast vs. Canvas |
| :--- | :--- | :--- | :--- |
| **Ivory** | `#F2EBDD` | Canvas principal / base orgánica cálida | Base |
| **Porcelain Mist** | `#F4F1EA` | Fondo secundario suave para tarjetas o secciones de respiro | Soft Canvas |
| **Forest** | `#102F27` | Tipografía principal, títulos profundos, alto contraste | **12.14:1** (AAA) |
| **Gris Oscuro** | `#303030` | Párrafos densos, textos secundarios pequeños, máxima legibilidad | **10.5:1** (AAA) |
| **Emerald** | `#185844` | Acento de marca principal, botones de acción, insignias | **7.03:1** (AAA) |
| **Sage** | `#78947F` | Acento secundario, bordes sutiles de tarjeta, etiquetas | Divisor orgánico |
| **Antique Gold** | `#B08A4F` | Resaltados decorativos, divisores delicados | **4.52:1** sobre Forest (AA) |
