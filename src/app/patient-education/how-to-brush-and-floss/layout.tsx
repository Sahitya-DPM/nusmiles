import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Brush and Floss Properly | NuSmile Dental",
  description:
    "Master proper brushing and flossing techniques to keep your teeth clean, healthy, and free from plaque.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
