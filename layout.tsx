import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doris & Dora International School | Port Loko City",
  description:
    "Doris and Dora International School in Port Loko City, Sierra Leone — Integrity, Love and Learning.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
