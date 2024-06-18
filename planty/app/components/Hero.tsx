import React from "react";
import Image from "next/image";
import HeroImg from "../../public/index";

const Hero = () => {
  return (
    <div className="w-full max-w-[840px] flex  justify-between items-center py-20 ">
      <div className="w-2/3 h-full flex flex-col justify-start items-start gap-6">
        <div className=" w-full text-7xl font-medium">
          Grow Happiness: Plant Subscriptions for Every Occasion
        </div>
        <div className="w-full text-lg font-thin">
          Surprise loved ones with the gift of nature and joy! Our plant
          subscriptions deliver curated green companions for every occasion.
        </div>
        <div className="w-auto rounded-md bg-[#dcff50] text-[#212121] font-semibold px-4 py-2">
          Explore Subscriptions
        </div>
      </div>
      <div>
        <Image
          src="../../public/planty_gero.jpeg"
          alt="Hero"
          width={100}
          height={100}
          className=" w-1/3 h-full overflow-x-clip justify-items-center align-middle"
        />
      </div>
    </div>
  );
};

export default Hero;
