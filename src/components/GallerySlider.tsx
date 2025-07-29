'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GallerySlider() {
  const galleryImages = [
    {
      src: "/AdobeStock_1521171278.jpeg",
      alt: "Cosmetic Dentistry"
    },
    {
      src: "/AdobeStock_614345942.jpeg", 
      alt: "Invisalign Treatment"
    },
    {
      src: "/AdobeStock_1259806201.jpeg",
      alt: "Family Dentistry"
    },
    {
      src: "/AdobeStock_904675555.jpeg",
      alt: "Preventive Care"
    },
    {
      src: "/AdobeStock_826746503.jpeg",
      alt: "Dental Care"
    },
    {
      src: "/AdobeStock_509621389.jpeg",
      alt: "Dental Office"
    },
    {
      src: "/AdobeStock_1548118314.jpeg",
      alt: "Dental Treatment"
    },
    {
      src: "/AdobeStock_1019988262.jpeg",
      alt: "Dental Services"
    }
  ];

  // Create a continuous loop by duplicating images
  const loopedImages = [...galleryImages, ...galleryImages, ...galleryImages];
  const [currentIndex, setCurrentIndex] = useState(galleryImages.length); // Start from the middle set

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // If we reach the end of the looped images, reset to the middle set
        if (nextIndex >= loopedImages.length - galleryImages.length) {
          return galleryImages.length;
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [galleryImages.length, loopedImages.length]);

  const goToSlide = (index: number) => {
    // Map the dot index to the middle set of images
    setCurrentIndex(galleryImages.length + index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Dental Gallery
          </h2>
          <p className="text-lg text-accent">
            Explore our state-of-the-art dental facility and treatments
          </p>
        </div>

        <div className="relative w-full">
          {/* Gallery Container with 4 Columns */}
          <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 4)}%)`,
                width: `${(loopedImages.length * 100) / 4}%`
              }}
            >
              {loopedImages.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 h-full"
                  style={{ width: `${100 / loopedImages.length}%` }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index < 4}
                      sizes="(max-width: 768px) 25vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  (currentIndex - galleryImages.length) % galleryImages.length === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 