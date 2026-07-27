# Technical Analysis & Environment Blueprint: Arusuvai E-Commerce Platform

**Specialist:** Explorer 2 (Tooling & Environment Specialist)  
**Project Path:** `e:\Food Website`  
**Working Directory:** `e:\Food Website\.agents\explorer_recon_2`  
**Date:** 2026-07-27  

---

## 1. Environment & Workspace Status Audit

### 1.1 Installed Runtimes & Package Managers
Execution of system commands in `e:\Food Website` produced the following runtime versions:

| Tool | Installed Version | Status / Compatibility |
| :--- | :--- | :--- |
| **Node.js** | `v20.5.1` | **Active LTS / ESM Native** — Fully compatible with Vite 5/6, React 18/19, Tailwind CSS v3/v4, Vitest, and Playwright. |
| **npm** | `9.8.0` | **Supported** — Supports `package.json` `type: "module"`, workspace scripts, and package lock v3. |
| **npx** | `9.8.0` | **Supported** — Capable of running package execution tools (`npx vite`, `npx tailwindcss`, `npx vitest`). |
| **OS** | Windows (x64) | **Supported** — PowerShell / Command Prompt shell environment. |

### 1.2 Project Root Status (`e:\Food Website`)
- `package.json`: **MISSING** (No initial package configuration present).
- `node_modules`: **MISSING** (No installed packages yet).
- Existing Assets:
  - 17 `.jpeg` product image files located directly in `e:\Food Website\`.
  - `.agents/` metadata directory containing orchestrator and explorer recon agent logs.
  - `skills.md.txt` containing full Arusuvai design system & functional directives.
- Conclusion: The workspace requires toolchain initialization (`npm init -y` or structured manual package configuration). Because the project directory is non-empty, interactive `npm create vite@latest .` would require directory override flags. Manual `package.json` creation combined with explicit dependency installation is recommended for full control and preservation of assets.

---

## 2. Optimal Build Setup Recommendation: Vite + React + Tailwind CSS

### 2.1 Toolchain Selection Rationale
- **Vite 5/6**: Chosen over traditional Create React App or Webpack due to instant ES Module HMR (<100ms), fast build performance via esbuild/Rollup, native PostCSS support, and minimal config overhead.
- **React 18.3+**: Ideal for single-page component rendering, dynamic category filtering, and micro-interaction state.
- **Tailwind CSS v3.4**: Selected for strict alignment with `skills.md.txt` design tokens, fast utility-first styling, glassmorphism support (`backdrop-blur-md`), mobile-first responsive breakpoints, and complete plugin compatibility (`@tailwindcss/aspect-ratio`).

### 2.2 Recommended Directory Structure
To keep the project root clean while preserving existing assets and agent metadata, the following directory layout is established:

```
e:\Food Website\
├── public/
│   └── images/                # Product JPEGs & dual-extension (.jpg) aliased files
├── src/
│   ├── assets/                # Logos, icons, SVG graphics
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky glassmorphic header with logo & contact
│   │   ├── HeroSection.jsx    # Hero headline, Tamil tagline, scroll indicator
│   │   ├── CategoryFilter.jsx # Horizontal touch-scroll category chips (>= 48px touch targets)
│   │   ├── ProductGrid.jsx   # Responsive grid (1-2 cols mobile, 3-4 cols desktop)
│   │   ├── ProductCard.jsx   # Card with frosted glass text overlay, image hover zoom, WhatsApp CTA
│   │   ├── Footer.jsx         # Contact details, address, operating hours, Tamil text
│   │   └── WhatsAppFAB.jsx    # Floating action button (bottom-right sticky)
│   ├── data/
│   │   └── products.js        # Catalog dataset (17 items, 4 categories, Tamil names)
│   ├── utils/
│   │   ├── whatsapp.js        # WhatsApp URL generator with URL encoding
│   │   └── cn.js              # clsx + tailwind-merge helper
│   ├── test/
│   │   ├── setup.js           # Vitest setup & @testing-library/jest-dom matchers
│   │   ├── whatsapp.test.js   # Unit tests for wa.me URL generator
│   │   ├── products.test.js   # Product data schema validation
│   │   └── components.test.jsx# Component render & touch target tests
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Entry point
│   └── index.css              # Tailwind imports & custom font loading
├── scripts/
│   ├── copy-images.js         # Copies images to public/images/ and creates .jpg aliases
│   └── test-e2e-node.js       # Standalone Node E2E verification runner
├── index.html                 # App HTML with Noto Sans Tamil & Inter Google Fonts
├── package.json               # Manifest & dependency versions
├── vite.config.js             # Vite configuration with path aliases & test setup
├── tailwind.config.js         # Custom design system tokens (colors, fonts, glassmorphism)
└── postcss.config.js          # Tailwind & Autoprefixer PostCSS config
```

---

## 3. Required Package & Dependency Specification

### 3.1 Production Dependencies (`dependencies`)

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "^0.469.0",
  "framer-motion": "^11.15.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.5"
}
```

#### Purpose of Each Dependency:
1. **`react` & `react-dom`**: Core UI view library and DOM renderer.
2. **`lucide-react`**: Icons for WhatsApp (`MessageCircle`), Shopping (`ShoppingBag`), Filter (`Filter`), Search (`Search`), Star (`Star`), Phone (`Phone`), Check (`Check`), Sparkles (`Sparkles`), Chevron (`ChevronDown`), Menu/Close (`Menu`, `X`).
3. **`framer-motion`**: Smooth page-load fade/slide entrance animations, scroll reveal animations, active button depress (`active:scale-95`), and FAB animations.
4. **`clsx` & `tailwind-merge`**: Utility functions to safely construct and merge Tailwind class strings in custom components (`cn()`).

### 3.2 Development Dependencies (`devDependencies`)

```json
{
  "vite": "^5.4.11",
  "@vitejs/plugin-react": "^4.3.4",
  "tailwindcss": "^3.4.17",
  "postcss": "^8.4.49",
  "autoprefixer": "^10.4.20",
  "@tailwindcss/aspect-ratio": "^0.4.2",
  "@tailwindcss/forms": "^0.5.9",
  "vitest": "^2.1.8",
  "@testing-library/react": "^16.1.0",
  "@testing-library/jest-dom": "^6.6.3",
  "jsdom": "^25.0.1",
  "@playwright/test": "^1.49.1"
}
```

---

## 4. Configuration Files Specification

### 4.1 `package.json`

```json
{
  "name": "arusuvai-web",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0 --port 3000",
    "build": "vite build",
    "preview": "vite preview --host --port 3000",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "setup:images": "node scripts/copy-images.js"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.469.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "@playwright/test": "^1.49.1",
    "@tailwindcss/aspect-ratio": "^0.4.2",
    "@tailwindcss/forms": "^0.5.9",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "jsdom": "^25.0.1",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^5.4.11",
    "vitest": "^2.1.8"
  }
}
```

### 4.2 `tailwind.config.js`
Fully aligns with the Arusuvai color palette, typography, glassmorphism, and mobile touch target guidelines:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arusuvai: {
          bg: '#FAF7F2',        // Warm Off-White/Cream background
          red: '#8B0000',       // Deep Spice Red primary text & accents
          darkRed: '#6B0000',   // Hover state for red buttons/links
          gold: '#D4AF37',      // Heritage Gold secondary accents & stars
          goldLight: '#F3E5AB', // Soft gold highlight background
          whatsapp: '#25D366',  // Vibrant Emerald Green CTA button
          whatsappHover: '#1EBE5D', // Darker WhatsApp green for hover/active
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'arusuvai': '0 10px 30px -5px rgba(139, 0, 0, 0.08)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'fab': '0 10px 25px -5px rgba(37, 211, 102, 0.4)',
      },
      minHeight: {
        'touch': '48px', // Standard mobile touch target minimum height
      },
      minWidth: {
        'touch': '48px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
```

### 4.3 `vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0', // Allows LAN connections from physical mobile devices
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    include: ['src/**/*.test.{js,jsx}'],
  },
});
```

### 4.4 `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## 5. Development Server & Testing Strategy

### 5.1 Dev Server Setup (`npm run dev`)
- **Port**: `3000`
- **Host**: `0.0.0.0` (Enables real mobile phone testing over local Wi-Fi network).
- **HMR**: Native Vite HMR with `@vitejs/plugin-react` fast refresh.

### 5.2 Unit & Integration Testing Runner (Vitest)
- **Engine**: `vitest` + `jsdom` + `@testing-library/react` + `@testing-library/jest-dom`.
- **Target Test Files**:
  1. `src/test/whatsapp.test.js`: Validates dynamic URL generation for `https://wa.me/9003104722?text=...` with URL encoding.
  2. `src/test/products.test.js`: Asserts all 17 catalog items contain required attributes (`id`, `name`, `nameTamil`, `category`, `price`, `weight`, `image`, `description`).
  3. `src/test/components.test.jsx`: Validates minimum touch target size (`min-h-[48px]`), category chip switching state, and product card rendering.

### 5.3 E2E Testing Strategy (Playwright + Node Verification)
- **Runner**: Playwright (`@playwright/test`) with mobile viewport presets (`iPhone 13` / `Pixel 5`).
- **Core Mobile E2E Verification Assertions**:
  1. **Touch Target Verification**: Asserts all clickable category chips, header buttons, and product card CTAs have `offsetHeight >= 48px` and `offsetWidth >= 48px`.
  2. **Sticky Glass Navbar**: Verifies `.sticky.top-0` element has computed `backdrop-filter` containing `blur`.
  3. **Floating Action Button (FAB)**: Verifies WhatsApp FAB is fixed in bottom right corner and remains visible during scrolling.
  4. **WhatsApp URL Redirection**: Intercepts button clicks to verify window location or anchor `href` matches `https://wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20...`.
  5. **Image Load Integrity**: Verifies all 17 `.jpeg` / `.jpg` images return HTTP 200 and display without broken image indicators.

---

## 6. Actionable Implementation Instructions for Scaffolding

To scaffold the project cleanly without disrupting existing root image files:

1. Create `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`.
2. Create directories `public/images/`, `src/components/`, `src/data/`, `src/utils/`, `src/test/`, `scripts/`.
3. Execute `npm install` to populate `node_modules` and generate `package-lock.json`.
4. Run `npm run setup:images` to copy all 17 JPEGs to `public/images/` and create `.jpg` alias copies.
5. Execute `npm run test` to verify unit test suite.
6. Execute `npm run dev` to launch dev server.
