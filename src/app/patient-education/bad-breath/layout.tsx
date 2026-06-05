import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Causes & Treatment of Bad Breath | NuSmile Dental",
  description:
    "Understand the causes of bad breath and effective treatments to maintain fresh breath and oral health.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
