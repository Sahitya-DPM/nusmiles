'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeAllOnXDentalImplant() {
  return (
    <section
      id="home-All-on-X-Dental-Implant"
      className="relative m-0 w-full h-[75svh] min-h-[500px] max-h-[700px] overflow-hidden p-0 sm:h-screen sm:min-h-0 sm:max-h-none"
    >
      {/* Office Team Photo */}
      <div className="relative h-full w-full">
        <Image
          src="/all-on-x-hero.jpeg"
          alt="All-on-X dental implants in Stockton, CA"
          fill
          className="object-cover"
          style={{
            objectPosition: 'center top',
          }}
          priority
          sizes="100vw"
        />

        {/* Overlay for better text readability */}
        {/* Overlay for better text readability on desktop and mobile */}
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-end pb-20 md:pb-32">
        <div className="w-full max-w-4xl px-4 text-left text-white sm:px-8 md:px-16 lg:px-24">
          <h1
            className="break-words text-[24px] font-bold leading-tight sm:text-[26px] md:text-6xl lg:text-6xl"
            style={{
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
              marginBottom: '40px',
            }}
          >
            All-on-X Dental Implant in Stockton, CA
          </h1>

          <p
            className="mb-4 break-words text-[18px] leading-relaxed sm:text-[22px] md:text-[16px] lg:text-[16px]"
            style={{
              fontFamily: 'Hind, Arial, Helvetica, sans-serif',
            }}
          >
            Rediscover the comfort of a complete smile with All-on-X dental
            implants in Stockton, CA. Enjoy a stable, natural-looking solution
            designed to replace missing teeth and restore everyday confidence.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
              href="/all-on-x-dental-implants"
              className="inline-block w-full rounded-lg border-2 border-white px-6 py-4 text-center text-[14px] font-semibold uppercase text-white shadow-lg transition-colors hover:bg-white hover:text-primary sm:w-auto sm:px-10 sm:py-5 sm:text-[15px] md:text-[16px]"
              style={{
                fontFamily: 'Hind, Arial, Helvetica, sans-serif',
              }}
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-block w-full rounded-lg bg-primary px-6 py-4 text-center text-[14px] font-semibold uppercase text-white shadow-lg transition-colors hover:bg-primary-dark sm:w-auto sm:px-10 sm:py-5 sm:text-[15px] md:text-[16px]"
              style={{
                fontFamily: 'Hind, Arial, Helvetica, sans-serif',
              }}
            >
              Book An Appointment
            </Link>

            
          </div>
        </div>
      </div>
    </section>
  );
}