import React, { useState } from "react";
import { TbTriangleFilled } from "react-icons/tb";

const PlantPicks = () => {
    const handleToggle = () => {
        console.log("Toggled");
    };
  return (
    <div className="w-full max-w-[960px] h-auto flex flex-col  bg-[#212121] justify-start items-start py-10 px-10 gap-8 my-10 rounded-md ">
      <div className="w-full flex justify-start items-center text-5xl font-medium ">
        Personalized Plant Picks
      </div>
      <div className=" flex flex-col gap-4 justify-center items-start">
        <div onClick={handleToggle} className=" w-full  flex justify-start gap-4 items-start ">
          <TbTriangleFilled size={20} className=" rotate-90" />
          <h4>Choose from a wide selection</h4>
        </div>
        <div className=" w-full  flex justify-start gap-4 items-start ">
          <TbTriangleFilled size={20} className=" rotate-90" />
          <h4>Specify your needs</h4>
        </div>
        <div className=" w-full  flex justify-start gap-4 items-start ">
          <TbTriangleFilled size={20} className=" rotate-90" />
          <h4>Enjoy expert guidance</h4>
        </div>
      </div>
    </div>
  );
};

export default PlantPicks;
