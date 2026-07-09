import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Intro',      id: 'intro' },
  { label: 'About',      id: 'about' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Milestones', id: 'milestones' },
  { label: 'Contact',    id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('intro');

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      let current = 'intro';
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        // Activate when the section's top is at or above the upper 40% of the viewport
        if (el && el.offsetTop <= scrollY + window.innerHeight * 0.4) {
          current = id;
        }
      });

      // When near the very bottom of the page, always highlight the last section
      const nearBottom =
        window.innerHeight + scrollY >= document.body.scrollHeight - 80;
      if (nearBottom) {
        current = NAV_ITEMS[NAV_ITEMS.length - 1].id;
      }

      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const linkBase = 'font-display font-bold uppercase tracking-widest text-sm transition-all duration-200';
  const desktopActive = 'text-accent opacity-100';
  const desktopIdle   = 'opacity-40 hover:opacity-100';

  return (
    <>
      {/* ── Desktop Vertical Sidebar ── */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-50">
        {NAV_ITEMS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            className={`${linkBase} ${active === id ? desktopActive : desktopIdle}`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* ── Mobile Top Bar ── */}
      <nav className="fixed top-0 left-0 w-full z-[9999] bg-black border-b border-white/20 xl:hidden flex justify-between items-center px-6 h-16 shadow-2xl">
        <a
          href="#intro"
          onClick={(e) => { e.preventDefault(); scrollTo('intro'); }}
          className="font-display tracking-wide text-xl font-bold text-accent"
        >
          M.
        </a>
        <button
          className="text-accent p-2 bg-white/5 rounded-lg border border-white/10 active:bg-white/10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* ── Mobile Full-screen Menu ── */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 xl:hidden">
          {NAV_ITEMS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              className={`font-display tracking-widest font-bold uppercase text-2xl transition-colors duration-200 ${
                active === id ? 'text-accent' : 'text-fg/60 hover:text-accent'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
