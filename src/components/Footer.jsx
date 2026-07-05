export default function Footer() {
  return (
    <footer className="py-12 border-t border-fg/30 mt-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display text-2xl text-accent font-bold">M.</div>
        <p className="font-body-md text-fg/70">Designed & Built by Manish © 2024</p>
        <div className="flex gap-6">
          <a className="font-display font-bold uppercase tracking-widest text-fg/70 hover:text-accent transition-colors text-sm" href="#">GitHub</a>
          <a className="font-display font-bold uppercase tracking-widest text-fg/70 hover:text-accent transition-colors text-sm" href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
