import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Milestones from './components/Milestones';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div
        style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)' }}
        className="relative min-h-screen overflow-x-hidden"
      >
        <Cursor />
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
    </ThemeProvider>
  );
}

export default App;
