'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function InterdentalCleaningDevicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Interdental Cleaning Devices
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced tools for cleaning between your teeth
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
                Interdental Cleaning Devices
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
                Beyond Traditional Flossing
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                While traditional dental floss is effective for many people, interdental cleaning devices offer alternative methods for cleaning between teeth. These devices can be particularly helpful for people who find traditional flossing difficult or have specific dental conditions.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Interdental cleaning devices help remove plaque and food particles from between teeth, reducing the risk of cavities and gum disease. They can be used as an alternative to floss or as a supplement to your regular oral hygiene routine.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Types of Interdental Cleaning Devices
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Interdental Brushes
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Interdental brushes are small, cone-shaped brushes designed to clean between teeth. They come in various sizes to fit different spaces between teeth. These brushes are particularly effective for people with larger gaps between teeth or those with braces.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Available in different sizes (0.4mm to 1.5mm diameter)</li>
                <li className="text-gray-700">Can be used with or without toothpaste</li>
                <li className="text-gray-700">Effective for cleaning around dental work</li>
                <li className="text-gray-700">Reusable and long-lasting</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Floss Picks
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Floss picks are small plastic tools with a piece of floss stretched between two prongs. They provide an easy way to floss without having to wrap floss around your fingers, making them convenient for on-the-go use.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Easy to handle and use</li>
                <li className="text-gray-700">Convenient for travel</li>
                <li className="text-gray-700">Good for people with limited dexterity</li>
                <li className="text-gray-700">Disposable after use</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Water Flossers
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Water flossers use a stream of pressurized water to remove plaque and food particles from between teeth and along the gumline. They are particularly effective for people with braces, implants, or other dental work.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Gentle on gums</li>
                <li className="text-gray-700">Effective for cleaning around dental work</li>
                <li className="text-gray-700">Can reach areas that floss cannot</li>
                <li className="text-gray-700">Adjustable pressure settings</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Tape
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Dental tape is wider and flatter than traditional floss, making it gentler on gums and easier to use for people with sensitive gums or larger spaces between teeth.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How to Choose the Right Device
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Consider Your Dental Condition
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Large gaps between teeth: Interdental brushes</li>
                <li className="text-gray-700">Braces or dental work: Water flosser or interdental brushes</li>
                <li className="text-gray-700">Sensitive gums: Dental tape or water flosser</li>
                <li className="text-gray-700">Limited dexterity: Floss picks or water flosser</li>
                <li className="text-gray-700">Tight spaces: Traditional floss or dental tape</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Consult Your Dentist
              </h4>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Your dentist can recommend the best interdental cleaning device for your specific needs. They can also demonstrate proper technique and help you choose the right size or type of device.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Proper Usage Techniques
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Interdental Brushes
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Choose the correct size for your spaces</li>
                <li className="text-gray-700">Insert gently between teeth</li>
                <li className="text-gray-700">Move back and forth several times</li>
                <li className="text-gray-700">Rinse the brush after each space</li>
                <li className="text-gray-700">Replace when bristles become worn</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Water Flossers
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Start with low pressure and increase as needed</li>
                <li className="text-gray-700">Hold the tip at a 90-degree angle to your gums</li>
                <li className="text-gray-700">Move slowly along the gumline</li>
                <li className="text-gray-700">Pause briefly between teeth</li>
                <li className="text-gray-700">Use for 1-2 minutes total</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Floss Picks
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Use a fresh pick for each space</li>
                <li className="text-gray-700">Gently guide between teeth</li>
                <li className="text-gray-700">Curve around each tooth</li>
                <li className="text-gray-700">Move up and down to clean surfaces</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Benefits of Interdental Cleaning Devices
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Remove plaque from areas brushing cannot reach</li>
                <li className="text-gray-700">Reduce risk of cavities and gum disease</li>
                <li className="text-gray-700">Improve breath freshness</li>
                <li className="text-gray-700">Help maintain dental work</li>
                <li className="text-gray-700">Provide alternatives for people who cannot use traditional floss</li>
                <li className="text-gray-700">Can be more comfortable for sensitive gums</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When to See Your Dentist
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Consult your dentist if you experience:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Bleeding gums that persist after using interdental devices</li>
                <li className="text-gray-700">Difficulty finding the right size or type of device</li>
                <li className="text-gray-700">Pain or discomfort when using these devices</li>
                <li className="text-gray-700">Questions about proper technique</li>
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
                Learn the fundamentals of proper brushing and flossing techniques.
              </p>
            </Link>
            <Link href="/patient-education/mouthwash" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Mouthwash
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Discover how mouthwash can complement your interdental cleaning routine.
              </p>
            </Link>
            <Link href="/patient-education/how-to-prevent-cavities" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How to Prevent Cavities
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn how interdental cleaning helps prevent cavities and gum disease.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Need Help Choosing the Right Device?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our dental team can recommend the best interdental cleaning device for your needs.
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