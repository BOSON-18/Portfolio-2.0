import React from "react";
import {motion} from "framer-motion";

const scrollAnimation=(id)=>{
    console.log(id)

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'auto',
        block: 'center',
         inline:'start',
        duration:800
      });
    }

}

export default scrollAnimation;