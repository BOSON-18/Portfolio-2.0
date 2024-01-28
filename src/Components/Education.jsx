import React from "react";
import Study from '../assets/Study.lottie'
import { IoLocationOutline } from "react-icons/io5";
import { DotLottiePlayer } from "@dotlottie/react-player";
import IET from "../assets/Iet.png";

function Education() {
  return (
    <div className="  p-8 gap-6 ">
        <div className="text-3xl font-semibold font-sans ">Education</div>
        <div className="flex bg-[#1c1b23] justify-between p-16 rounded-xl items-center mt-8">
            {/* Img */}
            <div>
               <DotLottiePlayer src={Study} autoplay loop className="w-[300px]"></DotLottiePlayer>
            </div>
            {/* Info */}
            <div className="">
              <span className="flex items-center gap-5">
                <img src={IET} alt="logo" className="w-[80px]"/>
                <h1 className="text-6xl underline-offset-1 font-bold gap-y-[30px]">IET DAVV</h1>
                </span>
                <h2 className="text-2xl my-3 mt-5 ml-3">Bachelors of Engineering in Electronics and Telecommunication</h2>
                <h3 className="ml-3 my-3 text-2xl">November 2021 - Present</h3>
                <h3 className="flex flex-row items-center gap-5 text-2xl ml-3"><IoLocationOutline/> Indore,Madhya Pradesh</h3>

                
            </div>
        </div>
            <h1 className="text-4xl underline-offset-1 font-semibold mt-8 ml-5">Extra Curricular Activities</h1>
            <div className="text-white">Part and Lead in various clubs like:</div>
            
    </div>
  );
}

export default Education;
