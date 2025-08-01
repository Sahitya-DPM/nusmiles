'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function LaserDecayDiagnosticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Laser Decay Diagnostics
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced laser technology for early cavity detection and precise diagnosis
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
                Laser Decay Diagnostics
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
                What is Laser Decay Diagnostics?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser decay diagnostics is an advanced technology that uses safe, low-intensity laser light to detect early signs of tooth decay and cavities. This innovative system can identify dental problems at their earliest stages, often before they become visible on X-rays or to the naked eye.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The technology works by measuring the fluorescence of healthy tooth structure versus decayed areas. Healthy enamel fluoresces differently than decayed areas, allowing the laser to pinpoint exactly where problems exist, even in their earliest stages.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How Laser Decay Detection Works
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The laser decay detection process involves several key steps:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">A safe, low-intensity laser is directed at the tooth surface</li>
                <li className="text-gray-700">The laser causes healthy tooth structure to fluoresce</li>
                <li className="text-gray-700">Decayed areas produce different fluorescence patterns</li>
                <li className="text-gray-700">A sensor measures the fluorescence intensity</li>
                <li className="text-gray-700">Digital readings indicate the presence and extent of decay</li>
                <li className="text-gray-700">Results are displayed numerically and visually</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Advantages of Laser Decay Detection
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser decay diagnostics offers numerous benefits over traditional detection methods:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Early Detection:</strong> Identifies decay before it becomes visible</li>
                <li className="text-gray-700"><strong>No Radiation:</strong> Completely safe, no X-ray exposure</li>
                <li className="text-gray-700"><strong>Precise Measurements:</strong> Provides numerical readings for accuracy</li>
                <li className="text-gray-700"><strong>Non-Invasive:</strong> Painless and comfortable for patients</li>
                <li className="text-gray-700"><strong>Immediate Results:</strong> Instant feedback during examination</li>
                <li className="text-gray-700"><strong>Preventive Focus:</strong> Enables early intervention and prevention</li>
                <li className="text-gray-700"><strong>Patient Education:</strong> Visual results help patients understand their condition</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                What the Laser Can Detect
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser decay detection can identify various types of dental problems:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Early-stage cavities (before they become visible)</li>
                <li className="text-gray-700">Decay between teeth</li>
                <li className="text-gray-700">Decay under existing fillings</li>
                <li className="text-gray-700">Decay around the gum line</li>
                <li className="text-gray-700">Areas of weakened enamel</li>
                <li className="text-gray-700">Cracks and fissures that may harbor bacteria</li>
                <li className="text-gray-700">Areas at high risk for future decay</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Examination Process
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                During a laser decay detection examination:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Your teeth are cleaned and dried</li>
                <li className="text-gray-700">The laser device is calibrated for accuracy</li>
                <li className="text-gray-700">Each tooth is scanned systematically</li>
                <li className="text-gray-700">Readings are taken from multiple points on each tooth</li>
                <li className="text-gray-700">Results are displayed on a digital screen</li>
                <li className="text-gray-700">Your dentist explains the findings</li>
                <li className="text-gray-700">Treatment recommendations are discussed</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Understanding the Results
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser decay detection provides numerical readings that indicate:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Low readings (0-20):</strong> Healthy tooth structure</li>
                <li className="text-gray-700"><strong>Moderate readings (21-30):</strong> Early decay or weakened enamel</li>
                <li className="text-gray-700"><strong>High readings (31+):</strong> Active decay requiring treatment</li>
                <li className="text-gray-700"><strong>Very high readings (40+):</strong> Advanced decay needing immediate attention</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                These readings help your dentist determine the most appropriate treatment approach, from preventive measures to restorative procedures.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Treatment Planning Benefits
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser decay detection enhances treatment planning in several ways:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Identifies areas needing immediate treatment</li>
                <li className="text-gray-700">Helps prioritize treatment based on severity</li>
                <li className="text-gray-700">Enables minimally invasive treatment approaches</li>
                <li className="text-gray-700">Guides preventive treatment decisions</li>
                <li className="text-gray-700">Provides baseline measurements for monitoring</li>
                <li className="text-gray-700">Supports evidence-based treatment decisions</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Preventive Applications
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser decay detection is particularly valuable for preventive dentistry:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Identifies high-risk areas before decay develops</li>
                <li className="text-gray-700">Guides sealant placement decisions</li>
                <li className="text-gray-700">Monitors the effectiveness of preventive treatments</li>
                <li className="text-gray-700">Helps customize oral hygiene recommendations</li>
                <li className="text-gray-700">Tracks changes over time</li>
                <li className="text-gray-700">Supports early intervention strategies</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Safety and Comfort
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser decay detection is completely safe and comfortable:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Uses safe, low-intensity laser light</li>
                <li className="text-gray-700">No radiation exposure</li>
                <li className="text-gray-700">Painless and non-invasive</li>
                <li className="text-gray-700">No special preparation required</li>
                <li className="text-gray-700">Suitable for patients of all ages</li>
                <li className="text-gray-700">Can be repeated as often as needed</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Integration with Other Technologies
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser decay detection works well with other modern dental technologies:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Complements digital X-rays for comprehensive diagnosis</li>
                <li className="text-gray-700">Integrates with intraoral cameras for visual documentation</li>
                <li className="text-gray-700">Works with electronic health records for tracking</li>
                <li className="text-gray-700">Supports treatment planning software</li>
                <li className="text-gray-700">Enhances patient education tools</li>
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
            <Link href="/patient-education/digital-x-rays" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Digital X-Rays
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about modern digital imaging technology.
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
            Experience Advanced Decay Detection
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our laser decay detection technology provides early, accurate diagnosis for better treatment outcomes.
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