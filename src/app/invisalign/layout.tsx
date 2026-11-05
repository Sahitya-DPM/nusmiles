import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invisalign Clear Aligners in Stockton",
  description:
    "Straighten teeth discreetly with Invisalign clear aligners designed for comfort, convenience, and effective smile alignment.",
};

export default function InvisalignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
