import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const source = Source_Code_Pro({
  weight: ["200", "700"],
  subsets: ["latin"],
  variable: "--font-source",
});

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
      <body
        className={`${source.variable} max-h-screen overflow-x-hidden font-sans`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
