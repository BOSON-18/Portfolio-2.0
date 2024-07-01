import React from "react";

const Card = ({ image, name, techStack }) => {
  return (
    <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis w-[300px] h-[300px] max-sm:mx-auto shadow-lg">
      {/* Image */}
      <div className="h-[70%] bg-gray-200 flex items-center justify-center">
{image}      </div>
      {/* Data */}
      <div className="flex flex-col px-4 py-2 h-[30%] bg-white">
        {/* Name */}
        <h1 className="font-bold">{name}</h1>
        {/* TechStack */}
        {techStack ? <p className="text-info text-xs">{techStack.join(", ")}</p> : null}
      </div>
    </div>
  );
};

export default Card;
