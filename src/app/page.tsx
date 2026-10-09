import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DentalPromoSlider from '@/components/DentalPromoSlider';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HomeGallerySection from '@/components/HomeGallerySection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TestimonialVideoSection from '@/components/TestimonialVideoSection';
import GalleryCarousel from '@/components/GalleryCarousel';
import CTASection from '@/components/CTASection';
import InsuranceSection from '@/components/InsuranceSection';
import JsonLd from '@/components/JsonLd';
import { buildHomeBrandSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'NuSmile Dental | Family Dentist in Stockton, CA',
  description:
    'Family dentist in Stockton, CA and a dentist that take medical in Stockton CA. NuSmile Dental accepts Medi-Cal, Denti-Cal, and major dental plans.',
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    url: `${SITE_URL}/`,
    title: 'NuSmile Dental | Family Dentist in Stockton, CA',
    description:
      'Official homepage for NuSmile Dental in Stockton, CA. Family dentist that takes Medi-Cal and major dental insurance.',
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
      <DentalPromoSlider />
      <AboutSection />
      <InsuranceSection />
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