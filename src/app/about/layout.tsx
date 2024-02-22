import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title:"About Page",
    description:"Apenas a descrição da página about",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }