import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Importance of Oral Health | NuSmile Dental",
  description:
    "Learn why maintaining good oral health is essential for overall well-being and disease prevention.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
