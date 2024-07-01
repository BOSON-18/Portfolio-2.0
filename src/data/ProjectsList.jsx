import StudyNotion from "../assets/Cards/StudyNotion.jpg";
import Netflix from "../assets/Cards/Netflix.gif";
import Swiggy from "../assets/Cards/Swiggy.jpg";
import Youtube from "../assets/Cards/YouTube.jpg";

export const Projects = [
  {
    image: <img src={Netflix} alt="StudyNotion "/>,
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
    image: <img src={Netflix} alt="StudyNotion "/>,
    name: "YouTube Clone",
    techStack: ["ReactJs", "Tailwind Css", "Redux", "Google-API'S"],
    gitHub:"https://github.com/BOSON-18/namsate-youtube.git"
  },
  {
    image: <img src={Netflix} alt="StudyStream "/>,
    name: "Study-Stream",
    techStack: ["Nextjs", "Tailwind Css", "Clerk", "Stream"],
    gitHub:"https://github.com/BOSON-18/StudyStream"
  },
  {
    image: <img src={Netflix} alt="Dashboard "/>,
    name: "Attendance Dashboard",
    techStack: ["ReactJs", "CORS", "MongoDB", "NodeJs", "Redux","Chartjs"],
    gitHub:"https://github.com/BOSON-18/newDash"
  },
];
