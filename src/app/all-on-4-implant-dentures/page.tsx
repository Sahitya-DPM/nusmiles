'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function AllOn4ImplantDenturesPage() {
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

  const treatmentSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Dr. Parikh will determine your health history and condition of your jawbone, go over multiple treatment options, and discuss financial information."
    },
    {
      step: "2",
      title: "Diagnostic Planning",
      description: "We take jaw measurements and 3D diagnostic scans to prepare for the procedure."
    },
    {
      step: "3",
      title: "Surgical Procedure",
      description: "Placement of four or more implants along one jaw or both, followed by temporary restoration the same day."
    },
    {
      step: "4",
      title: "Healing & Permanent Restoration",
      description: "Once healed, we initiate the process of fabricating the permanent denture."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Dental Implants s.jpeg"
            alt="All-on-4Â® Implant Dentures"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            All-on-4® Implant Dentures
          </h1>
          <p className="text-[16px] md:text-[16px] text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Revolutionary implant-supported denture treatment in Stockton, CA
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Revolutionary Implant-Supported Treatment
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8 mx-auto lg:mx-0"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  All-on-4® implant-supported denture treatment is the process of placing a minimum of four dental implants in each jaw to stabilize a non-removable denture. It combines the best of both worlds: the ability to restore a fully edentulous arch with the stability of dental implants.
                </p>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  Standard dentures are stabilized and retained on the ridge of the jaws, making them likely to move around when eating and speaking. Implant-supported dentures provide much stronger support as the implants act as an anchor for the dentures to provide an easier experience for you, our patient.
                </p>
              </div>
            </div>
            <div className="relative flex items-stretch">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/allonx.jpg"
                  alt="All-on-4Â® Implant Dentures - Stockton, CA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Treatment Process
            </h2>
            <p className="text-[16px] md:text-[16px] text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Our comprehensive approach to All-on-4® implant dentures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-[22px] md:text-[16px] font-bold text-white" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {step.step}
                  </span>
                </div>
                <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed text-[16px]" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              All-on-4® Pricing Options
            </h2>
            <p className="text-[16px] md:text-[16px] text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Transparent pricing for all your implant denture needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
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
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="relative flex items-stretch">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full min-h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/Rujul.jpeg"
                  alt="Dr. Rujul Parikh Stockton, CA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dr. Rujul Parikh
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8 mx-auto lg:mx-0"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  Dr. Parikh has been practicing for more than 24 years and he is passionate about achieving excellence in dentistry with a focus on Dental Implants. He has been trained by many national and international surgeons to become an Associate Fellow of AAID and a Fellow of ICOI and GDIA.
                </p>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  Over the years he has invested to advance his knowledge in many phases of dentistry including Dental Implants, Dental Extractions, Cosmetic and Restorative dentistry, Orthodontics, TMD, Sleep Apnea, Endodontics and many others and have treated thousands of patients.
                </p>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  He recognizes the importance of ongoing dental education for enhancing the quality of patient care, ensuring patient safety, and staying abreast of the latest developments in techniques, materials, and technology. He actively pursues education across all facets of dentistry to remain well-informed and proficient in his field.
                </p>
              </div>
            </div>
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
        </div>
      </section>
    </div>
  );
} 