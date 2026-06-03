export default function TestimonialVideoSection() {
  const testimonialVideos = [
    {
      id: 1,
      title: 'Patient Success Story 1',
      videoUrl: '/1.mp4'
    },
    {
      id: 2,
      title: 'Patient Success Story 2',
      videoUrl: '/3.mp4'
    },
    {
      id: 2,
      title: 'Patient Success Story 2',
      videoUrl: '/4.mp4'
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[27px] md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Patient Video Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-[16px] md:text-[16px] text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Hear directly from our patients about their experience at Nu Smile Dental
          </p>
        </div>

        {/* Two Videos Side by Side */}
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
  );
}
