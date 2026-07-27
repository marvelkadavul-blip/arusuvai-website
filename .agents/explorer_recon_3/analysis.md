# UI/UX & Design Directive Specifications: Arusuvai E-Commerce Platform

## 1. Executive Summary & Brand Vibe
The Arusuvai e-commerce platform is designed as a modern Indian heritage homemade food catalog. The core UI/UX goal is to evoke authentic homemade quality ("வீட்டு சுவை... நாட்டு மணம்...") while maintaining a high-performance, mobile-first single-page application experience. 90%+ of users visit via mobile devices; thus, touch accessibility, energetic micro-interactions, fast loading, and effortless ordering via WhatsApp are the primary design drivers.

---

## 2. Color Palette System & Design Tokens

### Core Brand Tokens
| Token Name | Hex Code | Purpose / Usage | Tailwind Implementation Class |
|------------|----------|-----------------|--------------------------------|
| **Background Base** | `#FAF7F2` | Page background, warm off-white / cream tone | `bg-[#FAF7F2]` |
| **Primary Spice Red** | `#8B0000` | Primary brand color, headers, key text, primary accents | `text-[#8B0000]`, `bg-[#8B0000]` |
| **Heritage Gold Accent**| `#D4AF37` | Secondary accents, badges, highlights, borders | `text-[#D4AF37]`, `bg-[#D4AF37]`, `border-[#D4AF37]` |
| **WhatsApp Emerald** | `#25D366` | Order action buttons, floating WhatsApp FAB | `bg-[#25D366]`, `hover:bg-[#20bd5a]`, `active:bg-[#1da850]` |
| **Surface White Translucent** | `rgba(255, 255, 255, 0.7)` | Glassmorphism surfaces for header and card detail overlays | `bg-white/70 backdrop-blur-md` |
| **Dark Neutral Text** | `#1C1917` (Stone-900) | Primary body copy | `text-stone-900` |
| **Muted Neutral Text** | `#78716C` (Stone-500) | Subtitles, category counts, metadata | `text-stone-500` |

### Tailwind Color Extension Blueprint (`tailwind.config.js`)
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        arusuvai: {
          bg: '#FAF7F2',
          red: '#8B0000',
          gold: '#D4AF37',
          whatsapp: '#25D366',
          'whatsapp-hover': '#20bd5a',
          'whatsapp-active': '#1da850',
        }
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(139, 0, 0, 0.08), 0 8px 10px -6px rgba(139, 0, 0, 0.04)',
        'fab': '0 8px 20px rgba(37, 211, 102, 0.4)',
      }
    }
  }
}
```

---

## 3. Glassmorphism Surface & Elevation System

### Header Glassmorphism Contract
- **Classes:** `bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-[#8B0000]/10`
- **Effect:** Translucent header floating over scrolling product content with 12px blur (`backdrop-blur-md`), preserving visibility of underlying scroll while maintaining 100% legibility of logo and cart/nav elements.

### Product Card Elevation & Glass Overlays
- **Container Shadow:** Soft modern shadow with subtle warm red tint `shadow-lg shadow-red-900/5`
- **Corner Radius:** Generously rounded `rounded-2xl`
- **Product Card Overlay:** Frosted translucent badge overlay on product images for category tags: `bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#8B0000]`.

---

## 4. Mobile-First Layout Rules & Responsive Grid

### Touch Target Standard
- **Minimum Target Size:** All interactive controls (buttons, category chips, navigation toggles, FAB) must have a minimum physical touch target of **48px x 48px** (`min-h-[48px]`, `min-w-[48px]`, `py-3 px-4`).

### Horizontal Category Filter Bar
- **Container Styling:** `flex gap-2 overflow-x-auto py-3 px-4 scrollbar-none`
- **Overflow Protection:** Zero horizontal body overflow (`overflow-x-hidden` on `body` / `main`). The filter bar scrolls smoothly inside its container without showing scrollbars.
- **Scrollbar Suppression CSS:**
  ```css
  .scrollbar-none {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-none::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  ```

### Responsive Grid Blueprint
- **Mobile (< 640px):** 1 or 2 columns (`grid grid-cols-1 sm:grid-cols-2 gap-4 px-4`)
- **Tablet (640px - 1024px):** 2 or 3 columns (`md:grid-cols-3 gap-6 px-6`)
- **Desktop (>= 1024px):** 4 columns (`lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-8`)

### Floating Action Button (FAB) Positioning
- **Position:** `fixed bottom-6 right-6 z-50`
- **Size:** `w-14 h-14` (56px x 56px), fully exceeding 48px requirement.
- **Styling:** `bg-[#25D366] text-white rounded-full shadow-fab flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200`
- **Safety Margin:** Bottom padding on body/main (`pb-24`) to ensure FAB never obscures the lowermost product details or footers on 320px viewports.

---

## 5. Typography System & Dual Language Support

### Font Stack Specification
- **Primary English Font:** Clean modern sans-serif stack (`Inter`, `Poppins`, `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `sans-serif`).
- **Primary Tamil Font:** UTF-8 encoded Tamil typography (`'Noto Sans Tamil'`, `'Mukta Malar'`, `sans-serif`).
- **HTML Meta & Head Import:**
  ```html
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap" rel="stylesheet">
  ```

### Dual-Language Pairing Rule
Every product title and key heading features paired English and Tamil strings:
- **Product Title:** Primary English line (`font-bold text-stone-900 text-lg`) paired with secondary Tamil subtitle (`text-xs font-semibold text-[#8B0000]`).
- **Tagline:** Dual brand tagline ("Homemade Masala & Pickles" / "வீட்டு சுவை... நாட்டு மணம்...").

---

## 6. Motion Dynamics & Micro-Interactions

### Hero Section Entrance Animation
- **Trigger:** On initial mount / load.
- **State Transition:** `opacity-0 translate-y-4` -> `opacity-100 translate-y-0`
- **Timing & Easing:** `transition-all duration-500 ease-out`
- **Implementation:** React state toggle or Tailwind animate-fade-in keyframes.

### Product Card Scroll Reveal (Intersection Observer)
- **Mechanism:** Custom React hook (`useIntersectionObserver`) attached to product cards.
- **Initial State:** `opacity-0 scale-95 translate-y-4`
- **Visible State:** `opacity-100 scale-100 translate-y-0`
- **Transition Style:** `transition-all duration-500 ease-out`

### Tactile Micro-Interactions
1. **Product Image Hover/Tap:**
   - Image wrapper: `overflow-hidden rounded-t-2xl aspect-square`
   - Image element: `object-cover w-full h-full transform hover:scale-105 transition-transform duration-500 ease-in-out`
2. **CTA Button Active Scale:**
   - WhatsApp Order Button: `active:scale-95 hover:shadow-md transition-transform duration-150 ease-in-out`
3. **Category Chips:**
   - Inactive: `bg-white/80 text-stone-700 border border-stone-200 hover:border-[#8B0000]/30`
   - Active: `bg-[#8B0000] text-white shadow-sm border border-[#8B0000]`
   - Transition: `transition-all duration-200 ease-in-out`

---

## 7. Dynamic WhatsApp URL Encoding Contract

### URL Contract Specification
- **Base Phone Number:** `9003104722`
- **Base Domain:** `https://wa.me/9003104722`
- **Message Contract Pattern:** `?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20[URL_ENCODED_PRODUCT_NAME].`

### JavaScript Utility Code Standard
```javascript
/**
 * Generates an exact URL-encoded WhatsApp ordering link for a given product name.
 * @param {string} productName - Exact product title (e.g. "Chicken Pickle")
 * @returns {string} Fully encoded WhatsApp URL string
 */
export function generateWhatsAppUrl(productName) {
  const encodedName = encodeURIComponent(productName);
  return `https://wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20${encodedName}.`;
}
```

### Reference Encoding Examples
| Product Name Input | Encoded Query Output | Complete URL |
|--------------------|----------------------|--------------|
| `Chicken Pickle` | `Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20Chicken%20Pickle.` | `https://wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20Chicken%20Pickle.` |
| `Sunda Vatha Kulambu` | `Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20Sunda%20Vatha%20Kulambu.` | `https://wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20Sunda%20Vatha%20Kulambu.` |
| `Chinna Vengaya Thokku` | `Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20Chinna%20Vengaya%20Thokku.` | `https://wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20Chinna%20Vengaya%20Thokku.` |

---

## 8. Detailed UI Component Directives

### 8.1 Header Component (`Header.jsx`)
- Sticky glassmorphic navbar (`bg-white/70 backdrop-blur-md sticky top-0 z-50`).
- Contains Arusuvai brand logo/title in `#8B0000`, Tamil tagline snippet ("அறுசுவை"), and phone contact badge.
- Minimum 48px height, flex container with equalized padding (`px-4 py-3`).

### 8.2 Hero Section (`Hero.jsx`)
- Warm background gradient / card overlay using `#FAF7F2` with subtle red/gold decorative accents.
- Slide-up entrance animation (`opacity-0 translate-y-4` -> `opacity-100 translate-y-0`).
- Trust badges pill container:
  - 🏡 100% Homemade
  - 🌿 100% Natural & Preservative-Free
  - 📦 Pan-India Parcel Service

### 8.3 Category Filter Bar (`CategoryFilter.jsx`)
- Category values: `All`, `Pickles`, `Thokku`, `Kulambu`, `Podi`.
- Rendered as interactive chip buttons with `min-h-[48px]`, `px-5`, `py-2.5`, `rounded-full`.
- Horizontal scrollable container with hidden scrollbar (`scrollbar-none`).

### 8.4 Product Card Component (`ProductCard.jsx`)
- Card outer container: `bg-white rounded-2xl shadow-lg shadow-red-900/5 border border-stone-100 flex flex-col justify-between overflow-hidden`.
- Image aspect ratio: `aspect-square w-full object-cover`.
- Content area: Dual-language title, weight/tag badge, price placeholder if applicable.
- Order CTA Button:
  - Class: `w-full min-h-[48px] bg-[#25D366] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#20bd5a] active:scale-95 transition-all duration-150`
  - WhatsApp icon included next to label "Order on WhatsApp".

### 8.5 Floating Action Button (`FAB.jsx`)
- Position: `fixed bottom-6 right-6 z-50`.
- Size: `w-14 h-14 min-h-[48px] min-w-[48px]`.
- Pulsing notification halo effect (`absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping`).

---

## 9. Verification & Compliance Matrix

| Requirement ID | Design Directive | Target Criteria | Validation Method |
|----------------|------------------|-----------------|-------------------|
| **R1.1** | Color Palette | #FAF7F2, #8B0000, #D4AF37, #25D366 | CSS/Tailwind Config inspection |
| **R1.2** | Glassmorphism Header | `bg-white/70 backdrop-blur-md sticky top-0 z-50` | DOM computed style & scroll check |
| **R1.3** | Touch Targets | >= 48px height/width on all CTA buttons & chips | Element size assertion (`getBoundingClientRect`) |
| **R1.4** | Category Filter Scroll | Horizontal scrollable row, zero body scrollbar | Visual & DOM overflow assertion |
| **R1.5** | Typography | English sans-serif + UTF-8 Tamil font | Font load network & rendered text inspect |
| **R1.6** | Dynamic WhatsApp Link | `https://wa.me/9003104722?text=Hello%20Arusuvai%2C...` | URL regex & `encodeURIComponent` verification |
| **R1.7** | Motion Dynamics | Hero slide-up fade, scroll reveal scale, active button scale | CSS class transition & Intersection Observer check |
