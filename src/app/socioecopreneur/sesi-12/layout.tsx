import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pertemuan 12: Socio & Ecopreneurship",
  description: "Ketepatan Mengumpulkan Umpan Balik (Feedback) Awal dari Calon Konsumen.",
};

export default function Pertemuan12Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}