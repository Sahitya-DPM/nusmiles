import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All-on-4 Implant Dentures in Stockton",
  description:
    "Restore full smiles with All-on-4 implant dentures designed to improve stability, chewing function, and long-term comfort.",
  alternates: {
    canonical: "https://www.nusmiledentalca.com/all-on-4-implant-dentures",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AllOn4ImplantDenturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
