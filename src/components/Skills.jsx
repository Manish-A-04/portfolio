export default function Skills() {
  return (
    <section className="py-section-gap border-t border-fg/30 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop xl:pr-36" id="skills">
      <div>
      <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-4xl mb-16">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        <div className="break-words">
          <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {['Python', 'SQL', 'JavaScript'].map(skill => (
              <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="break-words">
          <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Frameworks &amp; Libraries</h3>
          <div className="flex flex-wrap gap-3">
            {['PyTorch', 'Hugging Face', 'LangChain', 'FastAPI', 'ReactJS', 'SQLAlchemy', 'Gradio'].map(skill => (
              <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="break-words">
          <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Core Areas</h3>
          <div className="flex flex-wrap gap-3">
            {['Natural Language Processing', 'Generative AI', 'Retrieval-Augmented Generation (RAG)', 'Model Fine-tuning', 'Sequence Modeling', 'Predictive Modeling'].map(skill => (
              <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="break-words">
          <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Tools &amp; Platforms</h3>
          <div className="flex flex-wrap gap-3">
            {['Ollama', 'Neo4j', 'Docker', 'Git & GitHub', 'MLflow', 'PySpark', 'Google Colab'].map(skill => (
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
