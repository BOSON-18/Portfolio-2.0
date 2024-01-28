import React from "react";

import { socialArray } from "../data/socials";
import { sideBarArray } from "../data/SideBarData";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex  fixed left-0   h-fit w-[18%] flex-col  p-5 ml-[20px] bg-[#1c1b23]  border border-transparent  border-[#8b8a91]  text-primary rounded-lg  overflow-y-auto pb-20 md:pb-5 z-20">
      
      
      <div>
        <ul className=" ">
        {
          sideBarArray.map((item,index)=>{
            return(
              <a to={item.link}>
              <div className="flex flex-row my-8 items-center font-sans text-[#8b8a91] text-sm  m-5">
                <span className="mr-4 my-2">
                    {item.icon}
                    </span>
                    {item.label}
              </div>
              </a>
            )
          })
        }
        </ul>

      </div>

      {/* Secion 2 */}

      <div className="border-t-2 border-[#8b8a91] ">
      <div className="m-5 text-2xl font-sans text-[#8b8a91] ">
        <h1>Socials</h1>
      </div>

        <ul>
          {
            socialArray.map((item,index)=>{
              return(
                <div>
                  <a href={item.link}>
                  <div className="flex flex-row my-8 items-center font-sans text-[#8b8a91] text-sm m-5">
                    <span className="mr-4 my-2">
                    {item.icon}
                    </span>
                    {item.label}
                  </div>
                  </a>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
