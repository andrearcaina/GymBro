import { HomeText } from "@/components";
import Image from "next/image";
import Roadmap from '../../public/roadmapW.png';

export default function Home() {
  return (
    <main>
      <div className="flex flex-nowrap text-center">
        <Image src={Roadmap} width={500}alt="roadmap.png" />
        <HomeText />
      </div>
    </main>
  );
}
