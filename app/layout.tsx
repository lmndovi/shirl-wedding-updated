import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" overflow-x-hidden">
      <body className={ebGaramond.className}>{children}</body>
    </html>
  );
}
