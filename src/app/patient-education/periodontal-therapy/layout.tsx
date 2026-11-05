import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Periodontal Therapy for Gum Health | NuSmile Dental",
  description:
    "Treat gum disease effectively with periodontal therapy to restore healthy gums and protect your smile.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
