export default function Skills() {
  return (
    <section className="py-section-gap border-t border-fg/30" id="skills">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-display font-extrabold text-headline-lg-mobile md:text-headline-lg mb-20 text-center">Technical Arsenal</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
        <div>
          <h3 className="font-display font-bold text-2xl mb-6">Languages</h3>
          <ul className="space-y-3 font-body-md text-fg/80">
            <li>Python</li>
            <li>SQL</li>
            <li>C++</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-bold text-2xl mb-6">AI/ML</h3>
          <ul className="space-y-3 font-body-md text-fg/80">
            <li>PyTorch</li>
            <li>Scikit-Learn</li>
            <li>HuggingFace</li>
            <li>LangChain</li>
            <li>Neo4j</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-bold text-2xl mb-6">Backend</h3>
          <ul className="space-y-3 font-body-md text-fg/80">
            <li>FastAPI</li>
            <li>Django</li>
            <li>PostgreSQL</li>
            <li>Redis</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-bold text-2xl mb-6">Frontend</h3>
          <ul className="space-y-3 font-body-md text-fg/80">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-bold text-2xl mb-6">Tools</h3>
          <ul className="space-y-3 font-body-md text-fg/80">
            <li>Docker</li>
            <li>AWS</li>
            <li>Git</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
