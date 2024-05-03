import Image from "next/image";
import { TopHello } from "./components/TopPage/TopHello";


export default function Home() {
  return (
    <>
      <div className="content">
        <TopHello />
      </div>
    </>
  )
}