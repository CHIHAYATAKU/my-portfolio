import Image from "next/image";
// import { TopHello } from "./_features/TopPage/components/TopHello";
// import { TopAboutMe } from "./_features/TopPage/components/TopAboutMe";
// import { TopUnivAndRobocon } from "./_features/TopPage/components/TopUnivAndRobocon";
// import { TopProducts } from "./_features/TopPage/components/TopProducts";
// import { TopPrivate } from "./_features/TopPage/components/TopPrivate";
import * as TopPage from "./_features/TopPage/index";

export default function Home() {
  return (
    <>
      <div className="content">
        <TopPage.TopHello />
        <TopPage.TopAboutMe />
        <TopPage.TopUnivAndRobocon />
        <TopPage.TopProducts />
        <TopPage.TopSkills />
        <TopPage.TopPrivate />
      </div>
    </>
  )
}