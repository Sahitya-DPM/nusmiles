import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { buildDentalImplantPageSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Affordable Dental Implants in California | Stockton Pricing",
  description:
    "Looking for cheap dental implants in California? NuSmile Dental in Stockton publishes transparent implant pricing from $5,999, affordable implants packages, and monthly financing.",
  keywords:
    "cheap dental implants in california, affordable implants, dental implants Stockton, dental implant financing, implant dentist Stockton",
  alternates: {
    canonical: "https://www.nusmiledentalca.com/dental-implants",
  },
  openGraph: {
    url: "https://www.nusmiledentalca.com/dental-implants",
    title: "Affordable Dental Implants in California | Stockton Pricing",
    description:
      "Transparent California implant pricing, affordable implants from $5,999, and financing at NuSmile Dental in Stockton. Book a free consultation.",
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
