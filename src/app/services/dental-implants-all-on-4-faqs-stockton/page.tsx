'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';

export default function DentalImplantsAllOn4FaqsPage() {

  // Set meta tags dynamically
  useEffect(() => {
    document.title = 'Dental Implants & All-on-4® FAQs | Nu Smile Dental Stockton, CA';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore common questions about dental implants and All-on-4® implant-supported dentures at Nu Smile Dental in Stockton, CA. Learn about procedures, benefits, costs, and care.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore common questions about dental implants and All-on-4® implant-supported dentures at Nu Smile Dental in Stockton, CA. Learn about procedures, benefits, costs, and care.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  const faqSections = [
    {
      title: 'General Information FAQs',
      faqs: [
        {
          question: 'What are dental implants?',
          answer: 'Dental implants are small titanium posts that are placed into the jawbone to replace the roots of missing teeth. They provide a strong, stable foundation for crowns, bridges, or implant-supported dentures.'
        },
        {
          question: 'Who is a good candidate for dental implants?',
          answer: 'Most adults with missing teeth are potential candidates for dental implants. Eligibility is determined through an oral exam, X-rays, and a review of your overall health and jawbone condition.'
        },
        {
          question: 'What is the difference between dental implants and dentures?',
          answer: 'Dental implants are fixed in the jawbone and function like natural teeth, while traditional dentures rest on the gums and can move during eating or speaking. Implant-supported options offer significantly more stability and comfort.'
        }
      ]
    },
    {
      title: 'Features / Services FAQs',
      faqs: [
        {
          question: 'What types of dental implant solutions do you offer?',
          answer: 'Nu Smile Dental offers single-tooth implants, multiple-tooth replacements, implant-supported dentures, and All-on-4® full-arch implant solutions tailored to individual needs.'
        },
        {
          question: 'What is All-on-4® implant treatment?',
          answer: 'All-on-4® uses a minimum of four strategically placed implants to support a full arch of teeth. This approach allows patients to restore an entire upper or lower arch with fewer implants.'
        },
        {
          question: 'Are same-day teeth available with implants?',
          answer: 'In many cases, temporary teeth can be placed the same day as implant surgery, allowing patients to leave the office with a functional smile while healing takes place.'
        }
      ]
    },
    {
      title: 'Process / How It Works FAQs',
      faqs: [
        {
          question: 'What is the first step in getting dental implants?',
          answer: 'The process begins with a consultation that includes a comprehensive exam, digital imaging, and a discussion of treatment options and expectations.'
        },
        {
          question: 'How is the dental implant placed?',
          answer: 'The implant is inserted into the jawbone during a minor surgical procedure performed in-office. Over time, the implant fuses with the bone to create a secure foundation.'
        },
        {
          question: 'How long does the full implant process take?',
          answer: 'Treatment time varies by case. Some patients receive temporary restorations immediately, while final restorations are placed after the healing period is complete.'
        }
      ]
    },
    {
      title: 'Benefits / Why Choose Us FAQs',
      faqs: [
        {
          question: 'Why choose Nu Smile Dental for dental implants?',
          answer: 'Nu Smile Dental combines advanced technology, extensive implant experience, and personalized treatment planning to deliver reliable, long-lasting results.'
        },
        {
          question: 'What are the benefits of dental implants over other options?',
          answer: 'Dental implants look, feel, and function like natural teeth. They help preserve jawbone health, improve chewing ability, and enhance long-term comfort.'
        },
        {
          question: 'How experienced is Dr. Parikh with dental implants?',
          answer: 'Dr. Rujul Parikh has over two decades of clinical experience and advanced training in dental implant procedures, having successfully treated thousands of patients.'
        }
      ]
    },
    {
      title: 'Pricing / Plans / Cost FAQs',
      faqs: [
        {
          question: 'Are dental implants more expensive than other tooth replacement options?',
          answer: 'While implants may have a higher initial cost, they often last much longer than bridges or dentures, making them a cost-effective long-term solution.'
        },
        {
          question: 'Do you offer financing options for implant treatment?',
          answer: 'Yes, flexible financing options are available to help make dental implant treatment more accessible and manageable for patients.'
        },
        {
          question: 'Does insurance cover dental implants?',
          answer: 'Coverage varies by plan. Our office team is happy to verify your benefits and assist with insurance claims whenever applicable.'
        }
      ]
    },
    {
      title: 'Support / Technical / Policy FAQs',
      faqs: [
        {
          question: 'Is dental implant surgery painful?',
          answer: 'Most patients report minimal discomfort during and after the procedure. Post-operative soreness is typically manageable with over-the-counter medication.'
        },
        {
          question: 'How do I care for dental implants after treatment?',
          answer: 'Dental implants require the same care as natural teeth, including daily brushing, flossing, and regular professional cleanings.'
        },
        {
          question: 'What is the success rate of dental implants?',
          answer: 'Dental implants have a success rate exceeding 95% when properly placed and maintained with good oral hygiene and routine dental visits.'
        }
      ]
    },
    {
      title: 'Final / Miscellaneous FAQs',
      faqs: [
        {
          question: 'Can my body reject a dental implant?',
          answer: 'Dental implants are made of biocompatible titanium and cannot be rejected. Implant failure is rare and usually related to infection or improper healing.'
        },
        {
          question: 'How many teeth can be replaced with implants?',
          answer: 'Implants can replace a single tooth, multiple teeth, or an entire arch. In some cases, as few as two or four implants can support a full set of teeth.'
        },
        {
          question: 'Where is Nu Smile Dental located?',
          answer: 'Nu Smile Dental proudly serves patients in Stockton, CA, and surrounding communities with comprehensive implant and restorative dental care.'
        }
      ]
    }
  ];

  // Calculate global indices for each FAQ
  let globalFaqIndex = 0;
  const faqSectionsWithIndices = faqSections.map(section => {
    const sectionWithIndices = {
      ...section,
      faqs: section.faqs.map(faq => {
        const index = globalFaqIndex++;
        return { ...faq, globalIndex: index };
      })
    };
    return sectionWithIndices;
  });

  // Initialize with first FAQ of each section open
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(() => {
    const firstFaqIndices = faqSectionsWithIndices
      .map(section => section.faqs[0]?.globalIndex)
      .filter((index): index is number => index !== undefined);
    return new Set(firstFaqIndices);
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Dental Implants & All-on-4® FAQs – Nu Smile Dental, Stockton, CA
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-6 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-[16px] md:text-[16px] text-gray-700 leading-relaxed" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              This FAQ page is designed to help patients in Stockton and surrounding areas better understand dental implants and All-on-4® implant-supported dentures offered at Nu Smile Dental. Whether you are missing one tooth or need full-arch restoration, these answers address common questions to help you make an informed, confident decision about your dental care.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqSectionsWithIndices.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                {/* Section Heading */}
                <h2 className={`text-[18px] md:text-2xl font-bold text-gray-900 mb-4 text-center md:text-left ${sectionIndex === 0 ? 'pt-0' : 'pt-4 border-t border-gray-200'}`} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  {section.title}
                </h2>

                {/* Section FAQs */}
                {section.faqs.map((faq) => (
                  <div key={faq.globalIndex} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                      onClick={() => {
                        const newOpenFaqs = new Set(openFaqs);
                        if (newOpenFaqs.has(faq.globalIndex)) {
                          newOpenFaqs.delete(faq.globalIndex);
                        } else {
                          newOpenFaqs.add(faq.globalIndex);
                        }
                        setOpenFaqs(newOpenFaqs);
                      }}
                    >
                      <h3 className="text-[16px] md:text-[16px] font-semibold text-gray-900" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFaqs.has(faq.globalIndex) ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaqs.has(faq.globalIndex) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 py-4 bg-white">
                        <p className="text-gray-700 leading-relaxed text-[16px]" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[27px] md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Restore Your Smile?
          </h2>
          <p className="text-[16px] md:text-[16px] text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            If you have additional questions or would like to explore whether dental implants or All-on-4® treatment is right for you, the team at Nu Smile Dental is here to help. Contact our Stockton office today to schedule your consultation and take the next confident step toward a healthier, more comfortable smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Book Appointment
            </a>
            <a href="tel:+12099551800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

