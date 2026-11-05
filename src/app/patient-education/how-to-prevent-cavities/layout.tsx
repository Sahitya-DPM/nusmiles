import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tips to Prevent Cavities | NuSmile Dental",
  description:
    "Discover simple ways to prevent cavities with proper oral hygiene, diet, and regular dental visits.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
