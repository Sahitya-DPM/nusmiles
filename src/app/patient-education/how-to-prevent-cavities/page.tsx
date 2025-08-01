'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function HowToPreventCavitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            How to Prevent Cavities
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Effective strategies for maintaining cavity-free teeth
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link href="/patient-education" className="text-gray-500 hover:text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Patient Education
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link href="/patient-education/oral-hygiene" className="text-gray-500 hover:text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Oral Hygiene
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                How to Prevent Cavities
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Understanding Cavity Prevention
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Cavities, also known as dental caries, are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. They are caused by a combination of factors, including bacteria in your mouth, frequent snacking, sipping sugary drinks, and not cleaning your teeth well.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The good news is that cavities are largely preventable. With proper oral hygiene, a healthy diet, and regular dental care, you can significantly reduce your risk of developing cavities.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Daily Oral Hygiene Practices
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Brush Twice Daily
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Brush your teeth at least twice a day with fluoride toothpaste. Use a soft-bristled toothbrush and brush for at least two minutes each time. Pay special attention to the gumline and hard-to-reach areas.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Floss Daily
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Flossing removes food particles and plaque from between your teeth where your toothbrush can't reach. Make flossing a daily habit, preferably before bedtime.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Use Fluoride Products
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Fluoride helps strengthen tooth enamel and makes it more resistant to acid attacks. Use fluoride toothpaste and consider fluoride mouthwash if recommended by your dentist.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dietary Habits for Cavity Prevention
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Limit Sugary Foods and Drinks
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Sugar feeds the bacteria in your mouth that produce acids that attack tooth enamel. Limit your consumption of sugary snacks, candies, sodas, and fruit juices. When you do consume them, try to do so with meals rather than as snacks.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Choose Tooth-Friendly Foods
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Dairy products like cheese, milk, and yogurt (they contain calcium and phosphates)</li>
                <li className="text-gray-700">Crunchy fruits and vegetables (they help clean teeth naturally)</li>
                <li className="text-gray-700">Nuts and seeds (they provide minerals that strengthen teeth)</li>
                <li className="text-gray-700">Green and black teas (they contain compounds that suppress harmful bacteria)</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Stay Hydrated
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Drink plenty of water throughout the day. Water helps wash away food particles and bacteria, and it's the best beverage for your teeth. Fluoridated water provides additional cavity protection.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Additional Prevention Strategies
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Regular Dental Check-ups
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Visit your dentist regularly for check-ups and professional cleanings. Your dentist can detect early signs of cavities and provide preventive treatments like sealants or fluoride applications.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Sealants
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Sealants are thin, protective coatings applied to the chewing surfaces of back teeth. They create a barrier that prevents food and bacteria from getting stuck in the grooves of your teeth.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Consider Xylitol
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Xylitol is a natural sweetener that can help prevent cavities. It reduces the levels of harmful bacteria in your mouth and can be found in sugar-free gum and some dental products.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Special Considerations
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                For Children
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Children are particularly susceptible to cavities. Start oral hygiene habits early, supervise brushing until age 7-8, and ensure they use fluoride toothpaste. Consider sealants for their permanent molars.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                For Adults
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Adults may be at risk for cavities around existing fillings or at the root surfaces if gums have receded. Pay extra attention to these areas and consider using fluoride mouthwash.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dry Mouth
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Saliva helps wash away food particles and neutralize acids. If you have dry mouth (due to medications, medical conditions, or other factors), talk to your dentist about special preventive measures.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Warning Signs of Cavities
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Early detection is key to preventing serious dental problems. Watch for these signs:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Tooth sensitivity to hot, cold, or sweet foods</li>
                <li className="text-gray-700">Visible holes or pits in your teeth</li>
                <li className="text-gray-700">Brown, black, or white staining on tooth surfaces</li>
                <li className="text-gray-700">Pain when biting down</li>
                <li className="text-gray-700">Spontaneous toothache</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700 mt-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                If you notice any of these signs, schedule a dental appointment promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/patient-education/how-to-brush-and-floss" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How to Brush and Floss
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn proper brushing and flossing techniques for optimal oral hygiene.
              </p>
            </Link>
            <Link href="/patient-education/toothpaste" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Toothpaste
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Choose the right toothpaste to help prevent cavities and maintain oral health.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Prevent Cavities?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our dental team can help you develop a personalized cavity prevention plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Consultation
            </Link>
            <a href="tel:(209) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 