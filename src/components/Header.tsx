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
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Logo Image */}
              <div className="relative w-40 h-20">
                <Image
                  src="https://cdcssl.ibsrv.net/ibimg/smb/218x100_80/webmgr/0t/1/w/64b6d9599db5c_nusmilelogo.png.webp?ab8c818672eef3a981e2d0a2dbd11bd4"
                  alt="Nusmiles Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
                  <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
          
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
                className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-200 ${isAboutOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <Link href="/office" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                  Office
                </Link>
                <Link href="/dental-staff" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                  Dental Staff
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
              <Link href="/platelet-rich-fibrin-therapy-prf" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                Platelet Rich Fibrin Therapy
              </Link>
            </div>
          </div>
          
          <Link href="/invisalign" className="text-gray-700 hover:text-primary transition-colors">Invisalign</Link>
          
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
              <Link href="/insurance-billing" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                Insurance & Billing
              </Link>
              <Link href="/before-after" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                Before & After
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
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              
              {/* Mobile About Section */}
              <div>
                <Link 
                  href="/about-us"
                  className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between w-full"
                >
                  About
                </Link>
                <button 
                  className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between w-full mt-2"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  About Menu
                  <svg className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isAboutOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                    <Link href="/office" className="block text-gray-600 hover:text-primary transition-colors">
                      Office
                    </Link>
                    <Link href="/dental-staff" className="block text-gray-600 hover:text-primary transition-colors">
                      Dental Staff
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Services Section */}
              <div>
                <Link 
                  href="/dental-services"
                  className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between w-full"
                >
                  Services
                </Link>
                <button 
                  className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between w-full mt-2"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services Menu
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                    <Link href="/general-dentistry" className="block text-gray-600 hover:text-primary transition-colors">
                      General Dentistry
                    </Link>
                    <Link href="/dental-implants" className="block text-gray-600 hover:text-primary transition-colors">
                      Dental Implants
                    </Link>
                    <Link href="/all-on-4-implant-dentures" className="block text-gray-600 hover:text-primary transition-colors">
                      All-on-4® Implant Dentures
                    </Link>
                    <Link href="/platelet-rich-fibrin-therapy-prf" className="block text-gray-600 hover:text-primary transition-colors">
                      Platelet Rich Fibrin Therapy
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/invisalign" className="text-gray-700 hover:text-primary transition-colors">Invisalign</Link>
              
              <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
              
              {/* Mobile Resources Section */}
              <div>
                <Link 
                  href="/resources"
                  className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between w-full"
                >
                  Resources
                </Link>
                <button 
                  className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between w-full mt-2"
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                  Resources Menu
                  <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isResourcesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                    <Link href="/patient-education" className="block text-gray-600 hover:text-primary transition-colors">
                      Patient Education
                    </Link>
                    <Link href="/insurance-billing" className="block text-gray-600 hover:text-primary transition-colors">
                      Insurance & Billing
                    </Link>
                    <Link href="/before-after" className="block text-gray-600 hover:text-primary transition-colors">
                      Before & After
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
              <div className="pt-4 border-t">
                <p className="text-sm text-accent">Call us today</p>
                <a href="tel:(209) 955-1800" className="font-semibold text-primary hover:text-primary-dark transition-colors">
                  (209) 955-1800
                </a>
                <Link href="/appointment" className="mt-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors w-full block text-center">
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