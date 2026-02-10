import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dental Health Blog | NuSmile Dental Tips",
    description: "Stay informed with the latest dental health tips, news, and treatment information from the experts at NuSmile Dental.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
