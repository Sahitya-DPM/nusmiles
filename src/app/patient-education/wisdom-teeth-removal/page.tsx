'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function WisdomTeethRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[27px] md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Wisdom Teeth Removal
          </h1>
          <p className="text-[16px] md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Understanding when and why wisdom teeth need to be removed
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
                <Link href="/patient-education/oral-surgery" className="text-gray-500 hover:text-gray-700" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Oral Surgery
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Wisdom Teeth Removal
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
                Understanding Wisdom Teeth
              </h2>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Wisdom teeth, also known as third molars, are the last teeth to develop and typically emerge between the ages of 17 and 25. While some people have enough space for their wisdom teeth to erupt properly, many people experience problems that require removal.
              </p>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                These teeth are called "wisdom teeth" because they appear at a more mature age, but they often cause more problems than wisdom. Understanding when and why wisdom teeth need to be removed can help you make informed decisions about your oral health.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Why Wisdom Teeth Are Often Removed
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Lack of Space
              </h4>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Most people's jaws are too small to accommodate wisdom teeth properly. When there isn't enough space, the teeth may become impacted (trapped beneath the gum line) or erupt at an angle, causing various problems.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Impaction
              </h4>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Impacted wisdom teeth are trapped beneath the gum line and cannot erupt properly. This can lead to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Pain and swelling</li>
                <li className="text-gray-700 text-[16px] md:text-base">Infection and abscess formation</li>
                <li className="text-gray-700 text-[16px] md:text-base">Damage to adjacent teeth</li>
                <li className="text-gray-700 text-[16px] md:text-base">Cyst formation</li>
                <li className="text-gray-700 text-[16px] md:text-base">Bone loss</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Crowding
              </h4>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Wisdom teeth can push against other teeth, causing crowding and misalignment. This can undo years of orthodontic work and create new dental problems.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Difficulty Cleaning
              </h4>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Wisdom teeth are located at the back of the mouth, making them difficult to clean properly. This can lead to decay, gum disease, and other oral health issues.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Signs You May Need Wisdom Teeth Removal
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Pain and Discomfort
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Pain in the back of the mouth</li>
                <li className="text-gray-700 text-[16px] md:text-base">Jaw pain or stiffness</li>
                <li className="text-gray-700 text-[16px] md:text-base">Difficulty opening the mouth</li>
                <li className="text-gray-700 text-[16px] md:text-base">Pain when chewing</li>
                <li className="text-gray-700 text-[16px] md:text-base">Headaches</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Swelling and Inflammation
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Swollen gums around wisdom teeth</li>
                <li className="text-gray-700 text-[16px] md:text-base">Redness and tenderness</li>
                <li className="text-gray-700 text-[16px] md:text-base">Bad breath or unpleasant taste</li>
                <li className="text-gray-700 text-[16px] md:text-base">Swollen lymph nodes</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Other Symptoms
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Sinus pressure or congestion</li>
                <li className="text-gray-700 text-[16px] md:text-base">Ear pain</li>
                <li className="text-gray-700 text-[16px] md:text-base">Difficulty swallowing</li>
                <li className="text-gray-700 text-[16px] md:text-base">Changes in bite or jaw alignment</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When to Remove Wisdom Teeth
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Early Removal (Ages 17-25)
              </h4>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Many dentists recommend removing wisdom teeth in the late teens or early twenties, even if they're not causing problems yet. This is because:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Roots are not fully developed, making removal easier</li>
                <li className="text-gray-700 text-[16px] md:text-base">Bone is less dense, allowing for faster healing</li>
                <li className="text-gray-700 text-[16px] md:text-base">Lower risk of complications</li>
                <li className="text-gray-700 text-[16px] md:text-base">Prevents future problems</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Immediate Removal
              </h4>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Wisdom teeth should be removed immediately if they are causing:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Severe pain or infection</li>
                <li className="text-gray-700 text-[16px] md:text-base">Damage to adjacent teeth</li>
                <li className="text-gray-700 text-[16px] md:text-base">Cyst or tumor formation</li>
                <li className="text-gray-700 text-[16px] md:text-base">Gum disease or decay</li>
                <li className="text-gray-700 text-[16px] md:text-base">Orthodontic problems</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Removal Process
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Consultation and Planning
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Comprehensive oral examination</li>
                <li className="text-gray-700 text-[16px] md:text-base">X-rays to assess tooth position and roots</li>
                <li className="text-gray-700 text-[16px] md:text-base">Discussion of anesthesia options</li>
                <li className="text-gray-700 text-[16px] md:text-base">Treatment plan and cost estimate</li>
                <li className="text-gray-700 text-[16px] md:text-base">Pre-operative instructions</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Anesthesia Options
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Local anesthesia (numbing the area)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Nitrous oxide (laughing gas)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Oral sedation (medication for relaxation)</li>
                <li className="text-gray-700 text-[16px] md:text-base">IV sedation (for complex cases)</li>
                <li className="text-gray-700 text-[16px] md:text-base">General anesthesia (for extensive procedures)</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Procedure
              </h4>
              <p className="text-[16px] md:text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The actual removal typically takes 30-60 minutes, depending on the complexity. The surgeon will:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Make an incision in the gum if needed</li>
                <li className="text-gray-700 text-[16px] md:text-base">Remove any bone blocking access to the tooth</li>
                <li className="text-gray-700 text-[16px] md:text-base">Extract the tooth (sometimes in pieces)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Clean the extraction site</li>
                <li className="text-gray-700 text-[16px] md:text-base">Place sutures if necessary</li>
                <li className="text-gray-700 text-[16px] md:text-base">Apply gauze to control bleeding</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Recovery and Aftercare
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Immediate Post-Procedure Care
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Keep gauze in place for 30-45 minutes</li>
                <li className="text-gray-700 text-[16px] md:text-base">Apply ice packs to reduce swelling</li>
                <li className="text-gray-700 text-[16px] md:text-base">Take prescribed pain medications</li>
                <li className="text-gray-700 text-[16px] md:text-base">Rest and avoid strenuous activity</li>
                <li className="text-gray-700 text-[16px] md:text-base">Avoid smoking and drinking through a straw</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Diet and Oral Hygiene
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Eat soft foods for the first few days</li>
                <li className="text-gray-700 text-[16px] md:text-base">Avoid hot, spicy, or crunchy foods</li>
                <li className="text-gray-700 text-[16px] md:text-base">Gently rinse with salt water after 24 hours</li>
                <li className="text-gray-700 text-[16px] md:text-base">Continue brushing other teeth carefully</li>
                <li className="text-gray-700 text-[16px] md:text-base">Avoid the extraction sites while brushing</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Healing Timeline
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Initial healing: 1-2 weeks</li>
                <li className="text-gray-700 text-[16px] md:text-base">Bone healing: 6-8 weeks</li>
                <li className="text-gray-700 text-[16px] md:text-base">Complete healing: 3-6 months</li>
                <li className="text-gray-700 text-[16px] md:text-base">Follow-up appointments as scheduled</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Potential Complications
              </h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Common Side Effects
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Swelling and bruising (normal for 2-3 days)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Mild pain and discomfort</li>
                <li className="text-gray-700 text-[16px] md:text-base">Slight bleeding (should stop within 24 hours)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Difficulty opening mouth (temporary)</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Rare Complications
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Dry socket (loss of blood clot)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Infection</li>
                <li className="text-gray-700 text-[16px] md:text-base">Nerve damage (temporary or permanent)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Sinus problems (upper wisdom teeth)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Jaw stiffness</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When to Contact Your Dentist
              </h4>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Severe pain that doesn't improve</li>
                <li className="text-gray-700 text-[16px] md:text-base">Excessive bleeding</li>
                <li className="text-gray-700 text-[16px] md:text-base">Signs of infection (fever, swelling, pus)</li>
                <li className="text-gray-700 text-[16px] md:text-base">Numbness that persists beyond 24 hours</li>
                <li className="text-gray-700 text-[16px] md:text-base">Difficulty breathing or swallowing</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Benefits of Wisdom Teeth Removal
              </h3>
              <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700 text-[16px] md:text-base">Prevents future dental problems</li>
                <li className="text-gray-700 text-[16px] md:text-base">Reduces risk of infection and decay</li>
                <li className="text-gray-700 text-[16px] md:text-base">Prevents damage to adjacent teeth</li>
                <li className="text-gray-700 text-[16px] md:text-base">Maintains orthodontic results</li>
                <li className="text-gray-700 text-[16px] md:text-base">Improves overall oral health</li>
                <li className="text-gray-700 text-[16px] md:text-base">Eliminates pain and discomfort</li>
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
            <Link href="/patient-education/extractions" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Extractions
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about general dental extraction procedures and recovery.
              </p>
            </Link>
            <Link href="/patient-education/sedation-dentistry" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[22px] md:text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Sedation Dentistry
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Understand sedation options for comfortable wisdom teeth removal.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[27px] md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Need Wisdom Teeth Evaluation?
          </h2>
          <p className="text-[16px] md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our experienced team can evaluate your wisdom teeth and recommend the best treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-lg text-[15px] md:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Schedule Consultation
            </Link>
            <a href="tel:(209) 955-1800" className="border-2 border-white text-white px-8 py-4 rounded-lg text-[15px] md:text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
              Call (209) 955-1800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 