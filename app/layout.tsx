import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";

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
        <div className="wrapper">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
