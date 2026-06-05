import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Bonding for Smile Repair | NuSmile Dental",
  description:
    "Fix chipped, cracked, or discolored teeth with affordable dental bonding solutions for a natural-looking smile.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
