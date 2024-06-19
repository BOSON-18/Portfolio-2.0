import React from "react";
import cover from "../assets/cover.jpeg";
import profile from "../assets/profilePic.jpg";
import { SlSocialInstagram } from "react-icons/sl";
import Cards from "./Projects/Cards";
import TechCards from "./TechStack/Cards";
import ContactUs from "./Form/ContactUs";
import AboutMe from "./AboutMe";
import Education from "./Education";
import resume from '../assets/Resume.pdf'
import { GoDownload } from "react-icons/go";
import {motion} from 'framer-motion'

const Body = () => {
  return (
    <motion.div initial={{size:0}} animate={{size:1}} transition={{duration:0.5,delay:0.8}} className=" overflow-hidden bg-[#14131A] scroll-smooth max-sm:w-screen max-sm:mx-auto">

      {/* Section 0 */}
     
      {/* Section 1 */}
      <section id="startPoint" className="max-w-full max-sm:w-screen ">
      <motion.section initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8,delay:0.1}} className="w-full max-sm:w-screen relative flex items-center justify-around" >
        <div className="border-1  blur-sm max-sm:w-screen flex items-center justify-center mx-auto ">
          <img
            src={cover}
            className=" h-[280px] p-10  object-fill w-screen max-sm:w-screen  "
          
            alt="cover"
          ></img>
        </div>
        <div className=" absolute  w-full   flex flex-row gap-x-[500px] items-center justify-around  ">
          {/* Initials */}
          <div className="flex flex-row  items-center gap-9">
            {/* img */}
            <div>
              <img
                src={profile}
                alt="profilePic"
                className="rounded-full border-white border-4 w-[130px] max-sm:hidden"
              />
            </div>
            {/* Info */}
            <div className="flex flex-col ">
              <h1 className="text-3xl font-bold max-sm:hidden">Deeshank Batra</h1>
              <h2 className="font-sans text-sm max-sm:hidden">@clumsyshots_</h2>
            </div>
          </div>

          {/* Follow me  */}
          <div className="mx-auto">
            <a href={resume} download >
            <button className="flex flex-row justify-around items-center gap-3 font-semibold bg-[#1c1b23] text-[#8b8a91] py-2 px-4 rounded-md text-xs">
              Download Resume
              {" "}
              <span className="text-xl font-bold">
                <GoDownload/>
              </span>
            </button>
            </a>
          </div>
        </div>
      </motion.section>
      </section>

      <section id="info" className="mx-auto">
        <AboutMe/>
        <Education/>
      </section>

      {/* Section2  */}

      <section id="snippet" className=" w-[90%] -mt-10 p-5">
        <motion.div initial={{x:200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:"keyframes",duration:0.8}}>
          <div>
            <h1 className="text-4xl font-semibold">Projects</h1>
          </div>
          <div>
            <Cards />
          </div>
        </motion.div>
      </section>

      {/* Section 3 */}

      <section id="techStack" className="mt-2 w-[90%]  p-5">
        <motion.div initial={{x:200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:"keyframes",duration:0.8}}>
          <TechCards />
        </motion.div >
      </section>

      {/* Form */}
      <section id="contactForm">
        <ContactUs />
      </section>
    </motion.div>
  );
};

export default Body;
