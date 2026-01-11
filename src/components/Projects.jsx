
import { TbExternalLink } from "react-icons/tb";

import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs,  FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";


const projects = [
   {
    id: 1,
    title: "Interviewlyy – Real-World Interview Practice Platform",
    description:
      "A full-stack interview practice platform designed to simulate real technical interviews. Supports live coding sessions, problem solving, real-time communication, and interview-style workflows. Built with a focus on production-level architecture, scalability, and real-world engineering practices rather than tutorial demos.",
    image: "/assets/Dashboard.png",
    link: "https://interviewlyyy.up.railway.app/"
  },
  {
    id: 2,
    title: "StudyNotion – E-Learning Platform",
    description:
      "A feature-rich e-learning platform where instructors can create and manage courses, and students can securely purchase content and track progress in real time. Includes role-based access, payment flow, course progress tracking, and performance analytics to enhance the learning experience.",
    image: "/assets/project2.png",
    link: "https://studynotion-frontend.vercel.app/"
  },
  {
    id: 3,
    title: "NotesVaaault",
    description:
      "A CRUD-based web application to create, update, delete, search, and share notes. Built with React to strengthen fundamentals such as routing, dynamic navigation, and advanced hooks including useEffect, useContext, and useReducer.",
    image: "/assets/project5.png",
    link: "http://notesvaault.netlify.app/"
  },
  {
    id: 4,
    title: "BlogTopic App",
    description:
      "A topic-based blog exploration app where users browse content using clickable tags like #frontend and #artificialintelligence. Implements dynamic routing and pagination to efficiently handle large volumes of topic-specific blog content.",
    image: "/assets/project6.png",
    link: "https://blog-context-app-sigma.vercel.app/"
  },
  {
    id: 5,
    title: "QuickPay",
    description:
      "A digital payment application that allows users to authenticate securely, transfer money to contacts, and view complete transaction history. Focuses on clean UI, secure flows, and intuitive user experience for managing payments.",
    image: "/assets/project9.png",
    link: "https://quiickkpay.netlify.app/"
  }

];
 const skills = [
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "MongoDB", icon: <FaDatabase size={50} /> },
    { id: 5, name: "Express Js", icon: <SiExpress size={50} /> },
    { id: 6, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
   
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
