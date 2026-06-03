"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

        {/* Video Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {testimonialVideos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
                <video
                  className="w-full h-auto"
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                  style={{ maxHeight: "400px" }}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <h3 className="text-center mt-4 text-lg font-semibold text-gray-800">
                {video.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}