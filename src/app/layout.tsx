import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Materi Mengajar Fay",
  description: "Presentasi materi mengajar di Unika",
  icons: {
    icon: [
      { url: '/logo.png'},
      { url: '/favicon.ico', type: 'image/x-icon' },      // Fallback .ico
    ],
    apple: '/apple-touch-icon.png', 
  },
};

// Ubah di sini: gunakan tipe React.ReactNode langsung atau tipe standar layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}