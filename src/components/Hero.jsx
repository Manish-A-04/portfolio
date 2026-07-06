export default function Hero() {
  return (
    <header id="intro" className="pt-40 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-[819px] flex flex-col justify-center">
      <div className="max-w-4xl">
        <h1 className="font-display tracking-wide font-extrabold text-4xl md:text-7xl mb-8">
          Manish. A <br />
          <span className="text-fg/70">AI Enthusiast.</span>
        </h1>
        <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70 max-w-2xl mb-12">
          Specializing in Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG).
          I bridge the gap between experimental AI research and robust, scalable software architectures.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="bg-accent text-bg px-8 py-4 rounded-lg font-display font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity duration-300" href="#projects">
            View Projects
          </a>
          <a className="border border-fg/30 text-accent px-8 py-4 rounded-lg font-display font-bold uppercase tracking-widest text-sm hover:border-accent transition-colors duration-300" href="/myres.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
