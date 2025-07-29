'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Contact Us</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Address</h3>
                <p className="text-gray-700">1801 E March Ln suite a-165, Stockton, CA, 95210, USA</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
                <a href="tel:(209) 955-1800" className="text-secondary font-semibold text-lg hover:text-secondary-dark transition-colors">
                  (209) 955-1800
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span><strong>Monday:</strong></span>
                    <span>9:30 am - 6:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Tuesday:</strong></span>
                    <span>9:30 am - 6:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Wednesday:</strong></span>
                    <span>9:30 am - 5:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Thursday:</strong></span>
                    <span>9:30 am - 6:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Friday:</strong></span>
                    <span>9:30 am - 6:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Saturday:</strong></span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Sunday:</strong></span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Request An Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your dental needs..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 