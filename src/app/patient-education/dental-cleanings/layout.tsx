import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Dental Cleanings | NuSmile Dental",
  description:
    "Maintain healthy teeth and gums with routine dental cleanings that remove plaque, tartar, and prevent oral health issues.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
