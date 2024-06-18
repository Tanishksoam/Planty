import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className=" w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center item-center">
      <div>
        <h1>Planty</h1>
      </div>
      <Hero />
    </main>
  );
}
