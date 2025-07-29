import type { Metadata } from "next";
import { Inter, Montserrat, Hind } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const hind = Hind({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Dental Experts - Your Family's Best Dentist in Fresno, CA",
  description: "Life-Changing Dental Implants. Painless Dental Veneers. Same-Day Emergency Appointments. Interest-Free Financing Available. Free Financing Consults. Se Habla Español.",
  keywords: "dentist, dental implants, veneers, emergency dental, Fresno, CA, family dentist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
