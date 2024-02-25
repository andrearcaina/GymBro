import { HomeText, GenerateRoadMap } from "@/components";
import Image from "next/image";
import Roadmap from '../../public/roadmapW.png';

export default function Home() {
  return (
    <main>
      <div className="flex justify-around items-center text-center my-20">
          <Image className="rotate-45"src={Roadmap} width={500}alt="roadmap.png" />
        <HomeText />
      </div>
      <center><GenerateRoadMap/></center>
    </main>
  );
}
