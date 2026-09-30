# A'SQUARE Educational Services — React

A React (Vite) rebuild of the original static HTML site. Same pages, same
Tailwind design, now as a single-page app with client-side routing.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## What changed from the original HTML

- **Routing**: `Home.html`, `Academics.html`, `Admission.html`,
  `Contactus.html`, `Portal.html`, and `Check out result.html` are now routes
  handled by `react-router-dom` instead of separate files:
  - `/` → Home
  - `/academics` → Academics
  - `/admission` → Admission
  - `/contact-us` → Contact Us
  - `/portal` → Family Portal
  - `/check-result` → Result Portal (kept as its own standalone page layout,
    like the original)
- **Shared chrome**: the navbar, footer, and back-to-top button were
  duplicated across every HTML file — they're now single components
  (`src/components/Navbar.jsx`, `Footer.jsx`, `BackToTop.jsx`) reused via
  `src/components/Layout.jsx`.
- **Tailwind**: moved from the `cdn.tailwindcss.com` `<script>` tag to a
  proper Tailwind build (`tailwindcss` + `postcss` + `autoprefixer`), with
  the same custom colors (`forest`, `leaf`, `gold`, `cream`, `ink`) and
  `display` font defined in `tailwind.config.js`.
- **Forms**: the admission enquiry, contact, and result-checker forms are now
  controlled React forms with local state and a submit handler. None of them
  are wired to a real backend yet (the original forms had no `action` either)
  — hook `handleSubmit` in each page up to your API/email service when ready.
- **Marquee**: the `<marquee>` tag (deprecated, not usable in React) was
  replaced with a small CSS animation (`.animate-marquee` in `src/index.css`)
  that scrolls the same news text.
- **Images**: `A square logo jpeg.jpg (4).jpeg` and `schbuilding.png.jpeg`
  were moved into `src/assets` (renamed to `logo.jpeg` and
  `school-building.jpeg`) and are now imported as ES modules so Vite can
  fingerprint/optimize them at build time.
- **Not carried over**: `Roughsheet.html` looked like an earlier draft of the
  homepage (different color palette, references an image that isn't in the
  project — `A square logo jpeg.jpg (6).jpeg`) rather than a page linked from
  the live site, so it wasn't converted. Let me know if you actually want it
  rebuilt as a page and I'll add it.

## Structure

```
src/
  assets/          logo + school building images
  components/       Navbar, Footer, BackToTop, Layout, ScrollToTop
  pages/            Home, Academics, Admission, ContactUs, Portal, CheckResult
  App.jsx           route definitions
  main.jsx          app entry point
  index.css         Tailwind directives + marquee animation
tailwind.config.js  custom colors/fonts matching the original design
```
