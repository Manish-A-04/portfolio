export default function Projects() {
  const projects = [
    {
      title: "StudyGraphRAG",
      tech: ['FastAPI', 'SQLAlchemy', 'React', 'Neo4j', 'GraphRAG', 'Gemini'],
      link: "https://github.com/Manish-A-04/StudyGraphRAG",
      desc: "An AI-powered study assistant that converts PDF documents into a Neo4j knowledge graph, enabling context-aware retrieval and conversational question answering.",
      points: [
        "Knowledge Graph Pipeline: Built an asynchronous ingestion pipeline to extract entities, relationships, and embeddings, enabling efficient processing of large study materials.",
        "Backend & Retrieval: Developed FastAPI APIs for document upload, graph management, and GraphRAG-powered conversational querying with LLM-based answer generation."
      ]
    },
    {
      title: "SQL Easy Query",
      tech: ['PyTorch', 'Ollama', 'FastAPI', 'React', 'SQLGlot'],
      link: [
        { label: "App Repo", url: "https://github.com/Manish-A-04/sql-easy-query" },
        { label: "Finetuning Script", url: "https://github.com/Manish-A-04/gemma3-finetuning" }
      ],
      desc: "A full-stack AI database assistant that translates natural language into SQL queries for SQLite, PostgreSQL, MySQL, SQL Server, and Oracle.",
      points: [
        "LLM Fine-Tuning: Fine-tuned Gemma 3 4B for Text-to-SQL using 4-bit QLoRA on the sql-create-context dataset and deployed the model locally with Ollama.",
        "Reliable SQL Generation: Improved query accuracy using SQLGlot-based validation, automatic query correction, and AI-generated result summaries."
      ]
    },
    {
      title: "Local Speech-to-Speech AI Assistant",
      tech: ['Whisper', 'Ollama', 'Kokoro TTS', 'Gradio', 'PyAudio'],
      link: "https://github.com/Manish-A-04/Speech-to-Speech",
      desc: "A fully local speech-to-speech AI assistant that combines Whisper, Ollama, and Kokoro TTS for private, real-time voice conversations without cloud APIs.",
      points: [
        "Real-Time Voice Pipeline: Built a streaming pipeline for speech recording, transcription, LLM inference, and natural voice synthesis with low latency.",
        "Interactive Application: Developed a Gradio interface for seamless end-to-end voice interactions while keeping all inference completely local."
      ]
    },
    {
      title: "Enta Intent & Slot Classification",
      tech: ['PyTorch', 'Transformers', 'SentencePiece', 'Streamlit'],
      link: "https://github.com/Manish-A-04/Enta-intent-and-slot-prediction",
      desc: "A bilingual (English & Tamil) joint intent classification and slot filling system built from scratch in PyTorch using the MASSIVE multilingual dataset.",
      points: [
        "Model Architecture: Designed a shared Transformer encoder with task-specific heads, attention-based intent pooling, and CRF-based slot decoding.",
        "Training & Inference Pipeline: Implemented complete training, evaluation, and real-time inference pipelines for multilingual intent detection and entity extraction."
      ]
    }
  ];

  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop" id="projects">
      <div className="py-section-gap border-t border-fg/30 max-w-6xl mx-auto w-full">
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

              <div className="md:text-right mt-6 md:mt-0 flex flex-col md:items-end gap-4">
                {Array.isArray(project.link) ? (
                  project.link.map((item, i) => {
                    const url = typeof item === 'object' ? item.url : item;
                    const label = typeof item === 'object' ? item.label : 'GitHub';
                    return (
                      <a
                        key={i}
                        className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-sm"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label} &rarr;
                      </a>
                    );
                  })
                ) : (
                  <a
                    className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-sm"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
