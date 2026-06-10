'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function OrthodonticsPage() {
  const [activeTab, setActiveTab] = useState('early-treatment');

  const orthodonticsCategories = [
    {
      id: 'early-treatment',
      title: 'Early Treatment',
      icon: 'ðŸ¦·',
      articles: [
        {
          title: 'Early Orthodontic Treatment',
          excerpt: 'Early orthodontic treatment can prevent more serious problems from developing and may make treatment at a later age shorter and less complicated.',
          category: 'Orthodontics',
          readMore: '/patient-education/early-orthodontic-treatment'
        }
      ]
    }
  ];

  const activeCategory = orthodonticsCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-8 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', lineHeight: '1.4' }}>
            Orthodontics
          </h1>
          <p className="text-[16px] md:text-[16px] text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Straightening teeth and improving smiles
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-2 md:py-4 bg-gray-50">
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
                Orthodontics
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-6 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', lineHeight: '1.4' }}>
                Orthodontic Care
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-4 md:space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  Orthodontics is a branch of dentistry that specializes in diagnosing, preventing, and treating dental and facial irregularities. The goal is to create a healthy, functional bite and a beautiful smile.
                </p>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  Modern orthodontic treatment can address a wide range of issues including crooked teeth, overcrowding, gaps, overbites, underbites, and crossbites.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-6 md:p-8">
                <div className="text-center">
                  <div className="text-4xl md:text-6xl mb-4">ðŸ¦·</div>
                  <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', lineHeight: '1.4' }}>
                    Beautiful Smiles
                  </h3>
                  <p className="text-[16px] md:text-base text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    Creating healthy, functional, and beautiful smiles through orthodontic treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-6 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', lineHeight: '1.4' }}>
              Orthodontic Topics
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-[16px] md:text-[16px] text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Learn about orthodontic treatment options and procedures
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {orthodonticsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-[15px] md:text-base ${
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
            <div className="mb-6 md:mb-8">
              <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', lineHeight: '1.4' }}>
                {activeCategory?.title}
              </h3>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {activeCategory?.articles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                      {article.category}
                    </span>
                  </div>
                  <h4 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', lineHeight: '1.4' }}>
                    {article.title}
                  </h4>
                  <p className="text-[16px] md:text-base text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {article.excerpt}
                  </p>
                  <Link 
                    href={article.readMore}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors text-[15px] md:text-base"
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
      <section className="py-6 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[27px] md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', lineHeight: '1.4' }}>
            Ready for a Beautiful Smile?
          </h2>
          <p className="text-[16px] md:text-[16px] text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our orthodontic team can help you achieve the smile you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Consultation
            </Link>
            <a href="tel:+12099551800" className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 