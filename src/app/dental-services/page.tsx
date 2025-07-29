import Image from 'next/image';
import Header from '../../components/Header';

export default function DentalServicesPage() {
  const services = [
    {
      title: "General & Cosmetic Dentistry",
      description: "Comprehensive dental care including regular cleanings, exams, and cosmetic procedures to keep your smile healthy and beautiful.",
      image: "/General Dentistry.jpeg",
      features: [
        "Regular Cleanings & Exams",
        "Professional Teeth Cleanings",
        "Fillings",
        "Crowns & Bridges",
        "Porcelain Veneers",
        "Teeth Whitening",
        "Bonding",
        "Oral Cancer Screenings"
      ]
    },
    {
      title: "Dental Implants",
      description: "The longest-lasting tooth replacement available today, providing permanent solutions that look, feel, and function like natural teeth.",
      image: "/Dental Implants.jpeg",
      features: [
        "Single Tooth Implants",
        "Multiple Tooth Implants",
        "Full Arch Implants",
        "All-on-4® Implant Dentures",
        "Implant-Supported Dentures",
        "Implant Maintenance"
      ]
    },
    {
      title: "Orthodontics & Invisalign",
      description: "Modern orthodontic solutions to straighten teeth and achieve the perfect smile you've always wanted.",
      image: "/Invisalign & Orthodontics.jpeg",
      features: [
        "Invisalign Clear Aligners",
        "Traditional Braces",
        "Clear Braces",
        "Orthodontic Treatment",
        "Teen Orthodontics",
        "Retainers"
      ]
    },
    {
      title: "Advanced Treatments",
      description: "Specialized dental treatments including sedation dentistry, periodontal therapy, and advanced restorative procedures.",
      image: "/Cosmetic Dentistry.jpeg",
      features: [
        "Sedation Dentistry",
        "Root Canal Treatment",
        "Periodontal (Gum) Disease Therapy",
        "TMJ/TMD Treatment",
        "Tooth Extractions",
        "Platelet Rich Fibrin Therapy"
      ]
    }
  ];

  const additionalServices = [
    "Dentures",
    "Sealants",
    "Emergency Dental Treatment",
    "Pediatric Dentistry",
    "Endodontics",
    "Oral Surgery",
    "Technology Integration"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Cosmetic Dentistry - s.jpeg"
            alt="Dental Services"
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
            Dental Services Offered by Your Stockton, CA Dentist
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Comprehensive Dental Care in Stockton, CA
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Regular visits to your Stockton, CA dentist are essential to make sure oral health problems — from tooth decay to oral cancer — are detected and treated in a timely manner. At our office, your oral health is our paramount concern. We want to make sure your teeth stay healthy, function well and look great! From regular cleanings and exams to advanced restorative treatments, all of your routine dental needs can be met right here.
            </p>
          </div>
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

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Additional Services We Offer
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Complete dental care solutions for every member of your family
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary hover:text-white transition-colors duration-300">
                <h3 className="font-semibold text-lg" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Dental Treatment */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Emergency Dental Treatment
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  <strong>If you have a life-threatening or severe injury, call 911 or go directly to the nearest hospital emergency room.</strong>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  We can treat a variety of traumatic dental injuries, including teeth that have been chipped, moved, or knocked out entirely. Please call our office for assistance.
                </p>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-red-800 font-semibold" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    Emergency Contact: (209) 955-1800
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  Available 24/7 for Emergencies
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Don't wait - call us immediately for urgent dental care
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