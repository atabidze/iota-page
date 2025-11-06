import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = { title: "IOTA" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka" style={{scrollBehavior:'smooth'}}>
      <body>
        <Header />
        <div className="relative isolate">
          {children}
        </div>
      </body>
    </html>
  );
}