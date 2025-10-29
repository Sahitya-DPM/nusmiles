import Image from 'next/image';
import Link from 'next/link';

export default function HomeGallerySection() {
  const beforeAfterCases = [
    {
      id: 1,
      title: 'Cosmetic Dentistry',
      category: 'Smile Transformation',
      collageImage: '/Copy of Copy of JOSUE RUIZ 1-COLLAGE.jpg',
    },
    {
      id: 2,
      title: 'Dental Implants',
      category: 'Full Restoration',
      collageImage: '/Copy of Copy of M.C BEFORE-COLLAGE.jpg',
    },
    {
      id: 3,
      title: 'Invisalign',
      category: 'Teeth Straightening',
      collageImage: '/pristine (1)-COLLAGE.jpg',
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[27px] md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Smile Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-[16px] md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            See the amazing smile transformations we've created for our patients
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {beforeAfterCases.map((case_) => (
            <div key={case_.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 pb-4">
                <div className="mb-3">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {case_.category}
                  </span>
                </div>
                <h3 className="text-[22px] md:text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  {case_.title}
                </h3>
              </div>
              
              <div className="px-4 pb-4">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={case_.collageImage}
                    alt={`${case_.title} - Before and After`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/smile-gallery" 
            className="bg-primary text-white px-8 py-4 rounded-lg text-[15px] md:text-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg uppercase inline-block" 
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

