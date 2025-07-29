import Image from 'next/image';

export default function GallerySection() {
  const galleryItems = [
    {
      before: "/tevin-b-before.jpg.webp",
      after: "/tevin-b-after.jpg.webp"
    },
    {
      before: "/josue-ruiz-before.jpg.webp",
      after: "/josue-ruiz-after.jpg.webp"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            See Why Our Patients Love It Here
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
            Before & After Gallery
          </h3>
          <p className="text-lg text-accent">
            Real transformations from our satisfied patients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2">
                <div className="relative h-80">
                  <Image
                    src={item.before}
                    alt="Before treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative h-80">
                  <Image
                    src={item.after}
                    alt="After treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">
            View more smiles
          </button>
        </div>
      </div>
    </section>
  );
} 