import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12">
            {/* Left Side - Main Heading */}
            <div>
              <h2 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Start your journey towards a brighter smile today!
              </h2>
            </div>

            {/* Right Side - Description and Buttons */}
            <div className="space-y-6">
              <p className="text-white text-lg md:text-[16px] leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Experience exceptional dental care with our expert team. We provide comprehensive dental services to help you achieve your healthiest, most beautiful smile that lasts a lifetime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/appointment"
                  className="bg-white text-secondary px-8 py-4 rounded-lg text-center font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  Book Appointment
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-center font-semibold hover:bg-white hover:text-secondary transition-colors"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
