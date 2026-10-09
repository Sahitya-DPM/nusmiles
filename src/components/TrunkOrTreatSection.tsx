
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TrunkOrTreatSection() {
  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left Column - Portrait Flyer */}
          <div className="relative group w-full max-w-[520px] mx-auto lg:mx-0">
            <div className="absolute -inset-3 bg-primary/5 rounded-2xl transform rotate-2 transition-transform duration-500 group-hover:rotate-1"></div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-gray-100">
              <Image
                src="/trunk-or-treat-flyer.jpg"
                alt="Nu Smile Dental Trunk or Treat Halloween event flyer"
                width={800}
                height={900}
                priority
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1023px) 100vw, 520px"
              />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-secondary/10 rounded-full -z-10"></div>
          </div>

          {/* Right Column - Event Information */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 py-4 lg:py-8">

            {/* Section Label */}
            <div>
              <span
                className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                Nu Smile Dental Presents
              </span>

              <h2
                className="text-[27px] md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                Your Halloween Plans Just Got More Fun
              </h2>

              <div className="w-16 h-1 bg-secondary rounded-full"></div>
            </div>

            {/* Promotional Copy */}
            <p
              className="text-[16px] md:text-[16px] text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
              Bring your best costume and your biggest smile to Nu Smile Dental
              for an evening of candy, decorated trunks, and Halloween fun for
              the whole family.
            </p>

            {/* Event Date and Time */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* Date Card */}
              <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
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
                      d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
                    />
                  </svg>
                </div>

                <div>
                  <div
                    className="text-sm text-gray-600 mb-1"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  >
                    Event Date
                  </div>
                  <div
                    className="font-semibold text-gray-900"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  >
                    October 21, 2026
                  </div>
                </div>
              </div>

              {/* Time Card */}
              <div className="flex items-start space-x-3 p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                <div className="w-10 h-10 shrink-0 bg-secondary rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      strokeWidth={2}
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 7v5l3 2"
                    />
                  </svg>
                </div>

                <div>
                  <div
                    className="text-sm text-gray-600 mb-1"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  >
                    Event Time
                  </div>
                  <div
                    className="font-semibold text-gray-900"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  >
                    4:30 PM–6:30 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Copy */}
            <p
              className="text-[16px] md:text-[16px] text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
              Join us for a festive Trunk or Treat celebration filled with
              treats, costumes, and plenty of reasons to smile.
            </p>

           
          </div>
        </div>
      </div>
    </section>
  );
}