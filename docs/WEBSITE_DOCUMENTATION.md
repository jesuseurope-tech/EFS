# Consulta Médica - Project Documentation

This document provides a comprehensive overview of the **Consulta Médica** website upgrade project. It serves as a technical and functional manual for the website's architecture, design system, and content structure.

---

## 1. Technical Stack
*   **Framework**: [Astro](https://astro.build/) (v5.x)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Fonts**: 
    *   **Heading**: Montserrat (Bold, Uppercase)
    *   **Body**: Open Sans
    *   **Serif**: Noto Serif
*   **Deployment**: Static Site Generation (SSG)

---

## 2. Directory Structure (The "Clean" Map)
The project root has been organized to minimize technical noise and maximize clarity:

- **`/src`**: The core application code.
    - **`/components`**: Reusable UI elements (Headers, Footers, Cards).
    - **`/pages`**: Route-based components (Spanish routes are root, English in `/en`).
    - **`/layouts`**: Global page wrappers.
    - **`/styles`**: Global CSS and theme definitions.
- **`/public`**: Web-ready assets (Optimized images, favicons).
- **`/docs`**: Project reports, prompts, and this documentation.
- **`/source-materials`**: Original high-resolution source images (Git-ignored).

---

## 3. Design System & Brand
The visual identity is based on a professional medical aesthetic with high-contrast accents.

### Brand Colors
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `brand-primary` | `#172550` | Primary text, Dark Navy sections, Headings |
| `brand-secondary` | `#158ec7` | Buttons, Light Blue sections, Links |
| `brand-accent` | `#fa9604` | Orange highlights, important icons |
| `brand-text` | `#3b3b3b` | General body text |

### UI Components
The site follows a consistent pattern of using:
- **Wave Dividers**: SVG-based transitions between sections.
- **Floating Cards**: Used for treatments and doctor profiles with subtle hover shadows.
- **Glassmorphism**: Light transparencies and white-on-blue text blocks.

---

## 4. Component Library (`/src/components`)

| Component | Description |
| :--- | :--- |
| `Header.astro` | Sticky navigation with language switcher logic. |
| `Footer.astro` | Dark blue multi-column footer with contact details. |
| `HeroSection.astro` | Overlapping animated image carousel with fade effects. |
| `ProcessIcon.astro` | Specialized SVG handler for the 3-step evaluation process. |
| `DoctorProfileCard.astro` | Unified card for Dr. Enrique and Miriam (Name, Role, Image). |
| `TreatmentCard.astro` | Icon + Text card for treatment grids (Homeopathy, Detox, etc.). |
| `ContactSection.astro` | Full-width contact form and address block. |
| `QuoteSlider.astro` | Testimonial carousel for patient recovery stories. |
| `Locations.astro` | Tabbed interface showing Bilbao, Logroño, Granada, etc. |
| `WaveDivider.astro` | The SVG wave separator used between color sections. |

---

## 5. Page Index: Spanish (`/src/pages`)
The main site structure in Spanish:

- **`index.astro`**: Home page. Features the 3-step process, Doctor bios, and main clinical philosophy.
- **`/homeopatia`**: Deep dive into medical homeopathy.
- **`/dejar-de-fumar`**: Specific page for the Anti-tobacco treatment (one session).
- **`/desintoxicacion`**: Complex detoxification protocols (Complete, Metals, Vaccines).
- **`/diagnostico-medico`**: Methodology involving Bio-resonance MORA®.
- **`/medicina-familiar`**: Pediatrics and general family medicine focus.
- **`/doctores`**: Individual profile pages for Dr. Enrique Fernández and Dra. Miriam Matia.
- **`/tratamientos`**: Comprehensive list of all clinical services.

---

## 6. Page Index: English (`/src/pages/en`)
A mirrored version of the Spanish site for international patients:

- **`/en/index.astro`**: English Home page.
- **`/en/stop-smoking`**: English counterpart to "Dejar de fumar".
- **`/en/detoxification`**: English counterpart to "Desintoxicacion".
- **`/en/medical-diagnosis`**: English counterpart to "Diagnostico medico".
- **... and more**: Full 1-to-1 parity with the Spanish routes.

---

## 7. Asset Management
- **Icons**: Most icons are SVGs embedded directly into components (like `ProcessIcon.astro`) for performance.
- **Images**: Located in `/public/images/`.
    - `/team/`: Professional photos of the staff.
    - `/pages/locations/`: Photos of the different clinic branches.
- **Naming Convention**: Lower-case with hyphens (e.g., `bilbao-clinic.jpg`).

---

## 8. Development & Maintenance
- **Adding a Page**: Create a new `.astro` file in `src/pages/`.
- **Modifying the Header/Footer**: Edit the files in `src/components/`.
- **Styling Changes**: Primary adjustments should be made in `src/styles/global.css` using the `@theme` block.
- **Backups**: Commits are made to `development`, and stable releases are merged to `main`.
