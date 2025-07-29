import Image from 'next/image';
import Header from '../../components/Header';

export default function DentalServicesPage() {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments to maintain your oral health.",
      image: "/General Dentistry.jpeg",
      features: [
        "Dental Cleanings & Exams",
        "Cavity Fillings",
        "Root Canal Therapy",
        "Tooth Extractions",
        "Gum Disease Treatment",
        "Emergency Dental Care"
      ]
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
      image: "/Dental Implants.jpeg",
      features: [
        "Single Tooth Implants",
        "Multiple Tooth Implants",
        "Full Arch Implants",
        "Implant-Supported Dentures",
        "All-on-4 Implants",
        "Implant Maintenance"
      ]
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with advanced cosmetic dental procedures for a more confident appearance.",
      image: "/Cosmetic Dentistry.jpeg",
      features: [
        "Teeth Whitening",
        "Porcelain Veneers",
        "Dental Bonding",
        "Smile Makeovers",
        "Cosmetic Contouring",
        "Gum Contouring"
      ]
    },
    {
      title: "Invisalign & Orthodontics",
      description: "Straighten your teeth discreetly with clear aligners and modern orthodontic solutions.",
      image: "/Invisalign & Orthodontics.jpeg",
      features: [
        "Invisalign Clear Aligners",
        "Traditional Braces",
        "Clear Braces",
        "Retainers",
        "Orthodontic Consultations",
        "Teen Orthodontics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/office1.jpg.webp"
            alt="Dental Office"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Dental Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Comprehensive dental care solutions tailored to your needs. From routine checkups to advanced cosmetic procedures.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary text-lg mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                      Services Include:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                          <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Schedule your consultation today and discover how our comprehensive dental services can improve your oral health and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 