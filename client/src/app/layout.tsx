import type { Metadata } from "next";
import { Lexend, Lexend_Zetta } from "next/font/google";
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["400", "600", "800"],
});
const zetta = Lexend_Zetta({
  subsets: ["latin"],
  variable: "--font-zetta",
  weight: ["200", "300", "400"],
});
import "./globals.css";

export const metadata: Metadata = {
  title: "coLearnify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}