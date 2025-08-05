'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function SameDayCrownsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Same Day Crowns
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced CAD/CAM technology for custom dental crowns in a single visit
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link href="/patient-education" className="text-gray-500 hover:text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Patient Education
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Same Day Crowns
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                What are Same Day Crowns?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Same day crowns, also known as CEREC crowns, are custom-made dental restorations that can be designed, fabricated, and placed in a single dental visit. This revolutionary technology uses advanced CAD/CAM (Computer-Aided Design/Computer-Aided Manufacturing) systems to create precise, high-quality crowns without the need for multiple appointments or temporary restorations.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The process combines digital scanning, computer-aided design, and in-office milling to create beautiful, durable crowns that match your natural teeth perfectly. This technology eliminates the traditional two-visit process and provides immediate restoration of your tooth's function and appearance.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How Same Day Crowns Work
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The same day crown process involves several advanced steps:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Digital scanning of your tooth and surrounding area</li>
                <li className="text-gray-700">Computer-aided design of your custom crown</li>
                <li className="text-gray-700">Selection of ceramic material and color matching</li>
                <li className="text-gray-700">Precise milling of the crown in-office</li>
                <li className="text-gray-700">Custom fitting and adjustments</li>
                <li className="text-gray-700">Final placement and bonding</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Advantages of Same Day Crowns
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Same day crowns offer numerous benefits over traditional crown procedures:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Single Visit:</strong> Complete treatment in one appointment</li>
                <li className="text-gray-700"><strong>No Temporary Crowns:</strong> Eliminates the need for temporary restorations</li>
                <li className="text-gray-700"><strong>Immediate Results:</strong> Walk out with your permanent crown</li>
                <li className="text-gray-700"><strong>Digital Precision:</strong> Highly accurate fit and function</li>
                <li className="text-gray-700"><strong>Natural Appearance:</strong> Beautiful, lifelike restorations</li>
                <li className="text-gray-700"><strong>Durable Materials:</strong> High-quality ceramic restorations</li>
                <li className="text-gray-700"><strong>Convenience:</strong> No return visits required</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When Same Day Crowns are Used
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Same day crowns are ideal for various dental situations:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Teeth with large cavities or decay</li>
                <li className="text-gray-700">Cracked or fractured teeth</li>
                <li className="text-gray-700">Teeth with large fillings</li>
                <li className="text-gray-700">Cosmetic improvements</li>
                <li className="text-gray-700">Root canal treated teeth</li>
                <li className="text-gray-700">Worn or damaged teeth</li>
                <li className="text-gray-700">Teeth requiring structural support</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Treatment Process
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                During a same day crown procedure:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Your tooth is prepared and shaped for the crown</li>
                <li className="text-gray-700">Digital impressions are taken using advanced scanning</li>
                <li className="text-gray-700">Computer software designs your custom crown</li>
                <li className="text-gray-700">The design is reviewed and approved</li>
                <li className="text-gray-700">A ceramic block is milled to create your crown</li>
                <li className="text-gray-700">The crown is polished and color-matched</li>
                <li className="text-gray-700">Final fitting and permanent placement</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Materials Used
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Same day crowns are made from high-quality materials:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Ceramic:</strong> Natural-looking, durable material</li>
                <li className="text-gray-700"><strong>Porcelain:</strong> Excellent aesthetics and strength</li>
                <li className="text-gray-700"><strong>Zirconia:</strong> Extremely strong and long-lasting</li>
                <li className="text-gray-700"><strong>Color Matching:</strong> Precise shade selection for natural appearance</li>
                <li className="text-gray-700"><strong>Biocompatible:</strong> Safe for oral tissues</li>
                <li className="text-gray-700"><strong>Stain Resistant:</strong> Maintains appearance over time</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Benefits for Patients
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Patients enjoy numerous advantages with same day crowns:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Immediate restoration of tooth function</li>
                <li className="text-gray-700">No temporary crown maintenance</li>
                <li className="text-gray-700">Reduced treatment time</li>
                <li className="text-gray-700">Minimal disruption to daily life</li>
                <li className="text-gray-700">Natural-looking results</li>
                <li className="text-gray-700">Long-lasting durability</li>
                <li className="text-gray-700">Convenient single-visit treatment</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Care and Maintenance
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Same day crowns require the same care as natural teeth:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Regular brushing and flossing</li>
                <li className="text-gray-700">Routine dental checkups</li>
                <li className="text-gray-700">Avoid chewing hard objects</li>
                <li className="text-gray-700">Maintain good oral hygiene</li>
                <li className="text-gray-700">Follow any specific care instructions</li>
                <li className="text-gray-700">Report any concerns to your dentist</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Longevity and Durability
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Same day crowns are designed to last:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">10-15 years or longer with proper care</li>
                <li className="text-gray-700">High-strength ceramic materials</li>
                <li className="text-gray-700">Resistant to wear and fracture</li>
                <li className="text-gray-700">Maintains appearance over time</li>
                <li className="text-gray-700">Durable chewing function</li>
                <li className="text-gray-700">Long-term oral health benefits</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cost and Insurance
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Same day crown costs and coverage:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Costs comparable to traditional crowns</li>
                <li className="text-gray-700">Insurance coverage varies by plan</li>
                <li className="text-gray-700">May be covered under standard crown benefits</li>
                <li className="text-gray-700">Payment plans often available</li>
                <li className="text-gray-700">Investment in convenience and quality</li>
                <li className="text-gray-700">Discuss costs with your dental office</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/patient-education/digital-dental-impressions" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Digital Dental Impressions
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about advanced digital scanning technology.
              </p>
            </Link>
            <Link href="/patient-education/dental-crowns" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Crowns
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Understanding modern dental crown options.
              </p>
            </Link>
            <Link href="/patient-education/technology" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Technology
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Discover advanced dental technologies we use.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Experience Same Day Crown Technology
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our advanced CAD/CAM technology provides beautiful, durable crowns in a single visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Consultation
            </Link>
            <a href="tel:(209) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 