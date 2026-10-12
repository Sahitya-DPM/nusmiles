import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NuSmile Dental | Stockton Family Dentist",
  description:
    "About NuSmile Dental in Stockton, CA — the official practice page for NuSmile Dentist, NuSmile Dentistry, NuSmile Family Dentistry, and Nusmiles Dental.",
  alternates: {
    canonical: "https://www.nusmiledentalca.com/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
