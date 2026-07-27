const fs = require('fs');
const file = 'e:/Food Website/src/data/products.js';
let content = fs.readFileSync(file, 'utf8');

// Parse the file to find where PRODUCTS is defined and do a smart replace.
// The easiest way is to use regex with a replacer function.
const regex = /id:\s*'([^']+)',\s*nameEn:\s*'[^']+',\s*nameTa:\s*'[^']+',\s*category:\s*'[^']+',(?:\s*altCategory:\s*'[^']+',)?\s*(price:\s*'₹99 \/ 100g',)/g;

content = content.replace(regex, (match, id, p1) => {
  let pricingStr = '';
  if (['chicken-pickle', 'fish-pickle', 'karuvadu-thokku-pickle'].includes(id)) {
    pricingStr = `pricing: [{ size: '200g', price: 299 }, { size: '500g', price: 720 }],`;
  } else if (['mutton-pickle', 'prawn-pickle'].includes(id)) {
    pricingStr = `pricing: [{ size: '200g', price: 499 }, { size: '500g', price: 1220 }],`;
  } else {
    // Veg items
    pricingStr = `pricing: [{ size: '100g', price: 99 }, { size: '200g', price: 189 }, { size: '500g', price: 449 }],`;
  }
  return match.replace(p1, pricingStr);
});

fs.writeFileSync(file, content);
console.log('Done!');
