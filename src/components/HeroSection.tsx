'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Office Team Photo */}
      <div className="relative w-full h-full">
        <Image
          src="/heroimage.jpg"
          alt="Nu Smile Dental Office Team"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end z-10 pb-20 md:pb-32">
        <div className="text-left text-white px-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl w-full">
          <h1 className="text-[24px] sm:text-[26px] md:text-6xl lg:text-7xl font-bold leading-tight break-words" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', marginBottom: '40px' }}>
            Welcome to Our Practice
          </h1>
          <p className="text-[18px] sm:text-[22px] md:text-2xl lg:text-3xl mb-4 leading-relaxed whitespace-nowrap" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Welcome to Nu Smile Dental, Your Dentist in Stockton, CA
          </p>
          <p className="text-[14px] sm:text-[16px] md:text-xl lg:text-2xl mb-4 leading-loose break-words" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Welcome! The dental professionals at Nu Smile Dental are pleased to welcome you to our practice located in Stockton, CA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link href="/appointment" className="bg-primary text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg text-[14px] sm:text-[15px] md:text-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg uppercase inline-block text-center w-full sm:w-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Book An Appointment
            </Link>
            <Link href="/about-us" className="border-2 border-white text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg text-[14px] sm:text-[15px] md:text-xl font-semibold hover:bg-white hover:text-primary transition-colors shadow-lg uppercase inline-block text-center w-full sm:w-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 