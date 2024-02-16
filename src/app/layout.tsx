import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { title } from "process";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "30 Days Of Code",
  description: "30 Days Of Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="synthwave" lang="en">
      <body className={inter.className + " bg-base-300"}>{children}</body>
    </html>
  );
}
