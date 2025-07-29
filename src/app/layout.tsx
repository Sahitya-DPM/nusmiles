import type { Metadata } from "next";

import "./globals.css";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";



export const metadata: Metadata = {
  title: "Dental Experts - Your Family's Best Dentist in Fresno, CA",
  description: "Life-Changing Dental Implants. Painless Dental Veneers. Same-Day Emergency Appointments. Interest-Free Financing Available. Free Financing Consults. Se Habla Español.",
  keywords: "dentist, dental implants, veneers, emergency dental, Fresno, CA, family dentist",
  icons: {
    icon: '/64b6d9599db5c_nusmilelogo.png.webp',
    shortcut: '/64b6d9599db5c_nusmilelogo.png.webp',
    apple: '/64b6d9599db5c_nusmilelogo.png.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
