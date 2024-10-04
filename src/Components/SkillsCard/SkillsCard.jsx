import React from "react";
import skillsData from "../../utils/constant/skills";
import HeroSecData from "../../utils/constant/HeroSection";

const SkillsCard = () => {
  const { img, tittle } = skillsData;
  return (
    <div >
      <h1 className="text-center font-bold text-2xl">SKILLS</h1>
      <div className="flex justify-center items-center flex-wrap  m-8 p-2 pl-20 pr-20 ">
      {skillsData.map((item, i) => {
        return (
          <div
            key={i}
            className="flex justify-evenly items-center flex-col flex-wrap shadow-md border-2 w-36 h-32 m-4 hover:rotate-3 hover:bg-gray-100"
          >
          
              <img className="w-12 h-12" src={item.img} />
              <h5>{item.tittle}</h5>
           
          </div>
        );
      })}
      </div>

      {/* {HeroSecData} */}
    </div>
  );
};

export default SkillsCard;
