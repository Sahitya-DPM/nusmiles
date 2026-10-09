import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smile Gallery | NuSmile Dental Results",
  description:
    "View real patient smile transformations from NuSmile Dental showcasing cosmetic, restorative, and implant dentistry results.",
};

export default function SmileGalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
