import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Dental X-Rays | NuSmile Dental",
  description:
    "Explore the benefits of digital X-rays for safer, faster, and more accurate dental diagnosis.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
