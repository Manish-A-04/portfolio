export default function Projects() {
  const projects = [
    {
      title: "StudyGraphRAG",
      tech: ['FastAPI', 'SQLAlchemy', 'React', 'Neo4j', 'GraphRAG', 'Gemini'],
      link: "https://github.com/Manish-A-04",
      desc: "Graph-aware study assistant that transforms PDF documents into a Neo4j knowledge graph, enabling graph-aware retrieval for contextual question answering.",
      points: [
        "Ingestion Pipeline: Designed an asynchronous pipeline to extract entities, relationships, and embeddings, allowing efficient background processing of large study materials.",
        "Core API Integration: Developed FastAPI APIs for document upload, graph management, and conversational querying by integrating LLM-based answer generation."
      ]
    },
    {
      title: "SQL Easy Query + Gemma 3",
      tech: ['PyTorch', 'Ollama', 'FastAPI', 'React', 'SQLGlot'],
      link: "https://github.com/Manish-A-04",
      desc: "A full-stack AI database assistant that converts natural language into SQL queries across SQLite, PostgreSQL, MySQL, SQL Server, and Oracle.",
      points: [
        "Model Fine-Tuning: Fine-tuned Gemma 3 4B for Text-to-SQL using 4-bit QLoRA on the sql-create-context dataset and deployed locally using Ollama.",
        "Query Reliability: Improved query reliability by implementing SQLGlot-based validation, automatic query correction, and AI-generated summaries."
      ]
    },
    {
      title: "Speech-to-Speech AI",
      tech: ['Whisper', 'Ollama', 'Kokoro TTS', 'Gradio', 'PyAudio'],
      link: "https://github.com/Manish-A-04",
      desc: "A fully local speech-to-speech AI assistant integrating Whisper for speech recognition, Ollama for LLM inference, and Kokoro TTS for voice synthesis.",
      points: [
        "Real-Time Pipeline: Built a real-time audio pipeline to record speech, transcribe audio, generate streamed LLM responses, and synthesize natural voice output.",
        "Interactive Interface: Created an interactive Gradio interface for seamless voice conversations without relying on external cloud APIs."
      ]
    },
    {
      title: "Enta Classification",
      tech: ['PyTorch', 'Transformers', 'SentencePiece', 'Streamlit'],
      link: "https://github.com/Manish-A-04",
      desc: "A bilingual (English & Tamil) joint intent classification and slot filling model built from scratch in PyTorch using the MASSIVE multilingual dataset.",
      points: [
        "Architecture: Designed a shared Transformer encoder with task-specific heads, attention-based intent pooling, and CRF-based slot decoding.",
        "Pipeline Implementation: Implemented complete training, evaluation, and inference pipelines, enabling real-time multilingual intent and entity prediction."
      ]
    }
  ];

  return (
    <section className="py-section-gap border-t border-fg/30" id="projects">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-4xl mb-16">Select Projects</h2>
        <div className="space-y-16 max-w-5xl">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col md:flex-row justify-between gap-8 pb-12 border-b border-fg/10 last:border-b-0">
              <div className="flex-1">
                <h3 className="font-display tracking-wide font-bold text-xl md:text-2xl mb-4">{project.title}</h3>
                
                <p className="font-body-lg text-base md:text-lg font-normal leading-[1.7] text-fg/70 mb-6">
                  {project.desc}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {project.points.map((point, pIdx) => {
                    const [boldPart, restPart] = point.split(': ');
                    return (
                      <li key={pIdx} className="font-body-lg text-base md:text-lg text-fg/70 leading-[1.7]">
                        <span className="text-accent font-bold">&bull;</span> <strong className="text-fg/80 font-semibold">{boldPart}:</strong> {restPart}
                      </li>
                    );
                  })}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="text-accent font-display tracking-widest uppercase text-sm font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="md:text-right mt-2 md:mt-0">
                <a 
                  className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-sm" 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
