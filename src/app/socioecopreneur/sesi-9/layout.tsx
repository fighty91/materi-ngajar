import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesi 9: Socio & Ecopreneurship",
  description: "Ketepatan Merancang Sampel, Sketsa, dan Maket Produk Awal (Minimum Viable Product / MVP).",
};

export default function Sesi9Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}