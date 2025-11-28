import type { Metadata } from "next";

import "./globals.css";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { AuthProvider } from "../contexts/AuthContext";



export const metadata: Metadata = {
  title: "Dental Experts - Your Family's Best Dentist in Fresno, CA",
  description: "Life-Changing Dental Implants. Painless Dental Veneers. Same-Day Emergency Appointments. Interest-Free Financing Available. Free Financing Consults. Se Habla EspaÃ±ol.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="font-sans overflow-x-hidden">
        <AuthProvider>
          {children}
          <ContactSection />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}