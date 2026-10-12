import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Abrasion for Gentle Decay Removal | NuSmile Dental",
  description:
    "Learn about air abrasion, a drill-free method for removing tooth decay comfortably and efficiently.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
