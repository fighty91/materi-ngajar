import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesi 6: Socio & Ecopreneurship",
  description: "Social Business Model Canvas — Bagian 1.",
};

export default function Sesi6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}