import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesi 10: Green Business & Sustainable Management",
  description: "Ketepatan Menyusun BMC & Strategi Implementasi",
};

export default function SocioEcopreneurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
