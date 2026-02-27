const fs = require('fs');

const targetFilePath = '/Users/jmx/Documents/PROJECTS/Consulta Website upgrade 2/src/pages/dejar-de-fumar/index.astro';

let content = fs.readFileSync(targetFilePath, 'utf8');

// Replace standard links with TreatmentCard grid
// Not applying this since earlier apply was somewhat successful except head
// We will simply ensure the head is clean

content = content.replace(/import ContactSection from "\.\.\/\.\.\/components\/ContactSection\.astro";\n/, '');

fs.writeFileSync(targetFilePath, content, 'utf8');
console.log('Update complete.');
