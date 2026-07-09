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
    // Simple Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    // Mobile Nav Highlight (active link)
    const navLinks = document.querySelectorAll('nav a');
    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-accent', 'border-b', 'border-accent', 'pb-1', 'opacity-100');
        link.classList.add('opacity-50');
        if (current && link.getAttribute('href')?.includes(current)) {
          link.classList.remove('opacity-50');
          link.classList.add('text-accent', 'border-b', 'border-accent', 'pb-1', 'opacity-100');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="font-body-md">
      <BackgroundVideo />
      <Navbar />
      <main>
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
