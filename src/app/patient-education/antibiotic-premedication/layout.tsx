import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antibiotic Premedication Guide | NuSmile Dental",
  description:
    "Understand when antibiotic premedication is needed before dental procedures for safe treatment.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
