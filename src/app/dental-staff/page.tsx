'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function DentalStaffPage() {
  const doctors = [
    {
      name: "Dr. Rujul Parikh DDS",
      title: "Dentist in Stockton, CA",
      image: "/doctor.png",
      description: "Dr. Parikh has been passionate about making healthy smiles for more than 20 years. His primary goal is patient care and dental health. He has been educated from a very reputed college GDCH, Ahemedabad, India and he was educated by various professors from Loma Linda University, UCLA, UCSF, UOP, and many others.",
      additionalInfo: "His constant seeking of better technique, knowledge, and wide range of experience made him proficient in many phases of dentistry. He has done countless hours of continuous education. He is a graduate in Orthodontics from the United States Dental Institute and in dental implants, Associate Fellow of AAID, and Fellow of ICOI.",
      personalInfo: "He is happily married with three children and he likes to play table tennis and golf in his free time. He also likes hiking and bicycling. His broad knowledge and attention to detail will make you comfortable in stress full dental environment."
    },
    {
      name: "Dr. Shivli Arora DDS",
      title: "Dentist in Stockton, CA",
      image: "/DrShivli Arora.webp",
      description: "Working under Dr. Parikh, Dr. Shivli Arora has nearly 10 years of hands on clinical experience and has a passion for cosmetic dentistry in providing patients with the beautiful smile they always wanted.",
      additionalInfo: "Having a major in Periodontics from the prestigious Amrita School of Dentistry and an MDS from Rajiv Gandhi University of Health Sciences in India, along with dental credentials from the renowned UCSF. Dr. Arora is certified in Lasers for dental treatment and she strives to further pursue her education for excellence involving Dental Implants, that translates clinical skills and extends to patients emotional well being.",
      personalInfo: "She is happily married with a daughter and loves to spend quality time with her friends and family, cooking, and camping. Offering only the best care, you will feel comfortable receiving treatment from both of our doctors."
    }
  ];

  const staffMembers = [
    {
      name: "Carolina RDH",
      title: "Registered Dental Hygienist",
      language: "(Español)",
      image: "/Carolina.webp",
      description: "With 5 years of Hygiene experience & 15 years total in dentistry, Carolina provides an easy & comfortable experience for our patients during their cleanings.",
      personalInfo: "On her free time, she enjoys spending quality time with her 3 kids & going out to new places!"
    },
    {
      name: "Donna",
      title: "Office Manager/Treatment Coordinator",
      language: "",
      image: "/Donna.webp",
      description: "With more than 20 years of experience, Donna is charismatic, knowledgeable, and always willing to go the extra mile to provide a comfortable experience for our patients.",
      personalInfo: "Outside of work, she enjoys spending her time with family, watching anime, and taking care of her tortoise and cats!"
    },
    {
      name: "Serena",
      title: "Receptionist/Scheduling Coordinator",
      language: "(Español)",
      image: "/Serena.webp",
      description: "As one of the first faces you see, Serena always takes care of our patients scheduling & receptionist needs with ease.",
      personalInfo: "When outside of work, she enjoys going out to concerts with friends and being her with family!"
    },
    {
      name: "Laura RDA",
      title: "Registered Dental Assistant",
      language: "(Español)",
      image: "/Laura.webp",
      description: "Always aiming to learn more everyday, Laura strives to be the best assistant she can be!",
      personalInfo: "When she's not working, Laura spends her time with her partner, family, & friends. She loves to travel any chance she gets!"
    },
    {
      name: "Yasmine RDA",
      title: "Registered Dental Assistant",
      language: "",
      image: "/Yasmine.webp",
      description: "As one of our Registered Dental Assistants, Yasmine takes pride in providing our patients with a comfortable experience while also ensuring our assistants run smoothly and efficiently.",
      personalInfo: "Outside of work, she loves to spend time with her friends and family and traveling as much as she can!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/office1.jpg.webp"
            alt="Dental Staff"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Dental Staff
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Meet our dedicated team of dental professionals in Stockton, CA
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Our Doctors
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {doctor.name}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {doctor.title}
                  </p>
                  <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    <p className="text-lg leading-relaxed">
                      {doctor.description}
                    </p>
                    <p className="text-lg leading-relaxed">
                      {doctor.additionalInfo}
                    </p>
                    <p className="text-lg leading-relaxed">
                      {doctor.personalInfo}
                    </p>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Our Staff
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((staff, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="relative overflow-hidden rounded-full shadow-lg">
                      <Image
                        src={staff.image}
                        alt={staff.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 128px, 128px"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {staff.name} {staff.language && <span className="text-primary text-sm">{staff.language}</span>}
                  </h3>
                  <p className="text-lg text-primary font-semibold" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {staff.title}
                  </p>
                </div>
                <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  <p className="text-base leading-relaxed">
                    {staff.description}
                  </p>
                  <p className="text-base leading-relaxed italic">
                    {staff.personalInfo}
                  </p>
                </div>
              </div>
            ))}
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