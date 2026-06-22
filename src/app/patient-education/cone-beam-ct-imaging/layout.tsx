import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cone Beam CT Imaging in Dentistry | NuSmile Dental",
  description:
    "Learn how cone beam CT imaging provides detailed 3D scans for precise diagnosis and treatment planning.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
