import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function TestimonialsPage() {
  const testimonialVideos = [
    {
      id: 1,
      title: 'Patient Success Story 1',
      videoUrl: '/video 1.MOV'
    },
    {
      id: 2,
      title: 'Patient Success Story 2',
      videoUrl: '/video 2.MOV'
    }
  ];

  const writtenTestimonials = [
    {
      id: 1,
      name: "Verified Patient",
      treatment: "Dental Implants",
      rating: 5,
      text: "Dr. Parikh and his team are amazing! After years of dental anxiety, they made me feel completely at ease. My dental implants look and feel natural. I can't thank them enough!",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Verified Patient",
      treatment: "All-on-4® Implant Dentures",
      rating: 5,
      text: "Life-changing experience! The All-on-4 treatment has given me my confidence back. The entire team was professional, caring, and thorough. Highly recommend Nu Smile Dental!",
      date: "3 months ago"
    },
    {
      id: 3,
      name: "Verified Patient",
      treatment: "Veneers",
      rating: 5,
      text: "I'm so happy with my new smile! Dr. Arora did an incredible job with my veneers. The results exceeded my expectations. Everyone here is friendly and professional.",
      date: "1 month ago"
    },
    {
      id: 4,
      name: "Verified Patient",
      treatment: "General Dentistry",
      rating: 5,
      text: "Best dental office in Stockton! The staff is wonderful, the office is clean and modern, and they really take time to explain everything. I actually look forward to my appointments now!",
      date: "2 weeks ago"
    },
    {
      id: 5,
      name: "Verified Patient",
      treatment: "Invisalign",
      rating: 5,
      text: "Dr. Parikh made my Invisalign journey smooth and easy. The results are perfect and the whole process was comfortable. Thank you Nu Smile Dental for my beautiful straight smile!",
      date: "4 months ago"
    },
    {
      id: 6,
      name: "Verified Patient",
      treatment: "Cosmetic Dentistry",
      rating: 5,
      text: "Outstanding service from start to finish! The team at Nu Smile Dental transformed my smile. Dr. Arora is talented and caring. I couldn't be happier with the results!",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/office2.jpg.webp"
            alt="Patient Testimonials"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Patient Testimonials
          </h1>
          <p className="text-[16px] md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Hear what our patients have to say about their experience at Nu Smile Dental
          </p>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[27px] md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Video Testimonials
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-[16px] md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Watch our patients share their smile transformation stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonialVideos.map((video) => (
              <div key={video.id} className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-auto"
                  controls
                  controlsList="nodownload"
                  style={{ maxHeight: '400px' }}
                >
                  <source src={video.videoUrl} type="video/quicktime" />
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[27px] md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              What Our Patients Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-[16px] md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Real reviews from real patients who love their new smiles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {writtenTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[16px] text-gray-700 mb-6 italic leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-[16px] font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary font-medium" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    {testimonial.treatment}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[27px] md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Why Patients Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[32px] md:text-5xl font-bold text-primary mb-2">25+</div>
              <div className="text-[16px] text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] md:text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-[16px] text-gray-600 font-medium">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] md:text-5xl font-bold text-primary mb-2">5★</div>
              <div className="text-[16px] text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-[16px] text-gray-600 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[27px] md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Start Your Smile Journey?
          </h2>
          <p className="text-[16px] md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Join our family of satisfied patients and experience the Nu Smile Dental difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Book Appointment
            </Link>
            <a href="tel:(209) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

