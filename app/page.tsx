import Image from "next/image";
import { TopHello } from "./components/TopPage/TopHello";
import { TopAboutMe } from "./components/TopPage/TopAboutMe";


export default function Home() {
  return (
    <>
      <div className="content">
        <TopHello />
        <TopAboutMe />
      </div>
    </>
  )
}