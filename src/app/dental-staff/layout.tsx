import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Dental Team | NuSmile Dental",
  description:
    "Get to know the caring dental team at NuSmile Dental committed to providing personalized and comfortable dental treatment.",
};

export default function DentalStaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
