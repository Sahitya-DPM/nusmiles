import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choosing the Right Toothpaste | NuSmile Dental",
  description:
    "Find out how to choose the best toothpaste for your dental needs and maintain optimal oral hygiene.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
