import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pertemuan 4: Socio & Ecopreneurship",
  description: "Ecopreneurship, Keberlanjutan Lingkungan (Planet), dan Kearifan Lokal Konservasi Alam Papua.",
};

export default function Pertemuan4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}