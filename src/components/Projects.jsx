import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../lib/motionVariants';

const PROJECTS = [
  {
    title: "Sales Analysis & Forecasting",
    tech: "Python · Pandas · Prophet · Power BI",
    link: "https://github.com/Manish-A-04/global-store-analytics",
    links: null,
    desc: "Cleaned and structured a large retail transactions dataset, built a Facebook Prophet sales forecasting model, and delivered an interactive Power BI dashboard covering sales, profitability, and regional performance.",
    points: [
      { bold: "Data Preparation", rest: "Cleaned and organized a large retail transactions dataset, calculating fields such as shipping duration and profit margin along the way." },
      { bold: "Forecasting & Reporting", rest: "Converted the cleaned data into a time series format and built a sales forecasting model using Facebook Prophet, wrapped into an interactive Power BI dashboard." },
    ],
  },
  {
    title: "Retail Intelligence Dashboard",
    tech: "Python · Pandas · Scikit-learn · Streamlit · Plotly",
    link: "https://github.com/Manish-A-04/retail-analytics",
    links: null,
    desc: "An executive analytics platform that uncovers root drivers of margin erosion and delivery delays across 329,000+ transactions, featuring predictive modeling and policy simulation.",
    points: [
      { bold: "Root Cause Analysis", rest: "Analyzed 329,000+ transactions to trace why the business ran a $1.6M net loss — discounts above 15% alone caused $4.09M of it." },
      { bold: "Predictive Simulation", rest: "Built a logistic regression model to flag risky orders and simulated a 15% discount cap that would turn the loss into a $6.4M profit gain." },
    ],
  },
  {
    title: "Business Performance & Profitability",
    tech: "Power BI · DAX",
    link: "https://github.com/Manish-A-04/sales-dashboard",
    links: null,
    desc: "A three-page interactive Power BI reporting suite evaluating multi-year retail transactions to track revenue growth, pinpoint margin erosion, and map customer cohort behavior.",
    points: [
      { bold: "DAX Profitability Modeling", rest: "Built a three-page Power BI report showing discounts above 20% drove order volume but almost no profit — 47% of orders at a loss." },
      { bold: "Demographic Mapping", rest: "Broke revenue down by age and location; the 25–35 group drove 64% of revenue with a steady 5-day fulfillment turnaround." },
    ],
  },
  {
    title: "Power Generation Analysis",
    tech: "Microsoft Excel · Pivot Tables",
    link: "https://github.com/Manish-A-04/india-power-generation-analysis",
    links: null,
    desc: "Consolidated seven months of CEA power generation data across 500+ stations into a single, clean workbook with an executive KPI dashboard.",
    points: [
      { bold: "Data Consolidation", rest: "Combined seven months of CEA data, removed duplicate summary rows, and calculated target variance, achievement %, and plant load factor per station." },
      { bold: "Dashboard Design", rest: "Built pivot tables and an executive dashboard with KPI cards — coal confirmed as the largest source, national target exceeded." },
    ],
  },
  {
    title: "Delivery Delay Prediction",
    tech: "Python · XGBoost · LightGBM · CatBoost · Optuna · SHAP · MLflow · Streamlit",
    link: "https://github.com/Manish-A-04/olist-late-delivery-prediction",
    links: null,
    desc: "Analyzed e-commerce order and shipping data to identify drivers of late deliveries — from raw data cleaning through ensemble modeling to a deployable Streamlit app.",
    points: [
      { bold: "Modeling & Tuning", rest: "Trained and compared XGBoost, LightGBM, CatBoost, and Random Forest classifiers, tuned with Optuna and tracked in MLflow." },
      { bold: "Explainability & Deployment", rest: "Applied SHAP to surface the key features, then packaged the model into a Streamlit app for real-time inference." },
    ],
  },
  {
    title: "Social Media Comment Scraper",
    tech: "Python · PostgreSQL · AsyncPG · Langdetect",
    link: "https://github.com/Manish-A-04/reddit-yt-comments-scraper",
    links: null,
    desc: "A scraping pipeline for Reddit and YouTube comments with rate limiting, structured PostgreSQL storage, language detection, and export to JSONL, CSV, and Hugging Face datasets.",
    points: [
      { bold: "Async Data Pipeline", rest: "Designed a PostgreSQL schema for sessions, posts, and comments with async inserts and retry logic for long scraping sessions." },
      { bold: "NLP Preprocessing", rest: "Added text cleaning and language detection with flexible exports to support downstream ML dataset creation." },
    ],
  },
  {
    title: "SQL Easy Query + Gemma 3 Fine-Tuning",
    tech: "PyTorch · Transformers · PEFT · Ollama · FastAPI · React · SQLGlot",
    link: null,
    links: [
      { label: "App Repo", url: "https://github.com/Manish-A-04/sql-easy-query" },
      { label: "Fine-Tuning", url: "https://github.com/Manish-A-04/gemma3-finetuning" },
    ],
    desc: "An AI assistant that translates natural language into SQL across five database dialects. Fine-tuned Gemma 3 4B using QLoRA, with SQL validation and AI-generated result summaries.",
    points: [
      { bold: "LLM Fine-Tuning", rest: "Fine-tuned Gemma 3 4B for Text-to-SQL using 4-bit QLoRA on the b-mc2/sql-create-context dataset, deployed locally via Ollama." },
      { bold: "Query Validation", rest: "Implemented SQLGlot-based SQL validation, automatic correction, and AI-generated summaries of query results." },
    ],
  },
  {
    title: "Enta — Bilingual Intent & Slot Prediction",
    tech: "PyTorch · Transformers · SentencePiece · Streamlit",
    link: "https://github.com/Manish-A-04/Enta-intent-and-slot-prediction",
    links: null,
    desc: "A bilingual (English & Tamil) joint intent classification and slot filling model built from scratch in PyTorch using the MASSIVE multilingual dataset.",
    points: [
      { bold: "Model Architecture", rest: "Designed a shared Transformer encoder with task-specific heads, attention-based intent pooling, and CRF-based slot decoding." },
      { bold: "End-to-End Pipeline", rest: "Implemented complete training, evaluation, and inference pipelines enabling real-time multilingual intent and entity prediction." },
    ],
  },
];

function ProjectRow({ project, index, isOpen, onToggle }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      {/* ── Main clickable row ── */}
      <motion.div
        className="relative cursor-pointer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={onToggle}
      >
        {/* Accent left bar grows on hover */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ backgroundColor: 'var(--color-accent)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered || isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Row background wash on hover */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--color-accent)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.04 : 0 }}
          transition={{ duration: 0.25 }}
        />

        <div className="relative flex items-start md:items-center gap-4 md:gap-6 px-5 md:px-6 py-6 md:py-7">
          {/* Number */}
          <motion.span
            className="font-display font-bold text-[13px] tracking-widest shrink-0 mt-0.5 md:mt-0"
            animate={{ color: hovered || isOpen ? 'var(--color-accent)' : 'var(--color-fg-muted)' }}
            transition={{ duration: 0.2 }}
          >
            {num}
          </motion.span>

          {/* Title */}
          <div className="flex-1 min-w-0">
            <motion.h3
              className="font-display font-bold text-lg md:text-xl leading-snug"
              animate={{ x: hovered ? 6 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              style={{ color: 'var(--color-fg)' }}
            >
              {project.title}
            </motion.h3>
          </div>

          {/* Tech — hidden on mobile */}
          <p className="hidden md:block text-[12px] max-w-[280px] text-right shrink-0"
            style={{ color: 'var(--color-fg-muted)' }}>
            {project.tech}
          </p>

          {/* Toggle arrow */}
          <motion.div
            className="shrink-0 w-7 h-7 flex items-center justify-center"
            style={{
              border: '1px solid var(--color-border)',
              color: isOpen ? 'var(--color-accent)' : 'var(--color-fg-muted)',
            }}
            animate={{
              rotate: isOpen ? 45 : 0,
              borderColor: isOpen ? 'var(--color-accent)' : 'var(--color-border)',
            }}
            transition={{ duration: 0.25 }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Expandable detail panel ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-5 md:px-6 pb-8 pt-2"
              style={{ borderTop: '1px solid var(--color-border)' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-8 pt-6">
                {/* Left: desc + points */}
                <div>
                  <p className="text-[15px] leading-[1.8] mb-6"
                    style={{ color: 'var(--color-fg-muted)' }}>
                    {project.desc}
                  </p>
                  <ul className="space-y-0">
                    {project.points.map(({ bold, rest }, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex gap-3 py-3 text-[14px] leading-[1.75]"
                        style={{ borderBottom: i < project.points.length - 1 ? '1px solid var(--color-border)' : 'none', color: 'var(--color-fg-muted)' }}
                      >
                        <span className="w-1 h-1 mt-2.5 shrink-0"
                          style={{ backgroundColor: 'var(--color-accent)' }} />
                        <span>
                          <strong style={{ color: 'var(--color-fg)' }}>{bold}: </strong>
                          {rest}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech mobile view */}
                  <p className="md:hidden text-[12px] mt-5 pt-4"
                    style={{ color: 'var(--color-fg-muted)', borderTop: '1px solid var(--color-border)' }}>
                    {project.tech}
                  </p>
                </div>

                {/* Right: GitHub links */}
                <div className="flex flex-col gap-3 md:pt-1">
                  <p className="font-display text-[10px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: 'var(--color-fg-muted)' }}>
                    Repository
                  </p>
                  {project.links ? (
                    project.links.map(({ label, url }) => (
                      <motion.a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 text-[12px] font-display font-bold tracking-widest uppercase group"
                        style={{
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-fg)',
                          backgroundColor: 'transparent',
                        }}
                        whileHover={{
                          borderColor: 'var(--color-accent)',
                          color: 'var(--color-accent)',
                          x: 4,
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        {label}
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </motion.a>
                    ))
                  ) : project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-[12px] font-display font-bold tracking-widest uppercase"
                      style={{
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-fg)',
                        backgroundColor: 'transparent',
                      }}
                      whileHover={{
                        borderColor: 'var(--color-accent)',
                        color: 'var(--color-accent)',
                        x: 4,
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      GitHub
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i);

  return (
    <section
      id="projects"
      className="relative w-full py-[110px] md:py-[140px]"
      style={{ backgroundColor: 'var(--color-surface-2)' }}
    >
      <div className="max-w-[1160px] mx-auto px-5 md:px-12">

        {/* Header */}
        <motion.div
          className="mb-14"
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight"
              style={{ color: 'var(--color-fg)' }}
            >
              Things I've built.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[13px] max-w-xs"
              style={{ color: 'var(--color-fg-muted)' }}
            >
              Click any project to expand and explore the details.
            </motion.p>
          </div>
        </motion.div>

        {/* Project list */}
        <motion.div
          style={{ borderTop: '1px solid var(--color-border)' }}
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
            >
              <ProjectRow
                project={project}
                index={i}
                isOpen={openIdx === i}
                onToggle={() => toggle(i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
