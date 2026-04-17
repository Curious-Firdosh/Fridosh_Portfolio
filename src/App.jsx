import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import SkillsAndExperience from './components/Skills'; // Your merged component
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='font-sora scroll-smooth selection:bg-blue-600 selection:text-white bg-white text-zinc-900'>
      <Navbar />
      
      <main>
        <Home />
        <SkillsAndExperience />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}