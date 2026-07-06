export default function Contact() {
  return (
    <section className="py-section-gap border-t border-fg/30" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-left md:text-left">
        <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-5xl mb-8">Let's Connect</h2>
        <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70 max-w-2xl mb-16">
          I'm always interested in hearing about new projects, technical challenges, or research collaborations. 
        </p>
        <div className="flex flex-col md:flex-row justify-start items-center gap-6">
          <a className="w-full md:w-auto flex justify-center items-center gap-3 font-display font-bold uppercase tracking-widest text-lg md:text-2xl bg-accent text-bg hover:opacity-90 transition-opacity px-8 py-4 rounded-full" href="mailto:manissh2004@gmail.com">
            <span className="material-symbols-outlined">mail</span> Email Me
          </a>
          <a className="w-full md:w-auto flex justify-center items-center gap-3 font-display font-bold uppercase tracking-widest text-lg md:text-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all px-8 py-4 rounded-full" href="https://linkedin.com/in/manish-a-47a791326" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined">link</span> LinkedIn
          </a>
          <a className="w-full md:w-auto flex justify-center items-center gap-3 font-display font-bold uppercase tracking-widest text-lg md:text-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all px-8 py-4 rounded-full" href="https://github.com/Manish-A-04" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined">code</span> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
