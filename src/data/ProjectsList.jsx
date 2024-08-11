import StudyNotion from "../assets/Cards/Study.png";
import Dashboard from "../assets/Cards/Admin.png";
import ClumsyChats from "../assets/Cards/ClumsyChats.png";
import Youtube from "../assets/Cards/Youtube.jpeg";

export const Projects = [
  {
    image: <img src={StudyNotion} alt="StudyNotion " className="object-cover w-full h-full" />,
    name: "StudyNotion",
    techStack: [
      "Express",
      "Node",
      "ReactJs",
      "Tailwind CSS",
      "MongoDB",
      "Razorpay",
      "Cloudinary",
    ],
    gitHub:"https://github.com/BOSON-18/StudyNotion-Mega.git"
  },
  {
    image: <img src={Youtube} alt="StudyNotion " className="object-cover w-full h-full" />,
    name: "YouTube Clone",
    techStack: ["ReactJs", "Tailwind Css", "Redux", "Google-API'S"],
    gitHub:"https://github.com/BOSON-18/namsate-youtube.git"
  },
  {
    image: <img src={ClumsyChats} alt="ClumsyChats " className="object-cover w-full h-full" />,
    name: "Study-Stream",
    techStack: ["ReactJs", "NodeJs", "Socket.io", "MongoDB"],
    gitHub:"https://github.com/BOSON-18/clumsyChats"
  },
  {
    image: <img src={Dashboard} alt="Dashboard " className="object-cover w-full h-full" />,
    name: "Attendance Dashboard",
    techStack: ["ReactJs", "CORS", "MongoDB", "NodeJs", "Redux","Chartjs"],
    gitHub:"https://github.com/BOSON-18/newDash"
  },
];
