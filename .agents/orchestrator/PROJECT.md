# Project: Arusuvai E-Commerce Catalog Website

## Architecture
- **Framework & Build System:** Vite + React + Tailwind CSS (JavaScript / TypeScript).
- **Styling:** Tailwind CSS with custom colors (`#FAF7F2` background, `#8B0000` deep spice red, `#D4AF37` heritage gold, `#25D366` emerald green), glassmorphism (`backdrop-blur-md bg-white/70`), and responsive grid layouts.
- **State Management:** React useState / useMemo for horizontal category selection (`All`, `Pickles`, `Thokku`, `Kulambu`, `Podi`).
- **Animations:** Tailwind animation classes + Intersection Observer for scroll reveal and scaling micro-interactions.
- **WhatsApp Link Generator:** URL encoding helper constructing `https://wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20[URL_ENCODED_PRODUCT_NAME].`

## Product Data Schema & Asset Mapping
| Product Name (English) | Product Name (Tamil) | Category | Image Filename |
|-----------------------|----------------------|----------|----------------|
| Chicken Pickle | சிக்கன் ஊறுகாய் | Pickles | Chicken Pickle.jpg (or .jpeg on disk) |
| Mutton Pickle | ஆட்டுக்கறி ஊறுகாய் | Pickles | Mutton Pickle.jpg |
| Fish Pickle | மீன் ஊறுகாய் | Pickles | Fish Pickle.jpg |
| Prawn Pickle | இறால் ஊறுகாய் | Pickles | Prawn Pickle.jpg |
| Karuvadu Thokku Pickle | கருவாட்டு தொக்கு ஊறுகாய் | Pickles / Thokku | Karuvadu thokku pickle.jpg |
| Mango Pickle | மாங்காய் ஊறுகாய் | Pickles | Mango Pickle.jpg |
| Lemon Pickle | எலுமிச்சை ஊறுகாய் | Pickles | Lemon pickle.jpg |
| Garlic Pickle | பூண்டு ஊறுகாய் | Pickles | Garlic Pickle.jpg |
| Tomato Pickle | தக்காளி ஊறுகாய் | Pickles | Tomato pickle.jpg |
| Tomato Thokku | தக்காளி தொக்கு | Thokku | Tomato thokku.jpg |
| Chinna Vengaya Thokku | சின்ன வெங்காய தொக்கு | Thokku | Chinna vengaya thokku.jpg |
| Puliyogarey Paste | புளியோதரை பேஸ்ட் | Podi / Pastes | Puliyogarey paste.jpg |
| Garam Masala | கரம் மசாலா | Podi | Garam Masala.jpg |
| Manjal Thool | மஞ்சள் தூள் | Podi | Manjal thul.jpg |
| Sunda Vatha Kulambu | சுண்ட வத்தல் குழம்பு | Kulambu | Sunda Vatha kulambu.jpg |
| Manathakalli Vatha Kuzhambu | மணத்தக்காளி வத்தல் குழம்பு | Kulambu | Manathakalli vatha kuzhambu.jpg |
| Poondu Milagu Kulambu | பூண்டு மிளகு குழம்பு | Kulambu | Poondu milagu kulambu.jpg |

*Note on image files:* Disk files currently end in `.jpeg` (e.g. `Chicken Pickle.jpeg`), but R1 requests matching `.jpg` / exact file existence. Worker must handle asset copying / aliasing or imports cleanly so both `.jpg` and `.jpeg` requests resolve cleanly.

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Exploration & Workspace Recon | Asset inspection, package setup check, requirements validation | None | IN_PROGRESS |
| M2 | E2E Testing Suite Track | Opaque-box test suite creation (Tiers 1-4: layout, filtering, WhatsApp URL, touch targets), publish TEST_READY.md | M1 | PLANNED |
| M3 | Project Scaffolding & Design Tokens | React + Vite + Tailwind setup, brand theme (#FAF7F2, #8B0000, #D4AF37, #25D366), base HTML & viewport tags | M1 | PLANNED |
| M4 | Navigation & Category Filter Component | Header glassmorphism, horizontal scroll category filter bar (All, Pickles, Thokku, Kulambu, Podi), zero horizontal overflow | M3 | PLANNED |
| M5 | Hero Section & Trust Badges | Tamil/English brand branding, tagline ("வீட்டு சுவை... நாட்டு மணம்..."), slide-up fade-in intro, trust badges | M3 | PLANNED |
| M6 | Product Grid & WhatsApp CTA Cards | Responsive grid (1-2 cols mobile, 3-4 desktop), uniform aspect-square object-cover cards, dual language titles, URL-encoded WhatsApp CTA buttons, sticky FAB | M4, M5 | PLANNED |
| M7 | Motion, Micro-interactions & Accessibility | Scroll reveal (Intersection Observer), touch target validation (>= 48px), image zoom hover, button active scale | M6 | PLANNED |
| M8 | E2E Pass, Adversarial Hardening (Tier 5) & Forensic Audit | Pass 100% E2E test suite, Tier 5 white-box coverage hardening, Forensic Auditor integrity verification | M2, M7 | PLANNED |

## Code Layout
```
e:\Food Website\
├── public/              # Image assets (Chicken Pickle.jpg/.jpeg, etc.)
├── src/
│   ├── assets/          # Static assets & brand images
│   ├── components/      # React components (Header, Hero, CategoryFilter, ProductCard, FAB, Footer)
│   ├── data/            # Product catalog definition and image resolution logic
│   ├── utils/           # WhatsApp URL encoder, analytics/motion helpers
│   ├── App.jsx          # Root component
│   ├── index.css        # Tailwind directives, font imports, scrollbar hiding styles
│   └── main.jsx         # Vite entry point
├── tests/               # E2E test suite (Playwright / Vitest / Jest / custom runner)
├── index.html           # Meta viewport, Tamil font loading
├── package.json         # Dependencies & build scripts
├── tailwind.config.js   # Custom theme palette & plugin configuration
└── vite.config.js       # Vite bundler config
```

## Interface Contracts
- **Category Filter API:** `category: 'All' | 'Pickles' | 'Thokku' | 'Kulambu' | 'Podi'`
- **WhatsApp Link Contract:** `generateWhatsAppUrl(productTitle: string) => string`
- **Product Object Contract:** `{ id: string, nameEn: string, nameTa: string, category: Category, image: string, description?: string }`
