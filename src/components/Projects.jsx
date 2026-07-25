export default function Projects() {
  const projects = [
    {
      title: "Real-Time Chat Application",
      tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'WebSocket', 'WebRTC', 'React', 'TailwindCSS', 'Axios'],
      link: "https://github.com/Manish-A-04/chat-app",
      desc: "Built a full-stack messaging application supporting one-to-one and group chats, voice/video calls, and 24-hour status stories, similar in scope to WhatsApp.",
      points: [
        "WebSocket & WebRTC Signaling: Implemented a single persistent WebSocket connection to handle typing indicators, online presence, read receipts, and WebRTC call signaling for voice and video calls.",
        "Security & Access Control: Designed JWT-based authentication with refresh token rotation, role-based group membership, and granular per-user privacy controls."
      ]
    },
    {
      title: "KM Gurukulam – School Website (Live)",
      tech: ['Next.js', 'Firebase', 'Supabase', 'TailwindCSS', 'Radix UI'],
      link: [
        { label: "github", url: "https://github.com/Manish-A-04/KM-Gurukulam" },
        { label: "live link", url: "https://kmgurukulam.in/" }
      ],
      desc: "Collaborated with a teammate to design and build a live website for a toddler school, currently deployed and used by the client for admissions.",
      points: [
        "Responsive Interface: Styled a fully responsive interface across the landing page, admissions form, and gallery sections, handling overall UI polish and layout.",
        "Backend & Admin Dashboard: Set up Firebase and Supabase as backend services to store admission submissions, and built an admin dashboard to search, filter, and export applicant data to Excel."
      ]
    },
    {
      title: "AI Avatar Assistant System",
      tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'JWT', 'React', 'Axios', 'Vite'],
      link: "https://github.com/Manish-A-04/ai-avatar",
      desc: "Built the full-stack architecture for an AI avatar assistant, connecting a React frontend to an async FastAPI backend through JWT-secured REST APIs.",
      points: [
        "Async Backend & Authentication: Designed authentication with access/refresh tokens and session handling, structuring the PostgreSQL schema using SQLAlchemy's async ORM with Alembic migrations.",
        "Task Scheduler & Pipeline: Built a background task scheduler for automatic media cleanup and orchestrated a multi-stage processing pipeline (speech-to-text, LLM response, text-to-speech, lip-sync) behind a single API layer."
      ]
    },
    {
      title: "StudyGraphRAG",
      tech: ['FastAPI', 'SQLAlchemy', 'React', 'TailwindCSS', 'Axios', 'Neo4j', 'GraphRAG', 'Gemini API'],
      link: "https://github.com/Manish-A-04/StudyGraphRAG",
      desc: "Built a full-stack study assistant with a FastAPI backend and React frontend that lets users upload PDF documents and query them through a Neo4j knowledge graph.",
      points: [
        "Document Processing Worker: Designed asynchronous background workers to parse documents, extract entities and relationships, and generate embeddings without blocking the main API.",
        "Conversational GraphRAG API: Built REST APIs for document upload, graph management, and conversational querying, combining retrieved graph context with an LLM to generate answers."
      ]
    },
    {
      title: "SQL Easy Query + Gemma 3 Fine-Tuning",
      tech: ['PyTorch', 'Transformers', 'PEFT', 'bitsandbytes', 'Ollama', 'FastAPI', 'React', 'SQLAlchemy', 'SQLGlot'],
      link: [
        { label: "App Repo", url: "https://github.com/Manish-A-04/sql-easy-query" },
        { label: "Finetuning Script", url: "https://github.com/Manish-A-04/gemma3-finetuning" }
      ],
      desc: "A full-stack AI database assistant that converts natural language into SQL queries across SQLite, PostgreSQL, MySQL, SQL Server, and Oracle using FastAPI and React.",
      points: [
        "LLM Fine-Tuning: Fine-tuned Gemma 3 4B for Text-to-SQL using 4-bit QLoRA on the b-mc2/sql-create-context dataset and deployed the model locally using Ollama.",
        "Query Validation & Correction: Improved query reliability by implementing SQLGlot-based SQL validation, automatic query correction, and AI-generated summaries of query results."
      ]
    },
    {
      title: "Speech-to-Speech Conversational AI",
      tech: ['OpenAI Whisper', 'Ollama', 'Kokoro TTS', 'eSpeak-NG', 'Gradio', 'PyAudio'],
      link: "https://github.com/Manish-A-04/Speech-to-Speech",
      desc: "Developed a fully local speech-to-speech AI assistant by integrating Whisper for speech recognition, Ollama for LLM inference, and Kokoro TTS with eSpeak-NG for voice synthesis.",
      points: [
        "Real-Time Audio Pipeline: Built a real-time audio pipeline to record speech, transcribe audio, generate streamed LLM responses, and synthesize natural voice output.",
        "Interactive Gradio UI: Created an interactive Gradio interface for seamless voice conversations without relying on external cloud APIs."
      ]
    },
    {
      title: "Enta – Bilingual Intent and Slot Prediction",
      tech: ['PyTorch', 'Transformers', 'SentencePiece', 'Streamlit'],
      link: "https://github.com/Manish-A-04/Enta-intent-and-slot-prediction",
      desc: "Built a bilingual (English & Tamil) joint intent classification and slot filling model from scratch in PyTorch using the MASSIVE multilingual dataset.",
      points: [
        "Model Architecture: Designed a shared Transformer encoder with task-specific heads, attention-based intent pooling, and CRF-based slot decoding for structured prediction.",
        "End-to-End Pipeline: Implemented complete training, evaluation, and inference pipelines, enabling real-time multilingual intent and entity prediction."
      ]
    }
  ];

  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop" id="projects">
      <div className="py-section-gap border-t border-fg/30 max-w-6xl mx-auto w-full">
        <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-4xl mb-16">Projects</h2>
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
