import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../lib/motionVariants';

const SKILL_GROUPS = [
  {
    label: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript'],
  },
  {
    label: 'Libraries & Frameworks',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'XGBoost', 'LightGBM', 'CatBoost', 'Prophet', 'Optuna', 'SHAP', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Excel', 'Power BI', 'PostgreSQL', 'Jupyter Notebook', 'Git & GitHub', 'Streamlit', 'MLflow'],
  },
  {
    label: 'Core Competencies',
    skills: [
      'Exploratory Data Analysis',
      'Predictive Modeling',
      'Time Series Forecasting',
      'Feature Engineering',
      'Data Cleaning & Preprocessing',
      'Dashboard & KPI Reporting',
      'Database Design',
      'SQL Querying',
    ],
  },
];

function SkillGroup({ group, groupIndex }) {
  return (
    <motion.div
      variants={fadeUp}
      className="py-10"
      style={{ borderBottom: '1px solid var(--color-border)' }}
    >
      {/* Category heading */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
        <p className="font-display text-[11px] font-bold tracking-[0.18em] uppercase pt-0.5"
          style={{ color: 'var(--color-fg-muted)' }}>
          {group.label}
        </p>

        {/* Tags — wave stagger */}
        <motion.div
          className="flex flex-wrap gap-2"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.035, delayChildren: groupIndex * 0.05 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {group.skills.map((skill) => (
            <motion.span
              key={skill}
              className="text-[12px] font-semibold px-3 py-1.5 cursor-default inline-block"
              style={{
                border: '1px solid var(--color-border)',
                color: 'var(--color-fg)',
                backgroundColor: 'var(--color-surface)',
              }}
              variants={{
                hidden:  { opacity: 0, y: 10, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 320, damping: 22 } },
              }}
              whileHover={{
                backgroundColor: 'var(--color-accent)',
                color: '#fff',
                borderColor: 'var(--color-accent)',
                y: -2,
                transition: { type: 'spring', stiffness: 400, damping: 18 },
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-[110px] md:py-[140px]"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-[1160px] mx-auto px-5 md:px-12">

        {/* Header */}
        <motion.h2
          className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-2"
          style={{ color: 'var(--color-fg)' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          What I work with.
        </motion.h2>

        {/* Skill groups — bordered rows */}
        <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '48px' }}>
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {SKILL_GROUPS.map((group, i) => (
              <SkillGroup key={group.label} group={group} groupIndex={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
