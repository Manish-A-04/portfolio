export default function About() {
  return (
    <section className="py-section-gap border-t border-fg/30" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8">
          <h2 className="font-display font-extrabold text-headline-lg-mobile md:text-headline-lg mb-8">About Me</h2>
          <div className="space-y-6 text-fg/70 leading-relaxed font-body-lg text-body-lg">
            <p>
              My journey in engineering is driven by the conviction that AI should be practical, explainable, and production-ready. I focus on building systems where intelligence isn't just a buzzword, but a core architectural layer that solves real-world data challenges.
            </p>
            <p>
              From architecting complex RAG pipelines to optimizing small-scale classification models, I prioritize efficiency and accuracy. I believe the most successful AI implementations are those that integrate seamlessly with existing human workflows, augmenting capabilities rather than replacing them.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 md:col-start-9 space-y-12 mt-12 md:mt-0">
          <div>
            <h4 className="font-display font-bold text-xl mb-2">Education</h4>
            <p className="font-body-md">Kings Engineering College</p>
            <p className="font-body-md text-fg/70">B.E. Computer Science</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-xl mb-2">Location</h4>
            <p className="font-body-md">Chennai, India</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-xl mb-2">Current Focus</h4>
            <ul className="space-y-2">
              <li className="font-body-md custom-bullet">LLM Fine-tuning</li>
              <li className="font-body-md custom-bullet">Graph-based RAG</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-xl mb-2">Availability</h4>
            <p className="font-body-md">Open for select collaborations & opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
