import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Teeth Whitening | NuSmile Dental",
  description:
    "Discover safe and effective teeth whitening options to brighten your smile with professional care at NuSmile Dental Care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
