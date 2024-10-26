import type { Metadata } from "next";
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
        <link
          href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&family=DotGothic16&family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans">
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
    </html>
  );
}
