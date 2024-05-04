import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./_components/Header";
import Footer from "./_components/Footer";
// import { Suspense } from "react";
import Loading from "./Loading";
import { BgAnimation } from "./_components/BgAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Takuma Portfolio",
  description: "Takuma Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Loading></Loading>
        <div className="wrapper">
          <BgAnimation />
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html >
  );
}
