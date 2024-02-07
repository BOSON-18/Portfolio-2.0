import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import {LazyMotion, domAnimation, motion} from 'framer-motion'
import scrollAnimation from "../framer/scrollAnimation";

const Header = ({ location }) => {
  // const location=useLocation();
  
 

  return (
   
    <div  className="flex flex-row justify-between w-full mb-5   fixed top-0 z-10 bg-inherit">
      <motion.div className="gap-6 pt-5 pl-6 " initial={{opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,type:"keyframes"}} >
        <div className="fill-[#ffffff] bg-[#2BD576] h-4 w-4 inline-block rounded-full mx-3">
          {" "}
        </div>
        <div className="fill-[#ffffff] bg-[#2BD576] h-4 w-4 inline-block rounded-full">
          {" "}
        </div>
      </motion.div>
      <motion.div className="p-6" initial={{opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,type:"keyframes"}}>
        <motion.button onClick={()=>scrollAnimation('contactForm')}  className=" bg-[#207448] p-2 rounded-lg flex gap-5 items-center hover:bg-[#28D576] mr-8 text-[16px]">
          Contact Me <IoPersonOutline />
        </motion.button>
      </motion.div>
    </div>
 
  );
};

export default Header;
