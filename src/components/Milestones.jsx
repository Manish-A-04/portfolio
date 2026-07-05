export default function Milestones() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-fg/30">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-headline-md font-extrabold text-headline-md">Milestones</h2>
        </div>
        <div className="md:col-span-8 space-y-12">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p className="font-display font-bold text-lg">B.E. in Computer Science</p>
              <p className="font-body-md text-fg/70">Kings Engineering College</p>
            </div>
            <p className="font-body-md text-accent">2020 — 2024</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p className="font-display font-bold text-lg">First Place, National AI Hackathon</p>
              <p className="font-body-md text-fg/70">Recognized for optimized SQL generator</p>
            </div>
            <p className="font-body-md text-accent">2023</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p className="font-display font-bold text-lg">NPTEL Certification in Machine Learning</p>
              <p className="font-body-md text-fg/70">Scored in the top 1% nationally</p>
            </div>
            <p className="font-body-md text-accent">2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
