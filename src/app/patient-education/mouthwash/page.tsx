'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function MouthwashPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Mouthwash
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Enhancing your oral hygiene routine with mouthwash
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
                Mouthwash
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
                Understanding Mouthwash
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Mouthwash, also known as oral rinse, is a liquid product used to rinse the mouth, teeth, and gums. While mouthwash should not replace brushing and flossing, it can be a valuable addition to your oral hygiene routine.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Mouthwash can help freshen breath, reduce plaque, prevent cavities, and fight gum disease. However, it's important to choose the right type of mouthwash for your specific needs and use it properly.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Types of Mouthwash
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cosmetic Mouthwash
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Cosmetic mouthwashes primarily freshen breath and provide a pleasant taste. They may temporarily mask bad breath but don't address the underlying causes or provide therapeutic benefits.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Temporarily freshens breath</li>
                <li className="text-gray-700">Provides pleasant taste</li>
                <li className="text-gray-700">Does not kill bacteria</li>
                <li className="text-gray-700">No therapeutic benefits</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Therapeutic Mouthwash
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Therapeutic mouthwashes contain active ingredients that help control or reduce conditions like bad breath, gingivitis, plaque, and tooth decay. These are regulated by the FDA and require a prescription for some types.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Kills bacteria that cause bad breath and gum disease</li>
                <li className="text-gray-700">Reduces plaque and gingivitis</li>
                <li className="text-gray-700">Contains active ingredients like fluoride, chlorhexidine, or essential oils</li>
                <li className="text-gray-700">Provides long-term benefits</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Fluoride Mouthwash
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Fluoride mouthwashes help strengthen tooth enamel and prevent cavities. They are particularly beneficial for people at high risk for tooth decay.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Antiseptic Mouthwash
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Antiseptic mouthwashes contain ingredients like chlorhexidine that kill bacteria and help control plaque and gingivitis. These are often prescribed by dentists for specific conditions.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Benefits of Mouthwash
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Freshens breath and provides a clean feeling</li>
                <li className="text-gray-700">Reduces bacteria that cause bad breath and gum disease</li>
                <li className="text-gray-700">Helps prevent cavities (fluoride mouthwash)</li>
                <li className="text-gray-700">Reduces plaque and gingivitis</li>
                <li className="text-gray-700">Reaches areas that brushing and flossing may miss</li>
                <li className="text-gray-700">Can help with dry mouth symptoms</li>
                <li className="text-gray-700">Provides additional protection against oral health problems</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How to Use Mouthwash Properly
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Step-by-Step Instructions
              </h4>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Brush and floss your teeth first</li>
                <li className="text-gray-700">Pour the recommended amount of mouthwash (usually 20ml or 4 teaspoons)</li>
                <li className="text-gray-700">Rinse your mouth thoroughly for 30-60 seconds</li>
                <li className="text-gray-700">Spit out the mouthwash (do not swallow)</li>
                <li className="text-gray-700">Avoid eating or drinking for 30 minutes after use</li>
              </ol>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Important Tips
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Always read and follow the product instructions</li>
                <li className="text-gray-700">Use mouthwash as a supplement, not a replacement for brushing and flossing</li>
                <li className="text-gray-700">Don't use mouthwash immediately after brushing with fluoride toothpaste</li>
                <li className="text-gray-700">Keep mouthwash out of reach of children</li>
                <li className="text-gray-700">Store mouthwash in a cool, dry place</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Choosing the Right Mouthwash
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Consider Your Needs
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Bad breath: Look for antiseptic mouthwash</li>
                <li className="text-gray-700">Cavity prevention: Choose fluoride mouthwash</li>
                <li className="text-gray-700">Gum disease: Consider antiseptic or therapeutic mouthwash</li>
                <li className="text-gray-700">Sensitive teeth: Look for alcohol-free options</li>
                <li className="text-gray-700">Dry mouth: Choose alcohol-free, moisturizing mouthwash</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Consult Your Dentist
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Your dentist can recommend the best mouthwash for your specific oral health needs. They may also prescribe a specific mouthwash if you have certain conditions like gum disease or are at high risk for cavities.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Potential Side Effects
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Temporary burning or stinging sensation</li>
                <li className="text-gray-700">Dry mouth (with alcohol-based mouthwashes)</li>
                <li className="text-gray-700">Temporary staining of teeth (with some antiseptic mouthwashes)</li>
                <li className="text-gray-700">Altered taste sensation</li>
                <li className="text-gray-700">Allergic reactions (rare)</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                If you experience persistent side effects, discontinue use and consult your dentist.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When to Use Mouthwash
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Mouthwash can be used:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">After brushing and flossing for additional protection</li>
                <li className="text-gray-700">Between meals to freshen breath</li>
                <li className="text-gray-700">When you can't brush your teeth</li>
                <li className="text-gray-700">As directed by your dentist for specific conditions</li>
              </ul>
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
                Learn how mouthwash complements your brushing and flossing routine.
              </p>
            </Link>
            <Link href="/patient-education/toothpaste" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Toothpaste
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Understand how toothpaste and mouthwash work together for optimal oral health.
              </p>
            </Link>
            <Link href="/patient-education/bad-breath" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Bad Breath
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn how mouthwash can help combat bad breath and its causes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Need Help Choosing the Right Mouthwash?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our dental team can recommend the best mouthwash for your specific oral health needs.
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