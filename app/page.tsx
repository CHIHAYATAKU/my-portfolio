import Image from "next/image";
import { TopHello } from "./_components/TopPage/TopHello";
import { TopAboutMe } from "./_components/TopPage/TopAboutMe";
import { TopUnivAndRobocon } from "./_components/TopPage/TopUnivAndRobocon";
import { TopProducts } from "./_components/TopPage/TopProducts";
import { TopPrivate } from "./_components/TopPage/TopPrivate";

export default function Home() {
  return (
    <>
      <div className="content">
        <TopHello />
        <TopAboutMe />
        <TopUnivAndRobocon />
        <TopProducts />
        <TopPrivate />
      </div>
    </>
  )
}