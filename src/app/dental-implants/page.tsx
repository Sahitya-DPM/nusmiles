'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

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

  const faqs = [
    {
      question: "How Many Teeth Can Be Replaced With Dental Implants?",
      answer: "You can replace a single tooth, multiple teeth or all your teeth with implants. You don't even need one implant for every missing tooth. As few as two Implants can support a removable lower denture, while as few as four implants can provide a full, permanent set of top or bottom teeth."
    },
    {
      question: "Is Dental Implant Surgery Painful?",
      answer: "Most people find dental implant surgery very easy to tolerate. Any post-operative discomfort can usually be managed with over-the-counter anti-inflammatory medication such as ibuprofen or OTC pain-relievers. Ice can also be helpful."
    },
    {
      question: "Are Stockton, CA Dental Implants Expensive?",
      answer: "At the outset, implants are more expensive than other tooth-replacement methods such as dentures or bridgework. But they also last many years longer and in fact should never need replacement. So they offer the best, most cost-effective option when viewed as a long-term investment in your health, comfort and well-being."
    },
    {
      question: "How Do You Care For Dental Implants?",
      answer: "They require exactly the same care as natural teeth: daily brushing and flossing, along with regular dental checkups and professional cleanings. Although implant teeth will never decay, the gum tissues around them can become inflamed or infected in the absence of good oral hygiene. Properly cared-for dental implants should last a lifetime."
    },
    {
      question: "Can My Body Reject A Dental Implant?",
      answer: "Strictly speaking, implants can't be rejected because they contain no living cells or genetically coded material. The titanium of which they are made is completely biocompatible, and allergies are extremely rare. But an implant can fail to integrate with the jawbone if an infection develops in the absence of good oral hygiene, or if it is subjected to biting forces too soon. However, this is rare; implants regularly achieve success rates in excess of 95%."
    },
    {
      question: "Am I A Good Candidate For Dental Implants?",
      answer: "There's a good chance that you are, but this can only be determined after a complete oral examination that includes x-rays of your jaws. Please call our Stockton office schedule a consultation with Dr. Parikh to begin the exciting process of restoring your smile and bite."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Dental Implants s.jpeg"
            alt="Dental Implants"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Dental Implants
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Permanent tooth replacement solution in Stockton, CA
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Implants in Stockton, CA
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-lg leading-relaxed">
                  Dental implants from Nu Smile Dental are small titanium posts that replace the roots of missing teeth. They are inserted into your jawbone during a minor surgical procedure that takes place at our dental office in Stockton, CA.
                </p>
                <p className="text-lg leading-relaxed">
                  After the implant has been placed in your jawbone, a completely lifelike porcelain tooth crown is attached. In some cases, the implant needs to fuse with the bone for several months before it is permanently crowned; in other cases, you can have new (but temporary) teeth the same day your implants are placed.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/Dental Implants s.jpeg"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Dental Implant Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Transparent pricing for all your dental implant needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {option.title}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {option.price}
                  </div>
                  <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {option.subtitle}
                  </p>
                  <p className="text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {option.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  Book Your Free Consultation Today!
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Everything you need to know about dental implants
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
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
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
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
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Experience Exceptional Dental Care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Join our family of satisfied patients and discover why Nu Smile Dental is the trusted choice for dental care in Stockton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Book Appointment
            </Link>
            <a href="tel:(209) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
          <div className="mt-8 p-4 bg-white/10 rounded-lg">
            <p className="text-white font-semibold" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Want to learn more about dental implants from Nu Smile Dental? Call our Stockton, CA office at (209) 955-1800 to book an appointment today!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 