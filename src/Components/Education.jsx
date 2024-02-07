import React from "react";
import Study from '../assets/Study.lottie';
import { IoLocationOutline } from "react-icons/io5";
import { DotLottiePlayer } from "@dotlottie/react-player";
import IET from "../assets/Iet.png";
import { clubData } from "../data/clubs";
import Card from "./Projects/Card";
import {motion} from "framer-motion"

const Education = () => {
  return (
    <div className="p-5 gap-2 translate-y-[-50px] font-thin">
      <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:100,x:0}} transition={{duration:0.8}} className="text-4xl font-semibold font-sans">Education</motion.div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:100}} className="flex bg-[#1c1b23] justify-between p-12 rounded-xl items-center mt-8">
        {/* Img */}
        <motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:0.4}}>
          <DotLottiePlayer src={Study} autoplay loop className="w-[300px]"></DotLottiePlayer>
        </motion.div>
        {/* Info */}
        <motion.div  initial={{x:100}} whileInView={{x:0}} transition={{duration:0.4}} className="">
          <span className="flex items-center gap-5">
            {/* <img src={IET} alt="logo" className="w-[80px]" /> */}
            <h1 className="text-6xl  font-semibold gap-y-[30px]">IET DAVV</h1>
          </span>
          <h2 className="text-2xl my-3 mt-5 ml-3 font-thin">Bachelors of Engineering in Electronics and Telecommunication</h2>
          <h3 className="ml-3 my-3 text-2xl font-thin ">November 2021 - Present</h3>
          <h3 className="flex flex-row items-center  gap-5 text-2xl ml-3"><IoLocationOutline /> Indore, Madhya Pradesh</h3>
        </motion.div>
      </motion.div>
      <motion.div initial={{x:100}} whileInView={{x:0}} transition={{duration:0.4}}>
      <h1 className="text-4xl  font-semibold mt-12 ">Extra Curricular Activities</h1>
      <div className=" rounded-xl ">
      <div  className="flex flex-row gap-x-4 p-4 mt-5 md:p-0  ">
        {clubData.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-[#1c1b23]  text-zinc-800 rounded-xl  w-[290px] h-[290px]  ">
            <div className=" object-fill mx-auto text-center">
            <img src={item.icon} alt="logo" className=" w-[150px] rounded-full mt-4  object-fill  bg-[#1c1b23] " />
            </div>
           

            <span className="bg-white h-[40%] pt-5 mt-8  w-full rounded-b-xl flex flex-col"><h1 className="text-black text-center  text-2xl font-bold">{item.club}</h1><p className="font-sans text-center  text-lg text-black">
              
            Role:  {item.name}</p></span>
          </div>
        ))}
      </div>
      </div>
      </motion.div>
    </div>
  );
}

export default Education;
