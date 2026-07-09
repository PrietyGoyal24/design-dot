'use client';

import { useEffect, useRef, useState } from 'react';

const THEMES = [
  { name: 'Navy', background: '#131226', accent: '#f58331' },
  { name: 'Sky Blue', background: '#1dcdff', accent: '#f58331' },
  { name: 'Yellow', background: '#ffe315', accent: '#ff226d' },
  { name: 'Pink', background: '#ff226d', accent: '#9f2de4' },
  { name: 'Purple', background: '#9f2de4', accent: '#1dcdff' },
];

export default function PaintSwitcher() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cW = window.innerWidth;
    let cH = window.innerHeight;
    let currentTargetColor = THEMES[0].background;
    let localThemeIndex = 0;
    let timeouts: NodeJS.Timeout[] = [];
    let resetTimer: NodeJS.Timeout | null = null;
    let animationFrameId: number | null = null;

    const resizeCanvas = () => {
      cW = window.innerWidth;
      cH = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = cW * dpr;
      canvas.height = cH * dpr;
      ctx.scale(dpr, dpr);
      
      // Re-fill on resize to avoid flashes
      ctx.fillStyle = currentTargetColor;
      ctx.fillRect(0, 0, cW, cH);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Circle {
      x: number;
      y: number;
      r: number;
      fill: string;
      stroke?: { width: number; color: string };
      opacity: number;
      targetR?: number;
      duration?: number;
      elapsed: number;
      easing: string;

      constructor(opts: any) {
        this.x = opts.x;
        this.y = opts.y;
        this.r = opts.r || 0;
        this.fill = opts.fill;
        this.stroke = opts.stroke;
        this.opacity = opts.opacity !== undefined ? opts.opacity : 1;
        this.targetR = opts.targetR;
        this.duration = opts.duration || 1000;
        this.elapsed = 0;
        this.easing = opts.easing || 'easeOutExpo';
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0, this.r), 0, 2 * Math.PI, false);
        if (this.stroke) {
          ctx.strokeStyle = this.stroke.color;
          ctx.lineWidth = this.stroke.width;
          ctx.stroke();
        }
        if (this.fill) {
          ctx.fillStyle = this.fill;
          ctx.fill();
        }
        ctx.closePath();
        ctx.globalAlpha = 1;
      }
    }

    const calcPageFillRadius = (x: number, y: number) => {
      const l = Math.max(x, cW - x);
      const h = Math.max(y, cH - y);
      return Math.sqrt(l * l + h * h);
    };

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const triggerRipple = (x: number, y: number, nextColor: string, accentColor: string) => {
      timeouts.forEach(clearTimeout);
      timeouts = [];
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      const startColor = currentTargetColor;
      currentTargetColor = nextColor;

      const targetR = calcPageFillRadius(x, y);
      const rippleSize = Math.min(200, cW * 0.4);
      const duration = Math.max(targetR * 1.2, 800);

      // Page Fill Circle
      const pageFill = new Circle({
        x,
        y,
        r: 0,
        fill: nextColor,
        targetR,
        duration,
        easing: 'easeOutQuart',
      });

      // Expand Ripple Ring
      const ripple = new Circle({
        x,
        y,
        r: 0,
        fill: 'transparent',
        stroke: { width: 3, color: accentColor },
        opacity: 1,
        targetR: rippleSize,
        duration: 900,
        easing: 'easeOutExpo',
      });

      // Particle explosions
      const particles: Circle[] = [];
      for (let i = 0; i < 24; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * rippleSize + 50;
        const particle = new Circle({
          x,
          y,
          r: Math.random() * 12 + 6,
          fill: accentColor,
          opacity: 1,
          duration: Math.random() * 500 + 800,
          easing: 'easeOutExpo',
        });
        (particle as any).targetX = x + Math.cos(angle) * speed;
        (particle as any).targetY = y + Math.sin(angle) * speed;
        (particle as any).startX = x;
        (particle as any).startY = y;
        particles.push(particle);
      }

      const startTime = performance.now();

      const animateStep = (now: number) => {
        const elapsed = now - startTime;

        // Animate Page Fill
        const fillProgress = Math.min(1, elapsed / pageFill.duration!);
        const fillEase = easeOutQuart(fillProgress);
        pageFill.r = pageFill.targetR! * fillEase;

        // Animate Ripple
        const rippleProgress = Math.min(1, elapsed / ripple.duration!);
        const rippleEase = easeOutExpo(rippleProgress);
        ripple.r = ripple.targetR! * rippleEase;
        ripple.opacity = 1 - rippleEase;

        // Animate Particles
        particles.forEach(p => {
          const pProgress = Math.min(1, elapsed / p.duration!);
          const pEase = easeOutExpo(pProgress);
          p.x = (p as any).startX + ((p as any).targetX - (p as any).startX) * pEase;
          p.y = (p as any).startY + ((p as any).targetY - (p as any).startY) * pEase;
          p.r = Math.max(0, (1 - pEase) * (p as any).r);
          p.opacity = 1 - pEase;
        });

        // Draw everything
        ctx.fillStyle = startColor;
        ctx.fillRect(0, 0, cW, cH);

        pageFill.draw();
        ripple.draw();
        particles.forEach(p => p.draw());

        if (fillProgress < 1 || rippleProgress < 1 || particles.some(p => p.r > 0)) {
          animationFrameId = requestAnimationFrame(animateStep);
        } else {
          ctx.fillStyle = nextColor;
          ctx.fillRect(0, 0, cW, cH);
        }
      };

      animationFrameId = requestAnimationFrame(animateStep);
    };

    const triggerFade = (nextColor: string) => {
      timeouts.forEach(clearTimeout);
      timeouts = [];
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      const startColor = currentTargetColor;
      currentTargetColor = nextColor;

      const startTime = performance.now();
      const duration = 600; // Smooth 600ms CSS-like crossfade

      const animateFade = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, Math.max(0, elapsed / duration));
        const ease = easeOutQuart(progress);

        // Draw the initial background
        ctx.fillStyle = startColor;
        ctx.fillRect(0, 0, cW, cH);
        
        // Overlay the new color with an easing opacity
        ctx.globalAlpha = ease;
        ctx.fillStyle = nextColor;
        ctx.fillRect(0, 0, cW, cH);
        ctx.globalAlpha = 1;

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateFade);
        } else {
          ctx.fillStyle = nextColor;
          ctx.fillRect(0, 0, cW, cH);
        }
      };

      animationFrameId = requestAnimationFrame(animateFade);
    };

    const performThemeCycle = (x: number, y: number) => {
      localThemeIndex = (localThemeIndex + 1) % THEMES.length;
      const nextTheme = THEMES[localThemeIndex];
      
      document.documentElement.style.setProperty('--background', nextTheme.background);
      document.documentElement.style.setProperty('--accent', nextTheme.accent);
      triggerRipple(x, y, nextTheme.background, nextTheme.accent);

      if (resetTimer) clearTimeout(resetTimer);
      
      // Auto reset to default theme after 1 second
      resetTimer = setTimeout(() => {
        localThemeIndex = 0;
        const baseTheme = THEMES[0];
        document.documentElement.style.setProperty('--background', baseTheme.background);
        document.documentElement.style.setProperty('--accent', baseTheme.accent);
        triggerFade(baseTheme.background);
      }, 1000);
    };

    (window as any).triggerThemeRipple = (x: number, y: number, nextColor: string, accentColor: string) => {
      triggerRipple(x, y, nextColor, accentColor);
    };

    (window as any).cycleTheme = (x: number, y: number) => {
      performThemeCycle(x, y);
    };

    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Only change color if clicking within the hero paint area
      if (!target.closest('[data-cursor="paint"]')) {
        return;
      }

      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        return;
      }

      performThemeCycle(e.clientX, e.clientY);
    };

    document.addEventListener('mousedown', handleDocumentClick);

    // Initial canvas paint fill
    ctx.fillStyle = currentTargetColor;
    ctx.fillRect(0, 0, cW, cH);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousedown', handleDocumentClick);
      timeouts.forEach(clearTimeout);
      if (resetTimer) clearTimeout(resetTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      delete (window as any).triggerThemeRipple;
      delete (window as any).cycleTheme;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none"
      style={{ transition: 'background-color 0.8s cubic-bezier(0.25, 1, 0.5, 1)' }}
    />
  );
}
