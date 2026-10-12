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
  title: "Socio & Ecopreneurship",
  description: "Mengubah Paradigma Bisnis dengan Socio & Ecopreneurship",
  // Konfigurasi favicon di bawah ini:
  icons: {
    icon: [
      // { url: '/assets/logo.svg', type: 'image/svg+xml' }, // SVG Utama
      { url: '/assets/logo.png'},
      { url: '/favicon.ico', type: 'image/x-icon' },      // Fallback .ico
    ],
    // Opsional: Jika Anda juga punya icon khusus untuk Apple/iOS
    apple: '/assets/apple-touch-icon.png', 
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
