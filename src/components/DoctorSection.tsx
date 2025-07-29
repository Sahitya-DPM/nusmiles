'use client';
import Image from 'next/image';

export default function DoctorSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Meet Our Doctors
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Doctors Container */}
        <div className="space-y-20">
          {/* Dr. Rujul G. Parikh */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
                <Image
                  src="/doctor.png"
                  alt="Dr. Rujul G. Parikh DDS"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">23+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="space-y-8">
              {/* Name and Title */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  Dr. Rujul G. Parikh DDS
                </h3>
                <p className="text-xl text-primary font-semibold mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  General & Implant Dentist in Stockton, CA
                </p>
                <div className="w-16 h-1 bg-secondary rounded-full"></div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  For more than 23 years, Dr. Rujul G. Parikh DDS has been committed to creating beautiful, healthy smiles. His main priorities are oral health and patient care. As a General Dentist, he has invested many hours in continuing education and constantly updated and educated in dentistry. His continual pursuit of better methods, depth of understanding, and range of experience make him skilled in numerous dental procedures with primary focus on Dental Implants and Dentures.
                </p>
              </div>

              {/* Specializations */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dental Implants</div>
                    <div className="text-sm text-gray-600">Specialized Focus</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dentures</div>
                    <div className="text-sm text-gray-600">Expert Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="w-32 h-px bg-gray-300"></div>
            <div className="mx-4 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="w-32 h-px bg-gray-300"></div>
          </div>

          {/* Dr. Shivli Arora */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Information */}
            <div className="space-y-8 lg:order-1 order-2">
              {/* Name and Title */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  Dr. Shivli Arora DDS
                </h3>
                <p className="text-xl text-primary font-semibold mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  General & Cosmetic Dentist in Stockton, CA
                </p>
                <div className="w-16 h-1 bg-secondary rounded-full"></div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Working under Dr. Parikh, Dr. Shivli Arora has nearly 10 years of hands on clinical experience and has a passion for cosmetic dentistry in providing patients with the beautiful smile they always wanted. Dr. Arora is certified in Lasers for dental treatment and she strives to further pursue her education for excellence involving Dental Implants, that translates clinical skills and extends to patients emotional well being.
                </p>
              </div>

              {/* Specializations */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Cosmetic Dentistry</div>
                    <div className="text-sm text-gray-600">Beautiful Smiles</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Laser Treatment</div>
                    <div className="text-sm text-gray-600">Certified Expert</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Image */}
            <div className="relative group lg:order-2 order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent z-10"></div>
                <Image
                  src="/Shivli Arora.png"
                  alt="Dr. Shivli Arora DDS"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-12">
          <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg uppercase" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
} 