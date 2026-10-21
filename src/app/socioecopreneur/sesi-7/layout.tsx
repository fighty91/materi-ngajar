import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesi 7: Socio & Ecopreneurship",
  description: "Social Business Model Canvas (SBMC) — Bagian 2 (Elemen Keuangan Sederhana).",
};

export default function Sesi7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}