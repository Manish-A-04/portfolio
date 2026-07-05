import { useEffect, useRef } from 'react';
import bgVideo from '../assets/processed-video-1783274162307.mp4';

export default function BackgroundVideo() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (overlayRef.current) {
        overlayRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        overlayRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-full h-full bg-black overflow-hidden">
      {/* 1. Base Video - infinite loop, muted */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
      />
      
      {/* 2. Spotlight Overlay - Darkens screen but reveals video near mouse */}
      <div 
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle 600px at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.95) 80%)'
        }}
      />

      {/* 3. Soft Vignette Crop - Strongly darkens corners to hide watermarks */}
      <div 
        className="absolute inset-0"
        style={{
          boxShadow: 'inset 0 0 250px 100px rgba(0,0,0,1)'
        }}
      />
    </div>
  );
}
