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
        <section id="startPoint" className="max-w-[95%] max-sm:w-screen">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex items-center justify-center w-full max-sm:w-screen"
        >
          <div className="relative w-full flex justify-center items-center">
            <img
              src={cover}
              className="h-[280px] w-full object-cover p-10 max-sm:w-screen blur-sm"
              alt="cover"
            />
            <div className="absolute flex flex-col sm:flex-row items-center justify-around gap-6 w-full px-4">
              {/* Initials */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <img
                  src={profile}
                  alt="profilePic"
                  className="rounded-full border-4 border-white w-[130px] hidden sm:block"
                />
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl font-bold">Deeshank Batra</h1>
                  <h2 className="font-sans text-sm">@clumsyshots_</h2>
                </div>
              </div>

              {/* Follow me */}
              <div className="mt-4 sm:mt-0">
                <a href={resume} download>
                  <button className="flex items-center gap-3 font-semibold bg-[#1c1b23] text-[#8b8a91] py-2 px-4 rounded-md text-xs">
                    Download Resume
                    <GoDownload className="text-xl font-bold" />
                  </button>
                </a>
              </div>
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
