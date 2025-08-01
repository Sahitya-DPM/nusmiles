'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function NitrousOxideForChildrenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Nitrous Oxide for Children
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Safe sedation option to help children feel comfortable during dental procedures
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
                Nitrous Oxide for Children
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
                What is Nitrous Oxide?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Nitrous oxide, commonly known as "laughing gas," is a safe and effective sedative used in pediatric dentistry to help children feel more comfortable and relaxed during dental procedures. It is a colorless, odorless gas that is mixed with oxygen and inhaled through a small mask placed over the nose.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Nitrous oxide is one of the most commonly used sedation methods in pediatric dentistry because it is safe, effective, and has minimal side effects. It helps reduce anxiety and discomfort while allowing children to remain conscious and responsive throughout the procedure.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How Nitrous Oxide Works
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                When inhaled, nitrous oxide produces several effects that help children during dental procedures:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Anxiety reduction:</strong> Creates a feeling of calmness and relaxation</li>
                <li className="text-gray-700"><strong>Pain relief:</strong> Provides mild pain relief and reduces sensitivity</li>
                <li className="text-gray-700"><strong>Time distortion:</strong> Makes the procedure seem shorter than it actually is</li>
                <li className="text-gray-700"><strong>Euphoria:</strong> Produces a pleasant, happy feeling</li>
                <li className="text-gray-700"><strong>Cooperation:</strong> Helps children remain still and cooperative</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When is Nitrous Oxide Used?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Nitrous oxide may be recommended for children who:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Experience anxiety or fear about dental procedures</li>
                <li className="text-gray-700">Have difficulty sitting still for extended periods</li>
                <li className="text-gray-700">Have a strong gag reflex</li>
                <li className="text-gray-700">Need multiple procedures in one visit</li>
                <li className="text-gray-700">Have special needs that make dental treatment challenging</li>
                <li className="text-gray-700">Are undergoing procedures that may cause discomfort</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Nitrous Oxide Process
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The administration of nitrous oxide follows a simple, safe process:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">The child is seated comfortably in the dental chair</li>
                <li className="text-gray-700">A small, comfortable mask is placed over the nose</li>
                <li className="text-gray-700">The child breathes normally through the nose</li>
                <li className="text-gray-700">Nitrous oxide and oxygen are gradually introduced</li>
                <li className="text-gray-700">The child begins to feel relaxed and comfortable</li>
                <li className="text-gray-700">The dental procedure is performed</li>
                <li className="text-gray-700">Pure oxygen is given to clear the nitrous oxide</li>
                <li className="text-gray-700">The child returns to normal within minutes</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Safety and Side Effects
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Nitrous oxide is extremely safe when administered by trained dental professionals. However, there are some considerations:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Mild side effects:</strong> May include lightheadedness, tingling in hands and feet, or mild nausea</li>
                <li className="text-gray-700"><strong>Rare reactions:</strong> Some children may not respond well to nitrous oxide</li>
                <li className="text-gray-700"><strong>Medical conditions:</strong> Children with certain medical conditions may not be candidates</li>
                <li className="text-gray-700"><strong>Allergies:</strong> Very rare allergic reactions can occur</li>
                <li className="text-gray-700"><strong>Recovery:</strong> Effects wear off quickly, usually within 5-10 minutes</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Preparing Your Child for Nitrous Oxide
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                To ensure the best experience with nitrous oxide:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Explain the process in simple, positive terms</li>
                <li className="text-gray-700">Avoid eating a heavy meal 2-3 hours before the appointment</li>
                <li className="text-gray-700">Ensure your child is well-rested</li>
                <li className="text-gray-700">Dress your child in comfortable clothing</li>
                <li className="text-gray-700">Arrive on time to avoid rushing and stress</li>
                <li className="text-gray-700">Follow any specific instructions from your dentist</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Benefits of Nitrous Oxide
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Nitrous oxide offers numerous advantages for pediatric dental care:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Safe and well-tolerated by most children</li>
                <li className="text-gray-700">Quick onset and recovery</li>
                <li className="text-gray-700">No needles or injections required</li>
                <li className="text-gray-700">Children remain conscious and responsive</li>
                <li className="text-gray-700">Helps create positive dental experiences</li>
                <li className="text-gray-700">Reduces the need for more invasive sedation</li>
                <li className="text-gray-700">Cost-effective sedation option</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                After the Procedure
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Recovery from nitrous oxide is typically quick and uneventful:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Children can usually return to normal activities immediately</li>
                <li className="text-gray-700">No special dietary restrictions</li>
                <li className="text-gray-700">Effects wear off completely within minutes</li>
                <li className="text-gray-700">Children often report feeling happy and relaxed</li>
                <li className="text-gray-700">No memory impairment or confusion</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Alternative Sedation Options
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                If nitrous oxide is not suitable for your child, other options may include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Oral sedation medications</li>
                <li className="text-gray-700">IV sedation for more complex procedures</li>
                <li className="text-gray-700">General anesthesia for extensive treatment</li>
                <li className="text-gray-700">Behavioral techniques and distraction methods</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Your pediatric dentist will discuss the best options for your child's specific needs and circumstances.
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
            <Link href="/patient-education/sedation-dentistry" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Sedation Dentistry
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about various sedation options for dental procedures.
              </p>
            </Link>
            <Link href="/patient-education/about-pediatric-dentistry" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                About Pediatric Dentistry
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about specialized dental care for children.
              </p>
            </Link>
            <Link href="/patient-education/sleep-apnea-in-children" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Sleep Apnea in Children
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Understanding sleep apnea and its dental implications.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Make Dental Visits Comfortable for Your Child
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our pediatric dental team can help determine if nitrous oxide is right for your child and provide a comfortable dental experience.
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