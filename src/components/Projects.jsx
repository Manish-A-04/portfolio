export default function Projects() {
  const projects = [
    {
      title: "Delivery Delay Prediction",
      tech: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'Optuna', 'SHAP', 'MLflow', 'Streamlit'],
      link: "https://github.com/Manish-A-04/olist-late-delivery-prediction",
      desc: "Analyzed e-commerce order and shipping data to identify drivers of late deliveries, from raw data cleaning through ensemble modeling to a deployable Streamlit app.",
      points: [
        "Modeling & Tuning: Trained and compared XGBoost, LightGBM, CatBoost, and Random Forest classifiers, tuned with Optuna and tracked across every run in MLflow for reproducibility.",
        "Explainability & Deployment: Applied SHAP to surface the features driving predictions, then packaged the model into a Streamlit app for real-time inference on new orders."
      ]
    },
    {
      title: "Retail Sales Analysis & Forecasting",
      tech: ['Python', 'Pandas', 'NumPy', 'Prophet', 'Power BI'],
      link: "https://github.com/Manish-A-04/global-store-analytics",
      desc: "Cleaned and structured a large retail transactions dataset, built a Facebook Prophet sales forecasting model, and delivered an interactive Power BI dashboard covering sales, profitability, and regional performance.",
      points: [
        "Data Preparation: Cleaned raw transaction records and engineered fields such as shipping duration and profit margin to support downstream analysis.",
        "Forecasting & Reporting: Built a time series model using Facebook Prophet, then turned insights into a stakeholder-ready Power BI dashboard with regional breakdowns and trend views."
      ]
    },
    {
      title: "Power Generation Analysis",
      tech: ['Microsoft Excel', 'Pivot Tables'],
      link: "https://github.com/Manish-A-04/india-power-generation-analysis",
      desc: "Consolidated seven months of official power generation data from India's Central Electricity Authority across 500+ power stations into a single, clean workbook with an executive KPI dashboard.",
      points: [
        "Data Consolidation & Cleaning: Merged multi-source CEA data, removed duplicate summary rows, and computed metrics including target variance, target achievement %, and plant load factor per station.",
        "Dashboard Design: Built pivot-table-driven charts and KPI cards revealing coal as the dominant source and showing the national generation target being exceeded overall."
      ]
    },
    {
      title: "Social Media Comment Scraper",
      tech: ['Python', 'PostgreSQL', 'AsyncPG', 'Langdetect'],
      link: "https://github.com/Manish-A-04/reddit-yt-comments-scraper",
      desc: "Built a scraping pipeline for Reddit and YouTube comments with rate limiting, structured PostgreSQL storage, language detection, and export options to JSONL, CSV, and Hugging Face dataset formats.",
      points: [
        "Async Data Pipeline: Designed a PostgreSQL schema to store sessions, posts, and comments, with async inserts for efficiency and retry logic for reliability over long scraping sessions.",
        "NLP Preprocessing & Export: Added text cleaning and language detection, then built flexible export options to support downstream ML dataset creation."
      ]
    },
    {
      title: "SQL Easy Query + Gemma 3 Fine-Tuning",
      tech: ['PyTorch', 'Transformers', 'PEFT', 'bitsandbytes', 'Ollama', 'FastAPI', 'React', 'SQLAlchemy', 'SQLGlot'],
      link: [
        { label: "App Repo", url: "https://github.com/Manish-A-04/sql-easy-query" },
        { label: "Finetuning Script", url: "https://github.com/Manish-A-04/gemma3-finetuning" }
      ],
      desc: "An AI-powered analytics assistant that translates natural language into SQL queries across five database dialects. Fine-tuned Gemma 3 4B using QLoRA for the text-to-SQL task, with SQL validation and AI-generated result summaries to make database querying accessible to non-technical users.",
      points: [
        "LLM Fine-Tuning: Fine-tuned Gemma 3 4B for Text-to-SQL using 4-bit QLoRA on the b-mc2/sql-create-context dataset and deployed the model locally using Ollama.",
        "Query Validation & Correction: Improved query reliability by implementing SQLGlot-based SQL validation, automatic query correction, and AI-generated summaries of query results."
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
    },
    {
      title: "StudyGraphRAG",
      tech: ['FastAPI', 'SQLAlchemy', 'React', 'TailwindCSS', 'Axios', 'Neo4j', 'GraphRAG', 'Gemini API'],
      link: "https://github.com/Manish-A-04/StudyGraphRAG",
      desc: "Built a document analysis system that parses uploaded PDFs, extracts entities and relationships into a Neo4j knowledge graph, and enables conversational querying over the graph using an LLM.",
      points: [
        "Document Processing & Knowledge Graph: Designed async background workers to parse documents, extract entities and relationships, and populate a Neo4j graph — enabling structured knowledge retrieval from unstructured text.",
        "Conversational GraphRAG API: Built REST APIs for document upload, graph management, and querying, combining retrieved graph context with an LLM to generate grounded answers."
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
                {project.link === null ? null : Array.isArray(project.link) ? (
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
