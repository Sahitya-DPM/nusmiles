'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function PatientEducationPage() {
  const [activeTab, setActiveTab] = useState('cosmetic-general');

  const educationCategories = [
    {
      id: 'cosmetic-general',
      title: 'Cosmetic & General Dentistry',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      articles: [
        {
          title: 'Bonding',
          excerpt: 'Dental bonding is a conservative cosmetic treatment that improves the appearance of chipped, discolored, or misshapen teeth using composite resin to repair and restore the tooth surface.',
          category: 'Cosmetic & General Dentistry',
          readMore: '/patient-education/cosmetic-general-dentistry'
        },
        {
          title: 'Bridges',
          excerpt: 'When you lose a tooth, it affects not just the appearance but also the function of your smile. Dental bridges can restore both function and aesthetics.',
          category: 'Cosmetic & General Dentistry',
          readMore: '/patient-education/cosmetic-general-dentistry'
        }
      ]
    },
    {
      id: 'emergency-care',
      title: 'Emergency Care',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      articles: [
        {
          title: 'Gum Emergencies',
          excerpt: 'Gum emergencies can range from minor irritation to severe infections that require immediate attention. Understanding the signs and symptoms can help you determine when to seek emergency dental care.',
          category: 'Emergency Care',
          readMore: '/patient-education/emergency-care'
        },
        {
          title: 'Orthodontic Emergencies',
          excerpt: 'Orthodontic emergencies can occur with braces, aligners, or other orthodontic appliances. Knowing how to handle these situations can prevent complications and ensure your treatment stays on track.',
          category: 'Emergency Care',
          readMore: '/patient-education/emergency-care'
        },
        {
          title: 'Tooth Pain',
          excerpt: 'Tooth pain can be caused by various factors including decay, infection, trauma, or other dental issues. Understanding the different types of tooth pain can help you identify when emergency care is needed.',
          category: 'Emergency Care',
          readMore: '/patient-education/emergency-care'
        },
        {
          title: 'Traumatic Dental Injuries',
          excerpt: 'Traumatic dental injuries can occur from accidents, sports injuries, or other impacts to the mouth. Quick action and proper emergency care can make a significant difference in preserving your teeth.',
          category: 'Emergency Care',
          readMore: '/patient-education/emergency-care'
        }
      ]
    },
    {
      id: 'endodontics',
      title: 'Endodontics',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      articles: [
        {
          title: 'Root Canal Treatment',
          excerpt: 'Root canal treatment is a dental procedure used to treat infection at the center of a tooth. This treatment can save a tooth that might otherwise need to be removed.',
          category: 'Endodontics',
          readMore: '/patient-education/endodontics'
        },
        {
          title: 'Root Canal FAQs',
          excerpt: 'Common questions and answers about root canal treatment, including what to expect during the procedure and recovery.',
          category: 'Endodontics',
          readMore: '/patient-education/endodontics'
        },
        {
          title: 'Apicoectomy',
          excerpt: 'An apicoectomy is a surgical procedure that removes the tip of a tooth root and surrounding infected tissue when a root canal treatment is not sufficient.',
          category: 'Endodontics',
          readMore: '/patient-education/endodontics'
        },
        {
          title: 'Broken Teeth',
          excerpt: 'Broken teeth can cause pain and sensitivity. Understanding the different types of fractures and treatment options is important for proper care.',
          category: 'Endodontics',
          readMore: '/patient-education/endodontics'
        }
      ]
    },
    {
      id: 'implant-dentistry',
      title: 'Implant Dentistry',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
        </svg>
      ),
      articles: [
        {
          title: 'Dental Implants',
          excerpt: 'Dental implants are the most advanced and permanent solution for replacing missing teeth. They provide a foundation for replacement teeth that look, feel, and function like natural teeth.',
          category: 'Implant Dentistry',
          readMore: '/patient-education/dental-implants'
        }
      ]
    },
                        {
      id: 'oral-health',
      title: 'Oral Health',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      articles: [
                    {
                      title: 'Aging and Oral Health',
                      excerpt: 'It\'s important to take good care of your teeth as you age. Elderly patients often need more frequent visits to stay healthy.',
                      category: 'Oral Health',
                      readMore: '/patient-education/oral-health'
                    },
                    {
                      title: 'Bad Breath',
                      excerpt: 'Halitosis, also known as chronic bad breath, is often the result of improper care of your oral health.',
                      category: 'Oral Health',
                      readMore: '/patient-education/oral-health'
                    },
                    {
                      title: 'Antibiotic Premedication',
                      excerpt: 'Our bodies are home to bacteria which are common in our mouths, but which can be dangerous elsewhere.',
                      category: 'Oral Health',
                      readMore: '/patient-education/oral-health'
                    },
                    {
                      title: 'Blood Pressure Medications and Your Oral Health',
                      excerpt: 'If you experience high blood pressure, it\'s vital that you discuss possible medications with your health care professionals, including your dentist.',
                      category: 'Oral Health',
                      readMore: '/patient-education/oral-health'
                    }
                  ]
                },
                {
                  id: 'oral-hygiene',
                  title: 'Oral Hygiene',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  ),
                  articles: [
                    {
                      title: 'How to Brush and Floss',
                      excerpt: 'Proper brushing and flossing techniques are the foundation of good oral hygiene. Learn the correct methods to keep your teeth and gums healthy.',
                      category: 'Oral Hygiene',
                      readMore: '/patient-education/oral-hygiene'
                    },
                    {
                      title: 'How to Prevent Cavities',
                      excerpt: 'Cavity prevention is key to maintaining healthy teeth. Learn effective strategies to prevent tooth decay.',
                      category: 'Oral Hygiene',
                      readMore: '/patient-education/oral-hygiene'
                    },
                    {
                      title: 'Interdental Cleaning Devices',
                      excerpt: 'Interdental cleaning devices help clean between teeth where brushing alone cannot reach. Discover the best options for your needs.',
                      category: 'Oral Hygiene',
                      readMore: '/patient-education/oral-hygiene'
                    },
                    {
                      title: 'Mouthwash',
                      excerpt: 'Mouthwash can be a valuable addition to your oral hygiene routine. Understand the different types and their benefits.',
                      category: 'Oral Hygiene',
                      readMore: '/patient-education/oral-hygiene'
                    },
                    {
                      title: 'Oral Hygiene for Kids',
                      excerpt: 'Teaching children proper oral hygiene habits from an early age sets them up for a lifetime of healthy teeth and gums.',
                      category: 'Oral Hygiene',
                      readMore: '/patient-education/oral-hygiene'
                    },
                    {
                      title: 'Toothpaste',
                      excerpt: 'Choosing the right toothpaste is important for maintaining good oral health. Learn about different types and ingredients.',
                      category: 'Oral Hygiene',
                      readMore: '/patient-education/oral-hygiene'
                    }
                  ]
                },
                {
                  id: 'oral-surgery',
                  title: 'Oral Surgery',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  articles: [
                    {
                      title: 'Blood Thinners and Oral Surgery',
                      excerpt: 'Blood thinners can affect oral surgery procedures. Understand the considerations and precautions needed.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    },
                    {
                      title: 'Cleft Lip and Palate',
                      excerpt: 'Cleft lip and palate are congenital conditions that may require surgical intervention. Learn about treatment options and care.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    },
                    {
                      title: 'Corrective Jaw Surgery',
                      excerpt: 'Corrective jaw surgery can improve jaw alignment, function, and appearance. Understand when this procedure is recommended.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    },
                    {
                      title: 'Extractions',
                      excerpt: 'Dental extractions involve removing teeth that are damaged, decayed, or causing problems. Learn about the different types of extractions and what to expect.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    },
                    {
                      title: 'Facial Trauma and Reconstructive Surgery',
                      excerpt: 'Facial trauma can result from accidents or injuries. Reconstructive surgery can restore function and appearance.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    },
                    {
                      title: 'Oral Cancer Screenings and Surgery',
                      excerpt: 'Early detection of oral cancer is crucial. Learn about screening procedures and surgical treatment options.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    },
                    {
                      title: 'Oral Diagnosis and Biopsies',
                      excerpt: 'Proper diagnosis is essential for effective treatment. Learn about diagnostic procedures and biopsy processes.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    },
                    {
                      title: 'Oral Surgery Procedures',
                      excerpt: 'Various oral surgery procedures are available to address different dental and oral health issues. Learn about common procedures and their purposes.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    },
                    {
                      title: 'Sedation Dentistry',
                      excerpt: 'Sedation dentistry can help patients feel more comfortable during oral surgery procedures. Learn about different sedation options.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    },
                    {
                      title: 'Sinus Surgery',
                      excerpt: 'Sinus surgery may be needed to address sinus-related dental issues. Learn about the connection between sinuses and oral health.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    },
                    {
                      title: 'Wisdom Teeth Removal',
                      excerpt: 'Wisdom teeth removal is a common oral surgery procedure. Understand when it\'s needed and what the recovery process involves.',
                      category: 'Oral Surgery',
                      readMore: '/patient-education/oral-surgery'
                    }
                  ]
                },
    {
      id: 'orthodontics',
      title: 'Orthodontics',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      articles: [
        {
          title: 'Early Orthodontic Treatment',
          excerpt: 'Early orthodontic treatment can prevent more serious problems from developing and may make treatment at a later age shorter and less complicated.',
          category: 'Orthodontics',
          readMore: '/patient-education/orthodontics'
        }
      ]
    },
    {
      id: 'pediatric-dentistry',
      title: 'Pediatric Dentistry',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      articles: [
        {
          title: 'About Pediatric Dentistry',
          excerpt: 'Pediatric dentistry is the study, practice, teaching, and research of oral care treatments and preventions in children.',
          category: 'Pediatric Dentistry',
          readMore: '/patient-education/pediatric-dentistry'
        },
        {
          title: 'Your Child\'s First Dental Appointment',
          excerpt: 'Learn about preparing for your child\'s first dental visit and what to expect during the appointment.',
          category: 'Pediatric Dentistry',
          readMore: '/patient-education/pediatric-dentistry'
        },
        {
          title: 'Your Child\'s First Teeth',
          excerpt: 'Understanding the development of your child\'s first teeth and how to care for them.',
          category: 'Pediatric Dentistry',
          readMore: '/patient-education/pediatric-dentistry'
        },
        {
          title: 'Fluoride and Your Child',
          excerpt: 'Learn about the importance of fluoride in preventing tooth decay in children.',
          category: 'Pediatric Dentistry',
          readMore: '/patient-education/pediatric-dentistry'
        },
        {
          title: 'Sealants',
          excerpt: 'Dental sealants can help protect your child\'s teeth from cavities and decay.',
          category: 'Pediatric Dentistry',
          readMore: '/patient-education/pediatric-dentistry'
        },
        {
          title: 'Space Maintainers',
          excerpt: 'Space maintainers help preserve space for permanent teeth when baby teeth are lost early.',
          category: 'Pediatric Dentistry',
          readMore: '/patient-education/pediatric-dentistry'
        },
        {
          title: 'Pregnancy and Your Child\'s Developing Teeth',
          excerpt: 'How maternal health and nutrition during pregnancy affects your child\'s dental development.',
          category: 'Pediatric Dentistry',
          readMore: '/patient-education/pediatric-dentistry'
        },
        {
          title: 'Thumb Sucking',
          excerpt: 'Understanding thumb sucking habits and their effects on dental development.',
          category: 'Pediatric Dentistry',
          readMore: '/patient-education/pediatric-dentistry'
        },
        {
          title: 'Nitrous Oxide for Children',
          excerpt: 'Nitrous oxide can help children feel more comfortable during dental procedures.',
          category: 'Pediatric Dentistry',
          readMore: '/patient-education/pediatric-dentistry'
        },
        {
          title: 'Sleep Apnea in Children',
          excerpt: 'Understanding sleep apnea in children and its dental implications.',
          category: 'Pediatric Dentistry',
          readMore: '/patient-education/pediatric-dentistry'
        }
      ]
    },
    {
      id: 'periodontal-therapy',
      title: 'Periodontal Therapy',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      articles: [
        {
          title: 'Periodontal Therapy Overview',
          excerpt: 'Periodontal therapy focuses on the prevention, diagnosis, and treatment of diseases affecting the gums and supporting structures of the teeth.',
          category: 'Periodontal Therapy',
          readMore: '/patient-education/periodontal-therapy'
        }
      ]
    },
    {
      id: 'technology',
      title: 'Technology',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      articles: [
        {
          title: 'Digital X-Rays',
          excerpt: 'Digital X-rays provide clearer images with less radiation exposure compared to traditional film X-rays.',
          category: 'Technology',
          readMore: '/patient-education/technology'
        },
        {
          title: 'Cone Beam CT Imaging',
          excerpt: 'Cone Beam CT provides 3D imaging for more accurate diagnosis and treatment planning.',
          category: 'Technology',
          readMore: '/patient-education/technology'
        },
        {
          title: 'Intraoral Camera',
          excerpt: 'Intraoral cameras allow patients to see detailed images of their teeth and gums.',
          category: 'Technology',
          readMore: '/patient-education/technology'
        },
        {
          title: 'Laser Decay Diagnostics',
          excerpt: 'Laser technology helps detect cavities and decay in their earliest stages.',
          category: 'Technology',
          readMore: '/patient-education/technology'
        },
        {
          title: 'Air Abrasion',
          excerpt: 'Air abrasion is a gentle alternative to traditional drilling for cavity preparation.',
          category: 'Technology',
          readMore: '/patient-education/technology'
        },
        {
          title: 'Laser Dentistry',
          excerpt: 'Laser technology provides precise, minimally invasive treatment options.',
          category: 'Technology',
          readMore: '/patient-education/technology'
        },
        {
          title: 'Anesthesia Wand',
          excerpt: 'The anesthesia wand provides more comfortable and precise local anesthesia delivery.',
          category: 'Technology',
          readMore: '/patient-education/technology'
        },
        {
          title: 'Digital Dental Impressions',
          excerpt: 'Digital impressions eliminate the need for messy traditional impression materials.',
          category: 'Technology',
          readMore: '/patient-education/technology'
        },
        {
          title: 'Same Day Crowns',
          excerpt: 'CEREC technology allows for same-day crown fabrication and placement.',
          category: 'Technology',
          readMore: '/patient-education/technology'
        }
      ]
    }
  ];

  const activeCategory = educationCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Cosmetic Dentistry.jpeg"
            alt="Patient Education"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Patient Education
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Comprehensive dental education resources to help you understand your oral health
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Your Dental Health Education Hub
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Knowledge is power when it comes to your dental health. Explore our comprehensive educational resources organized by category to learn more about various dental procedures, treatments, and oral health topics.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {educationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 border-2 ${
                  activeTab === category.id
                    ? 'bg-primary text-white border-primary shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-primary/30 shadow-md hover:shadow-lg'
                }`}
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                <div className={`${activeTab === category.id ? 'text-white' : 'text-primary'}`}>
                  {category.icon}
                </div>
                <span className="whitespace-nowrap">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                {activeCategory?.title}
              </h3>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory?.articles.map((article, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 group">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                      {article.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {article.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {article.excerpt}
                  </p>
                  <Link 
                    href={article.readMore}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors group-hover:translate-x-1 duration-300"
                    style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
                  >
                    {article.category === 'Cosmetic & General Dentistry' ? 'View All Articles' : 'Read More'}
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            {activeCategory?.articles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  Coming Soon
                </h4>
                <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  We're working on adding more educational content for this category. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Educational Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Educational Videos
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Take a few minutes to watch our educational videos and learn more about different dental treatments and procedures
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-center text-white">
              <div className="text-6xl mb-6">🎬</div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Video topics include general & cosmetic dentistry, implants, oral health and hygiene, orthodontics, and preventative dentistry.
              </h3>
              <p className="text-lg mb-8 opacity-90" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Our educational videos are designed to help you understand various dental procedures and make informed decisions about your oral health.
              </p>
              <Link 
                href="/patient-education/educational-videos" 
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                Watch Educational Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Have Questions About Your Dental Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our team is here to help you understand your treatment options and answer any questions you may have.
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