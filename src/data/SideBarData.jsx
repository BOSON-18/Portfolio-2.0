import { FiHome } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";

export const sideBarArray = [
  {
    icon: <FiHome className="text-3xl" />,
    label: "Home",
    id: 'startPoint'
  },
  {
    icon: <FaFire className="text-3xl" />,
    label: "About Me",
    id: 'info'
  },
  {
    icon: <IoCode className="text-3xl" />,
    label: "Snippet",
    id: 'snippet'
  },
  {
    icon: <IoVideocamOutline className="text-3xl" />,
    label: "Videos",
    link: 'https://www.instagram.com/clumsyshots_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    // No 'id' property defined here, add it if needed
  }
];
