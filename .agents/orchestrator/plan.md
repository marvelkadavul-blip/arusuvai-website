# Execution Plan — Arusuvai E-Commerce Catalog Website (Follow-Up R1-R4)

## Overview
This master execution plan governs the complete feature enhancement, micro-interactions polish, tunneling setup, and verification gate for the Arusuvai e-commerce catalog application in accordance with R1-R4 follow-up requirements.

## Architecture & Design Directives
- **Color Palette:** Background Warm Cream (`#FAF7F2`), Deep Spice Red (`#8B0000`), Heritage Gold (`#D4AF37`), Emerald Green (`#25D366`).
- **Texture Overlay:** Faint low-opacity (5%) Kolam pattern overlay (`opacity-5`).
- **Header & Category Filter:** Sticky frosted glass header (`sticky top-0 z-50 bg-white/70 backdrop-blur-md`), sticky category filter (`sticky top-[64px] z-40 bg-white/70 backdrop-blur-md snap-x snap-mandatory`), hidden scrollbars (`scrollbar-none`).
- **Hero Section:** Bold `H1` headline "வீட்டு சுவை... நாட்டு மணம்...", English description, compact trust badges (100% Homemade, Natural, Pan-India Parcel Service), slide-up fade-in entrance animation.
- **Product Cards:** Strict R1 filenames (`.jpg`), uniform `aspect-square object-cover`, deep maroon shadow (`shadow-red-900/10`), dark gradient overlay behind price text (`bg-gradient-to-t from-black/80 to-transparent`), bold Red/Green tags (Non-Veg / Veg), URL-encoded WhatsApp order CTA buttons.
- **Motion & Micro-interactions:** Shimmering skeleton loaders, staggered entrance reveals, subtle parallax on scroll, tactile `active:scale-95`, material ripple effect on chips, 3s vertical breathing loop on FAB (`animate-[breath_3s_ease-in-out_infinite]`).
- **Tunnel Script:** `package.json` script using `localtunnel` / `cloudflared` printing public URL.

## Execution Phases

### Phase 1: Context Recovery & Master Plan Update (Completed)
- [x] Inspect `ORIGINAL_REQUEST.md`, `TEST_READY.md`, design guidelines in `skills.md.txt`.
- [x] Verify existing workspace files in `src/`, `public/`, `tests/`.
- [x] Update `plan.md` and `progress.md`.

### Phase 2: Implementation Track (Worker Execution)
- [ ] Dispatch `teamwork_preview_worker` to implement all R1-R4 requirements:
  - Add `tunnel` script in `package.json` with `localtunnel`/`cloudflared`.
  - Add Kolam background texture overlay (5% opacity) and set exact `#FAF7F2` theme base.
  - Refactor Hero section with bold `H1` Tamil headline `வீட்டு சுவை... நாட்டு மணம்...` and compact trust badges.
  - Refactor CategoryFilter with sticky frosted glass (`bg-white/70 backdrop-blur-md sticky z-40`), CSS scroll-snapping (`snap-x snap-mandatory`), and material ripple.
  - Refactor ProductCard with deep maroon shadow (`shadow-red-900/10`), dark gradient overlay behind price, bold Veg/Non-Veg tags, strict `.jpg` image URLs, skeleton image loading, parallax effect.
  - Refactor FAB with 3s vertical breathing animation loop (`animate-[breath_3s_ease-in-out_infinite]`).
  - Run `npm test` and build to verify 100% pass.

### Phase 3: Review & Adversarial Challenge
- [ ] Dispatch 2 `teamwork_preview_reviewer` subagents to independently inspect code quality, responsiveness, touch targets, and visual compliance.
- [ ] Dispatch 2 `teamwork_preview_challenger` subagents to run stress tests, edge case assertions, and verify 0 horizontal scroll overflow on 320px viewport.

### Phase 4: Forensic Integrity Audit Gate
- [ ] Dispatch `teamwork_preview_auditor` (`teamwork_preview_auditor`) to run forensic checks on implementation authenticity. Assert CLEAN verdict.

### Phase 5: Synthesis & Sentinel Notification
- [ ] Verify 100% pass across all 60 E2E test cases and CLEAN audit.
- [ ] Notify Sentinel (parent) so Victory Auditor can be spawned.
