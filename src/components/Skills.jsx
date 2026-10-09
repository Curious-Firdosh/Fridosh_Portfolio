import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaRobot,
  FaGitAlt,
  FaLink,
  FaSearch,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiDocker,
  SiHono,
  SiPrisma,
  SiExpress,
  SiMongodb,
  SiFastapi,
  SiPostgresql,
  SiOpenai,
  SiN8N,
  SiRedis,
} from "react-icons/si";
import { TbArrowUpRight, TbBriefcase2, TbSparkles } from "react-icons/tb";

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Encoder",
    duration: "Jan 2025 — Mar 2026",
    type: "Remote",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    highlights: [
      "Developed end-to-end web application features across React/Next.js frontends and Node.js backend services.",
      "Implemented JWT-based authentication and role-based access control for protected application resources.",
      "Integrated LLM APIs and AI-related workflows into application features.",
      "Deployed applications using Vercel and Railway, troubleshooting environment configuration, build failures, and runtime issues.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Independent Freelance Work",
    duration: "Jul 2024 — Present",
    type: "Freelance / Remote",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
      "n8n",
    ],
    highlights: [
      "Developed and delivered client websites and web applications across logistics, cargo, finance, and e-commerce domains.",
      "Built responsive frontend interfaces and backend APIs using Next.js, React, Node.js, and TypeScript.",
      "Implemented database integrations, product management workflows, and third-party API integrations based on client requirements.",
      "Configured n8n automation workflows to streamline repetitive business processes and connect external services.",
      "Managed project delivery from requirement gathering and development through testing, deployment, and ongoing maintenance.",
    ],
  },
];

const SKILL_GROUPS = [
  {
    title: "Full-Stack Development",
    description: "From responsive interfaces to backend APIs.",
    icon: <FaReact />,
    skills: [
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { name: "REST APIs", icon: <FaLink /> },
    ],
  },
  {
    title: "AI Engineering",
    description: "Integrating LLMs into practical applications.",
    icon: <FaRobot />,
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "LLM APIs", icon: <SiOpenai /> },
      { name: "RAG", icon: <FaRobot /> },
      { name: "Embeddings", icon: <FaDatabase /> },
      { name: "Semantic Search", icon: <FaSearch /> },
    ],
  },
  {
    title: "Data & Retrieval",
    description: "Data modeling, storage, and retrieval systems.",
    icon: <FaDatabase />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
      { name: "pgvector", icon: <FaDatabase /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "Infrastructure & Automation",
    description: "Deployment tools and workflow automation.",
    icon: <FaGitAlt />,
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Hono", icon: <SiHono /> },
      { name: "n8n", icon: <SiN8N /> },
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={reveal}
      transition={{ duration: 0.55 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mb-12 max-w-3xl sm:mb-16"
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
        <TbSparkles size={16} />
        {eyebrow}
      </div>

      <h2 className="text-4xl font-medium leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text font-extrabold text-transparent">
          {accent}
        </span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

function ExperienceCard({ exp, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      variants={reveal}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.12 }}
      className="group relative pl-7 sm:pl-10 lg:pl-12"
    >
      {/* Timeline */}
      <span className="absolute bottom-0 left-0 top-8 w-px bg-gradient-to-b from-blue-500 via-blue-200 to-transparent" />

      <span className="absolute left-[-5px] top-8 h-[11px] w-[11px] rounded-full border-2 border-blue-600 bg-white ring-4 ring-blue-100 transition-transform duration-300 group-hover:scale-125" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/[0.05] sm:p-7 lg:p-9">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-100/40 blur-3xl transition-opacity group-hover:opacity-100"
        />

        <div className="relative">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-700">
                <TbBriefcase2 size={24} />
              </div>

              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                  {exp.role}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-bold text-blue-700">
                    {exp.company}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span className="text-slate-500">{exp.type}</span>
                </div>
              </div>
            </div>

            <span className="w-fit rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
              {exp.duration}
            </span>
          </div>

          <div className="my-6 h-px bg-slate-100" />

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Technologies used
          </p>

          <div className="mb-7 flex flex-wrap gap-2">
            {exp.tech.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {technology}
              </span>
            ))}
          </div>

          <h4 className="mb-4 text-sm font-bold text-slate-900">
            Key responsibilities & contributions
          </h4>

          <ul className="space-y-3">
            {exp.highlights.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base"
              >
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

function SkillGroup({ group, index }) {
  return (
    <motion.article
      variants={reveal}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/[0.05] sm:p-7"
    >
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-100/40 blur-3xl transition-colors group-hover:bg-indigo-100/60"
      />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700 transition-transform duration-300 group-hover:scale-105">
            <span className="text-xl">{group.icon}</span>
          </div>

          <span className="text-sm font-bold tracking-widest text-slate-300">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-lg font-extrabold tracking-tight text-slate-950 sm:text-xl">
          {group.title}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
          {group.description}
        </p>

        <div className="my-5 h-px bg-slate-100" />

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-600 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:text-sm"
              title={skill.name}
            >
              <span className="text-base text-blue-600">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function SkillsAndExperience() {
  return (
    <>
      {/* EXPERIENCE */}
      <section
        id="experience"
        className="relative isolate overflow-hidden border-t border-slate-200/80 bg-white px-5 py-20 text-slate-900 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-full max-w-5xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.10),transparent_65%)]"
        />

        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Professional Journey"
            title="Experience that"
            accent="builds."
            description="My professional journey across full-stack development, backend engineering, integrations, and practical AI-powered features."
          />

          <div className="space-y-8 sm:space-y-10">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.role}`}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative isolate overflow-hidden border-t border-slate-200/80 bg-[#f8fafc] px-5 py-20 text-slate-900 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-200/30 blur-[100px]"
        />

        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Technical Expertise"
            title="Tools I use to"
            accent="build."
            description="A practical toolkit spanning frontend and backend development, AI integration, data systems, and automation."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6"
          >
            {SKILL_GROUPS.map((group, index) => (
              <SkillGroup
                key={group.title}
                group={group}
                index={index}
              />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-7"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <TbSparkles size={23} />
            </div>

            <div>
              <h3 className="font-bold text-slate-950">
                Engineering focus
              </h3>
              <p className="mt-1 text-sm leading-7 text-slate-600 sm:text-base">
                Combining solid software engineering fundamentals with
                practical AI integration to build useful, maintainable
                applications.
              </p>
            </div>

            <a
              href="#projects"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-blue-900 sm:ml-auto"
            >
              Explore projects
              <TbArrowUpRight size={19} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}