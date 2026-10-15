import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'All-on-X Dental Implants in Stockton, CA | Nu Smile Dental',
    description:
      'Replace a full arch of missing teeth with All-on-X dental implants in Stockton, CA. Meet Dr. Rujul G. Parikh, DDS at Nu Smile Dental today.',
  alternates: {
    canonical: "https://www.nusmiledentalca.com/all-on-x-dental-implants",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AllOn4DentalImplantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
