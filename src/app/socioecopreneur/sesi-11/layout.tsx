import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pertemuan 11: Socio & Ecopreneurship",
  description: "Ketepatan Merumuskan Indikator Dampak 3P (People, Planet, Profit) Sederhana.",
};

export default function Pertemuan11Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}