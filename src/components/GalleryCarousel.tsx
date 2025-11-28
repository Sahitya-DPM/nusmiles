'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const galleryImages = [
    "/office1.jpg.webp",
    "/office2.jpg.webp", 
    "/office3.jpg.webp",
    "/office08.jpg.webp",
    "/officepic-1.jpg",
    "/officepic-2.jpg",
    "/officepic-3.jpg",
    "/officepic-4.jpg",
    "/officepic-5.jpg",
    "/officepic-6.jpg",
    "/20251112_113726.jpg",
    "/20251001_153520.jpg",
    "/20251001_153927.jpg"
  ];

  // Create infinite loop by duplicating images multiple times
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];
  const startIndex = galleryImages.length; // Start from the middle set

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize to middle set
  useEffect(() => {
    setCurrentIndex(startIndex);
  }, []);

  // Auto-scroll every 3 seconds with seamless infinite loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // When we reach near the end, reset to equivalent position in first set seamlessly
        if (nextIndex >= duplicatedImages.length - galleryImages.length) {
          // Disable transition, reset position, then re-enable transition
          requestAnimationFrame(() => {
            setIsTransitioning(false);
            requestAnimationFrame(() => {
              setCurrentIndex(startIndex);
              requestAnimationFrame(() => {
                setIsTransitioning(true);
              });
            });
          });
          return nextIndex;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [galleryImages.length, duplicatedImages.length, startIndex]);

  const imagesPerView = isMobile ? 1 : 4;
  const translatePercentage = isMobile ? 100 : 25;

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[27px] md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Our Office Gallery
          </h2>
          <p className="text-[16px] md:text-[16px] text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Take a virtual tour of our modern dental office and state-of-the-art facilities
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative overflow-hidden w-full">
          <div 
            className="flex" 
            style={{ 
              transform: `translateX(-${currentIndex * translatePercentage}%)`,
              transition: isTransitioning ? 'transform 1s ease-in-out' : 'none'
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div key={`${image}-${index}`} className={`${isMobile ? 'w-full' : 'w-1/4'} flex-shrink-0 px-1 sm:px-2`}>
                <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Office Image ${(index % galleryImages.length) + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 