import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, stagger, viewport } from '../lib/motionVariants';

const TIMELINE = [
  {
    title: 'B.Tech. in AI and Data Science',
    subtitle: 'Kings Engineering College – Chennai',
    meta: 'CGPA: 8.3 / 10',
    date: 'Sep 2022 — Apr 2026',
    tag: 'Education',
  },
  {
    title: 'TensorFlow Keras Bootcamp',
    subtitle: 'OpenCV University',
    meta: null,
    date: 'Certificate',
    tag: 'Certification',
    link: 'https://courses.opencv.org/certificates/fd9dde7bf8024e15be8b5eb88fc807d2',
  },
  {
    title: 'MLOps Bootcamp',
    subtitle: 'Udemy',
    meta: null,
    date: 'Certificate',
    tag: 'Certification',
    link: 'https://www.udemy.com/certificate/UC-900ea863-1dab-4574-a4fb-cc75aff87fe0/',
  },
  {
    title: 'Machine Learning Complete Course',
    subtitle: 'Udemy',
    meta: null,
    date: 'Certificate',
    tag: 'Certification',
    link: 'https://www.udemy.com/certificate/UC-de647704-7b7e-44e7-b2c8-a960c16933e8/',
  },
  {
    title: 'Data Science Complete Course',
    subtitle: 'Udemy',
    meta: null,
    date: 'Certificate',
    tag: 'Certification',
    link: 'https://www.udemy.com/certificate/UC-938f8da6-984f-49b9-8b7c-56f6a4eb3184/',
  },
  {
    title: 'Vice President, AI Club',
    subtitle: 'Kings Engineering College',
    meta: 'Organized AI and ML seminars, mentored junior students, and conducted hands-on technical sessions.',
    date: 'Leadership',
    tag: 'Role',
  },
  {
    title: 'Chatbot Challenge Runner-Up',
    subtitle: 'Sairam Institute',
    meta: 'Secured 2nd place by building a functional chatbot within 60 minutes.',
    date: 'Competition',
    tag: 'Award',
  },
];

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-row items-start gap-0">
      {/* Desktop: alternating columns */}
      <motion.div
        className="flex-1 pl-8 md:pl-0"
        style={
          typeof window !== 'undefined' && window.innerWidth >= 768
            ? isEven
              ? { paddingRight: '40px', textAlign: 'right' }
              : { paddingLeft: '40px', order: 1 }
            : {}
        }
        variants={isEven ? slideRight : slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div
          className="inline-block w-full p-5 md:p-6 text-left"
          style={{
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)',
          }}
          whileHover={{ y: -3, borderColor: 'var(--color-accent)' }}
          transition={{ type: 'spring', stiffness: 350, damping: 24 }}
        >
          {/* Tag + date row */}
          <div className="flex items-center justify-between mb-3">
            <span
              className="font-display text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1"
              style={{
                border: '1px solid var(--color-accent)',
                color: 'var(--color-accent)',
              }}
            >
              {item.tag}
            </span>
            <span className="font-display text-[10px] font-bold tracking-widest uppercase"
              style={{ color: 'var(--color-fg-muted)' }}>
              {item.date}
            </span>
          </div>

          <h3 className="font-display font-bold text-[15px] md:text-[16px] leading-snug"
            style={{ color: 'var(--color-fg)' }}>
            {item.title}
          </h3>
          <p className="text-sm mt-1" style={{ color: 'var(--color-fg-muted)' }}>
            {item.subtitle}
          </p>
          {item.meta && (
            <p className="text-[13px] mt-3 leading-[1.7]" style={{ color: 'var(--color-fg-muted)' }}>
              {item.meta}
            </p>
          )}
          {item.link && (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[11px] font-display font-bold tracking-widest uppercase"
              style={{ color: 'var(--color-accent)' }}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              View Certificate →
            </motion.a>
          )}
        </motion.div>
      </motion.div>

      {/* Desktop centre dot */}
      <div className="hidden md:flex flex-col items-center shrink-0 z-10 pt-6">
        <motion.div
          className="w-3 h-3"
          style={{
            backgroundColor: 'var(--color-accent)',
            border: '3px solid var(--color-bg)',
            outline: '1px solid var(--color-accent)',
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={viewport}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        />
      </div>

      {/* Mobile: left dot */}
      <div
        className="md:hidden absolute left-0 top-6 w-2 h-2"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      {/* Desktop: spacer col for alternate side */}
      <div className={`hidden md:block flex-1 ${isEven ? 'order-1' : ''}`} />
    </div>
  );
}

export default function Milestones() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.85', 'end 0.15'] });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="milestones"
      className="relative w-full py-[110px] md:py-[140px]"
      style={{ backgroundColor: 'var(--color-surface-2)' }}
    >
      <div className="max-w-[1160px] mx-auto px-5 md:px-12">

        {/* Header */}
        <motion.h2
          className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-16"
          style={{ color: 'var(--color-fg)' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Certifications &amp; achievements.
        </motion.h2>

        {/* Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Desktop vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: 'var(--color-border)' }}>
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                height: '100%',
                backgroundColor: 'var(--color-accent)',
                scaleY: lineScaleY,
                opacity: 0.5,
              }}
            />
          </div>

          {/* Mobile left line */}
          <div className="md:hidden absolute left-[3px] top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--color-border)' }} />

          <div className="space-y-6 md:space-y-10">
            {TIMELINE.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
