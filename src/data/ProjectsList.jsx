import Interview from "../assets/Cards/Interview.png";
import Reader from "../assets/Cards/ClumsyReader.png";
import Dashboard from "../assets/Cards/Admin.png";
import ClumsyChats from "../assets/Cards/ClumsyChats.png";


export const Projects = [
  {
    image: <img src={Interview} alt="Interview " className="object-cover w-full h-full" />,
    name: "ClumsyInterviews",
    techStack: [
      "NextJs",
      "Google Gemini AI",
      "My SQL",
      "Tailwind CSS",
      "Clerk"
    ],
    gitHub:"https://github.com/BOSON-18/clumsyinterviews-next"
  },
  {
    image: <img src={Reader} alt="Reader " className="object-cover w-full h-full" />,
    name: "ClumsyReader",
    techStack: ["Nextjs", "Langchain", "PineCone Embeddings", "Google Gemini AI", "Firebase", "Vercel Blob Storage"],
    gitHub:"https://github.com/BOSON-18/ClumsyReader"
  },
  {
    image: <img src={ClumsyChats} alt="ClumyChats " className="object-cover w-full h-full" />,
    name: "Study-Stream",
    techStack: ["Nextjs", "Tailwind Css", "Clerk", "Stream"],
    gitHub:"https://github.com/BOSON-18/clumsyChats"
  },
  {
    image: <img src={Dashboard} alt="Dashboard " className="object-cover w-full h-full" />,
    name: "Attendance Dashboard",
    techStack: ["ReactJs", "CORS", "MongoDB", "NodeJs", "Redux","Chartjs"],
    gitHub:"https://github.com/BOSON-18/newDash"
  },
];