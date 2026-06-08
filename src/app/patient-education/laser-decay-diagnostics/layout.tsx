import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser Decay Detection | NuSmile Dental",
  description:
    "Detect cavities early with advanced laser decay diagnostics for accurate and preventive dental care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
