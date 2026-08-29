import "./globals.css";

export const metadata = {
  title: "Doris & Dora International School",
  description: "Doris & Dora International School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
