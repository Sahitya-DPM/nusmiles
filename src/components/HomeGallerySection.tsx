import Image from 'next/image';
import Link from 'next/link';

export default function HomeGallerySection() {
  const galleryImages = ['/1.png', '/2.png', '/3.png'];

  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[27px] md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Smile Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-[16px] md:text-[16px] text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Before and After
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={image}
                  alt={`Smile Transformation ${index + 1} - Before and After`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/smile-gallery" 
            className="bg-primary text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-primary-dark transition-colors shadow-lg uppercase inline-block" 
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
