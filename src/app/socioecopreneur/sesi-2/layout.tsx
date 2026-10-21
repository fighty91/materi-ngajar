import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesi 2: Socio & Ecopreneurship",
  description: "Memetakan Isu Material (Planet), Eksternalitas Negatif, dan Inovasi Bio-Product di Papua.",
};

export default function Sesi2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}