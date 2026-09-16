'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { insuranceFaqs } from '@/lib/insuranceFaqs';

const acceptedPlans = [
  {
    name: 'Medi-Cal (Denti-Cal)',
    detail:
      'California medical / Medi-Cal dental benefits for eligible exams, cleanings, and covered treatment. Bring your Benefits Identification Card.',
  },
  {
    name: 'Health Plan of San Joaquin',
    detail:
      'Local managed-care coverage used by many Stockton families. We verify HPSJ-linked dental benefits before your visit.',
  },
  {
    name: 'Blue Cross of California',
    detail:
      'Anthem Blue Cross of California dental and medical-linked benefits, including many employer PPO plans.',
  },
  {
    name: 'Medicare (when dental benefits apply)',
    detail:
      'Medicare does not cover every dental service. If your Advantage or supplemental plan includes dental, we check those benefits for you.',
  },
  {
    name: 'Most PPO dental plans',
    detail:
      'We work with the majority of PPO dental cards. If your plan is not named here, call us — we still run a benefits check.',
  },
];

export default function InsurancePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/office1.jpg.webp"
            alt="Dentist that take medical in Stockton CA at NuSmile Dental"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-[27px] md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            Dentist That Take Medical in Stockton CA
          </h1>
          <p
            className="text-[16px] text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            Medi-Cal, Denti-Cal, Health Plan of San Joaquin, Blue Cross of California, and most PPO
            plans accepted. Verify your card before you book.
          </p>
        </div>
      </section>

      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600"
          style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
        >
          <Link href="/" className="hover:text-primary">
            NuSmile Dental
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Insurance &amp; Medi-Cal</span>
        </div>
      </nav>

      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                A Stockton Dentist That Takes Medical and Medi-Cal
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8" />
              <div
                className="space-y-6 text-gray-700 text-[16px] leading-relaxed"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                <p>
                  Searching for a dentist that take medical in Stockton CA usually means you need a
                  practice that accepts Medi-Cal (Denti-Cal) and will confirm your benefits before
                  the appointment. NuSmile Dental does both. We are a family dentist at 1801 E March
                  Ln A165, and our team checks eligibility so you know what is covered.
                </p>
                <p>
                  Patients also bring PPO dental cards, Health Plan of San Joaquin coverage, Blue
                  Cross of California, and Medicare plans that include dental. If you are uninsured,
                  we still see you — ask about cash fees and financing for{' '}
                  <Link href="/dental-implants" className="text-primary font-semibold hover:underline">
                    affordable implants
                  </Link>
                  .
                </p>
                <p>
                  Ready to verify a card?{' '}
                  <Link href="/appointment" className="text-primary font-semibold hover:underline">
                    Request an appointment
                  </Link>{' '}
                  or call (209) 955-1800.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/trusted-partner.jpeg"
                alt="NuSmile Dental accepts Medi-Cal and insurance in Stockton"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              Insurance Plans We Accept
            </h2>
            <p
              className="text-[16px] text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
              Named plans we routinely verify. Coverage always depends on your individual benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acceptedPlans.map((plan) => (
              <div key={plan.name} className="bg-white rounded-2xl shadow-lg p-8">
                <h3
                  className="text-[20px] font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-gray-700 text-[16px] leading-relaxed"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  {plan.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            How to Use Medi-Cal at Our Office
          </h2>
          <ol
            className="space-y-4 text-gray-700 text-[16px] leading-relaxed list-decimal pl-6"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            <li>Call or book online and tell us you have Medi-Cal / medical coverage.</li>
            <li>Have your member ID or Benefits Identification Card ready.</li>
            <li>We confirm eligibility and which dental services your plan covers.</li>
            <li>You arrive for care knowing any estimated patient share in advance.</li>
          </ol>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              Insurance Questions Patients Ask
            </h2>
          </div>
          <div className="space-y-4">
            {insuranceFaqs.map((faq, index) => (
              <div key={faq.question} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <h3
                    className="text-[16px] font-semibold text-gray-900 pr-4"
                    style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4">
                    <p
                      className="text-gray-700 leading-relaxed text-[16px]"
                      style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-[27px] md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            Confirm Your Plan, Then Book
          </h2>
          <p
            className="text-[16px] text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            Bring your insurance or Medi-Cal card to NuSmile Dental in Stockton. We will verify
            benefits and get you on the schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
              Book Appointment
            </Link>
            <a
              href="tel:+12099551800"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-white hover:text-primary transition-colors inline-block"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
