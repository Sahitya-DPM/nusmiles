'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 gap-2">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Link href="/" className="flex items-center">
              {/* Logo Image */}
              <div className="relative w-28 h-14 sm:w-40 sm:h-20">
                <Image
                  src="https://cdcssl.ibsrv.net/ibimg/smb/218x100_80/webmgr/0t/1/w/64b6d9599db5c_nusmilelogo.png.webp?ab8c818672eef3a981e2d0a2dbd11bd4"
                  alt="Nusmiles Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
                  <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
          
          {/* About with Dropdown */}
          <div className="relative group">
            <Link 
              href="/about-us"
              className="text-gray-700 hover:text-primary transition-colors flex items-center"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              About
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
                          {/* About Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 transition-all duration-200 ${isAboutOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <Link href="/about-us" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                  About Us
                </Link>
                <Link href="/dental-staff" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                  Meet Our Doctors
                </Link>
                <Link href="/office" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                  Office Gallery
                </Link>
                <Link href="/smile-gallery" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                  Smile Gallery
                </Link>
                <Link href="/testimonials" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                  Testimonials
                </Link>
              </div>
          </div>
          
          {/* Services with Dropdown */}
          <div className="relative group">
            <Link 
              href="/dental-services"
              className="text-gray-700 hover:text-primary transition-colors flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/general-dentistry" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                General Dentistry
              </Link>
              <Link href="/dental-implants" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                Dental Implants
              </Link>
              <Link href="/all-on-4-implant-dentures" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                All-on-4® Implant Dentures
              </Link>
              <Link href="/invisalign" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                Invisalign
              </Link>
              <Link href="/platelet-rich-fibrin-therapy-prf" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                Platelet Rich Fibrin Therapy
              </Link>
            </div>
          </div>
          
          <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
          
          {/* Resources with Dropdown */}
          <div className="relative group">
            <Link 
              href="/resources"
              className="text-gray-700 hover:text-primary transition-colors flex items-center"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              Resources
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {/* Resources Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-200 ${isResourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <Link href="/patient-education" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                Patient Education
              </Link>
            </div>
          </div>
          
          <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
        </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-sm">
              <p className="text-accent">Call us today</p>
              <a href="tel:(209) 955-1800" className="font-semibold text-primary hover:text-primary-dark transition-colors">
                (209) 955-1800
              </a>
            </div>
            <Link href="/appointment" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center flex-shrink-0">
            <button
              className="flex items-center justify-center text-black hover:text-primary p-2 focus:outline-none transition-none"
              style={{ width: '9rem' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary transition-colors py-2 px-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile About Section */}
              <div>
                <button 
                  className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between w-full py-2 px-2 hover:bg-gray-50 rounded"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  <span>About</span>
                  <svg className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isAboutOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary pl-3">
                    <Link 
                      href="/about-us" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/dental-staff" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Meet Our Doctors
                    </Link>
                    <Link 
                      href="/office" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Office Gallery
                    </Link>
                    <Link 
                      href="/smile-gallery" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Smile Gallery
                    </Link>
                    <Link 
                      href="/testimonials" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Testimonials
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Services Section */}
              <div>
                <button 
                  className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between w-full py-2 px-2 hover:bg-gray-50 rounded"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary pl-3">
                    <Link 
                      href="/dental-services" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Services
                    </Link>
                    <Link 
                      href="/general-dentistry" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      General Dentistry
                    </Link>
                    <Link 
                      href="/dental-implants" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dental Implants
                    </Link>
                    <Link 
                      href="/all-on-4-implant-dentures" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All-on-4® Implant Dentures
                    </Link>
                    <Link 
                      href="/invisalign" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Invisalign
                    </Link>
                    <Link 
                      href="/platelet-rich-fibrin-therapy-prf" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Platelet Rich Fibrin Therapy
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-primary transition-colors py-2 px-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              
              {/* Mobile Resources Section */}
              <div>
                <button 
                  className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between w-full py-2 px-2 hover:bg-gray-50 rounded"
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                  <span>Resources</span>
                  <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isResourcesOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary pl-3">
                    <Link 
                      href="/resources" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Resources
                    </Link>
                    <Link 
                      href="/patient-education" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Patient Education
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-primary transition-colors py-2 px-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <p className="text-sm text-accent mb-1">Call us today</p>
                <a 
                  href="tel:(209) 955-1800" 
                  className="block font-semibold text-primary hover:text-primary-dark transition-colors mb-3 text-lg"
                >
                  (209) 955-1800
                </a>
                <Link 
                  href="/appointment" 
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors w-full block text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 