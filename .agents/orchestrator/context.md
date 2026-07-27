# Context & Requirements Index — Arusuvai Web Project

## Key References
- **User Request:** `.agents/orchestrator/ORIGINAL_REQUEST.md`
- **Design Guidelines:** `e:\Food Website\skills.md.txt`
- **Project Index:** `.agents/orchestrator/PROJECT.md`

## Summary of Design & Technical Directives
1. **Brand Palette:**
   - Background Base: `#FAF7F2`
   - Primary Red: `#8B0000`
   - Gold Accent: `#D4AF37`
   - WhatsApp Button: `#25D366`
   - Glassmorphism: `bg-white/70 backdrop-blur-md`
2. **Typography:**
   - English: Clean modern sans-serif (Inter / Poppins / System sans)
   - Tamil: Full UTF-8 support (e.g., Noto Sans Tamil / system Tamil sans)
3. **Responsive Grid & Micro-interactions:**
   - Mobile: 1-2 columns (`grid-cols-1` or `grid-cols-2`), Desktop: 3-4 columns (`md:grid-cols-3 lg:grid-cols-4`)
   - Touch targets: >= 48px height/width
   - Image aspect ratio: `aspect-square object-cover`
   - Image zoom: `hover:scale-105 transition-transform duration-500`
   - Button tap scale: `active:scale-95 transition-transform duration-150`
   - Hero entrance: `opacity-0 translate-y-4` -> `opacity-100 translate-y-0`
   - Scroll reveal: Intersection Observer scaling `0.95` -> `1`
4. **WhatsApp Link Format:**
   - Base: `https://wa.me/9003104722`
   - Query: `?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20[URL_ENCODED_PRODUCT_NAME].`
