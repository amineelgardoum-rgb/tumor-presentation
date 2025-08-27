import { FaPython,FaHtml5, FaKaggle} from "react-icons/fa";
import MatrixBackground from "../MatrixBackground";
import {
  SiCss3,
  SiFastapi,
  SiJinja,
  SiKeras,
  SiNumpy,
  SiTensorflow,
} from "react-icons/si";
import { RevealOnScroll } from "../RevealOnScroll";
import { CustomCursor } from "../CustomCursor";
import { Footer } from "./Footer";
import '../shadow.css'

export const Project = () => {
  const project = {
    id: 1,
    title: "Tumor Web app detection",
    description:
      "This project is a real-time brain tumor classification application built with FastAPI. It provides a simple web interface where users can upload an MRI scan of a brain, and the application will return a prediction of whether the scan shows a tumor and, if so, its type.The application leverages a pre-trained deep learning model from KaggleHub, which is automatically downloaded and loaded on startup.",
    skills: [
      "HTML",
      "CSS",
      "Keras",
      "Tensorflow",
      "Numpy",
      "Jinja",
      "FastAPI",
      "Kaggle"
    ],
    link: "https://github.com/amineelgardoum-rgb/tumor",
    video_link:"https://drive.google.com/file/d/1YpgZaO0c_Q_K_qkgTD9gN8g8OE3YMdhl/view?usp=drive_link",
    image: "/images/tumor-structure.png",
  };

  const skillInfo = {
    fastapi: {
      icon: <SiFastapi />,
      color: "text-white",
      hoverColor: "hover:text-green-600",
      glow: "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
    },
    html:{
      icon:<FaHtml5 />,
      color:"text-white",
      hoverColor:"hover:text-orange-500",
      glow:"hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]"
    },
    keras:{
      icon:<SiKeras />,
      color:"text-white",
      hoverColor:"hover:text-red-800",
      glow:"hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]"
    },
    tensorflow:{
      icon:<SiTensorflow />,
      color:"text-white",
      hoverColor:"hover:text-orange-400",
      glow:"hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]"
    },
    numpy:{
      icon:<SiNumpy />,
      color:"text-white",
      hoverColor:"hover:text-blue-400",
      glow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
    },
    css:{
      icon:<SiCss3 />,
      color:"text-white",
      hoverColor:"hover:text-blue-600",
      glow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
    },
    jinja:{
      icon:<SiJinja />,
      color:"text-white",
      hoverColor:"hover:text-red-400",
      glow:"hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]"
    },
    kaggle:{
      icon:<FaKaggle />,
      color:"text-white",
      hoverColor:"hover:text-blue-500",
      glow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
    }
  };

  const getSkillInfo = (skill) =>
    skillInfo[skill.toLowerCase()] || {
      icon: <FaPython />,
      color: "text-gray-400",
      hoverColor: "text-white",
    };

  return (
    <>
      <MatrixBackground />
      <CustomCursor />
      <section
        id="project"
        className="flex min-h-screen items-center justify-center mb-5 bg-black text-green-300 px-6 py-20"
      >
        <div className="max-w-5xl text-center">
          {/* Title */}
          <RevealOnScroll>
            <h1 className="text-5xl md:text-6xl p-6 font-bold mb-10 bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent font-mono ">
              {project.title}
            </h1>
          </RevealOnScroll>

          {/* Image */}
          <RevealOnScroll>
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto rounded-2xl object-fit hover:scale-105 shadow  transition-all duration-300 mb-20"
            />
          </RevealOnScroll>

          {/* Description */}
          <RevealOnScroll>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-20 max-w-3xl mx-auto">
              {project.description}
            </p>
          </RevealOnScroll>

          {/* Skills */}
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-8 mb-30">
              {project.skills.map((skill) => {
                const { icon, color, hoverColor, glow } = getSkillInfo(skill);
                return (
                  <div
                    key={skill}
                    className={`text-5xl cursor-none transition-transform transition-color duration-500 hover:scale-125 ${color} ${hoverColor} ${glow} hover:-translate-y-1`}
                    title={skill}
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>

          {/* Link */}
          <RevealOnScroll>
            <a
              href={project.video_link}
              target="_blank"
              rel="noopener noreferrer"
              className=" group inline-block cursor-none bg-transparent hover:bg-green-500/100 hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)] border border-green-500/100  hover:text-black px-8 py-4 text-lg font-semibold rounded-xl  hover:border-green-200   hover:border hover:border-green-500/100  hover:scale-105 hover:-translate-y-1 m-10 transition-all duration-500 "
            >
              View Tutorial video <span className="group-hover:translate-x-2 inline-block transition-all  duration-500"> → </span>
            </a>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" group inline-block cursor-none hover:bg-transparent hover:text-green-200 px-8 py-4 text-lg font-semibold rounded-xl hover:border hover:border-green-200 hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)] bg-green-500 text-black hover:scale-105 hover:-translate-y-1 m-10 transition-all duration-500 "
            >
              View on GitHub <span className="group-hover:translate-x-2 inline-block transition-all duration-500" > → </span>
            </a>
          </RevealOnScroll>
        </div>
      </section>
      <footer>
        <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
      </footer>
    </>
  );
};
