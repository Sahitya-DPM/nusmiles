import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "All-on-4 Dental Implants FAQs Stockton",
    description: "Read common questions and answers about All-on-4 dental implants including procedure details, benefits, and recovery expectations.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
