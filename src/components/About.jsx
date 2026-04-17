import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="px-6 lg:px-28 py-20 flex flex-col lg:flex-row justify-between items-center gap-12 bg-white text-slate-900" id="about">
      {/* Visual Side */}
      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img 
          src="/assets/about-me.svg" 
          alt="Developer Illustration" 
          className="w-full max-w-md drop-shadow-sm" 
        />
      </motion.div>

      {/* Content Side */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
          About <span className="font-black text-blue-600">Me</span>
        </h2>

        <div className="mt-8 space-y-5">
          <p className="text-slate-600 text-sm/6 lg:text-base">
            I am a <span className="font-semibold text-slate-900">Full Stack Developer</span> with hands-on experience building and deploying production-ready web applications using the MERN stack, Next.js, and PostgreSQL. I focus on designing scalable systems with clean architecture, efficient APIs, and reliable user experiences.
          </p>

          <p className="text-slate-600 text-sm/6 lg:text-base">
            I have built end-to-end applications, handling everything from frontend UI to backend services, database design, and deployment. My work includes implementing REST APIs, JWT authentication, and <span className="font-semibold text-slate-900">role-based access control (RBAC)</span> in real-world systems.
          </p>

          <p className="text-slate-600 text-sm/6 lg:text-base bg-blue-50/50 p-4 border-l-4 border-blue-500 rounded-r-lg">
            I also work with <span className="font-semibold text-blue-700">Generative AI</span> and have built AI-powered applications using LLMs, LangChain, and <span className="font-semibold text-blue-700">RAG pipelines</span>, including systems for resume analysis, job matching, and intelligent content generation.
          </p>

          <p className="text-slate-600 text-sm/6 lg:text-base">
            I have experience deploying applications on platforms like Vercel, Render, and Railway, managing full project lifecycles. I focus on building systems that are not just functional, but scalable and maintainable.
          </p>

          <p className="text-slate-900 font-medium text-sm lg:text-base">
            Currently, I’m focused on improving system design, strengthening backend scalability, and building AI-driven products that solve real-world problems.
          </p>
        </div>

        {/* Impact Stats - Light Theme Refresh */}
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
            <h4 className="text-blue-600 font-extrabold text-2xl lg:text-3xl">7.8 CGPA</h4>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mt-1">B.Tech CSE 2026</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
            <h4 className="text-blue-600 font-extrabold text-2xl lg:text-3xl">12+ Months</h4>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mt-1">Professional Experience</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}