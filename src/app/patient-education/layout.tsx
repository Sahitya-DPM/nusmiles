import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dental Patient Education | NuSmile",
    description: "Access helpful dental education resources covering oral care tips, treatment information, and preventive guidance for patients.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
