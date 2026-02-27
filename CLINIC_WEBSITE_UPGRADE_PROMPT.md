# Website Upgrade Prompt: Consulta Dr. Enrique Fernández

**Instructions for the LLM (Gemini 3.1 Pro):**

You are an expert web developer and UI/UX designer specializing in modern, high-performance web applications using **Astro**, **Tailwind CSS**, and modern vanilla JavaScript. Your task is to upgrade a medical clinic website. The site has already been migrated from WordPress to Astro to preserve curated content and rankings, but the codebase currently contains messy remnants of Elementor and WordPress, and the design needs a significant visual upgrade while maintaining a professional, neutral medical aesthetic.

## Objective
Deliver a pristine, component-driven Astro codebase with a top-tier layout design, smooth animations, and perfect SEO optimization. The text and URLs of the existing core pages must be preserved to protect current SEO rankings.

---

## 1. Codebase Cleanup & Component Architecture

**Goal:** Eliminate all Elementor/WordPress remnants (e.g., unnecessary absolute positioning, convoluted wrappers, WP-specific classes) and refactor the code into a clean, reusable component architecture.

### Recommended Layouts to Create:
- **`Layout.astro` (Base):** The root layout containing standard header, footer, and a new `SEOHead` component.
- **`TreatmentLayout.astro`:** A specialized layout for treatment pages (e.g., Dejar de Fumar, Desintoxicación) providing a consistent sidebar or related links structure.
- **`DoctorProfileLayout.astro`:** A new layout specifically tailored for the doctors' personal pages.

### Recommended Components to Create/Refactor:
- **`SEOHead.astro`:** A dedicated component to handle all SEO meta tags, OpenGraph data, schema markup (LocalBusiness, MedicalClinic), and canonical URLs.
- **`HeroSection.astro`:** A clean Hero component replacing the current absolute-positioned Elementor-style hero, utilizing CSS Grid/Flexbox and subtle fade-in animations.
- **`DoctorProfileCard.astro`:** To present Dr. Enrique Fernández and Dra. Miriam Matía consistently on the homepage and their respective detail pages.
- **`TreatmentCard.astro`:** A reusable card component for visually listing the clinic's treatments on the homepage and "Tratamientos" hub.
- **`TestimonialSlider.astro`:** Refactor `QuoteCarousel.astro` to ensure pristine, responsive code without legacy slider structural remnants.

---

## 2. Design & UI/UX Guidelines

**Goal:** Create a "wow" factor using modern web design principles while ensuring the site looks professional, trustworthy, and neutral (appropriate for a medical practice).

- **Color Palette:** Use customized Tailwind colors to establish a premium medical feel. Suggest using a base of clean whites and soft grays, complemented by a trustworthy primary color (e.g., deep slate blue or modern teal) and subtle, desaturated accents. Avoid generic default colors.
- **Typography:** Implement a modern, readable font pairing (e.g., `Inter` or `Outfit` for headings, `Roboto` or `Open Sans` for body text) to replace browser defaults and improve readability.
- **Aesthetics:** Utilize clean lines, ample whitespace, and subtle "glassmorphism" or soft shadow effects for elevated components. 
- **Animations:** Implement subtle, professional micro-animations. Elements should fade in smoothly on scroll. Hover states on buttons and links should feel responsive and fluid without being overly flashy.

---

## 3. SEO & Content Architecture

**Goal:** Maximize SEO potential by improving technical on-page SEO factors and expanding the site structure strategically.

- **URL & Content Preservation:** CRITICAL - Do not alter the text content or the existing URLs (e.g., `/homeopatia`, `/dejar-de-fumar`, `/diagnostico-medico`) as they currently rank well.
- **New Doctor Pages:** Create dedicated pages for:
  - `/doctores/dr-enrique-fernandez`
  - `/doctores/dra-miriam-matia`
  *(Note: Link to these pages from the homepage to capitalize on search volume for their specific names).*
- **Images:** 
  - Convert all images to `.webp` format.
  - Rename image files from generic names (like `principal-1.png`) to highly descriptive, SEO-rich names (e.g., `dr-enrique-fernandez-san-jose-consulta.webp`).
  - Ensure all `<img>` tags have descriptive `alt` text.
- **Semantic HTML & Meta Tags:** Ensure the new component structures use strictly semantic HTML5 (`<article>`, `<section>`, `<aside>`). Utilize the `SEOHead` component to ensure every page has a unique title, meta description, and correct language attributes.

---

## Execution Constraints
- Do not use placeholders for images; request to generate visual assets if needed, but primarily utilize the existing image directory (`/Images`) after optimizing them.
- Provide the updated code for `index.astro` and the primary layout/components first, fully implementing the new design system before moving on to the sub-pages.
