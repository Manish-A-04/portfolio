export default function About() {
  return (
    <section className="py-section-gap border-t border-fg/30" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
        <div className="md:col-span-7">
          <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-5xl mb-8">About Me</h2>
          <div className="space-y-8 text-fg/80 leading-[1.8] font-body-lg text-lg md:text-2xl font-bold">
            <p>
              My journey in engineering is driven by the conviction that AI should be practical, explainable, and production-ready. I focus on building systems where intelligence isn't just a buzzword, but a core architectural layer that solves real-world data challenges.
            </p>
            <p>
              From architecting complex RAG pipelines to optimizing small-scale classification models, I prioritize efficiency and accuracy. I believe the most successful AI implementations are those that integrate seamlessly with existing human workflows, augmenting capabilities rather than replacing them.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 space-y-12 mt-12 md:mt-0 self-start">
          <div>
            <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Education</h4>
            <p className="font-body-lg text-lg md:text-2xl font-bold">Kings Engineering College</p>
            <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70">B.Tech. AI and Data Science</p>
            <p className="font-body-lg text-base md:text-lg font-bold text-fg/50 mt-2">2022 - 2026 | CGPA: 8.3/10</p>
          </div>
          <div>
            <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Location</h4>
            <p className="font-body-lg text-lg md:text-2xl font-bold">Chennai, India</p>
          </div>
          <div>
            <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Current Focus</h4>
            <ul className="space-y-3">
              <li className="font-body-lg text-lg md:text-2xl font-bold custom-bullet">LLM Fine-tuning</li>
              <li className="font-body-lg text-lg md:text-2xl font-bold custom-bullet">Graph-based RAG</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Availability</h4>
            <p className="font-body-lg text-lg md:text-2xl font-bold">Open for select collaborations & opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
