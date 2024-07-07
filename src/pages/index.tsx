import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard title={"abc | def | ghi "} 
      image={"thumbnail.jpg"}
      author={"Rajnish"}
      timestamp={"2 days ago"}
      views={"100k"} />
    </div>
  )
}
