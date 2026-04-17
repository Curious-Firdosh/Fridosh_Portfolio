import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const SOCIAL_LINKS = [
    { id: 'linkedin', icon: <IoLogoLinkedin size={22} />, link: "https://www.linkedin.com/in/firdoshkhan" },
    { id: 'twitter', icon: <IoLogoTwitter size={22} />, link: "https://x.com/The_Firdosh" },
    { id: 'github', icon: <BsGithub size={22} />, link: "https://github.com/Curious-Firdosh" }
  ];

  return (
    <section 
      id='contact'
      className='py-32 px-6 lg:px-28 bg-white text-zinc-900 border-t border-zinc-100'
    >
      <div 
        ref={ref}
        className='max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24'
      >
        
        {/* Left Side: Copy & Info */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='lg:w-5/12 flex flex-col justify-center'
        >
          <div className='space-y-4'>
            <h2 className='text-4xl lg:text-6xl font-light tracking-tight'>
              Let's build something <span className='font-black text-blue-600 block mt-2'>scalable.</span>
            </h2>
            <p className='text-zinc-500 text-lg leading-relaxed max-w-md mt-6'>
              Whether you need a full-stack application built from scratch, a complex API architected, or a technical problem solved, I'm ready to help.
            </p>
          </div>

          <div className='mt-12 space-y-8'>
            <a 
              href="mailto:thefirdosh@gmail.com"
              className='group flex items-center gap-4 w-fit'
            >
              <div className='w-12 h-12 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300'>
                <IoMdMail size={20} />
              </div>
              <div>
                <p className='text-sm font-bold text-zinc-400 uppercase tracking-widest'>Email Me</p>
                <p className='text-lg font-medium text-zinc-900 group-hover:text-blue-600 transition-colors'>thefirdosh@gmail.com</p>
              </div>
            </a>

            <div className='flex items-center gap-4 pt-4'>
              {SOCIAL_LINKS.map(({ id, icon, link }) => (
                <motion.a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-50 border border-zinc-200 text-zinc-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className='lg:w-7/12'
        >
          <form className='bg-zinc-50/50 border border-zinc-200/60 p-8 lg:p-10 rounded-3xl space-y-6 shadow-sm'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='text-sm font-bold text-zinc-700 ml-1'>Name</label>
                <input 
                  className='w-full bg-white border border-zinc-200 px-5 py-4 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all' 
                  type="text" 
                  placeholder='John Doe' 
                  required 
                />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-bold text-zinc-700 ml-1'>Email</label>
                <input 
                  className='w-full bg-white border border-zinc-200 px-5 py-4 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all' 
                  type="email" 
                  placeholder='john@company.com' 
                  required 
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-sm font-bold text-zinc-700 ml-1'>Project Details</label>
              <textarea 
                className='w-full bg-white border border-zinc-200 px-5 py-4 h-40 resize-none rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all' 
                placeholder='Tell me about your architecture, timeline, and goals...'
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              className='w-full flex items-center justify-center gap-3 bg-zinc-900 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300'
            >
              Send Message
              <FiArrowRight />
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}