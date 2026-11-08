import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const indexPath = path.resolve('index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf-8');

const cssPath = path.resolve('src/style.css');
const styleCss = fs.readFileSync(cssPath, 'utf-8');

test('Slice 3 Acceptance Criteria: 5-Card Catalog, Brand Tokens & Complementary Paths', async (t) => {
  await t.test(
    'Criterion 1: Brand System Integrity (Google Fonts loaded, Tailwind @theme color tokens)',
    () => {
      // 1. Google Fonts loaded in index.html
      assert.match(
        indexHtml,
        /fonts\.googleapis\.com\/css2\?[^"]*family=Playfair\+Display/i,
        'index.html must load Playfair Display from Google Fonts',
      );
      assert.match(
        indexHtml,
        /fonts\.googleapis\.com\/css2\?[^"]*family=Cormorant\+Garamond/i,
        'index.html must load Cormorant Garamond from Google Fonts',
      );
      assert.match(
        indexHtml,
        /fonts\.googleapis\.com\/css2\?[^"]*family=Raleway/i,
        'index.html must load Raleway from Google Fonts',
      );

      // 2. Custom color tokens in src/style.css @theme
      assert.match(
        styleCss,
        /--color-porcelain-mist:\s*#f4f1ea/i,
        'src/style.css must define --color-porcelain-mist: #f4f1ea in @theme',
      );
      assert.match(
        styleCss,
        /--color-gris-oscuro:\s*#303030/i,
        'src/style.css must define --color-gris-oscuro: #303030 in @theme',
      );

      // 3. Typography mappings in @theme
      assert.match(
        styleCss,
        /Playfair Display/i,
        'src/style.css must reference Playfair Display for headings',
      );
      assert.match(
        styleCss,
        /Cormorant Garamond/i,
        'src/style.css must reference Cormorant Garamond for card headings',
      );
      assert.match(styleCss, /Raleway/i, 'src/style.css must reference Raleway for body/ui');
    },
  );

  await t.test(
    'Criterion 2: Hero & Header Polish (contrast wash, clean subtitle hook, enlarged quote text-sm/md/lg)',
    () => {
      // 1. Sticky Navigation Bar with translucent green tint wash
      const headerMatch = indexHtml.match(/<header[^>]*class="([^"]*)"/i);
      assert.ok(headerMatch, 'Header must exist with class attribute');
      const headerClasses = headerMatch[1];
      assert.match(headerClasses, /sticky/i, 'Header must be sticky');
      assert.match(
        headerClasses,
        /(bg-sage\/\d+|bg-emerald\/\d+)/i,
        'Header must use translucent green tint wash (bg-sage/* or bg-emerald/*)',
      );
      assert.match(headerClasses, /backdrop-blur/i, 'Header must retain backdrop-blur');
      assert.match(headerClasses, /border-b/i, 'Header must have border-b');

      // 2. Hero Subtitle single clean hook
      const heroSection = indexHtml.match(/<section id="hero"[\s\S]*?<\/section>/)?.[0];
      assert.ok(heroSection, 'Hero section must exist');

      const expectedHeroHook =
        'Un respiro consciente frente al parloteo mental y la fatiga del sistema nervioso para abrir tu corazón a tu propia medicina interna.';
      assert.ok(
        heroSection.includes(expectedHeroHook),
        'Hero must include approved single clean subtitle hook',
      );
      assert.ok(
        !heroSection.includes('Acompañamiento integral para habitar tu cuerpo sin dolor'),
        'Hero must not contain dense multi-service copy (moved to Section 03)',
      );

      // 3. Quote Caption scale (desktop enlarged md:text-base/lg:text-lg, mobile text-sm without text-xs)
      const quoteBlock = heroSection.match(/<div[^>]*rounded-2xl[^>]*>[\s\S]*?<\/div>/i)?.[0];
      assert.ok(quoteBlock, 'Quote callout block must exist near portrait in Hero');
      assert.match(
        quoteBlock,
        /text-sm\s+md:text-base\s+lg:text-lg/,
        'Quote caption must scale from text-sm on mobile to md:text-base and lg:text-lg on desktop',
      );
      assert.ok(
        !quoteBlock.includes('text-xs'),
        'Quote caption must not contain text-xs to prevent mobile readability regression',
      );
    },
  );

  await t.test(
    'Criterion 3: 5-Card Outcome-First Services Grid with balanced 3+2 architecture & reconciled subtitle',
    () => {
      const serviciosSection = indexHtml.match(/<section id="servicios"[\s\S]*?<\/section>/)?.[0];
      assert.ok(serviciosSection, 'Section #servicios must exist');

      // Subtitle with sanación emocional profunda & zero Respuestas concretas
      const expectedServicesSubtitle =
        'Acompañamiento integral para habitar tu cuerpo sin dolor, disipar el estrés, la ansiedad y el insomnio. Un espacio seguro para transitar procesos de sanación emocional profunda, recuperar tu vitalidad y liderar tu vida desde la soberanía.';
      assert.ok(
        serviciosSection.includes(expectedServicesSubtitle),
        'Section #servicios must contain approved subtitle with "sanación emocional profunda"',
      );
      assert.ok(
        !indexHtml.includes('Respuestas concretas para el estrés crónico'),
        'Document must have zero occurrences of rejected phrase "Respuestas concretas para el estrés crónico"',
      );

      // 5 approved image assets in order
      const expectedAssets = [
        'oidaterapia.webp',
        'kundalini-yoga.webp',
        'barras-access.webp',
        'procesos-cuerpo.webp',
        'meditaciones.webp',
      ];

      for (const asset of expectedAssets) {
        assert.ok(
          serviciosSection.includes(asset),
          `Section #servicios must include service card image ${asset}`,
        );
      }

      // 5 approved service card titles in order
      const serviceTitles = [
        /Mentorías y Oidaterapia/i,
        /Kundalini Yoga/i,
        /Barras de Access®/i,
        /Procesos de Cuerpo/i,
        /Meditaciones Personalizadas/i,
      ];

      let lastIndex = 0;
      for (const titleRegex of serviceTitles) {
        const match = serviciosSection.slice(lastIndex).match(titleRegex);
        assert.ok(
          match,
          `Service card title matching ${titleRegex} must appear in order in Section #servicios`,
        );
        lastIndex += match.index + match[0].length;
      }

      // Check 3+2 grid layout: 6-column grid on md/lg and 2 centered cards on row 2
      assert.match(
        serviciosSection,
        /(grid-cols-1.*md:grid-cols-6|md:grid-cols-6)/,
        'Services grid must use 6-column layout on desktop (md:grid-cols-6)',
      );
      assert.match(
        serviciosSection,
        /md:col-start-2/,
        'Row 2 first card must use md:col-start-2 to center the 2 cards in 6-column grid',
      );
    },
  );

  await t.test('Criterion 4: Trademark and Authority Link for Barras de Access®', () => {
    const serviciosSection = indexHtml.match(/<section id="servicios"[\s\S]*?<\/section>/)?.[0];
    assert.ok(serviciosSection, 'Section #servicios must exist');

    // Registered trademark symbol
    assert.match(
      serviciosSection,
      /Barras de Access®/,
      'Must include registered trademark symbol ® in Barras de Access®',
    );

    // Authority link to official Access Consciousness site
    const linkMatch = serviciosSection.match(
      /<a[^>]+href="https:\/\/www\.accessconsciousness\.com\/bars"[^>]*>[\s\S]*?<\/a>/i,
    );
    assert.ok(linkMatch, 'Must contain authority link to https://www.accessconsciousness.com/bars');
    assert.match(
      linkMatch[0],
      /target="_blank"/i,
      'Authority link must open in new tab (target="_blank")',
    );
    assert.match(
      linkMatch[0],
      /rel="noopener noreferrer"/i,
      'Authority link must include rel="noopener noreferrer"',
    );
  });

  await t.test('Criterion 5: Contextual WhatsApp CTAs & Phone Invariant (5 cards + Hatha)', () => {
    const phone = '573215428972';

    // Find all WhatsApp links in the document
    const waLinks = [...indexHtml.matchAll(/href="(https:\/\/wa\.me\/[^"]+)"/gi)].map((m) => m[1]);

    // Must have at least 8 WhatsApp links: floating, hero, 5 cards, hatha, contact
    assert.ok(waLinks.length >= 8, `Expected at least 8 WhatsApp links, found ${waLinks.length}`);

    const uniqueMessages = new Set();

    for (const link of waLinks) {
      assert.ok(
        link.startsWith(`https://wa.me/${phone}`),
        `All WhatsApp links must route strictly to https://wa.me/${phone}`,
      );

      // Ensure no raw unencoded spaces in href
      assert.ok(!link.includes(' '), `WhatsApp URL must not contain unencoded spaces: ${link}`);

      const url = new URL(link);
      const text = url.searchParams.get('text');
      if (text) {
        uniqueMessages.add(text);
      }
    }

    // Check that 5 service cards and Hatha Yoga have unique messages
    assert.ok(
      uniqueMessages.size >= 7,
      `Expected at least 7 distinct contextual inquiry messages, found ${uniqueMessages.size}`,
    );

    // Verify phone invariant across entire document
    const phoneMatches = indexHtml.matchAll(/(?:\+?57)?[ -]?(3\d{2}[ -]?\d{3}[ -]?\d{4})/g);
    for (const match of phoneMatches) {
      const rawDigits = match[0].replace(/\D/g, '');
      const normalized = rawDigits.startsWith('57') ? rawDigits : `57${rawDigits}`;
      assert.equal(
        normalized,
        phone,
        `Found unauthorized phone number: ${match[0]} (only ${phone} allowed)`,
      );
    }
  });

  await t.test(
    'Criterion 6: Reconciled Caminos Complementarios (Section 04: single container & media strip)',
    () => {
      const otrosEspaciosSection = indexHtml.match(
        /<section id="otros-espacios"[\s\S]*?<\/section>/,
      )?.[0];
      assert.ok(otrosEspaciosSection, 'Section #otros-espacios must exist');

      // Heading Explora Otros Espacios
      assert.match(
        otrosEspaciosSection,
        /Explora Otros Espacios/i,
        'Section must have heading Explora Otros Espacios',
      );

      // Single full-width container & absence of legacy split grid classes
      assert.ok(
        otrosEspaciosSection.includes(
          'overflow-hidden rounded-3xl border border-sage/30 bg-ivory shadow-xl',
        ),
        'Section 04 must use single full-width container',
      );
      assert.ok(
        !otrosEspaciosSection.includes('lg:col-span-8'),
        'Section 04 must not contain legacy split grid class lg:col-span-8',
      );
      assert.ok(
        !otrosEspaciosSection.includes('lg:col-span-4'),
        'Section 04 must not contain legacy split grid class lg:col-span-4',
      );

      // Part 1: Hatha Yoga anchor
      assert.match(
        otrosEspaciosSection,
        /hatha-yoga\.webp/,
        'Complementary paths must include hatha-yoga.webp',
      );
      assert.match(
        otrosEspaciosSection,
        /Clases de Hatha Yoga \(Personalizadas y Grupales\)/,
        'Must include title: Clases de Hatha Yoga (Personalizadas y Grupales)',
      );
      assert.match(
        otrosEspaciosSection,
        /alineación.*respiración consciente.*desbloqueo somático/s,
        'Hatha Yoga copy must mention alignment, conscious breathing, and somatic release',
      );
      assert.match(
        otrosEspaciosSection,
        /Conversar sobre Clases por WhatsApp/,
        'Hatha Yoga CTA must have text "Conversar sobre Clases por WhatsApp"',
      );

      // Part 2: Integrated media strip
      assert.match(
        otrosEspaciosSection,
        /bg-porcelain-mist/,
        'Media strip must use bg-porcelain-mist styling',
      );
      assert.match(
        otrosEspaciosSection,
        /Escucha · Respira · Reconecta/,
        'Media strip must contain cadence header "Escucha · Respira · Reconecta"',
      );
      assert.match(
        otrosEspaciosSection,
        /meditaciones abiertas en mi canal de YouTube/i,
        'Media strip must invite to YouTube open meditations',
      );
      assert.match(
        otrosEspaciosSection,
        /Próximamente en Spotify/i,
        'Media strip must mention upcoming Spotify availability',
      );
      assert.match(
        otrosEspaciosSection,
        /https:\/\/www\.youtube\.com\/@Elcoraz(?:%C3%B3|[oó])ncomoportal/i,
        'Media strip must link to official YouTube channel',
      );

      // Simple Icons YouTube SVG vector
      const youtubeSvgPath =
        'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z';
      assert.ok(
        otrosEspaciosSection.includes(youtubeSvgPath),
        'Media strip must render the official Simple Icons YouTube SVG path vector',
      );
    },
  );

  await t.test(
    'Criterion 7: Footer Channels (Facebook Fanpage with target="_blank" and rel="noopener noreferrer")',
    () => {
      const footerMatch = indexHtml.match(/<footer[\s\S]*?<\/footer>/i)?.[0];
      assert.ok(footerMatch, 'Footer element must exist');

      const fbLinkMatch = footerMatch.match(
        /<a[^>]+href="https:\/\/www\.facebook\.com\/elcorazoncomoportal\/"[^>]*>[\s\S]*?<\/a>/i,
      );
      assert.ok(
        fbLinkMatch,
        'Footer must contain official Facebook Fanpage link: https://www.facebook.com/elcorazoncomoportal/',
      );
      assert.match(
        fbLinkMatch[0],
        /target="_blank"/i,
        'Facebook link in footer must have target="_blank"',
      );
      assert.match(
        fbLinkMatch[0],
        /rel="noopener noreferrer"/i,
        'Facebook link in footer must have rel="noopener noreferrer"',
      );
    },
  );

  await t.test(
    'Criterion 8: Build and Lint Hygiene (dist artifacts exist and reflect slice changes)',
    () => {
      const distHtmlPath = path.resolve('dist/index.html');
      assert.ok(fs.existsSync(distHtmlPath), 'dist/index.html must exist from build');
      const distHtml = fs.readFileSync(distHtmlPath, 'utf-8');
      assert.match(
        distHtml,
        /Explora Otros Espacios/i,
        'Built HTML must contain Explora Otros Espacios',
      );
      assert.ok(
        distHtml.includes('Mentorías y Oidaterapia'),
        'Built HTML must contain Mentorías y Oidaterapia',
      );
    },
  );

  await t.test('Criterion 9: Bio & Philosophy Reconciled Integrity', () => {
    // Section 05: Acerca de
    const acercaSection = indexHtml.match(/<section id="acerca"[\s\S]*?<\/section>/)?.[0];
    assert.ok(acercaSection, 'Section #acerca must exist');

    assert.ok(
      acercaSection.includes('src="/img/namaste-bio.webp"'),
      'Section #acerca must use namaste-bio.webp',
    );
    assert.match(
      acercaSection,
      /alt="Azucena Sánchez \(Seva Surpreet Kaur\) junto a su mentora Nam Nidhan Kaur"/,
      'Section #acerca must include descriptive alt text with mentor Nam Nidhan Kaur',
    );
    assert.match(
      acercaSection,
      /<h2[^>]*>\s*Azucena Sánchez\s*<\/h2>/,
      'Section #acerca must display civil name H2: Azucena Sánchez',
    );
    assert.match(
      acercaSection,
      /Seva Surpreet Kaur — Facilitadora de bienestar/,
      'Section #acerca must display spiritual name without "Azu" prefix',
    );
    assert.ok(
      !acercaSection.includes('Azu Seva'),
      'Section #acerca must not include rejected hybrid name "Azu Seva"',
    );

    // Bio paragraphs verbatim keywords
    assert.match(
      acercaSection,
      /directora y productora en la televisión nacional colombiana.*piloto automático/s,
      'Bio paragraph 1 must describe Colombian TV trajectory and autopilot',
    );
    assert.match(
      acercaSection,
      /Kundalini KRI.*Acceso a la consciencia.*Oidaterapia/s,
      'Bio paragraph 2 must include Kundalini KRI and Acceso a la consciencia',
    );
    assert.match(
      acercaSection,
      /despiertes tu propia brújula interna.*contribuir al mundo que habitamos/s,
      'Bio paragraph 3 must include inner compass and closing clause on contributing to the world',
    );

    // Section 06: Filosofía
    const filosofiaSection = indexHtml.match(/<section id="filosofia"[\s\S]*?<\/section>/)?.[0];
    assert.ok(filosofiaSection, 'Section #filosofia must exist');

    assert.match(
      filosofiaSection,
      /sabiduría trascendental del corazón/,
      'Filosofía quote must contain "sabiduría trascendental del corazón"',
    );
    assert.match(
      filosofiaSection,
      /El Corazón como Portal · Conecta con tu guía interno/,
      'Filosofía eyebrow must contain "El Corazón como Portal · Conecta con tu guía interno"',
    );
    assert.ok(
      !filosofiaSection.includes('Anahata Chakra'),
      'Filosofía eyebrow must not contain "Anahata Chakra"',
    );
  });
});
