import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../lib/motionVariants';

const LINKS = [
  {
    label: 'Email',
    handle: 'manissh2004@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=manissh2004@gmail.com',
    cta: 'Send Email',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'manish-a-47a791326',
    href: 'https://linkedin.com/in/manish-a-47a791326',
    cta: 'Connect',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    handle: 'Manish-A-04',
    href: 'https://github.com/Manish-A-04',
    cta: 'View Code',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
];

function ContactCard({ link, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col gap-4 p-6 overflow-hidden"
      style={{
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
      variants={fadeUp}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 350, damping: 24 }}
    >
      {/* Accent left bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ backgroundColor: 'var(--color-accent)' }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        initial={{ scaleY: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Icon */}
      <motion.div
        style={{ color: hovered ? 'var(--color-accent)' : 'var(--color-fg-muted)' }}
        transition={{ duration: 0.2 }}
      >
        {link.icon}
      </motion.div>

      {/* Text */}
      <div className="flex-1">
        <p className="font-display font-bold text-sm" style={{ color: 'var(--color-fg)' }}>
          {link.label}
        </p>
        <p className="text-[11px] mt-0.5 break-all" style={{ color: 'var(--color-fg-muted)' }}>
          {link.handle}
        </p>
      </div>

      {/* CTA */}
      <motion.div
        className="flex items-center gap-1.5"
        animate={{ x: hovered ? 5 : 0 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <span
          className="text-[11px] font-display font-bold tracking-widest uppercase"
          style={{ color: hovered ? 'var(--color-accent)' : 'var(--color-fg-muted)' }}
        >
          {link.cta} →
        </span>
      </motion.div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-[110px] md:py-[140px] overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Decorative background word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.p
          className="font-display font-bold whitespace-nowrap"
          style={{
            fontSize: 'clamp(6rem,20vw,20rem)',
            lineHeight: 1,
            color: 'var(--color-fg)',
            opacity: 0.025,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.025, y: 0 }}
          viewport={viewport}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          CONNECT
        </motion.p>
      </div>

      <div className="relative max-w-[1160px] mx-auto px-5 md:px-12">

        {/* Heading */}
        <motion.div
          className="mb-16"
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-tight max-w-2xl"
            style={{ color: 'var(--color-fg)' }}
          >
            Let's build something{' '}
            <span style={{ color: 'var(--color-accent)' }}>meaningful.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-[15px] md:text-[17px] leading-[1.85] max-w-lg"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            I'm always interested in new projects, technical challenges, and collaborations.
            Whether it's a data pipeline, an ML system, or just a conversation — reach out.
          </motion.p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-0"
          style={{ border: '1px solid var(--color-border)' }}
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {LINKS.map((link, i) => (
            <div
              key={link.label}
              style={{
                borderRight: i < LINKS.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              <ContactCard link={link} index={i} />
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-[13px]" style={{ color: 'var(--color-fg-muted)' }}>
            © 2025 Manish A · Built with React &amp; Framer Motion
          </p>
          <motion.a
            href="#intro"
            className="font-display text-[11px] font-bold tracking-widest uppercase"
            style={{ color: 'var(--color-fg-muted)' }}
            whileHover={{ color: 'var(--color-accent)', y: -2 }}
            transition={{ duration: 0.15 }}
          >
            Back to top ↑
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
