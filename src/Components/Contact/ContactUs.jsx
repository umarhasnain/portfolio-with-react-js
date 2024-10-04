import React from "react";
import contactData from "../../utils/constant/contact";
import { FaFacebook, FaGithub, FaLinkedin ,FaInstagram} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import { CgMail } from "react-icons/cg";


const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-center flex-wrap p-12">
        <div className="flex flex-col w-96">
          <input
            className="h-8 w-72 border-2 rounded m-2 p-2"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-8 w-72 border-2 rounded m-2 p-2"
            type="text"
            placeholder="Email"
          />
          <input
            className="h-8 w-72 border-2 rounded m-2 p-2"
            type="text"
            placeholder="Your Website (If exists)"
          />
          <input
            className="h-20 w-72 border-2 rounded m-2 p-2"
            type="text"
            placeholder="How Can I Help You??"
          />
         
         <div className=" flex gap-4 items-center mt-2 ">
         <button className='h-8 w-24 bg-black text-white rounded m-2'>Get in Touch</button>
         
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
         <a href="https://www.instagram.com/umarhasnain078/" className="h-6 w-6 border-2 rounded text-center p-0.5">
           {""}
           
         <FaInstagram />
         </a>
       
        
       </div>
        </div>

        <div className="w-96">
          
          <h1 className="font-bold text-3xl w-72 pt-2 pb-2">{contactData.tittle}</h1>
          <p>{contactData.discription}</p>
<div className="flex items-center gap-2">
<a href="https://www.instagram.com/umarhasnain078/" className="h-6 w-6 border-2 rounded text-center p-0.5">
           {""}
           
         <CgMail />
         </a>
<h5 className="font-bold mt-2 mb-2">{contactData.email}</h5>


</div>
<div className="flex items-center gap-2">
<FaPhone/>
<h5 className="font-bold">{contactData.number}</h5>
</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
