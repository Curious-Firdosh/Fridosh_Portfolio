import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {  SiTypescript, SiDocker, SiHono, SiPrisma, SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Encoder",
    duration: "Jan 2025 — Mar 2026",
    type: "Remote",
    highlights: [
      "Built and deployed full-stack applications using React, Next.js, Node.js, and PostgreSQL",
      "Designed scalable REST APIs with JWT authentication and RBAC authorization",
      "Integrated AI features using LLMs and LangChain with RAG pipelines",
      "Deployed apps on Vercel, Render, and Railway with production-grade performance"
    ]
  },
  {
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    duration: "Apr 2025 — May 2025",
    type: "Remote",
    highlights: [
      "Implemented secure authentication systems using JWT and RBAC",
      "Developed REST APIs connecting frontend and backend services",
      "Built responsive UI with React and Tailwind CSS"
    ]
  }
];

const SKILLS = [
  { name: "Next.js", icon: <RiNextjsFill size={32} /> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "React", icon: <FaReact size={32} /> },
  { name: "Node.js", icon: <FaNodeJs size={32} /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql size={32} /> },
  { name: "MongoDB", icon: <FaDatabase size={32} /> },
  { name: "Prisma", icon: <SiPrisma size={32} /> },
  { name: "Hono", icon: <SiHono size={32} /> },
  { name: "Docker", icon: <SiDocker size={32} /> },
  { name: "Tailwind", icon: <RiTailwindCssFill size={32} /> },
  { name: "Express", icon: <SiExpress size={32} /> },
];

export default function SkillsAndExperience() {
  return (
    <section className="relative bg-zinc-50 py-32 px-6 lg:px-28 overflow-hidden text-zinc-900" id="experience">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-32">
        
        {/* ================= EXPERIENCE SECTION ================= */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              Work <span className="font-black text-blue-600">Experience</span>
            </h2>
            <p className="mt-4 text-zinc-500 text-lg">
              Building scalable systems and shipping production-ready code.
            </p>
          </motion.div>

          <div className="relative border-l border-zinc-200 ml-4 lg:ml-8 space-y-16">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 lg:pl-16 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Glowing Timeline Node */}
                <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-[3px] border-zinc-50 bg-blue-600 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300" />

                <div className="bg-white border border-zinc-200/60 p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-500/20 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold mt-1 flex items-center gap-2">
                        {exp.company}
                        <span className="w-1 h-1 rounded-full bg-zinc-300" />
                        <span className="text-zinc-500 font-medium text-sm">{exp.type}</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-wider">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-zinc-600 text-sm lg:text-base leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SKILLS SECTION ================= */}
        <div id="skills">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col items-center text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              Core <span className="font-black text-blue-600">Technologies</span>
            </h2>
            <p className="mt-4 text-zinc-500 text-lg">
              The tools I use to architect high-performance data layers and dynamic interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative flex flex-col items-center justify-center p-8 bg-white border border-zinc-200/60 rounded-3xl hover:bg-zinc-900 hover:border-zinc-900 transition-all duration-500 cursor-default shadow-sm hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-zinc-400 group-hover:text-white transition-colors duration-500 group-hover:-translate-y-1 transform">
                  {skill.icon}
                </div>
                <p className="mt-4 font-bold text-sm tracking-tight text-zinc-700 group-hover:text-white transition-colors duration-500">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}