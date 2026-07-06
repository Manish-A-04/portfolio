import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Vertical Nav */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-50">
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#intro">Intro</a>
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#about">About</a>
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#projects">Projects</a>
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#skills">Skills</a>
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#milestones">Milestones</a>
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#contact">Contact</a>
      </nav>

      {/* Mobile Nav Header */}
      <nav className="fixed top-0 left-0 w-full z-[9999] bg-black border-b border-white/20 lg:hidden flex justify-between items-center px-6 h-16 shadow-2xl">
        <a className="font-display text-2xl font-bold text-accent" href="#intro">M.</a>
        <button 
          className="text-accent p-2 bg-white/5 rounded-lg border border-white/10 active:bg-white/10 flex items-center justify-center" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2003/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2003/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 lg:hidden">
          <a className="font-display font-bold uppercase tracking-widest text-2xl hover:text-accent transition-colors" href="#intro" onClick={() => setIsOpen(false)}>Intro</a>
          <a className="font-display font-bold uppercase tracking-widest text-2xl hover:text-accent transition-colors" href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a className="font-display font-bold uppercase tracking-widest text-2xl hover:text-accent transition-colors" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a className="font-display font-bold uppercase tracking-widest text-2xl hover:text-accent transition-colors" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a className="font-display font-bold uppercase tracking-widest text-2xl hover:text-accent transition-colors" href="#milestones" onClick={() => setIsOpen(false)}>Milestones</a>
          <a className="font-display font-bold uppercase tracking-widest text-2xl hover:text-accent transition-colors" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
}
