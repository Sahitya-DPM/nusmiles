"use client";

import { useState } from "react";

export default function TestimonialVideoSection() {
  const testimonialVideos = [
    {
      id: 1,
      title: "Patient Success Story 1",
      videoUrl: "/video1.mp4",
    },
    {
      id: 2,
      title: "Patient Success Story 2",
      videoUrl: "/video2.mp4",
    },
    {
      id: 3,
      title: "Patient Success Story 3",
      videoUrl: "/video3.mp4",
    },
    {
      id: 4,
      title: "Patient Success Story 4",
      videoUrl: "/video4.mp4",
    },
    {
      id: 5,
      title: "Patient Success Story 5",
      videoUrl: "/video5.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, testimonialVideos.length - 3);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[27px] md:text-5xl font-bold text-gray-900 mb-4"
            style={{
              fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
            }}
          >
            Patient Video Testimonials
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />

          <p
            className="text-[16px] text-gray-600 max-w-3xl mx-auto"
            style={{
              fontFamily: "Hind, Arial, Helvetica, sans-serif",
            }}
          >
            Hear directly from our patients about their experience at Nu Smile
            Dental
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 33.3333}%)`,
              }}
            >
              {testimonialVideos.map((video) => (
                <div
                  key={video.id}
                  className="w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
                    <video
                      src={video.videoUrl}
                      controls
                      preload="metadata"
                      className="w-full h-auto"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonialVideos.map((video) => (
                <div
                  key={video.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
                    <video
                      src={video.videoUrl}
                      controls
                      preload="metadata"
                      className="w-full h-auto"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center z-10"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center z-10"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}