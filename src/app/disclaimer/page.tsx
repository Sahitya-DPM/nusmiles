import Header from '@/components/Header';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-[27px] md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            Disclaimer
          </h1>
          <p
            className="text-[16px] text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            Important information about the use of our website and services.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-gray max-w-none text-gray-700 space-y-6"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            <h2
              className="text-[22px] md:text-2xl font-bold text-gray-900"
              style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              DISCLAIMER OF Dr. Rujul G. Parikh
            </h2>
            <p className="text-[16px] leading-relaxed">
              Dr. Rujul G. Parikh expressly disclaims all warranties and responsibilities of any kind,
              whether express or implied, for the accuracy or reliability of the content of any
              information contained in this website, and for the suitability, results, effectiveness or
              fitness for any particular purpose of the services, procedures, advice or treatments
              referred to herein, such content and suitability, etc., being the sole responsibility of
              parties other than Dr. Rujul G. Parikh, and the reliance upon or use of same by you is at
              your own independent discretion and risk.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
