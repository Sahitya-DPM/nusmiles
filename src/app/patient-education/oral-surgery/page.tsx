'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function OralSurgeryPage() {
  const [activeTab, setActiveTab] = useState('extractions');

  const oralSurgeryCategories = [
    {
      id: 'extractions',
      title: 'Extractions',
      icon: '🦷',
      articles: [
        {
          title: 'Extractions',
          excerpt: 'Dental extractions involve removing teeth that are damaged, decayed, or causing problems. Learn about the different types of extractions and what to expect.',
          category: 'Oral Surgery',
          readMore: '/patient-education/extractions'
        },
        {
          title: 'Wisdom Teeth Removal',
          excerpt: 'Wisdom teeth removal is a common oral surgery procedure. Understand when it\'s needed and what the recovery process involves.',
          category: 'Oral Surgery',
          readMore: '/patient-education/wisdom-teeth-removal'
        }
      ]
    },
    {
      id: 'surgical-procedures',
      title: 'Surgical Procedures',
      icon: '🔪',
      articles: [
        {
          title: 'Oral Surgery Procedures',
          excerpt: 'Various oral surgery procedures are available to address different dental and oral health issues. Learn about common procedures and their purposes.',
          category: 'Oral Surgery',
          readMore: '/patient-education/oral-surgery-procedures'
        },
        {
          title: 'Corrective Jaw Surgery',
          excerpt: 'Corrective jaw surgery can improve jaw alignment, function, and appearance. Understand when this procedure is recommended.',
          category: 'Oral Surgery',
          readMore: '/patient-education/corrective-jaw-surgery'
        },
        {
          title: 'Sinus Surgery',
          excerpt: 'Sinus surgery may be needed to address sinus-related dental issues. Learn about the connection between sinuses and oral health.',
          category: 'Oral Surgery',
          readMore: '/patient-education/sinus-surgery'
        }
      ]
    },
    {
      id: 'specialized-surgery',
      title: 'Specialized Surgery',
      icon: '🏥',
      articles: [
        {
          title: 'Cleft Lip and Palate',
          excerpt: 'Cleft lip and palate are congenital conditions that may require surgical intervention. Learn about treatment options and care.',
          category: 'Oral Surgery',
          readMore: '/patient-education/cleft-lip-and-palate'
        },
        {
          title: 'Facial Trauma and Reconstructive Surgery',
          excerpt: 'Facial trauma can result from accidents or injuries. Reconstructive surgery can restore function and appearance.',
          category: 'Oral Surgery',
          readMore: '/patient-education/facial-trauma-and-reconstructive-surgery'
        },
        {
          title: 'Oral Cancer Screenings and Surgery',
          excerpt: 'Early detection of oral cancer is crucial. Learn about screening procedures and surgical treatment options.',
          category: 'Oral Surgery',
          readMore: '/patient-education/oral-cancer-screenings-and-surgery'
        }
      ]
    },
    {
      id: 'diagnostic-and-care',
      title: 'Diagnostic and Care',
      icon: '🔬',
      articles: [
        {
          title: 'Oral Diagnosis and Biopsies',
          excerpt: 'Proper diagnosis is essential for effective treatment. Learn about diagnostic procedures and biopsy processes.',
          category: 'Oral Surgery',
          readMore: '/patient-education/oral-diagnosis-and-biopsies'
        },
        {
          title: 'Blood Thinners and Oral Surgery',
          excerpt: 'Blood thinners can affect oral surgery procedures. Understand the considerations and precautions needed.',
          category: 'Oral Surgery',
          readMore: '/patient-education/blood-thinners-and-oral-surgery'
        },
        {
          title: 'Sedation Dentistry',
          excerpt: 'Sedation dentistry can help patients feel more comfortable during oral surgery procedures. Learn about different sedation options.',
          category: 'Oral Surgery',
          readMore: '/patient-education/sedation-dentistry'
        }
      ]
    }
  ];

  const activeCategory = oralSurgeryCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Oral Surgery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced surgical procedures for complex dental and oral health issues
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
                Oral Surgery
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
                Specialized Surgical Care
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-lg leading-relaxed">
                  Oral surgery encompasses a wide range of surgical procedures involving the mouth, jaw, and face. These procedures are performed by oral and maxillofacial surgeons who have extensive training in both dentistry and surgery.
                </p>
                <p className="text-lg leading-relaxed">
                  From simple tooth extractions to complex reconstructive procedures, oral surgery can address various conditions including impacted teeth, jaw misalignment, facial trauma, and oral pathology.
                </p>
                <p className="text-lg leading-relaxed">
                  Modern oral surgery techniques prioritize patient comfort and safety, often incorporating advanced technology and sedation options to ensure a positive experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    Expert Surgical Care
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    Advanced procedures performed with precision and care for optimal outcomes.
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
              Oral Surgery Procedures
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Explore different types of oral surgery procedures and understand what each involves
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {oralSurgeryCategories.map((category) => (
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

      {/* Why Choose Oral Surgery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Why Choose Oral Surgery?
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Expert Surgeons
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Oral surgeons have extensive training in both dentistry and surgery, ensuring the highest level of expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Advanced Technology
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                State-of-the-art equipment and techniques for precise, minimally invasive procedures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">😴</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Comfort Options
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Various sedation options available to ensure patient comfort during procedures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Comprehensive Care
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Complete treatment from diagnosis through recovery with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Need Oral Surgery Consultation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our experienced oral surgeons can evaluate your needs and recommend the best treatment options.
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