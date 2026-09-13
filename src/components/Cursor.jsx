import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [visible, setVisible]   = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot follows mouse almost instantly
  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 60, mass: 0.08 });
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 60, mass: 0.08 });

  // Ring lags behind with spring physics
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 22, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 22, mass: 0.5 });

  useEffect(() => {
    // Check if device is desktop and has fine pointer
    const checkIsDesktop = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isWideEnough = window.innerWidth >= 768;
      setIsDesktop(hasFinePointer && isWideEnough);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    // ── Hover detection: walk the DOM tree up from the event target ──
    const isInteractive = (el) => {
      while (el && el !== document.body) {
        const tag = el.tagName;
        if (
          tag === 'A' || tag === 'BUTTON' ||
          tag === 'INPUT' || tag === 'TEXTAREA' ||
          tag === 'SELECT' || tag === 'LABEL' ||
          el.getAttribute('role') === 'button' ||
          el.hasAttribute('data-cursor-hover') ||
          el.getAttribute('tabindex') === '0'
        ) {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    };

    let isTouchActive = false;

    const onTouchStart = () => {
      isTouchActive = true;
      setVisible(false);
    };

    const onMove = (e) => {
      // Disregard synthetic mouse events triggered by touch taps or mobile screens
      if (isTouchActive || window.innerWidth < 768) {
        setVisible(false);
        return;
      }
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
      setHovering(isInteractive(e.target));
    };

    const onMouseOver = () => {
      isTouchActive = false;
    };

    const onLeave  = () => { setVisible(false); setHovering(false); };
    const onEnter  = () => { if (!isTouchActive && window.innerWidth >= 768) setVisible(true); };
    const onDown   = () => { if (!isTouchActive) setClicking(true); };
    const onUp     = () => { setClicking(false); };

    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('mouseover',  onMouseOver,  { passive: true });
    document.addEventListener('mousemove',  onMove,       { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mousedown',  onDown);
    document.addEventListener('mouseup',    onUp);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('mouseover',  onMouseOver);
      document.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mousedown',  onDown);
      document.removeEventListener('mouseup',    onUp);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  const ringSize  = hovering ? 38 : clicking ? 20 : 26;
  const dotSize   = hovering ? 3  : clicking ? 8  : 4;
  const ringOpacity = visible ? (hovering ? 0.8 : 0.45) : 0;
  const dotOpacity  = visible ? 1 : 0;

  return (
    <div className="hidden md:block">
      {/* ── Outer ring ── */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width:  ringSize,
          height: ringSize,
          border: '1px solid var(--color-accent)',
          opacity: ringOpacity,
          // Framer Motion handles the ring position — no CSS transition on position
          transition: 'width 0.18s ease, height 0.18s ease, opacity 0.15s ease',
        }}
      />

      {/* ── Inner dot ── */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width:  dotSize,
          height: dotSize,
          backgroundColor: 'var(--color-accent)',
          opacity: dotOpacity,
          transition: 'width 0.15s ease, height 0.15s ease, opacity 0.15s ease',
        }}
      />
    </div>
  );
}
