'use client';

import { useEffect, useState } from 'react';
import DentalBenefitsSection from './DentalBenefitsSection';
import TrunkOrTreatSection from './TrunkOrTreatSection';

const SLIDE_DURATION = 4000;

export default function DentalPromoSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 2);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translate3d(-${activeSlide * 100}%, 0, 0)`,
        }}
      >
        <div className="w-full min-w-full shrink-0">
          <DentalBenefitsSection />
        </div>

        <div className="w-full min-w-full shrink-0">
          <TrunkOrTreatSection />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {[0, 1].map((index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? 'w-8 bg-primary'
                : 'w-2.5 bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}