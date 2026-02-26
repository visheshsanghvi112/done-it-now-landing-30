import fs from 'fs';

const file = 'c:/Users/gener/Downloads/done-it-now-landing-30/src/data/projects.ts';
const content = fs.readFileSync(file, 'utf8');

// The file format is export const projects = [...];
// Evaluate to get objects
const projectsMatch = content.match(/export const projects = (\[[\s\S]*\]);/);

if (!projectsMatch) {
    console.log('Failed to parse projects.ts');
    process.exit();
}

const projectsStr = projectsMatch[1];
let projects = [];
try {
    projects = eval(projectsStr);
} catch (e) {
    console.log('Eval error');
    process.exit();
}

// Remove the ones user specified
const toRemoveIds = [
    'dialoguedhoom',
    'learnsyntax',
    'v0-vishesh-swb5fss4qno',
    'worldsbyvishesh',
    'vishesh-chatbot',
    'visheshsanghvi',
    'chess-by-vishesh',
    'chatbotspecial',
    'vishesh-portfolio-sphere'
];

let filtered = projects.filter(p => !toRemoveIds.includes(p.id));

// Add the new ones user specified
const newProjects = [
    {
        id: "yugrow",
        name: "YuGrow Pharmacy",
        live: "https://yugrowpharmacy.com/",
        description: "Pharmacy corporate or e-commerce website.",
        stack: ["Web Development", "E-Commerce"],
        category: "Corporate",
        status: "Live",
        year: "2024"
    },
    {
        id: "shapenshades",
        name: "Shape N Shades",
        live: "https://www.shapenshades.com/",
        description: "Online presence for Shape N Shades.",
        stack: ["Web Development"],
        category: "Corporate",
        status: "Live",
        year: "2024"
    },
    {
        id: "pinakin",
        name: "Pinakin",
        live: "https://pinakin.vercel.app/",
        description: "Web application or portfolio for Pinakin.",
        stack: ["Next.js", "React", "Tailwind CSS"],
        category: "Web App",
        status: "Live",
        year: "2024"
    },
    {
        id: "collegex",
        name: "CollegeX",
        live: "https://collegex.vercel.app",
        github: "https://github.com/visheshsanghvi112/collegex",
        description: "Generic tournament management system.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        category: "Web App",
        status: "Live",
        year: "2025"
    },
    {
        id: "johnlee-ecommerce",
        name: "John Lee India Pharma E-Commerce",
        live: "https://johnlee-ecommerce.vercel.app",
        github: "https://github.com/visheshsanghvi112/JohnleeEcommerce",
        description: "Pharma e-commerce application for John Lee India.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        category: "E-Commerce",
        status: "Live",
        year: "2025"
    },
    {
        id: "ravi-captures",
        name: "Ravi Captures",
        live: "https://ravi-captures.vercel.app",
        github: "https://github.com/visheshsanghvi112/ravi-portfolio",
        description: "Photography portfolio mapping to Ravi Captures.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        category: "Portfolio",
        status: "Live",
        year: "2024"
    },
    {
        id: "symbiosis-tournament",
        name: "Symbiosis Tournament",
        live: "https://symbiosis-tournament.vercel.app",
        github: "https://github.com/visheshsanghvi112/badminton_tournament",
        description: "Badminton tournament management system for Symbiosis.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        category: "Web App",
        status: "Live",
        year: "2025"
    }
];

// Combine them
filtered = [...newProjects, ...filtered];

// Write back
fs.writeFileSync(file, `export const projects = ${JSON.stringify(filtered, null, 2)};\n`);
console.log('Update successful');
