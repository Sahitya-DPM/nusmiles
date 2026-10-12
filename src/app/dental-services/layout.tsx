import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Dental Services in Stockton",
  description:
    "Explore comprehensive dental services at NuSmile Dental including preventive, cosmetic, restorative, and implant dentistry in Stockton.",
};

export default function DentalServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
