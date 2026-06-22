import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Porcelain Veneers for Smile Makeover | NuSmile Dental",
  description:
    "Transform your smile with custom porcelain veneers designed to correct chips, gaps, and discoloration effectively.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
