import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefits of Mouthwash for Oral Care | NuSmile Dental",
  description:
    "Learn how mouthwash supports oral hygiene by reducing bacteria, freshening breath, and protecting teeth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
