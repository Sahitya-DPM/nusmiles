'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function LaserDentistryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Laser Dentistry
          </h1>
          <p className="text-[16px] md:text-[16px] text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced laser technology for precise, comfortable, and minimally invasive dental treatments
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
                Laser Dentistry
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
                What is Laser Dentistry?
              </h2>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser dentistry is a modern approach to dental treatment that uses focused light energy to perform a variety of dental procedures with enhanced precision and comfort. This advanced technology allows dentists to treat dental issues with minimal discomfort, reduced healing time, and often without the need for traditional drilling or anesthesia.
              </p>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Dental lasers work by delivering energy in the form of light, which can be precisely controlled to target specific tissues while leaving surrounding areas unharmed. This technology has revolutionized many aspects of dental care, making treatments more comfortable and effective for patients of all ages.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Types of Dental Lasers
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Different types of lasers are used for various dental procedures:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Soft Tissue Lasers:</strong> Used for gum treatments and oral surgery</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Hard Tissue Lasers:</strong> Used for tooth and bone procedures</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Diode Lasers:</strong> Versatile lasers for multiple applications</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>CO2 Lasers:</strong> Used for precise soft tissue procedures</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Erbium Lasers:</strong> Effective for both hard and soft tissues</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Common Laser Dental Procedures
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser technology is used in various dental treatments:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Cavity Treatment:</strong> Removing decay and preparing teeth for fillings</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Gum Disease Treatment:</strong> Removing infected gum tissue</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Gum Reshaping:</strong> Cosmetic procedures to improve gum appearance</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Biopsy Procedures:</strong> Removing tissue samples for testing</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Cold Sore Treatment:</strong> Reducing pain and healing time</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Tooth Sensitivity Treatment:</strong> Sealing exposed root surfaces</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Whitening Procedures:</strong> Accelerating tooth whitening processes</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Advantages of Laser Dentistry
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser dentistry offers numerous benefits over traditional methods:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Minimal Pain:</strong> Often eliminates the need for anesthesia</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Reduced Bleeding:</strong> Lasers help control bleeding during procedures</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Faster Healing:</strong> Less trauma to tissues promotes quicker recovery</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Precision:</strong> Targets only affected areas, preserving healthy tissue</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Reduced Anxiety:</strong> No drilling sounds or vibrations</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Lower Risk of Infection:</strong> Lasers sterilize as they work</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Less Swelling:</strong> Minimal tissue damage reduces post-operative swelling</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Laser Cavity Treatment
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser cavity treatment offers a comfortable alternative to traditional drilling:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">No loud drilling sounds</li>
                <li className="text-gray-700 text-[16px] md:text-base">Often no need for anesthesia</li>
                <li className="text-gray-700 text-[16px] md:text-base">Precise removal of decay</li>
                <li className="text-gray-700 text-[16px] md:text-base">Preserves more healthy tooth structure</li>
                <li className="text-gray-700 text-[16px] md:text-base">Reduced post-treatment sensitivity</li>
                <li className="text-gray-700 text-[16px] md:text-base">Faster procedure time</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Laser Gum Treatment
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser gum therapy provides effective treatment for gum disease:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Removes infected gum tissue</li>
                <li className="text-gray-700 text-[16px] md:text-base">Stimulates healthy tissue regeneration</li>
                <li className="text-gray-700 text-[16px] md:text-base">Reduces pocket depth</li>
                <li className="text-gray-700 text-[16px] md:text-base">Minimal discomfort during and after treatment</li>
                <li className="text-gray-700 text-[16px] md:text-base">Faster healing compared to traditional surgery</li>
                <li className="text-gray-700 text-[16px] md:text-base">Less post-operative pain</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                What to Expect During Laser Treatment
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser dental procedures typically follow this process:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Comprehensive examination and treatment planning</li>
                <li className="text-gray-700 text-[16px] md:text-base">Protective eyewear is provided for safety</li>
                <li className="text-gray-700 text-[16px] md:text-base">The laser is calibrated for your specific procedure</li>
                <li className="text-gray-700 text-[16px] md:text-base">Precise treatment of the affected area</li>
                <li className="text-gray-700 text-[16px] md:text-base">Minimal discomfort during the procedure</li>
                <li className="text-gray-700 text-[16px] md:text-base">Post-treatment instructions and care</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Safety and Effectiveness
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser dentistry is safe and effective when performed by trained professionals:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">FDA-approved technology</li>
                <li className="text-gray-700 text-[16px] md:text-base">Extensive research supports safety and effectiveness</li>
                <li className="text-gray-700 text-[16px] md:text-base">Proper training and certification required</li>
                <li className="text-gray-700 text-[16px] md:text-base">Safety protocols and protective measures</li>
                <li className="text-gray-700 text-[16px] md:text-base">Precise control over treatment depth and area</li>
                <li className="text-gray-700 text-[16px] md:text-base">Minimal risk of complications</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Recovery and Aftercare
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Recovery from laser dental procedures is typically quick and comfortable:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Minimal post-operative pain</li>
                <li className="text-gray-700 text-[16px] md:text-base">Faster healing compared to traditional methods</li>
                <li className="text-gray-700 text-[16px] md:text-base">Reduced swelling and inflammation</li>
                <li className="text-gray-700 text-[16px] md:text-base">Quick return to normal activities</li>
                <li className="text-gray-700 text-[16px] md:text-base">Simple aftercare instructions</li>
                <li className="text-gray-700 text-[16px] md:text-base">Follow-up appointments as needed</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cost and Insurance Coverage
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser dentistry costs and insurance considerations:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Costs vary depending on the specific procedure</li>
                <li className="text-gray-700 text-[16px] md:text-base">May be comparable to traditional treatment costs</li>
                <li className="text-gray-700 text-[16px] md:text-base">Insurance coverage varies by plan and procedure</li>
                <li className="text-gray-700 text-[16px] md:text-base">Some plans may cover laser treatments</li>
                <li className="text-gray-700 text-[16px] md:text-base">Payment plans and financing options available</li>
                <li className="text-gray-700 text-[16px] md:text-base">Discuss costs with your dental office before treatment</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Is Laser Dentistry Right for You?
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Laser dentistry may be ideal if you:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Experience dental anxiety or fear</li>
                <li className="text-gray-700 text-[16px] md:text-base">Prefer minimally invasive treatments</li>
                <li className="text-gray-700 text-[16px] md:text-base">Want faster recovery times</li>
                <li className="text-gray-700 text-[16px] md:text-base">Are looking for precise, targeted treatment</li>
                <li className="text-gray-700 text-[16px] md:text-base">Have sensitive teeth or gums</li>
                <li className="text-gray-700 text-[16px] md:text-base">Want to avoid traditional drilling when possible</li>
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
            <Link href="/patient-education/laser-decay-diagnostics" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Laser Decay Diagnostics
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about laser technology for early cavity detection.
              </p>
            </Link>
            <Link href="/patient-education/air-abrasion" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Air Abrasion
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Discover minimally invasive dental treatment options.
              </p>
            </Link>
            <Link href="/patient-education/technology" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
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
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[27px] md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Experience Advanced Laser Dentistry
          </h2>
          <p className="text-[16px] md:text-[16px] text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our laser dentistry technology provides precise, comfortable, and minimally invasive dental treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Consultation
            </Link>
            <a href="tel:(209) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 