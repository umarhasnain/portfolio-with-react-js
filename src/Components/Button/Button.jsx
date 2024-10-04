import React from "react";
import { IoMdDownload } from "react-icons/io";

const Button = () => {
  return (
    <div className="">
    <a href="https://drive.google.com/file/d/1QHJZ4-F6po0IzyLiWT4Xq41GKlHVHbHD/view?usp=drive_link" target="blank">
    <button className=" flex justify-center items-center gap-2 h-8 w-32 bg-black text-white	text-lg rounded-md">
        Resume <IoMdDownload />
      </button>
    </a>
    </div>
  );
};

export default Button;
