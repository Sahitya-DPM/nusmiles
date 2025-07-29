'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              {/* Logo Image */}
              <div className="relative w-40 h-20">
                <Image
                  src="https://cdcssl.ibsrv.net/ibimg/smb/218x100_80/webmgr/0t/1/w/64b6d9599db5c_nusmilelogo.png.webp?ab8c818672eef3a981e2d0a2dbd11bd4"
                  alt="Nusmiles Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-sm">
              <p className="text-accent">Call us today</p>
              <a href="tel:(209) 955-1800" className="font-semibold text-primary hover:text-primary-dark transition-colors">
                (209) 955-1800
              </a>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              Book An Appointment
            </button>
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
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <div className="pt-4 border-t">
                <p className="text-sm text-accent">Call us today</p>
                <a href="tel:(209) 955-1800" className="font-semibold text-primary hover:text-primary-dark transition-colors">
                  (209) 955-1800
                </a>
                <button className="mt-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors w-full">
                  Book An Appointment
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 