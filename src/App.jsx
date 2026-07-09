import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Milestones from './components/Milestones';
import Contact from './components/Contact';

import BackgroundVideo from './components/BackgroundVideo';

function App() {
  useEffect(() => {
    // Scroll-in animation for sections
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section, header[id]');
    sections.forEach(section => {
      section.classList.add('transition-opacity', 'duration-1000', 'opacity-0');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="font-body-md overflow-x-hidden w-full">
      <BackgroundVideo />
      <Navbar />
      <main className="xl:pr-[240px]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Milestones />
        <Contact />
      </main>
    </div>
  );
}

export default App;
