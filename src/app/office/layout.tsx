import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NuSmile Dental Office Information Stockton",
  description:
    "Find office details, directions, hours, and patient information for visiting NuSmile Dental in Stockton comfortably.",
};

export default function OfficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
