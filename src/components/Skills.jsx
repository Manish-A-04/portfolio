export default function Skills() {
  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop" id="skills">
      <div className="py-section-gap border-t border-fg/30 max-w-6xl mx-auto w-full">
        <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-4xl mb-16">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div className="break-words">
            <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {['Python', 'JavaScript', 'SQL'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="break-words">
            <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Frameworks &amp; Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {['ReactJS', 'FastAPI', 'SQLAlchemy', 'PyTorch', 'LangChain'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="break-words">
            <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Core Areas</h3>
            <div className="flex flex-wrap gap-3">
              {['Full Stack Web Development', 'RESTful API Design', 'WebSocket', 'Authentication & Authorization', 'Application Debugging & Troubleshooting', 'Machine Learning'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="break-words">
            <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Tools &amp; Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {['Git & GitHub', 'Docker', 'Firebase', 'Neo4j', 'Postman'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="break-words md:col-span-2">
            <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">IT Fundamentals</h3>
            <div className="flex flex-wrap gap-3">
              {['Operating Systems (Windows, Linux basics)', 'Networking Basics (TCP/IP, DNS)'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
