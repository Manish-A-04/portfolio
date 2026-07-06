export default function Skills() {
  return (
    <section className="py-section-gap border-t border-fg/30" id="skills">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-5xl mb-20">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="break-words">
          <h3 className="font-display font-bold text-2xl md:text-4xl text-accent mb-6">Languages</h3>
          <div className="flex flex-wrap gap-4">
            {['Python', 'SQL', 'JavaScript'].map(skill => (
              <span key={skill} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 font-body-lg text-lg md:text-xl font-bold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="break-words">
          <h3 className="font-display font-bold text-2xl md:text-4xl text-accent mb-6">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-4">
            {['PyTorch', 'Hugging Face', 'LangChain', 'FastAPI', 'ReactJS', 'SQLAlchemy', 'Gradio'].map(skill => (
              <span key={skill} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 font-body-lg text-lg md:text-xl font-bold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="break-words">
          <h3 className="font-display font-bold text-2xl md:text-4xl text-accent mb-6">Core Areas</h3>
          <div className="flex flex-wrap gap-4">
            {['Natural Language Processing', 'Generative AI', 'Retrieval-Augmented Generation (RAG)', 'Model Fine-tuning', 'Sequence Modeling', 'Predictive Modeling'].map(skill => (
              <span key={skill} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 font-body-lg text-lg md:text-xl font-bold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="break-words">
          <h3 className="font-display font-bold text-2xl md:text-4xl text-accent mb-6">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-4">
            {['Ollama', 'Neo4j', 'Docker', 'Git & GitHub', 'MLflow', 'PySpark', 'Google Colab'].map(skill => (
              <span key={skill} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 font-body-lg text-lg md:text-xl font-bold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
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
