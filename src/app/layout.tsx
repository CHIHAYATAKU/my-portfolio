import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";
import { Footer } from "./components/layouts/footer/Footer";
import { About } from "./components/layouts/About/About";
import { ETRobocon } from "./components/layouts/ETRobocon/ETRobocon";
import { Home } from "./components/layouts/Home/Home";
import { Private } from "./components/layouts/Private/Private";
import { Products } from "./components/layouts/Products/Products";
import { Univ } from "./components/layouts/Univ/Univ";

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
        <Header />
        <Footer />
        <About />
        <ETRobocon />
        <Home />
        <Private />
        <Products />
        <Univ />

        {children}</body>
    </html>
  );
}
