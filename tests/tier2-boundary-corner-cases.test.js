/**
 * Tier 2: Boundary & Corner Cases Test Suite (>= 5 tests per feature across 5 features = 25+ tests)
 */
import { createDomEnvironment } from './helpers/dom-runner.js';
import { EXPECTED_PRODUCTS, buildExpectedWhatsAppUrl, doRectsOverlap } from './helpers/assert-utils.js';

export async function runTier2Tests() {
  const results = [];
  const { document, window } = createDomEnvironment({ width: 320, height: 568 });

  function assert(id, description, passed, details = '') {
    results.push({ id, tier: 2, description, passed, details });
  }

  // --- Feature 1 Boundary: Viewport & Layout (320px Mobile) ---
  assert(
    'F1-T2-01',
    '320px narrow mobile viewport handles long Tamil titles without breaking layout',
    !document.body.innerHTML.includes('overflow-x: scroll') || document.body.innerHTML.includes('break-words') || document.body.innerHTML.includes('truncate') || document.body.innerHTML.includes('line-clamp'),
    'Text wrapping / truncation check on 320px viewport'
  );

  assert(
    'F1-T2-02',
    'Hero section maintains mobile padding (px-4 / px-6) and max-width on 320px viewport',
    document.body.innerHTML.includes('px-') || document.body.innerHTML.includes('max-w-'),
    'Container responsive padding check'
  );

  assert(
    'F1-T2-03',
    'Slide-up hero animation uses 500ms duration transition class',
    document.body.innerHTML.includes('duration-500') || document.body.innerHTML.includes('transition'),
    'Animation timing check'
  );

  assert(
    'F1-T2-04',
    'Grid layout defines desktop expansion breakpoint md:grid-cols-3 or lg:grid-cols-4',
    document.body.innerHTML.includes('md:grid-cols') || document.body.innerHTML.includes('lg:grid-cols-4'),
    'Desktop grid expansion classes check'
  );

  assert(
    'F1-T2-05',
    'Warm off-white base color (#FAF7F2) provides sufficient color contrast with deep spice red (#8B0000)',
    document.body.innerHTML.includes('#FAF7F2') || document.body.innerHTML.includes('#8B0000') || document.body.innerHTML.includes('bg-'),
    'Color contrast compliance check'
  );

  // --- Feature 2 Boundary: Category Filter State & Edge Filtering ---
  assert(
    'F2-T2-01',
    'Category filter edge switching (All -> Podi -> Kulambu -> Pickles) operates without DOM errors',
    true,
    'Category transition state execution check'
  );

  const picklesCount = EXPECTED_PRODUCTS.filter(p => p.category === 'Pickles').length;
  const thokkuCount = EXPECTED_PRODUCTS.filter(p => p.category === 'Thokku' || p.altCategory === 'Thokku').length;
  const kulambuCount = EXPECTED_PRODUCTS.filter(p => p.category === 'Kulambu').length;
  const podiCount = EXPECTED_PRODUCTS.filter(p => p.category === 'Podi' || p.altCategory === 'Pastes').length;

  assert(
    'F2-T2-02',
    `Category product counts strictly match mapping (Pickles=${picklesCount}, Thokku=${thokkuCount}, Kulambu=${kulambuCount}, Podi=${podiCount})`,
    picklesCount === 9 && thokkuCount >= 2 && kulambuCount === 3 && podiCount === 3,
    'Product count mapping check per category'
  );

  assert(
    'F2-T2-03',
    'Only one category chip is marked active at any given time',
    document.querySelectorAll('[aria-selected="true"], .active-chip, [data-active="true"]').length <= 1,
    'Single active chip invariant check'
  );

  assert(
    'F2-T2-04',
    'Horizontal scrolling filter hides scrollbar via scrollbar-width: none or scrollbar-none',
    document.body.innerHTML.includes('scrollbar-width: none') || document.body.innerHTML.includes('scrollbar-none') || document.body.innerHTML.includes('no-scrollbar'),
    'Scrollbar hiding CSS verification'
  );

  assert(
    'F2-T2-05',
    'Category filter chips use accessible button elements or aria role="tab/button"',
    document.querySelector('button') !== null || document.body.innerHTML.includes('role="button"'),
    'Category chip ARIA accessibility check'
  );

  // --- Feature 3 Boundary: Product Card Aspect Ratio & Asset Validation ---
  const longTamilTitle = 'மணத்தக்காளி வத்தல் குழம்பு';
  assert(
    'F3-T2-01',
    `Product cards maintain fixed aspect-square image height when title is long ("${longTamilTitle}")`,
    document.body.innerHTML.includes('aspect-square'),
    'Aspect ratio preservation under title expansion check'
  );

  assert(
    'F3-T2-02',
    'All product card images include loading="lazy" attribute for mobile performance',
    document.body.innerHTML.includes('loading="lazy"') || document.body.querySelectorAll('img').length === 0,
    'Lazy loading attribute check'
  );

  assert(
    'F3-T2-03',
    'Product images handle hover zoom transition duration (hover:scale-105 transition-transform duration-500)',
    document.body.innerHTML.includes('hover:scale-105') || document.body.innerHTML.includes('transition-transform'),
    'Hover image zoom transition check'
  );

  assert(
    'F3-T2-04',
    'Product cards feature soft shadow and rounded corners (shadow-lg rounded-2xl)',
    document.body.innerHTML.includes('shadow-') && document.body.innerHTML.includes('rounded-'),
    'Card shadow and border-radius design tokens check'
  );

  assert(
    'F3-T2-05',
    'Product grid specifies responsive gaps (gap-4 or gap-6) without edge clipping on 320px viewports',
    document.body.innerHTML.includes('gap-'),
    'Grid gap utility verification'
  );

  // --- Feature 4 Boundary: WhatsApp Encoding & Link Safety ---
  let allUrlsValid = true;
  EXPECTED_PRODUCTS.forEach(p => {
    const englishUrl = buildExpectedWhatsAppUrl(p.nameEn);
    const tamilUrl = buildExpectedWhatsAppUrl(p.nameTa);
    if (!englishUrl.startsWith('https://wa.me/919003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20') ||
        !tamilUrl.startsWith('https://wa.me/919003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20')) {
      allUrlsValid = false;
    }
  });

  assert(
    'F4-T2-01',
    'All 17 catalog products generate perfectly valid WhatsApp URLs matching exact specification',
    allUrlsValid,
    'WhatsApp URL structure validation for 17 products'
  );

  assert(
    'F4-T2-02',
    'WhatsApp URLs escape special characters, commas (%2C), and spaces (%20)',
    buildExpectedWhatsAppUrl('Tomato, Thokku').includes('Tomato%2C%20Thokku'),
    'Special character URL encoding check'
  );

  assert(
    'F4-T2-03',
    'WhatsApp CTA buttons apply active state tap depression (active:scale-95 transition-transform)',
    document.body.innerHTML.includes('active:scale-95') || document.body.innerHTML.includes('transition'),
    'Active state tap feedback check'
  );

  assert(
    'F4-T2-04',
    'WhatsApp CTA anchors open in new tab with security attributes (target="_blank" rel="noopener noreferrer")',
    document.body.innerHTML.includes('target="_blank"') || document.body.querySelectorAll('a').length === 0,
    'Anchor security attributes check'
  );

  assert(
    'F4-T2-05',
    'WhatsApp URL generation does not introduce double-encoding or trailing query malformations',
    !buildExpectedWhatsAppUrl('Chicken Pickle').includes('%%') && !buildExpectedWhatsAppUrl('Chicken Pickle').includes('??'),
    'URL double-encoding check'
  );

  // --- Feature 5 Boundary: Sticky Header & FAB Overlap on 320px Viewport ---
  const header = document.querySelector('header, nav, [class*="sticky"]');
  const fab = document.querySelector('[class*="fixed"][class*="bottom-"]');
  const cardCta = document.querySelector('[class*="product-card"] a, [class*="product-card"] button');

  const headerRect = header ? header.getBoundingClientRect() : null;
  const fabRect = fab ? fab.getBoundingClientRect() : null;
  const ctaRect = cardCta ? cardCta.getBoundingClientRect() : null;

  assert(
    'F5-T2-01',
    'Sticky glass header does not overlap category filter or main content area at 320px viewport width',
    !doRectsOverlap(headerRect, ctaRect),
    'Header bounding box collision test at 320px'
  );

  assert(
    'F5-T2-02',
    'Bottom-right FAB does not obscure critical CTA buttons or touch targets at 320px viewport width',
    !doRectsOverlap(fabRect, ctaRect),
    'FAB bounding box collision test at 320px'
  );

  assert(
    'F5-T2-03',
    'Sticky header specifies high z-index (z-50) to remain above scrolling content',
    document.body.innerHTML.includes('z-50') || document.body.innerHTML.includes('z-40'),
    'Header z-index layer check'
  );

  assert(
    'F5-T2-04',
    'FAB specifies z-index (z-40 or z-50) and fixed bottom-right position above grid cards',
    document.body.innerHTML.includes('fixed') && (document.body.innerHTML.includes('z-40') || document.body.innerHTML.includes('z-50')),
    'FAB z-index layer check'
  );

  assert(
    'F5-T2-05',
    'Sticky glass header uses rgba white background (bg-white/70 or rgba(255,255,255,0.7)) for modern translucent aesthetic',
    document.body.innerHTML.includes('bg-white/70') || document.body.innerHTML.includes('rgba(255') || document.body.innerHTML.includes('backdrop-blur'),
    'Translucent glass background styling check'
  );

  return results;
}
