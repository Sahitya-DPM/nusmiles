'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { denturesTechnologyFaqs } from '@/lib/denturesTechnologyFaqs';

export default function LatestDenturesTechnologyPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Dental Implants s.jpeg"
            alt="Latest dentures technology and new false teeth at NuSmile Dental in Stockton"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-white/80 text-[14px] md:text-[16px] mb-4 uppercase tracking-wide"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            Updated September 16, 2026
          </p>
          <h1
            className="text-[27px] md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            Latest Dentures Technology in 2026
          </h1>
          <p
            className="text-[16px] text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            A current guide to new false teeth technology and the newest dentures technology available at NuSmile Dental in Stockton, CA
          </p>
        </div>
      </section>

      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600"
          style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
        >
          <Link href="/" className="hover:text-primary">
            NuSmile Dental
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Latest Dentures Technology</span>
        </div>
      </nav>

      <article className="py-10 md:py-20 bg-white">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-6"
          style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
        >
          <p className="text-[16px] leading-relaxed">
            This article was refreshed on September 16, 2026 so patients searching for the latest
            dentures technology, new false teeth technology, or the newest dentures technology get
            current information — not last year&apos;s overview. At{' '}
            <Link href="/" className="text-primary font-semibold hover:underline">
              NuSmile Dental
            </Link>{' '}
            in Stockton, Dr. Rujul G. Parikh uses digital scanning, 3D planning, and
            implant-supported options to replace missing teeth with a more stable, natural-looking
            smile.
          </p>

          <h2
            className="text-[27px] md:text-4xl font-bold text-gray-900 pt-4"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            Latest Dentures Technology: What Changed in 2026
          </h2>
          <p className="text-[16px] leading-relaxed">
            The latest dentures technology is no longer a single acrylic plate made from a goopy
            impression. In 2026, the workflow most patients notice first is digital: an intraoral
            scanner captures the gums and bite, software designs the teeth, and a lab mills or 3D
            prints the prosthesis. That is the same family of tools we already use for{' '}
            <Link
              href="/patient-education/digital-dental-impressions"
              className="text-primary font-semibold hover:underline"
            >
              digital dental impressions
            </Link>{' '}
            and{' '}
            <Link
              href="/patient-education/cone-beam-ct-imaging"
              className="text-primary font-semibold hover:underline"
            >
              cone beam CT imaging
            </Link>
            .
          </p>
          <p className="text-[16px] leading-relaxed">
            What is new this year is how often those digital files become a finished denture without
            a stack of physical try-ins. Milled high-impact PMMA bases, dual-material 3D-printed
            one-piece dentures, and implant-supported hybrids are now routine options — not novelty
            upgrades. Patients still get a clinical exam; the technology simply makes the fit more
            predictable.
          </p>

          <h2
            className="text-[27px] md:text-4xl font-bold text-gray-900 pt-4"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            New False Teeth Technology Patients Actually Wear
          </h2>
          <p className="text-[16px] leading-relaxed">
            People still search “new false teeth technology” when they want teeth that look real and
            stay put. Today’s false teeth are not limited to a removable plate that rests on the
            gums. Options now include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px]">
            <li>
              <strong>Conventional or digital complete dentures</strong> — removable false teeth with
              a more accurate digital bite.
            </li>
            <li>
              <strong>Implant-retained snap-on dentures</strong> — two or more implants lock the
              denture in place. Our published{' '}
              <Link href="/dental-implants" className="text-primary font-semibold hover:underline">
                affordable implants
              </Link>{' '}
              package starts at $5,999 for two implants and the denture.
            </li>
            <li>
              <strong>All-on-4® implant dentures</strong> — a non-removable arch on at least four
              implants, often with temporary teeth the same day. See{' '}
              <Link
                href="/all-on-4-implant-dentures"
                className="text-primary font-semibold hover:underline"
              >
                All-on-4® implant dentures
              </Link>{' '}
              and the{' '}
              <Link
                href="/services/dental-implants-all-on-4-faqs-stockton"
                className="text-primary font-semibold hover:underline"
              >
                implant and All-on-4® FAQs
              </Link>
              .
            </li>
          </ul>
          <p className="text-[16px] leading-relaxed">
            New false teeth technology also improved materials. Zirconia and high-density acrylic
            hold shade and resist stains better than older plastic teeth. That matters if you have
            tried traditional dentures and disliked the bulky, chalky look.
          </p>

          <h2
            className="text-[27px] md:text-4xl font-bold text-gray-900 pt-4"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            Newest Dentures Technology Versus Traditional Plates
          </h2>
          <p className="text-[16px] leading-relaxed">
            The newest dentures technology does not make every older denture obsolete. A
            well-fitted conventional denture can still be the right first step. The difference is
            choice. With the newest dentures technology, we can store your digital design, reprint or
            remill a spare, and upgrade you to implants later without starting from scratch.
          </p>
          <p className="text-[16px] leading-relaxed">
            Traditional dentures rest on the gums and can slip when you chew. The newest
            implant-supported dentures use titanium posts as anchors, which also helps slow the bone
            loss that makes old dentures loose. If you are comparing full-arch implants with a
            removable plate, read{' '}
            <Link
              href="/blog/full-mouth-implants-vs-traditional-dentures-unlock-the-secret-to-a-radiant-long-lasting-smile"
              className="text-primary font-semibold hover:underline"
            >
              full mouth implants vs. traditional dentures
            </Link>
            .
          </p>

          <div className="relative overflow-hidden rounded-2xl shadow-xl my-10">
            <Image
              src="/dental implant.jpg"
              alt="Newest dentures technology and implant-supported false teeth in Stockton"
              width={900}
              height={560}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <h2
            className="text-[27px] md:text-4xl font-bold text-gray-900 pt-4"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            How We Use This Technology in Stockton
          </h2>
          <p className="text-[16px] leading-relaxed">
            Your visit still starts with a conversation and an exam. We then use 3D scans when
            implants may support the denture, design the teeth on screen, and review smile and bite
            before fabrication. Same-day interim teeth are possible with All-on-4® for selected
            patients. Final restorations are made after healing so the newest dentures technology
            serves your bone — not the other way around.
          </p>
          <p className="text-[16px] leading-relaxed">
            Curious about the scanners and imaging behind these dentures? Visit our{' '}
            <Link
              href="/patient-education/technology"
              className="text-primary font-semibold hover:underline"
            >
              dental technology
            </Link>{' '}
            library, then schedule a visit to see which option fits.
          </p>
        </div>
      </article>

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              People Also Ask About Dentures Technology
            </h2>
            <p
              className="text-[16px] text-gray-600"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
              Direct answers to the questions that appear next to latest, newest, and false-teeth searches
            </p>
          </div>

          <div className="space-y-4">
            {denturesTechnologyFaqs.map((faq, index) => (
              <div key={faq.question} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
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
                  <div className="px-6 py-4 bg-white">
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

      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-[27px] md:text-3xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            Related Care at NuSmile Dental
          </h2>
          <ul
            className="space-y-3 text-[16px] text-gray-700"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            <li>
              <Link href="/all-on-4-implant-dentures" className="text-primary font-semibold hover:underline">
                All-on-4® implant dentures
              </Link>{' '}
              — fixed full-arch teeth using the newest implant-supported denture approach.
            </li>
            <li>
              <Link href="/dental-implants" className="text-primary font-semibold hover:underline">
                Affordable dental implants in California
              </Link>{' '}
              — transparent pricing and financing for implant dentures.
            </li>
            <li>
              <Link
                href="/blog/how-implants-make-dentures-more-comfortable"
                className="text-primary font-semibold hover:underline"
              >
                How implants make dentures more comfortable
              </Link>
              .
            </li>
            <li>
              <Link href="/insurance" className="text-primary font-semibold hover:underline">
                Insurance and Medi-Cal accepted in Stockton
              </Link>
              .
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-[27px] md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            See the Newest Dentures Technology in Person
          </h2>
          <p
            className="text-[16px] text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            Book a consultation in Stockton to compare digital dentures, new false teeth options, and
            implant-supported smiles.
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
