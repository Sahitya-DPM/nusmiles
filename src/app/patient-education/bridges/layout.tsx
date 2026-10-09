import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Bridges for Missing Teeth | NuSmile Dental",
  description:
    "Replace missing teeth with durable dental bridges that restore function, appearance, and oral health.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
