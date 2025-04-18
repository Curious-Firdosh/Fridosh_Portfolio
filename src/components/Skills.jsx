import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbBrandFirebase } from "react-icons/tb";
import { FaJs, FaReact, FaNodeJs,  FaDatabase } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandRedux } from "react-icons/tb";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "Redux", icon: <TbBrandRedux size={50}/>},
    { id: 5, name: "MongoDB", icon: <FaDatabase size={50} /> },
    // { id: 6, name: "Firebase", icon: <TbBrandFirebase size={50} /> },
    { id: 7, name: "Express Js", icon: <SiExpress size={50} /> },
    // { id: 8, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 9, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    // { id: 10, name: "Figma", icon: <CgFigma size={50} /> },
    // { id: 11, name: "TypeScript", icon: <TbBrandTypescript size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Google",
      role: "Lead Software Engineer",
      period: "Nov 2019 - Present",
      description:
        "Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience.",
      logo: "/assets/google.svg",
    },
    {
      id: 2,
      company: "Youtube",
      role: "Software Engineer",
      period: "Jan 2017 - Oct 2019",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      logo: "/assets/youtube.svg",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      
    </div>
  );
}
