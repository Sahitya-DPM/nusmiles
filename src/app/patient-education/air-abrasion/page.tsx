'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function AirAbrasionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Air Abrasion
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Minimally invasive dental treatment using fine particles and compressed air
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
                Air Abrasion
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
                What is Air Abrasion?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Air abrasion is a modern, minimally invasive dental technique that uses a stream of fine particles propelled by compressed air to remove decay and prepare teeth for fillings. This innovative approach offers an alternative to traditional drilling, providing a more comfortable experience for many patients.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The technology works by directing a precise stream of aluminum oxide particles at the tooth surface, effectively "sandblasting" away decayed areas while preserving healthy tooth structure. This method is particularly effective for treating small cavities and surface decay.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How Air Abrasion Works
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The air abrasion process involves several key components:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Compressed Air:</strong> Provides the force to propel particles</li>
                <li className="text-gray-700"><strong>Aluminum Oxide Particles:</strong> Fine, abrasive particles that remove decay</li>
                <li className="text-gray-700"><strong>Precision Handpiece:</strong> Directs the particle stream accurately</li>
                <li className="text-gray-700"><strong>Suction System:</strong> Removes particles and debris</li>
                <li className="text-gray-700"><strong>Protective Measures:</strong> Shields and barriers for patient safety</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Advantages of Air Abrasion
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Air abrasion offers numerous benefits over traditional drilling:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>No Drilling:</strong> Eliminates the need for traditional dental drills</li>
                <li className="text-gray-700"><strong>Reduced Noise:</strong> Much quieter than conventional drilling</li>
                <li className="text-gray-700"><strong>Minimal Vibration:</strong> No uncomfortable vibrations</li>
                <li className="text-gray-700"><strong>Preserves Healthy Tooth:</strong> Removes only decayed areas</li>
                <li className="text-gray-700"><strong>Often No Anesthesia:</strong> May not require local anesthesia</li>
                <li className="text-gray-700"><strong>Faster Healing:</strong> Less trauma to surrounding tissues</li>
                <li className="text-gray-700"><strong>Reduced Anxiety:</strong> More comfortable for anxious patients</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When Air Abrasion is Used
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Air abrasion is most effective for specific dental procedures:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Small to medium-sized cavities</li>
                <li className="text-gray-700">Surface decay and early cavities</li>
                <li className="text-gray-700">Removing old composite fillings</li>
                <li className="text-gray-700">Preparing teeth for sealants</li>
                <li className="text-gray-700">Removing surface stains</li>
                <li className="text-gray-700">Preparing teeth for bonding procedures</li>
                <li className="text-gray-700">Treating decay in children's teeth</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Treatment Process
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                During an air abrasion procedure:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">The treatment area is isolated and protected</li>
                <li className="text-gray-700">A precision handpiece is positioned near the tooth</li>
                <li className="text-gray-700">Fine particles are directed at the decayed area</li>
                <li className="text-gray-700">Decay is gently removed layer by layer</li>
                <li className="text-gray-700">The area is cleaned and prepared for restoration</li>
                <li className="text-gray-700">A filling or sealant is placed as needed</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Patient Comfort and Experience
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Air abrasion provides a more comfortable dental experience:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">No loud drilling sounds</li>
                <li className="text-gray-700">Minimal discomfort during treatment</li>
                <li className="text-gray-700">Often no need for anesthesia</li>
                <li className="text-gray-700">Reduced post-treatment sensitivity</li>
                <li className="text-gray-700">Faster recovery time</li>
                <li className="text-gray-700">Less anxiety for dental-phobic patients</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Limitations and Considerations
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                While air abrasion is effective, it has some limitations:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Not suitable for deep cavities</li>
                <li className="text-gray-700">May not be effective for very hard decay</li>
                <li className="text-gray-700">Requires proper isolation techniques</li>
                <li className="text-gray-700">May need to be combined with traditional methods</li>
                <li className="text-gray-700">Not appropriate for all types of restorations</li>
                <li className="text-gray-700">Requires specialized training and equipment</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Safety and Precautions
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Air abrasion is safe when performed by trained professionals:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Proper eye protection is used</li>
                <li className="text-gray-700">Rubber dam or other isolation techniques</li>
                <li className="text-gray-700">Suction to remove particles and debris</li>
                <li className="text-gray-700">Precise control of particle stream</li>
                <li className="text-gray-700">Monitoring of treatment progress</li>
                <li className="text-gray-700">Safe disposal of used materials</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                After Treatment Care
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Post-treatment care is typically minimal:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Normal eating and drinking can resume immediately</li>
                <li className="text-gray-700">Continue regular oral hygiene practices</li>
                <li className="text-gray-700">Minimal post-treatment sensitivity</li>
                <li className="text-gray-700">No special dietary restrictions</li>
                <li className="text-gray-700">Follow any specific instructions from your dentist</li>
                <li className="text-gray-700">Attend follow-up appointments as scheduled</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cost and Insurance
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Air abrasion treatment costs and coverage:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Costs are generally comparable to traditional fillings</li>
                <li className="text-gray-700">Insurance coverage varies by plan</li>
                <li className="text-gray-700">May be covered under standard filling benefits</li>
                <li className="text-gray-700">Some plans may have specific coverage for air abrasion</li>
                <li className="text-gray-700">Discuss costs with your dental office before treatment</li>
                <li className="text-gray-700">Payment plans may be available</li>
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
            <Link href="/patient-education/laser-dentistry" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Laser Dentistry
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about advanced laser treatments in dentistry.
              </p>
            </Link>
            <Link href="/patient-education/dental-fillings" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Fillings
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Understanding modern dental filling options.
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
            Experience Comfortable Dental Treatment
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our air abrasion technology provides a more comfortable alternative to traditional drilling for many dental procedures.
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