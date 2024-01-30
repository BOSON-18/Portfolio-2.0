import React from "react";
import Education from "./Education";
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import hello from '../assets/hello.lottie'
import {motion} from 'framer-motion'
const AboutMe = () => {
  return (
    <div className="flex flex-col  text-xl p-8 gap-6  ">
      <div className="text-4xl font-semibold font-inter ">About Me</div>
      <div className="flex bg-[#1c1b23] justify-between p-8 rounded-xl">
      <motion.div  initial={{opacity:0}} whileInView={{opacity:1}} className="text-pretty font-inter leading-[36px] mt-4 mx-auto lg:mx-0 w-[90%]   p-1 font-thin rounded-xl"> 
      I, am a skilled web developer with a unique blend of coding expertise and
      aesthetic sensibility. My passion for technology drives me to continuously
      expand my skill set, and I am an enthusiast learning cutting-edge editing
      software like Premiere Pro and Lightroom. This dedication to learning
      allows me to stay at the forefront of web development trends. My goal is
      to create digital experiences that are not only functional and
      user-friendly, but also visually compelling. As I continue to grow and
      develop my skills, I look forward to the opportunities that lie ahead.
      </motion.div>
      <div className="w-[300px]">

      <DotLottiePlayer
        src={hello}
        autoplay
        loop
        
      >
        
      </DotLottiePlayer>
      </div>
      </div>
      <div>
        {/* <div>
            <Education/>
        </div> */}

      </div>
    </div>
  );
};

export default AboutMe;
