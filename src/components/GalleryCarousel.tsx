'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const galleryImages = [
    "/office1.jpg.webp",
    "/office2.jpg.webp", 
    "/office3.jpg.webp",
    "/office4.jpg.webp",
    "/office5.jpg.webp",
    "/office6.jpg.webp",
    "/office07.jpg.webp",
    "/office08.jpg.webp",
    "/officepic-1.jpg",
    "/officepic-2.jpg",
    "/officepic-3.jpg",
    "/officepic-4.jpg",
    "/officepic-5.jpg",
    "/officepic-6.jpg"
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const imagesPerView = isMobile ? 1 : 4;
  const translatePercentage = isMobile ? 100 : 25;

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 className="text-[27px] md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Our Office Gallery
          </h2>
          <p className="text-[16px] md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Take a virtual tour of our modern dental office and state-of-the-art facilities
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative overflow-hidden w-full">
          <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * translatePercentage}%)` }}>
            {galleryImages.map((image, index) => (
              <div key={index} className={`${isMobile ? 'w-full' : 'w-1/4'} flex-shrink-0 px-2`}>
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Office Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: Math.ceil(galleryImages.length / imagesPerView) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * imagesPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === Math.floor(currentIndex / imagesPerView)
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 