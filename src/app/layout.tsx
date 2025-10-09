import type { Metadata } from "next";
import "./globals.css";
import VideoBackground from "@/components/VideoBackground";
import Header from "@/components/Header";

export const metadata = { title: "IOTA" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka">
      <body>
        <VideoBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}