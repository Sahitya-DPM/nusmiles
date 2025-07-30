'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function DentalCleaningsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/General Dentistry.jpeg"
            alt="Dental Cleanings"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Dental Cleanings
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Professional cleanings for optimal oral health and prevention
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
                Dental Cleanings
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
              Why Regular Dental Cleanings Matter
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Regular dental cleanings are essential for maintaining good oral health and preventing gum disease and tooth decay. Even with excellent at-home oral hygiene, plaque and tartar can build up in areas that are difficult to reach with a toothbrush and floss.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              What Happens During a Dental Cleaning
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              A professional dental cleaning typically includes the following steps:
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              1. Physical Examination
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Before the cleaning begins, your dental hygienist will examine your mouth for any signs of oral health problems, such as cavities, gum disease, or other issues that may need attention.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              2. Plaque and Tartar Removal
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Using special dental tools, your hygienist will remove plaque and tartar from your teeth. Plaque is a sticky film of bacteria that forms on teeth, while tartar is hardened plaque that can only be removed professionally.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              3. Tooth Polishing
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              After removing plaque and tartar, your teeth will be polished with a gritty paste to remove any remaining surface stains and make your teeth feel smooth and clean.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              4. Flossing
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Your hygienist will floss between your teeth to remove any remaining plaque or food particles and ensure your gums are healthy.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              5. Fluoride Treatment
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              A fluoride treatment may be applied to help strengthen your tooth enamel and protect against cavities. This is especially important for children and those at higher risk for tooth decay.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Benefits of Regular Dental Cleanings
            </h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Prevent cavities and tooth decay</li>
              <li className="text-gray-700">Prevent gum disease (gingivitis and periodontitis)</li>
              <li className="text-gray-700">Remove surface stains and brighten your smile</li>
              <li className="text-gray-700">Detect oral health problems early</li>
              <li className="text-gray-700">Maintain fresh breath</li>
              <li className="text-gray-700">Improve overall health (oral health is linked to heart health)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              How Often Should You Get Cleanings?
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Most people should have a professional dental cleaning every six months. However, some individuals may need more frequent cleanings, such as:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Those with gum disease</li>
              <li className="text-gray-700">People with a history of frequent cavities</li>
              <li className="text-gray-700">Individuals with certain medical conditions</li>
              <li className="text-gray-700">Smokers</li>
              <li className="text-gray-700">Pregnant women</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Between Cleanings: At-Home Care
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              To maintain optimal oral health between professional cleanings:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Brush your teeth twice daily with fluoride toothpaste</li>
              <li className="text-gray-700">Floss daily to remove plaque between teeth</li>
              <li className="text-gray-700">Use an antiseptic mouthwash to kill bacteria</li>
              <li className="text-gray-700">Limit sugary foods and beverages</li>
              <li className="text-gray-700">Replace your toothbrush every 3-4 months</li>
              <li className="text-gray-700">Consider using an electric toothbrush for more effective cleaning</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Connection Between Oral and Overall Health
              </h4>
              <p className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Research has shown that poor oral health is linked to various systemic health conditions, including heart disease, diabetes, and respiratory infections. Regular dental cleanings not only protect your teeth and gums but also contribute to your overall well-being.
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
                Dental Fillings
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Modern dental fillings restore teeth damaged by decay and help prevent further decay by closing off spaces where bacteria can enter.
              </p>
              <Link 
                href="/patient-education/dental-fillings"
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

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Periodontal Therapy
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Periodontal therapy treats gum disease and helps restore gum health to prevent tooth loss and other complications.
              </p>
              <Link 
                href="/patient-education/periodontal-therapy"
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
            Ready for Your Next Cleaning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Schedule your professional dental cleaning with Dr. Parikh to maintain optimal oral health and prevent dental problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Cleaning
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