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

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <HomeGallerySection />
      <ServicesSection />
      <DoctorSection />
      <GalleryCarousel />
      <TestimonialVideoSection />
      <CTASection />
    </>
  );
}
