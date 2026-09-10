import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { buildDentalImplantPageSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Dental Implants in Stockton, CA | NuSmile Dental",
  description:
    "Dental implants in Stockton, CA at NuSmile Dental. Permanent tooth replacement with transparent pricing, experienced implant dentists, and a free consultation.",
  keywords:
    "dental implants Stockton, dental implants in Stockton, Stockton dental implants, implant dentist Stockton",
  alternates: {
    canonical: "https://www.nusmiledentalca.com/dental-implants",
  },
  openGraph: {
    url: "https://www.nusmiledentalca.com/dental-implants",
    title: "Dental Implants in Stockton, CA | NuSmile Dental",
    description:
      "Permanent tooth replacement with dental implants in Stockton, CA. See pricing and book a free consultation at NuSmile Dental.",
    type: "website",
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
  return (
    <>
      <JsonLd data={buildDentalImplantPageSchema()} />
      {children}
    </>
  );
}
