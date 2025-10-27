'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function AnesthesiaWandPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Anesthesia Wand
          </h1>
          <p className="text-[16px] md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Computer-controlled local anesthesia delivery for comfortable dental procedures
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
                Anesthesia Wand
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-[27px] md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                What is the Anesthesia Wand?
              </h2>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The Anesthesia Wand is a revolutionary computer-controlled local anesthesia delivery system that provides a more comfortable and precise alternative to traditional injection methods. This advanced technology uses a pen-like device to deliver anesthesia with minimal discomfort, making dental procedures more pleasant for patients.
              </p>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The system works by delivering a controlled, slow stream of anesthetic solution through a very fine needle, which significantly reduces the pressure and discomfort typically associated with traditional injections. The computer-controlled delivery ensures consistent, predictable results.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How the Anesthesia Wand Works
              </h3>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The Anesthesia Wand system consists of several key components:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Computer Controller:</strong> Precisely controls the flow rate and pressure</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Pen-like Handpiece:</strong> Comfortable, ergonomic design for easy handling</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Ultra-fine Needle:</strong> Minimizes tissue trauma and discomfort</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Flow Control:</strong> Delivers anesthetic at a slow, controlled rate</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Pressure Monitoring:</strong> Ensures optimal delivery pressure</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Advantages of the Anesthesia Wand
              </h3>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The Anesthesia Wand offers numerous benefits over traditional injection methods:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Reduced Discomfort:</strong> Much less painful than traditional injections</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Computer-Controlled:</strong> Precise, consistent delivery every time</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Slow Delivery:</strong> Gradual anesthetic administration reduces pressure</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Ultra-fine Needle:</strong> Minimizes tissue trauma</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Predictable Results:</strong> Consistent anesthesia effectiveness</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Patient Comfort:</strong> More pleasant experience for anxious patients</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Reduced Anxiety:</strong> Less fear of injections</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Injection Process
              </h3>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                During an Anesthesia Wand injection:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">The treatment area is prepared and numbed with topical anesthetic</li>
                <li className="text-gray-700 text-[16px] md:text-base">The ultra-fine needle is gently inserted into the tissue</li>
                <li className="text-gray-700 text-[16px] md:text-base">Computer-controlled delivery begins at a slow, steady rate</li>
                <li className="text-gray-700 text-[16px] md:text-base">Anesthetic is delivered with minimal pressure and discomfort</li>
                <li className="text-gray-700 text-[16px] md:text-base">The process continues until adequate anesthesia is achieved</li>
                <li className="text-gray-700 text-[16px] md:text-base">The needle is removed with minimal trauma</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Patient Experience
              </h3>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Patients typically experience:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Minimal discomfort during injection</li>
                <li className="text-gray-700 text-[16px] md:text-base">No sudden pressure or pain</li>
                <li className="text-gray-700 text-[16px] md:text-base">Gradual numbing sensation</li>
                <li className="text-gray-700 text-[16px] md:text-base">Reduced anxiety and fear</li>
                <li className="text-gray-700 text-[16px] md:text-base">More comfortable overall experience</li>
                <li className="text-gray-700 text-[16px] md:text-base">Faster recovery from injection site</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Applications and Uses
              </h3>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The Anesthesia Wand is used for various dental procedures:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Dental fillings and restorations</li>
                <li className="text-gray-700 text-[16px] md:text-base">Root canal procedures</li>
                <li className="text-gray-700 text-[16px] md:text-base">Tooth extractions</li>
                <li className="text-gray-700 text-[16px] md:text-base">Gum treatments and surgery</li>
                <li className="text-gray-700 text-[16px] md:text-base">Dental implant procedures</li>
                <li className="text-gray-700 text-[16px] md:text-base">Cosmetic dental procedures</li>
                <li className="text-gray-700 text-[16px] md:text-base">Pediatric dental treatments</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Safety and Effectiveness
              </h3>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The Anesthesia Wand is safe and effective:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">FDA-approved technology</li>
                <li className="text-gray-700 text-[16px] md:text-base">Extensive clinical testing and validation</li>
                <li className="text-gray-700 text-[16px] md:text-base">Computer-controlled precision reduces errors</li>
                <li className="text-gray-700 text-[16px] md:text-base">Consistent, predictable results</li>
                <li className="text-gray-700 text-[16px] md:text-base">Minimal risk of complications</li>
                <li className="text-gray-700 text-[16px] md:text-base">Suitable for patients of all ages</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Benefits for Anxious Patients
              </h3>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The Anesthesia Wand is particularly beneficial for patients with dental anxiety:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Reduces fear of injections</li>
                <li className="text-gray-700 text-[16px] md:text-base">More comfortable experience</li>
                <li className="text-gray-700 text-[16px] md:text-base">Builds confidence for future visits</li>
                <li className="text-gray-700 text-[16px] md:text-base">Less traumatic than traditional methods</li>
                <li className="text-gray-700 text-[16px] md:text-base">Helps overcome dental phobia</li>
                <li className="text-gray-700 text-[16px] md:text-base">Creates positive dental associations</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                After Injection Care
              </h3>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Post-injection care is typically minimal:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Minimal swelling or bruising</li>
                <li className="text-gray-700 text-[16px] md:text-base">Faster recovery from injection site</li>
                <li className="text-gray-700 text-[16px] md:text-base">Reduced post-injection discomfort</li>
                <li className="text-gray-700 text-[16px] md:text-base">Normal activities can resume quickly</li>
                <li className="text-gray-700 text-[16px] md:text-base">Follow any specific instructions from your dentist</li>
                <li className="text-gray-700 text-[16px] md:text-base">Contact your dentist if you experience any concerns</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cost and Availability
              </h3>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Anesthesia Wand availability and costs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Available at modern dental practices</li>
                <li className="text-gray-700 text-[16px] md:text-base">Costs may be comparable to traditional anesthesia</li>
                <li className="text-gray-700 text-[16px] md:text-base">Insurance coverage varies by plan</li>
                <li className="text-gray-700 text-[16px] md:text-base">May be included in procedure costs</li>
                <li className="text-gray-700 text-[16px] md:text-base">Discuss costs with your dental office</li>
                <li className="text-gray-700 text-[16px] md:text-base">Investment in patient comfort and satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[27px] md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/patient-education/sedation-dentistry" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Sedation Dentistry
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about various sedation options for dental procedures.
              </p>
            </Link>
            <Link href="/patient-education/technology" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Technology
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Discover advanced dental technologies we use.
              </p>
            </Link>
            <Link href="/patient-education/laser-dentistry" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Laser Dentistry
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about advanced laser treatments in dentistry.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[27px] md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Experience Comfortable Dental Anesthesia
          </h2>
          <p className="text-[16px] md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our Anesthesia Wand technology provides a more comfortable and precise alternative to traditional injection methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Consultation
            </Link>
            <a href="tel:(209) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 