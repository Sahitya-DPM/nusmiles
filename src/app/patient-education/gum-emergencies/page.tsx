'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function GumEmergenciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/General Dentistry.jpeg"
            alt="Gum Emergencies"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Gum Emergencies
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Understanding and managing urgent gum health issues
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
                <Link href="/patient-education/emergency-care" className="text-gray-500 hover:text-primary transition-colors" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Emergency Care
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Gum Emergencies
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
                Emergency Care
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Understanding Gum Emergencies
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Gum emergencies can range from minor irritation to severe infections that require immediate attention. Understanding the signs and symptoms can help you determine when to seek emergency dental care.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Common Gum Emergency Symptoms
            </h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Severe gum pain or tenderness</li>
              <li className="text-gray-700">Swollen, red, or bleeding gums</li>
              <li className="text-gray-700">Gums that are receding or pulling away from teeth</li>
              <li className="text-gray-700">Pus or discharge from gums</li>
              <li className="text-gray-700">Loose teeth</li>
              <li className="text-gray-700">Bad breath that doesn't improve with brushing</li>
              <li className="text-gray-700">Fever or general feeling of illness</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Types of Gum Emergencies
            </h3>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Acute Gingivitis
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Acute gingivitis is a sudden inflammation of the gums that can cause pain, swelling, and bleeding. This condition is often caused by poor oral hygiene, stress, or hormonal changes.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Periodontal Abscess
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              A periodontal abscess is a pocket of pus that forms in the gums due to a bacterial infection. This is a serious condition that requires immediate treatment to prevent the infection from spreading.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Gum Trauma
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Gum trauma can occur from accidents, sports injuries, or aggressive brushing. This can cause cuts, tears, or other damage to the gum tissue.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Immediate Steps to Take
            </h3>
            
            <ol className="list-decimal pl-6 mb-6 space-y-3" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">
                <strong>Rinse with warm salt water:</strong> Mix 1/2 teaspoon of salt in 8 ounces of warm water and gently rinse your mouth to help reduce inflammation and kill bacteria.
              </li>
              <li className="text-gray-700">
                <strong>Apply gentle pressure:</strong> If there's bleeding, apply gentle pressure with a clean gauze pad or cloth.
              </li>
              <li className="text-gray-700">
                <strong>Use over-the-counter pain relief:</strong> Take ibuprofen or acetaminophen as directed to help manage pain and reduce inflammation.
              </li>
              <li className="text-gray-700">
                <strong>Avoid irritating foods:</strong> Stick to soft foods and avoid hot, spicy, or acidic foods that can irritate the gums.
              </li>
              <li className="text-gray-700">
                <strong>Contact your dentist:</strong> Call your dentist immediately for guidance and to schedule an emergency appointment.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              When to Seek Emergency Care
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Seek emergency dental care if you experience:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Severe pain that doesn't respond to over-the-counter pain relievers</li>
              <li className="text-gray-700">Excessive bleeding that doesn't stop</li>
              <li className="text-gray-700">Signs of infection (pus, fever, swelling)</li>
              <li className="text-gray-700">Loose teeth</li>
              <li className="text-gray-700">Difficulty breathing or swallowing</li>
              <li className="text-gray-700">Facial swelling</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Prevention of Gum Emergencies
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              To prevent gum emergencies:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Maintain good oral hygiene with regular brushing and flossing</li>
              <li className="text-gray-700">Visit your dentist regularly for checkups and cleanings</li>
              <li className="text-gray-700">Use a soft-bristled toothbrush and gentle brushing technique</li>
              <li className="text-gray-700">Avoid tobacco products</li>
              <li className="text-gray-700">Eat a balanced diet rich in vitamins and minerals</li>
              <li className="text-gray-700">Manage stress levels</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <h4 className="text-lg font-bold text-red-700 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Emergency Contact
              </h4>
              <p className="text-red-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                If you're experiencing a gum emergency, don't wait. Contact our office immediately at (209) 955-1800 for urgent care and guidance.
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
                Tooth Pain
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Tooth pain can be caused by various factors including decay, infection, trauma, or other dental issues.
              </p>
              <Link 
                href="/patient-education/tooth-pain"
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
                Traumatic Dental Injuries
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Traumatic dental injuries can occur from accidents, sports injuries, or other impacts to the mouth.
              </p>
              <Link 
                href="/patient-education/traumatic-dental-injuries"
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
                Periodontal therapy treats gum disease and helps restore gum health to prevent tooth loss.
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
            Experiencing a Gum Emergency?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Don't wait to get the care you need. Contact us immediately for emergency gum treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(209) 955-1800" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
            <Link href="/appointment" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Emergency Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 