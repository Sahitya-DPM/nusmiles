'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function EndodonticsPage() {
  const [activeTab, setActiveTab] = useState('root-canal-treatment');

  const endodonticCategories = [
    {
      id: 'root-canal-treatment',
      title: 'Root Canal Treatment',
      icon: '🦷',
      articles: [
        {
          title: 'Root Canal Treatment',
          excerpt: 'Root canal treatment is a dental procedure used to treat infection at the center of a tooth. This treatment can save a tooth that might otherwise need to be removed.',
          category: 'Endodontics',
          readMore: '/patient-education/root-canal-treatment'
        },
        {
          title: 'Root Canal FAQs',
          excerpt: 'Common questions and answers about root canal treatment, including what to expect during the procedure and recovery.',
          category: 'Endodontics',
          readMore: '/patient-education/root-canal-faqs'
        }
      ]
    }
  ];

  const activeCategory = endodonticCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/General Dentistry.jpeg"
            alt="Endodontics"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Endodontics
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced root canal therapy and endodontic treatments
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
                Endodontics
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
              Understanding Endodontics
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Endodontics is the branch of dentistry that focuses on the diagnosis and treatment of diseases and injuries of the dental pulp and surrounding tissues. Our endodontic treatments are designed to save your natural teeth and maintain your oral health.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {endodonticCategories.map((category) => (
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

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {activeCategory?.articles.map((article, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
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

      {/* Why Choose Endodontics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Why Choose Endodontic Treatment?
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🦷</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Save Natural Teeth
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Endodontic treatment can save teeth that might otherwise need to be extracted, preserving your natural smile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">😊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Maintain Function
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Preserve normal biting force and sensation, allowing you to eat and speak naturally.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Prevent Further Damage
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Stop the spread of infection and prevent damage to surrounding teeth and tissues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cost Effective
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Often more cost-effective than tooth extraction and replacement with implants or bridges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Need Endodontic Treatment?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            If you're experiencing tooth pain or have been told you need a root canal, contact us for expert endodontic care.
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