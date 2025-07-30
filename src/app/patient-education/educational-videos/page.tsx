'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function EducationalVideosPage() {
  const [activeTab, setActiveTab] = useState('general-cosmetic');

  const videoCategories = [
    {
      id: 'general-cosmetic',
      title: 'General & Cosmetic Dentistry',
      icon: '🦷',
      description: 'Learn about various general and cosmetic dental procedures',
      videos: [
        {
          title: 'Dental Cleaning and Checkup',
          description: 'Understanding the importance of regular dental cleanings and comprehensive checkups',
          duration: '3:45',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Teeth Whitening Procedures',
          description: 'Professional teeth whitening options and what to expect during treatment',
          duration: '4:20',
          thumbnail: '/Cosmetic Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Dental Bonding Process',
          description: 'Step-by-step guide to dental bonding for cosmetic improvements',
          duration: '5:15',
          thumbnail: '/Cosmetic Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Dental Veneers Overview',
          description: 'Understanding porcelain veneers and their cosmetic benefits',
          duration: '4:30',
          thumbnail: '/Cosmetic Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Dental Crowns and Bridges',
          description: 'Restorative dentistry options for damaged or missing teeth',
          duration: '5:45',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        }
      ]
    },
    {
      id: 'dental-implants',
      title: 'Dental Implants',
      icon: '🦿',
      description: 'Comprehensive information about dental implant procedures and care',
      videos: [
        {
          title: 'Dental Implant Overview',
          description: 'Understanding what dental implants are and how they work',
          duration: '6:30',
          thumbnail: '/Dental Implants.jpeg',
          comingSoon: true
        },
        {
          title: 'All-on-4® Implant Procedure',
          description: 'Detailed explanation of the All-on-4® implant denture process',
          duration: '7:45',
          thumbnail: '/All+on+4+Dentla+Implant.jpg',
          comingSoon: true
        },
        {
          title: 'Implant Care and Maintenance',
          description: 'How to properly care for your dental implants for long-term success',
          duration: '4:10',
          thumbnail: '/Dental Implants.jpeg',
          comingSoon: true
        },
        {
          title: 'Bone Grafting for Implants',
          description: 'Understanding bone grafting procedures for implant preparation',
          duration: '5:20',
          thumbnail: '/Dental Implants.jpeg',
          comingSoon: true
        },
        {
          title: 'Implant vs Traditional Dentures',
          description: 'Comparing implant-supported dentures with traditional options',
          duration: '6:15',
          thumbnail: '/Dental Implants.jpeg',
          comingSoon: true
        }
      ]
    },
    {
      id: 'oral-health-hygiene',
      title: 'Oral Health & Hygiene',
      icon: '🧼',
      description: 'Essential tips and techniques for maintaining optimal oral health',
      videos: [
        {
          title: 'Proper Brushing Techniques',
          description: 'Learn the correct way to brush your teeth for maximum effectiveness',
          duration: '3:20',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Flossing Methods',
          description: 'Different flossing techniques and tools for optimal gum health',
          duration: '2:55',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Preventing Gum Disease',
          description: 'Understanding gum disease and how to prevent it through proper care',
          duration: '4:40',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Mouthwash and Oral Rinses',
          description: 'How to choose and use mouthwash for optimal oral health',
          duration: '3:10',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Tongue Cleaning and Bad Breath',
          description: 'Proper tongue cleaning techniques and preventing halitosis',
          duration: '3:30',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        }
      ]
    },
    {
      id: 'orthodontics',
      title: 'Orthodontics',
      icon: '🦷',
      description: 'Information about orthodontic treatments including Invisalign',
      videos: [
        {
          title: 'Invisalign Treatment Process',
          description: 'How Invisalign works and what to expect during treatment',
          duration: '5:30',
          thumbnail: '/invisalign1.jpeg',
          comingSoon: true
        },
        {
          title: 'Traditional Braces vs Invisalign',
          description: 'Comparing different orthodontic treatment options',
          duration: '6:15',
          thumbnail: '/Invisalign & Orthodontics.jpeg',
          comingSoon: true
        },
        {
          title: 'Orthodontic Care Tips',
          description: 'How to care for your teeth during orthodontic treatment',
          duration: '3:50',
          thumbnail: '/Invisalign & Orthodontics.jpeg',
          comingSoon: true
        },
        {
          title: 'Adult Orthodontic Treatment',
          description: 'Orthodontic options for adults and what to expect',
          duration: '4:25',
          thumbnail: '/Invisalign & Orthodontics.jpeg',
          comingSoon: true
        },
        {
          title: 'Retainers and Post-Treatment Care',
          description: 'Importance of retainers and maintaining your orthodontic results',
          duration: '3:40',
          thumbnail: '/Invisalign & Orthodontics.jpeg',
          comingSoon: true
        }
      ]
    },
    {
      id: 'pediatric-dentistry',
      title: 'Pediatric Dentistry',
      icon: '👶',
      description: 'Dental care for children and establishing good oral health habits',
      videos: [
        {
          title: 'First Dental Visit for Children',
          description: 'Preparing your child for their first dental appointment',
          duration: '4:15',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Teaching Kids to Brush',
          description: 'Fun and effective ways to teach children proper brushing',
          duration: '3:30',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Baby Teeth Care',
          description: 'Caring for your baby\'s first teeth and preventing early decay',
          duration: '3:45',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Dental Sealants for Children',
          description: 'How dental sealants protect children\'s teeth from cavities',
          duration: '3:20',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Thumb Sucking and Pacifier Use',
          description: 'Managing thumb sucking and pacifier habits in children',
          duration: '3:55',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        }
      ]
    },
    {
      id: 'emergency-care',
      title: 'Emergency Care',
      icon: '🚨',
      description: 'What to do in dental emergencies and when to seek immediate care',
      videos: [
        {
          title: 'Dental Emergency First Aid',
          description: 'Immediate steps to take in dental emergencies',
          duration: '4:50',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Broken Tooth Treatment',
          description: 'What to do if you break or chip a tooth',
          duration: '3:40',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Toothache Relief',
          description: 'Temporary relief methods for toothaches before seeing a dentist',
          duration: '3:15',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Knocked Out Tooth',
          description: 'Emergency procedures for a completely knocked out tooth',
          duration: '4:05',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Dental Abscess Treatment',
          description: 'Recognizing and treating dental abscesses',
          duration: '4:30',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        }
      ]
    },
    {
      id: 'endodontics',
      title: 'Endodontics',
      icon: '🔬',
      description: 'Root canal therapy and treatment of dental pulp issues',
      videos: [
        {
          title: 'Root Canal Therapy Explained',
          description: 'Understanding what a root canal is and why it\'s needed',
          duration: '5:20',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Root Canal Procedure',
          description: 'Step-by-step guide through the root canal process',
          duration: '6:45',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Post-Root Canal Care',
          description: 'How to care for your tooth after root canal treatment',
          duration: '3:30',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Apicoectomy Surgery',
          description: 'Understanding apicoectomy for persistent root canal issues',
          duration: '4:40',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        }
      ]
    },
    {
      id: 'oral-surgery',
      title: 'Oral Surgery',
      icon: '🔪',
      description: 'Surgical procedures and complex dental extractions',
      videos: [
        {
          title: 'Wisdom Teeth Extraction',
          description: 'Understanding wisdom teeth removal and recovery',
          duration: '5:15',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Dental Extraction Process',
          description: 'What to expect during a tooth extraction procedure',
          duration: '4:30',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Post-Extraction Care',
          description: 'Proper care after tooth extraction to prevent complications',
          duration: '3:45',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Sedation Dentistry Options',
          description: 'Different sedation options for dental procedures',
          duration: '4:20',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        }
      ]
    },
    {
      id: 'periodontal-therapy',
      title: 'Periodontal Therapy',
      icon: '🦷',
      description: 'Treatment of gum disease and periodontal conditions',
      videos: [
        {
          title: 'Gum Disease Stages',
          description: 'Understanding the different stages of periodontal disease',
          duration: '4:10',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Deep Cleaning Procedures',
          description: 'Scaling and root planing for gum disease treatment',
          duration: '4:35',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Gum Grafting Surgery',
          description: 'Understanding gum grafting procedures for receding gums',
          duration: '5:00',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Maintaining Gum Health',
          description: 'Daily practices to prevent and manage gum disease',
          duration: '3:25',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        }
      ]
    },
    {
      id: 'technology',
      title: 'Technology',
      icon: '⚡',
      description: 'Modern dental technology and advanced treatment options',
      videos: [
        {
          title: 'Digital X-Rays and Imaging',
          description: 'Benefits of digital dental imaging and 3D scanning',
          duration: '4:15',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Laser Dentistry',
          description: 'How laser technology is used in modern dental procedures',
          duration: '4:30',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'CAD/CAM Technology',
          description: 'Computer-aided design and manufacturing in dentistry',
          duration: '4:50',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        },
        {
          title: 'Air Abrasion Technology',
          description: 'Drill-less cavity treatment using air abrasion',
          duration: '3:40',
          thumbnail: '/General Dentistry.jpeg',
          comingSoon: true
        }
      ]
    }
  ];

  const activeCategory = videoCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Cosmetic Dentistry.jpeg"
            alt="Educational Videos"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Educational Videos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Take a few minutes to watch our educational videos and learn more about different dental treatments and procedures
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
                Educational Videos
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
              Learn About Your Dental Health
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Video topics include general & cosmetic dentistry, implants, oral health and hygiene, orthodontics, pediatric dentistry, emergency care, endodontics, oral surgery, periodontal therapy, and modern dental technology. Our comprehensive educational videos are designed to help you understand various dental procedures and make informed decisions about your oral health.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {videoCategories.map((category) => (
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
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                {activeCategory?.description}
              </p>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeCategory?.videos.map((video, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎥</div>
                        <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                      {video.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                        Duration: {video.duration}
                      </span>
                      <button 
                        className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={video.comingSoon}
                        style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
                      >
                        {video.comingSoon ? 'Coming Soon' : 'Watch Now'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Featured Video
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="text-8xl mb-6">🎬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Welcome to Nu Smile Dental
              </h3>
              <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Meet Dr. Rujul Parikh and learn about our comprehensive dental services in Stockton, CA. This introductory video will give you an overview of our practice and what makes us different.
              </p>
              <div className="bg-primary text-white px-6 py-3 rounded-lg font-semibold inline-block" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Learn More About Your Dental Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            While our video library is being prepared, explore our comprehensive patient education articles or schedule a consultation to discuss your dental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/patient-education" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Read Articles
            </Link>
            <Link href="/appointment" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
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