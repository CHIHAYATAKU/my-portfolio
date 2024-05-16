import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layouts/Header";
import Footer from "./_components/layouts/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from "./Loading";
import { BgAnimation } from "./_components/layouts/BgAnimation";
import { BackToTopButton } from "./_components/layouts/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "宅間千隼のポートフォリオサイト",
  description: "Takuma Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Loading />
        <div className="wrapper">
          <BgAnimation />
          <Header />
          <div id="pagetop"></div>
          {children}
        </div>
        <BackToTopButton />
        <Footer />
      </body>
    </html >
  );
}
