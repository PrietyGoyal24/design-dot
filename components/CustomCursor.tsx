'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPaintHover, setIsPaintHover] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Set initial positions offscreen to prevent flash
    gsap.set(dot, { x: -100, y: -100, xPercent: -50, yPercent: -50 });
    gsap.set(ring, { x: -100, y: -100, xPercent: -50, yPercent: -50 });

    const xDotTo = gsap.quickTo(dot, 'x', { duration: 0.05, ease: 'power3' });
    const yDotTo = gsap.quickTo(dot, 'y', { duration: 0.05, ease: 'power3' });

    const xRingTo = gsap.quickTo(ring, 'x', { duration: 0.25, ease: 'power2.out' });
    const yRingTo = gsap.quickTo(ring, 'y', { duration: 0.25, ease: 'power2.out' });

    const updateCursorState = (target: HTMLElement) => {
      const inPaintArea = target.closest('[data-cursor="paint"]') !== null;
      setIsPaintHover(inPaintArea);

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.p-action-click') ||
        target.classList.contains('p-action-click') ||
        target.getAttribute('data-hover') !== null;

      if (inPaintArea) {
        gsap.to(ring, { scale: 1.4, duration: 0.25 });
        gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2 });
      } else if (isInteractive) {
        gsap.to(ring, { scale: 1.6, duration: 0.25 });
        gsap.to(dot, { scale: 0.5, opacity: 0.5, duration: 0.25 });
      } else {
        gsap.to(ring, { scale: 1.0, duration: 0.25 });
        gsap.to(dot, { scale: 1.0, opacity: 1, duration: 0.25 });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
      updateCursorState(e.target as HTMLElement);
    };

    const handleMouseDown = () => {
      gsap.to(ring, { scale: 0.7, duration: 0.15 });
      gsap.to(dot, { scale: 0.7, duration: 0.15 });
    };

    const handleMouseUp = () => {
      gsap.to(ring, { scale: 1.0, duration: 0.15 });
      gsap.to(dot, { scale: 1.0, duration: 0.15 });
    };

    const handleMouseOver = (e: MouseEvent) => {
      updateCursorState(e.target as HTMLElement);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className="fixed left-0 top-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000] will-change-transform" 
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={ringRef} 
        className={`fixed left-0 top-0 w-9 h-9 border rounded-full pointer-events-none z-[9999] will-change-transform transition-[border-color,transform] duration-300 flex items-center justify-center ${
          isPaintHover ? 'border-slate-500/80 bg-transparent' : 'border-[var(--accent)]'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {isPaintHover && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-in fade-in zoom-in-75 duration-200">
            {/* Real website paint bucket image cursor asset */}
            <img 
              src="https://dd.mocup.in/assets/web/images/newbucket.png" 
              className="w-5.5 h-5.5 object-contain select-none pointer-events-none" 
              alt="Paint Bucket Cursor" 
            />
          </div>
        )}
      </div>
    </>
  );
}
