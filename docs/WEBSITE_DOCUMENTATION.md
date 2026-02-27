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
| `brand-highlight` | `#20428A` | Secondary navy from SVGs, diagrams |
| `brand-success` | `#10B981` | Green used for harmonic waves/positive markers |
| `brand-danger` | `#EF4444` | Red used for disharmonic waves/negative markers |

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
- **Page Structure Standard**: All clinical and main pages should follow a standard flow:
  1. `<HeroSection />` (or custom Hero block).
  2. Main Content Sections (Text, Grids, Animations).
  3. `<MainTreatments />` (for internal cross-linking between services).
  4. `<Locations />` (if relevant, to show clinic branches).
  5. `<ContactSection />` (Mandatory call to action at the bottom of every page).
- **Backups**: Commits are made to `development`, and stable releases are merged to `main`.

---

## 9. Insights & Decisions
> **Date: 2026-02-27**
> - **Leadership**: The clinic is run by Dr. Enrique Fernández San José and Psychologist Miriam Matia.
> - **Official URL**: [www.drenriquefernandez.com](https://www.drenriquefernandez.com)
> - **SEO Legacy**: Project must maintain existing page names and URLs to protect SEO rankings, while allowing for new expansion pages.
> - **Locations**: 
>   - Primary Clinic: La Herradura (Near Málaga/Granada).
>   - Satellite Clinic: Periodic temporary visits to Bilbao.
>   - Other branches: Logroño, Malaga, etc. (as per Locations component).
> - **Core Value Proposition**: Primarily a Medical Consultation with a focus on advanced diagnostic tools (Bio-resonance).
> - **Flagship Service**: "Quit Smoking" (Antitabaco) is the star treatment.
> - **Ongoing Goal**: Optimize the distribution and hierarchy of clinical pages for better user flow.

---

## 10. Core Messaging & Brand Voice (Curated Text)

To maintain the professional and empathetic tone of the clinic, the following curated Spanish text should be used as the primary reference for any new content development.

### Clinical Philosophy
> "El ser humano es un TODO. No se puede separar su parte física de su sistema emocional, mental e incluso espiritual."
> 
> "No hay enfermedad física sin un síntoma mental o emocional que se correlacione ni al contrario un síntoma mental, emocional sin que haya un síntoma físico."

### The 3-Step Methodology
1. **Evaluación Médica Inicial en Profundidad**: 
   - "Dedicamos el tiempo que sea necesario para profundizar no solo en su biografía médica, sino también en su historia familiar, su entorno vital y su contexto."
2. **Diagnóstico Médico de Precisión**: 
   - "Nuestro Diagnóstico Médico mediante Bio-resonancia MORA ® permite un análisis objetivo de la actividad celular y sistémica, identificando desequilibrios, cargas tóxicas, intolerancias o focos interferentes."
3. **Estrategia Terapéutica Personalizada**: 
   - "No ofrecemos soluciones genéricas, sino planes de tratamiento individualizados que pueden integrar diferentes modalidades como la Homeopatía clínica o protocolos de Desintoxicación avanzada."

### Key Treatment Descriptions
- **Medicina Homeopática**: "Recupera tu salud abordando la raíz de tus enfermedades."
- **Tratamiento Antitabaco**: "Deja de fumar con una única sesión. Natural y eficaz con bio-frecuencias."
- **Desintoxicación completa**: "Libera tu cuerpo de tóxicos, cargas bacterianas y virales, efectos secundarios de vacunas y Covid persistente."
- **Medicina Familiar**: "Niños, alergias, asmas y trastornos digestivos como intolerancias, etc."

### About the Clinic (ACERCA DE NOSOTROS)
- "Consulta especializada en encontrar la causa de la enfermedad, dando solución a problemas, enfermedades y bloqueos."

---

## 11. Curated Treatment Details (Source Text)
The following texts show the exact branding language for each specific treatment page.

### 11.1 Tratamiento Antitabaco
> **"Si quiere, es fácil dejarlo."**
> "Tratamiento de desintoxicación anulando por completo el efecto adictivo de la nicotina y tóxicos del tabaco."
> - **Methodology**: "La aplicación de bio-resonancia para dejar de fumar se basa en el principio físico de que el cuerpo (sus celulas) se impregnan del humo del tabaco y de esa manera «memorizan» y retienen las frecuencias electromagnéticas... Nuestro tratamiento ayuda al organismo a neutralizar y eliminar estas frecuencias tóxicas."
> - **Features**: 
>   - Eficacia rápida y efectiva (Una sola sesión, de una hora)
>   - Sin efectos secundarios (Sin sustancias químicas)
>   - Desintoxicación completa (Elimina nicotina, alquitranes, cadmio, plomo, arsénico, etc.)
>   - Mejora del bienestar (Mayor energía, mejor respiración)
> - **Key Question**: "¿Quiero o no quiero dejar de fumar? No es necesario tener fuerza de voluntad. Es imprescindible desear / querer dejar de fumar."
> - **MORA Concept**: "Observe cómo las frecuencias armoniosas interactúan y neutralizan las 'toxinas' caóticas, restaurando el equilibrio... Las frecuencias patológicas son invertidas electrónicamente."

### 11.2 Desintoxicación Completa
> **"Desintoxicación avanzada por bio-frecuencias."**
> "La desintoxicación es un proceso natural esencial, pero a menudo sobrecargado por la exposición continua a toxinas... Restaurar este equilibrio es clave para tu salud general y vitalidad."
> - **Identified Toxins**:
>   - Tóxicos Medioambientales (Pinturas, amianto, pesticidas)
>   - Tóxicos Domésticos (Cosméticos, detergentes)
>   - Tóxicos Médicos (Residuos de fármacos, secuelas de vacunas)
>   - Metales Pesados (Plomo, mercurio, amalgamas dentales)
>   - Agentes Biológicos (Bacterias, virus, Covid persistente)
>   - Geopatías y Electrosmog (Wi-Fi, móviles)
>   - Intolerancias y Alergias
>   - Cicatrices (que actúan como focos de interferencia)
>   - Disbiosis Intestinal y Nutricional

### 11.3 Homeopatía
> **"Médico y homeopáta. Se debe tratar al Ser Humano que hay en usted."**
> "Con más de cuarenta años de dedicación a la Medicina, le ofrezco una atención médica profundamente personalizada... Tratar la causa raíz de sus dolencias."
> - **Core Principles**: 
>   - *El Principio de Similitud*: "Lo similar cura lo similar" (Hipócrates, Paracelso y Hahnemann).
>   - *Síntesis profunda*: "Hablaremos de su plano físico, emocional, mental e incluso espiritual... para encontrar el remedio único (simillimum)."
> - **Application Areas**:
>   - Bienestar Emocional y Mental (Ansiedad, depresión, estrés)
>   - Afecciones Crónicas y Recurrentes (Asma, dermatitis, problemas digestivos)
### 11.4 Diagnóstico Médico
> **"Diagnóstico médico completo. Los avances de la medicina electromagnética a su alcance."**
> "En nuestra clínica, cada consulta se fundamenta en un diagnóstico médico completo... integramos la avanzada tecnología de Bio-Resonancia MORA, que revela la raíz del desequilibrio."
> - **Four Pillars**:
>   1. Método No Invasivo (Sin agujas ni molestias).
>   2. Identificación Precisa (Tóxicos, toxinas, alérgenos, patógenos).
>   3. Visión Integral (Cuerpo como un todo interconectado).
>   4. Respuestas (Detecta desequilibrios invisibles para análisis convencionales).
> - **The Science**: "La Bio-resonancia MORA... se fundamenta en un principio clave de la biofísica: cada célula, tejido y órgano emite una frecuencia electromagnética."
>   - Saludable son "vibraciones armónicas". 
>   - Enfermedad (toxinas/estrés) crea "vibraciones inarmónicas o patológicas".
> - **Deep Evaluation**: "Una atención médica de calidad no se mide en minutos, sino en resultados." (Historia médica, historia familiar, historia personal).

### 11.5 Medicina Familiar Integral
> **"Trastornos Digestivos, Intolerancias y Alergias"**
> "Nos especializamos en el abordaje integral de condiciones que afectan significativamente la calidad de vida... orientada a la familia."
> - **Key Areas**:
>   - *Trastornos Digestivos Crónicos*: Síndrome del intestino irritable, dispepsia funcional.
>   - *Intolerancias Alimentarias*: Ayudamos al organismo a asimilar normalmente los alimentos (para que el alimento no provoque síntomas).
>   - *Asma y Alergias Infantiles/Adultos*: Identificar alérgenos y fortalecer el sistema inmunológico.
> - **Family Approach**: "Tratamos a la familia... El núcleo familiar (padres e hijos) sea atendido de forma conjunta."
> - **Post-Vaccine Support**: "Apoyo Integral en Secuelas Post-Vacunas... COVID persistente o síndrome post-COVID, así como nuevas sintomatologías o desequilibrios tras la vacunación."
