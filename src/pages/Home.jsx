import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const SOCIAL_LINKS = [
  { id: 'github', icon: <BsGithub size={20} />, link: "https://github.com/Curious-Firdosh" },
  { id: 'linkedin', icon: <IoLogoLinkedin size={20} />, link: "https://www.linkedin.com/in/firdoshkhan" },
  { id: 'twitter', icon: <IoLogoTwitter size={20} />, link: "https://x.com/The_Firdosh" },
  { id: 'email', icon: <BiLogoGmail size={20} />, link: "mailto:thefirdosh@gmail.com" }
];

export default function Home() {
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20" id="home">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

        {/* Left Content */}
        <motion.div
          className="w-full lg:w-5/12 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs font-bold text-zinc-600 uppercase tracking-wide">Available for new opportunities</span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-zinc-900 leading-[1.1]">
              Full Stack <br />
              <span className="font-black text-blue-600">Engineer.</span>
            </h1>
          </div>

          <p className="text-zinc-500 text-lg lg:text-xl mt-6 leading-relaxed max-w-lg">
            I am <span className="font-semibold text-zinc-900">Firdosh Khan</span>. I architect and build scalable, production-ready applications using Next.js, Node.js, and PostgreSQL.
          </p>

          {/* CTA & Socials */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button 
              onClick={scrollToContact}
              className="flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              Let's Talk
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ id, icon, link }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Illustration */}
        <motion.div
          className="w-full lg:w-7/12 flex justify-center lg:justify-end z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          {/* Added a floating animation to make the static SVG feel alive */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full max-w-[500px] lg:max-w-[700px]"
          >
            <img 
              className="w-full h-auto drop-shadow-2xl" 
              src="/assets/hero-vector.svg" 
              alt="Development Illustration" 
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}