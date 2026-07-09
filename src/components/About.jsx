export default function About() {
  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop" id="about">
      <div className="py-section-gap border-t border-fg/30 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
        <div className="md:col-span-7">
          <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-4xl mb-8">About Me</h2>
          <div className="space-y-6 text-fg/80 font-body-lg text-base md:text-lg font-normal leading-[1.75]">
            <p>
              My journey in engineering is driven by the conviction that AI should be practical, explainable, and production-ready. I focus on building systems where intelligence isn't just a buzzword, but a core architectural layer that solves real-world data challenges.
            </p>
            <p>
              From architecting complex RAG pipelines to optimizing small-scale classification models, I prioritize efficiency and accuracy. I believe the most successful AI implementations are those that integrate seamlessly with existing human workflows, augmenting capabilities rather than replacing them.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8 mt-12 md:mt-0 self-start">
          <div>
            <h4 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-3">Education</h4>
            <p className="font-body-lg text-lg md:text-xl font-semibold">Kings Engineering College</p>
            <p className="font-body-lg text-base font-normal text-fg/70 mt-1">B.Tech. AI and Data Science</p>
            <p className="font-body-lg text-sm font-normal text-fg/50 mt-1">2022 – 2026 &nbsp;|&nbsp; CGPA: 8.3/10</p>
          </div>
          <div>
            <h4 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-3">Location</h4>
            <p className="font-body-lg text-lg md:text-xl font-semibold">Chennai, India</p>
          </div>
          <div>
            <h4 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-3">Current Focus</h4>
            <ul className="space-y-2">
              <li className="font-body-lg text-base font-normal text-fg/80 custom-bullet">LLM Fine-tuning</li>
              <li className="font-body-lg text-base font-normal text-fg/80 custom-bullet">Graph-based RAG</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-3">Availability</h4>
            <p className="font-body-lg text-base font-normal text-fg/80">Open for select collaborations &amp; opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
