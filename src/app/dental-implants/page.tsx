'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import { dentalImplantFaqs } from '../../lib/dentalImplantFaqs';

export default function DentalImplantsPage() {
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default

  const pricingOptions = [
    {
      title: "Implant Denture",
      price: "$5,999.00",
      subtitle: "Starting $5,999.00 for snap on denture includes",
      description: "two implant and implant retained denture.",
      features: ["Two implants", "Implant retained denture", "Free consultation"]
    },
    {
      title: "All on X Per Arch",
      price: "$14,999",
      subtitle: "includes all extraction, dental implants & interim denture",
      description: "Doesn't include final restoration. Bone grafts are not included. Financing is available.",
      features: ["All extractions", "Dental implants", "Interim denture", "Financing available"]
    },
    {
      title: "All on X Per Arch",
      price: "$19,999",
      subtitle: "includes all extraction, dental implants, interim denture & final restoration",
      description: "Bone grafts are not included. Financing is available.",
      features: ["All extractions", "Dental implants", "Interim denture", "Final restoration", "Financing available"]
    }
  ];

  const faqs = dentalImplantFaqs;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Dental Implants s.jpeg"
            alt="Dental implants in Stockton, CA at NuSmile Dental"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Affordable Dental Implants in California
          </h1>
          <p className="text-[16px] md:text-[16px] text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Cheap dental implants in California with transparent Stockton pricing, published packages from $5,999, and monthly financing
          </p>
        </div>
      </section>

      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
          <Link href="/" className="hover:text-primary">NuSmile Dental</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Dental Implants in Stockton</span>
        </div>
      </nav>

      {/* Introduction Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Affordable Implants Without Guesswork
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8 mx-auto lg:mx-0"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  Patients comparing cheap dental implants in California often leave other offices with no written price. At NuSmile Dental in Stockton, affordable implants are listed up front: snap-on implant dentures from $5,999 and All-on-X full-arch treatment from $14,999 per arch. You see what is included — and what is not — before you book.
                </p>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  Dental implants Stockton patients choose at NuSmile Dental are small titanium posts that replace the roots of missing teeth. They are inserted into your jawbone during a minor surgical procedure at our dental office in Stockton, CA.
                </p>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  After the implant has been placed in your jawbone, a completely lifelike porcelain tooth crown is attached. In some cases, the implant needs to fuse with the bone for several months before it is permanently crowned; in other cases, you can have new (but temporary) teeth the same day your implants are placed.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/dental implant.jpg"
                  alt="Dental Implants - Stockton, CA Dentist"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Transparent Pricing for Affordable Implants
            </h2>
            <p className="text-[16px] md:text-[16px] text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Published California package prices, clear inclusions, and financing on All-on-X treatment. Bone grafts are never hidden inside the fee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {option.title}
                  </h3>
                  <div className="text-[27px] md:text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {option.price}
                  </div>
                  <p className="text-[16px] text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {option.subtitle}
                  </p>
                  <p className="text-gray-700 mb-6 text-[16px]" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {option.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-[16px]" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/appointment" className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 inline-block text-center text-[15px] md:text-base" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  Book Free Consultation Today!
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-[16px] mt-10 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Compare these Stockton packages with other cheap dental implants in California quotes — then{' '}
            <Link href="/appointment" className="text-primary font-semibold hover:underline">
              book a free consultation
            </Link>{' '}
            for a written estimate. Learn how modern dentures and implants work together in our guide to{' '}
            <Link href="/blog/1222367-latest-dentures-technology" className="text-primary font-semibold hover:underline">
              the latest dentures technology
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Financing Affordable Implants in California
            </h2>
            <p className="text-[16px] text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Transparent pricing is only useful if you can pay for treatment. We help Stockton and Central Valley patients spread the cost of affordable implants into monthly payments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-[22px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Monthly payment plans
              </h3>
              <p className="text-gray-700 text-[16px] leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Financing is available on All-on-X packages so the $14,999 or $19,999 per-arch fee can be broken into installments. Ask for your estimated monthly payment at the free consultation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-[22px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Insurance, HSA, and FSA
              </h3>
              <p className="text-gray-700 text-[16px] leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Some dental plans help with extractions, grafting, or the crown. We review benefits, file claims when we can, and apply HSA or FSA funds toward affordable implants.{' '}
                <Link href="/insurance" className="text-primary font-semibold hover:underline">
                  See accepted insurance and Medi-Cal
                </Link>
                .
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-[22px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                What you pay — and what you do not
              </h3>
              <p className="text-gray-700 text-[16px] leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Package prices include the items listed on each card. Bone grafts are extra when your jaw needs them. The consultation is free. You leave with a written plan, not a surprise balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-[16px] md:text-[16px] text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Cost, financing, and treatment questions patients also ask about cheap dental implants in California
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <h3 className="text-[16px] md:text-[16px] font-semibold text-gray-900" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {faq.question}
                  </h3>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed text-[16px]" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[27px] md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Experience Exceptional Dental Care?
          </h2>
          <p className="text-[16px] md:text-[16px] text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Join our family of satisfied patients and discover why Nu Smile Dental is the trusted choice for dental care in Stockton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Book Appointment
            </Link>
            <a href="tel:+12099551800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
          <div className="mt-8 p-4 bg-white/10 rounded-lg">
            <p className="text-white font-semibold text-[16px]" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Want to learn more about dental implants from Nu Smile Dental? Call our Stockton, CA office at (209) 955-1800 to book an appointment today!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 