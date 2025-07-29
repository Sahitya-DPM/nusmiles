import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PromotionsSection from '@/components/PromotionsSection';
import GalleryCarousel from '@/components/GalleryCarousel';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorSection />
      <PromotionsSection />
      <GalleryCarousel />
      <TestimonialsSection />
    </>
  );
}
