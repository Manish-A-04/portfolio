import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { label: 'Home',       id: 'intro' },
  { label: 'About',      id: 'about' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Milestones', id: 'milestones' },
  { label: 'Contact',    id: 'contact' },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('intro');
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = 'intro';
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      });
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
      if (nearBottom) current = NAV_ITEMS[NAV_ITEMS.length - 1].id;
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Glass backdrop */}
        <motion.div
          className="absolute inset-0 backdrop-blur-lg"
          style={{
            backgroundColor: theme === 'dark'
              ? 'rgba(12,12,14,0.9)'
              : 'rgba(245,245,243,0.9)',
          }}
        />

        {/* Bottom border that appears on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            opacity: borderOpacity,
            backgroundColor: 'var(--color-border)',
          }}
        />

        <nav className="relative max-w-[1160px] mx-auto px-5 md:px-12 flex items-center justify-between h-16">

          {/* Wordmark — just the name */}
          <motion.a
            href="#intro"
            onClick={closeMenu}
            className="font-display font-bold text-[15px] tracking-[0.12em] uppercase z-10"
            style={{ color: 'var(--color-fg)' }}
            whileHover={{ color: 'var(--color-accent)' }}
            transition={{ duration: 0.2 }}
          >
            Manish A
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, id }) => (
              <div key={id} className="relative">
                <motion.a
                  href={`#${id}`}
                  onClick={closeMenu}
                  className="relative px-4 py-2 text-[13px] font-display font-semibold tracking-widest uppercase"
                  style={{
                    color: active === id ? 'var(--color-accent)' : 'var(--color-fg-muted)',
                  }}
                  whileHover={{ color: 'var(--color-accent)' }}
                  transition={{ duration: 0.15 }}
                >
                  {label}
                  {active === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-px"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </motion.a>
              </div>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center cursor-pointer"
              style={{
                color: 'var(--color-fg-muted)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'transparent',
              }}
              whileHover={{ color: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.15 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -20, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Hire me CTA */}
            <motion.a
              href="#contact"
              className="hidden md:flex items-center px-5 h-9 text-[12px] font-display font-bold tracking-widest uppercase text-white"
              style={{ backgroundColor: 'var(--color-accent)' }}
              whileHover={{ opacity: 0.85 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Hire Me
            </motion.a>

            {/* Hamburger */}
            <motion.button
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
              style={{ border: '1px solid var(--color-border)' }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.92 }}
            >
              <motion.span
                className="block w-[18px] h-px"
                style={{ backgroundColor: 'var(--color-fg)' }}
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28 }}
              />
              <motion.span
                className="block w-[18px] h-px"
                style={{ backgroundColor: 'var(--color-fg)' }}
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-[18px] h-px"
                style={{ backgroundColor: 'var(--color-fg)' }}
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28 }}
              />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: 'var(--color-bg)' }}
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 48px) 32px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 48px) 32px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 48px) 32px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.nav
              className="flex flex-col items-center gap-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            >
              {NAV_ITEMS.map(({ label, id }) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={closeMenu}
                  className="font-display font-bold text-[2.5rem] tracking-tight leading-none"
                  style={{ color: active === id ? 'var(--color-accent)' : 'var(--color-fg)' }}
                  variants={{
                    hidden:  { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  whileHover={{ x: 10, color: 'var(--color-accent)' }}
                >
                  {label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
