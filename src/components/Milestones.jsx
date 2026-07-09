export default function Milestones() {
  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop" id="milestones">
      <div className="py-section-gap border-t border-fg/30 max-w-6xl mx-auto w-full">
        <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-4xl mb-16">Milestones</h2>
        <div className="space-y-10 max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between gap-3 pb-8 border-b border-fg/10 border-l-2 border-l-accent/30 pl-4 md:border-l-0 md:pl-0">
            <div>
              <p className="font-display tracking-wide font-bold text-xl md:text-2xl">B.Tech. in AI and Data Science</p>
              <p className="font-body-lg text-base md:text-lg font-normal text-fg/60 mt-2">Kings Engineering College – Chennai</p>
            </div>
            <p className="font-display tracking-widest text-sm font-bold uppercase text-accent shrink-0">Sep 2022 — Apr 2026</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-3 pb-8 border-b border-fg/10 border-l-2 border-l-accent/30 pl-4 md:border-l-0 md:pl-0">
            <div>
              <p className="font-display tracking-wide font-bold text-xl md:text-2xl">Vice President, AI Club</p>
              <p className="font-body-lg text-base md:text-lg font-normal text-fg/60 mt-2">Organized AI seminars, mentored junior students, and conducted technical sessions.</p>
            </div>
            <p className="font-display tracking-widest text-sm font-bold uppercase text-accent shrink-0">College</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-3 pb-8 border-b border-fg/10 border-l-2 border-l-accent/30 pl-4 md:border-l-0 md:pl-0">
            <div>
              <p className="font-display tracking-wide font-bold text-xl md:text-2xl">Chatbot Challenge Runner-Up</p>
              <p className="font-body-lg text-base md:text-lg font-normal text-fg/60 mt-2">Secured 2nd place in a chatbot development competition at Sairam Institute.</p>
            </div>
            <p className="font-display tracking-widest text-sm font-bold uppercase text-accent shrink-0">Competition</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-3 border-l-2 border-l-accent/30 pl-4 md:border-l-0 md:pl-0">
            <div>
              <p className="font-display tracking-wide font-bold text-xl md:text-2xl">ML & Data Science Courses</p>
              <p className="font-body-lg text-base md:text-lg font-normal text-fg/60 mt-2">Completed comprehensive courses on Udemy covering supervised learning, NLP, and deployment.</p>
            </div>
            <p className="font-display tracking-widest text-sm font-bold uppercase text-accent shrink-0">Udemy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
