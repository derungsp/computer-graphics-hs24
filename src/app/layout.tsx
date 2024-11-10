import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const ubuntu = Ubuntu({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Computer Graphics HS24 - Pascal Derungs",
  description: "Computer Graphics HS24 - Pascal Derungs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} min-h-screen overflow-x-hidden`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
