import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Laser Dentistry | NuSmile Dental",
  description:
    "Experience precise, comfortable treatments with laser dentistry for gum care, decay removal, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
