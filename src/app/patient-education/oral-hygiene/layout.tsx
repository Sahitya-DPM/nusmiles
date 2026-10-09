import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oral Hygiene Tips for Healthy Teeth | NuSmile Dental",
  description:
    "Learn essential oral hygiene practices to maintain strong teeth, healthy gums, and prevent dental problems.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
