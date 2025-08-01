'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function OralHealthPage() {
  const [activeTab, setActiveTab] = useState('general-oral-health');

  const oralHealthCategories = [
    {
      id: 'general-oral-health',
      title: 'General Oral Health',
      icon: '🦷',
      articles: [
        {
          title: 'Aging and Oral Health',
          excerpt: 'It\'s important to take good care of your teeth as you age. Elderly patients often need more frequent visits to stay healthy.',
          category: 'Oral Health',
          readMore: '/patient-education/aging-and-oral-health'
        },
        {
          title: 'Bad Breath',
          excerpt: 'Halitosis, also known as chronic bad breath, is often the result of improper care of your oral health.',
          category: 'Oral Health',
          readMore: '/patient-education/bad-breath'
        },

      ]
    },
    {
      id: 'medical-conditions',
      title: 'Medical Conditions & Oral Health',
      icon: '💊',
      articles: [
        {
          title: 'Antibiotic Premedication',
          excerpt: 'Our bodies are home to bacteria which are common in our mouths, but which can be dangerous elsewhere.',
          category: 'Oral Health',
          readMore: '/patient-education/antibiotic-premedication'
        },

      ]
    },

  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/General Dentistry.jpeg"
            alt="Oral Health"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Oral Health
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Comprehensive guide to maintaining optimal oral health and preventing dental problems
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
                Oral Health
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
              Understanding Oral Health
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Good oral health is essential for overall well-being. Our comprehensive guide covers everything from basic oral hygiene to managing medical conditions that affect your dental health.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {oralHealthCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-all duration-300 ${
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
          {oralHealthCategories.map((category) => (
            <div key={category.id} className={activeTab === category.id ? 'block' : 'hidden'}>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.articles.map((article, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                        {article.title}
                      </h3>
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
          ))}
        </div>
      </section>

      {/* Why Oral Health Matters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Why Oral Health Matters
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-lg leading-relaxed">
                  Your oral health is closely connected to your overall health. Poor oral hygiene can lead to various health problems, including heart disease, diabetes complications, and respiratory infections.
                </p>
                <p className="text-lg leading-relaxed">
                  Regular dental checkups, proper brushing and flossing, and a healthy diet are essential for maintaining good oral health and preventing dental problems before they become serious.
                </p>
                <p className="text-lg leading-relaxed">
                  Understanding how medical conditions, medications, and lifestyle factors affect your oral health can help you make informed decisions about your dental care.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🦷</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    Your Oral Health Matters
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    Good oral health is essential for overall well-being and quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Improve Your Oral Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Schedule a comprehensive dental exam and cleaning to ensure your oral health is in optimal condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Appointment
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