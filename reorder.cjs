const fs = require('fs');
const path = require('path');

const projectsPath = path.join(__dirname, 'src', 'data', 'projects.ts');
let content = fs.readFileSync(projectsPath, 'utf8');

// Parse the projects array
const match = content.match(/export const projects = (\[[\s\S]*\]);/);
if (!match) {
    console.error("Could not find projects array");
    process.exit(1);
}

const projects = eval(match[1]);

const idsToExtract = [
    'ambica',
    'pulse-robot',
    'worldsbyvishesh',
    'bakerdavis', // bdindia.in
    'shapenshades'
];

const newProjects = [
    {
        id: "mr-tracking",
        name: "MR Tracking",
        live: "https://mr-tracking.vercel.app/",
        description: "Advanced tracking and management dashboard.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        category: "Web App",
        status: "Live",
        year: "2025"
    },
    {
        id: "clean-photographer-portfolio",
        name: "Clean Photographer Portfolio",
        live: "https://clean-photographer-portfolio.vercel.app/",
        description: "A minimalist, aesthetic portfolio template for professional photographers.",
        stack: ["React", "Tailwind CSS", "Framer Motion"],
        category: "Portfolio",
        status: "Live",
        year: "2025"
    }
];

const extracted = [];
const remaining = [];

projects.forEach(p => {
    if (idsToExtract.includes(p.id)) {
        extracted.push(p);
    } else {
        remaining.push(p);
    }
});

// Sort extracted intentionally based on the desired order
const orderedExtracted = [
    extracted.find(p => p.id === 'ambica'),
    extracted.find(p => p.id === 'pulse-robot'),
    extracted.find(p => p.id === 'worldsbyvishesh'),
    extracted.find(p => p.id === 'bakerdavis'),
    extracted.find(p => p.id === 'shapenshades')
].filter(Boolean);

const finalArray = [...orderedExtracted, ...newProjects, ...remaining];

const newContent = `export const projects = ${JSON.stringify(finalArray, null, 2)};\n`;

fs.writeFileSync(projectsPath, newContent);
console.log("Projects updated successfully!");
