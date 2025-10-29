import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HomeGallerySection from '@/components/HomeGallerySection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TestimonialVideoSection from '@/components/TestimonialVideoSection';
import PromotionsSection from '@/components/PromotionsSection';
import GalleryCarousel from '@/components/GalleryCarousel';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HomeGallerySection />
      <DoctorSection />
      <PromotionsSection />
      <GalleryCarousel />
      <TestimonialsSection />
      <TestimonialVideoSection />
    </>
  );
}
