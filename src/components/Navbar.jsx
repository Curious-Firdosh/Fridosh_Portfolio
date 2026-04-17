import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const NAV_LINKS = ["about", "experience", "skills", "projects", "contact"];

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, 
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  // Ensure this path exactly matches your public folder structure
  const RESUME_URL = "/assets/FirdoshKhan.pdf";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          hasScrolled 
            ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/50 py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-zinc-900 text-white rounded flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 transition-colors">
              F
            </div>
            <h2 className="font-bold text-xl tracking-tight text-zinc-900">
              Firdosh<span className="text-zinc-400">Khan</span>
            </h2>
          </button>

          <ul className="hidden md:flex items-center gap-x-8">
            {NAV_LINKS.map((section) => (
              <li key={section}>
                <button 
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-zinc-500 hover:text-zinc-900 capitalize transition-colors relative group py-2"
                >
                  {section}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              </li>
            ))}
          </ul>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            Resume <TbDownload size={18} />
          </a>

          <button
            className="md:hidden text-zinc-900 p-2 -mr-2"
            onClick={() => setIsOpen(true)}
            aria-label="Toggle menu"
          >
            <HiOutlineMenu size={24} />
          </button>

        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[60] md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex justify-end p-6">
                <button
                  className="p-2 text-zinc-500 hover:text-zinc-900 bg-zinc-100 rounded-full transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <HiX size={20} />
                </button>
              </div>

              <div className="flex-1 flex flex-col px-8 pt-8 gap-6 overflow-y-auto">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Navigation</p>
                <ul className="flex flex-col gap-y-4">
                  {NAV_LINKS.map((section, idx) => (
                    <motion.li
                      key={section}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (idx * 0.05) }}
                    >
                      <button 
                        onClick={() => scrollToSection(section)}
                        className="text-2xl font-light text-zinc-900 hover:text-blue-600 capitalize text-left w-full transition-colors"
                      >
                        {section}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-zinc-100"
                >
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-4 bg-zinc-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors"
                  >
                    View Resume <TbDownload size={18} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}