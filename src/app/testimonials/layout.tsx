import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Testimonials | NuSmile Dental",
  description:
    "Read real patient experiences and reviews highlighting dental care quality, comfort, and smile transformation results.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
