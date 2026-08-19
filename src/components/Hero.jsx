export default function Hero() {
  return (
    <header id="intro" className="w-full px-margin-mobile md:px-margin-desktop min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full pt-40 pb-section-gap">
        <h1 className="font-display tracking-wide font-extrabold text-4xl md:text-6xl mb-6">
          Manish A
          <span className="text-fg/70 font-normal text-xl md:text-2xl block mt-2">
            B.Tech. in Artificial Intelligence &amp; Data Science
          </span>
          <span className="text-accent font-semibold text-lg md:text-xl block mt-2 tracking-wider">
            Full Stack Development • AI
          </span>
        </h1>
        <p className="font-body-lg text-base md:text-lg font-normal leading-[1.75] text-fg/70 max-w-2xl mb-10">
          I build web apps and AI tools from the ground up—from React frontends down to the APIs and databases behind them. I enjoy digging into technical problems, whether that means shipping a new feature or figuring out why a system is behaving the way it is.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="bg-accent text-bg px-8 py-4 rounded-lg font-display tracking-widest font-bold uppercase text-sm hover:opacity-80 transition-opacity duration-300" href="#projects">
            View Projects
          </a>
          <a
            className="border border-fg/30 text-accent px-8 py-4 rounded-lg font-display tracking-widest font-bold uppercase text-sm hover:border-accent transition-colors duration-300 inline-flex items-center gap-2"
            href="/res.pdf"
            download="Manish_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
