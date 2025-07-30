'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function OralHygienePage() {
  const [activeTab, setActiveTab] = useState('daily-care');

  const oralHygieneCategories = [
    {
      id: 'daily-care',
      title: 'Daily Care',
      icon: '🦷',
      articles: [
        {
          title: 'How to Brush and Floss',
          excerpt: 'Proper brushing and flossing techniques are the foundation of good oral hygiene. Learn the correct methods to keep your teeth and gums healthy.',
          category: 'Oral Hygiene',
          readMore: '/patient-education/how-to-brush-and-floss'
        },
        {
          title: 'Toothpaste',
          excerpt: 'Choosing the right toothpaste is important for maintaining good oral health. Learn about different types and ingredients.',
          category: 'Oral Hygiene',
          readMore: '/patient-education/toothpaste'
        },
        {
          title: 'Mouthwash',
          excerpt: 'Mouthwash can be a valuable addition to your oral hygiene routine. Understand the different types and their benefits.',
          category: 'Oral Hygiene',
          readMore: '/patient-education/mouthwash'
        }
      ]
    },
    {
      id: 'prevention',
      title: 'Prevention',
      icon: '🛡️',
      articles: [
        {
          title: 'How to Prevent Cavities',
          excerpt: 'Cavity prevention is key to maintaining healthy teeth. Learn effective strategies to prevent tooth decay.',
          category: 'Oral Hygiene',
          readMore: '/patient-education/how-to-prevent-cavities'
        },
        {
          title: 'Interdental Cleaning Devices',
          excerpt: 'Interdental cleaning devices help clean between teeth where brushing alone cannot reach. Discover the best options for your needs.',
          category: 'Oral Hygiene',
          readMore: '/patient-education/interdental-cleaning-devices'
        }
      ]
    },
    {
      id: 'special-care',
      title: 'Special Care',
      icon: '👶',
      articles: [
        {
          title: 'Oral Hygiene for Kids',
          excerpt: 'Teaching children proper oral hygiene habits from an early age sets them up for a lifetime of healthy teeth and gums.',
          category: 'Oral Hygiene',
          readMore: '/patient-education/oral-hygiene-for-kids'
        }
      ]
    }
  ];

  const activeCategory = oralHygieneCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Oral Hygiene
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Essential practices for maintaining healthy teeth and gums
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
                Oral Hygiene
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
                The Foundation of Dental Health
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-lg leading-relaxed">
                  Good oral hygiene is the cornerstone of dental health. It involves daily practices that help prevent tooth decay, gum disease, and other oral health problems.
                </p>
                <p className="text-lg leading-relaxed">
                  Proper oral hygiene includes brushing your teeth at least twice a day, flossing daily, using mouthwash, and maintaining a healthy diet. These practices help remove plaque and bacteria that can cause dental problems.
                </p>
                <p className="text-lg leading-relaxed">
                  Regular dental check-ups and professional cleanings are also essential components of good oral hygiene, as they help identify and address issues before they become serious problems.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🦷</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    Daily Oral Care
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    Consistent daily practices are essential for maintaining optimal oral health.
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
              Oral Hygiene Topics
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Explore different aspects of oral hygiene and learn how to maintain optimal dental health
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {oralHygieneCategories.map((category) => (
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

      {/* Why Oral Hygiene Matters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Why Oral Hygiene Matters
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🦷</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Prevents Cavities
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Regular brushing and flossing remove plaque that can lead to tooth decay and cavities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">😊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Fresh Breath
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Good oral hygiene helps prevent bad breath and keeps your mouth feeling fresh.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Gum Health
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Proper care prevents gum disease and maintains healthy gum tissue.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Overall Health
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Oral health is connected to overall health, affecting heart disease and other conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Improve Your Oral Hygiene?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our team can help you develop the best oral hygiene routine for your specific needs.
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