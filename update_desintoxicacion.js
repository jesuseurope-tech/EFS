const fs = require('fs');

const targetFilePath = '/Users/jmx/Documents/PROJECTS/Consulta Website upgrade 2/src/pages/desintoxicacion/index.astro';

let content = fs.readFileSync(targetFilePath, 'utf8');

// Replace standard links with TreatmentCard grid
content = content.replace(/<div class="grid grid-cols-1 md:grid-cols-4 gap-8">[\s\S]*?(?=<\/section>)/, `<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Item 1 -->
      <TreatmentCard
        title="Medicina Homeopática"
        description="Recupera tu salud abordando la raíz de tus enfermedades."
        linkUrl="/homeopatia/"
        iconHtml={\`<svg class="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path></svg>\`}
      />
      <!-- Item 2 -->
      <TreatmentCard
        title="Tratamiento Antitabaco"
        description="Deja de fumar con una única sesión. Natural y eficaz con bio-frecuencias."
        linkUrl="/dejar-de-fumar/"
        iconHtml={\`<svg class="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 304c0 8.8 7.2 16 16 16h117.5l-96-96H112c-8.8 0-16 7.2-16 16v64zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-105.9 0-192-86.1-192-192 0-41.4 13.3-79.7 35.7-111.1l267.4 267.4C335.7 434.7 297.4 448 256 448zm45.2-192H384v32h-50.8l-32-32zm111.1 111.1L365.2 320H400c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H269.2L144.9 99.7C176.3 77.3 214.6 64 256 64c105.9 0 192 86.1 192 192 0 41.4-13.3 79.7-35.7 111.1zM320.6 128c-15.6 0-28.6-11.2-31.4-25.9-.7-3.6-4-6.1-7.7-6.1h-16.2c-5 0-8.7 4.5-8 9.4 4.6 30.9 31.2 54.6 63.3 54.6 15.6 0 28.6 11.2 31.4 25.9.7 3.6 4 6.1 7.7 6.1h16.2c5 0 8.7-4.5 8-9.4-4.6-30.9-31.2-54.6-63.3-54.6z"></path></svg>\`}
      />
      <!-- Item 3 -->
      <TreatmentCard
        title="Desintoxicación completa"
        description="Libera tu cuerpo de tóxicos, cargas bacterianas y virales, efectos secundarios de vacunas y Covid persistente."
        linkUrl="/desintoxicacion/"
        iconHtml={\`<svg class="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"></path></svg>\`}
      />
      <!-- Item 4 -->
      <TreatmentCard
        title="Medicina Familiar"
        description="Niños, alergias, asmas y trastornos digestivos como intolerancias, etc."
        linkUrl="/medicina-familiar/"
        iconHtml={\`<svg class="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M496 256c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm-176-80c48.5 0 88-39.5 88-88S368.5 0 320 0s-88 39.5-88 88 39.5 88 88 88zM59.8 364c10.2 15.3 29.3 17.8 42.9 9.8 16.2-9.6 56.2-31.7 105.3-48.6V416h224v-90.7c49.1 16.8 89.1 39 105.3 48.6 13.6 8 32.7 5.3 42.9-9.8l17.8-26.7c8.8-13.2 7.6-34.6-10-45.1-11.9-7.1-29.7-17-51.1-27.4-28.1 46.1-99.4 17.8-87.7-35.1C409.3 217.2 365.1 208 320 208c-57 0-112.9 14.5-160 32.2-.2 40.2-47.6 63.3-79.2 36-11.2 6-21.3 11.6-28.7 16-17.6 10.5-18.8 31.8-10 45.1L59.8 364zM368 344c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-96-96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-160 8c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm512 192H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>\`}
      />
    </div>
  `);

// Ensure proper import replacement
content = content.replace(/import MainTreatments from "\.\.\/\.\.\/components\/MainTreatments\.astro";/, 'import ContactSection from "../../components/ContactSection.astro";\nimport TreatmentCard from "../../components/TreatmentCard.astro";');

content = content.replace(/import ContactSection from "\.\.\/\.\.\/components\/ContactSection\.astro";\n/, '');

fs.writeFileSync(targetFilePath, content, 'utf8');
console.log('Update complete.');
