import fs from 'fs';
import path from 'path';

const srcFile = path.resolve('c:/Users/gener/Downloads/NextjsPortfolio/lib/projectsData.ts');
const text = fs.readFileSync(srcFile, 'utf8');

// The file is a module, we can extract the array literal easily if we just strip the type annotations and export.
// Or using a simple regex to get the projects array
const match = text.match(/export const projects: RawProject\[\] = (\[[\s\S]*\]);/);
if (match) {
    let arrStr = match[1];
    // evaluate it with new Function after stripping some typescript if needed
    // Since it's pretty plain JS objects inside, new Function might work
    // Actually, there's `github: undefined` which might throw or be fine
    let data;
    try {
        data = new Function('return ' + arrStr)();
    } catch (e) {
        console.error(e);
    }

    if (data) {
        const excludeIds = ['bini', 'binii', 'lets-do-it', 'api-checker'];
        const excludeNames = ['done it now', 'rizz ai', 'api checker', 'thingswedoforlove', 'chesssql game'];
        const filtered = data.filter(p => {
            const id = p.id.toLowerCase();
            const n = p.name.toLowerCase();
            if (excludeIds.includes(id)) return false;
            for (const ex of excludeNames) {
                if (n.includes(ex)) return false;
                if (p.description.toLowerCase().includes('rizz')) return false; // maybe description has rizz
            }
            return true;
        });

        fs.mkdirSync('c:/Users/gener/Downloads/done-it-now-landing-30/src/data', { recursive: true });
        fs.writeFileSync('c:/Users/gener/Downloads/done-it-now-landing-30/src/data/projects.ts', `export const projects = ${JSON.stringify(filtered, null, 2)};\n`);
        console.log('Filtered projects written.');
    }
} else {
    console.log('Regex match failed');
}
