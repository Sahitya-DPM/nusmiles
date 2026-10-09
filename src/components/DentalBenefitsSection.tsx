
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DentalBenefitsSection() {
  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left Column - Supporting Homepage Copy */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 py-4 lg:py-8">
            {/* Section Label */}
            <div>
              <span
                className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                Nu Smile Dental
              </span>

              <h2
                className="text-[27px] md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                Make the Most of Your 2026 Dental Benefits
              </h2>

              <div className="w-16 h-1 bg-secondary rounded-full"></div>
            </div>

            {/* Supporting Copy */}
            <p
              className="text-[16px] md:text-[16px] text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
              Year-end is approaching. If you have unused dental benefits, now
              is the time to schedule your exam or complete recommended
              treatment before your plan resets.
            </p>

            {/* Benefits Reminder Card */}
            <div className="relative overflow-hidden p-5 md:p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 flex items-start space-x-4">
                <div className="w-10 h-10 shrink-0 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <p
                    className="text-[16px] md:text-[16px] font-semibold text-gray-900 leading-relaxed"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  >
                    Use your benefits wisely. Book your visit with Nu Smile
                    Dental today.
                  </p>
                </div>
              </div>
            </div>

            
          </div>

          {/* Right Column - Portrait Dental Benefits Flyer */}
          <div className="relative group w-full max-w-[520px] mx-auto lg:ml-auto lg:mr-0">
            <div className="absolute -inset-3 bg-primary/5 rounded-2xl transform rotate-2 transition-transform duration-500 group-hover:rotate-1"></div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-gray-100">
              <Image
                src="/DentalBenefitsSection.png"
                alt="Nu Smile Dental year-end 2026 dental benefits flyer"
                width={500}
                height={500}
                priority
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1023px) 100vw, 520px"
              />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-secondary/10 rounded-full -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}