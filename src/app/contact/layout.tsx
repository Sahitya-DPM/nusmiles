import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NuSmile Dental | Stockton Dentist",
  description:
    "Contact NuSmile Dental to schedule visits, ask questions, or learn more about dental treatment options and patient care services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
