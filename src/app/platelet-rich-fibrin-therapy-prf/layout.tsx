import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRF Therapy for Dental Healing Stockton",
  description:
    "Learn how platelet-rich fibrin therapy enhances healing after dental procedures and supports faster recovery at NuSmile Dental.",
};

export default function PrfTherapyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
