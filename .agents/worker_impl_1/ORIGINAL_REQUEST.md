## 2026-07-27T03:17:03Z

<USER_REQUEST>
You are the Lead Implementer Worker for the Arusuvai e-commerce catalog website project.

Your Working Directory: e:\Food Website\.agents\worker_impl_1
Project Root: e:\Food Website

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your Task:
Build and verify the complete React + Tailwind CSS mobile-first e-commerce catalog application for "Arusuvai" in `e:\Food Website`.

Detailed Requirements & Blueprint:

1. **Project Scaffolding & Dependencies**:
   - Create `package.json` with React 18, React-DOM, Vite, Tailwind CSS v3, `@vitejs/plugin-react`, `postcss`, `autoprefixer`, `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`, and `vitest`.
   - Create `vite.config.js` configured with React plugin and dev server options (`host: '0.0.0.0'`, `port: 3000`).
   - Create `tailwind.config.js` with custom color palette:
     - `arusuvai-bg`: `#FAF7F2` (Warm Off-White/Cream)
     - `arusuvai-red`: `#8B0000` (Deep Spice Red)
     - `arusuvai-gold`: `#D4AF37` (Heritage Gold)
     - `arusuvai-green`: `#25D366` (WhatsApp Emerald Green)
   - Create `postcss.config.js` with `tailwindcss` and `autoprefixer`.
   - Execute `npm install` in `e:\Food Website` to install node_modules.

2. **Static Image Assets Setup**:
   - Create directory `public/images/`.
   - Copy all 17 `.jpeg` image files from `e:\Food Website\` into `public/images/`.
   - For every `.jpeg` file, create an identical `.jpg` alias copy in `public/images/` (e.g., both `public/images/Chicken Pickle.jpg` and `public/images/Chicken Pickle.jpeg` exist) so that requests for both `.jpg` and `.jpeg` extensions resolve successfully with HTTP 200.

3. **Data Schema & WhatsApp Integration (`src/data/products.js` & `src/utils/whatsapp.js`)**:
   - `src/utils/whatsapp.js`: Implement `generateWhatsAppUrl(productName)` returning:
     `https://wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20[URL_ENCODED_PRODUCT_NAME].` using `encodeURIComponent`.
   - `src/data/products.js`: Define catalog array of all 17 items with dual-language titles (English & Tamil), categories (`Pickles`, `Thokku`, `Kulambu`, `Podi`), prices, and image paths:
     - Non-Veg Pickles: Chicken Pickle, Mutton Pickle, Fish Pickle, Prawn Pickle, Karuvadu Thokku Pickle
     - Veg Pickles & Thokku: Mango Pickle, Lemon Pickle, Garlic Pickle, Tomato Pickle, Tomato Thokku, Chinna Vengaya Thokku
     - Pastes & Podi: Puliyogarey Paste, Garam Masala, Manjal Thool
     - Kulambu: Sunda Vatha Kulambu, Manathakalli Vatha Kuzhambu, Poondu Milagu Kulambu

4. **UI Components & Layout**:
   - `index.html`: Set viewport meta tag, title ("Arusuvai — Homemade Masala & Pickles"), import `Inter` and `Noto Sans Tamil` Google Fonts.
   - `src/index.css`: Tailwind directives + custom scrollbar hiding utility (`.scrollbar-none`).
   - `Header.jsx`: Sticky glassmorphic bar (`bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-red-900/10`), brand logo/title in Tamil & English ("அறுசுவை / Arusuvai"), tagline. Min height 48px touch targets.
   - `CategoryFilter.jsx`: Horizontal scrollable row (`overflow-x-auto scrollbar-none`) with chips (`All`, `Pickles`, `Thokku`, `Kulambu`, `Podi`). Click toggles active category exclusively. Minimum height 48px per touch target. Zero horizontal overflow on `<body>`.
   - `Hero.jsx`: Slide-up fade-in intro (`opacity-0 translate-y-4` -> `opacity-100 translate-y-0`), brand tagline ("அறுசுவையும் அம்மாவின் கைப்பக்குவத்தில்", "வீட்டு சுவை... நாட்டு மணம்..."), trust badges (100% Homemade, Natural Ingredients, Pan-India Parcel Service).
   - `ProductCard.jsx`: Uniform square image aspect ratio (`aspect-square object-cover rounded-2xl`), dual-language title, category badge, and primary CTA button ("Order on WhatsApp" / "வாட்ஸ்அப்பில் ஆர்டர் செய்க") triggering `generateWhatsAppUrl`. `hover:scale-105` image zoom, `active:scale-95` mobile tap depress, min 48px touch target.
   - `ProductGrid.jsx`: Responsive grid (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`). Scroll reveal animations via Intersection Observer or Framer Motion (`scale-95 opacity-0` -> `scale-100 opacity-100`).
   - `FloatingActionButton.jsx`: Sticky bottom-right FAB (`fixed bottom-6 right-6 z-50 min-h-[48px] min-w-[48px] bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform duration-150`).
   - `App.jsx`: Main container integrating Header, Hero, CategoryFilter, ProductGrid, FAB, and Footer.

5. **Verification & Build**:
   - Run `npm run build` (or `npx vite build`) to verify zero compilation or bundler errors.
   - Create unit/component tests for WhatsApp link encoding and category filter state logic in `src/__tests__/whatsapp.test.js` or `tests/unit.test.js` and run them via `npm test` or `npx vitest run`.
   - Document commands executed and build/test results in `e:\Food Website\.agents\worker_impl_1\changes.md` and `e:\Food Website\.agents\worker_impl_1\handoff.md`.
   - Send a completion message to orchestrator with summary and handoff path.
</USER_REQUEST>
