import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';
import {  FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiClerk, SiPuppeteer, SiSass, SiRedux, SiTailwindcss, SiRazorpay } from "react-icons/si";

const PROJECTS = [
  {
    id: 1,
    title: "CareerPilot AI",
    subtitle: "RAG-Powered Resume Intelligence",
    description: "An AI SaaS utilizing RAG pipelines and LLMs to match resumes against JDs with semantic similarity scoring. Features automated interview question generation and dynamic PDF tailoring using Puppeteer.",
    image: "/assets/CareerPilot.png",
    link: "https://careerpilotai-frontend.vercel.app",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Puppeteer", icon: <SiPuppeteer /> },
      { name: "Scss", icon: <SiSass /> },
      { name: "Razorpay", icon: <SiRazorpay/> }
    ]
  },
  {
    id: 2,
    title: "Interviewlyyy",
    subtitle: "Real-Time Mock Interviews",
    description: "Full-stack platform for real-time technical interviews. Features live video calls via Stream SDK and multi-language code execution using the Piston API to simulate high-pressure environments.",
    image: "/assets/Dashboard.png",
    link: "https://interviewlyyy.onrender.com/",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Clerk", icon: <SiClerk /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwind", icon: <SiTailwindcss /> }
    ]
  },
  {
    id: 3,
    title: "StudyNotion",
    subtitle: "E-Learning Marketplace",
    description: "A production-ready ed-tech platform with Razorpay integration and secure course management. Architected to handle complex state across 50+ interactive components using Redux Toolkit.",
    image: "/assets/project2.png",
    link: "https://studynotion-frontend.vercel.app/",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Razorpay", icon: <SiRazorpay/> },
       { name: "Express", icon: <SiExpress /> },
    ]
  },
];

export default function Projects() {
  return (
    <section className="py-32 px-6 lg:px-28 bg-white text-zinc-900 border-t border-zinc-100" id="projects">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl"
        >
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
            Featured <span className="font-black text-blue-600">Engineering Work</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg">
            Complex systems I've architected, built, and deployed to production.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col gap-12 lg:gap-16 items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              
              {/* Image Showcase */}
              <div className="w-full lg:w-7/12 relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-3xl translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-500" />
                <div className="relative rounded-3xl border border-zinc-200/60 overflow-hidden bg-zinc-50 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-blue-500/30">
                  <img
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                    src={project.image}
                    alt={project.title}
                  />
                  {/* Overlay link hit area */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-5/12 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-blue-600 font-black tracking-widest text-sm uppercase">0{index + 1}</span>
                  <div className="h-px w-12 bg-zinc-200"></div>
                </div>

                <div>
                  <h3 className="font-black text-zinc-900 text-3xl lg:text-4xl tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mt-2 text-lg">
                    {project.subtitle}
                  </p>
                </div>

                <p className="font-normal text-lg leading-relaxed text-zinc-500">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 px-4 py-1.5 rounded-full text-xs font-bold text-zinc-600 uppercase tracking-wider hover:border-zinc-300 transition-colors">
                      <span className="text-blue-500">{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-white bg-zinc-900 hover:bg-blue-600 px-8 py-4 rounded-full transition-all duration-300 font-bold text-sm shadow-sm hover:shadow-lg hover:shadow-blue-500/20 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project <TbExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}