'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/AdobeStock_904675555.jpeg",
    "/AdobeStock_465963937.jpeg",
    "/AdobeStock_1422230286.jpeg"
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover object-top-right"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center z-10 pt-32 pb-32">
        <div className="text-left text-white px-8 md:px-16 lg:px-24 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', marginTop: '70px', marginBottom: '40px' }}>
            Welcome to Our Practice
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Welcome to Nu Smile Dental, Your Dentist in Stockton, CA
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 leading-loose" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Welcome! The dental professionals at Nu Smile Dental are pleased to welcome you to our practice located in Stockton, CA.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/appointment" className="bg-primary text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg uppercase inline-block text-center" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Book An Appointment
            </Link>
            <Link href="/about-us" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white hover:text-primary transition-colors shadow-lg uppercase inline-block text-center" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 