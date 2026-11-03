import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pertemuan 15: Socio & Ecopreneurship",
  description: "Kualitas Penyempurnaan Portofolio, Refleksi Etis, dan Kolaborasi Tim.",
};

export default function Pertemuan15Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}