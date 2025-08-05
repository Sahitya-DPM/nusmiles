'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function DigitalDentalImpressionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Digital Dental Impressions
          </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced 3D scanning technology for precise dental impressions without messy materials
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
                Digital Dental Impressions
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
                What are Digital Dental Impressions?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Digital dental impressions are a modern alternative to traditional putty-based impressions. This advanced technology uses a small, handheld scanner to create highly accurate 3D images of your teeth and gums, eliminating the need for messy impression materials and uncomfortable trays.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The digital scanner captures thousands of images per second, creating a precise 3D model of your mouth that can be used to design and fabricate dental restorations, orthodontic appliances, and other dental devices with exceptional accuracy.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How Digital Impressions Work
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The digital impression process involves several key steps:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">A small, wand-like scanner is used to capture images of your teeth</li>
                <li className="text-gray-700">The scanner projects light patterns onto your teeth and gums</li>
                <li className="text-gray-700">Sensors capture the reflected light to create 3D data points</li>
                <li className="text-gray-700">Computer software processes the data in real-time</li>
                <li className="text-gray-700">A complete 3D model of your mouth is created</li>
                <li className="text-gray-700">The digital model is used for treatment planning and fabrication</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Advantages of Digital Impressions
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Digital impressions offer numerous benefits over traditional methods:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>No Messy Materials:</strong> Eliminates putty, trays, and gagging</li>
                <li className="text-gray-700"><strong>Greater Comfort:</strong> No uncomfortable impression trays</li>
                <li className="text-gray-700"><strong>Higher Accuracy:</strong> More precise than traditional impressions</li>
                <li className="text-gray-700"><strong>Immediate Results:</strong> 3D model available instantly</li>
                <li className="text-gray-700"><strong>Easy Corrections:</strong> Can be retaken if needed</li>
                <li className="text-gray-700"><strong>Better Communication:</strong> Visual representation for patients</li>
                <li className="text-gray-700"><strong>Faster Processing:</strong> No shipping or lab delays</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Applications of Digital Impressions
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Digital impressions are used for various dental procedures:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Crowns and Bridges:</strong> Precise fitting restorations</li>
                <li className="text-gray-700"><strong>Dental Implants:</strong> Accurate implant planning and placement</li>
                <li className="text-gray-700"><strong>Orthodontic Treatment:</strong> Invisalign and clear aligners</li>
                <li className="text-gray-700"><strong>Veneers:</strong> Custom-designed cosmetic restorations</li>
                <li className="text-gray-700"><strong>Night Guards:</strong> Custom-fitted protective appliances</li>
                <li className="text-gray-700"><strong>Dentures:</strong> Better-fitting removable prosthetics</li>
                <li className="text-gray-700"><strong>Study Models:</strong> Treatment planning and documentation</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Scanning Process
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                During a digital impression scan:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Your teeth are cleaned and dried</li>
                <li className="text-gray-700">A small scanner is gently moved around your mouth</li>
                <li className="text-gray-700">The scanner captures images of all tooth surfaces</li>
                <li className="text-gray-700">Both upper and lower arches are scanned</li>
                <li className="text-gray-700">Bite relationship is recorded</li>
                <li className="text-gray-700">3D model is created on computer screen</li>
                <li className="text-gray-700">Results are reviewed and approved</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Patient Experience
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Digital impressions provide a much more comfortable experience:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">No gagging or discomfort from impression materials</li>
                <li className="text-gray-700">Quick and efficient scanning process</li>
                <li className="text-gray-700">No messy materials in your mouth</li>
                <li className="text-gray-700">Can see the 3D model immediately</li>
                <li className="text-gray-700">Easy to retake if needed</li>
                <li className="text-gray-700">More pleasant overall experience</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Accuracy and Precision
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Digital impressions offer superior accuracy:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Sub-millimeter precision</li>
                <li className="text-gray-700">No distortion from material shrinkage</li>
                <li className="text-gray-700">Consistent results every time</li>
                <li className="text-gray-700">Better fit for dental restorations</li>
                <li className="text-gray-700">Reduced need for adjustments</li>
                <li className="text-gray-700">Higher success rates for treatments</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Treatment Planning Benefits
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Digital impressions enhance treatment planning:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">3D visualization of treatment outcomes</li>
                <li className="text-gray-700">Better communication with patients</li>
                <li className="text-gray-700">Precise measurements and analysis</li>
                <li className="text-gray-700">Improved treatment planning</li>
                <li className="text-gray-700">Better collaboration with dental labs</li>
                <li className="text-gray-700">Enhanced documentation and records</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Time and Efficiency
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Digital impressions save time and improve efficiency:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Faster appointment times</li>
                <li className="text-gray-700">No waiting for materials to set</li>
                <li className="text-gray-700">Immediate results and feedback</li>
                <li className="text-gray-700">Reduced need for retakes</li>
                <li className="text-gray-700">Faster delivery of final restorations</li>
                <li className="text-gray-700">More efficient workflow</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cost and Insurance
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Digital impression costs and coverage:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Costs may be comparable to traditional impressions</li>
                <li className="text-gray-700">Often included in procedure costs</li>
                <li className="text-gray-700">Insurance coverage varies by plan</li>
                <li className="text-gray-700">May be covered under standard benefits</li>
                <li className="text-gray-700">Discuss costs with your dental office</li>
                <li className="text-gray-700">Investment in comfort and accuracy</li>
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
            <Link href="/patient-education/same-day-crowns" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Same Day Crowns
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about same-day crown technology and benefits.
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
            <Link href="/patient-education/dental-crowns" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Crowns
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Understanding modern dental crown options.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Experience Comfortable Digital Impressions
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our digital impression technology provides precise, comfortable, and mess-free dental impressions.
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