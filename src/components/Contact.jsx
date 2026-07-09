export default function Contact() {
  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop" id="contact">
      <div className="py-section-gap border-t border-fg/30 max-w-6xl mx-auto w-full text-left md:text-left">
        <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-4xl mb-8">Let's Connect</h2>
        <p className="font-body-lg text-base md:text-lg font-normal leading-[1.75] text-fg/70 max-w-2xl mb-12">
          I'm always interested in hearing about new projects, technical challenges, or research collaborations. 
        </p>
        <div className="flex flex-col md:flex-row justify-start items-stretch md:items-center gap-4">
          <a className="flex justify-center items-center gap-2.5 font-display tracking-widest font-bold uppercase text-sm bg-accent text-bg hover:opacity-90 transition-opacity px-6 py-3 rounded-full" href="mailto:manissh2004@gmail.com">
            <span className="material-symbols-outlined text-[18px]">mail</span> Email Me
          </a>
          <a className="flex justify-center items-center gap-2.5 font-display tracking-widest font-bold uppercase text-sm bg-white/10 hover:bg-white/20 border border-white/10 transition-all px-6 py-3 rounded-full" href="https://linkedin.com/in/manish-a-47a791326" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-[18px]">link</span> LinkedIn
          </a>
          <a className="flex justify-center items-center gap-2.5 font-display tracking-widest font-bold uppercase text-sm bg-white/10 hover:bg-white/20 border border-white/10 transition-all px-6 py-3 rounded-full" href="https://github.com/Manish-A-04" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-[18px]">code</span> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
