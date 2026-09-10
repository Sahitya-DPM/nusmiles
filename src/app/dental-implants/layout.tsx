import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Implants in Stockton | NuSmile",
  description:
    "Replace missing teeth with dental implants at NuSmile Dental. Restore function, comfort, and natural appearance with advanced solutions.",
  alternates: {
    canonical: "https://www.nusmiledentalca.com/dental-implants",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DentalImplantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
