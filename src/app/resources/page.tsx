'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

const ResourcesPage = () => {
  const resources = [
    {
      title: "Insurance & Billing",
      description: "Learn about our accepted insurance plans, payment options, and financing solutions to make your dental care affordable.",
      image: "/office1.jpg.webp",
      link: "/insurance-billing",
      features: [
        "Accepted Insurance Plans",
        "Payment Options",
        "CareCredit Financing",
        "Sunbit Financing"
      ]
    },
    {
      title: "Before & After Gallery",
      description: "View real patient transformations and see the amazing results our dental procedures can achieve.",
      image: "/Cosmetic Dentistry.jpeg",
      link: "/before-after",
      features: [
        "Smile Makeovers",
        "Dental Implants",
        "Veneers & Crowns",
        "Invisalign Results"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src="/office1.jpg.webp"
          alt="Dental Resources"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dental Resources
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Everything you need to know about dental care, insurance, and financing
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Helpful Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access important information about insurance, billing, and see real patient results to help you make informed decisions about your dental care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <ul className="mb-6">
                    {resource.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 mb-2">
                        <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={resource.link}
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Exceptional Dental Care?
          </h2>
          <p className="text-xl text-white mb-8">
            Join our family of satisfied patients and discover why Nu Smile Dental is the trusted choice for dental care in Stockton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/appointment"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Appointment
            </Link>
            <a 
              href="tel:(209) 955-1800"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors font-semibold"
            >
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage; 