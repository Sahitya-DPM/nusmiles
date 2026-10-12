const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public');

// Supported extensions
const extensions = ['.jpg', '.jpeg', '.png', '.webp'];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

async function optimizeImages() {
    const allFiles = getAllFiles(targetDir);
    const imageFiles = allFiles.filter(file => extensions.includes(path.extname(file).toLowerCase()));

    console.log(`Found ${imageFiles.length} images to optimize.`);

    let processedCount = 0;
    let totalSavedBytes = 0;

    for (const file of imageFiles) {
        const ext = path.extname(file).toLowerCase();
        const tempFile = file + '.temp';

        try {
            const originalStats = fs.statSync(file);
            let pipeline = sharp(file);

            if (ext === '.jpg' || ext === '.jpeg') {
                pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
            } else if (ext === '.png') {
                pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
            } else if (ext === '.webp') {
                pipeline = pipeline.webp({ quality: 80 });
            }

            await pipeline.toFile(tempFile);

            const newStats = fs.statSync(tempFile);

            if (newStats.size < originalStats.size) {
                fs.unlinkSync(file);
                fs.renameSync(tempFile, file);
                const saved = originalStats.size - newStats.size;
                totalSavedBytes += saved;
                console.log(`Optimized: ${path.basename(file)} (saved ${(saved / 1024).toFixed(2)} KB)`);
            } else {
                // New file is larger or same, discard temp
                fs.unlinkSync(tempFile);
                console.log(`Skipped: ${path.basename(file)} (already optimized or larger)`);
            }

        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
            if (fs.existsSync(tempFile)) {
                try { fs.unlinkSync(tempFile); } catch (e) { }
            }
        }

        processedCount++;
        if (processedCount % 10 === 0) {
            console.log(`Progress: ${processedCount}/${imageFiles.length}`);
        }
    }

    console.log(`\nOptimization Complete!`);
    console.log(`Total space saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages();
