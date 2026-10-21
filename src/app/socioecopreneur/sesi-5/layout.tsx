import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesi 5: Socio & Ecopreneurship",
  description: "Analisis Keuangan dan Model Bisnis Berkelanjutan.",
};

export default function Sesi5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}