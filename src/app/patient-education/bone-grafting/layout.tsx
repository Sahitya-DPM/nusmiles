import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bone Grafting for Dental Implants | NuSmile Dental",
  description:
    "Prepare your jaw for dental implants with bone grafting procedures that rebuild bone structure effectively.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
