'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Our scheduling coordinator will contact you to confirm your appointment.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const timeSlots = [
    '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const services = [
    'General Checkup',
    'Dental Cleaning',
    'Dental Implants',
    'Invisalign',
    'Cosmetic Dentistry',
    'Emergency Care',
    'Root Canal',
    'Crowns & Bridges',
    'Teeth Whitening',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="absolute inset-0">
          <Image
            src="/office2.jpg.webp"
            alt="Dental Office"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
            Schedule an Appointment
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
            SCHEDULE AN APPOINTMENT WITH US!
          </p>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Request Appointment
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                To request appointment availability, please fill out the form below. Our scheduling coordinator will contact you to confirm your appointment.
              </p>
            </div>

            {submitMessage && (
              <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please provide any additional details about your appointment request..."
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Hours of Operation
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>Monday</span>
                  <span className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>Tuesday</span>
                  <span className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>Wednesday</span>
                  <span className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>9:30 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>Thursday</span>
                  <span className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>Friday</span>
                  <span className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>Saturday</span>
                  <span className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>Closed</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>Sunday</span>
                  <span className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>Closed</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                  Emergency Care
                </h3>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                  For dental emergencies outside of regular hours, please call our emergency line.
                </p>
                <a 
                  href="tel:(209) 955-1800" 
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                  style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (209) 955-1800
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Phone</h4>
                    <a href="tel:(209) 955-1800" className="text-primary hover:text-primary-dark transition-colors" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                      (209) 955-1800
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Location</h4>
                    <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                      Stockton, CA
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Response Time</h4>
                    <p className="text-gray-600" style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}>
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 