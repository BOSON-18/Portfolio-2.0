import React from "react";

import { socialArray } from "../data/socials";
import { sideBarArray } from "../data/SideBarData";
import { Link } from "react-router-dom";

import {motion} from 'framer-motion'
import scrollAnimation from "../framer/scrollAnimation";
const SideBar = () => {

  let i=0;
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:1}}  className="flex  fixed left-5   h-fit w-[16%] flex-col  p-5  bg-[#1c1b23]  border border-transparent  border-[#8b8a91]  text-primary rounded-lg  overflow-y-auto pb-20 md:pb-5 z-20">
      
      
      <div>
        <motion.ul initial={{opacity:0,x:-100}} whileInView={{opacity:100,x:0}} transition={{duration:0.8,delay:0.01}}  className=" ">
        {
          sideBarArray.map((item,index)=>{
            return(
              <a  to={item.link} key={index}>
              <motion.div whileHover={{scale:1.2}} whileTap={()=>scrollAnimation(item?.id)}  className="flex flex-row my-6 items-center font-sans text-[#8b8a91] text-sm  m-5">
                <span className="mr-4 my-2">
                    {item.icon}
                    </span>
                    {item.label}
              </motion.div>
              </a>
            )
          })
        }
        </motion.ul>

      </div>

      {/* Secion 2 */}

      <div className="border-t-2 border-[#8b8a91] ">
      <motion.div initial={{opacity:0,y:-50}} whileInView={{opacity:100,y:0}} transition={{duration:0.8,delay:0.01}}  className="m-3 text-2xl font-sans text-[#8b8a91] ">
        <h1>Socials</h1>
      </motion.div >

        <motion.ul initial={{opacity:0,x:-100}} whileInView={{opacity:100,x:0}} transition={{duration:0.8,delay:0.01}} >
          {
            socialArray.map((item,index)=>{
              return(
                <motion.div whileHover={{scale:1.2}} key={index}>
                  <a href={item.link}>
                  <div className="flex flex-row my-6 items-center font-sans text-[#8b8a91] text-sm m-5">
                    <span className="mr-4 my-2">
                    {item.icon}
                    </span>
                    {item.label}
                  </div>
                  </a>
                </motion.div>
              )
            })
          }
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default SideBar;
