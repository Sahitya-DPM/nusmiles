'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function ToothPainPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/General Dentistry.jpeg"
            alt="Tooth Pain"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Tooth Pain
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Understanding and managing dental pain and discomfort
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
                Tooth Pain
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
              Understanding Tooth Pain
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Tooth pain can be caused by various factors including decay, infection, trauma, or other dental issues. Understanding the different types of tooth pain can help you identify when emergency care is needed.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Types of Tooth Pain
            </h3>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Sharp, Sudden Pain
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Sharp, sudden pain that occurs when biting or chewing often indicates a cracked tooth, loose filling, or cavity. This type of pain is usually triggered by specific actions and may require immediate attention.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Throbbing Pain
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Throbbing pain that comes and goes in waves often indicates an infection or abscess. This type of pain may be accompanied by swelling, fever, or a bad taste in the mouth.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Sensitivity to Hot and Cold
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Sensitivity to hot and cold temperatures can indicate exposed tooth roots, worn enamel, or cavities. This type of pain is usually temporary and subsides when the stimulus is removed.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Constant, Dull Ache
            </h4>
            <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              A constant, dull ache that persists for days may indicate an infection, gum disease, or referred pain from other areas like the jaw or sinuses.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Common Causes of Tooth Pain
            </h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Dental cavities and decay</li>
              <li className="text-gray-700">Tooth abscess or infection</li>
              <li className="text-gray-700">Cracked or broken teeth</li>
              <li className="text-gray-700">Gum disease</li>
              <li className="text-gray-700">Exposed tooth roots</li>
              <li className="text-gray-700">Loose or damaged fillings</li>
              <li className="text-gray-700">Sinus infections (referred pain)</li>
              <li className="text-gray-700">Temporomandibular joint (TMJ) disorders</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Immediate Relief Measures
            </h3>
            
            <ol className="list-decimal pl-6 mb-6 space-y-3" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">
                <strong>Rinse with warm salt water:</strong> Mix 1/2 teaspoon of salt in 8 ounces of warm water and gently rinse your mouth to help reduce inflammation and kill bacteria.
              </li>
              <li className="text-gray-700">
                <strong>Apply a cold compress:</strong> Hold an ice pack or cold compress against your cheek for 15-20 minutes to help reduce swelling and numb the area.
              </li>
              <li className="text-gray-700">
                <strong>Take over-the-counter pain relievers:</strong> Use ibuprofen or acetaminophen as directed for pain relief. Avoid aspirin directly on the tooth as it can cause tissue damage.
              </li>
              <li className="text-gray-700">
                <strong>Use clove oil:</strong> Apply a small amount of clove oil to the affected area using a cotton swab. Clove oil has natural numbing properties.
              </li>
              <li className="text-gray-700">
                <strong>Avoid triggering foods:</strong> Stay away from hot, cold, sweet, or acidic foods that may aggravate the pain.
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
              <li className="text-gray-700">Pain accompanied by fever or swelling</li>
              <li className="text-gray-700">Pain that lasts more than 1-2 days</li>
              <li className="text-gray-700">Difficulty breathing or swallowing</li>
              <li className="text-gray-700">Pain that radiates to your ear, jaw, or neck</li>
              <li className="text-gray-700">Signs of infection (pus, bad taste, swollen lymph nodes)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Prevention of Tooth Pain
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              To prevent tooth pain:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              <li className="text-gray-700">Maintain good oral hygiene with regular brushing and flossing</li>
              <li className="text-gray-700">Visit your dentist regularly for checkups and cleanings</li>
              <li className="text-gray-700">Use fluoride toothpaste and consider fluoride treatments</li>
              <li className="text-gray-700">Limit sugary foods and beverages</li>
              <li className="text-gray-700">Wear a mouthguard during sports or if you grind your teeth</li>
              <li className="text-gray-700">Address dental issues promptly before they worsen</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <h4 className="text-lg font-bold text-red-700 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Emergency Contact
              </h4>
              <p className="text-red-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                If you're experiencing severe tooth pain that doesn't respond to home remedies, don't wait. Contact our office immediately at (209) 955-1800 for urgent care and relief.
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
                Gum Emergencies
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Gum emergencies can range from minor irritation to severe infections that require immediate attention.
              </p>
              <Link 
                href="/patient-education/gum-emergencies"
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Experiencing Tooth Pain?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Don't suffer in silence. Contact us immediately for emergency dental care and relief from tooth pain.
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