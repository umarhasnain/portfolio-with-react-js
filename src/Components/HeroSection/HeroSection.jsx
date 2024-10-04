import React from "react";
import HeroSecData from "../../utils/constant/HeroSection";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const HeroSection = () => {
  console.log(HeroSecData);
  const { tittle, possition, discription } = HeroSecData;

  return (
    <div className="flex flex-row-reverse justify-evenly items-center flex-wrap m-6">
      <div className="w-96">
        <img src="./assets/imgs/boy1.svg" />
      </div>
      {/* Text Section */}
      <div className="w-96 mt-8">
        <h3 className="text-4xl">Hello 👋</h3>
        <h1 className="text-4xl">{tittle}</h1>
        <h2 className="text-3xl bold mt-4 mb-4">{possition}</h2>
        <p>{discription}</p>
        <div className=" flex gap-4 items-center mt-2 ">
         
          <a href="https://github.com/umarhasnain" className="h-6 w-6 border-2 rounded text-center p-0.5">
            {""}
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/umarhasnain/" className="h-6 w-6 border-2 rounded text-center p-0.5">
            {""}
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/umarhasnain078" className="h-6 w-6 border-2 rounded text-center p-0.5">
            {""}
            <FaFacebook />
          </a>
          <a href="https://mail.google.com/umarhasnain045@gmail.com" className="h-6 w-6 border-2 rounded text-center p-0.5">
            {""}
            
          <CgMail />
          </a>
        
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
