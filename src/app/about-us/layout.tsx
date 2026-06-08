import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NuSmile Dental | Stockton Team",
  description:
    "Learn about NuSmile Dental’s philosophy, patient-focused approach, and commitment to modern and comfortable dentistry.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
