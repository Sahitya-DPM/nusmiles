import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HomeGallerySection from '@/components/HomeGallerySection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TestimonialVideoSection from '@/components/TestimonialVideoSection';
import GalleryCarousel from '@/components/GalleryCarousel';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { buildHomeBrandSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'NuSmile Dental | Family Dentist in Stockton, CA',
  description:
    'NuSmile Dental — also searched as NuSmile Dentist, NuSmile Dentistry, NuSmile Family Dentistry, and Nusmiles Dental — is your family dentist in Stockton, CA.',
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    url: `${SITE_URL}/`,
    title: 'NuSmile Dental | Family Dentist in Stockton, CA',
    description:
      'Official homepage for NuSmile Dental in Stockton, CA. Family dentistry from Dr. Rujul Parikh and team.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomeBrandSchema()} />
      <Header />
      <HeroSection />
      <AboutSection />
      <DoctorSection />
      <TestimonialsSection />
      <TestimonialVideoSection />
      <ServicesSection />
      <HomeGallerySection />
      <GalleryCarousel />
      <CTASection />
    </>
  );
}