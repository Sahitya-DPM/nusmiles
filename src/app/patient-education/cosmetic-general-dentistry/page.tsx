'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function CosmeticGeneralDentistryPage() {
  const [activeTab, setActiveTab] = useState('cosmetic');

  const articleCategories = [
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      icon: '✨',
      articles: [
        {
          title: 'Bonding',
          excerpt: 'Dental bonding is a conservative cosmetic treatment that improves the appearance of chipped, discolored, or misshapen teeth using composite resin to repair and restore the tooth surface.',
          category: 'Cosmetic Dentistry',
          readMore: '/patient-education/bonding',
          image: '/Cosmetic Dentistry.jpeg'
        },
        {
          title: 'Dental Veneers',
          excerpt: 'Porcelain veneers are thin, custom-made shells designed to cover the front surface of teeth to improve their appearance.',
          category: 'Cosmetic Dentistry',
          readMore: '/patient-education/veneers',
          image: '/Cosmetic Dentistry.jpeg'
        },
        {
          title: 'Teeth Whitening',
          excerpt: 'Professional teeth whitening is a safe and effective way to brighten your smile and remove stains and discoloration.',
          category: 'Cosmetic Dentistry',
          readMore: '/patient-education/teeth-whitening',
          image: '/Cosmetic Dentistry.jpeg'
        },
        {
          title: 'Dental Crowns',
          excerpt: 'Dental crowns are tooth-shaped caps that restore the shape, size, strength, and appearance of damaged teeth.',
          category: 'Cosmetic Dentistry',
          readMore: '/patient-education/dental-crowns',
          image: '/General Dentistry.jpeg'
        }
      ]
    },
    {
      id: 'general',
      title: 'General Dentistry',
      icon: '🦷',
      articles: [
        {
          title: 'Bridges',
          excerpt: 'When you lose a tooth, it affects not just the appearance but also the function of your smile. Dental bridges can restore both function and aesthetics.',
          category: 'General Dentistry',
          readMore: '/patient-education/bridges',
          image: '/General Dentistry.jpeg'
        },
        {
          title: 'Dental Fillings',
          excerpt: 'Modern dental fillings restore teeth damaged by decay and help prevent further decay by closing off spaces where bacteria can enter.',
          category: 'General Dentistry',
          readMore: '/patient-education/dental-fillings',
          image: '/General Dentistry.jpeg'
        },
        {
          title: 'Dental Cleanings',
          excerpt: 'Regular dental cleanings are essential for maintaining good oral health and preventing gum disease and tooth decay.',
          category: 'General Dentistry',
          readMore: '/patient-education/dental-cleanings',
          image: '/General Dentistry.jpeg'
        },
        {
          title: 'Tooth Contouring',
          excerpt: 'Tooth contouring is a cosmetic dental procedure that reshapes and sculpts teeth to improve their appearance and create a more harmonious smile.',
          category: 'General Dentistry',
          readMore: '/patient-education/tooth-contouring',
          image: '/General Dentistry.jpeg'
        }
      ]
    },
    {
      id: 'restorative',
      title: 'Restorative Dentistry',
      icon: '🔧',
      articles: [
        {
          title: 'Dental Implants',
          excerpt: 'Dental implants are artificial tooth roots that provide a permanent base for fixed, replacement teeth.',
          category: 'Restorative Dentistry',
          readMore: '/patient-education/dental-implants',
          image: '/Dental Implants.jpeg'
        },
        {
          title: 'Root Canal Therapy',
          excerpt: 'Root canal therapy is a treatment used to repair and save a tooth that is badly decayed or becomes infected.',
          category: 'Restorative Dentistry',
          readMore: '/patient-education/root-canal-therapy',
          image: '/General Dentistry.jpeg'
        },
        {
          title: 'Dental Extractions',
          excerpt: 'Tooth extraction is the removal of a tooth from its socket in the bone, typically performed when a tooth is severely damaged.',
          category: 'Restorative Dentistry',
          readMore: '/patient-education/dental-extractions',
          image: '/General Dentistry.jpeg'
        },
        {
          title: 'Dental Sealants',
          excerpt: 'Dental sealants are thin, protective coatings that adhere to the chewing surface of your back teeth to prevent cavities.',
          category: 'Restorative Dentistry',
          readMore: '/patient-education/dental-sealants',
          image: '/General Dentistry.jpeg'
        }
      ]
    }
  ];

  const activeCategory = articleCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Cosmetic Dentistry.jpeg"
            alt="Cosmetic & General Dentistry"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Cosmetic & General Dentistry
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Comprehensive dental care for a healthy, beautiful smile
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
              <li className="text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Cosmetic & General Dentistry
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Your Complete Guide to Dental Care
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              From routine cleanings to advanced cosmetic procedures, we provide comprehensive dental care to help you achieve and maintain a healthy, beautiful smile. Learn about the latest techniques and treatments available in modern dentistry.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {articleCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                {activeCategory?.title}
              </h3>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {activeCategory?.articles.map((article, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Featured Services
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🦷</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Preventive Care
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Regular checkups, cleanings, and preventive treatments to maintain optimal oral health.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cosmetic Procedures
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Advanced cosmetic treatments to enhance your smile and boost your confidence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Restorative Care
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Comprehensive restorative treatments to repair and strengthen damaged teeth.
              </p>
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
            Schedule a consultation with Dr. Parikh to discuss your cosmetic and general dental needs.
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