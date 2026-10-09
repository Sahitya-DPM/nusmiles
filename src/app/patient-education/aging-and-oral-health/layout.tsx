import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aging and Oral Health Tips | NuSmile Dental",
  description:
    "Discover how aging affects oral health and tips to maintain healthy teeth and gums as you grow older.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
