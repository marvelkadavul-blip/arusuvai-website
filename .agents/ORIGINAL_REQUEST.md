# Original User Request

## Initial Request — 2026-07-27T03:14:11Z

# Teamwork Project Prompt — Draft

Build a modern, highly interactive, and mobile-first e-commerce catalog website for "Arusuvai" (Homemade Masala & Pickles) using React + Tailwind CSS (or Next.js). 

Working directory: `e:\Food Website`
Integrity mode: development

## Requirements

### R1. Context & Asset References
- Analyze `Arusuvai_Visiting card.jpeg` for brand typography vibe, traditional aesthetic, and exact Tamil/English naming conventions (e.g., "அறுசுவையும் அம்மாவின் கைப்பக்குவத்தில்", "வீட்டு சுவை... நாட்டு மணம்...").
- Parse `image_dcb239.png` to understand the provided product images.
- Image Mapping: Precisely use the following filenames for the product grid. Do not hallucinate extensions or names:
  - Pickles (Non-Veg): `Chicken Pickle.jpg`, `Mutton Pickle.jpg`, `Fish Pickle.jpg`, `Prawn Pickle.jpg`, `Karuvadu thokku pickle.jpg`
  - Pickles (Veg) & Thokku: `Mango Pickle.jpg`, `Lemon pickle.jpg`, `Garlic Pickle.jpg`, `Tomato pickle.jpg`, `Tomato thokku.jpg`, `Chinna vengaya thokku.jpg`
  - Pastes & Masala Podi: `Puliyogarey paste.jpg`, `Garam Masala.jpg`, `Manjal thul.jpg`
  - Kulambu: `Sunda Vatha kulambu.jpg`, `Manathakalli vatha kuzhambu.jpg`, `Poondu milagu kulambu.jpg`
- **Important**: Read the local file `skills.md.txt` for strict design rules, color palettes, motion dynamics, and architectural guidelines.

### R2. Functional Requirements
- **Framework:** React + Tailwind CSS (or Next.js). Initialize if not present.
- **Hero Section:** Implement a premium intro with the brand name, tagline, and trust badges (100% Homemade, Natural, Pan-India Parcel Service).
- **Navigation:** A horizontal, scrollable category filter (All, Pickles, Thokku, Kulambu, Podi) to instantly filter the product grid.
- **Product Cards:** Display the image, dual-language title, and a primary CTA button ("Order on WhatsApp").
- **WhatsApp Integration:** The CTA must trigger a redirect to `https://wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20[URL_ENCODED_PRODUCT_NAME].`
- **Floating Action Button:** A sticky, bottom-right WhatsApp icon for instant support.

### R3. UI/UX & Motion Directives
- **Mobile-First Validation:** Ensure all touch targets are at least 48px. Use single or dual-column grids on mobile, expanding up to 4 on desktop.
- **Glassmorphism:** Apply `bg-white/70 backdrop-blur-md` to the sticky header.
- **Animations:** 
  - Hero section must slide up and fade in (`opacity-0 translate-y-4` -> `opacity-100 translate-y-0`).
  - Product cards must scale in on scroll using Intersection Observer.
  - Interactive states: `hover:scale-105` for images, and `active:scale-95` for mobile button taps.

## Acceptance Criteria

### Viewport & Layout Assertions (Visual Regression)
- [ ] Horizontal scrolling on the category filter hides the scrollbar and does not cause horizontal overflow on the `<body>`.
- [ ] Sticky header and bottom-right FAB do not overlap critical content or touch targets on a 320px width viewport.
- [ ] Product cards maintain uniform height regardless of title length, and all images use `object-cover aspect-square`.

### Functional State & Link Assertions
- [ ] Parse all generated WhatsApp URLs. Assert that the `text` parameter is correctly URL-encoded.
- [ ] Verify the category state filter logic. Ensure clicking a category exclusively renders the mapped array and hides the rest without DOM errors.
- [ ] Cross-check every `<img>` `src` attribute against the exact filenames provided in R1. No case-sensitivity mismatches or missing `.jpg` extensions.

## Follow-up — 2026-07-27T05:09:04Z

# Teamwork Project Prompt — Draft

Update the Arusuvai e-commerce catalog with high-end micro-interactions, layout improvements, and a local tunneling solution for deployment.

Working directory: e:\Food Website
Integrity mode: development

## Requirements

### R1. Development & Environment Setup
- Configure the project to expose the local development server bypassing `ngrok`. Add a script in `package.json` to use either `localtunnel` or `cloudflared`.
- Print the generated public URL in the console upon compilation.

### R2. Design System & Thematic Assets
- Colors: Cream/Off-white (`#FAF7F2`), Deep Spice Red (`#8B0000`), Heritage Gold (`#D4AF37`), Emerald Green (`#25D366`).
- Background: Apply a faint, low-opacity (5%) traditional Kolam or subtle noise texture over the cream background.
- Ensure strict use of the provided product image filenames (e.g., `Chicken Pickle.jpg`).

### R3. Structural & Layout Improvements
- **Hero Section:** Bold `H1` headline "வீட்டு சுவை... நாட்டு மணம்..." followed by the English description. Reduce vertical padding.
- **Trust Badges:** Compact horizontal scrolling row or a 3-column mini-grid.
- **Navigation:** Sticky category filter (`sticky z-40`) below the main header with a frosted glass effect (`bg-white/70 backdrop-blur-md`).
- **Product Cards:** Deep maroon shadow (`shadow-red-900/10`), dark gradient overlay behind price text, bold Red/Green tags for Non-Veg/Veg, and "Order Now" or "Buy on WhatsApp" button text.

### R4. Motion Dynamics & Micro-Interactions
- Shimmering gray/cream skeleton loaders for images to prevent CLS.
- Staggered entrance animations (fade-in, slide-up) using Intersection Observer.
- Subtle parallax effect on product images (moving slower than scroll).
- CSS scroll-snapping on the horizontal category filter.
- Tactile feedback: `active:scale-95` on buttons/chips, and material-style ripple on category filters.
- Continuous vertical "breathing" animation (3-4px, 3s loop) on the bottom-right WhatsApp FAB.

## Acceptance Criteria

### Verification & Testing
- [ ] Test 1 (Routing): Verify the CTA maps to `https://wa.me/9003104722?text=Hello%20Arusuvai%2C...` with URL-encoded product names.
- [ ] Test 2 (Viewport): Validate the sticky frosted glass header does not obscure top product cards when a category is clicked.
- [ ] Test 3 (Tunneling): Confirm `package.json` script correctly initializes `localtunnel` or `cloudflared` and prints the URL.
- [ ] Test 4 (Performance): Ensure `loading="lazy"` is present on all grid images.
- [ ] Visual: Confirm skeleton loaders, frosted glass sticky header, and red shadow (`shadow-red-900/10`) are present and functional.
