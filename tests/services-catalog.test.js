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
    'Criterion 2: Hero & Header Polish (contrast wash, verbatim subtitle with "profunda", enlarged quote)',
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

      // 2. Hero Subtitle verbatim copy hook with "profunda"
      const heroSection = indexHtml.match(/<section id="hero"[\s\S]*?<\/section>/)?.[0];
      assert.ok(heroSection, 'Hero section must exist');

      const expectedHook =
        'Acompañamiento integral para habitar tu cuerpo sin dolor, disipar el estrés, la ansiedad y el insomnio. Un espacio seguro para transitar procesos de sanación emocional profunda, recuperar tu vitalidad y liderar tu vida desde la soberanía.';
      assert.ok(
        heroSection.includes(expectedHook),
        'Hero must include approved verbatim copy hook containing "sanación emocional profunda"',
      );

      // 3. Quote Caption scale (desktop enlarged md:text-base/lg:text-lg, mobile text-xs/sm:text-sm)
      const quoteBlock = heroSection.match(/<div[^>]*rounded-2xl[^>]*>[\s\S]*?<\/div>/i)?.[0];
      assert.ok(quoteBlock, 'Quote callout block must exist near portrait in Hero');
      assert.match(
        quoteBlock,
        /(md:text-base|lg:text-lg)/,
        'Quote caption must have desktop enlargement typography (md:text-base or lg:text-lg)',
      );
      assert.match(
        quoteBlock,
        /(text-xs|text-sm)/,
        'Quote caption must retain compact mobile typography (text-xs or text-sm)',
      );
    },
  );

  await t.test(
    'Criterion 3: 5-Card Outcome-First Services Grid with balanced 3+2 architecture',
    () => {
      const serviciosSection = indexHtml.match(/<section id="servicios"[\s\S]*?<\/section>/)?.[0];
      assert.ok(serviciosSection, 'Section #servicios must exist');

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
    'Criterion 6: Asymmetric Complementary Paths (Section 04: EXPLORA OTROS ESPACIOS)',
    () => {
      // Find section with EXPLORA OTROS ESPACIOS
      assert.match(
        indexHtml,
        /EXPLORA OTROS ESPACIOS/,
        'Document must have section with heading EXPLORA OTROS ESPACIOS',
      );

      // Check Panel A: Hatha Yoga anchor
      assert.match(
        indexHtml,
        /hatha-yoga\.webp/,
        'Complementary paths must include hatha-yoga.webp',
      );
      assert.match(
        indexHtml,
        /Clases de Hatha Yoga \(Personalizadas y Grupales\)/,
        'Must include title: Clases de Hatha Yoga (Personalizadas y Grupales)',
      );
      assert.match(
        indexHtml,
        /alineación.*respiración consciente.*desbloqueo somático/s,
        'Hatha Yoga copy must mention alignment, conscious breathing, and somatic release',
      );
      assert.match(
        indexHtml,
        /Conversar sobre Clases por WhatsApp/,
        'Hatha Yoga CTA must have text "Conversar sobre Clases por WhatsApp"',
      );

      // Check Panel B: Quiet panel Recursos Abiertos
      assert.match(indexHtml, /bg-porcelain-mist/, 'Panel B must use bg-porcelain-mist styling');
      assert.match(indexHtml, /RECURSOS ABIERTOS/, 'Panel B must have eyebrow RECURSOS ABIERTOS');
      assert.match(
        indexHtml,
        /Luz en tu Camino \(YouTube & Podcast\)/,
        'Panel B must have title Luz en tu Camino (YouTube & Podcast)',
      );
      assert.match(
        indexHtml,
        /Meditaciones abiertas para encontrar calma y reconectar contigo a tu propio ritmo\./,
        'Panel B must contain approved concise copy',
      );
      assert.match(indexHtml, /Spotify/i, 'Panel B must mention upcoming Spotify availability');
      assert.match(
        indexHtml,
        /https:\/\/www\.youtube\.com\/@Elcoraz(?:%C3%B3|[oó])ncomoportal/i,
        'Panel B must link to official YouTube channel',
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
      assert.ok(
        distHtml.includes('EXPLORA OTROS ESPACIOS'),
        'Built HTML must contain EXPLORA OTROS ESPACIOS',
      );
      assert.ok(
        distHtml.includes('Mentorías y Oidaterapia'),
        'Built HTML must contain Mentorías y Oidaterapia',
      );
    },
  );
});
