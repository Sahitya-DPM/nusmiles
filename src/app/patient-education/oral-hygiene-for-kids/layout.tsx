import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oral Hygiene Tips for Kids | NuSmile Dental",
  description:
    "Help your child build healthy habits with simple oral hygiene tips designed for kids' dental care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
