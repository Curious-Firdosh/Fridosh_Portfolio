import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="px-6 lg:px-28 py-20 flex flex-col lg:flex-row justify-between items-center gap-12 bg-white text-slate-900"
      id="about"
    >
      {/* Visual Side */}
      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/about-me.svg"
          alt="Full Stack AI Engineer"
          className="w-full max-w-md drop-shadow-sm"
        />
      </motion.div>

      {/* Content Side */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
          Why Hire <span className="font-black text-blue-600">Me?</span>
        </h2>

        <div className="mt-8 space-y-5">
          <p className="text-slate-600 text-sm/6 lg:text-base">
            I'm a{' '}
            <span className="font-semibold text-slate-900">
              Full Stack AI Engineer
            </span>{' '}
            who builds modern web applications and AI-powered products using
            React, Next.js, TypeScript, Node.js, Express, and PostgreSQL.
          </p>

          <p className="text-slate-600 text-sm/6 lg:text-base">
            From responsive interfaces and secure APIs to database design
            and AI integrations, I can take a feature from idea to
            implementation with a focus on clean, reliable code.
          </p>

          <p className="text-slate-600 text-sm/6 lg:text-base bg-blue-50/50 p-4 border-l-4 border-blue-500 rounded-r-lg">
            <span className="font-semibold text-blue-700">
              Full-stack development meets AI.
            </span>{' '}
            I build intelligent features using LLMs, semantic search, and
            RAG to create more useful, interactive applications.
          </p>

          <p className="text-slate-600 text-sm/6 lg:text-base">
            With professional experience and hands-on client projects,
            I bring practical problem-solving, ownership, and a focus on
            building software that solves real problems.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
            <h4 className="text-blue-600 font-extrabold text-2xl lg:text-3xl">
              7.8 CGPA
            </h4>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mt-1">
              B.Tech CSE · 2026
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
            <h4 className="text-blue-600 font-extrabold text-2xl lg:text-3xl">
              2+ Years
            </h4>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mt-1">
              Professional Experience
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}