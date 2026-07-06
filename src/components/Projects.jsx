export default function Projects() {
  return (
    <section className="py-section-gap border-t border-fg/30" id="projects">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-5xl mb-20">Select Projects</h2>
        <div className="space-y-16">
          
          {/* Project 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:bg-white/10 transition-colors">
            <div className="flex flex-col xl:flex-row justify-between gap-8 mb-12">
              <div className="min-w-0 w-full">
                <h3 className="font-display tracking-wide font-extrabold text-2xl md:text-5xl mb-6 break-all sm:break-words">StudyGraphRAG</h3>
                <div className="flex flex-wrap gap-3">
                  {['FastAPI', 'SQLAlchemy', 'React', 'Neo4j', 'GraphRAG', 'Gemini'].map(t => (
                    <span key={t} className="px-4 py-2 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="xl:text-right">
                <a className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-xl bg-accent/10 px-6 py-3 rounded-full" href="https://github.com/Manish-A-04">
                  GitHub &rarr;
                </a>
              </div>
            </div>
            
            <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/90 leading-[1.8] mb-12 max-w-5xl">
              Graph-aware study assistant that transforms PDF documents into a Neo4j knowledge graph, enabling graph-aware retrieval for contextual question answering.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5">
                <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Ingestion Pipeline</h4>
                <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70 leading-relaxed">
                  Designed an asynchronous pipeline to extract entities, relationships, and embeddings, allowing efficient background processing of large study materials.
                </p>
              </div>
              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5">
                <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Core API Integration</h4>
                <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70 leading-relaxed">
                  Developed FastAPI APIs for document upload, graph management, and conversational querying by integrating LLM-based answer generation.
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:bg-white/10 transition-colors">
            <div className="flex flex-col xl:flex-row justify-between gap-8 mb-12">
              <div className="min-w-0 w-full">
                <h3 className="font-display tracking-wide font-extrabold text-2xl md:text-5xl mb-6 break-all sm:break-words">SQL Easy Query + Gemma 3</h3>
                <div className="flex flex-wrap gap-3">
                  {['PyTorch', 'Ollama', 'FastAPI', 'React', 'SQLGlot'].map(t => (
                    <span key={t} className="px-4 py-2 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="xl:text-right">
                <a className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-xl bg-accent/10 px-6 py-3 rounded-full" href="https://github.com/Manish-A-04">
                  GitHub &rarr;
                </a>
              </div>
            </div>
            
            <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/90 leading-[1.8] mb-12 max-w-5xl">
              A full-stack AI database assistant that converts natural language into SQL queries across SQLite, PostgreSQL, MySQL, SQL Server, and Oracle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5">
                <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Model Fine-Tuning</h4>
                <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70 leading-relaxed">
                  Fine-tuned Gemma 3 4B for Text-to-SQL using 4-bit QLoRA on the sql-create-context dataset and deployed locally using Ollama.
                </p>
              </div>
              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5">
                <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Query Reliability</h4>
                <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70 leading-relaxed">
                  Improved query reliability by implementing SQLGlot-based validation, automatic query correction, and AI-generated summaries.
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:bg-white/10 transition-colors">
            <div className="flex flex-col xl:flex-row justify-between gap-8 mb-12">
              <div className="min-w-0 w-full">
                <h3 className="font-display tracking-wide font-extrabold text-2xl md:text-5xl mb-6 break-all sm:break-words">Speech-to-Speech AI</h3>
                <div className="flex flex-wrap gap-3">
                  {['Whisper', 'Ollama', 'Kokoro TTS', 'Gradio', 'PyAudio'].map(t => (
                    <span key={t} className="px-4 py-2 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="xl:text-right">
                <a className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-xl bg-accent/10 px-6 py-3 rounded-full" href="https://github.com/Manish-A-04">
                  GitHub &rarr;
                </a>
              </div>
            </div>
            
            <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/90 leading-[1.8] mb-12 max-w-5xl">
              A fully local speech-to-speech AI assistant integrating Whisper for speech recognition, Ollama for LLM inference, and Kokoro TTS for voice synthesis.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5">
                <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Real-Time Pipeline</h4>
                <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70 leading-relaxed">
                  Built a real-time audio pipeline to record speech, transcribe audio, generate streamed LLM responses, and synthesize natural voice output.
                </p>
              </div>
              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5">
                <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Interactive Interface</h4>
                <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70 leading-relaxed">
                  Created an interactive Gradio interface for seamless voice conversations without relying on external cloud APIs.
                </p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:bg-white/10 transition-colors">
            <div className="flex flex-col xl:flex-row justify-between gap-8 mb-12">
              <div className="min-w-0 w-full">
                <h3 className="font-display tracking-wide font-extrabold text-2xl md:text-5xl mb-6 break-all sm:break-words">Enta Classification</h3>
                <div className="flex flex-wrap gap-3">
                  {['PyTorch', 'Transformers', 'SentencePiece', 'Streamlit'].map(t => (
                    <span key={t} className="px-4 py-2 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="xl:text-right">
                <a className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-xl bg-accent/10 px-6 py-3 rounded-full" href="https://github.com/Manish-A-04">
                  GitHub &rarr;
                </a>
              </div>
            </div>
            
            <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/90 leading-[1.8] mb-12 max-w-5xl">
              A bilingual (English & Tamil) joint intent classification and slot filling model built from scratch in PyTorch using the MASSIVE multilingual dataset.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5">
                <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Architecture</h4>
                <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70 leading-relaxed">
                  Designed a shared Transformer encoder with task-specific heads, attention-based intent pooling, and CRF-based slot decoding.
                </p>
              </div>
              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5">
                <h4 className="font-display tracking-wide font-bold text-xl md:text-2xl text-accent mb-4">Pipeline Implementation</h4>
                <p className="font-body-lg text-lg md:text-2xl font-bold text-fg/70 leading-relaxed">
                  Implemented complete training, evaluation, and inference pipelines, enabling real-time multilingual intent and entity prediction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
