import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Dental Technology | NuSmile Dental",
  description:
    "Discover modern dental technology used to enhance accuracy, comfort, and treatment outcomes at NuSmile Dental Care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
