import React from "react";
import OCards from "./OCards";

const Occasions = () => {
  return (
    <div className="w-full max-w-[840px] flex flex-col  justify-start items-start py-10 gap-8 ">
      <div className="w-full flex justify-start  items-center text-5xl ">
        Celebrate with Nature
      </div>
      <div className="w-full grid grid-flow-row grid-cols-2 gap-4 justify-start  items-center">
        <OCards
          index={1}
          title="Birthdays"
          description={
            "Mark milestones with vibrant plants that symbolize growth and new beginnings."
          }
        />
        <OCards
          index={2}
          title="Anniversaries"
          description={
            "Celebrate love and commitment with a thoughtful plant that represents enduring beauty."
          }
        />
        <OCards
          index={3}
          title="Holidays"
          description={
            "Spread cheer and festive joy with seasonal plants that bring a touch of nature indoors."
          }
        />
        <OCards
          index={4}
          title="Special Occasions"
          description={
            "Show appreciation and gratitude with a personalized plant gift that speaks volumes."
          }
        />
      </div>
    </div>
  );
};

export default Occasions;
