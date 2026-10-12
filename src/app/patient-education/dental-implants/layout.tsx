import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Implants for Tooth Replacement | NuSmile Dental",
  description:
    "Restore missing teeth permanently with dental implants that look, feel, and function like natural teeth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
