import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const indexPath = path.resolve('index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf-8');

test('Slice 2 Acceptance Criteria: Hero and WhatsApp Flow', async (t) => {
  await t.test(
    'Criterion 1: Eyebrow badge signals dual modality and includes confirmation comment',
    () => {
      // Must contain Valledupar & Online dual modality in Hero section
      const heroSection = indexHtml.match(/<section id="hero"[\s\S]*?<\/section>/)?.[0];
      assert.ok(heroSection, 'Hero section must exist in index.html');

      // Check for dual modality text: VALLEDUPAR & ONLINE
      const eyebrowRegex = /ACOMPAÑAMIENTO CONSCIENTE\s*·\s*VALLEDUPAR\s*&\s*ONLINE/i;
      assert.match(
        heroSection,
        eyebrowRegex,
        'Eyebrow must explicitly signal dual modality: ACOMPAÑAMIENTO CONSCIENTE · VALLEDUPAR & ONLINE',
      );

      // Must include comment noting pending client confirmation per brief Section 02
      assert.match(
        heroSection,
        /<!--[\s\S]*?pending[\s\S]*?confirmation[\s\S]*?Section 02[\s\S]*?-->/i,
        'Hero eyebrow must have an explanatory comment noting pending confirmation per brief Section 02',
      );
    },
  );

  await t.test(
    'Criterion 2: Primary Hero CTA triggers wa.me with pre-filled encoded inquiry message',
    () => {
      const heroSection = indexHtml.match(/<section id="hero"[\s\S]*?<\/section>/)?.[0];
      assert.ok(heroSection, 'Hero section must exist');

      const expectedPhone = '573215428972';
      const expectedMessage =
        'Hola Azu, visité tu página y me gustaría conversar sobre tus sesiones.';
      const expectedEncoded = encodeURIComponent(expectedMessage);

      // Hero primary CTA anchor
      const ctaMatch = heroSection.match(/<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?<\/a>/i);
      assert.ok(ctaMatch, 'Hero must contain a primary CTA link');

      const href = ctaMatch[1];
      assert.ok(
        href.startsWith(`https://wa.me/${expectedPhone}`),
        `Hero CTA must target https://wa.me/${expectedPhone}`,
      );

      const url = new URL(href);
      assert.equal(
        url.searchParams.get('text'),
        expectedMessage,
        'CTA pre-filled text must match approved inquiry message',
      );
      assert.ok(
        href.includes(expectedEncoded) || href.includes('Hola%20Azu'),
        'URL must contain correctly percent-encoded query parameter',
      );
      assert.match(
        ctaMatch[0],
        /target="_blank"/i,
        'Hero CTA must open in a new tab (target="_blank")',
      );
      assert.match(
        ctaMatch[0],
        /rel="noopener noreferrer"/i,
        'Hero CTA must include rel="noopener noreferrer"',
      );
    },
  );

  await t.test(
    'Criterion 3: Persistent floating WhatsApp button with >= 48px touch target, SVG icon and aria-label',
    () => {
      // Find floating WhatsApp button
      const floatingBtnMatch = indexHtml.match(
        /<a[^>]*class="[^"]*fixed[^"]*bottom-[^"]*right-[^"]*z-50[^"]*"[^>]*>[\s\S]*?<\/a>/i,
      );
      assert.ok(
        floatingBtnMatch,
        'Floating WhatsApp button must exist with fixed positioning (fixed, bottom-*, right-*, z-50)',
      );

      const buttonMarkup = floatingBtnMatch[0];

      // Touch target >= 48px
      assert.match(buttonMarkup, /min-h-\[48px\]/, 'Touch target must specify min-h-[48px]');
      assert.match(buttonMarkup, /min-w-\[48px\]/, 'Touch target must specify min-w-[48px]');

      // Accessible aria-label
      assert.match(
        buttonMarkup,
        /aria-label="[^"]*WhatsApp[^"]*"/i,
        'Button must have an accessible aria-label mentioning WhatsApp',
      );

      // Crisp SVG WhatsApp icon (no emoji placeholder)
      assert.ok(buttonMarkup.includes('<svg'), 'Floating button must contain an inline SVG icon');
      assert.ok(!buttonMarkup.includes('💬'), 'Floating button must not use emoji 💬');

      // New tab target
      assert.match(
        buttonMarkup,
        /target="_blank"/i,
        'Floating WhatsApp button must open in a new tab (target="_blank")',
      );
      assert.match(
        buttonMarkup,
        /rel="noopener noreferrer"/i,
        'Floating WhatsApp button must include rel="noopener noreferrer"',
      );
    },
  );

  await t.test(
    'Criterion 4: Natural lifestyle portrait photo used in Hero with descriptive alt text',
    () => {
      const heroSection = indexHtml.match(/<section id="hero"[\s\S]*?<\/section>/)?.[0];
      assert.ok(heroSection, 'Hero section must exist');

      const imgMatch = heroSection.match(/<img[^>]+src="([^"]+)"[^>]*>/i);
      assert.ok(imgMatch, 'Hero must contain an image tag');

      const src = imgMatch[1];
      assert.equal(
        src,
        '/img/azu-hero.jpg',
        'Hero must use natural lifestyle photo /img/azu-hero.jpg',
      );
      assert.ok(
        !heroSection.includes('turban') && !heroSection.includes('turbante'),
        'Turban photo must not be used or referenced in Hero',
      );

      // Descriptive alt text
      const altMatch = imgMatch[0].match(/alt="([^"]*)"/i);
      assert.ok(altMatch, 'Hero image must have alt attribute');
      assert.ok(
        altMatch[1].length >= 15 && altMatch[1].toLowerCase().includes('azucena'),
        'Alt text must be descriptive and identify Azucena',
      );
    },
  );

  await t.test(
    'Criterion 5: Zero personal or secondary phone numbers in rendered markup or scripts',
    () => {
      // Find all phone number sequences
      // Colombian mobile phone numbers are 10 digits starting with 3 (e.g. 321 542 8972)
      // or international format +57... / 573215428972
      const phoneMatches = indexHtml.matchAll(/(?:\+?57)?[ -]?(3\d{2}[ -]?\d{3}[ -]?\d{4})/g);
      for (const match of phoneMatches) {
        const rawDigits = match[0].replace(/\D/g, '');
        const normalized = rawDigits.startsWith('57') ? rawDigits : `57${rawDigits}`;
        assert.equal(
          normalized,
          '573215428972',
          `Found unexpected phone number: ${match[0]} (only 573215428972 allowed)`,
        );
      }
    },
  );

  await t.test(
    'Criterion 6: Grounded problem-identification narrative ("Esto es lo que necesito" hook)',
    () => {
      const heroSection = indexHtml.match(/<section id="hero"[\s\S]*?<\/section>/)?.[0];
      assert.ok(heroSection, 'Hero section must exist');

      const lowerHero = heroSection.toLowerCase();

      // Autopilot
      assert.ok(
        lowerHero.includes('automático') || lowerHero.includes('automatico'),
        'Hero must speak directly to chronic autopilot',
      );

      // Mental chatter / overthinking
      assert.ok(
        lowerHero.includes('parloteo mental'),
        'Hero must speak directly to mental chatter ("parloteo mental")',
      );

      // Nervous system fatigue
      assert.ok(
        lowerHero.includes('sistema nervioso'),
        'Hero must speak directly to nervous system fatigue',
      );

      // Opening heart
      assert.ok(
        lowerHero.includes('abre tu corazón') || lowerHero.includes('abrir tu corazón'),
        'Hero must speak to opening the heart',
      );
    },
  );
});
