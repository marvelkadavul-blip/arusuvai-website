export const CATEGORIES = ['All', 'Pickles', 'Thokku', 'Kulambu', 'Podi'];

export const PRODUCTS = [
  {
    id: 'chicken-pickle',
    nameEn: 'Chicken Pickle',
    nameTa: 'சிக்கன் ஊறுகாய்',
    category: 'Pickles',
    pricing: [{ size: '200g', price: 299 }, { size: '500g', price: 720 }],
    description: 'Tender chicken pieces infused with authentic Chettinad spices.',
    image: '/images/Chicken Pickle.jpg',
    discImage: '/images/Chicken Pickle.jpeg',
    isNonVeg: true
  },
  {
    id: 'mutton-pickle',
    nameEn: 'Mutton Pickle',
    nameTa: 'ஆட்டுக்கறி ஊறுகாய்',
    category: 'Pickles',
    pricing: [{ size: '200g', price: 499 }, { size: '500g', price: 1220 }],
    description: 'Succulent mutton slow-cooked with heritage aromatic spices.',
    image: '/images/Mutton Pickle.jpg',
    discImage: '/images/Mutton Pickle.jpeg',
    isNonVeg: true
  },
  {
    id: 'fish-pickle',
    nameEn: 'Fish Pickle',
    nameTa: 'மீன் ஊறுகாய்',
    category: 'Pickles',
    pricing: [{ size: '200g', price: 299 }, { size: '500g', price: 720 }],
    description: 'Fresh coastal fish pickled with traditional gingelly oil marinade.',
    image: '/images/Fish Pickle.jpg',
    discImage: '/images/Fish Pickle.jpeg',
    isNonVeg: true
  },
  {
    id: 'prawn-pickle',
    nameEn: 'Prawn Pickle',
    nameTa: 'இறால் ஊறுகாய்',
    category: 'Pickles',
    pricing: [{ size: '200g', price: 499 }, { size: '500g', price: 1220 }],
    description: 'Juicy prawns marinated in spicy homemade masala blend.',
    image: '/images/Prawn Pickle.jpg',
    discImage: '/images/Prawn Pickle.jpeg',
    isNonVeg: true
  },
  {
    id: 'karuvadu-thokku-pickle',
    nameEn: 'Karuvadu Thokku Pickle',
    nameTa: 'கருவாட்டு தொக்கு ஊறுகாய்',
    category: 'Pickles',
    altCategory: 'Thokku',
    pricing: [{ size: '200g', price: 299 }, { size: '500g', price: 720 }],
    description: 'Flavor-packed dried fish thokku prepared with traditional recipe.',
    image: '/images/Karuvadu thokku pickle.jpg',
    discImage: '/images/Karuvadu thokku pickle.jpeg',
    isNonVeg: true
  },
  {
    id: 'mango-pickle',
    nameEn: 'Mango Pickle',
    nameTa: 'மாங்காய் ஊறுகாய்',
    category: 'Pickles',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Classic raw raw mango pieces pickled with red chili & mustard.',
    image: '/images/Mango Pickle.jpg',
    discImage: '/images/Mango Pickle.jpeg',
    isNonVeg: false
  },
  {
    id: 'lemon-pickle',
    nameEn: 'Lemon Pickle',
    nameTa: 'எலுமிச்சை ஊறுகாய்',
    category: 'Pickles',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Zesty sun-cured lemons with rich spice seasoning.',
    image: '/images/Lemon pickle.jpg',
    discImage: '/images/Lemon pickle.jpeg',
    isNonVeg: false
  },
  {
    id: 'garlic-pickle',
    nameEn: 'Garlic Pickle',
    nameTa: 'பூண்டு ஊறுகாய்',
    category: 'Pickles',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Whole garlic cloves cooked in flavorful spicy oil.',
    image: '/images/Garlic Pickle.jpg',
    discImage: '/images/Garlic Pickle.jpeg',
    isNonVeg: false
  },
  {
    id: 'tomato-pickle',
    nameEn: 'Tomato Pickle',
    nameTa: 'தக்காளி ஊறுகாய்',
    category: 'Pickles',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Tangy ripe tomatoes simmered with spices and tamarind.',
    image: '/images/Tomato pickle.jpg',
    discImage: '/images/Tomato pickle.jpeg',
    isNonVeg: false
  },
  {
    id: 'tomato-thokku',
    nameEn: 'Tomato Thokku',
    nameTa: 'தக்காளி தொக்கு',
    category: 'Thokku',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Rich tomato paste thick-cooked with gingelly oil and spices.',
    image: '/images/Tomato thokku.jpg',
    discImage: '/images/Tomato thokku.jpeg',
    isNonVeg: false
  },
  {
    id: 'chinna-vengaya-thokku',
    nameEn: 'Chinna Vengaya Thokku',
    nameTa: 'சின்ன வெங்காய தொக்கு',
    category: 'Thokku',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Caramelized small onions (shallots) thokku with traditional taste.',
    image: '/images/Chinna vengaya thokku.jpg',
    discImage: '/images/Chinna vengaya thokku.jpeg',
    isNonVeg: false
  },
  {
    id: 'puliyogarey-paste',
    nameEn: 'Puliyogarey Paste',
    nameTa: 'புளியோதரை பேஸ்ட்',
    category: 'Podi',
    altCategory: 'Pastes',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Authentic temple-style tamarind rice paste mix.',
    image: '/images/Puliyogarey paste.jpg',
    discImage: '/images/Puliyogarey paste.jpeg',
    isNonVeg: false
  },
  {
    id: 'garam-masala',
    nameEn: 'Garam Masala',
    nameTa: 'கரம் மசாலா',
    category: 'Podi',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Hand-ground aromatic blend of roasted whole spices.',
    image: '/images/Garam Masala.jpg',
    discImage: '/images/Garam Masala.jpeg',
    isNonVeg: false
  },
  {
    id: 'manjal-thool',
    nameEn: 'Manjal Thool',
    nameTa: 'மஞ்சள் தூள்',
    category: 'Podi',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Pure, organic ground turmeric powder with vivid color.',
    image: '/images/Manjal thul.jpg',
    discImage: '/images/Manjal thul.jpeg',
    isNonVeg: false
  },
  {
    id: 'sunda-vatha-kulambu',
    nameEn: 'Sunda Vatha Kulambu',
    nameTa: 'சுண்ட வத்தல் குழம்பு',
    category: 'Kulambu',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Traditional turkey berry tamarind curry paste.',
    image: '/images/Sunda Vatha kulambu.jpg',
    discImage: '/images/Sunda Vatha kulambu.jpeg',
    isNonVeg: false
  },
  {
    id: 'manathakalli-vatha-kuzhambu',
    nameEn: 'Manathakalli Vatha Kuzhambu',
    nameTa: 'மணத்தக்காளி வத்தல் குழம்பு',
    category: 'Kulambu',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Black nightshade berry traditional spicy tangy curry paste.',
    image: '/images/Manathakalli vatha kuzhambu.jpg',
    discImage: '/images/Manathakalli vatha kuzhambu.jpeg',
    isNonVeg: false
  },
  {
    id: 'poondu-milagu-kulambu',
    nameEn: 'Poondu Milagu Kulambu',
    nameTa: 'பூண்டு மிளகு குழம்பு',
    category: 'Kulambu',
    pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],
    description: 'Garlic and black pepper spicy medicinal curry paste.',
    image: '/images/Poondu milagu kulambu.jpg',
    discImage: '/images/Poondu milagu kulambu.jpeg',
    isNonVeg: false
  }
];

export function getProductsByCategory(category) {
  if (!category || category === 'All') {
    return PRODUCTS;
  }
  return PRODUCTS.filter(product => {
    if (product.category === category) return true;
    if (category === 'Thokku' && product.altCategory === 'Thokku') return true;
    if (category === 'Podi' && (product.altCategory === 'Pastes' || product.altCategory === 'Podi')) return true;
    return false;
  });
}
