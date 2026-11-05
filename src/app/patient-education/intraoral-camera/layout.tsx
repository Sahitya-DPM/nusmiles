import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intraoral Camera in Dentistry | NuSmile Dental",
  description:
    "See how intraoral cameras improve diagnosis by providing clear images of your teeth and gums.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
