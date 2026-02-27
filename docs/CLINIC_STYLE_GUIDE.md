# Clinic Styling & Modernization Guide

This guide outlines the design philosophy and best practices for modernizing the Consulta Médica website. As a serious medical clinic handling complex diagnostic and therapeutic procedures, the digital interface must reflect trust, stability, cleanliness, and professionalism.

## 1. Core Philosophy: "Plain, Matte, and Purposeful"

The design should pivot away from "viby" or overly energetic web trends (like heavy glassmorphism, bouncy animations, or excessive gradients) and lean entirely into a **matte, flat, and highly structured aesthetic**. 

*   **Trust through Stability**: A medical patient is seeking reassurance. The UI should not distract; it should comfort through predictability.
*   **The "Matte" Aesthetic**: Colors should feel soft and grounded, not glowing or neon. Surfaces should be flat with subtle borders, prioritizing crisp typography over visual flair.

## 2. Color Application

While the system has a complete palette, *how* we apply those colors determines the clinic's tone.

*   **Heavy Reliance on Neutrals**: 
    *   Use `--color-brand-surface` (`#F8FAFC` - Slate 50) as the primary background for content cards or varied sections. It prevents eye strain compared to stark white.
    *   Use `--color-brand-white` (`#FFFFFF`) to highlight the most critical reading content.
*   **Primary Anchors**:
    *   `--color-brand-primary` (`#172550` - Dark Navy) is the anchor. It should be used for all headers, high-level navigation, and primary text that needs weight. Navy implies authority, science, and calm.
*   **Reserved Action Colors**:
    *   `--color-brand-secondary` (`#158EC7` - Cyan) and `--color-brand-accent` (`#FA9604` - Orange) must be used **sparingly**. They are solely for Calls to Action (CTAs), like "Pedir Cita" buttons, or tiny indicators (like icons). Do not use them as large background sections.

## 3. Typography Rules

Legibility is non-negotiable for medical explanations.

*   **Headings (Montserrat)**: Keep them clean. While uppercase is currently used, consider transitioning to Sentence Case for longer subheadings to improve approachability. Use Uppercase only for short, definitive labels (e.g., "TRATAMIENTOS", "UBICACIÓN").
*   **Body (Open Sans)**: Use generous line height (e.g., `leading-relaxed` or `leading-loose`) and comfortable font sizes (minimum `16px` or `text-base` for desktop). 
*   **Contrast**: Body text should be `--color-brand-text` (`#3B3B3B`). Avoid pure black for paragraphs as it creates too much contrast on white screens and can cause reading fatigue.

## 4. Surfaces, Depth & Borders

To achieve the "Matte" look:

*   **Remove Heavy Shadows**: Replace deep (`shadow-lg`, `shadow-xl`) drop shadows with flat, 1px borders using `--color-brand-muted` (`#64748B`) or very subtle, soft shadows (`shadow-sm`).
*   **Rounded Corners**: Keep border radii small and professional. Use `rounded` (4px) or `rounded-md` (6px). Avoid overly pill-shaped buttons or fully rounded cards (`rounded-3xl`), as they feel too playful.
*   **Separation**: Use subtle divider lines (`<hr class="border-slate-200">`) to organize content rather than floating boxes.

## 5. Spacing ("The Clinical Whitespace")

In medical design, whitespace equals hygiene, clarity, and focus.

*   **Generous Padding**: Sections should have massive padding (`py-16`, `py-24`). Do not cram paragraphs next to images. 
*   **Breathing Room**: Give headers room to breathe before the body text begins (`mb-6` or `mb-8`).

## 6. Imagery

*   **Authenticity**: If using photography, it must look authentic. Avoid stock models smiling unnaturally. Use high-quality, evenly lit images of the actual clinic, equipment, or abstract representations of science/health.
*   **Treatment**: Apply a very subtle desaturation or a uniform matte filter to images if they look too vibrant or clash with the Navy/Slate color scheme. 

## 7. Motion and Animation

*   **Strictly Functional**: Animations should only occur to confirm a user action (e.g., a button darkening on hover) or to ease content into view on the first load (`fade-in`).
*   **No "Springs"**: Avoid bouncy, elastic bezier curves. Use standard, linear, or ease-in-out transitions (`duration-200 ease-in-out`).

---
**Summary Checklist for New Devs:**
1. [ ] Is the background mostly white/slate?
2. [ ] Are the headers Navy?
3. [ ] Are there zero gradients or heavy shadows?
4. [ ] Is the orange/cyan reserved ONLY for buttons/links?
5. [ ] Does the page feel like a clean, well-lit doctor's office?
