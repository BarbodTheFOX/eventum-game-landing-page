import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ایونتوم گیم",
  description: "مسیر ۲۱ روزه شناخت، حرکت و رشد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
