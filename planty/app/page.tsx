import Image from "next/image";
import Hero from "./components/Hero";
import Occasions from "./components/occasions";
import ScubsCard from "./components/ScubsCard";
import PlantPicks from "./components/PlantPicks";

export default function Home() {
  return (
    <main className=" w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center">
      <div className="w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center">
        <Hero />
        <Occasions />
        <ScubsCard />
      </div>
      <div className="w-full h-full bg-[#dfdfdf] text-[#fdfdfd] flex flex-col justify-center items-center">
        <PlantPicks />
      </div>
    </main>
  );
}
