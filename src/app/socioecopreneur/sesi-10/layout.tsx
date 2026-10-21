import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesi 10: Socio & Ecopreneurship",
  description: "Ketepatan Merancang Strategi Komunikasi dan Pemasaran Edukatif Ramah Lingkungan.",
};

export default function Sesi10Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}