export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 px-6 lg:px-28 py-16 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Branding & Mission */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            {/* Glowing status indicator */}
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="font-bold text-white tracking-tight text-xl">
              Firdosh Khan
            </span>
          </div>
          <p className="text-zinc-400 text-sm font-medium max-w-md text-center md:text-left leading-relaxed">
            Full Stack Developer specializing in the <span className="text-zinc-200 font-bold">MERN stack</span>, <span className="text-zinc-200 font-bold">Next.js</span>, and <span className="text-zinc-200 font-bold">GenAI</span> to architect and build scalable, production-ready systems.
          </p>
        </div>

        {/* Technical Stack Callout */}
        <div className="hidden lg:flex gap-8 text-xs font-black uppercase tracking-widest text-zinc-600">
          <span className="hover:text-blue-500 transition-colors cursor-default">MERN</span>
          <span className="hover:text-blue-500 transition-colors cursor-default">Next.js</span>
          <span className="hover:text-blue-500 transition-colors cursor-default">GenAI</span>
        </div>

        {/* Copyright & Credit */}
        <div className="flex flex-col items-center md:items-end text-sm text-zinc-500">
          <p className="font-bold text-zinc-300">
            &copy; {currentYear} Personal Portfolio
          </p>
          <p className="mt-2">
            Engineered by <span className="text-blue-500 font-bold">Firdosh Khan</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      < div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-semibold">
          Based in India &bull; Global Remote
        </p>
        <div className="flex items-center gap-2">
          {/* Subtle pulse indicator to draw the recruiter's eye */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <p className="text-[10px] text-blue-500/90 uppercase tracking-[0.2em] font-bold">
            Open to Full-Time & Internships
          </p>
        </div>
      </div>
    </footer >
  );
}