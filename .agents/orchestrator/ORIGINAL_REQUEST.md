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
