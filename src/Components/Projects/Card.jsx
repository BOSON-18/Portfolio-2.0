import React from "react";

const Card = ({ image, name, techStack }) => {
  return (
    <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis w-[280px] h-[280px]  max-sm:mx-auto">
      {/* image */}
      <div className="aspect-video object-fill ">
        {image}
      </div>
      {/* Data */}
      <div className="flex flex-col px-4 py-2 h-[40%]">
        {/* Name */}
        <h1 className="flex font-bold">{name}</h1>
        {/* TechStack */}
      {techStack?  <p className="flex text-info text-xs">{techStack.join(", ")}</p>:null}
      </div>
    </div>
  );
};

export default Card;
