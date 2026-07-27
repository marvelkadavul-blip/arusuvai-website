import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS, CATEGORIES, getProductsByCategory } from '../../src/data/products.js';
import { generateWhatsAppUrl } from '../../src/utils/whatsapp.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../');

console.log('===========================================================');
console.log('   CHALLENGER 1 — EMPIRICAL ADVERSARIAL TEST HARNESS      ');
console.log('===========================================================');

let passCount = 0;
let failCount = 0;
const testResults = [];

function recordTest(id, category, description, passed, details = '') {
  if (passed) {
    passCount++;
    console.log(`[PASS] [${category}] ${id}: ${description}`);
  } else {
    failCount++;
    console.error(`[FAIL] [${category}] ${id}: ${description} | Reason: ${details}`);
  }
  testResults.push({ id, category, description, passed, details });
}

// ------------------------------------------------------------------
// SECTION 1: WHATSAPP URL ENCODING ACCURACY FOR ALL 17 PRODUCTS
// ------------------------------------------------------------------
console.log('\n--- Testing WhatsApp URL Encoding Accuracy (34 scenarios: 17 Tamil + 17 English) ---');

// Check exact product count
recordTest(
  'WA-01',
  'WhatsApp',
  'Products dataset contains exactly 17 items',
  PRODUCTS.length === 17,
  `Actual length: ${PRODUCTS.length}`
);

PRODUCTS.forEach((product, idx) => {
  const num = (idx + 1).toString().padStart(2, '0');
  
  // English name encoding
  const urlEn = generateWhatsAppUrl(product.nameEn);
  const expectedEnEncoded = encodeURIComponent(product.nameEn);
  const expectedUrlEn = `https://wa.me/919003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20${expectedEnEncoded}.`;
  
  const enPassed = urlEn === expectedUrlEn &&
                   !urlEn.includes(' ') &&
                   urlEn.includes(expectedEnEncoded) &&
                   urlEn.startsWith('https://wa.me/919003104722?text=');
                   
  recordTest(
    `WA-EN-${num}`,
    'WhatsApp',
    `WhatsApp URL encoding for English title "${product.nameEn}"`,
    enPassed,
    `Generated: ${urlEn}`
  );

  // Tamil name encoding
  const urlTa = generateWhatsAppUrl(product.nameTa);
  const expectedTaEncoded = encodeURIComponent(product.nameTa);
  const expectedUrlTa = `https://wa.me/919003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20${expectedTaEncoded}.`;
  
  const taPassed = urlTa === expectedUrlTa &&
                   !urlTa.includes(' ') &&
                   urlTa.includes(expectedTaEncoded) &&
                   urlTa.startsWith('https://wa.me/919003104722?text=');
                   
  recordTest(
    `WA-TA-${num}`,
    'WhatsApp',
    `WhatsApp URL encoding for Tamil title "${product.nameTa}"`,
    taPassed,
    `Generated: ${urlTa}`
  );
});

// Edge case & stress tests for WhatsApp URL generator
const specialCharsTest = generateWhatsAppUrl('Special & Product #1, Test/100%');
recordTest(
  'WA-EDGE-01',
  'WhatsApp',
  'WhatsApp URL handles special characters (&, #, /, %, comma)',
  specialCharsTest.includes('%26') && specialCharsTest.includes('%23') && specialCharsTest.includes('%2F') && specialCharsTest.includes('%25') && specialCharsTest.includes('%2C'),
  `URL: ${specialCharsTest}`
);

const emptyStringUrl = generateWhatsAppUrl('');
recordTest(
  'WA-EDGE-02',
  'WhatsApp',
  'WhatsApp URL handles empty product name without throwing exception',
  emptyStringUrl === 'https://wa.me/919003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20.',
  `URL: ${emptyStringUrl}`
);


// ------------------------------------------------------------------
// SECTION 2: CATEGORY FILTER ISOLATION LOGIC & ARRAY MAPPING
// ------------------------------------------------------------------
console.log('\n--- Testing Category Filter Isolation Logic ---');

recordTest(
  'CAT-01',
  'CategoryFilter',
  'Categories list contains all 5 required chips',
  JSON.stringify(CATEGORIES) === JSON.stringify(['All', 'Pickles', 'Thokku', 'Kulambu', 'Podi']),
  `Categories: ${JSON.stringify(CATEGORIES)}`
);

// All Category
const allProducts = getProductsByCategory('All');
recordTest(
  'CAT-02',
  'CategoryFilter',
  'Filter "All" returns 17 products',
  allProducts.length === 17,
  `Count: ${allProducts.length}`
);

// Pickles Category
const pickles = getProductsByCategory('Pickles');
const picklesValid = pickles.length === 9 && pickles.every(p => p.category === 'Pickles');
recordTest(
  'CAT-03',
  'CategoryFilter',
  'Filter "Pickles" isolates exactly 9 items without leakage of non-pickle products',
  picklesValid,
  `Count: ${pickles.length}, Items: ${pickles.map(p => p.nameEn).join(', ')}`
);

// Thokku Category
const thokku = getProductsByCategory('Thokku');
const thokkuExpected = ['Tomato Thokku', 'Chinna Vengaya Thokku', 'Karuvadu Thokku Pickle'];
const thokkuNames = thokku.map(p => p.nameEn);
const thokkuValid = thokku.length === 3 && thokkuExpected.every(n => thokkuNames.includes(n));
recordTest(
  'CAT-04',
  'CategoryFilter',
  'Filter "Thokku" includes exact 3 products (2 category + 1 altCategory) without leakage',
  thokkuValid,
  `Count: ${thokku.length}, Found: ${thokkuNames.join(', ')}`
);

// Kulambu Category
const kulambu = getProductsByCategory('Kulambu');
const kulambuNames = kulambu.map(p => p.nameEn);
const kulambuValid = kulambu.length === 3 && kulambu.every(p => p.category === 'Kulambu');
recordTest(
  'CAT-05',
  'CategoryFilter',
  'Filter "Kulambu" isolates exactly 3 products without leakage',
  kulambuValid,
  `Count: ${kulambu.length}, Found: ${kulambuNames.join(', ')}`
);

// Podi Category
const podi = getProductsByCategory('Podi');
const podiExpected = ['Puliyogarey Paste', 'Garam Masala', 'Manjal Thool'];
const podiNames = podi.map(p => p.nameEn);
const podiValid = podi.length === 3 && podiExpected.every(n => podiNames.includes(n));
recordTest(
  'CAT-06',
  'CategoryFilter',
  'Filter "Podi" includes exact 3 products (2 Podi + 1 Pastes altCategory) without leakage',
  podiValid,
  `Count: ${podi.length}, Found: ${podiNames.join(', ')}`
);

// Category Edge Cases
const nullCategory = getProductsByCategory(null);
recordTest(
  'CAT-EDGE-01',
  'CategoryFilter',
  'Filter null/undefined safely defaults to All (17 products)',
  nullCategory.length === 17,
  `Count: ${nullCategory.length}`
);

const emptyCategory = getProductsByCategory('');
recordTest(
  'CAT-EDGE-02',
  'CategoryFilter',
  'Filter empty string safely defaults to All (17 products)',
  emptyCategory.length === 17,
  `Count: ${emptyCategory.length}`
);

const unknownCategory = getProductsByCategory('NonExistentCategory');
recordTest(
  'CAT-EDGE-03',
  'CategoryFilter',
  'Filter unknown category returns empty array [] without throwing DOM exception',
  Array.isArray(unknownCategory) && unknownCategory.length === 0,
  `Result: ${JSON.stringify(unknownCategory)}`
);

// Immutability Check: verify getProductsByCategory does NOT mutate PRODUCTS array
const copyProductsBefore = JSON.stringify(PRODUCTS);
getProductsByCategory('Pickles');
getProductsByCategory('Thokku');
getProductsByCategory('Kulambu');
getProductsByCategory('Podi');
const copyProductsAfter = JSON.stringify(PRODUCTS);
recordTest(
  'CAT-EDGE-04',
  'CategoryFilter',
  'Category filter execution maintains PRODUCTS array immutability',
  copyProductsBefore === copyProductsAfter,
  'PRODUCTS mutated during filter execution!'
);


// ------------------------------------------------------------------
// SECTION 3: IMAGE FILENAME RESOLUTION AGAINST R1 & FILE SYSTEM
// ------------------------------------------------------------------
console.log('\n--- Testing Image Filename Resolution Against R1 Specs & File System ---');

PRODUCTS.forEach((product, idx) => {
  const num = (idx + 1).toString().padStart(2, '0');
  
  // Extract clean filename from path e.g. "/images/Chicken Pickle.jpg" -> "Chicken Pickle.jpg"
  const jpgRelPath = product.image.replace(/^\//, '');
  const jpegRelPath = product.discImage.replace(/^\//, '');

  const jpgAbsPath = path.join(projectRoot, 'public', jpgRelPath);
  const jpegAbsPath = path.join(projectRoot, 'public', jpegRelPath);

  const jpgExists = fs.existsSync(jpgAbsPath);
  const jpegExists = fs.existsSync(jpegAbsPath);

  recordTest(
    `IMG-JPG-${num}`,
    'ImageResolution',
    `Image path "${product.image}" exists in public directory`,
    jpgExists,
    `Checked file: ${jpgAbsPath}`
  );

  recordTest(
    `IMG-JPEG-${num}`,
    'ImageResolution',
    `Fallback discImage path "${product.discImage}" exists in public directory`,
    jpegExists,
    `Checked file: ${jpegAbsPath}`
  );

  // Check exact casing on disk matches product.js declaration (case-sensitive check)
  if (jpgExists) {
    const dir = path.dirname(jpgAbsPath);
    const fileNameOnDisk = fs.readdirSync(dir).find(f => f.toLowerCase() === path.basename(jpgAbsPath).toLowerCase());
    const exactCaseMatch = fileNameOnDisk === path.basename(jpgAbsPath);
    recordTest(
      `IMG-CASE-${num}`,
      'ImageResolution',
      `Exact case match on disk for "${path.basename(jpgAbsPath)}"`,
      exactCaseMatch,
      `Disk: "${fileNameOnDisk}", Expected: "${path.basename(jpgAbsPath)}"`
    );
  }
});


// ------------------------------------------------------------------
// SUMMARY REPORT
// ------------------------------------------------------------------
console.log('\n===========================================================');
console.log(`   CHALLENGER 1 RESULTS: ${passCount} PASSED | ${failCount} FAILED / ${testResults.length} TOTAL`);
console.log('===========================================================');

fs.writeFileSync(
  path.join(__dirname, 'test-results.json'),
  JSON.stringify({ passCount, failCount, total: testResults.length, testResults }, null, 2)
);
