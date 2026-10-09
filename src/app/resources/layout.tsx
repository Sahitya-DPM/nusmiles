import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Patient Resources | NuSmile Dental",
  description:
    "Access dental forms, insurance details, payment options, and helpful resources to prepare for your dental visit.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
