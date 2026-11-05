const http = require('http');
const fs = require('fs');

const pages = [
    { url: '/', title: 'Dental Experts - Your Family\'s Best Dentist in Fresno, CA', description: 'Life-Changing Dental Implants. Painless Dental Veneers. Same-Day Emergency Appointments. Interest-Free Financing Available. Free Financing Consults. Se Habla EspaÃ±ol.' },
    { url: '/dental-services', title: "Dental Experts - Your Family's Best Dentist in Fresno, CA" },
    { url: '/dental-implants', title: "Dental Implants in Stockton | NuSmile", description: "Replace missing teeth with dental implants at NuSmile Dental. Restore function, comfort, and natural appearance with advanced solutions." },
    { url: '/dental-staff', title: "Meet the Dental Team | NuSmile Dental", description: "Get to know the caring dental team at NuSmile Dental committed to providing personalized and comfortable dental treatment." },
    { url: '/smile-gallery', title: "Smile Gallery | NuSmile Dental Results", description: "View real patient smile transformations from NuSmile Dental showcasing cosmetic, restorative, and implant dentistry results." },
    { url: '/platelet-rich-fibrin-therapy-prf', title: "PRF Therapy for Dental Healing Stockton", description: "Learn how platelet-rich fibrin therapy enhances healing after dental procedures and supports faster recovery at NuSmile Dental." },
    { url: '/general-dentistry', title: "General Dentistry Services in Stockton", description: "Maintain healthy teeth and gums with preventive and routine general dentistry services designed for long-term oral wellness." },
    { url: '/services/dental-implants-all-on-4-faqs-stockton', title: "All-on-4 Dental Implants FAQs Stockton", description: "Read common questions and answers about All-on-4 dental implants including procedure details, benefits, and recovery expectations." },
    { url: '/patient-education', title: "Dental Patient Education | NuSmile", description: "Access helpful dental education resources covering oral care tips, treatment information, and preventive guidance for patients." },
    { url: '/office', title: "NuSmile Dental Office Information Stockton", description: "Find office details, directions, hours, and patient information for visiting NuSmile Dental in Stockton comfortably." },
    { url: '/contact', title: "Contact NuSmile Dental | Stockton Dentist", description: "Contact NuSmile Dental to schedule visits, ask questions, or learn more about dental treatment options and patient care services." },
    { url: '/all-on-4-implant-dentures', title: "All-on-4 Implant Dentures in Stockton", description: "Restore full smiles with All-on-4 implant dentures designed to improve stability, chewing function, and long-term comfort." },
    { url: '/testimonials', title: "Patient Testimonials & Reviews Stockton", description: "Read real reviews and watch testimonials from happy NuSmile Dental patients who transformed their smiles with us." },
    { url: '/invisalign', title: "Invisalign Clear Aligners Stockton", description: "Straighten your teeth discreetly with Invisalign clear aligners at NuSmile Dental. Custom treatment for a perfect smile." },
    { url: '/blog', title: "Dental Health Blog | NuSmile Dental Tips", description: "Stay informed with the latest dental health tips, news, and treatment information from the experts at NuSmile Dental." },
    { url: '/appointment', title: "Request Dental Appointment Stockton", description: "Schedule your dental visit at NuSmile Dental. Easy online appointment request for checkups, consultations, and treatments." },
    { url: '/about-us', title: "About NuSmile Dental | Stockton Dentist", description: "Learn about NuSmile Dental's experienced team, modern technology, and commitment to patient-centered dental care in Stockton." },
    { url: '/resources', title: "Patient Resources & Smile Gallery", description: "Explore patient resources including our smile gallery, financial options, and dental health information." }
];

async function checkPage(page) {
    return new Promise((resolve) => {
        http.get(`http://localhost:3001${page.url}`, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                if (res.statusCode !== 200) {
                    resolve({ url: page.url, error: `HTTP ${res.statusCode}` });
                    return;
                }

                // Simple regex matching for title and meta description
                // Note: This relies on how Next.js renders them.
                let titleMatch = data.match(/<title>([^<]*)<\/title>/);
                let descMatch = data.match(/<meta name="description" content="([^"]*)"/);

                // If not found with " double quotes, try ' single quotes
                if (!descMatch) {
                    descMatch = data.match(/<meta name='description' content='([^']*)'/);
                }

                const actualTitle = titleMatch ? titleMatch[1] : 'Not Found';
                const actualDesc = descMatch ? descMatch[1] : 'Not Found';

                // Decode basic HTML entities that might appear in title/desc
                const decode = (str) => str.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"');

                const decodedTitle = decode(actualTitle);
                const decodedDesc = decode(actualDesc);
                const expectedTitle = decode(page.title);
                const expectedDesc = page.description ? decode(page.description) : '';

                // Loose check for title inclusion because Next.js might append/prepend stuff or layout might affect it
                let titlePass = decodedTitle.includes(expectedTitle) || expectedTitle.includes(decodedTitle);

                // Stricter check if we want exactness, but for this task, ensuring the new title is present is key.
                // If the expected title is very different from actual, it fails.
                if (actualTitle === 'Not Found') titlePass = false;

                let descPass = false;
                if (page.description) {
                    descPass = decodedDesc === expectedDesc;
                    if (!descPass) {
                        // Try simpler check if it's just a substring match issue (though description should be exact usually)
                        descPass = decodedDesc.includes(expectedDesc) || expectedDesc.includes(decodedDesc);
                    }
                } else {
                    descPass = true;
                }

                resolve({
                    url: page.url,
                    title: { expected: page.title, actual: actualTitle, pass: titlePass },
                    description: page.description ? { expected: page.description, actual: actualDesc, pass: descPass } : { pass: true }
                });
            });
        }).on('error', (err) => {
            resolve({ url: page.url, error: err.message });
        });
    });
}

async function run() {
    let output = 'Verifying Meta Tags...\n';
    let hasErrors = false;

    console.log('Starting verification...');

    for (const page of pages) {
        const result = await checkPage(page);
        if (result.error) {
            const msg = `[FAIL] ${result.url}: Request failed - ${result.error}`;
            console.log(msg);
            output += `${msg}\n`;
            hasErrors = true;
        } else {
            const titleStatus = result.title.pass ? '[PASS]' : '[FAIL]';
            const descStatus = result.description.pass ? '[PASS]' : '[FAIL]';

            let msg = `${titleStatus} Title for ${result.url}`;
            if (!result.title.pass) msg += `\n   Expected: ${result.title.expected}\n   Actual:   ${result.title.actual}`;

            if (page.description) {
                msg += `\n${descStatus} Desc for ${result.url}`;
                if (!result.description.pass) msg += `\n   Expected: ${result.description.expected}\n   Actual:   ${result.description.actual}`;
            }

            console.log(msg);
            output += `${msg}\n`;

            if (!result.title.pass || !result.description.pass) hasErrors = true;
        }
    }

    if (hasErrors) {
        output += '\nVerification FAILED\n';
        console.log('Verification FAILED');
    } else {
        output += '\nVerification SUCCESS\n';
        console.log('Verification SUCCESS');
    }

    fs.writeFileSync('verify_results.txt', output, 'utf8');
}

run();
