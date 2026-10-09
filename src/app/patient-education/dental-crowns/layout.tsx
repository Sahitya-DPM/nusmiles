import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Crowns for Tooth Repair | NuSmile Dental",
  description:
    "Learn how dental crowns restore damaged teeth, improve strength, and enhance your smile with long-lasting results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
