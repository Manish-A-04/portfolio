export default function Projects() {
  return (
    <section className="py-section-gap border-t border-fg/30" id="projects">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-display font-extrabold text-headline-lg mb-24">Projects</h2>
        <div className="space-y-32 max-w-3xl">
          
          {/* Project 1 */}
          <div className="group border-b border-fg/30 pb-16">
            <h3 className="font-display font-extrabold text-headline-lg-mobile md:text-headline-lg mb-6">StudyGraphRAG</h3>
            <p className="font-body-lg text-fg/70 mb-12">
              Graph-aware study assistant that transforms PDF documents into Neo4j knowledge graphs for contextual question answering.
            </p>
            
            <div className="space-y-8 mb-12">
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Problem</h4>
                <p className="font-body-md text-fg/70">
                  Users struggle to retrieve contextual information from large study materials. Standard RAG struggles with complex entity relationships in dense technical papers.
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Solution</h4>
                <p className="font-body-md text-fg/70">
                  Designed an asynchronous GraphRAG pipeline using Neo4j, FastAPI, and Gemini to enable graph-aware retrieval.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h4 className="font-display font-bold text-lg mb-2">Tech Stack</h4>
              <p className="font-body-md text-fg/70">FastAPI • Neo4j • React • Gemini • GraphRAG</p>
            </div>

            <div className="flex gap-8">
              <a className="font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-sm" href="#">
                GitHub &rarr;
              </a>
              <a className="font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-sm" href="#">
                Live Demo &rarr;
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group border-b border-fg/30 pb-16">
            <h3 className="font-display font-extrabold text-headline-lg-mobile md:text-headline-lg mb-6">SQL Easy Query</h3>
            <p className="font-body-lg text-fg/70 mb-12">
              Empowering non-technical users to query complex databases using natural language.
            </p>
            
            <div className="space-y-8 mb-12">
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Problem</h4>
                <p className="font-body-md text-fg/70">
                  Data silos exist because business users cannot write optimized SQL queries.
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Solution</h4>
                <p className="font-body-md text-fg/70">
                  Provides a natural language to SQL pipeline with schema-aware validation and query optimization.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h4 className="font-display font-bold text-lg mb-2">Tech Stack</h4>
              <p className="font-body-md text-fg/70">PostgreSQL • OpenAI API • FastAPI</p>
            </div>

            <div className="flex gap-8">
              <a className="font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-sm" href="#">
                Live Demo &rarr;
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group border-b border-fg/30 pb-16">
            <h3 className="font-display font-extrabold text-headline-lg-mobile md:text-headline-lg mb-6">Speech-to-Speech AI</h3>
            <p className="font-body-lg text-fg/70 mb-12">
              A real-time voice translation system with low latency and emotion-preserving synthesis.
            </p>
            
            <div className="space-y-8 mb-12">
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Problem</h4>
                <p className="font-body-md text-fg/70">
                  Existing translation tools strip the emotional context and tone from speech.
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Solution</h4>
                <p className="font-body-md text-fg/70">
                  Integrated Whisper for transcription with emotional-cloning TTS engines.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h4 className="font-display font-bold text-lg mb-2">Tech Stack</h4>
              <p className="font-body-md text-fg/70">PyTorch • Whisper • WebSockets</p>
            </div>

            <div className="flex gap-8">
              <a className="font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-sm" href="#">
                Source Code &rarr;
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group pb-16">
            <h3 className="font-display font-extrabold text-headline-lg-mobile md:text-headline-lg mb-6">Enta Classification</h3>
            <p className="font-body-lg text-fg/70 mb-12">
              High-performance document classification for enterprise-scale legal datasets.
            </p>
            
            <div className="space-y-8 mb-12">
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Problem</h4>
                <p className="font-body-md text-fg/70">
                  Manual classification of legal documents was slow and prone to 30% error rates.
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Solution</h4>
                <p className="font-body-md text-fg/70">
                  Built custom-trained BERT models achieving 96% accuracy on multi-label classification tasks.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h4 className="font-display font-bold text-lg mb-2">Tech Stack</h4>
              <p className="font-body-md text-fg/70">BERT • HuggingFace • Docker</p>
            </div>

            <div className="flex gap-8">
              <a className="font-display font-bold uppercase tracking-widest text-accent hover:opacity-80 transition-colors text-sm" href="#">
                Read Case Study &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
