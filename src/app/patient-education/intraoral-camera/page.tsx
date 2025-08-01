'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function IntraoralCameraPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Intraoral Camera
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced digital imaging technology for enhanced dental diagnosis and patient education
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
                Intraoral Camera
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
                What is an Intraoral Camera?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                An intraoral camera is a small, pen-like digital camera that captures high-resolution images of the inside of your mouth. This advanced technology allows dentists to see detailed views of your teeth, gums, and oral tissues that may not be visible to the naked eye or through traditional examination methods.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The camera is connected to a computer monitor, enabling both the dentist and patient to view the images in real-time. This technology enhances diagnosis, treatment planning, and patient education by providing clear, magnified views of oral conditions.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How Intraoral Cameras Work
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The intraoral camera system consists of several components:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Camera Head:</strong> Small, lightweight camera that fits comfortably in the mouth</li>
                <li className="text-gray-700"><strong>Light Source:</strong> Built-in LED lighting for optimal illumination</li>
                <li className="text-gray-700"><strong>Digital Sensor:</strong> High-resolution sensor for crisp, clear images</li>
                <li className="text-gray-700"><strong>Computer Interface:</strong> Software for image capture and storage</li>
                <li className="text-gray-700"><strong>Display Monitor:</strong> Large screen for viewing images</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Benefits of Intraoral Camera Technology
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Intraoral cameras provide numerous advantages for both patients and dentists:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Enhanced Diagnosis:</strong> Detailed views reveal problems not visible to the naked eye</li>
                <li className="text-gray-700"><strong>Patient Education:</strong> Patients can see exactly what the dentist sees</li>
                <li className="text-gray-700"><strong>Treatment Planning:</strong> Better visualization aids in developing treatment strategies</li>
                <li className="text-gray-700"><strong>Documentation:</strong> Digital images provide permanent records of oral conditions</li>
                <li className="text-gray-700"><strong>Insurance Claims:</strong> Clear images support insurance documentation</li>
                <li className="text-gray-700"><strong>Progress Tracking:</strong> Before-and-after images show treatment results</li>
                <li className="text-gray-700"><strong>Comfort:</strong> Non-invasive and comfortable for patients</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                What the Camera Can Detect
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Intraoral cameras can reveal various oral health issues:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Early signs of tooth decay and cavities</li>
                <li className="text-gray-700">Cracked or fractured teeth</li>
                <li className="text-gray-700">Worn dental restorations</li>
                <li className="text-gray-700">Gum disease and inflammation</li>
                <li className="text-gray-700">Oral lesions or abnormalities</li>
                <li className="text-gray-700">Tooth wear and erosion</li>
                <li className="text-gray-700">Dental staining and discoloration</li>
                <li className="text-gray-700">Orthodontic issues and tooth alignment</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                The Examination Process
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                During an intraoral camera examination:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">The dentist gently places the camera in your mouth</li>
                <li className="text-gray-700">Images are captured and displayed on a monitor</li>
                <li className="text-gray-700">You can view the images alongside your dentist</li>
                <li className="text-gray-700">The dentist explains what they see and any concerns</li>
                <li className="text-gray-700">Images are saved to your digital dental record</li>
                <li className="text-gray-700">Treatment recommendations are discussed</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Patient Education Benefits
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Intraoral cameras significantly enhance patient understanding:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Visual confirmation of dental problems</li>
                <li className="text-gray-700">Better understanding of treatment needs</li>
                <li className="text-gray-700">Increased motivation for oral hygiene</li>
                <li className="text-gray-700">Clearer explanation of procedures</li>
                <li className="text-gray-700">Documentation of treatment progress</li>
                <li className="text-gray-700">Enhanced communication between patient and dentist</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Integration with Digital Records
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Intraoral camera images integrate seamlessly with modern dental practice management:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Images are stored in your digital dental record</li>
                <li className="text-gray-700">Easy comparison with previous visits</li>
                <li className="text-gray-700">Secure, HIPAA-compliant storage</li>
                <li className="text-gray-700">Images can be shared with specialists if needed</li>
                <li className="text-gray-700">Backup and archiving for long-term records</li>
                <li className="text-gray-700">Integration with treatment planning software</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Safety and Comfort
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Intraoral camera examinations are safe and comfortable:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">No radiation exposure</li>
                <li className="text-gray-700">Non-invasive procedure</li>
                <li className="text-gray-700">Small, comfortable camera design</li>
                <li className="text-gray-700">Quick examination process</li>
                <li className="text-gray-700">No special preparation required</li>
                <li className="text-gray-700">Suitable for patients of all ages</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When Intraoral Cameras Are Used
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Intraoral cameras are used during various dental visits:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Routine dental checkups</li>
                <li className="text-gray-700">Emergency dental visits</li>
                <li className="text-gray-700">Treatment planning consultations</li>
                <li className="text-gray-700">Follow-up appointments</li>
                <li className="text-gray-700">Orthodontic evaluations</li>
                <li className="text-gray-700">Cosmetic dentistry consultations</li>
                <li className="text-gray-700">Periodontal assessments</li>
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
            <Link href="/patient-education/digital-x-rays" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Digital X-Rays
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about modern digital imaging technology.
              </p>
            </Link>
            <Link href="/patient-education/technology" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Technology
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Discover advanced dental technologies we use.
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Experience Advanced Dental Technology
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our intraoral camera technology provides clear, detailed views of your oral health for better diagnosis and treatment.
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