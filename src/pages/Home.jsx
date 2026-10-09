import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
} from "react-icons/fi";

const SOCIAL_LINKS = [
  {
    id: "github",
    label: "GitHub",
    icon: <BsGithub size={19} />,
    link: "https://github.com/Curious-Firdosh",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: <IoLogoLinkedin size={20} />,
    link: "https://www.linkedin.com/in/firdoshkhan",
  },
  {
    id: "twitter",
    label: "X",
    icon: <IoLogoTwitter size={19} />,
    link: "https://x.com/The_Firdosh",
  },
  {
    id: "email",
    label: "Email",
    icon: <BiLogoGmail size={21} />,
    link: "mailto:thefirdosh@gmail.com",
  },
];

const STACK = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "LLMs & RAG",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-5 pb-16 pt-28 text-zinc-900 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Subtle background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 h-[550px] w-[550px] rounded-full bg-blue-100/60 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-indigo-50 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="relative z-10"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-800 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to Full-Stack AI Roles & Freelance Projects
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-9 text-sm font-semibold tracking-wide text-zinc-500"
          >
            Hi, I'm Firdosh Khan.
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-4 text-5xl font-light leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[78px]"
          >
            I build full-stack
            <br />
            applications with
            <br />
            <span className="font-black text-blue-600">
              AI at the core.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-7 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg"
          >
            I'm a Full-Stack AI Engineer with experience building web
            applications, backend APIs, database-driven systems, and
            AI-integrated features. Currently, I'm developing{" "}
            <span className="font-semibold text-zinc-900">
              ShopMind AI
            </span>
            , an e-commerce platform exploring intelligent product discovery,
            product comparison, and AI-powered shopping assistance.
          </motion.p>

          {/* Technical focus */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-7"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
              My Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {STACK.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-zinc-200 bg-white/80 px-3 py-2 text-xs font-medium text-zinc-600 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Opportunities and projects */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 sm:px-7"
            >
              Explore My Projects
              <FiArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-sm font-bold text-zinc-800 transition-all duration-300 hover:border-blue-300 hover:text-blue-600 sm:px-7"
            >
              Let's Connect
              <FiArrowUpRight size={17} />
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Find me online
            </span>

            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ id, label, icon, link }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Illustration and current project */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 16 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
        >
          <div className="absolute inset-8 rounded-full bg-blue-100/70 blur-3xl" />

          <motion.img
            animate={{ y: [-7, 7, -7] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src="/assets/hero-vector.svg"
            alt="Software development and AI engineering illustration"
            className="relative mx-auto w-full drop-shadow-xl"
          />

          {/* Current project card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="absolute bottom-2 left-0 right-0 mx-auto max-w-[330px] rounded-2xl border border-zinc-200/80 bg-white/95 p-4 shadow-xl shadow-zinc-900/10 backdrop-blur-md sm:bottom-8 sm:left-4 sm:right-auto sm:mx-0 sm:p-5"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiCode size={22} />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-zinc-900">
                    Currently building
                  </p>
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </div>

                <p className="mt-1 text-base font-semibold text-blue-600">
                  ShopMind AI
                </p>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Intelligent product discovery & AI shopping experiences.
                </p>

                <button
                  onClick={() => scrollTo("projects")}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-zinc-800 hover:text-blue-600"
                >
                  View project
                  <FiArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}