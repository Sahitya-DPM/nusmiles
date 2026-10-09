import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Dental Appointment | NuSmile Dental",
  description:
    "Request an appointment with NuSmile Dental in Stockton. Choose a preferred date and service and our scheduling team will confirm your visit.",
  alternates: {
    canonical: "https://www.nusmiledentalca.com/appointment",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
