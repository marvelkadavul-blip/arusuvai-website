# Arusuvai E-Commerce Catalog Website — E2E Testing Infrastructure

## 1. Test Architecture & Overview
The test suite for Arusuvai is designed as a **comprehensive, requirement-driven, opaque-box test framework**. It evaluates the Arusuvai e-commerce catalog website against all specifications in `ORIGINAL_REQUEST.md`, `skills.md.txt`, and `PROJECT.md` without making assumptions about internal React state or implementation details.

### Core Testing Pillars:
- **Viewport & Visual Layout Regression**: Validates 320px mobile viewport rendering, scrollbar hiding, zero horizontal body overflow, non-overlapping sticky glassmorphism header & FAB, and touch target size constraints (>= 48px x 48px).
- **Functional State & Link Integrity**: Validates WhatsApp CTA URL encoding for English and Tamil product titles, dynamic category state filtering (`All`, `Pickles`, `Thokku`, `Kulambu`, `Podi`), and exact image asset mapping (`.jpg` / `.jpeg` files with `loading="lazy"`).
- **Multi-Tier Methodology**:
  - **Tier 1: Feature Coverage** (>= 5 tests per feature)
  - **Tier 2: Boundary & Corner Cases** (>= 5 tests per feature, 320px viewports, edge filtering)
  - **Tier 3: Cross-Feature Combinations** (Multi-dimensional state + layout interaction)
  - **Tier 4: Real-World User Journeys** (Complete browsing & WhatsApp ordering flow)

---

## 2. Feature Inventory & Test Coverage

| Feature # | Feature Name | Tier 1 Coverage | Tier 2 Boundary Coverage | Key Assertions |
|-----------|--------------|-----------------|--------------------------|----------------|
| **F1** | Hero Section & Brand Trust Badges | 5 Tests | 5 Tests | Brand title (Tamil/English), tagline, 3 trust badges, slide-up fade-in classes |
| **F2** | Category Filter Navigation | 5 Tests | 5 Tests | 5 chips (`All`, `Pickles`, `Thokku`, `Kulambu`, `Podi`), hidden scrollbar, no body overflow, 48px touch targets |
| **F3** | Product Cards & Grid Layout | 5 Tests | 5 Tests | Uniform card height, `aspect-square`, `object-cover`, dual-language titles, responsive grid (1-2 mobile, 3-4 desktop) |
| **F4** | WhatsApp Integration & CTA | 5 Tests | 5 Tests | Base URL `wa.me/9003104722`, text parameter format, exact Tamil/English URL encoding, 48px CTA buttons |
| **F5** | Sticky Glass Header & Bottom FAB | 5 Tests | 5 Tests | Header `bg-white/70 backdrop-blur-md`, FAB fixed bottom-right, no overlap at 320px width, sticky positioning |

---

## 3. Test Methodology & Hierarchy

### Tier 1: Feature Coverage
Validates core requirements for every major feature component independently. Ensures all UI elements, headings, buttons, chips, images, and WhatsApp links exist and adhere to baseline criteria.

### Tier 2: Boundary & Corner Cases
Tests extreme viewport limits (320px narrow mobile viewports up to 1440px desktop displays), long Tamil product titles vs short titles, rapid category switching, missing image graceful handling, and touch target overlap edge cases.

### Tier 3: Cross-Feature Combinations
Validates interaction between state, layout, and links. Example: Filtering by category on a 320px viewport, verifying remaining product cards, checking updated WhatsApp link parameters, and ensuring FAB touch target isolation simultaneously.

### Tier 4: Real-World Scenarios
Simulates authentic user journeys from initial page landing, reading trust badges, horizontal scrolling category filter chips, selecting specific categories (e.g. `Kulambu`), locating product cards (e.g. `Sunda Vatha kulambu`), validating WhatsApp order links, and tapping the floating support FAB.

---

## 4. Requirement Traceability Matrix

| Requirement | Test File | Test Case | Target Metric |
|-------------|-----------|-----------|---------------|
| Horizontal category scroll hides scrollbar | `tests/tier1-feature-coverage.test.js` | `F2-T1-02` | `scrollbar-width: none` / `::-webkit-scrollbar` hidden |
| Zero horizontal body overflow | `tests/tier1-feature-coverage.test.js` | `F2-T1-03` | `scrollWidth <= innerWidth` / `overflow-x: hidden` |
| 320px Header & FAB non-overlap | `tests/tier2-boundary-corner-cases.test.js` | `F5-T2-01` | Header & FAB bounding rects do NOT collide with content |
| Uniform card height & aspect ratio | `tests/tier1-feature-coverage.test.js` | `F3-T1-01` | `aspect-square` & equal card heights in row |
| Touch targets >= 48px | `tests/tier1-feature-coverage.test.js` | `F2-T1-05`, `F4-T1-05` | Width >= 48px AND Height >= 48px |
| WhatsApp URL encoding | `tests/tier1-feature-coverage.test.js` | `F4-T1-01` to `F4-T1-04` | `wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20[URL_ENCODED_NAME]` |
| Category filtering state logic | `tests/tier1-feature-coverage.test.js` | `F2-T1-01`, `F2-T2-02` | Exact catalog filter rendering without DOM errors |
| Image src filenames & resolution | `tests/tier1-feature-coverage.test.js` | `F3-T1-02` | Exact filenames matching R1 (`Chicken Pickle.jpg`, etc.) |

---

## 5. Execution Commands

To execute the test suite:

```bash
# Run tests using custom Node.js runner (runs all Tiers 1-4)
npm test

# Alternatively, run directly with node
node tests/run-e2e.js

# Or run via Vitest (if installed)
npx vitest run
```

---

## 6. Failure & Verification Protocol
- If application code is missing or incomplete, the test runner will clearly report expected test failures specifying missing elements, broken links, or non-compliant dimensions.
- Once the application build is completed, all tests must pass with 100% success rate.
