'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function OralHygieneForKidsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Oral Hygiene for Kids
          </h1>
          <p className="text-[16px] md:text-[16px] text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Building healthy dental habits from an early age
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
                Oral Hygiene for Kids
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
                Setting the Foundation for Lifelong Dental Health
              </h2>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Teaching children proper oral hygiene habits from an early age is crucial for their long-term dental health. Good habits established in childhood often continue into adulthood, helping prevent cavities, gum disease, and other dental problems.
              </p>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Children's oral hygiene needs change as they grow, from caring for baby teeth to establishing routines for permanent teeth. Understanding these needs and making oral care fun and engaging can help children develop positive attitudes toward dental health.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Oral Hygiene by Age
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Birth to 12 Months
              </h4>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Even before teeth appear, it's important to clean your baby's gums. Use a soft, damp cloth or gauze to gently wipe the gums after feedings. This helps remove bacteria and gets your baby used to having their mouth cleaned.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Clean gums with a soft cloth after feedings</li>
                <li className="text-gray-700 text-[16px] md:text-base">Schedule first dental visit by age 1</li>
                <li className="text-gray-700 text-[16px] md:text-base">Avoid putting baby to bed with a bottle</li>
                <li className="text-gray-700 text-[16px] md:text-base">Begin establishing oral care routine</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                1-3 Years (Toddlers)
              </h4>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Once teeth begin to appear, start brushing with a soft-bristled toothbrush and a small amount of fluoride toothpaste (about the size of a grain of rice). Supervise brushing and make it a fun, daily routine.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Use soft-bristled toothbrush designed for children</li>
                <li className="text-gray-700 text-[16px] md:text-base">Use small amount of fluoride toothpaste</li>
                <li className="text-gray-700 text-[16px] md:text-base">Brush twice daily (morning and night)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Supervise brushing and help with technique</li>
                <li className="text-gray-700 text-[16px] md:text-base">Make brushing fun with songs or games</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                3-6 Years (Preschool)
              </h4>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Children can begin to brush more independently, but still need supervision. Increase toothpaste amount to pea-sized and introduce flossing when teeth are close together.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Use pea-sized amount of fluoride toothpaste</li>
                <li className="text-gray-700 text-[16px] md:text-base">Teach proper brushing technique</li>
                <li className="text-gray-700 text-[16px] md:text-base">Introduce flossing when teeth touch</li>
                <li className="text-gray-700 text-[16px] md:text-base">Continue supervision and assistance</li>
                <li className="text-gray-700 text-[16px] md:text-base">Encourage independence while ensuring thorough cleaning</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                6-12 Years (School Age)
              </h4>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Children should be brushing independently but still need occasional supervision. Focus on proper technique and establishing consistent habits.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Independent brushing with supervision</li>
                <li className="text-gray-700 text-[16px] md:text-base">Daily flossing</li>
                <li className="text-gray-700 text-[16px] md:text-base">Regular dental check-ups</li>
                <li className="text-gray-700 text-[16px] md:text-base">Education about cavity prevention</li>
                <li className="text-gray-700 text-[16px] md:text-base">Introduction to mouthwash if recommended</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Making Oral Hygiene Fun
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Creative Approaches
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Use toothbrushes with favorite characters</li>
                <li className="text-gray-700 text-[16px] md:text-base">Play music or sing songs during brushing</li>
                <li className="text-gray-700 text-[16px] md:text-base">Use timers or apps to ensure proper brushing time</li>
                <li className="text-gray-700 text-[16px] md:text-base">Create a reward system for consistent brushing</li>
                <li className="text-gray-700 text-[16px] md:text-base">Read books about dental health</li>
                <li className="text-gray-700 text-[16px] md:text-base">Let children choose their own dental products</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Lead by Example
              </h4>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Children learn by watching their parents. Brush your teeth together as a family to show that oral hygiene is important for everyone. Make it a positive, shared experience.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Choosing the Right Products
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Toothbrushes
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Soft-bristled brushes designed for children</li>
                <li className="text-gray-700 text-[16px] md:text-base">Age-appropriate size and handle</li>
                <li className="text-gray-700 text-[16px] md:text-base">Replace every 3-4 months or when bristles are worn</li>
                <li className="text-gray-700 text-[16px] md:text-base">Electric toothbrushes can be fun and effective</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Toothpaste
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Fluoride toothpaste (recommended by ADA)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Age-appropriate flavors</li>
                <li className="text-gray-700 text-[16px] md:text-base">Small amounts for young children</li>
                <li className="text-gray-700 text-[16px] md:text-base">Teach children not to swallow toothpaste</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Floss
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Floss picks can be easier for children to use</li>
                <li className="text-gray-700 text-[16px] md:text-base">Waxed floss slides more easily</li>
                <li className="text-gray-700 text-[16px] md:text-base">Flavored floss may be more appealing</li>
                <li className="text-gray-700 text-[16px] md:text-base">Supervise flossing until children are proficient</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Diet and Oral Health
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Healthy Eating Habits
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Limit sugary snacks and beverages</li>
                <li className="text-gray-700 text-[16px] md:text-base">Encourage water consumption</li>
                <li className="text-gray-700 text-[16px] md:text-base">Include calcium-rich foods (dairy, leafy greens)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Limit sticky foods that cling to teeth</li>
                <li className="text-gray-700 text-[16px] md:text-base">Avoid putting children to bed with bottles</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Snack Smart
              </h4>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Choose tooth-friendly snacks like cheese, yogurt, fruits, vegetables, and nuts. Limit sugary treats and encourage brushing after consuming them.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Regular Dental Visits
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">First visit by age 1</li>
                <li className="text-gray-700 text-[16px] md:text-base">Regular check-ups every 6 months</li>
                <li className="text-gray-700 text-[16px] md:text-base">Professional cleanings</li>
                <li className="text-gray-700 text-[16px] md:text-base">Fluoride treatments if recommended</li>
                <li className="text-gray-700 text-[16px] md:text-base">Early detection of dental problems</li>
                <li className="text-gray-700 text-[16px] md:text-base">Education for parents and children</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Common Concerns
              </h3>
              <p className="text-[16px] md:text-[16px] leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Contact your dentist if your child experiences:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Tooth pain or sensitivity</li>
                <li className="text-gray-700 text-[16px] md:text-base">Bleeding gums</li>
                <li className="text-gray-700 text-[16px] md:text-base">White spots on teeth</li>
                <li className="text-gray-700 text-[16px] md:text-base">Difficulty brushing or flossing</li>
                <li className="text-gray-700 text-[16px] md:text-base">Thumb sucking beyond age 4</li>
                <li className="text-gray-700 text-[16px] md:text-base">Dental injuries or trauma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[27px] md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/patient-education/how-to-brush-and-floss" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How to Brush and Floss
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn proper techniques that you can teach your children.
              </p>
            </Link>
            <Link href="/patient-education/toothpaste" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Toothpaste
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Choose the right toothpaste for your child's age and needs.
              </p>
            </Link>
            <Link href="/patient-education/how-to-prevent-cavities" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-[16px] font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How to Prevent Cavities
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Help your children develop cavity-free habits for life.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[27px] md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Ready to Start Your Child's Dental Journey?
          </h2>
          <p className="text-[16px] md:text-[16px] text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our team specializes in children's dental care and can help establish healthy habits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Consultation
            </Link>
            <a href="tel:+12099551800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 