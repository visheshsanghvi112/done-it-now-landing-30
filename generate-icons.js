import sharp from 'sharp';
import fs from 'fs';

async function generate() {
    const svgBuffer = fs.readFileSync('./public/favicon.svg');

    // favicon.png
    await sharp(svgBuffer)
        .resize(32, 32)
        .png()
        .toFile('./public/favicon.png');

    // apple-touch-icon.png
    await sharp(svgBuffer)
        .resize(180, 180)
        .png()
        .toFile('./public/apple-touch-icon.png');

    // og-image.png (larger background wrapper)
    await sharp({
        create: {
            width: 1200,
            height: 630,
            channels: 4,
            background: { r: 15, g: 23, b: 42, alpha: 1 } // Tailwind slate-900
        }
    })
        .composite([
            { input: await sharp(svgBuffer).resize(400, 400).toBuffer(), gravity: 'center' }
        ])
        .png()
        .toFile('./public/og-image.png');

    // remove the old ico
    if (fs.existsSync('./public/favicon.ico')) {
        fs.unlinkSync('./public/favicon.ico');
    }

    console.log('Icons generated successfully.');
}

generate().catch(console.error);
