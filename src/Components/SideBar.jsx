import React from "react";
import { socialArray } from "../data/socials";
import { sideBarArray } from "../data/SideBarData";
import { motion } from "framer-motion";
import scrollAnimation from "../framer/scrollAnimation";

const SideBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="flex  sticky left-5 ml-5 top-2 h-[90vh]  flex-col p-5 bg-[#1c1b23] border border-transparent border-[#8b8a91] text-primary rounded-lg z-20 max-sm:hidden lg:w-[264px]"
    >
      {/* Section 1: Sidebar Navigation */}
      <div className="flex-col mt-auto mb-2">
        <motion.ul
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.01 }}
          className=" gapy-y-6"
        >
          {sideBarArray.map((item, index) => (
            <a href={item?.link} key={index}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={() => scrollAnimation(item?.id)}
                className="flex items-center font-sans text-[#8b8a91] text-sm m-5"
              >
                <span className="mr-4">{item.icon}</span>
                {item.label}
              </motion.div>
            </a>
          ))}
        </motion.ul>
      </div>

      {/* Section 2: Social Links */}
      <div className="border-t-2 border-[#8b8a91]  pt-6 mb-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.01 }}
          className="m-3 text-2xl font-sans text-[#8b8a91]"
        >
          <h1>Socials</h1>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.01 }}
          className="gap-y-6"
        >
          {socialArray.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.2 }}>
              <a href={item.link}>
                <div className="flex items-center font-sans text-[#8b8a91] text-sm m-5">
                  <span className="mr-4">{item.icon}</span>
                  {item.label}
                </div>
              </a>
            </motion.div>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default SideBar;
