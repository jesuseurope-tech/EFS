# Discrepancy Report: Astro Site vs Live Site (www.drenriquefernandez.com)

**Source of truth:** www.drenriquefernandez.com (Spanish version)  
**Status:** Port complete. Simply Static export and redundant files removed.

---

## 1. Navigation (Spanish) — FIXED

| Live site (Spanish) | Astro (before fix) | Simply Static |
|--------------------|--------------------|---------------|
| Consulta Médica | Consulta Médica | Consulta Médica |
| Antitabaco | **Tratamientos** | — |
| Diagnóstico | Antitabaco | Antitabaco |
| Homeopatía | Diagnóstico | Diagnóstico |
| Desintoxicación | Homeopatía | Homeopatía |
| — | Desintoxicación | Desintoxicación |

**Finding:** The live site does **not** include "Tratamientos" in the main navigation. The `/tratamientos/` page exists and is reachable via the home page link "Explore nuestras áreas de tratamiento" in step 3 of "Nuestra consulta". The Astro site incorrectly added "Tratamientos" to the nav.

**Fix applied:** Removed "Tratamientos" from the Spanish nav. English nav keeps "Treatments" as it is a natural translation and the English site structure differs.

---

## 2. Hero Section — Mobile Variant

| Element | Live / Simply Static | Astro |
|---------|----------------------|-------|
| Desktop hero | "Medicina avanzada" | "Medicina avanzada" ✓ |
| Mobile hero | "medicina avanzada a su alcance" (lowercase, different copy) | Same as desktop |

**Finding:** The live site uses a different hero headline on mobile: "medicina avanzada a su alcance" (hidden on desktop via `elementor-hidden-desktop`). Astro uses "Medicina avanzada" for both.

**Fix applied:** Added mobile-specific hero "medicina avanzada a su alcance" (visible on mobile only) and "Medicina avanzada" (visible on desktop only).

---

## 3. Missing Pages — Dejar de fumar location subpages — FIXED

| Page | Simply Static | Live site | Astro |
|------|---------------|-----------|-------|
| /dejar-de-fumar/dejar-de-fumar-en-malaga/ | ✓ | ✓ | ✓ |
| /dejar-de-fumar/dejar-de-fumar-en-granada/ | ✓ | ✓ | ✓ |
| /dejar-de-fumar/dejar-de-fumar-en-logrono/ | ✓ | ✓ | ✓ |
| /dejar-de-fumar/dejar-de-fumar-en-bilbao/ | ✓ | ✓ | ✓ |

**Fix applied:** Added all 4 location subpages with city-specific hero images, content, FAQ, Locations component, and ContactSection. Linked from main dejar-de-fumar page. Logroño page copy corrected (Simply Static had Granada/Bilbao text).

---

## 4. Blog, Category, Author Pages

| Type | Simply Static | Astro |
|------|---------------|-------|
| Blog index | ✓ | ✗ |
| Category pages | ✓ | ✗ |
| Author pages | ✓ | ✗ |

**Finding:** The Simply Static export includes blog infrastructure. The live site may use a Translate plugin for English; the Astro site uses a separate `/en/` structure. Blog pages were not ported.

**Recommendation:** Document as out-of-scope unless blog is required. The main treatment and info pages are the priority.

---

## 5. Content Parity (Main Pages)

| Page | Status |
|------|--------|
| Home | ✓ Core sections match (Nuestra consulta, Tratamientos, Acerca de nosotros, Localización, Contact form) |
| /tratamientos/ | ✓ Exists; linked from home "Explore nuestras áreas de tratamiento" |
| /medicina-familiar/ | ✓ |
| /homeopatia/ | ✓ |
| /diagnostico-medico/ | ✓ |
| /desintoxicacion/ | ✓ |
| /dejar-de-fumar/ | ✓ Main page; location subpages missing |
| /como-se-toma-la-homeopatia/ | ✓ |
| /afectacion-por-metales/ | ✓ |

---

## 6. Typos / Copy Issues — FIXED

- **Tratamientos page:** "Medina Familiar Integral" → corrected to "Medicina Familiar Integral".
- **Logroño subpage:** Simply Static had copy mentioning "Granada" and "Bilbao" in the Logroño section (template error). Corrected in Astro version.

---

## Summary of Fixes Applied

1. **Spanish navigation:** Removed "Tratamientos" from main nav to match live site. The page remains accessible via the home page CTA "Explore nuestras áreas de tratamiento".
2. **Mobile hero:** Added "medicina avanzada a su alcance" for mobile, "Medicina avanzada" for desktop.
3. **Dejar-de-fumar location subpages:** Added malaga, granada, logrono, bilbao with city-specific content, images, FAQ, Locations, ContactSection. Linked from main page.
4. **Medina typo:** Corrected to "Medicina Familiar Integral" on tratamientos page.
5. **Logroño copy:** Corrected template error (was showing Granada/Bilbao text).
