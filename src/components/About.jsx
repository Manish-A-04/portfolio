import { useRef } from 'react';
import { useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, stagger, viewport } from '../lib/motionVariants';

function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, v => Math.round(v * 10) / 10);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (inView) {
      const ctrl = animate(motionVal, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return ctrl.stop;
    }
  }, [inView, motionVal, to]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const competencies = [
  'Exploratory Data Analysis & Feature Engineering',
  'Predictive Modeling & Time Series Forecasting',
  'SQL, Database Design & KPI Reporting',
  'Dashboard Development (Power BI, Streamlit, Excel)',
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-[110px] md:py-[140px]"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-[1160px] mx-auto px-5 md:px-12">

        {/* Section heading */}
        <motion.h2
          className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-16"
          style={{ color: 'var(--color-fg)' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Turning data into decisions.
        </motion.h2>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-0 mb-16 max-w-md"
          style={{ borderTop: '1px solid var(--color-border)', borderLeft: '1px solid var(--color-border)' }}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {[
            { val: 8.3, suffix: '/10', label: 'CGPA' },
            { val: 4,   suffix: '',    label: 'Certifications' },
            { val: 8,   suffix: '+',   label: 'Projects Built' },
          ].map(({ val, suffix, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex flex-col px-6 py-5"
              style={{ borderRight: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
            >
              <span
                className="font-display font-bold text-[2rem] leading-none"
                style={{ color: 'var(--color-accent)' }}
              >
                <CountUp to={val} suffix={suffix} />
              </span>
              <span className="text-[11px] mt-2 font-bold tracking-widest uppercase"
                style={{ color: 'var(--color-fg-muted)' }}>
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">

          {/* Left — bio */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="space-y-5 text-[16px] md:text-[17px] leading-[1.9]"
              style={{ color: 'var(--color-fg-muted)' }}>
              <p>
                I'm a B.Tech graduate in Artificial Intelligence and Data Science. I enjoy
                working with data end-to-end — cleaning raw datasets, building SQL-backed
                reporting systems, and training ML models that surface patterns that matter.
              </p>
              <p>
                Whether I'm writing complex queries to answer a business question, building a
                predictive model with XGBoost or LightGBM, or designing a Power BI dashboard
                for stakeholders, I like understanding the full picture.
              </p>
            </div>

            {/* Competencies */}
            <div className="mt-10">
              <p className="font-display text-[11px] font-bold tracking-[0.18em] uppercase mb-5"
                style={{ color: 'var(--color-fg-muted)' }}>
                Core Competencies
              </p>
              <motion.ul
                className="space-y-0"
                variants={stagger(0.07)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {competencies.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-center gap-4 py-3"
                    style={{ borderBottom: '1px solid var(--color-border)' }}
                  >
                    <span className="w-1 h-1 shrink-0"
                      style={{ backgroundColor: 'var(--color-accent)' }} />
                    <span className="text-[14px] md:text-[15px]"
                      style={{ color: 'var(--color-fg)' }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Right — info card, sharp edges */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="space-y-0 lg:sticky lg:top-24"
            style={{
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            {[
              {
                label: 'Education',
                content: (
                  <>
                    <p className="font-display font-bold text-[15px] leading-snug"
                      style={{ color: 'var(--color-fg)' }}>
                      Kings Engineering College – Chennai
                    </p>
                    <p className="text-sm mt-1.5" style={{ color: 'var(--color-fg-muted)' }}>
                      B.Tech. in AI and Data Science
                    </p>
                    <p className="font-display text-[11px] font-bold tracking-widest uppercase mt-3"
                      style={{ color: 'var(--color-accent)' }}>
                      Sep 2022 – Apr 2026 · CGPA 8.3
                    </p>
                  </>
                ),
              },
              {
                label: 'Location',
                content: (
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-fg)' }}>
                    Chennai, India
                  </p>
                ),
              },
              {
                label: 'Status',
                content: (
                  <div className="flex items-center gap-2.5">
                    <motion.span
                      className="w-2 h-2 inline-block"
                      style={{ backgroundColor: '#22C55E' }}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-fg)' }}>
                      Open to opportunities
                    </p>
                  </div>
                ),
              },
            ].map(({ label, content }, i, arr) => (
              <div
                key={label}
                className="p-6"
                style={{
                  borderBottom: i < arr.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <p className="font-display text-[10px] font-bold tracking-[0.18em] uppercase mb-3"
                  style={{ color: 'var(--color-accent)' }}>
                  {label}
                </p>
                {content}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
