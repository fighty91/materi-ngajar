import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pertemuan 5: Socio & Ecopreneurship",
  description: "Analisis Keuangan dan Model Bisnis Berkelanjutan.",
};

export default function Pertemuan5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}