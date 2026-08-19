export default function About() {
  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop" id="about">
      <div className="py-section-gap border-t border-fg/30 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
        <div className="md:col-span-7">
          <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-4xl mb-8">About Me</h2>
          <div className="space-y-6 text-fg/80 font-body-lg text-base md:text-lg font-normal leading-[1.75]">
            <p>
              I'm a B.Tech graduate in Artificial Intelligence and Data Science who likes building software end-to-end. I enjoy working across the whole stack—from building clean React frontends to designing FastAPI backends, databases, and AI pipelines.
            </p>
            <p>
              Whether I'm shipping a new feature, tracing a bug back to its root cause, or setting up background tasks, I like getting under the hood to understand how everything works. I'm eager to bring this hands-on problem-solving approach to full-stack, AI, and support roles.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8 mt-12 md:mt-0 self-start">
          <div>
            <h4 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-3">Education</h4>
            <p className="font-body-lg text-lg md:text-xl font-semibold">Kings Engineering College - Chennai</p>
            <p className="font-body-lg text-base font-normal text-fg/70 mt-1">B.Tech. in Artificial Intelligence and Data Science</p>
            <p className="font-body-lg text-sm font-normal text-fg/50 mt-1">Sep 2022 – Apr 2026 &nbsp;|&nbsp; CGPA: 8.3/10</p>
          </div>
          <div>
            <h4 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-3">Location</h4>
            <p className="font-body-lg text-lg md:text-xl font-semibold">Chennai, India</p>
          </div>
          <div>
            <h4 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-3">Core Competencies</h4>
            <ul className="space-y-2">
              <li className="font-body-lg text-base font-normal text-fg/80 custom-bullet">Full-Stack Web Development</li>
              <li className="font-body-lg text-base font-normal text-fg/80 custom-bullet">AI Engineering &amp; RAG Systems</li>
              <li className="font-body-lg text-base font-normal text-fg/80 custom-bullet">Application Debugging &amp; Troubleshooting</li>
              <li className="font-body-lg text-base font-normal text-fg/80 custom-bullet">IT &amp; Systems Fundamentals (OS, TCP/IP)</li>
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
