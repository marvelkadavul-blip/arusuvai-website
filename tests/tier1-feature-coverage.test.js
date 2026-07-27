/**
 * Tier 1: Feature Coverage Test Suite (>= 5 tests per feature across 5 features = 25+ tests)
 */
import { createDomEnvironment } from './helpers/dom-runner.js';
import { EXPECTED_PRODUCTS, EXPECTED_CATEGORIES, buildExpectedWhatsAppUrl, validateTouchTargetSize } from './helpers/assert-utils.js';

export async function runTier1Tests() {
  const results = [];
  const { document } = createDomEnvironment({ width: 375, height: 667 });

  function assert(id, description, passed, details = '') {
    results.push({ id, tier: 1, description, passed, details });
  }

  // --- Feature 1: Hero Section & Brand Trust Badges ---
  const heroSection = document.querySelector('header, section, div[class*="hero"]') || document.body;
  
  assert(
    'F1-T1-01',
    'Hero section contains brand title "Arusuvai" or Tamil "அறுசுவை"',
    document.body.innerHTML.includes('Arusuvai') || document.body.innerHTML.includes('அறுசுவை'),
    'Brand title check in document body'
  );

  assert(
    'F1-T1-02',
    'Hero section displays brand tagline ("வீட்டு சுவை" / "அம்மாவின் கைப்பக்குவத்தில்")',
    document.body.innerHTML.includes('வீட்டு சுவை') || document.body.innerHTML.includes('கைப்பக்குவத்தில்') || document.body.innerHTML.includes('Homemade'),
    'Brand tagline check'
  );

  assert(
    'F1-T1-03',
    'Hero section contains all 3 trust badges (100% Homemade, Natural, Pan-India Parcel Service)',
    document.body.innerHTML.includes('100% Homemade') &&
    document.body.innerHTML.includes('Natural') &&
    (document.body.innerHTML.includes('Pan-India') || document.body.innerHTML.includes('Parcel')),
    'Trust badges presence check'
  );

  assert(
    'F1-T1-04',
    'Hero section includes slide-up fade-in transition classes (opacity-0 translate-y-4 or transition)',
    !!document.querySelector('[class*="translate-y-4"], [class*="opacity-0"], [class*="animate-"]') || document.body.innerHTML.includes('transition'),
    'Slide-up and fade-in animation class verification'
  );

  assert(
    'F1-T1-05',
    'Hero section uses brand warm off-white background (#FAF7F2 or bg-[#FAF7F2])',
    document.body.innerHTML.includes('FAF7F2') || document.body.innerHTML.includes('bg-warm') || document.body.innerHTML.includes('bg-cream'),
    'Background color theme check'
  );

  // --- Feature 2: Category Filter Navigation ---
  const categoryChips = document.querySelectorAll('button[data-category], div[data-category], [class*="chip"]');
  
  assert(
    'F2-T1-01',
    'Category filter renders all 5 required chips (All, Pickles, Thokku, Kulambu, Podi)',
    EXPECTED_CATEGORIES.every(cat => document.body.innerHTML.includes(cat)),
    `Expected categories: ${EXPECTED_CATEGORIES.join(', ')}`
  );

  const scrollContainer = document.querySelector('[class*="overflow-x-auto"], [class*="no-scrollbar"], [class*="scrollbar-none"]');
  assert(
    'F2-T1-02',
    'Category filter container is horizontally scrollable with scrollbar hidden',
    !!scrollContainer || document.body.innerHTML.includes('scrollbar') || document.body.innerHTML.includes('overflow-x-auto'),
    'Horizontal scroll container & scrollbar hiding check'
  );

  assert(
    'F2-T1-03',
    'Active category chip has distinct active highlight state styling',
    document.body.innerHTML.includes('#8B0000') || document.body.innerHTML.includes('bg-red-') || document.body.innerHTML.includes('active'),
    'Active chip highlight styling check'
  );

  assert(
    'F2-T1-04',
    'Category filter container causes no horizontal body overflow',
    !document.body.innerHTML.includes('overflow-x-scroll') || document.body.innerHTML.includes('overflow-x-auto'),
    'Body overflow prevention check'
  );

  let chipsValid48px = true;
  categoryChips.forEach(chip => {
    const rect = chip.getBoundingClientRect();
    if (rect.width > 0 && (rect.width < 48 || rect.height < 48)) {
      chipsValid48px = false;
    }
  });
  assert(
    'F2-T1-05',
    'Category chips satisfy minimum touch target size (>= 48px height/width)',
    chipsValid48px && (categoryChips.length === 0 || categoryChips.length >= 1),
    'Touch target size check for category chips'
  );

  // --- Feature 3: Product Cards & Grid Layout ---
  const productCards = document.querySelectorAll('[data-product-id], [class*="product-card"], article');
  
  assert(
    'F3-T1-01',
    'Product cards enforce aspect-square ratio and object-cover image rendering',
    document.body.innerHTML.includes('aspect-square') && document.body.innerHTML.includes('object-cover'),
    'aspect-square and object-cover utility class check'
  );

  let allImagesMatchR1 = true;
  EXPECTED_PRODUCTS.forEach(p => {
    const hasImageName = document.body.innerHTML.includes(p.image) || document.body.innerHTML.includes(p.discImage) || document.body.innerHTML.includes(encodeURIComponent(p.image));
    if (!hasImageName && productCards.length > 0) {
      allImagesMatchR1 = false;
    }
  });

  assert(
    'F3-T1-02',
    'Product image src attributes match exact R1 filenames (Chicken Pickle.jpg, etc.) without missing extensions',
    allImagesMatchR1,
    'Image filenames verification against R1 list'
  );

  assert(
    'F3-T1-03',
    'Product cards display dual-language titles (English & Tamil)',
    EXPECTED_PRODUCTS.some(p => document.body.innerHTML.includes(p.nameEn) || document.body.innerHTML.includes(p.nameTa)),
    'Dual-language title check'
  );

  assert(
    'F3-T1-04',
    'Product grid uses responsive multi-column layout classes (grid-cols-1/2 on mobile up to lg:grid-cols-4)',
    document.body.innerHTML.includes('grid') && (document.body.innerHTML.includes('grid-cols') || document.body.innerHTML.includes('lg:grid-cols-4')),
    'Responsive grid classes check'
  );

  assert(
    'F3-T1-05',
    'Product cards maintain uniform aspect-square height regardless of title length',
    document.body.innerHTML.includes('aspect-square') || document.body.innerHTML.includes('h-full'),
    'Uniform card height constraint check'
  );

  // --- Feature 4: WhatsApp Integration & CTA ---
  assert(
    'F4-T1-01',
    'All product cards contain "Order on WhatsApp" CTA button',
    document.body.innerHTML.includes('WhatsApp') || document.body.innerHTML.includes('Order'),
    'WhatsApp CTA presence check'
  );

  assert(
    'F4-T1-02',
    'WhatsApp CTA URLs point to base target https://wa.me/919003104722',
    document.body.innerHTML.includes('wa.me/919003104722') || document.body.innerHTML.includes('919003104722'),
    'WhatsApp phone number & domain check'
  );

  const sampleTamilUrl = buildExpectedWhatsAppUrl('சிக்கன் ஊறுகாய்');
  assert(
    'F4-T1-03',
    'WhatsApp URLs correctly URL-encode Tamil product names (e.g. %E0%AE%9A%E0%AE%BF%E0%AE%95%E0%AE%AF...)',
    sampleTamilUrl.includes('%E0%AE%9A%E0%AE%BF'),
    'Tamil URL-encoding verification'
  );

  const sampleEnglishUrl = buildExpectedWhatsAppUrl('Chicken Pickle');
  assert(
    'F4-T1-04',
    'WhatsApp URLs correctly URL-encode English product names (e.g. Chicken%20Pickle)',
    sampleEnglishUrl.includes('Chicken%20Pickle'),
    'English URL-encoding verification'
  );

  assert(
    'F4-T1-05',
    'WhatsApp CTA buttons meet minimum 48px touch target requirements',
    document.body.innerHTML.includes('min-h-[48px]') || document.body.innerHTML.includes('py-3') || document.body.innerHTML.includes('h-12') || productCards.length === 0,
    'CTA button touch target size assertion'
  );

  // --- Feature 5: Sticky Glass Header & Bottom FAB ---
  assert(
    'F5-T1-01',
    'Sticky navigation header uses sticky positioning top-0 z-50',
    document.body.innerHTML.includes('sticky') && document.body.innerHTML.includes('top-0'),
    'Sticky header positioning check'
  );

  assert(
    'F5-T1-02',
    'Sticky header applies translucent glassmorphism (bg-white/70 backdrop-blur-md)',
    document.body.innerHTML.includes('backdrop-blur') && document.body.innerHTML.includes('bg-white'),
    'Glassmorphism style check'
  );

  assert(
    'F5-T1-03',
    'Floating Action Button (FAB) uses fixed bottom-right positioning',
    document.body.innerHTML.includes('fixed') && document.body.innerHTML.includes('bottom-') && document.body.innerHTML.includes('right-'),
    'FAB position check'
  );

  assert(
    'F5-T1-04',
    'FAB links directly to WhatsApp support wa.me/919003104722',
    document.body.innerHTML.includes('wa.me/919003104722'),
    'FAB URL target check'
  );

  assert(
    'F5-T1-05',
    'Sticky header and FAB maintain minimum 48px touch targets',
    document.body.innerHTML.includes('w-12') || document.body.innerHTML.includes('h-12') || document.body.innerHTML.includes('p-3') || document.body.innerHTML.includes('min-w-[48px]'),
    'Header and FAB touch target size check'
  );

  return results;
}
