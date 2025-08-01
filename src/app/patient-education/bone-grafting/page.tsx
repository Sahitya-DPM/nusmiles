'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function BoneGraftingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const boneGraftTypes = [
    {
      title: "Autogenous Bone Graft",
      description: "Uses your own bone from another part of your body, typically the chin, jaw, or hip. This is considered the gold standard as it provides the best integration.",
      benefits: ["Best integration", "No rejection risk", "Natural bone growth", "Long-term stability"]
    },
    {
      title: "Allograft Bone Graft",
      description: "Uses processed bone from a human donor. This is a safe and effective option that eliminates the need for a second surgical site.",
      benefits: ["No second surgery", "Safe and effective", "Readily available", "Good integration"]
    },
    {
      title: "Xenograft Bone Graft",
      description: "Uses bone from animal sources, typically bovine (cow). This material is highly biocompatible and provides excellent structural support.",
      benefits: ["Excellent structure", "Biocompatible", "Cost-effective", "Widely available"]
    },
    {
      title: "Synthetic Bone Graft",
      description: "Uses man-made materials that mimic natural bone structure. These materials are designed to promote bone growth and integration.",
      benefits: ["Consistent quality", "No disease risk", "Customizable", "Predictable results"]
    }
  ];

  const treatmentSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Dr. Parikh will evaluate your bone structure, discuss your treatment goals, and determine the best bone grafting approach for your specific case."
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "We use advanced imaging technology to assess bone density and create a customized treatment plan for optimal results."
    },
    {
      step: "3",
      title: "Bone Grafting Procedure",
      description: "The grafting material is placed in the deficient area and secured with membranes or other materials to promote proper healing."
    },
    {
      step: "4",
      title: "Healing & Integration",
      description: "Over 3-6 months, your body will integrate the graft material and build new bone structure for future dental procedures."
    }
  ];

  const pricingOptions = [
    {
      title: "Basic Bone Graft",
      price: "$1,200",
      subtitle: "Single site bone grafting",
      description: "Ideal for small areas requiring bone augmentation before implant placement.",
      features: ["Single site grafting", "Local anesthesia", "Follow-up care", "3-month healing period"]
    },
    {
      title: "Advanced Bone Graft",
      price: "$2,500",
      subtitle: "Multiple site or complex grafting",
      description: "For larger areas or complex cases requiring extensive bone reconstruction.",
      features: ["Multiple site grafting", "IV sedation available", "Extended follow-up", "6-month healing period"]
    },
    {
      title: "Sinus Lift with Graft",
      price: "$3,200",
      subtitle: "Sinus augmentation with bone grafting",
      description: "Specialized procedure for upper jaw bone grafting when sinus cavity is involved.",
      features: ["Sinus lift procedure", "Bone grafting", "Specialized imaging", "Extended healing time"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Dental Implants.jpeg"
            alt="Bone Grafting"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Bone Grafting
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced bone regeneration for successful dental implant treatment in Stockton, CA
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Restore Your Jawbone for Dental Implants
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-lg leading-relaxed">
                  Bone grafting is a surgical procedure that replaces missing bone with material from your own body, a donor, or synthetic sources. This procedure is essential for patients who have lost bone density due to tooth loss, gum disease, or trauma.
                </p>
                <p className="text-lg leading-relaxed">
                  When teeth are missing for an extended period, the jawbone begins to deteriorate. Bone grafting rebuilds this lost bone structure, creating a solid foundation for dental implants and ensuring long-term success of your dental restoration.
                </p>
                <p className="text-lg leading-relaxed">
                  Our advanced bone grafting techniques use the latest technology and materials to provide predictable, long-lasting results. Dr. Parikh's expertise ensures optimal outcomes for even the most complex cases.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/Dental Implants.jpeg"
                  alt="Bone Grafting - Stockton, CA"
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

      {/* Bone Graft Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Types of Bone Grafts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              We offer various bone grafting options to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {boneGraftTypes.map((graft, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  {graft.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  {graft.description}
                </p>
                <div className="space-y-3">
                  {graft.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Our comprehensive approach to bone grafting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Bone Grafting Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Transparent pricing for all your bone grafting needs
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

                <Link href="/appointment" className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 inline-block text-center" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  Schedule Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/doctor.png"
                  alt="Dr. Rujul Parikh - Bone Grafting Specialist"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dr. Rujul Parikh
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-lg leading-relaxed">
                  Dr. Parikh is a highly skilled dental surgeon with over 24 years of experience in advanced dental procedures, including bone grafting and dental implant placement. His expertise in bone regeneration techniques ensures optimal outcomes for even the most challenging cases.
                </p>
                <p className="text-lg leading-relaxed">
                  As an Associate Fellow of AAID and Fellow of ICOI and GDIA, Dr. Parikh has received extensive training in bone grafting procedures from leading experts in the field. He stays current with the latest advancements in bone regeneration technology and techniques.
                </p>
                <p className="text-lg leading-relaxed">
                  Dr. Parikh's commitment to continuing education and his passion for excellence in dentistry make him the trusted choice for bone grafting procedures in Stockton and the surrounding areas. He takes pride in helping patients achieve the strong foundation they need for successful dental implant treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Restore Your Jawbone?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Contact us today to learn how bone grafting can prepare you for successful dental implant treatment.
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