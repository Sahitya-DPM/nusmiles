import type { Metadata } from "next";

import "./globals.css";
import Footer from "../components/Footer";
import { AuthProvider } from "../contexts/AuthContext";



export const metadata: Metadata = {
  metadataBase: new URL('https://www.nusmiledentalca.com'),
  title: {
    default: "NuSmile Dental | Family Dentist in Stockton, CA",
    template: "%s",
  },
  description:
    "NuSmile Dental is a family dentist in Stockton, CA. Visit Dr. Rujul Parikh and our team for general, cosmetic, and restorative care.",
  keywords:
    "NuSmile Dental, NuSmile Dentist, NuSmile Dentistry, NuSmile Family Dentistry, Nusmiles Dental, Stockton dentist, family dentist Stockton",
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
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}