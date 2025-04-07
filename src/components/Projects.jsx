import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";

import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs,  FaDatabase } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";

const projects = [
  {
    id: 1,
    title: "StudyNotion E-Learning Platform",
    description: " A dynamic and feature-rich platform for seamless online learning. Instructors can create and manage courses, while students can securely purchase and track their progress in real-time. With interactive learning experiences and performance analytics, StudyNotion ensures an engaging and efficient education journey.",
    image: "/assets/project2.png",
    link: "#"
  },
  {
    id: 2,
    title: "Paste App",
    description: " A full-featured web app to create, update, delete, search, and share pastes. Built with React, this project helped me master routing, dynamic navigation, and advanced React hooks like useEffect, useContext, and useReducer.",
    image: "/assets/project5.png",
    link: "#"
  },
  {
    id: 3,
    title: "Zoom Clone (Apna Version)",
    description: "A powerful and intuitive tool for organizing tasks efficiently. Users can create, update, and track tasks with deadlines, priorities, and statuses. With a clean UI, real-time updates, and seamless task management, this application boosts productivity and ensures better workflow management.",
    image: "/assets/project4.png",
    link: "#"
  },
  // {
  //   id: 4,
  //   title: "Linkdin Clone",
  //   description: "A powerful and intuitive tool for organizing tasks efficiently. Users can create, update, and track tasks with deadlines, priorities, and statuses. With a clean UI, real-time updates, and seamless task management, this application boosts productivity and ensures better workflow management.",
  //   image: "/assets/project3.png",
  //   link: "#"
  // }
];

 const skills = [
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "MongoDB", icon: <FaDatabase size={50} /> },
    { id: 5, name: "Express Js", icon: <SiExpress size={50} /> },
    { id: 6, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    { id: 7, name: "Figma", icon: <CgFigma size={50} /> },
    { id: 8, name: "Redux", icon: <TbBrandRedux size={50}/>},
  ];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8  my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16  space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[800px] w-full relative rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />  
               {/* Icons Overlay */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-75 top-[80%] transition-opacity duration-500">
                  {
                    skills.map((skill) => (
                          <div key={skill.id} title={skill.name} className="text-white text-3xl cursor-pointer">
                              {skill.icon}
                          </div>
                  ))}
      </div>
            </div>

            <div className="lg:w-1/3 lg:space-y-6 space-y-4 ">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
