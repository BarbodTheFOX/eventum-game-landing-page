import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVENTUM GAME - مسیر ۲۱ روزه",
  description: "ایونتوم گیم؛ مسیر ۲۱ روزه شناخت، حرکت و رشد",
  icons: {
    icon: "/images/brand/eventum-sign.png",
    shortcut: "/images/brand/eventum-sign.png",
    apple: "/images/brand/eventum-sign.png",
  },
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
