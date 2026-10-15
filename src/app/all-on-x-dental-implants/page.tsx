
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'

export default function AllOnXDentalImplantsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const signs = [
    'Are missing most or all of your teeth in one or both arches',
    'Have teeth that are severely decayed, damaged, or loose due to gum disease',
    'Struggle with dentures that slip, click, or cause sore spots',
    'Avoid certain foods because chewing is painful or difficult',
    'Feel self-conscious about your smile and want a long-term solution',
    'Want to replace missing teeth without relying on adhesives or removable appliances',
  ]

  const benefits = [
    {
      title: 'Stable and Comfortable',
      description:
        'Enjoy a secure, fixed set of teeth that stays in place when you eat, speak, and smile.',
    },
    {
      title: 'Natural-Looking Smile',
      description:
        'Your new teeth are custom-designed to blend with your facial features for a natural appearance.',
    },
    {
      title: 'Improved Chewing Ability',
      description:
        'Implants support your bite so you can enjoy a wider variety of foods with confidence.',
    },
    {
      title: 'Supports Jawbone Health',
      description:
        'Dental implants act like tooth roots, helping stimulate the jawbone and support long-term oral health.',
    },
    {
      title: 'Efficient Treatment',
      description:
        'Replace an entire arch with a few implants, often in fewer visits than traditional tooth-by-tooth replacement.',
    },
    {
      title: 'Long-Lasting Solution',
      description:
        'With proper care, dental implants are designed to last for many years.',
    },
    {
      title: 'Easy to Maintain',
      description:
        'Brush, floss, and keep regular dental visits to care for your new smile.',
    },
  ]

  const treatmentSteps = [
    {
      title: 'Consultation and Evaluation',
      description:
        'Dr. Parikh reviews your dental and medical history, examines your teeth and gums, and discusses your goals. Digital imaging may be used to evaluate your jawbone and plan your treatment.',
    },
    {
      title: 'Personalized Treatment Plan',
      description:
        'Based on your exam, we create a customized treatment plan, including the number and placement of implants, and review the timeline and costs with you.',
    },
    {
      title: 'Preparation',
      description:
        'If any remaining teeth need to be removed, this is done to prepare the area for implants.',
    },
    {
      title: 'Implant Placement',
      description:
        'The implants are carefully placed in the jaw. Comfort options are discussed ahead of time so you feel at ease.',
    },
    {
      title: 'Temporary Teeth',
      description:
        'In many cases, a temporary set of teeth can be attached so you are not left without teeth while you heal.',
    },
    {
      title: 'Final Restoration',
      description:
        'As your gums and bone heal around the implants, your final, custom-crafted teeth are prepared and attached.',
    },
    {
      title: 'Follow-Up Care',
      description:
        'We schedule check-ups to monitor your healing and keep your implants and teeth in great condition.',
    },
  ]

  const reasons = [
    {
      number: '01',
      title: 'Experienced Dentist',
      description:
        'Dr. Rujul G. Parikh, DDS brings a patient-focused approach to restoring smiles with dental implants.',
      icon: (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </>
      ),
    },
    {
      number: '02',
      title: 'Personalized Care',
      description:
        'Every smile is unique, so your treatment is planned around your needs, comfort, and goals.',
      icon: (
        <>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
        </>
      ),
    },
    {
      number: '03',
      title: 'Clear Communication',
      description:
        'We take time to explain each step, answer your questions, and make sure you feel confident about your decision.',
      icon: (
        <>
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8Z" />
          <path d="M8 10h8M8 14h5" />
        </>
      ),
    },
    {
      number: '04',
      title: 'Comfortable Environment',
      description:
        'Our team works to create a welcoming, comfortable experience for every patient.',
      icon: (
        <>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      ),
    },
    {
      number: '05',
      title: 'Convenient Local Care',
      description:
        'From consultation to follow-up care, you can rely on one trusted dental team.',
      icon: (
        <>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      ),
    },
  ]

  const careTips = [
    'Brush twice a day and clean around the implants and gumline gently',
    'Use floss, interdental brushes, or a water flosser as recommended',
    'Visit Nu Smile Dental regularly for professional cleanings and exams',
    'Avoid habits like chewing ice or using your teeth to open packages',
    'Avoid smoking, which can affect healing and implant health',
  ]

  const faqs = [
    {
      question: 'What does “All-on-X” mean?',
      answer:
        'All-on-X refers to replacing a full arch of teeth with a fixed set of teeth supported by a small number of dental implants. The “X” stands for the number of implants used, which is customized to each patient.',
    },
    {
      question: 'Is the All-on-X procedure painful?',
      answer:
        'Comfort is a priority. Local anesthesia and other comfort options are used during treatment, and any soreness afterward is typically manageable with the care instructions Dr. Parikh provides.',
    },
    {
      question: 'How long does All-on-X treatment take?',
      answer:
        'Timelines vary depending on your oral health and treatment plan. Many patients receive temporary teeth soon after implant placement, followed by final teeth once healing is complete. Dr. Parikh will explain your timeline during your consultation.',
    },
    {
      question: 'Am I a candidate for All-on-X dental implants?',
      answer:
        'Many adults with missing or failing teeth are candidates, but good gum health and sufficient jawbone are important factors. A consultation and imaging will help determine if All-on-X is right for you.',
    },
    {
      question: 'How do I care for All-on-X implants?',
      answer:
        'Care is similar to natural teeth: daily brushing, cleaning around the implants, and regular dental visits.',
    },
    {
      question: 'How much do All-on-X dental implants cost in Stockton, CA?',
      answer:
        'Cost depends on your individual treatment plan, including the number of implants and the type of restoration. Our team will review pricing and options with you during your consultation.',
    },
    {
      question: 'Can I eat normally with All-on-X teeth?',
      answer:
        'Most patients find that All-on-X lets them return to a wide variety of foods. During healing, Dr. Parikh may recommend a softer diet for a short time.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Reference height and colours preserved */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/Dental Implants s.jpeg"
            alt="All-on-X Dental Implants"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-[27px] md:text-6xl font-bold text-white mb-6"
            style={{
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
            }}
          >
            All-on-X Dental Implants in Stockton, CA
          </h1>
        </div>
      </section>

      {/* Introduction Section - Updated content only */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2
                className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
                style={{
                  fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                }}
              >
                All-on-X Dental Implants in Stockton, CA
              </h2>

              <div className="w-24 h-1 bg-primary rounded-full mb-8 mx-auto lg:mx-0" />

              <div
                className="space-y-6 text-gray-700"
                style={{
                  fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                }}
              >
                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  A full arch of missing teeth can make everyday moments, like
                  eating a meal, laughing with family, or smiling for a photo,
                  feel uncomfortable. At Nu Smile Dental in Stockton, CA, Dr.
                  Rujul G. Parikh, DDS offers All-on-X dental implants, a
                  modern solution that replaces an entire arch of teeth with a
                  stable, natural-looking, fixed set of teeth supported by just
                  a few strategically placed implants.
                </p>

                <p className="text-[16px] md:text-[16px] leading-relaxed">
                  If you are tired of loose dentures or struggling with failing
                  teeth, All-on-X can help you rediscover the comfort of a
                  complete smile and restore your everyday confidence.
                </p>

                <p className="text-[16px] md:text-[16px] leading-relaxed font-bold">
                  Book an appointment with Nu Smile Dental today to find out if
                  All-on-X dental implants are right for you.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/appointment"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-[15px] md:text-base font-semibold hover:bg-primary-dark transition-colors duration-300"
                  style={{
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                  }}
                >
                  Book an Appointment
                </Link>
              </div>
            </div>

            <div className="relative flex items-stretch min-h-[300px] md:min-h-[450px]">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10" />
                <Image
                  src="/All-on-X1.jpeg"
                  alt="All-on-X dental implants in Stockton, CA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are All-on-X Dental Implants? */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-5 md:p-7 shadow-lg">
                <div className="w-12 h-12 bg-primary rounded-full mb-5 flex items-center justify-center text-white font-bold">
                  01
                </div>
                <h3
                  className="text-[22px] font-bold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                  }}
                >
                  Full-Arch Support
                </h3>
                <p
                  className="text-[16px] text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                  }}
                >
                  A complete arch of teeth is supported by strategically
                  placed dental implants.
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 md:p-7 shadow-lg">
                <div className="w-12 h-12 bg-primary rounded-full mb-5 flex items-center justify-center text-white font-bold">
                  02
                </div>
                <h3
                  className="text-[22px] font-bold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                  }}
                >
                  Fixed Teeth
                </h3>
                <p
                  className="text-[16px] text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                  }}
                >
                  The custom-made restoration is securely attached to the
                  implants.
                </p>
              </div>

              <div className="col-span-2 rounded-xl bg-primary p-6 md:p-8 text-white">
                <h3
                  className="text-[22px] font-bold mb-3"
                  style={{
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                  }}
                >
                  A Personalized Treatment Plan
                </h3>
                <p
                  className="text-[16px] leading-relaxed"
                  style={{
                    fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                  }}
                >
                  The number and placement of implants depend on your oral
                  health, jawbone, and individual treatment needs.
                </p>
              </div>
            </div>

            <div>
              <h2
                className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
                style={{
                  fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                }}
              >
                What Are All-on-X Dental Implants?
              </h2>

              <div className="w-24 h-1 bg-primary rounded-full mb-8" />

              <div
                className="space-y-6 text-gray-700"
                style={{
                  fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                }}
              >
                <p className="text-[16px] leading-relaxed">
                  All-on-X is a full-arch tooth replacement treatment. Instead
                  of placing one implant for every missing tooth, a small
                  number of dental implants (the “X” in All-on-X) are
                  positioned in the upper jaw, lower jaw, or both. A complete,
                  custom-made arch of teeth is then securely attached to those
                  implants.
                </p>

                <p className="text-[16px] leading-relaxed">
                  Because the implants are placed at specific angles and
                  locations in the jaw, All-on-X can often provide strong
                  support while reducing the need for extensive bone grafting.
                  The result is a fixed, durable set of teeth that looks,
                  feels, and functions much like natural teeth.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Signs You May Need All-on-X */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
              style={{
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
              }}
            >
              Signs You May Need All-on-X Dental Implants
            </h2>

            <p
              className="text-[16px] text-gray-600 max-w-3xl mx-auto"
              style={{
                fontFamily: 'Hind, Arial, Helvetica, sans-serif',
              }}
            >
              All-on-X may be a great option if you:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {signs.map((sign, index) => (
              <div
                key={sign}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  {index + 1}
                </div>

                <p
                  className="text-[16px] text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                  }}
                >
                  {sign}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-primary bg-gray-50 p-5 md:p-6 rounded-r-lg">
            <p
              className="text-[16px] text-gray-700 leading-relaxed"
              style={{
                fontFamily: 'Hind, Arial, Helvetica, sans-serif',
              }}
            >
              Every patient is different. Dr. Parikh will evaluate your oral
              health, jawbone, and goals during your consultation to determine
              whether All-on-X is the best fit.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-[27px] md:text-4xl font-bold text-white mb-6"
              style={{
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
              }}
            >
              Benefits of All-on-X Dental Implants
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-7 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                  <span
                    className="text-[16px] font-bold text-white"
                    style={{
                      fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3
                  className="text-[22px] font-bold text-gray-900 mb-4"
                  style={{
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                  }}
                >
                  {benefit.title}
                </h3>

                <p
                  className="text-[16px] text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-on-X vs. Traditional Dentures */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="bg-gray-50 rounded-2xl p-7 md:p-10 flex flex-col justify-center">
              <h2
                className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
                style={{
                  fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                }}
              >
                All-on-X Dental Implants vs. Traditional Dentures
              </h2>

              <div className="w-24 h-1 bg-primary rounded-full mb-8" />

              <p
                className="text-[16px] text-gray-700 leading-relaxed"
                style={{
                  fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                }}
              >
                Traditional dentures rest on the gums and can shift over time,
                especially as the jawbone changes. All-on-X teeth are anchored
                to dental implants, which means they stay put and feel more
                like your natural teeth. Many patients find that All-on-X
                offers better comfort, stronger chewing power, and greater
                confidence in daily life compared to removable dentures.
              </p>
            </div>

            <div className="relative min-h-[300px] md:min-h-[420px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/All-on-X2.jpeg"
                alt="All-on-X implant-supported teeth"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
              style={{
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
              }}
            >
              The All-on-X Treatment Process at Nu Smile Dental
            </h2>

            <p
              className="text-[16px] text-gray-600 max-w-3xl mx-auto"
              style={{
                fontFamily: 'Hind, Arial, Helvetica, sans-serif',
              }}
            >
              Our goal is to make your journey to a new smile clear,
              comfortable, and well-guided from start to finish.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentSteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-xl p-7 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span
                    className="text-[22px] font-bold text-white"
                    style={{
                      fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3
                  className="text-[22px] font-bold text-gray-900 mb-4 text-center"
                  style={{
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-gray-700 text-center leading-relaxed text-[16px]"
                  style={{
                    fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Why Choose Nu Smile Dental Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span
              className="inline-block text-[16px] font-semibold text-primary mb-4"
              style={{
                fontFamily: 'Hind, Arial, Helvetica, sans-serif',
              }}
            >
              YOUR SMILE, OUR PRIORITY
            </span>

            <h2
              className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
              style={{
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
              }}
            >
              Why Choose Nu Smile Dental for All-on-X in Stockton, CA?
            </h2>

            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />

            <p
              className="text-[16px] text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Hind, Arial, Helvetica, sans-serif',
              }}
            >
              From your first consultation to follow-up care, our team focuses
              on understanding your needs and helping you make informed
              decisions about restoring your smile.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Featured Panel */}
            <div className="lg:col-span-4 bg-primary rounded-2xl p-7 md:p-10 text-white flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-7">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="m9 12 2 2 4-4"
                    />
                  </svg>
                </div>

                <h3
                  className="text-[22px] md:text-2xl font-bold mb-4"
                  style={{
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                  }}
                >
                  Care Centered Around You
                </h3>

                <p
                  className="text-[16px] leading-relaxed text-white/90"
                  style={{
                    fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                  }}
                >
                  Every patient has different needs and goals. We take time to
                  understand your concerns, explain your options, and help you
                  feel comfortable throughout your dental care journey.
                </p>
              </div>

              <div className="mt-8 border-t border-white/25 pt-6">
                <p
                  className="text-[16px] font-semibold"
                  style={{
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                  }}
                >
                  Personalized attention at every step.
                </p>
              </div>
            </div>

            {/* Benefit Cards */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              {reasons.slice(0, 4).map((reason) => (
                <article
                  key={reason.number}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 text-primary flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {reason.icon}
                      </svg>
                    </div>

                    <span
                      className="text-2xl font-bold text-gray-200"
                      style={{
                        fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                      }}
                    >
                      {reason.number}
                    </span>
                  </div>

                  <h3
                    className="text-[22px] font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors"
                    style={{
                      fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                    }}
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="text-[16px] text-gray-600 leading-relaxed"
                    style={{
                      fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                    }}
                  >
                    {reason.description}
                  </p>
                </article>
              ))}

              {/* Full-width fifth card */}
              <article className="group sm:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 text-primary flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {reasons[4].icon}
                    </svg>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3
                        className="text-[22px] font-bold text-gray-900 group-hover:text-primary transition-colors"
                        style={{
                          fontFamily:
                            'Montserrat, Arial, Helvetica, sans-serif',
                        }}
                      >
                        {reasons[4].title}
                      </h3>

                      <span
                        className="text-2xl font-bold text-gray-200"
                        style={{
                          fontFamily:
                            'Montserrat, Arial, Helvetica, sans-serif',
                        }}
                      >
                        {reasons[4].number}
                      </span>
                    </div>

                    <p
                      className="text-[16px] text-gray-600 leading-relaxed"
                      style={{
                        fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                      }}
                    >
                      {reasons[4].description}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="relative flex items-stretch">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full min-h-[400px] md:min-h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10" />
                <Image
                  src="/Rujul.jpeg"
                  alt="Dr. Rujul G. Parikh, DDS"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2
                className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
                style={{
                  fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                }}
              >
                Meet Dr. Rujul G. Parikh, DDS
              </h2>

              <div className="w-24 h-1 bg-primary rounded-full mb-8 mx-auto lg:mx-0" />

              <div
                className="space-y-6 text-gray-700"
                style={{
                  fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                }}
              >
                <p className="text-[16px] leading-relaxed">
                  Dr. Rujul G. Parikh, DDS is dedicated to helping patients in
                  Stockton, CA achieve healthy, confident smiles. With a
                  gentle approach and a focus on restorative and implant
                  dentistry, Dr. Parikh takes the time to understand each
                  patient’s needs and recommend solutions that fit their
                  lifestyle. Whether you are replacing a full arch of teeth or
                  exploring your options for the first time, you can count on
                  honest guidance and attentive care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caring for Your Implants */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
                style={{
                  fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                }}
              >
                Caring for Your All-on-X Dental Implants
              </h2>

              <div className="w-24 h-1 bg-primary rounded-full mb-8" />

              <p
                className="text-[16px] text-gray-700 leading-relaxed"
                style={{
                  fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                }}
              >
                With good habits, your All-on-X smile can serve you well for
                years to come:
              </p>
            </div>

            <div className="space-y-4">
              {careTips.map((tip) => (
                <div
                  key={tip}
                  className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <p
                    className="text-[16px] text-gray-700 leading-relaxed"
                    style={{
                      fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                    }}
                  >
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
              style={{
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
              }}
            >
              Frequently Asked Questions About All-on-X Dental Implants
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                  >
                    <span
                      className="text-[16px] md:text-[18px] font-bold text-gray-900"
                      style={{
                        fontFamily:
                          'Montserrat, Arial, Helvetica, sans-serif',
                      }}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xl transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 md:px-6">
                      <div className="h-px bg-gray-200 mb-5" />
                      <p
                        className="text-[16px] text-gray-700 leading-relaxed"
                        style={{
                          fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Background changed to gray-50 */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
            style={{
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
            }}
          >
            Rediscover Your Smile with All-on-X in Stockton, CA
          </h2>

          <p
            className="text-[16px] md:text-[16px] text-gray-700 mb-8 max-w-3xl mx-auto"
            style={{
              fontFamily: 'Hind, Arial, Helvetica, sans-serif',
            }}
          >
            You do not have to live with missing teeth or uncomfortable
            dentures. All-on-X dental implants can give you a stable,
            natural-looking smile and the confidence to enjoy everyday life.
            Schedule a consultation with Dr. Rujul G. Parikh, DDS at Nu Smile
            Dental in Stockton, CA to learn more about your options.
          </p>

          <p
            className="text-[16px] md:text-[16px] text-gray-700 mb-8 max-w-3xl mx-auto"
            style={{
              fontFamily: 'Hind, Arial, Helvetica, sans-serif',
            }}
          >
            Book an appointment with Nu Smile Dental today and take the first
            step toward a complete smile.
          </p>

          <Link
            href="/appointment"
            className="bg-primary text-white px-8 py-4 rounded-lg text-[15px] md:text-base font-semibold hover:bg-primary-dark transition-colors duration-300 inline-block"
            style={{
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
            }}
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
