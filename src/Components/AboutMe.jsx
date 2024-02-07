import React from "react";
import Education from "./Education";
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import hello from '../assets/hello.lottie'
import {motion} from 'framer-motion'
const AboutMe = () => {
  return (
    <motion.div  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8,delay:0.1}} className="flex flex-col  text-xl p-5 gap-5 ">
      <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:100,x:0}} transition={{duration:0.8,delay:0.01}}  className="text-4xl font-semibold font-sans">About Me</motion.div>
      <div className="flex bg-[#1c1b23] justify-between p-8 rounded-xl">
      <motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:0.4,delay:0.01}} className="text-pretty font-thin leading-[36px] mt-4 mx-auto lg:mx-0 w-[90%]   p-1  rounded-xl"> 
      I, am a skilled web developer with a unique blend of coding expertise and
      aesthetic sensibility. My passion for technology drives me to continuously
      expand my skill set, and I am an enthusiast learning cutting-edge editing
      software like Premiere Pro and Lightroom. This dedication to learning
      allows me to stay at the forefront of web development trends. My goal is
      to create digital experiences that are not only functional and
      user-friendly, but also visually compelling. As I continue to grow and
      develop my skills, I look forward to the opportunities that lie ahead.
      </motion.div>
      <motion.div  initial={{x:100}} whileInView={{x:0}} transition={{duration:0.4,delay:0.01}} className="w-[300px]">

      <DotLottiePlayer
        src={hello}
        autoplay
        loop
        
      >
        
      </DotLottiePlayer>
      </motion.div>
      </div>
      <div>
        {/* <div>
            <Education/>
        </div> */}

      </div>
    </motion.div>
  );
};

export default AboutMe;
