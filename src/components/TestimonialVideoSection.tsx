"use client";

export default function TestimonialVideoSection() {
  const testimonialVideos = [
    {
      id: 1,
      title: "Patient Success Story 1",
      videoUrl: "/video1.mp4",
    },
    {
      id: 2,
      title: "Patient Success Story 2",
      videoUrl: "/video2.mp4",
    },
    {
      id: 3,
      title: "Patient Success Story 3",
      videoUrl: "/video3.mp4",
    },
    {
      id: 4,
      title: "Patient Success Story 4",
      videoUrl: "/video4.mp4",
    },
    {
      id: 5,
      title: "Patient Success Story 5",
      videoUrl: "/video5.mp4",
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[27px] md:text-5xl font-bold text-gray-900 mb-4"
            style={{
              fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
            }}
          >
            Patient Video Testimonials
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>

          <p
            className="text-[16px] text-gray-600 max-w-3xl mx-auto"
            style={{
              fontFamily: "Hind, Arial, Helvetica, sans-serif",
            }}
          >
            Hear directly from our patients about their experience at Nu Smile
            Dental
          </p>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialVideos.map((video) => (
            <div
              key={video.id}
              className="bg-black rounded-2xl overflow-hidden shadow-xl"
            >
              <video
                src={video.videoUrl}
                controls
                preload="metadata"
                playsInline
                className="w-full h-[300px] object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}