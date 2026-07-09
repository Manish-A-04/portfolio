export default function Footer() {
  return (
    <footer className="py-12 border-t border-fg/30 mt-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display tracking-wide text-base md:text-lg text-accent font-bold">M.</div>
        <p className="font-body-md text-sm text-fg/70">Designed & Built by Manish © 2024</p>
        <div className="flex gap-6">
          <a className="font-display tracking-widest font-bold uppercase text-sm text-fg/70 hover:text-accent transition-colors" href="https://github.com/Manish-A-04" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="font-display tracking-widest font-bold uppercase text-sm text-fg/70 hover:text-accent transition-colors" href="https://linkedin.com/in/manish-a-47a791326" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
