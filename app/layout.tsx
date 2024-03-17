import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polyp Detection",
  description: "we're committed to advancing healthcare through innovation and excellence. With Polyp Detection with Poly v5, we strive to empower healthcare professionals with cutting-edge tools to improve patient care and outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{backgroundColor: 'black', scrollbarWidth: 'none', scrollBehavior: 'smooth', userSelect: 'none'}}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
