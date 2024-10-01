import React from "react";
import HeroSecData from "../../utils/constant/HeroSection";
// import "./heroSection.css"

const HeroSection = () => {
  console.log(HeroSecData);
  const { tittle, possition, discription } = HeroSecData;

  return (
    <div className="flex flex-row-reverse justify-evenly items-center flex-wrap m-4 p-14">
    
<div className="w-96">
<img  src="./assets/imgs/boy1.svg" />
</div>  
      {/* Text Section */}
      <div className="w-2/6">
        <h1 className="text-4xl">{tittle}</h1>
        <h2 className="text-3xl bold mt-4 mb-4">{possition}</h2>
        <p>{discription}</p>
      </div>
    </div>
  );
};

export default HeroSection;
