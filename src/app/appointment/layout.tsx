import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request Dental Appointment Stockton",
    description: "Schedule your dental visit at NuSmile Dental. Easy online appointment request for checkups, consultations, and treatments.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
