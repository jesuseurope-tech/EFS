# Astro Port Improvements — Dr. Enrique Fernández (drenriquefernandez.com)

This document lists concrete improvements for the Simply Static → Astro port. Execute each section in order where dependencies exist. Target: cleaner structure, correct asset paths, less duplication, and better use of Astro.

## Principles (read first)

- **Do not reference the `Simply Static Website` folder or any of its contents.** That folder will be removed in the future. All work (paths, assets, docs) must assume only the Astro project exists. Source assets for the migration live in this project’s `public/` (e.g. `public/wp-content/uploads/`) or have already been copied into it—never point code, scripts, or documentation at `Simply Static Website`.
- **When the port is finished, the result must look and behave like a brand new Astro website.** No WordPress or Simply Static structure, paths, or naming should remain. The codebase should feel like a clean Astro app (e.g. `public/images/`, clear components, i18n, no `wp-content` or export leftovers).

---

## 1. Organise images properly (do this first)

**Why:** You’re no longer using WordPress. Keeping `wp-content/uploads/` with date-based folders and mixed naming (spaces, hyphens, inconsistent paths) makes the Astro site harder to maintain and ties it to the old CMS. A single, semantic image tree under `public/images/` is easier to reason about, avoids broken paths like `Custom Images` vs `Custom-Images`, and lets you delete or archive the WordPress export later.

**Goal:** One clear asset root, only the images the site actually uses, named and grouped by purpose.

### 1.1 Target folder structure

Create the following under `public/images/`:

```
public/images/
├── logo/
│   └── logo.png              (from 2024/09/logo-copy.png)
├── hero/
│   ├── principal-1.png       (ES home hero; from Custom-Images/Principal-1.png or 2025/06)
│   ├── principal-4.png       (EN home)
│   ├── aprincipal-1.png
│   ├── aprincipal-2.png
│   └── slider.jpg           (about section; from 2025/06/slider2.jpg)
├── backgrounds/
│   ├── background-1.png     (gradient card; Custom-Images/Background-1.png)
│   ├── background-2.png     (contact section; Custom-Images/Background-2.png)
│   └── frequency-cancel-out.png   (detox hero; Custom-Images – check exact filename)
├── team/
│   ├── enrique.png          (doctor photo; Custom-Images/Enrique.png, or 2025/06/Enrique.png)
│   └── ser-humano.png       (Locations; Custom-Images/Ser-Humano.png)
├── contact/
│   └── llamar.jpg           (call CTA; 2024/09/Llamar-1.jpg)
├── locations/
│   ├── la-herradura.jpg     (2025/07/La-Herradura.jpg)
│   └── bilbao.png           (2024/09/Screen-Shot-...-300x202.png)
├── treatments/
│   ├── white-background-mobile.png   (Custom-Images/White-background-Mobile.png)
│   └── resonancia.svg       (2025/06/Resonancia.svg)
└── pages/                    (page-specific heroes and illustrations)
    ├── family-medicine-hero.jpeg    (2025/06/AdobeStock_749618524-scaled.jpeg)
    ├── frecuencias.png              (2025/06/Frecuencias.png)
    ├── homeopatia-hero.jpeg         (2025/03/Homeopatia-1536x871.jpeg)
    ├── homeopatia-article.jpeg      (2025/06/AdobeStock_34485014-1024x683.jpeg)
    ├── quit-smoking.png             (2025/06/Quit-smoking.png)
    ├── diagnostico-hero.png         (Custom-Images/Background-1.png – same as backgrounds/ or copy)
    ├── torso.jpg                    (2025/06/torso.jpg)
    └── medical-illustration.jpg     (2025/06/69220-15927003.jpg)
```

Use lowercase, hyphenated filenames where possible so URLs are consistent and avoid spaces. If you prefer to keep original filenames (e.g. `Enrique.png`) for clarity, that’s fine—just pick one convention and stick to it.

### 1.2 Migration map (old path → new path)

All “current” paths below are relative to **this Astro project’s** `public/` (e.g. `public/wp-content/uploads/...`). Do not use the `Simply Static Website` folder.

| Current path (in this project’s public/ or in code) | New path |
|-----------------------------------|----------|
| `wp-content/uploads/2024/09/logo-copy.png` | `/images/logo/logo.png` |
| `wp-content/uploads/Custom-Images/Principal-1.png` or `2025/06/Principal-1.png` | `/images/hero/principal-1.png` |
| `wp-content/uploads/2025/06/Principal-4.png` | `/images/hero/principal-4.png` |
| `wp-content/uploads/2025/06/APrincipal-1.png`, `APrincipal-2.png` | `/images/hero/aprincipal-1.png`, `aprincipal-2.png` |
| `wp-content/uploads/2025/06/slider2.jpg` | `/images/hero/slider.jpg` |
| `wp-content/uploads/Custom-Images/Background-1.png` | `/images/backgrounds/background-1.png` |
| `wp-content/uploads/Custom-Images/Background-2.png` | `/images/backgrounds/background-2.png` |
| `Custom-Images/Frequency Cancel Out.png` (exact name in folder may vary) | `/images/backgrounds/frequency-cancel-out.png` |
| `Custom-Images/Enrique.png` or `2025/06/Enrique.png` | `/images/team/enrique.png` |
| `Custom-Images/Ser-Humano.png` | `/images/team/ser-humano.png` |
| `wp-content/uploads/2024/09/Llamar-1.jpg` | `/images/contact/llamar.jpg` |
| `wp-content/uploads/2025/07/La-Herradura.jpg` | `/images/locations/la-herradura.jpg` |
| `wp-content/uploads/2024/09/Screen-Shot-2024-09-26-at-10.58.47-300x202.png` | `/images/locations/bilbao.png` |
| `Custom-Images/White-background-Mobile.png` | `/images/treatments/white-background-mobile.png` |
| `wp-content/uploads/2025/06/Resonancia.svg` | `/images/treatments/resonancia.svg` |
| `2025/06/AdobeStock_749618524-scaled.jpeg` | `/images/pages/family-medicine-hero.jpeg` |
| `2025/06/Frecuencias.png` | `/images/pages/frecuencias.png` |
| `2025/03/Homeopatia-1536x871.jpeg` | `/images/pages/homeopatia-hero.jpeg` |
| `2025/06/AdobeStock_34485014-1024x683.jpeg` | `/images/pages/homeopatia-article.jpeg` |
| `2025/06/Quit-smoking.png` | `/images/pages/quit-smoking.png` |
| `Custom-Images/Background-1.png` (diagnóstico hero) | `/images/backgrounds/background-1.png` (reuse) |
| `2025/06/torso.jpg` | `/images/pages/torso.jpg` |
| `2025/06/69220-15927003.jpg` | `/images/pages/medical-illustration.jpg` |

Keep `favicon.svg` in `public/` (e.g. `public/favicon.svg`) unless you prefer `public/images/logo/favicon.svg` and updating the layout.

### 1.3 Actions

**Note:** Use only this Astro project’s `public/` (e.g. `public/wp-content/uploads/`). Do not reference the `Simply Static Website` folder or its contents.

1. Create all directories under `public/images/` as above.
2. Copy each file from its current location in this project’s `public/wp-content/uploads/` (or `public/wp-content/uploads/Custom-Images/`) to the new path. Resolve any duplicate names (e.g. `Enrique.png` in Custom-Images vs 2025/06) by picking the one that matches what the site shows.
3. For “Frequency Cancel Out”, list this project’s `public/wp-content/uploads/Custom-Images/` and use the exact filename (with or without spaces); if it has spaces, copy to a hyphenated name like `frequency-cancel-out.png`.
4. Update **every** reference in `src/` (pages, layouts, components) from the old URLs to the new ones, e.g. `/images/logo/logo.png`, `/images/backgrounds/background-2.png`. This also fixes the broken variants (`Custom Images`, `Custom%20Images`, `Background 1.png`) in one go—no need to fix WordPress paths first.
5. After the site works with the new paths, remove or archive `public/wp-content/` (or at least `uploads/`) so the project no longer depends on WordPress-era structure. The goal is a brand new Astro-style site.

**Files to update after moving assets:**  
`Layout.astro`, `Header.astro`, `Footer.astro`, `Locations.astro`, and all pages listed in section 3.1 (index, en/index, tratamientos, en/treatments, medicina-familiar, en/family-medicine, desintoxicacion, en/detoxification, homeopatia, en/homeopathy, diagnostico-medico, en/medical-diagnosis, dejar-de-fumar, en/stop-smoking).

---

## 2. Extract reusable Astro components

**Goal:** Remove duplicated sections and make the codebase easier to maintain.

### 2.1 Contact / “Pedir cita” section

The same “Pedir cita” block (heading, Llamar image, phone text, and often a form) is repeated on many pages with small wording differences.

**Actions:**

1. Create `src/components/ContactSection.astro` (or `CallToAction.astro`).
2. Define props, e.g.:
   - `title` (e.g. “Pedir cita” / “Book appointment”)
   - `showForm?: boolean` (some pages have form, some only phone + image)
   - Optional: `sectionId?: string` (e.g. `Llamar_cita` for anchor links)
   - Optional: `variant?: 'full' | 'compact'` if layouts differ (full = form + image side by side, compact = centered image + text only).
3. Move the shared markup (background image, image, phone number, “Estamos a su servicio”, and optionally the form) into the component. Use i18n or passed props for all user-visible strings.
4. Replace every duplicated “Pedir cita” block on the following pages with `<ContactSection ... />`:
   - `src/pages/index.astro` (form section at bottom)
   - `src/pages/medicina-familiar/index.astro`, `src/pages/en/family-medicine/index.astro`
   - `src/pages/desintoxicacion/index.astro`, `src/pages/en/detoxification/index.astro`
   - `src/pages/homeopatia/index.astro`, `src/pages/en/homeopathy/index.astro`
   - `src/pages/diagnostico-medico/index.astro`, `src/pages/en/medical-diagnosis/index.astro`
   - `src/pages/dejar-de-fumar/index.astro`, `src/pages/en/stop-smoking/index.astro`
   - And the “Pedir cita” section on `src/pages/tratamientos/index.astro`, `src/pages/en/treatments/index.astro` (simplified variant without form if that’s the case).
5. Use `getLangFromUrl(Astro.url)` inside the component (or pass `lang` as prop from layout) and choose strings from a small map or from `src/i18n/ui.ts` (extend ui.ts with keys like `contact.pedirCita`, `contact.llamando`, `contact.formTitle`, etc.).

### 2.2 Hero section

The home hero (title, subtitle, CTA button, background image) is similar between `src/pages/index.astro` and `src/pages/en/index.astro` with different text and EN using multiple overlapping images.

**Actions:**

1. Create `src/components/Hero.astro` with props: `title`, `subtitle`, `ctaText`, `ctaHref` (e.g. `#Llamar_cita`), and optional `backgroundImage` / `backgroundImages` (for EN’s multi-image layer).
2. Use a single slot or extra props for optional EN-specific image stack.
3. Use this component in both `src/pages/index.astro` and `src/pages/en/index.astro` so hero content is driven by props (and i18n where applicable).

### 2.3 “Nuestra consulta” / “Our Clinic” three steps

The three-step block (Evaluación, Diagnóstico, Estrategia) is duplicated on the Spanish and English home pages.

**Actions:**

1. Create `src/components/ClinicSteps.astro` (or `OurClinic.astro`).
2. Pass step titles and body copy as props or via i18n keys. Include the two internal links (“Conozca nuestra metodología diagnóstica”, “Explore nuestras áreas de tratamiento”) with props or i18n.
3. Replace the duplicated section in both `index.astro` and `en/index.astro` with `<ClinicSteps />`.

### 2.4 Treatment cards on home page

The four treatment cards (Homeopatía, Antitabaco, Desintoxicación, Medicina Familiar) are repeated structure with different href, icon, title, description.

**Actions:**

1. Create `src/components/TreatmentCard.astro` with props: `href`, `icon` (slot or component), `title`, `description`.
2. Refactor the grid on the home page(s) to map over an array of treatment data and render `<TreatmentCard>` for each. Optionally move the SVG icons into a small `TreatmentIcons.astro` or inline in the data.

### 2.5 Wave / shape divider

The wave SVG at the bottom of the gradient section on the home page can be reused elsewhere.

**Actions:**

1. Create `src/components/WaveDivider.astro` that renders the SVG (optionally with a `fill` or `class` prop). Use it in `index.astro` and any other page that needs the same shape.

### 2.6 Tabs (Consulta / Doctor / Psicóloga)

The tab buttons and content on the home page are static and non-functional (no tab switching). Either:

- Add a small client script to switch visibility by tab, and/or
- Extract a generic `Tabs.astro` component with slots for tab labels and tab panels, then use it here and potentially on Locations.

Keep the same content and styling; just centralize markup and behavior.

---

## 3. Use Astro’s `<Image>` where it helps

**Goal:** Let Astro optimize critical images (LCP, hero, logos).

**Actions:**

1. Move hero images and logos that are above-the-fold into `src/assets/` (e.g. `src/assets/images/hero/`, `src/assets/images/logo/`).
2. Import them in the layout or page and use `<Image src={...} alt="..." />` from `astro:assets`. Set reasonable `width`/`height` or use `aspectRatio` so layout is stable.
3. Keep decorative or rarely changed images in `public/` and reference them with `<img src="...">` if you prefer not to move them into `src/assets/`.

---

## 4. i18n and navigation

**Current state:** `src/i18n/ui.ts` has nav labels; Header uses them. Spanish home content is hardcoded; English home is separate. No “Tratamientos” / “Treatments” in the nav.

**Actions:**

1. Add nav entry for treatments:
   - In `src/i18n/ui.ts`: add e.g. `'nav.tratamientos': 'Tratamientos'` (es) and `'nav.tratamientos': 'Treatments'` (en).
   - In `src/components/Header.astro`: add a link that points to `lang === 'en' ? '/en/treatments/' : '/tratamientos/'` and label `{t('nav.tratamientos')}`.
2. Optionally add more i18n keys for repeated strings (e.g. “Pedir cita”, “Llamando al”, “Estamos a su servicio”, form labels) and use them in the new `ContactSection` and elsewhere so ES/EN stay in sync from one place.
3. Ensure all internal links (buttons, cards, nav) use the correct locale prefix for EN (e.g. `/en/treatments/`, `/en/homeopathy/`) and no prefix for ES where `prefixDefaultLocale: false` is set.

---

## 5. Layout and meta

**Actions:**

1. In `Layout.astro`, ensure `description` is used for `<meta name="description">` on every page. Pass `description` from each page into the layout.
2. Add canonical URL if useful: `<link rel="canonical" href={...} />` using `Astro.url` and the site’s base URL.
3. Consider a shared `Head.astro` or re-exporting meta defaults so pages only override what’s needed.

---

## 6. Forms and CTA behavior

**Current state:** Contact forms are present but have no `action` or client-side submit handling.

**Actions:**

1. Either:
   - Wire the form to a server endpoint (e.g. Astro API route or third-party form service) and add `action` and `method`, or
   - Add a client-side handler that submits via `fetch` to an endpoint and show success/error (e.g. with a small island component if you use React/Vue, or a simple `<script>` in the ContactSection).
2. Ensure the “Cita Previa” / “Book Appointment” button links to `#Llamar_cita` (or the id used by the contact section) on both home pages.

---

## 7. Mobile menu

**Current state:** Header has a hamburger button for `md:hidden` but no menu panel or toggle behavior.

**Actions:**

1. Add a mobile menu panel (e.g. a drawer or dropdown) that shows the same nav links and language switcher when the button is clicked.
2. Use a small client script in `Header.astro` to toggle a class or attribute that shows/hides the panel. Avoid loading a full framework if not already in use; vanilla JS is enough.
3. Ensure the same links and `t()` labels are used in the mobile menu as in the desktop nav.

---

## 8. Locations and shared content

**Current state:** `Locations.astro` is used on some pages; other pages (e.g. medicina-familiar, family-medicine) may duplicate similar location/contact blocks.

**Actions:**

1. Ensure every page that should show clinic locations and contact info uses `<Locations />` instead of duplicating the same content.
2. If Locations content differs by page, add optional props or slots to `Locations.astro` rather than copying the block into multiple pages.

---

## 9. Cleanup of WordPress leftovers

**Important:** Do not reference or depend on the `Simply Static Website` folder; it will be removed. All cleanup applies only to this Astro project (e.g. `public/wp-content/`, `public/themes/`, `public/plugins/`).

**Actions:**

1. Remove or ignore unused WordPress-era assets under this project’s `public/` (themes, plugins, extra uploads) once no code references them. If in doubt, do this after step 1 (organising images) so you don’t delete anything still referenced.
2. Remove any unused CSS/JS from the old export (e.g. under `public/wp-content/uploads/` or `public/themes/`) that is not linked from the current layout or pages.
3. In `Layout.astro`, fonts are loaded from Google Fonts; that’s fine. Ensure no duplicate or unused stylesheets are included.
4. The finished site must look like a brand new Astro website: no `wp-content`, no Simply Static paths, no leftover export structure—only Astro-friendly `public/images/`, `src/`, and a clean `public/`.

---

## 10. Accessibility and semantics

**Actions:**

1. Add meaningful `alt` text to all images (e.g. hero, team photo, locations). Avoid empty `alt=""` unless the image is purely decorative.
2. Ensure headings hierarchy is consistent (one `h1` per page, then `h2`/`h3` in order).
3. If the tab buttons in the gradient section or in Locations are interactive, use `role="tablist"`, `role="tab"`, `role="tabpanel"` and appropriate `aria-selected` / `aria-controls` / `id` for better a11y.

---

## 11. Summary checklist for the executor

- [ ] **1** Organise images: create `public/images/` structure (logo, hero, backgrounds, team, contact, locations, treatments, pages), copy only used assets from this project’s `public/` (do not use `Simply Static Website`), update all references in `src/` to the new paths, then remove or archive `public/wp-content/`.
- [ ] **2.1** Create `ContactSection.astro` and replace all duplicated “Pedir cita” blocks.
- [ ] **2.2** Create `Hero.astro` and use it on both home pages.
- [ ] **2.3** Create `ClinicSteps.astro` and use it on both home pages.
- [ ] **2.4** Create `TreatmentCard.astro` and refactor home treatment grid.
- [ ] **2.5** Create `WaveDivider.astro` and use it where needed.
- [ ] **2.6** Optionally extract Tabs and add simple tab switching.
- [ ] **3** Use Astro `<Image>` for key above-the-fold images (e.g. after moving hero/logo to `src/assets/` if desired).
- [ ] **4** Add “Tratamientos”/“Treatments” to i18n and Header; extend i18n for contact strings.
- [ ] **5** Pass and use `description` in Layout; consider canonical and shared Head.
- [ ] **6** Wire contact form to an endpoint or client submit handler.
- [ ] **7** Implement mobile menu toggle and panel in Header.
- [ ] **8** Use `Locations` everywhere needed; avoid duplicating location blocks.
- [ ] **9** Remove unused WordPress-era assets and CSS/JS from this project’s `public/` (after step 1). Do not reference `Simply Static Website`.
- [ ] **10** Improve alt text, heading order, and tab a11y where relevant.

End of improvements. Execute in order: organise images first so all paths point to the new structure; then components and the rest. The finished port must look like a brand new Astro website, with no references to the `Simply Static Website` folder or its contents.
