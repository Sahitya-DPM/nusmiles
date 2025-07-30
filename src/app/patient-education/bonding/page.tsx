'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function BondingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Cosmetic Dentistry.jpeg"
            alt="Dental Bonding"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Dental Bonding
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Conservative cosmetic treatment for chipped, discolored, or misshapen teeth
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/patient-education" className="text-gray-500 hover:text-primary transition-colors" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Patient Education
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link href="/patient-education/cosmetic-general-dentistry" className="text-gray-500 hover:text-primary transition-colors" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Cosmetic & General Dentistry
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Bonding
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cosmetic & General Dentistry
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              What is Dental Bonding?
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Dental bonding is a conservative cosmetic treatment that improves the appearance of chipped, discolored, or misshapen teeth using composite resin to repair and restore the tooth surface. Bonding can transform the appearance of a smile and is one of the most versatile cosmetic dental procedures available.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Common Uses for Dental Bonding
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              The procedure is commonly used for:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Repairing chips and minor cracks</li>
              <li className="text-gray-700">Covering stained or discolored enamel</li>
              <li className="text-gray-700">Closing small gaps between teeth</li>
              <li className="text-gray-700">Remodeling the contours of teeth that are undersized, crooked, or misshapen</li>
              <li className="text-gray-700">Rebuilding areas where enamel erosion has taken place</li>
              <li className="text-gray-700">Creating inconspicuous, tooth-colored fillings</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              The Bonding Process
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              The procedure begins with an exam to make sure the tooth is healthy and a good candidate for bonding. The tooth surface is prepared, and a specially formulated dental adhesive is applied, which enables the composite resin to "bond" to the tooth structure.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              The composite resin is put in place and molded to the desired shape. The resin material is carefully color-matched so the bonding is indistinguishable from natural tooth enamel. Once in place, the resin is hardened with a curing light. The bonding is given a final check for fit and shape, then smoothed and polished.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Advantages of Dental Bonding
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Bonding is a popular choice in cosmetic dentistry because it is convenient, cost-effective, and minimally invasive:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Bonding can frequently be completed in one visit, and often without the use of anesthetic</li>
              <li className="text-gray-700">Bonding is less expensive than veneers or crowns</li>
              <li className="text-gray-700">While veneers and crowns last longer and are less vulnerable to chipping or staining, these procedures require the removal of more tooth structure</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Important Note
              </h4>
              <p className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Dental bonding is not an option for every tooth. Major chips and cracks, deep decay, or serious misalignment might require alternative treatment. Talk to your dentist to discover whether bonding is the right choice to enhance the natural beauty of your smile.
              </p>
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
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Veneers
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Porcelain veneers are thin, custom-made shells designed to cover the front surface of teeth to improve their appearance.
              </p>
              <Link 
                href="/patient-education/veneers"
                className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Crowns
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Dental crowns are tooth-shaped caps that restore the shape, size, strength, and appearance of damaged teeth.
              </p>
              <Link 
                href="/patient-education/dental-crowns"
                className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Teeth Whitening
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Professional teeth whitening is a safe and effective way to brighten your smile and remove stains and discoloration.
              </p>
              <Link 
                href="/patient-education/teeth-whitening"
                className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Schedule a consultation with Dr. Parikh to discuss if dental bonding is right for you and explore all your cosmetic dentistry options.
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