// src/app/greenbusiness/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Business & Sustainable Management | UNIKA Fajar Timur Papua",
  description: "Integrasi Triple Bottom Line, Green Accounting, dan Transisi Bisnis Berkelanjutan.",
};

export default function GreenBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}