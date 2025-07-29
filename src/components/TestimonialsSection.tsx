'use client';
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Dr. Saleem transformed my smile with veneers. The entire process was painless and the results are amazing!",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "The dental implant procedure was smooth and professional. I can eat normally again and my confidence is restored.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      text: "Invisalign treatment was perfect for my busy lifestyle. The team was always supportive and the results exceeded my expectations.",
      rating: 5
    },
    {
      name: "David Thompson",
      text: "Emergency dental care when I needed it most. The staff was compassionate and professional throughout the entire process.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      text: "Family dentistry at its best! My kids actually look forward to their dental visits. The team makes everyone feel comfortable.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg text-accent">
            Hear from our satisfied patients about their dental experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center relative">
            <div className="mb-6">
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <h3 className="font-semibold text-primary text-xl">
                {testimonials[currentIndex].name}
              </h3>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 