"use client";

import { useState } from "react";

export default function TestimonialVideoSection() {
  const testimonialVideos = [
    {
      id: 1,
      title: "Patient Success Story 1",
      videoUrl: "/1.mp4",
    },
    {
      id: 2,
      title: "Patient Success Story 2",
      videoUrl: "/3.mp4",
    },
    {
      id: 3,
      title: "Patient Success Story 3",
      videoUrl: "/4.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonialVideos.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialVideos.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[27px] md:text-5xl font-bold text-gray-900 mb-4"
            style={{
              fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
            }}
          >
            Patient Video Testimonials
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>

          <p
            className="text-[16px] md:text-[16px] text-gray-600 max-w-3xl mx-auto"
            style={{
              fontFamily: "Hind, Arial, Helvetica, sans-serif",
            }}
          >
            Hear directly from our patients about their experience at Nu Smile
            Dental
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video
              key={testimonialVideos[currentIndex].videoUrl}
              className="w-full h-auto"
              controls
              controlsList="nodownload"
              style={{ maxHeight: "500px" }}
            >
              <source
                src={testimonialVideos[currentIndex].videoUrl}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <h3 className="text-center mt-4 text-lg font-semibold text-gray-800">
            {testimonialVideos[currentIndex].title}
          </h3>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-primary"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}