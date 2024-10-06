import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from "./Loading";
import { BgAnimation } from "./components/layouts/BgAnimation";
import { BackToTopButton } from "./components/layouts/BackToTopButton";
import { Suspense } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo/apollo-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "宅間千隼のポートフォリオサイト",
  description: "Takuma Portfolio",
};

import { Teko, DotGothic16, Noto_Sans_JP } from 'next/font/google'

const teko = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-teko',
})

const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dotgothic16',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-notosansjp',
})

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
      <body className={`${inter.className} ${teko.variable} ${dotGothic16.variable} ${notoSansJP.variable} font-sans`}>
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
