# Asset and Image Mapping Analysis Report — Arusuvai E-Commerce Catalog

**Date:** 2026-07-27
**Author:** Explorer 1 (Asset & Image Mapping Specialist)
**Target Project:** Arusuvai Homemade Masala & Pickles Catalog (`e:\Food Website`)

---

## Executive Summary

1. **Product Image Inventory:** Exactly **17 product images** exist in the root directory (`e:\Food Website`). All 17 image files physically end with the `.jpeg` extension on disk (e.g., `Chicken Pickle.jpeg`).
2. **Catalog Coverage:** **100% complete**. All 17 products specified across all 4 product categories (Non-Veg Pickles, Veg Pickles & Thokku, Pastes & Masala Podi, Kulambu) have matching physical image files on disk.
3. **Brand Assets Inspection:**
   - `Arusuvai_Visiting card.jpeg`: **MISSING** from disk.
   - `image_dcb239.png`: **MISSING** from disk.
   - Design and branding elements must rely on text/SVG assets, CSS tokens (`#FAF7F2`, `#8B0000`, `#D4AF37`, `#25D366`), and Tamil typography (`அறுசுவையும் அம்மாவின் கைப்பக்குவத்தில்`, `வீட்டு சுவை... நாட்டு மணம்...`).
4. **Extension & Filename Mismatch:**
   - `ORIGINAL_REQUEST.md` and `PROJECT.md` reference filenames ending in `.jpg` (e.g., `Chicken Pickle.jpg`), whereas actual disk files end in `.jpeg` (e.g., `Chicken Pickle.jpeg`).
   - Minor casing differences exist on disk (e.g., `Lemon pickle.jpeg`, `Tomato pickle.jpeg`, `Puliyogarey paste.jpeg`, `Karuvadu thokku pickle.jpeg`, `Manjal thul.jpeg`).
5. **Recommendation:**
   - Place images in `public/images/` and create dual file copies or aliases (`.jpg` and `.jpeg`) to guarantee 100% link resolution for both E2E tests expecting `.jpg` and direct file references to `.jpeg`.
   - Implement an image resolver helper and standard `onError` fallback in `ProductCard.jsx`.

---

## 1. Physical Image Inventory (Disk Inspection)

All image files are located at `e:\Food Website\`:

| # | Filename on Disk | File Size (Bytes) | Exact Relative Path |
|---|------------------|-------------------|---------------------|
| 1 | `Chicken Pickle.jpeg` | 374,967 | `./Chicken Pickle.jpeg` |
| 2 | `Chinna vengaya thokku.jpeg` | 370,828 | `./Chinna vengaya thokku.jpeg` |
| 3 | `Fish Pickle.jpeg` | 345,671 | `./Fish Pickle.jpeg` |
| 4 | `Garam Masala.jpeg` | 349,258 | `./Garam Masala.jpeg` |
| 5 | `Garlic Pickle.jpeg` | 328,300 | `./Garlic Pickle.jpeg` |
| 6 | `Karuvadu thokku pickle.jpeg` | 351,240 | `./Karuvadu thokku pickle.jpeg` |
| 7 | `Lemon pickle.jpeg` | 328,211 | `./Lemon pickle.jpeg` |
| 8 | `Manathakalli vatha kuzhambu.jpeg` | 362,557 | `./Manathakalli vatha kuzhambu.jpeg` |
| 9 | `Mango Pickle.jpeg` | 341,319 | `./Mango Pickle.jpeg` |
| 10 | `Manjal thul.jpeg` | 307,230 | `./Manjal thul.jpeg` |
| 11 | `Mutton Pickle.jpeg` | 295,335 | `./Mutton Pickle.jpeg` |
| 12 | `Poondu milagu kulambu.jpeg` | 280,727 | `./Poondu milagu kulambu.jpeg` |
| 13 | `Prawn Pickle.jpeg` | 363,137 | `./Prawn Pickle.jpeg` |
| 14 | `Puliyogarey paste.jpeg` | 330,893 | `./Puliyogarey paste.jpeg` |
| 15 | `Sunda Vatha kulambu.jpeg` | 330,209 | `./Sunda Vatha kulambu.jpeg` |
| 16 | `Tomato pickle.jpeg` | 324,326 | `./Tomato pickle.jpeg` |
| 17 | `Tomato thokku.jpeg` | 305,080 | `./Tomato thokku.jpeg` |

**Total Image Storage:** 5,609,948 bytes (~5.35 MB across 17 files).

---

## 2. Product Category Mapping & Spec Cross-Reference

Cross-referencing disk files against `PROJECT.md`, `ORIGINAL_REQUEST.md`, and `skills.md.txt`:

### Category Breakdown

#### Category 1: Non-Veg Pickles (5 Products)
- **Chicken Pickle**
  - Disk: `Chicken Pickle.jpeg`
  - Spec: `Chicken Pickle.jpg`
  - Tamil Name: `சிக்கன் ஊறுகாய்`
  - Status: Present (`.jpeg` extension on disk)
- **Mutton Pickle**
  - Disk: `Mutton Pickle.jpeg`
  - Spec: `Mutton Pickle.jpg`
  - Tamil Name: `ஆட்டுக்கறி ஊறுகாய்`
  - Status: Present (`.jpeg` extension on disk)
- **Fish Pickle**
  - Disk: `Fish Pickle.jpeg`
  - Spec: `Fish Pickle.jpg`
  - Tamil Name: `மீன் ஊறுகாய்`
  - Status: Present (`.jpeg` extension on disk)
- **Prawn Pickle**
  - Disk: `Prawn Pickle.jpeg`
  - Spec: `Prawn Pickle.jpg`
  - Tamil Name: `இறால் ஊறுகாய்`
  - Status: Present (`.jpeg` extension on disk)
- **Karuvadu Thokku Pickle**
  - Disk: `Karuvadu thokku pickle.jpeg`
  - Spec: `Karuvadu thokku pickle.jpg`
  - Tamil Name: `கருவாட்டு தொக்கு ஊறுகாய்`
  - Status: Present (Lower-case "thokku pickle" on disk, `.jpeg` extension)

#### Category 2: Veg Pickles & Thokku (6 Products)
- **Mango Pickle**
  - Disk: `Mango Pickle.jpeg`
  - Spec: `Mango Pickle.jpg`
  - Tamil Name: `மாங்காய் ஊறுகாய்`
  - Status: Present (`.jpeg` extension on disk)
- **Lemon Pickle**
  - Disk: `Lemon pickle.jpeg`
  - Spec: `Lemon pickle.jpg`
  - Tamil Name: `எலுமிச்சை ஊறுகாய்`
  - Status: Present (Lower-case "pickle" on disk, `.jpeg` extension)
- **Garlic Pickle**
  - Disk: `Garlic Pickle.jpeg`
  - Spec: `Garlic Pickle.jpg`
  - Tamil Name: `பூண்டு ஊறுகாய்`
  - Status: Present (`.jpeg` extension on disk)
- **Tomato Pickle**
  - Disk: `Tomato pickle.jpeg`
  - Spec: `Tomato pickle.jpg`
  - Tamil Name: `தக்காளி ஊறுகாய்`
  - Status: Present (Lower-case "pickle" on disk, `.jpeg` extension)
- **Tomato Thokku**
  - Disk: `Tomato thokku.jpeg`
  - Spec: `Tomato thokku.jpg`
  - Tamil Name: `தக்காளி தொக்கு`
  - Status: Present (Lower-case "thokku" on disk, `.jpeg` extension)
- **Chinna Vengaya Thokku**
  - Disk: `Chinna vengaya thokku.jpeg`
  - Spec: `Chinna vengaya thokku.jpg`
  - Tamil Name: `சின்ன வெங்காய தொக்கு`
  - Status: Present (Lower-case "vengaya thokku" on disk, `.jpeg` extension)

#### Category 3: Pastes & Masala Podi (3 Products)
- **Puliyogarey Paste**
  - Disk: `Puliyogarey paste.jpeg`
  - Spec: `Puliyogarey paste.jpg`
  - Tamil Name: `புளியோதரை பேஸ்ட்`
  - Status: Present (Lower-case "paste" on disk, `.jpeg` extension)
- **Garam Masala**
  - Disk: `Garam Masala.jpeg`
  - Spec: `Garam Masala.jpg`
  - Tamil Name: `கரம் மசாலா`
  - Status: Present (`.jpeg` extension on disk)
- **Manjal Thool**
  - Disk: `Manjal thul.jpeg`
  - Spec: `Manjal thul.jpg`
  - Tamil Name: `மஞ்சள் தூள்`
  - Status: Present (Disk has "thul" spelling, `.jpeg` extension)

#### Category 4: Kulambu (3 Products)
- **Sunda Vatha Kulambu**
  - Disk: `Sunda Vatha kulambu.jpeg`
  - Spec: `Sunda Vatha kulambu.jpg`
  - Tamil Name: `சுண்ட வத்தல் குழம்பு`
  - Status: Present (Lower-case "kulambu" on disk, `.jpeg` extension)
- **Manathakalli Vatha Kuzhambu**
  - Disk: `Manathakalli vatha kuzhambu.jpeg`
  - Spec: `Manathakalli vatha kuzhambu.jpg`
  - Tamil Name: `மணத்தக்காளி வத்தல் குழம்பு`
  - Status: Present (Lower-case "vatha kuzhambu" on disk, `.jpeg` extension)
- **Poondu Milagu Kulambu**
  - Disk: `Poondu milagu kulambu.jpeg`
  - Spec: `Poondu milagu culambu.jpg` / `Poondu milagu kulambu.jpg`
  - Tamil Name: `பூண்டு மிளகு குழம்பு`
  - Status: Present (Lower-case "milagu kulambu" on disk, `.jpeg` extension)

---

## 3. Brand Assets Status Check

- `Arusuvai_Visiting card.jpeg`: **NOT FOUND on disk.**
- `image_dcb239.png`: **NOT FOUND on disk.**

### Mitigation / Implementation Guidance for UI/UX Team:
1. **Typography & Brand Branding:** Since physical card images are absent, implement brand elements directly in code using SVG icons, clean Tamil/English typography, and styled trust badges in `Hero.jsx` and `Header.jsx`.
2. **Tamil Taglines:**
   - Header Brand Subtitle: `"அறுசுவையும் அம்மாவின் கைப்பக்குவத்தில்"`
   - Hero Tagline: `"வீட்டு சுவை... நாட்டு மணம்..."`
3. **Color Palette:** Strictly adhere to the requested color tokens in `tailwind.config.js`:
   - `#FAF7F2` (Cream/Off-White Background)
   - `#8B0000` (Deep Spice Red for Accents/Headers)
   - `#D4AF37` (Heritage Gold for Badges/Borders)
   - `#25D366` (Emerald Green for WhatsApp CTAs & FAB)

---

## 4. Serving & Extension Handling Recommendations for React/Vite App

To ensure that both web browsers and E2E tests (which may query either `.jpg` or `.jpeg` extensions) work seamlessly without broken image links (404 errors):

### Strategy 1: Public Directory Placement with Alias Duplication
Place all images inside `public/images/`. During project setup / scaffolding (or via a build script):
- Copy the original files (e.g. `public/images/Chicken Pickle.jpeg`).
- Create duplicate symlinks or hard copies with `.jpg` extensions (e.g. `public/images/Chicken Pickle.jpg`).
- Result: Navigating to `/images/Chicken Pickle.jpg` or `/images/Chicken Pickle.jpeg` both succeed with HTTP 200 OK.

### Strategy 2: Data Schema Normalization (`src/data/products.js`)
Define product records with exact disk filename references while storing an explicit fallback or image key:

```javascript
export const products = [
  {
    id: 'chicken-pickle',
    nameEn: 'Chicken Pickle',
    nameTa: 'சிக்கன் ஊறுகாய்',
    category: 'Pickles',
    image: '/images/Chicken Pickle.jpeg',
    imageJpg: '/images/Chicken Pickle.jpg',
    description: 'Traditional homemade chicken pickle prepared with authentic spices.'
  },
  // ...
];
```

### Strategy 3: React Image Component Fallback (`ProductCard.jsx`)
In `ProductCard.jsx`, provide an `onError` handler on `<img />` so that if an image path fails to load (e.g. if `.jpg` is requested on a system without `.jpg` aliases), it automatically retries with `.jpeg`:

```jsx
<img
  src={product.image}
  alt={product.nameEn}
  loading="lazy"
  className="w-full aspect-square object-cover rounded-t-2xl hover:scale-105 transition-transform duration-500"
  onError={(e) => {
    if (e.target.src.endsWith('.jpg')) {
      e.target.src = e.target.src.replace(/\.jpg$/, '.jpeg');
    } else if (e.target.src.endsWith('.jpeg')) {
      e.target.src = e.target.src.replace(/\.jpeg$/, '.jpg');
    }
  }}
/>
```

---

## 5. Summary Matrix for Implementers

| Product Key | Disk Filename | Recommended `public/` Path | Category Filter Tag |
|-------------|---------------|---------------------------|---------------------|
| `chicken-pickle` | `Chicken Pickle.jpeg` | `/images/Chicken Pickle.jpeg` | `Pickles` |
| `mutton-pickle` | `Mutton Pickle.jpeg` | `/images/Mutton Pickle.jpeg` | `Pickles` |
| `fish-pickle` | `Fish Pickle.jpeg` | `/images/Fish Pickle.jpeg` | `Pickles` |
| `prawn-pickle` | `Prawn Pickle.jpeg` | `/images/Prawn Pickle.jpeg` | `Pickles` |
| `karuvadu-thokku-pickle` | `Karuvadu thokku pickle.jpeg` | `/images/Karuvadu thokku pickle.jpeg` | `Pickles` / `Thokku` |
| `mango-pickle` | `Mango Pickle.jpeg` | `/images/Mango Pickle.jpeg` | `Pickles` |
| `lemon-pickle` | `Lemon pickle.jpeg` | `/images/Lemon pickle.jpeg` | `Pickles` |
| `garlic-pickle` | `Garlic Pickle.jpeg` | `/images/Garlic Pickle.jpeg` | `Pickles` |
| `tomato-pickle` | `Tomato pickle.jpeg` | `/images/Tomato pickle.jpeg` | `Pickles` |
| `tomato-thokku` | `Tomato thokku.jpeg` | `/images/Tomato thokku.jpeg` | `Thokku` |
| `chinna-vengaya-thokku` | `Chinna vengaya thokku.jpeg` | `/images/Chinna vengaya thokku.jpeg` | `Thokku` |
| `puliyogarey-paste` | `Puliyogarey paste.jpeg` | `/images/Puliyogarey paste.jpeg` | `Podi` |
| `garam-masala` | `Garam Masala.jpeg` | `/images/Garam Masala.jpeg` | `Podi` |
| `manjal-thool` | `Manjal thul.jpeg` | `/images/Manjal thul.jpeg` | `Podi` |
| `sunda-vatha-kulambu` | `Sunda Vatha kulambu.jpeg` | `/images/Sunda Vatha kulambu.jpeg` | `Kulambu` |
| `manathakalli-vatha-kuzhambu` | `Manathakalli vatha kuzhambu.jpeg` | `/images/Manathakalli vatha kuzhambu.jpeg` | `Kulambu` |
| `poondu-milagu-kulambu` | `Poondu milagu kulambu.jpeg` | `/images/Poondu milagu kulambu.jpeg` | `Kulambu` |

---
