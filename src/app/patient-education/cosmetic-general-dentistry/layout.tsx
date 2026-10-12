import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmetic & General Dentistry | NuSmile Dental",
  description:
    "Learn about cosmetic and general dentistry services, including smile improvements, restorations, and preventive care at NuSmile Dental Care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
