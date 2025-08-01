'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function PeriodontalTherapyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Periodontal Therapy
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced treatments for gum disease and periodontal health
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
              <li className="text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Periodontal Therapy
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
                What is Periodontal Therapy?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Periodontal therapy encompasses a range of treatments designed to prevent, diagnose, and treat gum disease (periodontitis) and other conditions affecting the gums and supporting structures of the teeth. These advanced procedures help restore gum health and prevent tooth loss.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Gum disease is a serious condition that affects millions of people worldwide. If left untreated, it can lead to tooth loss and may even impact overall health. Periodontal therapy offers effective solutions to combat this progressive disease.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Understanding Gum Disease
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Gum disease progresses through several stages:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Gingivitis:</strong> Early stage characterized by red, swollen gums that bleed easily</li>
                <li className="text-gray-700"><strong>Mild Periodontitis:</strong> Gums begin to pull away from teeth, forming pockets</li>
                <li className="text-gray-700"><strong>Moderate Periodontitis:</strong> Increased pocket depth and bone loss</li>
                <li className="text-gray-700"><strong>Severe Periodontitis:</strong> Significant bone loss and potential tooth loss</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Types of Periodontal Therapy
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Several treatment options are available depending on the severity of gum disease:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Scaling and Root Planing:</strong> Deep cleaning procedure to remove plaque and tartar</li>
                <li className="text-gray-700"><strong>Laser Therapy:</strong> Minimally invasive treatment using dental lasers</li>
                <li className="text-gray-700"><strong>Antibiotic Therapy:</strong> Local or systemic antibiotics to control infection</li>
                <li className="text-gray-700"><strong>Surgical Procedures:</strong> Advanced treatments for severe cases</li>
                <li className="text-gray-700"><strong>Maintenance Therapy:</strong> Ongoing care to prevent recurrence</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Scaling and Root Planing
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                This is the most common non-surgical periodontal treatment:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Removes plaque and tartar from above and below the gumline</li>
                <li className="text-gray-700">Smooths root surfaces to prevent bacteria from reattaching</li>
                <li className="text-gray-700">Reduces inflammation and promotes gum healing</li>
                <li className="text-gray-700">May require multiple visits depending on severity</li>
                <li className="text-gray-700">Often performed with local anesthesia for comfort</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Laser Periodontal Therapy
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Advanced laser technology offers several advantages:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Minimally invasive with less discomfort</li>
                <li className="text-gray-700">Precise targeting of diseased tissue</li>
                <li className="text-gray-700">Faster healing and recovery</li>
                <li className="text-gray-700">Reduced bleeding during and after treatment</li>
                <li className="text-gray-700">Stimulates tissue regeneration</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Surgical Periodontal Procedures
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                For advanced cases, surgical options may be necessary:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Flap Surgery:</strong> Lifts gums to access deeper areas for cleaning</li>
                <li className="text-gray-700"><strong>Bone Grafting:</strong> Replaces lost bone tissue</li>
                <li className="text-gray-700"><strong>Soft Tissue Grafts:</strong> Restores receded gum tissue</li>
                <li className="text-gray-700"><strong>Guided Tissue Regeneration:</strong> Promotes bone and tissue regrowth</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Signs You May Need Periodontal Therapy
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Watch for these symptoms that may indicate gum disease:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Bleeding gums during brushing or flossing</li>
                <li className="text-gray-700">Red, swollen, or tender gums</li>
                <li className="text-gray-700">Persistent bad breath</li>
                <li className="text-gray-700">Receding gums or longer-appearing teeth</li>
                <li className="text-gray-700">Loose or shifting teeth</li>
                <li className="text-gray-700">Changes in bite or tooth alignment</li>
                <li className="text-gray-700">Pus between teeth and gums</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Benefits of Periodontal Therapy
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Effective periodontal treatment provides numerous benefits:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Prevents tooth loss and preserves natural teeth</li>
                <li className="text-gray-700">Improves gum health and appearance</li>
                <li className="text-gray-700">Reduces bad breath and improves oral hygiene</li>
                <li className="text-gray-700">May improve overall health outcomes</li>
                <li className="text-gray-700">Prevents progression of gum disease</li>
                <li className="text-gray-700">Enhances chewing function and comfort</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                After Treatment Care
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Proper aftercare is essential for successful treatment:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Follow your dentist's post-treatment instructions</li>
                <li className="text-gray-700">Maintain excellent oral hygiene practices</li>
                <li className="text-gray-700">Attend regular follow-up appointments</li>
                <li className="text-gray-700">Avoid smoking and tobacco products</li>
                <li className="text-gray-700">Eat a balanced diet for optimal healing</li>
                <li className="text-gray-700">Use prescribed medications as directed</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Prevention Strategies
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Prevent gum disease with these practices:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Brush twice daily with fluoride toothpaste</li>
                <li className="text-gray-700">Floss daily to remove plaque between teeth</li>
                <li className="text-gray-700">Use antimicrobial mouthwash as recommended</li>
                <li className="text-gray-700">Schedule regular dental checkups and cleanings</li>
                <li className="text-gray-700">Quit smoking and avoid tobacco products</li>
                <li className="text-gray-700">Manage diabetes and other health conditions</li>
                <li className="text-gray-700">Eat a healthy, balanced diet</li>
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
            <Link href="/patient-education/laser-dentistry" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Laser Dentistry
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about advanced laser treatments in dentistry.
              </p>
            </Link>
            <Link href="/patient-education/dental-cleanings" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Cleanings
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Understanding the importance of regular dental cleanings.
              </p>
            </Link>
            <Link href="/patient-education/oral-hygiene" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Oral Hygiene
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Best practices for maintaining oral health.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Concerned About Your Gum Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our dental team can evaluate your gum health and recommend appropriate periodontal therapy.
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