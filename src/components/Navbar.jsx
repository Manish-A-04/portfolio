export default function Navbar() {
  return (
    <>
      {/* Desktop Vertical Nav */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 z-50">
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#top">Intro</a>
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#about">About</a>
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#skills">Skills</a>
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#projects">Projects</a>
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#education">Education</a>
        <a className="font-display font-bold uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100 text-sm" href="#contact">Contact</a>
      </nav>

      {/* Mobile Nav Header */}
      <nav className="fixed top-0 w-full z-50 bg-bg/90 backdrop-blur-md md:hidden border-b border-fg/30 flex justify-between items-center px-6 h-16">
        <a className="font-display text-xl font-bold text-accent" href="#top">M.</a>
        <button className="material-symbols-outlined text-accent">menu</button>
      </nav>
    </>
  );
}
