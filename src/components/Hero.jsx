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
            Data Science • Analytics • MIS
          </span>
        </h1>
        <p className="font-body-lg text-base md:text-lg font-normal leading-[1.75] text-fg/70 max-w-2xl mb-10">
          I'm a B.Tech graduate in AI and Data Science with hands-on experience building predictive models, SQL-backed pipelines, and interactive dashboards. I enjoy turning raw data into clear insights through analysis, forecasting, and reporting. I'm actively seeking Data Science, Data Analyst, and MIS Analyst roles.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="bg-accent text-bg px-8 py-4 rounded-lg font-display tracking-widest font-bold uppercase text-sm hover:opacity-80 transition-opacity duration-300" href="#projects">
            View Projects
          </a>
          <a
            className="border border-fg/30 text-accent px-8 py-4 rounded-lg font-display tracking-widest font-bold uppercase text-sm hover:border-accent transition-colors duration-300 inline-flex items-center gap-2"
            href="/resume.pdf"
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
