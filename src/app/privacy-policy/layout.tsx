import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NuSmile Dental",
  description:
    "Read the NuSmile Dental privacy policy to learn how we collect, use, and protect your protected health information.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
