import React from "react";
import cover from "../assets/cover.jpeg";
import profile from "../assets/profilePic.jpg";
import { SlSocialInstagram } from "react-icons/sl";
import Cards from "./Projects/Cards";
import TechCards from "./TechStack/Cards";

const Body = () => {
  return (
    <div className="gap-y-8">
      {/* Section 1 */}
      <section>
        <div className="border-1 relative">
          <img
            src={cover}
            className="w-full h-[160px]  object-fill bg-blur backdrop-filter backdrop-blur-md"
            style={{ backdropFilter: "backdrop-blur-md" }}
            alt="cover"
          ></img>
        </div>
        <div className=" absolute translate-y-[-140px] flex flex-row justify-between items-center px-14 gap-x-[600px]">
          {/* Initials */}
          <div className="flex flex-row justify-between items-center gap-11">
            {/* img */}
            <div>
              <img
                src={profile}
                alt="profilePic"
                className="rounded-full border-white border-4 h-[128px]"
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
            <button className="flex flex-row justify-around items-center gap-3 font-semibold bg-[#1c1b23] text-[#8b8a91] py-2 px-4 rounded-md text-xs">
              {" "}
              <span className="text-xl font-bold">
                <SlSocialInstagram />
              </span>
              Follow me on Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Section2  */}

      <section className="mt-2 w-[90%] ml-5 p-5">
        <div>
          <div>
            <h1 className="text-2xl font-semibold">Projects</h1>
          </div>
          <div>
            <Cards/>
          </div>
        </div>
      </section>

      {/* Section 3 */}

      <section className="mt-2 w-[90%] ml-5 p-5">
        <div>
          <TechCards/>
        </div>
      </section>
    </div>
  );
};

export default Body;
