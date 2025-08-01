'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function ConeBeamCTImagingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Cone Beam CT Imaging
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Advanced 3D imaging technology for precise dental diagnosis and treatment planning
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
                Cone Beam CT Imaging
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
                What is Cone Beam CT Imaging?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Cone Beam Computed Tomography (CBCT) is an advanced imaging technology that provides detailed 3D images of the teeth, jaw, and surrounding structures. Unlike traditional 2D X-rays, CBCT creates comprehensive three-dimensional views that help dentists make more accurate diagnoses and treatment plans.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                This technology uses a cone-shaped X-ray beam that rotates around the patient's head, capturing hundreds of images from different angles. A computer then processes these images to create a detailed 3D reconstruction of the oral and maxillofacial region.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                How Cone Beam CT Works
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The CBCT scanning process involves several steps:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">The patient is positioned in the CBCT scanner</li>
                <li className="text-gray-700">A cone-shaped X-ray beam rotates around the patient's head</li>
                <li className="text-gray-700">Multiple images are captured from different angles</li>
                <li className="text-gray-700">Computer software processes the images</li>
                <li className="text-gray-700">A detailed 3D model is created for analysis</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Applications of Cone Beam CT
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                CBCT imaging is used for various dental and oral health applications:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>Dental Implant Planning:</strong> Precise assessment of bone quality and quantity</li>
                <li className="text-gray-700"><strong>Orthodontic Treatment:</strong> Evaluation of tooth position and jaw relationships</li>
                <li className="text-gray-700"><strong>Endodontic Procedures:</strong> Detailed root canal anatomy assessment</li>
                <li className="text-gray-700"><strong>Oral Surgery:</strong> Planning for wisdom tooth extraction and other surgeries</li>
                <li className="text-gray-700"><strong>TMJ Disorders:</strong> Evaluation of jaw joint problems</li>
                <li className="text-gray-700"><strong>Pathology Detection:</strong> Identification of cysts, tumors, and other abnormalities</li>
                <li className="text-gray-700"><strong>Trauma Assessment:</strong> Evaluation of facial and dental injuries</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Advantages of Cone Beam CT
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                CBCT offers numerous benefits over traditional imaging methods:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700"><strong>3D Visualization:</strong> Complete view of dental and facial structures</li>
                <li className="text-gray-700"><strong>High Resolution:</strong> Exceptional detail for accurate diagnosis</li>
                <li className="text-gray-700"><strong>Lower Radiation:</strong> Reduced exposure compared to medical CT scans</li>
                <li className="text-gray-700"><strong>Quick Scanning:</strong> Fast image capture in seconds</li>
                <li className="text-gray-700"><strong>Treatment Planning:</strong> Enhanced precision for complex procedures</li>
                <li className="text-gray-700"><strong>Patient Comfort:</strong> Non-invasive and comfortable experience</li>
                <li className="text-gray-700"><strong>Cost Effective:</strong> Single scan provides comprehensive information</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                What to Expect During a CBCT Scan
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                The CBCT scanning process is straightforward and comfortable:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">You'll be asked to remove any metal objects (jewelry, glasses, etc.)</li>
                <li className="text-gray-700">You'll be positioned in the scanner with your head properly aligned</li>
                <li className="text-gray-700">The scanner will rotate around your head for 10-40 seconds</li>
                <li className="text-gray-700">You'll need to remain still during the scan</li>
                <li className="text-gray-700">The procedure is painless and requires no special preparation</li>
                <li className="text-gray-700">Results are typically available immediately</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Safety and Radiation Exposure
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                CBCT imaging is very safe with minimal radiation exposure:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Radiation exposure is significantly lower than medical CT scans</li>
                <li className="text-gray-700">Equivalent to a few days of natural background radiation</li>
                <li className="text-gray-700">Lead aprons and collars provide additional protection</li>
                <li className="text-gray-700">Scans are only performed when clinically necessary</li>
                <li className="text-gray-700">Pregnant women should inform their dentist before scanning</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                When CBCT is Recommended
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Your dentist may recommend CBCT imaging for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Planning dental implant placement</li>
                <li className="text-gray-700">Evaluating complex root canal anatomy</li>
                <li className="text-gray-700">Assessing impacted wisdom teeth</li>
                <li className="text-gray-700">Diagnosing TMJ disorders</li>
                <li className="text-gray-700">Planning orthodontic treatment</li>
                <li className="text-gray-700">Evaluating facial trauma</li>
                <li className="text-gray-700">Detecting oral pathology</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Interpreting CBCT Results
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                CBCT images provide detailed information about:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Bone density and volume for implant planning</li>
                <li className="text-gray-700">Tooth and root positions and relationships</li>
                <li className="text-gray-700">Nerve and blood vessel locations</li>
                <li className="text-gray-700">Sinus cavities and their relationship to teeth</li>
                <li className="text-gray-700">Jaw joint anatomy and function</li>
                <li className="text-gray-700">Pathological conditions and abnormalities</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Cost and Insurance Coverage
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                CBCT imaging costs vary depending on the area scanned and complexity:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                <li className="text-gray-700">Insurance coverage varies by plan and medical necessity</li>
                <li className="text-gray-700">Some plans cover CBCT for specific procedures</li>
                <li className="text-gray-700">Cost is often comparable to multiple traditional X-rays</li>
                <li className="text-gray-700">Payment plans may be available</li>
                <li className="text-gray-700">Discuss costs with your dental office before the scan</li>
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
            <Link href="/patient-education/dental-implants" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Dental Implants
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                Learn about implant planning and placement.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Need Advanced Dental Imaging?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            Our advanced CBCT technology provides precise 3D imaging for accurate diagnosis and treatment planning.
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