import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesi 9: Green Business & Sustainable Management",
  description: "Sustainable Value Proposition & Potensi Lokal",
};

export default function SocioEcopreneurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
