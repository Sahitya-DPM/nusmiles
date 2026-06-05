'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

const VIDEO_SRC = '/video1.mp4';

interface TestimonialVideoSectionProps {
  showViewAllLink?: boolean;
  description?: string;
}

export default function TestimonialVideoSection({
  showViewAllLink = true,
  description = 'Hear directly from our patients about their experience at Nu Smile Dental',
}: TestimonialVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing video:', error);
    }
  };

  return (
    <section
      className="py-12 md:py-20 lg:py-24"
      style={{
        backgroundColor: '#f3f4f6',
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Video Player */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-contain bg-black"
                controls={isPlaying}
                controlsList="nodownload"
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={VIDEO_SRC} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/20 transition-colors hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  aria-label="Play patient story video"
                >
                  <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-secondary shadow-lg">
                    <svg
                      className="ml-1 h-7 w-7 md:h-8 md:w-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span
                    className="rounded-full bg-white px-6 py-2.5 text-sm md:text-base font-semibold text-secondary shadow-md"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  >
                    Play Patient Story
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Content Card */}
          <div className="lg:col-span-5 xl:col-span-4 flex">
            <div className="relative flex w-full flex-col rounded-2xl md:rounded-3xl bg-white p-8 md:p-10 shadow-xl">
              <span
                className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-secondary"
                aria-hidden="true"
              />

              <div className="mb-6 flex items-center gap-3 pl-4">
                <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
                <span
                  className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary"
                  style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
                >
                  <span className="text-sm leading-none" aria-hidden="true">&ldquo;</span>
                  Patient Story
                </span>
              </div>

              <h2
                className="mb-4 pl-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900"
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                Video Testimonials
              </h2>

              <p
                className="mb-8 flex-grow pl-4 text-base md:text-lg leading-relaxed text-gray-500"
                style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
              >
                {description}
              </p>

              {showViewAllLink && (
                <Link
                  href="/testimonials"
                  className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-secondary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  View All Testimonials
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
