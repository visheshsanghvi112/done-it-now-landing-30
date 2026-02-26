import fs from 'fs';

const currentFile = 'c:/Users/gener/Downloads/done-it-now-landing-30/src/data/projects.ts';
const curContent = fs.readFileSync(currentFile, 'utf8');

const matchCur = curContent.match(/export const projects = (\[[\s\S]*\]);/);
let curData = [];
if (matchCur) {
    try {
        // using eval to parse the array of objects properly
        curData = eval(matchCur[1]);
    } catch (e) { }
}

const filtered = curData.filter(p => p.id !== 'johnlee-ecommerce' && !p.id.includes('johnlee'));

fs.writeFileSync(currentFile, `export const projects = ${JSON.stringify(filtered, null, 2)};\n`);
console.log('Removed John Lee');
