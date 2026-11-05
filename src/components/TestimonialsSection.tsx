'use client';
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "The Cali Nurse",
      text: "I love Nu Smile Dental! I've been coming here since the March Lane location for about 10yrs now and would highly recommend this location as they provide the best care.",
      rating: 5
    },
    {
      name: "Francisco Beltran",
      text: "One of the nicest dentist in area I bring my kids here, I decided to switch to keep everything at one location. Staff is available to help same day unlike other dentist…Friendly, competent, and happy to help. They also have other options and plans other places do not offer.",
      rating: 5
    },
    {
      name: "Julina Batieste",
      text: "I love this place. The staff is down to earth and definitely communicates ahead of time. The doctors are fast and always trying to get you in and out on time. They are kid friendly and fast. Love this place",
      rating: 5
    },
    {
      name: "Corina Marquez",
      text: "Awesome team and dentist! Took care of me the same day and felt no pain!",
      rating: 5
    },
    {
      name: "Laura Bacaylan",
      text: "I have been a patient here for a couple of years. Today I brought my daughter in and the dentist was friendly and addressed our concerns. Staff was nice and helpful.",
      rating: 5
    },
    {
      name: "Elaine Daphne Talaid",
      text: "I love it here! Staff are very friendly and knowledgeable and I have had no issues whatsoever. Highly recommended",
      rating: 5
    },
    {
      name: "Matthew Jr Eagan",
      text: "For being so last minute as a new patient. And needing my teeth worked on because of a Heath issue. They did everything I needed done in a short notice. I highly recommend going here. All staff are super friendly and caring.",
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
    <section className="pt-10 pb-16 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[27px] md:text-4xl font-bold text-primary mb-4">
            Patient Testimonials
          </h2>
          <p className="text-[16px] md:text-[16px] text-accent">
            Hear from our satisfied patients about their dental experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-8 sm:px-12 md:px-16">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg text-center relative">
            <div className="mb-6">
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-[16px] md:text-[16px] text-gray-700 italic mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <h3 className="font-semibold text-primary text-[16px] md:text-[16px]">
                {testimonials[currentIndex].name}
              </h3>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 bg-primary text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-8 bg-primary text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
