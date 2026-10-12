import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pertemuan 3: Socio & Ecopreneurship",
  description: "Pemetaan Masalah Sosial, Pemberdayaan Komunitas (People), dan Inklusi Ekonomi Lokal Papua.",
};

export default function Pertemuan3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}