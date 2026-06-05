import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Dental Appointment in Stockton",
  description:
    "Schedule your dental appointment at NuSmile Dental easily online for preventive, cosmetic, and restorative treatments.",
};

export default function AppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
