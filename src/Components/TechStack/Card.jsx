import React from "react";

const Card = ({ heading, stack }) => {
  return (
    <div className="w-[280px] bg-[#1c1b23] rounded-lg h-[290px]">
      <div className="flex flex-col p-5 ">
        <div>
        <h1 className=" text-3xl">{heading}</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly pt-4 gap-x-5  ">
          {stack.map((element, index) => {
            return (
              <div className=" m-2 gap-8 " key={index}>
                <div className="flex flex-col items-center justify-center gap-1 font-sans ">
                  <span className="">
                  {element.icon}
                  </span>

                  <span className="text-sm">
                  {element.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
