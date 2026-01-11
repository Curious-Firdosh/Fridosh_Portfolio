import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between mt-32 flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

       <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am a full stack developer focused on building real, production-ready web applications. I primarily work with React and Node.js and care deeply about clean architecture, performance, and creating reliable user experiences.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I started my development journey in 2023 and have grown by building complete products from scratch, including real-time platforms and scalable web systems using tools like Next.js, TypeScript, NestJS, Tailwind CSS, and modern databases.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I have hands-on experience designing REST APIs, implementing authentication and role-based access, and deploying applications to production environments.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I take ownership of what I build, learn quickly, and enjoy solving real-world problems. I follow early-stage startups to understand how products are built and share my work and learnings through GitHub and Twitter.
        </p>

      </motion.div>
    </div>
  );
}
