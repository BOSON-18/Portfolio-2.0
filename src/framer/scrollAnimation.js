import React from "react";
import {motion} from "framer-motion";

const scrollAnimation=(id)=>{
    console.log(id)

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
         inline:'start',
        duration:1200
      });
    }

}

export default scrollAnimation;