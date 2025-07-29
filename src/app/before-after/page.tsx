'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function BeforeAfterPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const beforeAfterCases = [
    {
      id: 1,
      category: 'veneers',
      title: 'Veneers Transformation',
      beforeImage: '/Before - Veneers.webp',
      afterImage: '/After - Veneers.webp',
      description: 'Complete smile transformation with porcelain veneers'
    },
    {
      id: 2,
      category: 'bridge-crowns',
      title: 'Bridge & Crowns',
      beforeImage: '/Before - Bridge - Crowns.webp',
      afterImage: '/After - Bridge - Crowns.webp',
      description: 'Restorative treatment with dental bridges and crowns'
    },
    {
      id: 3,
      category: 'implants',
      title: 'Dental Implants',
      beforeImage: '/Before - Implant.webp',
      afterImage: '/After - Implant.webp',
      description: 'Complete restoration with dental implants'
    },
    {
      id: 4,
      category: 'patient-cases',
      title: 'Patient Case - Tevin B',
      beforeImage: '/tevin-b-before.jpg.webp',
      afterImage: '/tevin-b-after.jpg.webp',
      description: 'Comprehensive dental transformation case'
    },
    {
      id: 5,
      category: 'patient-cases',
      title: 'Patient Case - Josue Ruiz',
      beforeImage: '/josue-ruiz-before.jpg.webp',
      afterImage: '/josue-ruiz-after.jpg.webp',
      description: 'Advanced cosmetic dentistry transformation'
    },
    {
      id: 6,
      category: 'patient-cases',
      title: 'Patient Case - Micah P',
      beforeImage: '/micah-p-before.jpg.webp',
      afterImage: '/tevin-b-after.jpg (1).webp',
      description: 'Smile enhancement and restoration'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Cases' },
    { id: 'veneers', name: 'Veneers' },
    { id: 'bridge-crowns', name: 'Bridge & Crowns' },
    { id: 'implants', name: 'Implants' },
    { id: 'patient-cases', name: 'Patient Cases' }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? beforeAfterCases 
    : beforeAfterCases.filter(case_ => case_.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Cosmetic Dentistry.jpeg"
            alt="Before & After Gallery"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Before & After Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            See the amazing transformations our patients have experienced
          </p>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((case_) => (
              <div key={case_.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {case_.title}
                  </h3>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {case_.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={case_.beforeImage}
                        alt={`Before - ${case_.title}`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
                        BEFORE
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={case_.afterImage}
                        alt={`After - ${case_.title}`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Transform Your Smile Today
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Join our satisfied patients who have experienced life-changing smile transformations. 
              Our team of experts is ready to help you achieve the smile you've always dreamed of.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Expert Care
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Our experienced team uses the latest techniques and technology for optimal results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Personalized Treatment
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Each treatment plan is customized to meet your unique needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Natural Results
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Achieve beautiful, natural-looking results that enhance your confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Experience Exceptional Dental Care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Join our family of satisfied patients and discover why Nu Smile Dental is the trusted choice for dental care in Stockton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Book Appointment
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