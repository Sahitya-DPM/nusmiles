import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NuSmile Dental Blog | Oral Health Tips",
  description:
    "Explore the NuSmile Dental blog for oral health tips, dental treatment insights, and preventive care guidance.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
