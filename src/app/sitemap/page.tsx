import Link from 'next/link';

export default function SitemapPage() {
  const routes = [
    { path: '/', name: 'Home' },
    { path: '/about-us', name: 'About Us' },
    { path: '/appointment', name: 'Appointment' },
    { path: '/contact', name: 'Contact' },
    { path: '/dental-services', name: 'Dental Services' },
    { path: '/dental-staff', name: 'Dental Staff' },
    { path: '/office', name: 'Office' },
    { path: '/testimonials', name: 'Testimonials' },
    { path: '/smile-gallery', name: 'Smile Gallery' },
    { path: '/resources', name: 'Resources' },
    { path: '/blog', name: 'Blog' },
    { path: '/general-dentistry', name: 'General Dentistry' },
    { path: '/dental-implants', name: 'Dental Implants' },
    { path: '/all-on-4-implant-dentures', name: 'All-on-4 Implant Dentures' },
    { path: '/invisalign', name: 'Invisalign' },
    { path: '/platelet-rich-fibrin-therapy-prf', name: 'Platelet Rich Fibrin Therapy (PRF)' },
    { path: '/patient-education', name: 'Patient Education' },
    { path: '/patient-education/about-pediatric-dentistry', name: 'About Pediatric Dentistry' },
    { path: '/patient-education/aging-and-oral-health', name: 'Aging and Oral Health' },
    { path: '/patient-education/air-abrasion', name: 'Air Abrasion' },
    { path: '/patient-education/anesthesia-wand', name: 'Anesthesia Wand' },
    { path: '/patient-education/antibiotic-premedication', name: 'Antibiotic Premedication' },
    { path: '/patient-education/bad-breath', name: 'Bad Breath' },
    { path: '/patient-education/blood-thinners-and-oral-surgery', name: 'Blood Thinners and Oral Surgery' },
    { path: '/patient-education/bonding', name: 'Bonding' },
    { path: '/patient-education/bone-grafting', name: 'Bone Grafting' },
    { path: '/patient-education/bridges', name: 'Bridges' },
    { path: '/patient-education/cleft-lip-and-palate', name: 'Cleft Lip and Palate' },
    { path: '/patient-education/cone-beam-ct-imaging', name: 'Cone Beam CT Imaging' },
    { path: '/patient-education/cosmetic-general-dentistry', name: 'Cosmetic General Dentistry' },
    { path: '/patient-education/dental-cleanings', name: 'Dental Cleanings' },
    { path: '/patient-education/dental-crowns', name: 'Dental Crowns' },
    { path: '/patient-education/dental-fillings', name: 'Dental Fillings' },
    { path: '/patient-education/dental-implants', name: 'Dental Implants' },
    { path: '/patient-education/digital-dental-impressions', name: 'Digital Dental Impressions' },
    { path: '/patient-education/digital-x-rays', name: 'Digital X-Rays' },
    { path: '/patient-education/early-orthodontic-treatment', name: 'Early Orthodontic Treatment' },
    { path: '/patient-education/educational-videos', name: 'Educational Videos' },
    { path: '/patient-education/emergency-care', name: 'Emergency Care' },
    { path: '/patient-education/endodontics', name: 'Endodontics' },
    { path: '/patient-education/extractions', name: 'Extractions' },
    { path: '/patient-education/fluoride-and-your-child', name: 'Fluoride and Your Child' },
    { path: '/patient-education/gum-emergencies', name: 'Gum Emergencies' },
    { path: '/patient-education/how-to-brush-and-floss', name: 'How to Brush and Floss' },
    { path: '/patient-education/how-to-prevent-cavities', name: 'How to Prevent Cavities' },
    { path: '/patient-education/interdental-cleaning-devices', name: 'Interdental Cleaning Devices' },
    { path: '/patient-education/intraoral-camera', name: 'Intraoral Camera' },
    { path: '/patient-education/laser-decay-diagnostics', name: 'Laser Decay Diagnostics' },
    { path: '/patient-education/laser-dentistry', name: 'Laser Dentistry' },
    { path: '/patient-education/mouthwash', name: 'Mouthwash' },
    { path: '/patient-education/nitrous-oxide-for-children', name: 'Nitrous Oxide for Children' },
    { path: '/patient-education/oral-health', name: 'Oral Health' },
    { path: '/patient-education/oral-hygiene', name: 'Oral Hygiene' },
    { path: '/patient-education/oral-hygiene-for-kids', name: 'Oral Hygiene for Kids' },
    { path: '/patient-education/oral-surgery', name: 'Oral Surgery' },
    { path: '/patient-education/orthodontic-emergencies', name: 'Orthodontic Emergencies' },
    { path: '/patient-education/orthodontics', name: 'Orthodontics' },
    { path: '/patient-education/pediatric-dentistry', name: 'Pediatric Dentistry' },
    { path: '/patient-education/periodontal-therapy', name: 'Periodontal Therapy' },
    { path: '/patient-education/pregnancy-and-your-childs-developing-teeth', name: 'Pregnancy and Your Child\'s Developing Teeth' },
    { path: '/patient-education/root-canal-faqs', name: 'Root Canal FAQs' },
    { path: '/patient-education/root-canal-treatment', name: 'Root Canal Treatment' },
    { path: '/patient-education/same-day-crowns', name: 'Same Day Crowns' },
    { path: '/patient-education/sealants', name: 'Sealants' },
    { path: '/patient-education/sedation-dentistry', name: 'Sedation Dentistry' },
    { path: '/patient-education/sleep-apnea-in-children', name: 'Sleep Apnea in Children' },
    { path: '/patient-education/space-maintainers', name: 'Space Maintainers' },
    { path: '/patient-education/technology', name: 'Technology' },
    { path: '/patient-education/teeth-whitening', name: 'Teeth Whitening' },
    { path: '/patient-education/tooth-contouring', name: 'Tooth Contouring' },
    { path: '/patient-education/tooth-pain', name: 'Tooth Pain' },
    { path: '/patient-education/toothpaste', name: 'Toothpaste' },
    { path: '/patient-education/thumb-sucking', name: 'Thumb Sucking' },
    { path: '/patient-education/traumatic-dental-injuries', name: 'Traumatic Dental Injuries' },
    { path: '/patient-education/veneers', name: 'Veneers' },
    { path: '/patient-education/wisdom-teeth-removal', name: 'Wisdom Teeth Removal' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Site Map</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route.path}>
                <Link 
                  href={route.path}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

