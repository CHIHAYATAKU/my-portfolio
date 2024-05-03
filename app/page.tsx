import Image from "next/image";
import { TopHello } from "./components/TopPage/TopHello";
import { TopAboutMe } from "./components/TopPage/TopAboutMe";
import { TopUnivAndRobocon } from "./components/TopPage/TopUnivAndRobocon";


export default function Home() {
  return (
    <>
      <div className="content">
        <TopHello />
        <TopAboutMe />
        <TopUnivAndRobocon />
      </div>
    </>
  )
}