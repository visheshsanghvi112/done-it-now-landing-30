import fs from 'fs';

const originalFile = 'c:/Users/gener/Downloads/NextjsPortfolio/lib/projectsData.ts';
const currentFile = 'c:/Users/gener/Downloads/done-it-now-landing-30/src/data/projects.ts';

const origContent = fs.readFileSync(originalFile, 'utf8');
const curContent = fs.readFileSync(currentFile, 'utf8');

// The file format is export const projects = [...];
const match = origContent.match(/export const projects: RawProject\[\] = (\[[\s\S]*\]);/);
let origData = [];
if (match) {
    try {
        origData = new Function('return ' + match[1])();
    } catch (e) { }
}

const matchCur = curContent.match(/export const projects = (\[[\s\S]*\]);/);
let curData = [];
if (matchCur) {
    try {
        curData = eval(matchCur[1]);
    } catch (e) { }
}

// Ensure convrtai is in curData if it exists in origData
const convrtaiProj = origData.find(p => p.id === 'convrtai');
if (convrtaiProj && !curData.some(p => p.id === 'convrtai')) {
    curData.push(convrtaiProj);
}

// Bring back worldsbyvishesh
const worldsProj = origData.find(p => p.id === 'worldsbyvishesh');
if (worldsProj && !curData.some(p => p.id === 'worldsbyvishesh')) {
    curData.push(worldsProj);
}

fs.writeFileSync(currentFile, `export const projects = ${JSON.stringify(curData, null, 2)};\n`);
console.log('Restored worldsbyvishesh and added convrtai');
