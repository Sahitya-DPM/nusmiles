'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function ThumbSuckingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Thumb Sucking
          </h1>
          <p className="text-[16px] md:text-[16px] text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Understanding thumb sucking habits and their effects on dental development
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
                <Link href="/patient-education/pediatric-dentistry" className="text-gray-500 hover:text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Thumb Sucking
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-[27px] md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                What is Thumb Sucking?
              </h2>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Thumb sucking is a natural reflex that many infants and young children develop. It provides comfort and security, and is considered normal behavior in babies and toddlers. However, when thumb sucking continues beyond a certain age, it can lead to dental problems and affect the development of the mouth and teeth.
              </p>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Most children stop thumb sucking on their own between the ages of 2 and 4. If the habit continues beyond the age of 4, especially when permanent teeth begin to emerge, it can cause significant dental issues that may require orthodontic treatment.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Effects of Prolonged Thumb Sucking
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                When thumb sucking continues beyond the age of 4 or 5, it can cause several dental and oral health problems:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Misaligned Teeth:</strong> The pressure from thumb sucking can push the front teeth forward, creating an overbite or open bite</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Changes in Jaw Shape:</strong> Prolonged thumb sucking can affect the growth and development of the jaw, potentially leading to a narrow upper jaw</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Speech Problems:</strong> Thumb sucking can interfere with proper tongue placement and affect speech development, potentially causing lisping or other articulation issues</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Roof of Mouth Changes:</strong> The constant pressure can alter the shape of the roof of the mouth (palate)</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Skin Problems:</strong> The thumb may become chapped, cracked, or infected from constant sucking</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When to Be Concerned
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                You should consider addressing thumb sucking if:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Your child continues thumb sucking after age 4</li>
                <li className="text-gray-700 text-[16px] md:text-base">The habit is intense or aggressive</li>
                <li className="text-gray-700 text-[16px] md:text-base">You notice changes in your child's teeth or jaw alignment</li>
                <li className="text-gray-700 text-[16px] md:text-base">Your child's dentist expresses concern about dental development</li>
                <li className="text-gray-700 text-[16px] md:text-base">The habit is causing social or emotional issues</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How to Help Your Child Stop Thumb Sucking
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Breaking the thumb sucking habit requires patience and positive reinforcement. Here are some strategies that can help:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Positive Reinforcement:</strong> Praise your child when they're not thumb sucking, especially during challenging times</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Identify Triggers:</strong> Notice when your child tends to thumb suck (boredom, stress, tiredness) and address those situations</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Gentle Reminders:</strong> Use gentle, non-punitive reminders when you notice thumb sucking</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Offer Alternatives:</strong> Provide comfort items like a favorite toy or blanket during times when thumb sucking typically occurs</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Bandage or Glove:</strong> Some children respond well to having a bandage or glove on their thumb as a physical reminder</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Reward System:</strong> Create a chart with stickers or rewards for days without thumb sucking</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Professional Help:</strong> If the habit persists, consult with your child's dentist or pediatrician for additional strategies</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Treatment Options
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                If thumb sucking has already caused dental problems, your child's dentist may recommend:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Habit Appliances:</strong> Special dental devices that make thumb sucking uncomfortable or difficult</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Orthodontic Treatment:</strong> Braces or other appliances to correct misaligned teeth and jaw issues</li>
                <li className="text-gray-700 text-[16px] md:text-base"><strong>Early Intervention:</strong> Addressing the habit early can prevent the need for more extensive treatment later</li>
              </ul>
            </div>

            <div className="mb-12 bg-primary/5 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When to See a Dentist
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Schedule a consultation with your child's dentist if:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Your child is over 4 years old and still thumb sucking</li>
                <li className="text-gray-700 text-[16px] md:text-base">You notice changes in your child's teeth alignment</li>
                <li className="text-gray-700 text-[16px] md:text-base">Your attempts to stop the habit have been unsuccessful</li>
                <li className="text-gray-700 text-[16px] md:text-base">You have concerns about your child's dental development</li>
              </ul>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Early intervention can help prevent long-term dental problems and may reduce the need for extensive orthodontic treatment in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[27px] md:text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Related Topics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/patient-education/pediatric-dentistry" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Pediatric Dentistry
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about comprehensive dental care for children.
              </p>
            </Link>
            <Link href="/patient-education/early-orthodontic-treatment" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Early Orthodontic Treatment
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Understanding when and why early orthodontic intervention may be needed.
              </p>
            </Link>
            <Link href="/patient-education/space-maintainers" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Space Maintainers
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about devices that preserve space for permanent teeth.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[27px] md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Concerned About Your Child's Thumb Sucking Habit?
          </h2>
          <p className="text-[16px] md:text-[16px] text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our pediatric dental team can help assess your child's dental development and provide guidance on breaking the thumb sucking habit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Consultation
            </Link>
            <a href="tel:(209) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
