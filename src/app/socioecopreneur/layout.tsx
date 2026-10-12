import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socio & Ecopreneurship",
  description: "Mengubah Paradigma Bisnis dengan Socio & Ecopreneurship",
};

export default function SocioEcopreneurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
