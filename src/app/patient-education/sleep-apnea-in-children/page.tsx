'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function SleepApneaInChildrenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Sleep Apnea in Children
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Understanding sleep apnea and its dental implications in children
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
                Sleep Apnea in Children
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
                What is Sleep Apnea in Children?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Sleep apnea is a sleep disorder characterized by repeated pauses in breathing during sleep. In children, this condition can have significant impacts on their health, development, and quality of life. Pediatric sleep apnea is often related to enlarged tonsils and adenoids, but can also be caused by other factors affecting the airway.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Unlike adults, children with sleep apnea may not always snore loudly, making the condition harder to detect. Parents and caregivers need to be aware of the signs and symptoms to ensure early diagnosis and treatment.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Types of Sleep Apnea in Children
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                There are three main types of sleep apnea that can affect children:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Obstructive Sleep Apnea (OSA):</strong> The most common type in children, caused by blockage of the airway</li>
                <li className="text-gray-700"><strong>Central Sleep Apnea:</strong> Caused by the brain not sending proper signals to control breathing</li>
                <li className="text-gray-700"><strong>Mixed Sleep Apnea:</strong> A combination of both obstructive and central sleep apnea</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Signs and Symptoms
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Common signs of sleep apnea in children include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Loud snoring or noisy breathing during sleep</li>
                <li className="text-gray-700">Pauses in breathing followed by gasping or choking</li>
                <li className="text-gray-700">Restless sleep or frequent waking</li>
                <li className="text-gray-700">Sleeping in unusual positions (head tilted back, mouth open)</li>
                <li className="text-gray-700">Bedwetting beyond the normal age</li>
                <li className="text-gray-700">Daytime sleepiness or hyperactivity</li>
                <li className="text-gray-700">Behavioral problems or difficulty concentrating</li>
                <li className="text-gray-700">Poor school performance</li>
                <li className="text-gray-700">Morning headaches</li>
                <li className="text-gray-700">Slow growth or weight gain</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Risk Factors
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Several factors can increase a child's risk of developing sleep apnea:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Enlarged tonsils and adenoids</li>
                <li className="text-gray-700">Obesity or being overweight</li>
                <li className="text-gray-700">Family history of sleep apnea</li>
                <li className="text-gray-700">Craniofacial abnormalities</li>
                <li className="text-gray-700">Down syndrome or other genetic conditions</li>
                <li className="text-gray-700">Neuromuscular disorders</li>
                <li className="text-gray-700">Allergies or chronic nasal congestion</li>
                <li className="text-gray-700">Asthma or other respiratory conditions</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Implications
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Sleep apnea can have several effects on a child's oral health and dental development:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Mouth breathing:</strong> Can lead to dry mouth and increased risk of cavities</li>
                <li className="text-gray-700"><strong>Malocclusion:</strong> May contribute to bite problems and jaw development issues</li>
                <li className="text-gray-700"><strong>Enlarged tonsils:</strong> Can affect speech and swallowing</li>
                <li className="text-gray-700"><strong>Bruxism:</strong> Teeth grinding during sleep</li>
                <li className="text-gray-700"><strong>Facial development:</strong> Can affect the growth of the face and jaw</li>
                <li className="text-gray-700"><strong>Orthodontic issues:</strong> May require more complex orthodontic treatment</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Diagnosis
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Diagnosing sleep apnea in children involves several steps:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Medical history and physical examination</li>
                <li className="text-gray-700">Sleep study (polysomnography) in a sleep lab</li>
                <li className="text-gray-700">Home sleep apnea testing in some cases</li>
                <li className="text-gray-700">Evaluation by specialists (ENT, pulmonologist, sleep specialist)</li>
                <li className="text-gray-700">Dental evaluation for oral health implications</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Treatment Options
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Treatment for pediatric sleep apnea depends on the cause and severity:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Surgical options:</strong> Tonsillectomy and adenoidectomy for enlarged tonsils/adenoids</li>
                <li className="text-gray-700"><strong>Orthodontic treatment:</strong> Palatal expanders or other appliances to improve airway</li>
                <li className="text-gray-700"><strong>CPAP therapy:</strong> Continuous positive airway pressure for severe cases</li>
                <li className="text-gray-700"><strong>Lifestyle changes:</strong> Weight management, allergy treatment, sleep hygiene</li>
                <li className="text-gray-700"><strong>Dental appliances:</strong> Custom oral devices to improve airway patency</li>
                <li className="text-gray-700"><strong>Positional therapy:</strong> Sleeping position modifications</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Role of Pediatric Dentistry
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Pediatric dentists play an important role in identifying and managing sleep apnea:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Screening for signs of sleep apnea during dental visits</li>
                <li className="text-gray-700">Evaluating oral health implications</li>
                <li className="text-gray-700">Providing orthodontic treatment when appropriate</li>
                <li className="text-gray-700">Collaborating with other healthcare providers</li>
                <li className="text-gray-700">Monitoring treatment progress</li>
                <li className="text-gray-700">Educating families about oral health and sleep apnea</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Prevention and Management
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Parents can help prevent and manage sleep apnea in children:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Maintain a healthy weight through proper diet and exercise</li>
                <li className="text-gray-700">Treat allergies and nasal congestion promptly</li>
                <li className="text-gray-700">Establish good sleep hygiene practices</li>
                <li className="text-gray-700">Monitor for signs and symptoms</li>
                <li className="text-gray-700">Seek medical attention for persistent snoring or breathing issues</li>
                <li className="text-gray-700">Attend regular dental checkups</li>
                <li className="text-gray-700">Follow treatment recommendations from healthcare providers</li>
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
            <Link href="/patient-education/nitrous-oxide-for-children" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Nitrous Oxide for Children
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about safe sedation options for children.
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
            <Link href="/patient-education/sedation-dentistry" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Sedation Dentistry
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about various sedation options for dental procedures.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Concerned About Your Child's Sleep?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our pediatric dental team can help evaluate your child for sleep apnea and provide appropriate treatment options.
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