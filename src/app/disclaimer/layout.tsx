import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | NuSmile Dental",
  description:
    "Read the NuSmile Dental website disclaimer regarding the use of information and services on this site.",
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
