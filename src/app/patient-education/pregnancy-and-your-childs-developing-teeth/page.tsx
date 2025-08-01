'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function PregnancyAndYourChildsDevelopingTeethPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Pregnancy and Your Child's Developing Teeth
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            How maternal health and nutrition during pregnancy affects dental development
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
                Pregnancy and Your Child's Developing Teeth
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
                The Connection Between Pregnancy and Dental Development
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                A child's dental development begins long before birth. The foundation for healthy teeth is laid during pregnancy, making maternal health and nutrition crucial for optimal dental development. Understanding this connection can help expectant mothers make informed decisions that benefit their child's oral health.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Tooth development starts as early as the sixth week of pregnancy, with the formation of tooth buds. By the time a baby is born, all 20 primary teeth and the crowns of the first permanent molars are already developing in the jawbone.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Timeline of Dental Development During Pregnancy
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Understanding when different parts of the teeth develop helps explain why certain nutrients are important at specific times:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>6-8 weeks:</strong> Formation of tooth buds begins</li>
                <li className="text-gray-700"><strong>3-4 months:</strong> Enamel formation starts for primary teeth</li>
                <li className="text-gray-700"><strong>4-6 months:</strong> Mineralization of primary teeth begins</li>
                <li className="text-gray-700"><strong>6-8 months:</strong> Development of permanent tooth buds</li>
                <li className="text-gray-700"><strong>Birth:</strong> All primary teeth and first permanent molars are developing</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Essential Nutrients for Dental Development
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Several nutrients play critical roles in dental development during pregnancy:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Calcium:</strong> Essential for strong tooth structure and enamel formation</li>
                <li className="text-gray-700"><strong>Phosphorus:</strong> Works with calcium to build strong teeth and bones</li>
                <li className="text-gray-700"><strong>Vitamin D:</strong> Helps the body absorb calcium and is crucial for tooth mineralization</li>
                <li className="text-gray-700"><strong>Protein:</strong> Provides the building blocks for tooth development</li>
                <li className="text-gray-700"><strong>Vitamin A:</strong> Important for enamel formation and tooth development</li>
                <li className="text-gray-700"><strong>Folate:</strong> Essential for proper cell division and development</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Maternal Health Factors That Affect Dental Development
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Several maternal health factors can influence a child's dental development:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Nutritional status:</strong> Poor nutrition can lead to enamel defects and weaker teeth</li>
                <li className="text-gray-700"><strong>Maternal illness:</strong> Certain infections and illnesses can affect tooth development</li>
                <li className="text-gray-700"><strong>Medications:</strong> Some medications taken during pregnancy can impact dental development</li>
                <li className="text-gray-700"><strong>Stress:</strong> High stress levels may affect nutrient absorption and fetal development</li>
                <li className="text-gray-700"><strong>Smoking and alcohol:</strong> Can cause developmental issues including dental problems</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Common Dental Development Issues
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Problems during pregnancy can lead to various dental development issues:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Enamel hypoplasia:</strong> Thin or missing enamel due to developmental disturbances</li>
                <li className="text-gray-700"><strong>Discolored teeth:</strong> Teeth may appear yellow, brown, or gray due to developmental issues</li>
                <li className="text-gray-700"><strong>Pitted or grooved enamel:</strong> Surface irregularities that can make teeth more susceptible to decay</li>
                <li className="text-gray-700"><strong>Delayed eruption:</strong> Teeth may emerge later than expected</li>
                <li className="text-gray-700"><strong>Missing teeth:</strong> Some teeth may not develop at all</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Recommendations for Expectant Mothers
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                To support optimal dental development, expectant mothers should:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Maintain a balanced diet rich in calcium, phosphorus, and vitamins</li>
                <li className="text-gray-700">Take prenatal vitamins as recommended by healthcare providers</li>
                <li className="text-gray-700">Attend regular prenatal checkups</li>
                <li className="text-gray-700">Practice good oral hygiene to prevent infections</li>
                <li className="text-gray-700">Avoid smoking, alcohol, and recreational drugs</li>
                <li className="text-gray-700">Manage stress through healthy coping mechanisms</li>
                <li className="text-gray-700">Discuss any medications with healthcare providers</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Post-Birth Dental Care
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Even after birth, maternal health continues to influence a child's dental development through breastfeeding and early nutrition:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Breastfeeding provides optimal nutrition for continued dental development</li>
                <li className="text-gray-700">Proper weaning practices help establish good oral habits</li>
                <li className="text-gray-700">Early introduction to dental care sets the foundation for lifelong oral health</li>
                <li className="text-gray-700">Regular dental checkups should begin by the child's first birthday</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Working with Healthcare Providers
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Open communication with healthcare providers is essential for supporting dental development:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Discuss any concerns about dental development with your obstetrician</li>
                <li className="text-gray-700">Consult with a pediatric dentist about early dental care</li>
                <li className="text-gray-700">Follow recommendations for prenatal and postnatal nutrition</li>
                <li className="text-gray-700">Address any maternal health issues that could affect fetal development</li>
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
            <Link href="/patient-education/about-pediatric-dentistry" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                About Pediatric Dentistry
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about specialized dental care for children.
              </p>
            </Link>
            <Link href="/patient-education/fluoride-and-your-child" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Fluoride and Your Child
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about fluoride's role in cavity prevention.
              </p>
            </Link>
            <Link href="/patient-education/sealants" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Sealants
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about dental sealants for cavity prevention.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Start Your Child's Dental Journey Right
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our pediatric dental team can help ensure your child's dental development is on track from the very beginning.
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