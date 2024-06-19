import Image from "next/image";
import Hero from "./components/Hero";
import Occasions from "./components/occasions";
import ScubsCard from "./components/ScubsCard";

export default function Home() {
  return (
    <main className=" w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center">
      <div>
        <h1>Planty</h1>
      </div>
      <Hero />
      <Occasions />
      <ScubsCard />
    </main>
  );
}