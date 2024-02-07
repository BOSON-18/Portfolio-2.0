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
    <motion.div initial={{size:0}} animate={{size:1}} transition={{duration:0.5,delay:0.6}} className=" overflow-hidden bg-[#14131A] scroll-smooth">

      {/* Section 0 */}
     
      {/* Section 1 */}
      <motion.section initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8,delay:0.1}}>
        <div className="border-1 relative">
          <img
            src={cover}
            className="w-full h-[160px]  object-fill bg-blur backdrop-filter backdrop-blur-md"
            style={{ backdropFilter: "backdrop-blur-md" }}
            alt="cover"
          ></img>
        </div>
        <div className=" absolute translate-y-[-140px] flex flex-row gap-x-[500px] items-center ml-[60px] ">
          {/* Initials */}
          <div className="flex flex-row  items-center gap-9">
            {/* img */}
            <div>
              <img
                src={profile}
                alt="profilePic"
                className="rounded-full border-white border-4 w-[130px]"
              />
            </div>
            {/* Info */}
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-bold">Deeshank Batra</h1>
              <h2 className="font-sans text-sm">@clumsyshots_</h2>
            </div>
          </div>

          {/* Follow me  */}
          <div>
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

      <section className="">
        <AboutMe/>
        <Education/>
      </section>

      {/* Section2  */}

      <section className=" w-[90%] -mt-10 p-5">
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

      <section className="mt-2 w-[90%]  p-5">
        <motion.div initial={{x:200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:"keyframes",duration:0.8}}>
          <TechCards />
        </motion.div >
      </section>

      {/* Form */}
      <section>
        <ContactUs />
      </section>
    </motion.div>
  );
};

export default Body;
