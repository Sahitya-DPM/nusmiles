import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Contact NuSmile Dental | Stockton Dentist",
  description: "Contact NuSmile Dental to schedule visits, ask questions, or learn more about dental treatment options and patient care services.",
};
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/office1.jpg.webp"
            alt="Contact Us"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-[16px] md:text-[16px] text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Get in touch with us today to schedule your appointment or ask any questions about our dental services.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[27px] md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Visit Our Office
            </h2>
            <p className="text-[16px] md:text-[16px] text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              1801 E March Ln suite a-165, Stockton, CA, 95210, USA
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.1234567890123!2d-121.12345678901234!3d37.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac8b1234567890%3A0x1234567890abcdef!2s1801%20E%20March%20Ln%20suite%20a-165%2C%20Stockton%2C%20CA%2095210%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nu Smile Dental Office Location"
            ></iframe>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ContactPage; 