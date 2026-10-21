import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesi 3: Socio & Ecopreneurship",
  description: "Pemetaan Masalah Sosial, Pemberdayaan Komunitas (People), dan Inklusi Ekonomi Lokal Papua.",
};

export default function Sesi3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}