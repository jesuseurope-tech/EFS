---
description: Website Builder Agent - SOP for creating or modifying website features
---
# Website Builder Workflow

Use this workflow to ensure high-fidelity development consistent with existing brand standards.

1. **Brand Alignment**: Consult `/Users/jmx/Documents/PROJECTS/Consulta Website upgrade 2/src/styles/global.css` for `--color-brand-*` and `--font-*`.
2. **Modular Components**:
   - Use `<HeroSection />` for page headers.
   - Use `<WaveDivider />` for section transitions.
   - Use `<DoctorProfileCard />` for team members.
   - Use `<TreatmentCard />` for clinical service grids.
3. **i18n Parity**: If a Spanish page is created, create its English counterpart in `src/pages/en/`.
4. **Validation**:
// turbo
`npm run build`
5. **Sync**:
// turbo
`git add . && git commit -m "feat: [feature name]" && git push origin development`
