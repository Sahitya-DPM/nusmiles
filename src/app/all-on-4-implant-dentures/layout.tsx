import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "All-on-4 Implant Dentures in Stockton",
    description: "Restore full smiles with All-on-4 implant dentures designed to improve stability, chewing function, and long-term comfort.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
