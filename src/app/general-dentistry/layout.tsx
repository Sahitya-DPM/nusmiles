import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Dentistry Services in Stockton",
  description:
    "Maintain healthy teeth and gums with preventive and routine general dentistry services designed for long-term oral wellness.",
};

export default function GeneralDentistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
