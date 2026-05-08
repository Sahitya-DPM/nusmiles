import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Educational Videos | NuSmile Dental",
  description:
    "Watch informative dental videos to understand treatments, procedures, and oral care tips from the experts at NuSmile Dental Care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
