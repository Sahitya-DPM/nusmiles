'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';
import type { DentalImplantCostPageData } from '@/lib/dentalImplantCostPages';

const montserrat = { fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' };
const hind = { fontFamily: 'Hind, Arial, Helvetica, sans-serif' };

const costFactors = [
  'The number of dental implants required',
  'The type of implant restoration needed',
  'The condition of your teeth, gums, and jawbone',
  'Whether tooth extractions are required',
  'Whether additional procedures, such as bone grafting, are needed beforehand',
];

const paymentOptions = [
  'Monthly payment plans that break the total cost into manageable installments',
  'Low or no-interest financing options for qualifying patients',
  'The ability to use Health Savings Account (HSA) or Flexible Spending Account (FSA) funds toward treatment',
  'Family plan discounts for households with more than one patient receiving treatment',
];

const insuranceHelp = [
  'Review your insurance benefits',
  'Understand what portion of treatment may be covered',
  'Submit claims on your behalf whenever possible',
];

const benefits = [
  {
    title: 'Natural appearance:',
    description:
      'Dental implants are restored with custom-made teeth designed to complement your smile.',
  },
  {
    title: 'Stable function:',
    description:
      'Implants provide a secure foundation that can help you bite, chew, and speak comfortably.',
  },
  {
    title: 'Long-lasting solution:',
    description:
      'With proper oral hygiene and regular dental care, dental implants can provide durable tooth replacement.',
  },
  {
    title: 'Jawbone support:',
    description:
      'Dental implants stimulate the jawbone and may help reduce the bone loss that commonly occurs after tooth loss.',
  },
  {
    title: 'No support from neighboring teeth:',
    description:
      'Unlike traditional bridges, a single dental implant typically does not require altering healthy neighboring teeth.',
  },
  {
    title: 'Easy maintenance:',
    description:
      'Implant-supported teeth can be brushed and cared for as directed by your dental provider.',
  },
];

function CheckListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <svg
        className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-gray-700 text-[16px] leading-relaxed" style={hind}>
        {children}
      </span>
    </li>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
      style={montserrat}
    >
      {children}
    </h2>
  );
}

interface DentalImplantCostPageProps {
  page: DentalImplantCostPageData;
}

export default function DentalImplantCostPage({ page }: DentalImplantCostPageProps) {
  const [openFaq, setOpenFaq] = useState(0);
  const topImage = `/images/top-${page.imageIndex}.jpeg`;
  const bottomImage = `/images/bottom-${page.imageIndex}.jpeg`;

  const faqs = [
    {
      question: `How much does a dental implant cost in ${page.faqLocation}?`,
      answer: `The cost of a dental implant depends on the number of teeth being replaced, the type of restoration required, and whether additional procedures are needed. Schedule a consultation at Nu Smile Dental for a personalized cost estimate.`,
    },
    {
      question: 'How long does dental implant treatment take?',
      answer:
        'Treatment time varies depending on your oral health, healing process, and whether procedures such as bone grafting or tooth extraction are required. Your provider will give you a personalized timeline during your consultation.',
    },
    {
      question: 'Are dental implants better than traditional bridges or dentures?',
      answer:
        'Dental implants provide a stable and long-lasting tooth replacement option for many patients. However, bridges or dentures may be more appropriate in certain situations. Your provider will recommend an option based on your dental health, needs, and treatment goals.',
    },
    {
      question: 'Does insurance cover the cost of dental implants?',
      answer:
        'Some dental insurance plans may help cover certain portions of dental implant treatment. Our team can help review your coverage and estimate your out-of-pocket cost.',
    },
    {
      question: 'How do I know if I am a candidate for dental implants?',
      answer:
        'The best way to find out is through a consultation. Our team will evaluate your teeth, gums, jawbone, and overall oral health to determine whether dental implants or another tooth replacement option is right for you.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src={topImage}
            alt={`Cost of dental implants in ${page.faqLocation}`}
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
            style={montserrat}
          >
            {page.heading}
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-24 h-1 bg-primary rounded-full mb-8 mx-auto" />
          <p
            className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 text-center"
            style={hind}
          >
            Choosing the right tooth replacement treatment is a big decision, and it should feel
            like an easy one. At{' '}
            <Link href="/about-us" className="text-primary hover:text-primary-dark font-semibold">
              Nu Smile Dental
            </Link>
            , we offer dental implants and other tooth replacement options so you can choose the
            solution that best fits your lifestyle, oral health, and smile goals. Whether you are
            looking for a permanent replacement for a missing tooth or a reliable way to restore
            several teeth, our team is here to guide you through every step, from your first
            consultation to your final restoration.
          </p>
        </div>
      </section>

      {/* Dental Implants vs Other Options */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center h-full text-center lg:text-left">
              <SectionHeading>
                Dental Implants vs. Other Tooth Replacement Options: What&apos;s the Difference?
              </SectionHeading>
              <div className="w-24 h-1 bg-primary rounded-full mb-8 mx-auto lg:mx-0" />
              <div className="space-y-6 text-gray-700" style={hind}>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  <Link
                    href="/dental-implants"
                    className="text-primary hover:text-primary-dark font-semibold"
                  >
                    Dental implants
                  </Link>
                  , bridges, and dentures are effective and widely used options for replacing
                  missing teeth. The right choice depends on your specific dental needs, oral
                  health, lifestyle, and preferences.
                </p>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  Dental implants use a small implant post placed in the jawbone to support a
                  custom-made crown, bridge, or denture. They are designed to look, feel, and
                  function like natural teeth while providing long-term stability.
                </p>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  Dental bridges use crowns placed on neighboring teeth to support an artificial
                  tooth. Dentures are removable appliances designed to replace several missing
                  teeth or an entire arch of teeth.
                </p>
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  During your consultation, our team at Nu Smile Dental will evaluate your smile
                  and recommend the treatment option best suited to help you comfortably restore
                  your oral function, appearance, and confidence.
                </p>
              </div>
            </div>
            <div className="relative flex items-stretch h-full">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full aspect-[4/3] lg:aspect-auto lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10" />
                <Image
                  src={bottomImage}
                  alt={`Dental implant tooth replacement options in ${page.faqLocation}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>{page.costSectionHeading}</SectionHeading>
          <div className="w-24 h-1 bg-primary rounded-full mb-8" />
          <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-6" style={hind}>
            The cost of dental implant treatment varies from patient to patient. Pricing depends on
            factors such as:
          </p>
          <ul className="space-y-3 mb-8">
            {costFactors.map((factor) => (
              <CheckListItem key={factor}>{factor}</CheckListItem>
            ))}
          </ul>
          <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700" style={hind}>
            Because every smile is different, there is no one-size-fits-all price. The most accurate
            way to determine the cost of a dental implant for your specific situation is to
            schedule a consultation with our team. During your visit, we will evaluate your smile
            and provide a personalized treatment plan along with a clear breakdown of costs.
          </p>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>Payment Plans and Financing Options</SectionHeading>
          <div className="w-24 h-1 bg-primary rounded-full mb-8" />
          <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-6" style={hind}>
            We believe cost should never stand in the way of a healthier, more confident smile.
            That is why we offer a range of flexible payment options designed to fit different
            budgets and needs.
          </p>
          <ul className="space-y-3 mb-8">
            {paymentOptions.map((option) => (
              <CheckListItem key={option}>{option}</CheckListItem>
            ))}
          </ul>
          <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700" style={hind}>
            Our team will walk you through all available options during your consultation so you
            can choose the plan that works best for you.
          </p>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>Does Insurance Cover Dental Implants?</SectionHeading>
          <div className="w-24 h-1 bg-primary rounded-full mb-8" />
          <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-6" style={hind}>
            Some dental insurance plans offer benefits that may be applied toward certain parts of
            dental implant treatment. Coverage amounts and eligibility vary widely depending on
            your specific plan.
          </p>
          <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-6" style={hind}>
            Our team is happy to help you:
          </p>
          <ul className="space-y-3 mb-8">
            {insuranceHelp.map((item) => (
              <CheckListItem key={item}>{item}</CheckListItem>
            ))}
          </ul>
          <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700" style={hind}>
            We recommend bringing your insurance information to your consultation so we can give
            you the clearest picture of your coverage and out-of-pocket costs.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>Benefits of Dental Implants</SectionHeading>
          <div className="w-24 h-1 bg-primary rounded-full mb-8" />
          <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-8" style={hind}>
            Dental implants offer a range of advantages that make them a popular choice for
            patients with one or more missing teeth:
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <CheckListItem key={benefit.title}>
                <strong className="font-semibold text-gray-900">{benefit.title}</strong>{' '}
                {benefit.description}
              </CheckListItem>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeading>Frequently Asked Questions</SectionHeading>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <h3
                    className="text-[16px] md:text-[16px] font-semibold text-gray-900 pr-4"
                    style={montserrat}
                  >
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 bg-white">
                    <p
                      className="text-gray-700 leading-relaxed text-[16px]"
                      style={hind}
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

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-[27px] md:text-4xl font-bold text-white mb-6"
            style={montserrat}
          >
            Ready to Find Out Your Dental Implant Cost?
          </h2>
          <p
            className="text-[16px] md:text-[16px] text-white/90 mb-8 max-w-3xl mx-auto"
            style={hind}
          >
            Your restored smile is closer than you think.{' '}
            <Link href="/contact" className="underline hover:text-white font-semibold">
              Schedule your consultation
            </Link>{' '}
            with Nu Smile Dental today and get a personalized breakdown of your dental implant
            cost and treatment options. Our experienced team is ready to guide you through every
            step with honest guidance and flexible payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
              style={hind}
            >
              Schedule Your Free Consultation
            </Link>
            <a
              href={PHONE_TEL}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-white hover:text-primary transition-colors inline-block"
              style={hind}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
