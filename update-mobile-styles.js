#!/usr/bin/env node

/**
 * Mobile View Optimization Script for Patient Education Pages
 * 
 * This script automatically updates all patient education pages with mobile-responsive styles.
 * It applies consistent font sizes and spacing optimizations for mobile views.
 */

const fs = require('fs');
const path = require('path');

// List of pages already completed (skip these)
const completedPages = [
  'cosmetic-general-dentistry',
  'bonding',
  'veneers',
  'bridges',
  'teeth-whitening',
  'dental-crowns',
  'dental-implants',
  'dental-fillings',
  'root-canal-treatment',
  'periodontal-therapy',
  'extractions',
  'wisdom-teeth-removal',
  'bone-grafting',
  'tooth-contouring',
  'dental-cleanings'
];

// Base directory for patient education pages
const baseDir = path.join(__dirname, 'src', 'app', 'patient-education');

// Replacement patterns (same as what was applied manually)
const replacements = [
  // Hero Section
  {
    search: /      {\/\* Hero Section \*\/}\s*\n      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">/g,
    replace: '      {/* Hero Section */}\n      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">'
  },
  {
    search: /          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style=\{\{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: \'Montserrat, Arial, Helvetica, sans-serif\' }}>'
  },
  {
    search: /          <p className="text-xl md:text-2xl text-white\/90 max-w-3xl mx-auto" style=\{\{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '          <p className="text-[16px] md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: \'Hind, Arial, Helvetica, sans-serif\' }}>'
  },
  
  // Content Sections
  {
    search: /      <section className="py-20 bg-white">/g,
    replace: '      <section className="py-10 md:py-20 bg-white">'
  },
  {
    search: /            <h2 className="text-3xl font-bold text-gray-900 mb-6" style=\{\{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '            <h2 className="text-[27px] md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: \'Montserrat, Arial, Helvetica, sans-serif\' }}>'
  },
  {
    search: /            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style=\{\{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '            <h3 className="text-[22px] md:text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: \'Montserrat, Arial, Helvetica, sans-serif\' }}>'
  },
  {
    search: /            <p className="text-lg leading-relaxed text-gray-700 mb-6" style=\{\{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '            <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: \'Hind, Arial, Helvetica, sans-serif\' }}>'
  },
  {
    search: /            <p className="text-lg leading-relaxed text-gray-700 mb-4" style=\{\{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '            <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: \'Hind, Arial, Helvetica, sans-serif\' }}>'
  },
  {
    search: /              <li className="text-gray-700">/g,
    replace: '              <li className="text-gray-700 text-[16px] md:text-base">'
  },
  
  // Related Articles Section
  {
    search: /      <section className="py-20 bg-gray-50">/g,
    replace: '      <section className="py-10 md:py-20 bg-gray-50">'
  },
  {
    search: /          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" style=\{\{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' \}\}>\s*\n\s*Related Articles\s*\n\s*<\/h2>/g,
    replace: '          <h2 className="text-[27px] md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center" style={{ fontFamily: \'Montserrat, Arial, Helvetica, sans-serif\' }}>\n            Related Articles\n          </h2>'
  },
  {
    search: /              <h3 className="text-xl font-bold text-gray-900 mb-3" style=\{\{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '              <h3 className="text-[22px] md:text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: \'Montserrat, Arial, Helvetica, sans-serif\' }}>'
  },
  {
    search: /              <p className="text-gray-600 mb-4" style=\{\{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '              <p className="text-[16px] text-gray-600 mb-4" style={{ fontFamily: \'Hind, Arial, Helvetica, sans-serif\' }}>'
  },
  {
    search: /                className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"/g,
    replace: '                className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors text-[15px] md:text-base"'
  },
  
  // CTA Section
  {
    search: /      <section className="py-20 bg-primary">/g,
    replace: '      <section className="py-10 md:py-20 bg-primary">'
  },
  {
    search: /          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style=\{\{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '          <h2 className="text-[27px] md:text-4xl font-bold text-white mb-6" style={{ fontFamily: \'Montserrat, Arial, Helvetica, sans-serif\' }}>'
  },
  {
    search: /          <p className="text-xl text-white\/90 mb-8 max-w-2xl mx-auto" style=\{\{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '          <p className="text-[16px] md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: \'Hind, Arial, Helvetica, sans-serif\' }}>'
  },
  {
    search: /            <Link href="\/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style=\{\{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: \'Hind, Arial, Helvetica, sans-serif\' }}>'
  },
  {
    search: /            <a href="tel:\(209\) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style=\{\{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' \}\}>/g,
    replace: '            <a href="tel:(209) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: \'Hind, Arial, Helvetica, sans-serif\' }}>'
  }
];

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply all replacements
    replacements.forEach(({ search, replace }) => {
      if (content.match(search)) {
        content = content.replace(search, replace);
        modified = true;
      }
    });
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🚀 Mobile View Optimization Script');
  console.log('=====================================\n');
  
  if (!fs.existsSync(baseDir)) {
    console.error(`❌ Directory not found: ${baseDir}`);
    process.exit(1);
  }
  
  // Get all directories in patient-education
  const allDirs = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  // Filter out completed pages
  const remainingDirs = allDirs.filter(dir => !completedPages.includes(dir));
  
  console.log(`📊 Found ${allDirs.length} total pages`);
  console.log(`✅ Already completed: ${completedPages.length} pages`);
  console.log(`🔄 To process: ${remainingDirs.length} pages\n`);
  
  let processedCount = 0;
  let skippedCount = 0;
  
  // Process each remaining directory
  remainingDirs.forEach((dir, index) => {
    const pagePath = path.join(baseDir, dir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      console.log(`[${index + 1}/${remainingDirs.length}] Processing: ${dir}`);
      const wasModified = processFile(pagePath);
      
      if (wasModified) {
        processedCount++;
        console.log(`   ✓ Updated successfully`);
      } else {
        skippedCount++;
        console.log(`   ⊘ No changes needed (already optimized)`);
      }
    } else {
      skippedCount++;
      console.log(`[${index + 1}/${remainingDirs.length}] ⚠️  Skipping ${dir} (page.tsx not found)`);
    }
  });
  
  console.log('\n=====================================');
  console.log('✨ Batch Update Complete!');
  console.log('=====================================');
  console.log(`✅ Successfully updated: ${processedCount} pages`);
  console.log(`⊘ Skipped/No changes: ${skippedCount} pages`);
  console.log(`📱 Total mobile-optimized pages: ${completedPages.length + processedCount}/59`);
  console.log('\n🎉 All patient education pages are now mobile-optimized!');
}

// Run the script
main();

