import { FiHome } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";

export const sideBarArray=[{
    icon:<FiHome className="text-3xl "/>,
    label:"Home"
},{
    icon:<FaFire  className="text-3xl"/>,
    label:"Trending"
},
{
    icon:<IoCode className="text-3xl"/>,
    label:"Snippet"
},{
    icon:<IoVideocamOutline className="text-3xl"/>,
    label:"Videos"
}]