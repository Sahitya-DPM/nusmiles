'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DoctorSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-10 md:py-20">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          <h2
            className="mb-4 text-[27px] font-bold text-gray-900 md:text-5xl"
            style={{
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
            }}
          >
            Meet Our Doctor
          </h2>

          <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
        </div>

        {/* Doctors Container */}
        <div className="space-y-20">
          {/* Dr. Rujul G. Parikh */}
          <div className="grid items-stretch gap-12 lg:grid-cols-2">
            {/* Doctor Image */}
            <div className="group relative flex min-h-[400px] items-stretch sm:min-h-[500px] lg:min-h-[600px]">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/20 to-transparent" />

                <Image
                  src="/Rujul.jpeg"
                  alt="Dr. Rujul G. Parikh DDS"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-4 right-3 z-20 rounded-xl border border-gray-100 bg-white p-4 shadow-xl sm:-bottom-6 sm:-right-6 sm:p-6">
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-primary sm:text-3xl">
                    25+
                  </div>
                  <div className="text-xs font-medium text-gray-600 sm:text-sm">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Name and Title */}
              <div>
                <h3
                  className="mb-2 text-[27px] font-bold text-gray-900 md:text-4xl"
                  style={{
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                  }}
                >
                  Dr. Rujul G. Parikh DDS
                </h3>

                <p
                  className="mb-4 text-base font-semibold text-primary"
                  style={{
                    fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                  }}
                >
                  General &amp; Implant Dentist in Stockton, CA
                </p>

                <div className="h-1 w-16 rounded-full bg-secondary" />
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <p
                  className="text-base leading-relaxed text-gray-700"
                  style={{
                    fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                  }}
                >
                  For more than 25 years, Dr. Rujul G. Parikh DDS has been
                  committed to creating beautiful, healthy smiles. His main
                  priorities are oral health and patient care. As a General
                  Dentist, he has invested many hours in continuing education
                  and constantly updated and educated in dentistry. His
                  continual pursuit of better methods, depth of understanding,
                  and range of experience make him skilled in numerous dental
                  procedures with primary focus on{' '}
                  <Link
                    href="/dental-implants"
                    className="font-semibold text-primary hover:underline"
                  >
                    dental implants in Stockton
                  </Link>{' '}
                  and dentures.
                </p>
              </div>

              {/* Specializations */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Dental Implants */}
                <div className="flex items-center space-x-3 rounded-lg border border-primary/10 bg-primary/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg
                      className="h-5 w-5 text-white"
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

                  <div className="min-w-0">
                    <Link
                      href="/dental-implants"
                      className="font-semibold text-gray-900 hover:text-primary"
                    >
                      Dental Implants
                    </Link>

                    <div className="text-sm text-gray-600">
                      Stockton implant dentist
                    </div>
                  </div>
                </div>

                {/* Dentures */}
                <div className="flex items-center space-x-3 rounded-lg border border-secondary/10 bg-secondary/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <svg
                      className="h-5 w-5 text-white"
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
                    <div className="font-semibold text-gray-900">
                      Dentures
                    </div>

                    <div className="text-sm text-gray-600">
                      Expert Care
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-12 text-center">
          <Link
            href="/appointment"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-[15px] font-semibold uppercase text-white shadow-lg transition-colors hover:bg-primary-dark md:text-base"
            style={{
              fontFamily: 'Hind, Arial, Helvetica, sans-serif',
            }}
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}