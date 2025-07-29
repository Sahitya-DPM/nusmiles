'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "All-on-4® Implant Dentures",
      description: "All-on-4® implant-supported denture treatment is the process of placing a minimum of four dental implants in each jaw to stabilize a non-removable denture.",
      image: "/AdobeStock_1305134131.jpeg",
      href: "/all-on-4-implant-dentures",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Dental Implants",
      description: "Before development of dental implants, dentures were the only alternative to replacing a missing tooth or teeth.",
      image: "/AdobeStock_1019988262.jpeg",
      href: "/dental-implants",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "General Dentistry",
      description: "Dentistry encompasses array of services and procedures with a common goal: to help you to preserve your natural teeth, ensure your oral health, and keep you looking and feeling great.",
      image: "/AdobeStock_1259806201.jpeg",
      href: "/general-dentistry",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Our Main Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Comprehensive dental care solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <Link href={service.href} className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors font-semibold uppercase tracking-wide inline-block text-center" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link href="/dental-services" className="bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary-dark transition-colors font-semibold text-lg uppercase tracking-wide inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
} 