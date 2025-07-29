'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function GeneralDentistryPage() {
  const generalServices = [
    {
      title: "Professional Teeth Cleanings",
      description: "to maintain good oral health"
    },
    {
      title: "Sealants",
      description: "to protect children's teeth from decay"
    },
    {
      title: "Fillings",
      description: "to make your teeth strong and healthy again"
    },
    {
      title: "Crowns & Bridges",
      description: "to replace large amounts of lost tooth structure and/or missing teeth"
    },
    {
      title: "Root Canal Treatment",
      description: "to save an infected tooth"
    },
    {
      title: "Tooth Extractions",
      description: "when a tooth is hopelessly damaged or decayed"
    },
    {
      title: "Dental Implants",
      description: "for the longest-lasting tooth replacement available today"
    },
    {
      title: "Implant-Supported Dentures",
      description: "to help you smile again"
    },
    {
      title: "Oral Cancer Screenings",
      description: "to detect disease at a curable stage"
    },
    {
      title: "Periodontal (Gum) Disease Therapy",
      description: "to prevent tooth loss"
    },
    {
      title: "TMJ/TMD Treatment",
      description: "for chronic jaw pain"
    }
  ];

  const cosmeticServices = [
    {
      title: "Bonding",
      description: "to repair small chips or cracks"
    },
    {
      title: "Teeth Whitening",
      description: "to brighten a faded or discolored smile"
    },
    {
      title: "Veneers",
      description: "for repairing larger chips and cracks, and reshaping teeth"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/General Dentistry - s.jpeg"
            alt="General Dentistry"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            General Dentistry
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Comprehensive dental care for your entire family in Stockton, CA
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Our General Dentistry Services Include
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmetic Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Our Cosmetic Services Include
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cosmeticServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmetic Dentistry Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cosmetic Dentistry in Stockton, CA
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-lg leading-relaxed">
                  At NuSmile Dental, Dr. Parikh, Dr. Arora, and our team strive to provide our patients with the beautiful smile that they have always been looking for! As they say, a smile says it all!
                </p>
                <p className="text-lg leading-relaxed">
                  We offer a multitude of cosmetic treatments at the convenience of our Stockton dental office, varying from repairing chips and cracks, to brightening the color of your teeth. All of our cosmetic services are done in-house, so you can feel comfortable receiving care from people you already know and trust.
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  Dr. Parikh and Dr. Arora have keen interest in providing cosmetic treatments, and always strive for perfection when making improvements to our patients' smiles. We'd love to take on your cosmetic treatment today!
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/Cosmetic Dentistry - s.jpeg"
                  alt="Cosmetic Dentistry in Stockton, CA"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintaining Your Smile */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Maintaining Your New Smile
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          <div className="text-gray-700 space-y-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            <p className="text-lg leading-relaxed">
              Maintaining a beautiful smile after cosmetic treatment requires some work. Brushing and flossing twice a day is strongly encouraged. Avoiding smoking is the best care for your gums and teeth in the long run. Maintenance for cosmetic work varies for the treatment, but it's best to stay away from colored foods such as coffee, ketchup, fruit juice, etc. due to whitened teeth being more at risk to staining after treatment.
            </p>
          </div>
        </div>
      </section>

      {/* General Dentistry Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/General Dentistry - s.jpeg"
                  alt="General Dentistry in Stockton, CA"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                General Dentistry in Stockton, CA
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <p className="text-lg leading-relaxed">
                  Shopping for the right dentist is a serious undertaking. There are so many factors that can play a role in who is the ideal general dentist to fit your needs. You want someone knowledgeable with years of expertise, but you also want someone caring, thoughtful, and able to offer you comprehensive dental care all in one convenient location.
                </p>
                <p className="text-lg leading-relaxed">
                  If you are still on the hunt for a new dentist here in Stockton, CA, we're so happy you found us. Dr. Rujul Parikh and the team at Nu Smile Dental pride themselves on providing the very best general dentistry you can find.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Experience Exceptional Dental Care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Join our family of satisfied patients and discover why Nu Smile Dental is the trusted choice for dental care in Stockton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Book Appointment
            </Link>
            <a href="tel:(209) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 