import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tooth-Colored Dental Fillings | NuSmile Dental",
  description:
    "Repair cavities with natural-looking dental fillings that restore strength and protect your teeth from further decay.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
