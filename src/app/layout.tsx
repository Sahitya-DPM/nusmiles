import type { Metadata } from "next";

import "./globals.css";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { AuthProvider } from "../contexts/AuthContext";



export const metadata: Metadata = {
  metadataBase: new URL('https://www.nusmiledentalca.com'),
  title: "NuSmile Dental | Family Dentist in Stockton",
  description: "Visit NuSmile Dental for modern, comfortable dental care in Stockton offering implants, Invisalign, and general dentistry for all ages.",
  keywords: "dentist, dental implants, veneers, emergency dental, Fresno, CA, family dentist",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: [
      'OY7qYQ2lQOQHb8mHVwN439Szytkj0EXjSeAsRh3AdVw', // General
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="font-sans overflow-x-hidden" suppressHydrationWarning>
        <AuthProvider>
          {children}
          <ContactSection />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}