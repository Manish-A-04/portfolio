import { motion } from 'framer-motion';
import { stagger, fadeUp } from '../lib/motionVariants';

/*
  Abstract visual — three nested squares rotating at different speeds.
  No text. No labels. Just geometry + the accent color.
*/
function AbstractVisual() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: 340, height: 340 }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Outermost square – very slow CW ── */}
      <motion.div
        className="absolute"
        style={{
          width: 300,
          height: 300,
          border: '1px solid var(--color-border)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {/* Corner accents on this square */}
        {[
          { top: -3, left: -3 },
          { top: -3, right: -3 },
          { bottom: -3, left: -3 },
          { bottom: -3, right: -3 },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-[5px] h-[5px]"
            style={{ backgroundColor: 'var(--color-accent)', opacity: 0.5, ...pos }}
          />
        ))}
      </motion.div>

      {/* ── Middle square – medium CCW ── */}
      <motion.div
        className="absolute"
        style={{
          width: 210,
          height: 210,
          border: '1px solid var(--color-border)',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── Inner square – faster CW, accent border ── */}
      <motion.div
        className="absolute"
        style={{
          width: 120,
          height: 120,
          border: '1px solid var(--color-accent)',
          opacity: 0.45,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── Innermost accent square — pulsing ── */}
      <motion.div
        className="absolute"
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'var(--color-accent)',
          opacity: 0.15,
        }}
        animate={{ scale: [1, 1.35, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Solid center square ── */}
      <div
        className="absolute w-[14px] h-[14px]"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      {/* ── Single orbiting dot on the outer ring ── */}
      <motion.div
        className="absolute"
        style={{ width: 300, height: 300 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="absolute w-[7px] h-[7px]"
          style={{
            backgroundColor: 'var(--color-accent)',
            top: '50%',
            right: -4,
            transform: 'translateY(-50%)',
          }}
        />
      </motion.div>

      {/* ── Orbiting dot on middle ring (opposite phase) ── */}
      <motion.div
        className="absolute"
        style={{ width: 210, height: 210 }}
        animate={{ rotate: 180 - 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="absolute w-[5px] h-[5px]"
          style={{
            backgroundColor: 'var(--color-fg)',
            opacity: 0.35,
            top: '50%',
            left: -3,
            transform: 'translateY(-50%)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// Word-by-word animated heading
function AnimatedHeading({ text, className = '' }) {
  const words = text.split(' ');
  return (
    <motion.h1
      className={className}
      variants={stagger(0.08, 0.1)}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span key={i} className="inline-block mr-[0.25em]" variants={fadeUp}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default function Hero() {
  return (
    <header
      id="intro"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* ── Dot grid — crisp vector SVG pattern, clearly visible in light & dark ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <svg
          className="w-full h-full"
          style={{
            color: 'var(--color-fg)',
            opacity: 'var(--hero-dot-opacity, 0.22)',
          }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-dot-grid"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dot-grid)" />
        </svg>
      </div>

      {/* ── Accent glow — top right ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '50vw',
          height: '50vw',
          maxWidth: 600,
          maxHeight: 600,
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent)',
          opacity: 0.055,
          filter: 'blur(120px)',
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full max-w-[1160px] mx-auto px-5 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: all text ── */}
          <div>
            <AnimatedHeading
              text="Manish A"
              className="font-display font-bold text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.06] tracking-tight mb-6"
            />

            <motion.p
              className="font-display text-sm font-semibold tracking-[0.14em] uppercase mb-7"
              style={{ color: 'var(--color-accent)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
            >
              Data Analyst · Data Scientist · MIS Analyst
            </motion.p>

            <motion.p
              className="text-[16px] leading-[1.9] max-w-[500px] mb-10"
              style={{ color: 'var(--color-fg-muted)' }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              B.Tech graduate in AI &amp; Data Science. I turn raw data into predictive
              models, SQL-backed pipelines, and interactive dashboards — actively seeking
              Data Science, Data Analyst, and MIS Analyst roles.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-[12px] font-display font-bold tracking-widest uppercase text-white"
                style={{ backgroundColor: 'var(--color-accent)' }}
                whileHover={{ opacity: 0.86 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                View Projects
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Manish_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-[12px] font-display font-bold tracking-widest uppercase"
                style={{
                  color: 'var(--color-fg)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'transparent',
                }}
                whileHover={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </motion.a>
            </motion.div>
          </div>

          {/* ── Right: abstract rotating squares — zero text ── */}
          <div className="hidden lg:flex items-center justify-center">
            <AbstractVisual />
          </div>
        </div>
      </div>
    </header>
  );
}
