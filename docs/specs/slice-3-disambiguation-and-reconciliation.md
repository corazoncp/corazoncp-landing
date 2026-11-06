# Slice 3 Disambiguation, Reconciliation, and Correction Specification

**Document Version:** 1.0.0  
**Target Slice:** Slice #3 Remediation (`feat/service-cards-slice-3`)  
**Linked Gitea Entity:** [Issue #3](https://gitea.roadtotech.me/corazoncp/corazoncp-landing/issues/3) / [PR #15](https://gitea.roadtotech.me/corazoncp/corazoncp-landing/pulls/15)  
**Status:** Canonical Requirement & Correction Blueprint

---

## 1. Executive Summary & Root Cause Analysis

Following the Slice #2 client review (*«Revisión de Avances: Slice #2»*), several agreed-upon adjustments were either improperly implemented, misallocated across milestone horizons, or introduced regressions during Slice #3.

This audit documents the root causes of these deviations:

1. **Review Document Misnomer (Item 1A)**:
   - *Original Feedback*: Azu explicitly requested replacing the subtitle of **Servicios** (*«Respuestas concretas para el estrés crónico, el insomnio y la confusión emocional.»*).
   - *Misnomer*: The review summary table mislabeled this item as *«1A - Subtítulo del Hero (Pantalla Inicial)»*.
   - *Impact*: The implementation worker inserted this dense text into the Hero section (Section 02) creating stacked duplicate paragraphs, while leaving the rejected text literally present under Section 03 (`#servicios`, line 111).
2. **Underspecified Viewport Scope (Item 1B)**:
   - *Original Agreement*: Increase the font size accompanying the entrance photo *on desktop*.
   - *Impact*: The worker introduced `text-xs sm:text-sm md:text-base lg:text-lg`. On mobile screens (`< 640px`), the font shrank from the Slice 2 production baseline of `text-sm` (`0.875rem` / `14px`) down to `text-xs` (`0.75rem` / `12px`), causing a mobile readability regression.
3. **Artificial Slice Boundary Splitting (Items 1C, 1D, 1E)**:
   - *Defect*: Static copywriting and naming updates for Section 05 (About) and Section 06 (Filosofía) were artificially deferred to Slice 4 under the assumption that photo transcoding (`IMG_1994.HEIC`) was a blocker.
   - *Impact*: All photos (including `namaste-bio.webp`) were transcoded prior to Slice 3. Deferring these simple text updates left the site displaying the rejected civil name *«Azucena Sánchez»*, the old turban portrait, the invalid hybrid spiritual name *«Azu Seva...»*, truncated bio paragraphs, and *«Anahata Chakra»* directly beneath the freshly implemented service catalog.
4. **Suboptimal Layout & Affordance (Item 2F)**:
   - *Defect*: The transition bridge *«Caminos Complementarios»* was implemented as an asymmetric 65/35 two-column pane.
   - *Impact*: The 35% right panel was mostly empty white space, creating visual card fatigue beneath a 5-card grid, while lacking any recognizable YouTube visual branding.

---

## 2. Reconciled Feature Matrix & Expected Corrections

| Item | Section / Area | Defect in Slice #3 | Required Correction Specification |
| :--- | :--- | :--- | :--- |
| **1A** | Section 03 (`#servicios`) & Section 02 (Hero) | Text placed in Hero; rejected text still in Services L111. | **Section 03 L111**: Replace `Respuestas concretas...` with approved text:<br/>*«Acompañamiento integral para habitar tu cuerpo sin dolor, disipar el estrés, la ansiedad y el insomnio. Un espacio seguro para transitar procesos de sanación emocional profunda, recuperar tu vitalidad y liderar tu vida desde la soberanía».*<br/>**Section 02 (Hero)**: Restore clean single subtitle (*«Un respiro consciente frente al parloteo mental y la fatiga del sistema nervioso para abrir tu corazón a tu propia medicina interna.»*). |
| **1B** | Section 02 (Hero Quote Caption) | Mobile text shrank from `text-sm` to `text-xs`. | Update quote `<p>` classes to `font-serif italic text-sm md:text-base lg:text-lg text-forest/90 leading-relaxed`. Mobile remains locked at `text-sm` (`0.875rem` / `14px`). |
| **1C** | Section 05 (`#acerca`) | Outdated photo & hybrid spiritual name *«Azu Seva...»*. | 1. Replace `/img/azu-about.jpg` with `/img/namaste-bio.webp`.<br/>2. Keep civil name H2: `Azucena Sánchez`.<br/>3. Strip *"Azu"* from spiritual line: `Seva Surpreet Kaur — Facilitadora de bienestar`. |
| **1D** | Section 05 (`#acerca` Bio Paragraphs) | Omitted keywords and truncated closing clause. | Update the 3 paragraphs verbatim:<br/>• Para 1: Colombian TV producer trajectory.<br/>• Para 2: Include *Kundalini KRI* and *, Acceso a la consciencia*.<br/>• Para 3: Include closing clause *, y con ello, contribuir al mundo que habitamos.* |
| **1E** | Section 06 (`#filosofia`) | Missing *«trascendental»* and still displays *«Anahata Chakra»*. | 1. Quote: Include *«sabiduría trascendental del corazón»*.<br/>2. Eyebrow: Replace *«Anahata Chakra»* with *«El Corazón como Portal · Conecta con tu guía interno»*. |
| **1F** | Section 01 (Header Bar) | Translucent green tint wash contrast. | **VERIFIED SOLVED ✅**: Retain `bg-sage/15 backdrop-blur-md border-b border-sage/30`. |
| **2A–2E**| Section 03 (5 Service Cards) | Card order, staged assets, Access Bars® trademark. | **VERIFIED SOLVED ✅**: Retain 3+2 grid layout, individual WhatsApp CTAs, and registered trademark link. |
| **2F** | Section 04 (`#otros-espacios`) | 65/35 pane division is unbalanced; empty YouTube panel. | **Redesign into single full-width container**:<br/>• Hatha Yoga practice anchor with `/img/hatha-yoga.webp` and dedicated WhatsApp CTA.<br/>• Integrated atmospheric media strip (*«Escucha · Respira · Reconecta»*), text inviting to YouTube open meditations, official Simple Icons YouTube SVG vector, and *«Próximamente en Spotify»* badge. |
| **3A–3B**| Design Tokens & Typography | Google Fonts & Tailwind palette. | **VERIFIED SOLVED ✅**: Retain Playfair Display, Cormorant Garamond, Raleway, Porcelain Mist (`#f4f1ea`), and Gris Oscuro (`#303030`). |
| **4A** | Footer Channels | Facebook Fanpage presence. | **VERIFIED SOLVED ✅**: Retain official link to `https://www.facebook.com/elcorazoncomoportal/`. |

---

## 3. Concrete Code Specifications

### Section 02: Hero Subtitle & Quote Box
```html
<!-- Single focused hero subtitle -->
<p class="text-base sm:text-lg text-forest/90 leading-relaxed max-w-xl mb-8">
  Un respiro consciente frente al parloteo mental y la fatiga del sistema nervioso para abrir tu corazón a tu propia medicina interna.
</p>

<!-- Quote box: 14px on mobile, scaling up on desktop -->
<div class="mt-4 md:mt-0 md:absolute md:-bottom-6 md:-left-6 rounded-2xl border border-gold/40 bg-ivory p-4 shadow-xl max-w-xs">
  <p class="font-serif italic text-sm md:text-base lg:text-lg text-forest/90 leading-relaxed">
    “En tu cuerpo, mente y energía reside la medicina para sanarte.”
  </p>
</div>
```

### Section 03: Services Subtitle
```html
<h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest mb-4">
  Servicios & Terapias
</h2>
<p class="text-forest/80 text-base sm:text-lg max-w-3xl mx-auto">
  Acompañamiento integral para habitar tu cuerpo sin dolor, disipar el estrés, la ansiedad y el insomnio. Un espacio seguro para transitar procesos de sanación emocional profunda, recuperar tu vitalidad y liderar tu vida desde la soberanía.
</p>
```

### Section 04: Unified Full-Width Caminos Complementarios
```html
<section id="otros-espacios" class="py-16 md:py-24 bg-sage/5 border-y border-sage/20">
  <div class="mx-auto max-w-6xl px-6">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="inline-block text-xs font-bold uppercase tracking-widest text-gold mb-2">
        Caminos Complementarios
      </span>
      <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest">
        Explora Otros Espacios
      </h2>
    </div>

    <!-- Single Full-Width Container -->
    <div class="overflow-hidden rounded-3xl border border-sage/30 bg-ivory shadow-xl">
      <!-- Part 1: Hatha Yoga Anchor -->
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center">
        <div class="lg:col-span-7 h-72 sm:h-96 lg:h-full min-h-[300px]">
          <img
            src="/img/hatha-yoga.webp"
            alt="Práctica grupal de Hatha Yoga al aire libre guiada por Seva Surpreet Kaur"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald">
                Práctica Corporal & Somática
              </span>
              <span class="text-xs text-forest/40">·</span>
              <span class="text-xs font-medium text-forest/60">Presencial & Virtual</span>
            </div>
            <h3 class="font-serif text-2xl sm:text-3xl font-bold text-forest mb-4">
              Clases de Hatha Yoga (Personalizadas y Grupales)
            </h3>
            <p class="text-sm sm:text-base text-forest/80 leading-relaxed mb-6 font-sans">
              Acompañamiento físico enfocado en alineación, respiración consciente y desbloqueo somático. Una práctica enraizada y progresiva para liberar tensiones corporales crónicas y habitar tu postura desde la calma.
            </p>
          </div>
          <div>
            <a
              href="https://wa.me/573215428972?text=Hola%20Azu,%20me%20gustar%C3%ADa%20conversar%20sobre%20las%20Clases%20de%20Hatha%20Yoga."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-ivory shadow-md transition hover:bg-forest"
            >
              <span>Conversar sobre Clases por WhatsApp →</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Part 2: Integrated Media Strip (YouTube & Spotify) -->
      <div class="border-t border-sage/25 bg-porcelain-mist p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-center md:text-left">
          <span class="block font-display text-lg sm:text-xl font-semibold text-forest mb-1">
            Escucha · Respira · Reconecta
          </span>
          <p class="text-xs sm:text-sm text-forest/80 max-w-xl">
            Explora también las meditaciones abiertas en mi canal de YouTube para encontrar calma y reconectar a tu propio ritmo.
          </p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <span class="inline-flex items-center gap-1.5 text-xs font-medium text-forest/70 bg-sage/15 px-3 py-1.5 rounded-full border border-sage/30">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald"></span>
            Próximamente en Spotify
          </span>
          <a
            href="https://www.youtube.com/@Elcoraz%C3%B3ncomoportal"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-xs sm:text-sm font-semibold text-ivory shadow transition hover:bg-emerald"
          >
            <!-- Simple Icons YouTube SVG -->
            <svg class="h-4 w-4 fill-red-500" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Ver Meditaciones en YouTube ↗</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Section 05: Bio & Spiritual Name
```html
<section id="acerca" class="py-16 md:py-24">
  <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
    <div class="md:col-span-5">
      <div class="overflow-hidden rounded-3xl border border-sage/30 shadow-xl aspect-[4/5] bg-sage/10">
        <img
          src="/img/namaste-bio.webp"
          alt="Azucena Sánchez (Seva Surpreet Kaur) junto a su mentora Nam Nidhan Kaur"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
    <div class="md:col-span-7">
      <span class="inline-block text-xs font-bold uppercase tracking-widest text-gold mb-2">
        Conoce a tu Acompañante
      </span>
      <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest mb-4">
        Azucena Sánchez
      </h2>
      <p class="font-serif italic text-lg sm:text-xl text-emerald mb-6">
        Seva Surpreet Kaur — Facilitadora de bienestar
      </p>
      <div class="space-y-4 text-forest/85 leading-relaxed text-sm sm:text-base">
        <p>
          Tras años de trayectoria profesional como directora y productora en la televisión nacional colombiana, comencé a escuchar un profundo sentimiento de vacío y agotamiento: la señal ineludible del piloto automático.
        </p>
        <p>
          Decidí saltar al vacío, transitando mi propia noche oscura para reconectar con el cuerpo, aquietar la mente y estudiar tecnologías milenarias: Tantra, Yoga (RYT200 / Kundalini KRI), Humanología, Acceso a la consciencia y Oidaterapia.
        </p>
        <p>
          Hoy acompaño a personas no desde un mapa externo impuesto, sino facilitando que despiertes tu propia brújula interna y reconozcas que en tu propia energía reside la medicina para sanarte, y con ello, contribuir al mundo que habitamos.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Section 06: Filosofía Banner
```html
<section id="filosofia" class="bg-forest py-16 md:py-24 text-center text-ivory">
  <div class="mx-auto max-w-4xl px-6">
    <blockquote class="font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6 text-ivory/95">
      “Aquí no atendemos pacientes pasivos; impulsamos Animados: seres soberanos que eligen su propio bienestar y despiertan la sabiduría trascendental del corazón.”
    </blockquote>
    <span class="inline-block text-xs font-bold uppercase tracking-widest text-gold">
      El Corazón como Portal · Conecta con tu guía interno
    </span>
  </div>
</section>
```

---

## 4. Verification Seam Assertions (`tests/services-catalog.test.js`)

The test suite must assert the following falsifiable contracts:
1. `index.html` line 111 contains verbatim *«Acompañamiento integral para habitar tu cuerpo sin dolor...»*; zero occurrences of *"Respuestas concretas para el estrés crónico"*.
2. Section 02 Hero quote `<p>` contains classes `text-sm md:text-base lg:text-lg`.
3. Section 04 `#otros-espacios` contains `/img/hatha-yoga.webp`, *«Escucha · Respira · Reconecta»*, Simple Icons YouTube path vector, and valid YouTube link. Zero occurrences of `lg:grid-cols-12` split cards.
4. Section 05 `#acerca` renders `src="/img/namaste-bio.webp"`, H2 `Azucena Sánchez`, subtitle `Seva Surpreet Kaur — Facilitadora de bienestar` (without `"Azu Seva"`), and all 3 updated bio paragraphs (*Kundalini KRI*, *Acceso a la consciencia*, *contribuir al mundo que habitamos*).
5. Section 06 `#filosofia` contains *«sabiduría trascendental del corazón»* and *«Conecta con tu guía interno»*; zero occurrences of *«Anahata Chakra»*.
6. All tests pass hermetically: `direnv exec . pnpm test` and `direnv exec . pnpm lint`.
