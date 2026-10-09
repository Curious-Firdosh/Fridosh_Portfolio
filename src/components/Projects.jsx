import { motion } from "framer-motion";
import { TbExternalLink, TbArrowUpRight, TbCode } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiClerk,
  SiPuppeteer,
  SiSass,
  SiRedux,
  SiTailwindcss,
  SiRazorpay,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiRedis,
} from "react-icons/si";

const PROJECTS = [
  {
    id: 1,
    title: "ShopMind AI",
    subtitle: "AI-Powered E-commerce Intelligence",
    description:
      "Building an intelligent e-commerce platform with natural-language product discovery, specification-based filtering, and a structured product catalog. The roadmap includes an AI product comparison agent and a RAG-powered support assistant.",
    image: "/assets/ShopMind.png",
    link: null,
    featured: true,
    status: "In Development",
    category: "AI / Full Stack",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    id: 2,
    title: "CareerPilot AI",
    subtitle: "RAG-Powered Resume Intelligence",
    description:
      "An AI-powered career platform designed to match resumes against job descriptions using semantic similarity, generate interview questions, and automate tailored PDF resume generation.",
    image: "/assets/CareerPilot.png",
    link: "https://careerpilotai-frontend.vercel.app",
    category: "AI / SaaS",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Puppeteer", icon: <SiPuppeteer /> },
      { name: "SCSS", icon: <SiSass /> },
      { name: "Razorpay", icon: <SiRazorpay /> },
    ],
  },
  {
    id: 3,
    title: "Interviewlyyy",
    subtitle: "Real-Time Mock Interviews",
    description:
      "A full-stack interview platform featuring live video interviews through Stream SDK and multi-language code execution using the Piston API.",
    image: "/assets/Dashboard.png",
    link: "https://interviewlyyy.onrender.com/",
    category: "Full Stack",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Clerk", icon: <SiClerk /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 4,
    title: "StudyNotion",
    subtitle: "E-Learning Marketplace",
    description:
      "A full-stack e-learning platform with student and instructor workflows, course management, authentication, and Razorpay payment integration. Redux Toolkit manages shared application state.",
    image: "/assets/project2.png",
    link: "https://studynotion-frontend.vercel.app/",
    category: "EdTech / Full Stack",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Razorpay", icon: <SiRazorpay /> },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function TechStack({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech.name}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-blue-400/40 hover:bg-blue-500/10"
        >
          <span className="text-blue-400">{tech.icon}</span>
          {tech.name}
        </span>
      ))}
    </div>
  );
}

function ProjectLink({ project }) {
  if (!project.link) {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        In Development
      </span>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-400"
      aria-label={`View ${project.title} live project`}
    >
      View Live Project
      <TbArrowUpRight
        size={19}
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  );
}

function FeaturedProject({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#10131c]"
    >
      <div className="grid items-center gap-0 lg:grid-cols-2">
        {/* Project preview */}
        <a
          href={project.link || undefined}
          target={project.link ? "_blank" : undefined}
          rel={project.link ? "noopener noreferrer" : undefined}
          aria-label={`Preview ${project.title}`}
          className={`relative block min-h-64 overflow-hidden bg-gradient-to-br from-blue-950 via-[#121827] to-purple-950 sm:min-h-80 lg:min-h-[440px] ${
            project.link ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.18),transparent_55%)]" />

          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#10131c]/60 via-transparent to-transparent" />

          <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md sm:left-7 sm:top-7">
            Featured Project
          </span>
        </a>

        {/* Project details */}
        <div className="p-6 sm:p-9 lg:p-10 xl:p-12">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
              {project.category}
            </span>
            <span className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              {project.status}
            </span>
          </div>

          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl">
            {project.title}
          </h3>

          <p className="mt-3 text-lg font-medium text-blue-400">
            {project.subtitle}
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
            {project.description}
          </p>

          <div className="my-7 h-px bg-white/10" />

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            Technologies
          </p>

          <TechStack technologies={project.technologies} />

          <div className="mt-8">
            <ProjectLink project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#10131c] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-950/20"
    >
      {/* Image */}
      <a
        href={project.link || undefined}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        aria-label={`Preview ${project.title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-zinc-900"
      >
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          {project.category}
        </span>

        {project.link && (
          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-colors group-hover:bg-blue-600">
            <TbExternalLink size={20} />
          </span>
        )}
      </a>

      {/* Details */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-blue-400">
              {project.subtitle}
            </p>
          </div>
          <span className="pt-1 text-sm font-semibold text-zinc-600">
            0{project.id}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="my-6 h-px bg-white/10" />

        <div className="mb-7">
          <TechStack technologies={project.technologies} />
        </div>

        <div className="mt-auto border-t border-white/10 pt-5">
          <ProjectLink project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featuredProject = PROJECTS[0];
  const otherProjects = PROJECTS.slice(1);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 bg-[#090b11] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-600/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            <TbCode size={16} />
            Selected Work
          </div>

          <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Engineering ideas
            <br />
            into{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text font-bold text-transparent">
              real products.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            From full-stack platforms to AI-powered applications, here's a
            closer look at the products I've built and the systems I'm
            developing.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Full-Stack Development
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              AI Engineering
            </span>
          </div>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <FeaturedProject project={featuredProject} />
        </motion.div>

        {/* Remaining projects */}
        <div className="mb-8 mt-20 flex flex-wrap items-end justify-between gap-4 sm:mt-28">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              More projects
            </p>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Built with purpose.
            </h3>
          </div>
          <span className="text-sm text-zinc-500">
            {otherProjects.length} additional projects
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            Always building. Always learning.
          </p>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-400"
          >
            Let's build something
            <TbArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}