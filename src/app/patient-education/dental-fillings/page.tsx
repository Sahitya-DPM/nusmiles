'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function DentalFillingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/General Dentistry.jpeg"
            alt="Dental Fillings"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Dental Fillings
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Modern restorative treatment to repair cavities and restore tooth function
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
                Dental Fillings
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
                General Dentistry
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              What are Dental Fillings?
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Modern dental fillings restore teeth damaged by decay and help prevent further decay by closing off spaces where bacteria can enter. Fillings are also used to repair cracked or broken teeth and teeth that have been worn down from misuse (such as from nail-biting or tooth grinding).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Types of Dental Fillings
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              There are several types of materials used for dental fillings, each with its own advantages:
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Composite Fillings (Tooth-Colored)
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Composite fillings are made of a resin and glass mixture that can be matched to the color of your natural teeth. They are popular because they blend in with your teeth and are less noticeable than other types of fillings. Composite fillings are also versatile and can be used to repair chipped, broken, or worn teeth.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Amalgam Fillings (Silver)
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Amalgam fillings are made of a mixture of metals including silver, mercury, copper, and tin. They are very durable and can last for many years. However, they are more noticeable than composite fillings due to their silver color.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Gold Fillings
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Gold fillings are made of gold alloy and are very durable, lasting 15 years or more. They are well-tolerated by gum tissues and may last longer than amalgam fillings. However, they are more expensive than other types of fillings and require multiple visits to place.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Ceramic Fillings
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Ceramic fillings are made of porcelain and are very durable and aesthetically pleasing. They are resistant to staining and can be matched to the color of your natural teeth. However, they can be more expensive than composite fillings.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              The Filling Process
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Getting a dental filling typically involves the following steps:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-3" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">
                <strong>Numbing:</strong> Your dentist will numb the area around the tooth to be filled with a local anesthetic.
              </li>
              <li className="text-gray-700">
                <strong>Removing Decay:</strong> The dentist will use a drill or laser to remove the decayed portion of the tooth.
              </li>
              <li className="text-gray-700">
                <strong>Cleaning:</strong> The cavity is cleaned to remove bacteria and debris.
              </li>
              <li className="text-gray-700">
                <strong>Filling:</strong> The filling material is placed in the cavity and shaped to match your tooth.
              </li>
              <li className="text-gray-700">
                <strong>Polishing:</strong> The filling is polished to ensure a smooth surface.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              After Getting a Filling
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              After getting a filling, you may experience:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Sensitivity to hot and cold temperatures</li>
              <li className="text-gray-700">Sensitivity to pressure</li>
              <li className="text-gray-700">Slight discomfort when biting</li>
            </ul>

            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              These symptoms are usually temporary and should resolve within a few days. If they persist or become severe, contact your dentist.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Caring for Your Fillings
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              To maintain your fillings and prevent future cavities:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Brush your teeth twice daily with fluoride toothpaste</li>
              <li className="text-gray-700">Floss daily to remove plaque between teeth</li>
              <li className="text-gray-700">Visit your dentist regularly for checkups and cleanings</li>
              <li className="text-gray-700">Limit sugary foods and beverages</li>
              <li className="text-gray-700">Consider using a fluoride mouthwash</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When to Replace Fillings
              </h4>
              <p className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Fillings don't last forever. They may need to be replaced if they become worn, cracked, or if decay develops around them. Regular dental checkups help your dentist identify when a filling needs to be replaced before it causes more serious problems.
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
                Dental Cleanings
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Regular dental cleanings are essential for maintaining good oral health and preventing gum disease and tooth decay.
              </p>
              <Link 
                href="/patient-education/dental-cleanings"
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
                Root Canal Therapy
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Root canal therapy is a treatment used to repair and save a tooth that is badly decayed or becomes infected.
              </p>
              <Link 
                href="/patient-education/root-canal-therapy"
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Need a Dental Filling?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Schedule a consultation with Dr. Parikh to discuss your dental filling options and restore your tooth health.
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