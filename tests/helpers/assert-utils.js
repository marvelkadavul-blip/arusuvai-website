/**
 * Assertion Utilities for Arusuvai E-Commerce E2E Test Suite
 */

// Exact 17 products specified in R1 and PROJECT.md
export const EXPECTED_PRODUCTS = [
  {
    nameEn: 'Chicken Pickle',
    nameTa: 'சிக்கன் ஊறுகாய்',
    category: 'Pickles',
    image: 'Chicken Pickle.jpg',
    discImage: 'Chicken Pickle.jpeg'
  },
  {
    nameEn: 'Mutton Pickle',
    nameTa: 'ஆட்டுக்கறி ஊறுகாய்',
    category: 'Pickles',
    image: 'Mutton Pickle.jpg',
    discImage: 'Mutton Pickle.jpeg'
  },
  {
    nameEn: 'Fish Pickle',
    nameTa: 'மீன் ஊறுகாய்',
    category: 'Pickles',
    image: 'Fish Pickle.jpg',
    discImage: 'Fish Pickle.jpeg'
  },
  {
    nameEn: 'Prawn Pickle',
    nameTa: 'இறால் ஊறுகாய்',
    category: 'Pickles',
    image: 'Prawn Pickle.jpg',
    discImage: 'Prawn Pickle.jpeg'
  },
  {
    nameEn: 'Karuvadu Thokku Pickle',
    nameTa: 'கருவாட்டு தொக்கு ஊறுகாய்',
    category: 'Pickles',
    altCategory: 'Thokku',
    image: 'Karuvadu thokku pickle.jpg',
    discImage: 'Karuvadu thokku pickle.jpeg'
  },
  {
    nameEn: 'Mango Pickle',
    nameTa: 'மாங்காய் ஊறுகாய்',
    category: 'Pickles',
    image: 'Mango Pickle.jpg',
    discImage: 'Mango Pickle.jpeg'
  },
  {
    nameEn: 'Lemon Pickle',
    nameTa: 'எலுமிச்சை ஊறுகாய்',
    category: 'Pickles',
    image: 'Lemon pickle.jpg',
    discImage: 'Lemon pickle.jpeg'
  },
  {
    nameEn: 'Garlic Pickle',
    nameTa: 'பூண்டு ஊறுகாய்',
    category: 'Pickles',
    image: 'Garlic Pickle.jpg',
    discImage: 'Garlic Pickle.jpeg'
  },
  {
    nameEn: 'Tomato Pickle',
    nameTa: 'தக்காளி ஊறுகாய்',
    category: 'Pickles',
    image: 'Tomato pickle.jpg',
    discImage: 'Tomato pickle.jpeg'
  },
  {
    nameEn: 'Tomato Thokku',
    nameTa: 'தக்காளி தொக்கு',
    category: 'Thokku',
    image: 'Tomato thokku.jpg',
    discImage: 'Tomato thokku.jpeg'
  },
  {
    nameEn: 'Chinna Vengaya Thokku',
    nameTa: 'சின்ன வெங்காய தொக்கு',
    category: 'Thokku',
    image: 'Chinna vengaya thokku.jpg',
    discImage: 'Chinna vengaya thokku.jpeg'
  },
  {
    nameEn: 'Puliyogarey Paste',
    nameTa: 'புளியோதரை பேஸ்ட்',
    category: 'Podi',
    altCategory: 'Pastes',
    image: 'Puliyogarey paste.jpg',
    discImage: 'Puliyogarey paste.jpeg'
  },
  {
    nameEn: 'Garam Masala',
    nameTa: 'கரம் மசாலா',
    category: 'Podi',
    image: 'Garam Masala.jpg',
    discImage: 'Garam Masala.jpeg'
  },
  {
    nameEn: 'Manjal Thool',
    nameTa: 'மஞ்சள் தூள்',
    category: 'Podi',
    image: 'Manjal thul.jpg',
    discImage: 'Manjal thul.jpeg'
  },
  {
    nameEn: 'Sunda Vatha Kulambu',
    nameTa: 'சுண்ட வத்தல் குழம்பு',
    category: 'Kulambu',
    image: 'Sunda Vatha kulambu.jpg',
    discImage: 'Sunda Vatha kulambu.jpeg'
  },
  {
    nameEn: 'Manathakalli Vatha Kuzhambu',
    nameTa: 'மணத்தக்காளி வத்தல் குழம்பு',
    category: 'Kulambu',
    image: 'Manathakalli vatha kuzhambu.jpg',
    discImage: 'Manathakalli vatha kuzhambu.jpeg'
  },
  {
    nameEn: 'Poondu Milagu Kulambu',
    nameTa: 'பூண்டு மிளகு குழம்பு',
    category: 'Kulambu',
    image: 'Poondu milagu kulambu.jpg',
    discImage: 'Poondu milagu kulambu.jpeg'
  }
];

export const EXPECTED_CATEGORIES = ['All', 'Pickles', 'Thokku', 'Kulambu', 'Podi'];

/**
 * Validates WhatsApp URL formatting and URL encoding for a given product title
 */
export function buildExpectedWhatsAppUrl(productName) {
  const encodedName = encodeURIComponent(productName);
  return `https://wa.me/919003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20${encodedName}.`;
}

/**
 * Helper to test if two bounding rectangles overlap
 */
export function doRectsOverlap(rectA, rectB) {
  if (!rectA || !rectB) return false;
  return !(
    rectA.right <= rectB.left ||
    rectA.left >= rectB.right ||
    rectA.bottom <= rectB.top ||
    rectA.top >= rectB.bottom
  );
}

/**
 * Checks touch target dimensions (must be >= 48px width and height)
 */
export function validateTouchTargetSize(width, height) {
  return {
    pass: width >= 48 && height >= 48,
    width,
    height
  };
}
