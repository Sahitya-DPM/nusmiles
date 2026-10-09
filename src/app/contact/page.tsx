'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

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

      {/* Contact Form */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Request An Appointment
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
