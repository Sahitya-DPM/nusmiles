import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary opacity-5 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                We want all our patients to be informed decision makers and fully understand any health issues you face. That's why we've developed a website loaded with valuable information about dental and dental problems and treatments. We encourage you to visit this site whenever you have concern about your teeth.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Our website also provides you with background about our, staff, office hours, insurance policies, appointment procedures, maps, directions to our office in and other useful information. We know how hectic life can be and are committed to making our practice convenient and accessible. And we want you to feel confident that when you choose, you're working with doctors and other professionals who are qualified, experienced and caring.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
              <Image
                src="/AdobeStock_826746503.jpeg"
                alt="Dental Care"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-gray-600 font-medium">Age Groups</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 