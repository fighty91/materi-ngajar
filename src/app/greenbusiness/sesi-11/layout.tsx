import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pertemuan 11: Green Business & Sustainable Management",
  description: "Ketepatan Memilih Indikator Ekonomi, Sosial, dan Lingkungan.",
};

export default function Pertemuan11Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}