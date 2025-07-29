import Image from 'next/image';
import Header from '../../components/Header';

export default function InvisalignPage() {
  const benefits = [
    {
      title: "Fast Treatment Time",
      description: "Get your straight smile in as little as eighteen months with Invisalign's efficient treatment process."
    },
    {
      title: "Minimally Invasive Treatment",
      description: "The thin, flexible material of which Invisalign is made will not irritate the soft tissues of the mouth, as metal wires and braces can."
    },
    {
      title: "Unrestricted Diet",
      description: "To protect metal wires and braces, some diet modifications are necessary. With clear aligners, you can still bite into an apple or a crispy pizza crust."
    },
    {
      title: "Ability to Brush and Floss Easily",
      description: "With an orthodontic appliance that is removable, you will be able to clean your teeth much more easily than if you were wearing metal braces."
    },
    {
      title: "Few Lifestyle Changes",
      description: "Invisalign won't impact your day to day life and won't cause you to change much about your normal lifestyle."
    },
    {
      title: "Discreet Treatment",
      description: "If you consider your orthodontic treatment to be a private matter, or simply feel that metal braces don't fit with your self-image, a practically invisible form of orthodontic treatment might suit you."
    }
  ];

  const conditions = [
    "Crookedness",
    "Crowding", 
    "Gaps",
    "Overbite",
    "Underbite"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Invisalign & Orthodontics.jpeg"
            alt="Invisalign Treatment"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Invisalign Clear Aligners
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Invisalign in Stockton, CA - Discreetly straighten your teeth and get confidence in your smile
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Transform Your Smile Discreetly
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Have you ever struggled with oddly spaced or misaligned teeth but never wanted to get braces? That's why our dentists here at NuSmile Dental in Stockton, CA offer a more practical solution! Invisalign is quick and easy and keeps your smile looking natural all while straightening your teeth with minimal effort. You can discreetly straighten your teeth and get confidence in your smile.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                With Invisalign, you have the ability to eat and drink anything you'd like without restriction, as long as you remove the aligners while eating. Invisalign won't impact your day to day life and won't cause you to change much about your normal lifestyle. In fact, no one will ever notice your aligners and you don't have to disclose the information to anyone you don't want to.
              </p>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/invisalign1.jpeg"
                  alt="Invisalign Treatment"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Invisalign */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              What is Invisalign?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Invisalign is an effective solution for minor orthodontic problems that can fix your smile in as little as eighteen months.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How Invisalign Works
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The Invisalign system uses a series of clear plastic aligners, specifically customized to your mouth. Invisalign also offers solutions in minimal time and can fix your smile in as little as eighteen months.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Once our Stockton, CA dentist custom creates your aligners, you're good to go! You'll have check-ups every few weeks to switch out aligners and make sure that your smile is progressing normally. As long as you're following the instructions your dentist gives you when you first start, you should be progressing normally and well on your way to a straight smile!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Conditions Treated
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                      {condition}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
              Benefits of Invisalign
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Invisalign has many benefits and is an easy way to get the smile that you want.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
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