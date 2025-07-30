'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState('diagnostic');

  const technologyCategories = [
    {
      id: 'diagnostic',
      title: 'Diagnostic Technology',
      icon: '🔍',
      articles: [
        {
          title: 'Digital X-Rays',
          excerpt: 'Digital X-rays provide clearer images with less radiation exposure compared to traditional film X-rays.',
          category: 'Technology',
          readMore: '/patient-education/digital-x-rays'
        },
        {
          title: 'Cone Beam CT Imaging',
          excerpt: 'Cone Beam CT provides 3D imaging for more accurate diagnosis and treatment planning.',
          category: 'Technology',
          readMore: '/patient-education/cone-beam-ct-imaging'
        },
        {
          title: 'Intraoral Camera',
          excerpt: 'Intraoral cameras allow patients to see detailed images of their teeth and gums.',
          category: 'Technology',
          readMore: '/patient-education/intraoral-camera'
        },
        {
          title: 'Laser Decay Diagnostics',
          excerpt: 'Laser technology helps detect cavities and decay in their earliest stages.',
          category: 'Technology',
          readMore: '/patient-education/laser-decay-diagnostics'
        }
      ]
    },
    {
      id: 'treatment',
      title: 'Treatment Technology',
      icon: '⚡',
      articles: [
        {
          title: 'Air Abrasion',
          excerpt: 'Air abrasion is a gentle alternative to traditional drilling for cavity preparation.',
          category: 'Technology',
          readMore: '/patient-education/air-abrasion'
        },
        {
          title: 'Laser Dentistry',
          excerpt: 'Laser technology provides precise, minimally invasive treatment options.',
          category: 'Technology',
          readMore: '/patient-education/laser-dentistry'
        },
        {
          title: 'Anesthesia Wand',
          excerpt: 'The anesthesia wand provides more comfortable and precise local anesthesia delivery.',
          category: 'Technology',
          readMore: '/patient-education/anesthesia-wand'
        }
      ]
    },
    {
      id: 'restorative',
      title: 'Restorative Technology',
      icon: '🦷',
      articles: [
        {
          title: 'Digital Dental Impressions',
          excerpt: 'Digital impressions eliminate the need for messy traditional impression materials.',
          category: 'Technology',
          readMore: '/patient-education/digital-dental-impressions'
        },
        {
          title: 'Same Day Crowns',
          excerpt: 'CEREC technology allows for same-day crown fabrication and placement.',
          category: 'Technology',
          readMore: '/patient-education/same-day-crowns'
        }
      ]
    }
  ];

  const activeCategory = technologyCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Dental Technology
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced technology for better dental care
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
                Technology
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Advanced Dental Technology
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-lg leading-relaxed">
                  Modern dental technology has revolutionized the way we provide dental care. From advanced diagnostic tools to minimally invasive treatment options, technology helps us provide more accurate, comfortable, and efficient dental care.
                </p>
                <p className="text-lg leading-relaxed">
                  Our practice is equipped with the latest dental technology to ensure you receive the highest quality care with maximum comfort and precision.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔬</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    Cutting-Edge Technology
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    State-of-the-art equipment for precise diagnosis and treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Dental Technology Categories
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Explore the latest advances in dental technology
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologyCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                {activeCategory?.title}
              </h3>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {activeCategory?.articles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                      {article.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {article.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {article.excerpt}
                  </p>
                  <Link 
                    href={article.readMore}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
                    style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Experience Advanced Dental Technology
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Schedule a consultation to see how our advanced technology can improve your dental care experience.
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