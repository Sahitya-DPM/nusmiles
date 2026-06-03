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

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= testimonialVideos.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? testimonialVideos.length - 1 : prev - 1
    );
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

          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>

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
          {/* Desktop - Show 3 Videos */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const video =
                testimonialVideos[
                  (currentIndex + offset) % testimonialVideos.length
                ];

              return (
                <div
                  key={video.id}
                  className="bg-black rounded-2xl overflow-hidden shadow-xl"
                >
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-[350px] object-cover"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              );
            })}
          </div>

          {/* Mobile - Show 1 Video */}
          <div className="md:hidden">
            <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
              <video
                controls
                preload="metadata"
                playsInline
                className="w-full"
              >
                <source
                  src={testimonialVideos[currentIndex].videoUrl}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center z-10 text-xl"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center z-10 text-xl"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}