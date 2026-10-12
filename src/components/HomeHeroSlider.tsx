'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroSection from './HeroSection';
import HomeAllOnXDentalImplant from './HomeAllOnXDentalImplant';

const slides = [
  {
    id: 'all-on-x',
    component: HomeAllOnXDentalImplant,
    label: 'All-on-X Dental Implants',
  },
  {
    id: 'home',
    component: HeroSection,
    label: 'Home',
  },
];

export default function HomeHeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatically change slides every 6 seconds
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const ActiveComponent = slides[activeSlide].component;

  return (
    <section
      className="relative m-0 grid w-full grid-cols-1 overflow-hidden bg-[#441018] p-0"
      aria-label="Homepage hero slider"
    >
      {/* Slider content */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={slides[activeSlide].id}
          className="relative col-start-1 row-start-1 m-0 w-full min-w-0 p-0"
          style={{ gridArea: '1 / 1', zIndex: 1 }}
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{
            duration: 0.65,
            ease: 'linear',
          }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>

      {/* Previous arrow */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70 sm:left-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70 sm:right-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Slide indicator dots */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 sm:bottom-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to ${slide.label} slide`}
            aria-current={activeSlide === index ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? 'w-8 bg-white'
                : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}